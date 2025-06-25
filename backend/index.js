import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './dbConfig/dbConnection.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authenticationRoutes from './Routes/auth.js';
import stucomRoutes from './Routes/stucomRoutes.js';
import errorMiddleware from './Middlewares/errorMiddleware.js';
import resultRoutes from './Routes/result.js';
import saveDataRoutes from './Routes/saveData.js';
import coordinatorRoutes from './Routes/coordinator.js';
import companyRoutes from './Routes/company.js';

import { Server } from 'socket.io';
import http from 'http';

// Load environment variables
dotenv.config();
dbConnect();
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Update this to match your front-end URL
    credentials: true,
  }
});

// Middleware
app.use(cookieParser());
app.use(express.json());

// CORS configuration for Express and Socket.IO
const corsOptions = {
  origin: 'http://localhost:5173', // Update this to match your front-end URL
  credentials: true,
};

app.use(cors(corsOptions)); // Express CORS
io.use((socket, next) => {
  const origin = socket.request.headers.origin;
  if (origin === 'http://localhost:5173') {
    return next();
  }
  return next(new Error('CORS Error'));
});

// Error Middleware
app.use(errorMiddleware);

// Default route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Default route has been running successfully',
  });
});

// Routes
app.use('/auth', authenticationRoutes);
app.use('/getdata', stucomRoutes);
app.use('/result', resultRoutes);
app.use('/savedata', saveDataRoutes);
app.use('/coordinator', coordinatorRoutes);
app.use('/company', companyRoutes);


let messages = []; // This is a temporary storage, you could use a database to persist messages

// Handle WebSocket connection
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Emit the message history when a new user connects
  socket.emit('load messages', messages);

  // Listen for new messages
  socket.on('send message', (data) => {
    const timestamp = new Date().toLocaleString(); // Format timestamp
    const message = { username: data.username, text: data.message, timestamp };

    messages.push(message); // Store message in memory (or save to a database)
    io.emit('send message', message); // Broadcast to all users
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

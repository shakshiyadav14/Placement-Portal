import express from 'express';
const router = express.Router();
import {saveData} from "../Controllers/studentCompanyController.js"; // Import the saveData controller

router.post('/student/company', saveData); // Route to save data

export default router; // Export the router

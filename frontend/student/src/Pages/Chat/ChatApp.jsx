import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

// Connect to WebSocket server
const socket = io("http://localhost:5000");

function ChatApp() {
    const [name, setName] = useState("Sameer");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null); // To scroll to the latest message

    useEffect(() => {
        // Listen for previous messages from the server when the component mounts
        socket.on("load messages", (history) => {
            setMessages(history);
        });

        // Listen for incoming new messages
        socket.on("send message", (newMessage) => {
            setMessages((prev) => [...prev, newMessage]);
        });

        // Clean up when component unmounts
        return () => {
            socket.off("load messages");
            socket.off("send message");
        };
    }, []);

    useEffect(() => {
        // Scroll to the bottom of the chat when a new message is received
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        if (message.trim()) {
            socket.emit("send message", { username: name, message });
            setMessage(""); // Clear the message input
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
            <h2 className="text-xl font-semibold mt-2">Discuss Your Thoughts</h2>

            {/* Display Messages */}
            <div className="mt-6 p-4 h-fit bg-gray-700 rounded-md w-3/4 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-2">Messages</h3>
                {messages.map((msg, index) => (
                    <div key={index} className="bg-gray-600 p-3 rounded-md mt-2">
                        <strong>{msg.username}:</strong> {msg.text} <br />
                        <small className="text-gray-400">{msg.timestamp}</small>
                    </div>
                ))}
                <div ref={messagesEndRef} /> {/* Scroll to latest message */}
            </div>
            <div className="flex w-3/4 justify-center">
                {/* User Name Input
                <input
                    className="border border-gray-400 rounded-md mt-5 p-2 w-64 text-black"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> */}

                {/* Message Input */}
                <form className="flex items-center mt-5 mb-5 w-full justify-center" onSubmit={sendMessage}>
                    <input
                        className="border bg-gray-600 border-gray-400 rounded-md w-2/3 mt-2 p-2 text-white"
                        type="text"
                        placeholder="Type a message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="bg-gray-700 rounded-full p-2 text-white mt-2 ml-2 hover:bg-gray-600">
                        <img src="\images\send.png" alt="Send" className="w-6 invert" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatApp;

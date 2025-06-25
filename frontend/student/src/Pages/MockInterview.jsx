import React from "react";
import { Card, CardContent } from "../Components/Card";
import { Avatar } from "../Components/Avatar";
import { Badge } from "../Components/Badge";

const mockData = [
    {
      name: "John Doe",
      branch: "Computer Science",
      batch: 2025,
      email:"abcxyz@gmail.com",
      image: "./images/Harshit.jpg",
      internAt: "Google",
      placedAt: "Microsoft",
      domains: ["Web Development", "Machine Learning"],
    },
    {
      name: "Jane Smith",
      branch: "Electronics",
      batch: 2025,
      email:"abcxyz@gmail.com",
      image: "./images/Harshit.jpg",
      internAt: "Amazon",
      placedAt: "Facebook",
      domains: ["Embedded Systems", "IoT"],
    },
    {
      name: "Alice Johnson",
      branch: "Mechanical Engineering",
      batch: 2025,
      email:"abcxyz@gmail.com",
      image: "./images/Harshit.jpg",
      internAt: "Tesla",
      placedAt: "SpaceX",
      domains: ["Robotics", "Automation"],
    },
    {
      name: "Bob Brown",
      branch: "Information Technology",
      batch: 2025,
      email:"abcxyz@gmail.com",
      image: "./images/Harshit.jpg",
      internAt: "Netflix",
      placedAt: "Apple",
      domains: ["Cybersecurity", "Cloud Computing"],
    },
    {
        name: "Alice Johnson",
        branch: "Mechanical Engineering",
        batch: 2025,
        email:"abcxyz@gmail.com",
        image: "./images/Harshit.jpg",
        internAt: "Tesla",
        placedAt: "SpaceX",
        domains: ["Robotics", "Automation"],
      },
      {
        name: "Bob Brown",
        branch: "Information Technology",
        batch: 2025,
        email:"abcxyz@gmail.com",
        image: "./images/Harshit.jpg",
        internAt: "Netflix",
        placedAt: "Apple",
        domains: ["Cybersecurity", "Cloud Computing"],
      }
  ];
  
  const MockInterviewHelp = () => {
    return (
      <div className="p-6 bg-gray-900 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-center">Mock Interview Help from Seniors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockData.map((senior, index) => (
            <Card key={index} className="p-4 bg-gray-800 border border-gray-700 flex flex-col items-center text-center">
              <CardContent className="flex flex-col items-center">
                <div className="flex justify-center">
                  <Avatar className="w-24 h-24 mb-4" src={senior.image} alt={senior.name} />
                </div>
                <h2 className="text-lg font-semibold text-white">{senior.name}</h2>
                <p className="text-sm text-gray-400">{senior.branch}</p>
                <p className="text-sm text-gray-400">{senior.batch}</p>
                <p className="text-sm text-gray-400">{senior.email}</p>
                <p className="text-sm text-white">Interned at: <span className="font-medium text-yellow-400">{senior.internAt}</span></p>
                <p className="text-sm text-white">Placed at: <span className="font-medium text-green-400">{senior.placedAt}</span></p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {senior.domains.map((domain, i) => (
                    <Badge key={i} className="bg-blue-600 text-white px-2 py-1 rounded-lg">{domain}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default MockInterviewHelp;
  
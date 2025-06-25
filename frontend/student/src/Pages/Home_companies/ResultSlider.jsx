import React, { useState, useEffect } from "react";

const ResultSlider = ({ student = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [slide, setSlide] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    if (!student.length) return;

    const interval = setInterval(() => {
      setFade(false);
      setSlide(true);
      setRotate(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % student.length);
        setFade(true);
        setSlide(false);
        setRotate(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [student]);

  if (!student.length) {
    return (
      <div className="text-center text-2xl p-6 text-gray-700">
        No students available
      </div>
    );
  }

  const currentStudent = student[currentIndex];

  return (
<div className="relative h-full w-8/12 max-w-5xl mx-auto p-10 bg-gradient-to-r from-blue-400 to-gray-900 text-white rounded-lg shadow-lg transform transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-blue-600 hover:scale-105">
<div
        className={`flex flex-col h-full justify-center md:flex-row items-center gap-12 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`md:w-56 md:h-56 bg-white object-contain rounded-full border-4 border-white shadow-md flex-shrink-0 flex items-center justify-center transform transition-transform duration-500 ${
            slide ? "-translate-x-10" : "translate-x-0"
          } ${rotate ? "rotate-180" : "rotate-0"}`}
        >
          <img
            src={currentStudent.companyImage}
            alt={`${currentStudent.name} Logo`}
            className="w-8/12"
          />
        </div>

        <div className="flex-1 ml-12 space-y-4 text-center md:text-center">
          <h2 className="text-4xl text-center font-extrabold mb-4">
            {currentStudent.name}
          </h2>
          <div className="flex-col md:grid-cols-3 gap-y-4 text-lg">
            <div>
              <span className="font-bold">Roll No:</span> {currentStudent.rollNo}
            </div>
            <div>
              <span className="font-bold">Batch:</span> {currentStudent.batch}
            </div>
            <div>
              <span className="font-bold">Job Role:</span> {currentStudent.job_profile}
            </div>
          </div>
        </div>

        <div
          className={`flex-shrink-0 transform transition-transform duration-500 ${
            slide ? "translate-x-10" : "translate-x-0"
          } ${rotate ? "-rotate-180" : "rotate-0"}`}
        >
          <img
            src={currentStudent.studentImage}
            alt={`${currentStudent.name}`}
            className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {student.map((_, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-4 h-4" : "bg-gray-400 w-3 h-3"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ResultSlider;
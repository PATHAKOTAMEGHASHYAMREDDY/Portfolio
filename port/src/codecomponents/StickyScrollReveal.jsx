"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

// Import images
import smartRideImage from "../assets/images/DynamicCarPooling.png";
import chatHiveImage from "../assets/images/ChatHive.png";
import healthcareImage from "../assets/images/Health Care.png";
import alzheimerParkinsonImage from "../assets/images/AlzheimerParkinson.png";
import chitrakarImage from "../assets/images/Chitrakar.png";
import retinopathyImage from "../assets/images/Retinopathy.png";
import scholarSpendImage from "../assets/images/ScholarSpend.png";

const content = [
  {
    title: "Smart Ride - Dynamic Car Sharing Platform",
    description:
      "Smart Ride is a Java full-stack dynamic car-sharing platform that connects drivers and passengers traveling on the same route. It features real-time updates, secure payments, route matching, reviews, and admin verification for trusted ride-sharing. Built with Spring Boot, React, PostgreSQL, it promotes safe, affordable, and eco-friendly travel.",
    content: (
      <div className="h-full w-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex-1 min-h-0 p-2">
          <img
            src={smartRideImage}
            alt="Smart Ride Car Sharing Platform"
            className="h-full w-full object-fit object-center rounded-lg"
          />
        </div>
        <div className="p-4 bg-white flex-shrink-0">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/Springboard-Internship-2025/Development-of-a-Dynamic-Ride-Sharing-and-Carpooling-Platform_August_2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://dynamic-car-pooling-fe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8s0-6-6-6zM6 20V4h7v5h5v11H6z" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "ChatHive - Real-Time Group Chat",
    description:
      "A real-time group chat system for study rooms with persistent messages, file sharing, mentions, and emoji reactions. Uses WebSockets for instant updates and presence indicators. Includes moderation tools for room owners and seamless message history for all users.",
    content: (
      <div className="h-full w-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex-1 min-h-0 p-2">
          <img
            src={chatHiveImage}
            alt="ChatHive Real-Time Group Chat"
            className="h-full w-full object-fit object-center rounded-lg"
          />
        </div>
        <div className="p-4 bg-white flex-shrink-0">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/PATHAKOTAMEGHASHYAMREDDY/Hiive.co-Fe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://hiiveco.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8s0-6-6-6zM6 20V4h7v5h5v11H6z" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Healthcare Appointment Portal",
    description:
      "Built a full-stack web app for managing doctors, patients, and appointments using Java, Spring Boot, PostgreSQL, and React. Implemented secure authentication, role-based dashboards, and appointment booking with real-time chat between doctors and patients.",
    content: (
      <div className="h-full w-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex-1 min-h-0 p-2">
          <img
            src={healthcareImage}
            alt="Healthcare Portal"
            className="h-full w-full object-fit object-center rounded-lg"
          />
        </div>
        <div className="p-4 bg-white flex-shrink-0">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/PATHAKOTAMEGHASHYAMREDDY/Health_Care"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://health-care-six-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8s0-6-6-6zM6 20V4h7v5h5v11H6z" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Chitrakar - Artist Platform",
    description:
      "Developed a MERN stack web application enabling seamless interaction between artists and customers. Implemented real-time chat system using REST APIs and role-based authentication with separate dashboards. Built image upload functionality with Cloudinary integration.",
    content: (
      <div className="h-full w-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex-1 min-h-0 p-2">
          <img
            src={chitrakarImage}
            alt="Chitrakar Platform"
            className="h-full w-full object-fit object-center rounded-lg"
          />
        </div>
        <div className="p-4 bg-white flex-shrink-0">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/PATHAKOTAMEGHASHYAMREDDY/ChitraKara"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://chitrakar-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8s0-6-6-6zM6 20V4h7v5h5v11H6z" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "ScholarSpend - Finance Tracker",
    description:
      "Created a student-focused finance tracker with graphical expense visualization using React.js, Node.js, Express.js, and MongoDB. Integrated Gemini API with OCR for bill scanning and automated expense calculation with chatbot for financial advice.",
    content: (
      <div className="h-full w-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex-1 min-h-0 p-2">
          <img
            src={scholarSpendImage}
            alt="ScholarSpend Finance Tracker"
            className="h-full w-full object-fit object-center rounded-lg"
          />
        </div>
        <div className="p-4 bg-white flex-shrink-0">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/PATHAKOTAMEGHASHYAMREDDY/ScholarSpend"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://scholar-spend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8s0-6-6-6zM6 20V4h7v5h5v11H6z" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Diabetic Retinopathy Detection",
    description:
      "Developed full-stack ML app for diabetic retinopathy detection using CAPSET pipeline with React, Tailwind, Flask, and PostgreSQL. Implemented image processing backend and integrated chatbot support with automated PDF diagnostic reports.",
    content: (
      <div className="h-full w-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex-1 min-h-0 p-2">
          <img
            src={retinopathyImage}
            alt="Retinopathy Detection"
            className="h-full w-full object-fit object-center rounded-lg"
          />
        </div>
        <div className="p-4 bg-white flex-shrink-0">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/PATHAKOTAMEGHASHYAMREDDY/Retinopathy-FE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://retinopathy-murex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8s0-6-6-6zM6 20V4h7v5h5v11H6z" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Parkinson & Alzheimer Prediction",
    description:
      "Built a deep learning model using EfficientNetB0 for classifying brain MRI scans to predict Alzheimer's and Parkinson's diseases with 98% accuracy. Applied transfer learning and fine-tuning techniques with full-stack React and Flask application.",
    content: (
      <div className="h-full w-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex-1 min-h-0 p-2">
          <img
            src={alzheimerParkinsonImage}
            alt="Parkinson & Alzheimer Prediction - Brain Disease Detection"
            className="h-full w-full object-fit object-center rounded-lg"
            onError={(e) => {
              console.error("Failed to load Parkinson & Alzheimer image:", e);
              e.target.style.backgroundColor = "#f3f4f6";
              e.target.style.display = "flex";
              e.target.style.alignItems = "center";
              e.target.style.justifyContent = "center";
              e.target.innerHTML =
                '<div style="text-align: center; color: #6b7280;">Parkinson & Alzheimer<br/>Prediction Image</div>';
            }}
          />
        </div>
        <div className="p-4 bg-white flex-shrink-0">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/PATHAKOTAMEGHASHYAMREDDY/cap-be"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://alzhiemerparkinson.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8s0-6-6-6zM6 20V4h7v5h5v11H6z" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <section
      id="projects"
      className="w-full py-20 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of full-stack applications, machine learning
            projects, and innovative solutions
          </p>
        </div>
        <StickyScroll content={content} />
      </div>
    </section>
  );
}

import Home from "./components/Home";
import MyCourses from "./components/MyCourses";
import Classroom from "./components/Classroom";
import Dashboard from "./components/Dashboard";
import Noticeboard from "./components/Noticeboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './index.css';

function App() {


  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "React Basics",
      description: "Learn the basics of React",
      image: "src/assets/react-img2.png",
    },
    {
      id: 2,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript",
      image: "src/assets/javascript.jpg",
    },
    {
      id: 3,
      title: "CSS Masterclass",
      description: "Become a CSS expert",
      image: "src/assets/css.png",
    },
    {
      id: 4,
      title: "HTML for Beginners",
      description: "Start your web development journey",
      image: "src/assets/html.jpg",
    },
    {
      id: 5,
      title: "Node.js Fundamentals",
      description: "Understand the basics of Node.js",
      image: "src/assets/node.jpg",
    },
    {
      id: 6,
      title: "Introduction to Python",
      description: "Learn Python for backend development",
      image: "src/assets/python.png",
    },
    {
      id: 7,
      title: "Django Web Development",
      description: "Build web applications with Django framework (Python)",
      image: "src/assets/django.png",
    },
    {
      id: 8,
      title: "Machine Learning Basics",
      description: "Introduction to machine learning concepts",
      image: "src/assets/ml.jpg",
    },
    {
      id: 9,
      title: "Digital Marketing",
      description: "Learn the fundamentals of digital marketing",
      image: "src/assets/dm.png",
    },
    {
      id: 10,
      title: "Graphic Design",
      description: "Create stunning graphics and designs and be a master",
      image: "src/assets/gd.webp",
    },
    {
      id: 11,
      title: "Cybersecurity Essentials",
      description: "Understand the basics of cybersecurity",
      image: "src/assets/ss.jpg",
    },
    {
      id: 12,
      title: "Cloud Computing Basics",
      description: "Introduction to cloud computing concepts",
      image: "src/assets/cloud.webp",
    },
    {
      id: 13,
      title: "UI/UX Design Principles",
      description: "Learn the principles of UI/UX design for web development",
      image: "src/assets/ui.png",
    },
    {
      id: 14,
      title: "Data Analysis with Excel",
      description: "Analyze data using Excel tools and functions",
      image: "src/assets/dae.jpg",
    },
    {
      id: 15,
      title: "Mobile App Development",
      description: "Create mobile applications for iOS and Android",
      image: "src/assets/mb.png",
    }
  ]);

  const [purchasedCourses, setPurchasedCourses] = useState([]);

  const buyCourse = (courseId) => {
    const courseToBuy = courses.find(c => c.id === courseId);
    if (courseToBuy) {
      setPurchasedCourses([...purchasedCourses, courseToBuy]);
      setCourses(courses.filter(c => c.id !== courseId));
    }
  };

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home courses={courses} buyCourse={buyCourse}/>} />
        <Route path="/my-courses" element={<MyCourses purchasedCourses={purchasedCourses}/>} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
      </Routes>
    </Router>
  )
}

export default App;
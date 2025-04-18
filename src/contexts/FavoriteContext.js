// src/contexts/FavoriteContext.js
import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics" },
    { id: 2, title: "JavaScript Advanced" },
    { id: 3, title: "CSS Masterclass" },
  ]);

  const addToFavorites = (course) => {
    setFavorites([...favorites, course]);
    setCourses(courses.filter(c => c.id !== course.id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, courses }}>
      {children}
    </FavoriteContext.Provider>
  );
};

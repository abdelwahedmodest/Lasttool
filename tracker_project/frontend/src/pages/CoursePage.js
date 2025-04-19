// frontend/src/pages/CoursePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Course Page</h1>
      {id ? (
        <p>Viewing course with ID: {id}</p>
      ) : (
        <p>Viewing all courses</p>
      )}
    </div>
  );
};

export default CoursePage;

// frontend/src/pages/CoursePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const courses = [
  { id: '1', name: 'React Basics', description: 'Introduction to React.' },
  { id: '2', name: 'Advanced JS', description: 'Deep dive into JavaScript.' },
];

const CoursePage = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (id && !course) {
    return <div><h1>Course Not Found</h1></div>;
  }

  return (
    <div>
      <h1>Courses</h1>
      {id ? (
        <div>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
        </div>
      ) : (
        <ul>
          {courses.map((c) => (
            <li key={c.id}>
              <strong>{c.name}</strong>: {c.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoursePage;

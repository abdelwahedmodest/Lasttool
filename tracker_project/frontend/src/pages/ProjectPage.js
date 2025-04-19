// frontend/src/pages/ProjectPage.js
import React, { useState } from 'react';

const initialProjects = [
  { id: 1, name: 'WebApp', description: 'Build the smart tool web app.' },
  { id: 2, name: 'API Integration', description: 'Connect frontend to backend.' },
];

const ProjectPage = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setMessage('Please enter both name and description.');
      return;
    }
    const newProject = {
      id: projects.length + 1,
      name,
      description,
    };
    setProjects([...projects, newProject]);
    setName('');
    setDescription('');
    setMessage('Project added!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
      <h2>Add Project</h2>
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default ProjectPage;

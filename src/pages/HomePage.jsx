import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import workCards from "../data/projects"

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
    <div className="container mx-auto py-8 " id='work'>
      
      <div className="work-section">
        {workCards.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
      
    </div>
    {selectedProject && (
        <div className='popUp flex' >
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default HomePage;
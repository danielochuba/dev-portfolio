const ProjectCard = ({ project, onClick }) => {
  return (
    <div className='appear-from-bottom'>
      <div className={`project-card ${project.class} flex flex-col bg-white rounded-lg shadow-md overflow-hidden`}>
        <img className='portfolios' src={project.imageMob} alt='card1' />
        <img className='desk-img' src={project.imageDesk} alt='card1' />
        <div className='card-content p-6 flex flex-col justify-between'>
          <div >
            <h2 className='text-2xl font-bold text-gray-800'>{project.title}</h2>
            <div className='project-meta flex items-center mt-2'>
              <h3 className='font-semibold text-gray-700'>{project.canopy[0]}</h3>
              <span className='dot mx-2 text-gray-500'>•</span>
              <h3 className='text-gray-700'>{project.canopy[1]}</h3>
              <span className='dot mx-2 text-gray-500'>•</span>
              <h3 className='text-gray-700'>{project.canopy[2]}</h3>
            </div>
            <p className='text-gray-600 mt-4'>{project.para1}</p>
          </div>
          <ul className='section-skills'>
            {project.tech.map((tech, index) => (<li key={index} className='skills'>{tech}</li>))}
          </ul>          
          <button type="button" className='btn-text see-project w-fit self-center' onClick={onClick}>See Project</button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

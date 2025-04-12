import React from 'react';
import crossblack from '/Images/crossblack.png'; // Replace with your actual path
import liveIcon from '/Images/live.png'; // Replace with your actual path
import githubIcon from '/Images/IconGitHub.png'; // Replace with your actual path

const ProjectModal = ({ project, onClose }) => {
  return (

    <div className="popUp-content">
      <div className="sectionLabel">
        <div className="label-inside">
          <div className="popTitle">
            <h2 className="section-title">{project.title}</h2>
            <button onClick={onClose}>
              <img className="crossblack" src={crossblack} alt="close" />
            </button>
          </div>
          <div className="section-options ">
            <h3 className="optionBold">{project.canopy[0]}</h3>
            <span className="dot"></span>
            <h3 className="options">{project.canopy[1]}</h3>
            <span className="dot"></span>
            <h3 className="options">{project.canopy[2]}</h3>
          </div>
          <div className="pop-top ">
            <img className="portfolios max-h-[145px]" src={project.imageMob} alt="card1" />
            <img className="desk-img popup-img " src={project.imageDesk} alt="card1" />
            <div className="hide-desktop">
              <div className="buttonPop flex column">
                <p className="section-text cardParaDesk">{project.para2}</p>
                <div className="borderPop"></div>
                <ul className="section-skills ">
                  {project.tech.map((tech, index) => (
                    <li key={index} className="skills">{tech}</li>
                  ))}
                </ul>
                <div className="buttonPop ">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-text ">
                    See live <img className="imgButton w-[24px] hover:text-white" width={24} src={liveIcon} alt="live" />
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn-text">
                    See Source <img className="imgButton w-[24px] hover:text-white" width={24} src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="deskColum hide-mobile ">
            <p className="section-text cardParaMob max-h-[168px] overflow-y-scroll no-scrollbar">{project.description}</p> {/* Example Tailwind classes */}
            <div className="sectionFlex">
              <ul className="section-skills py-2">
                {project.tech.map((tech, index) => (
                  <li key={index} className="skills">{tech}</li>
                ))}
              </ul>
              <div className="borderPop !mt-0"></div>
              <div className="buttonPop">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-text">
                  See live <img className="imgButton w-[24px] hover:text-white" width={24} src={liveIcon} alt="live" />
                </a>
                <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn-text">
                  See Source <img className="imgButton w-[24px] hover:text-white" width={24} src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

import React, { useState } from 'react';
import { languages, frameworks, tools, skills } from '../data/skills';

const About = () => {
  const [langOpen, setLangOpen] = useState(true);
  const [frameworksOpen, setFrameworksOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const toggleLang = () => setLangOpen(!langOpen);
  const toggleFrameworks = () => setFrameworksOpen(!frameworksOpen);
  const toggleTools = () => setToolsOpen(!toolsOpen);
  const toggleSkills = () => setSkillsOpen(!skillsOpen);


  const renderSkillItems = (skillArray) => {
    return skillArray.map((skill, index) => (
      <li className="skill-item " key={index}>
        {skill.icon && (
          <img
            className="skill-icon"
            src={skill.icon}
            alt={`${skill.name} Icon`}
          />
        )}
        <p className="skill-name">{skill.name}</p>
      </li>
    ));
  };





  return (
    <section className="about-section bg-white flex flex-col items-center border-t-right-80 rounded-tr-[80px] px-6 py-28 md:flex-row md:text-center md:gap-6 md:px-10" id="about">
      <section className="about flex flex-col items-start gap-3 md:w-3/4" id="About">
        <h2 className="title font-crete text-4xl text-left text-dark-blue md:text-center md:text-[40px]">About Me</h2>
        <p className="section-text bold justify">
          Hello there! I'm Daniel Ochuba, a seasoned Software Engineer and a proud American School Certified Full-Stack Developer. With a passion for crafting digital dreams, I've dedicated over 2500+ hours to master the intricate landscapes of both frontend and backend technologies.
          What sets me apart is my ability to thrive in the dynamic realm of time zones. UTC+5 and UTC-6 aren't just numerical values to me; they represent my commitment to synchronizing with diverse teams worldwide, understanding that innovation knows no bounds. I bring a global perspective to every project, ensuring that the sun never sets on the possibilities we can explore together.
          Each line of code I write is more than a technical snippet – it's a crucial element in bringing dreams to life. Whether it's building a cutting-edge product, implementing a standout feature, or creating a captivating website, I have the expertise to turn ideas into reality.
          Take a look at some of my previous work and experiences, and if you're impressed, don't hesitate to reach out. I'm here to help you transform your vision into a tangible, successful project. Let's code your next big thing!
        </p>
        <p className="connect">Let's connect</p>
        <div className="social-icon">
          <ul>
            <li><a href="https://github.com/danielochuba" rel="noopener" target="_blank"><img src="Images/github.png" alt="GitHub Icon" /></a></li>
            <li><a href="https://www.linkedin.com/in/daniel-ochuba-ugochukwu" rel="noopener" target="_blank"><img src="Images/linkedin.png" alt="Linkedin Icon" /></a></li>
            <li><a href="https://twitter.com/ochuba_daniel" rel="noopener" target="_blank"><img src="Images/twitter.png" alt="Twitter Icon" /></a></li>
            <li><a href="https://medium.com/@danielochuba" rel="noopener" target="_blank"><img src="Images/medium.png" alt="Medium Icon" /></a></li>
            <li><a href="https://wellfound.com/u/daniel-ugochukwu-ochuba" rel="noopener" target="_blank"><img src="Images/Fingers icon.png" alt="Fingers Icon" /></a></li>
          </ul>
        </div>
      </section>
      <section className="portfolio-details appear-from-bottom ">
        <div className="skill-lang bottom-line relative border-b border-gray-300 py-4 "  onClick={toggleLang}>
          <h3 className="skill-language ">Languages</h3>
          <i className={`arrow absolute right-3 border border-gray-300 border-t-0 border-l-0 p-1 -translate-y-1/2 cursor-pointer ${langOpen ? 'rotate-180' : ''}`}  name="lang-drop"></i>
        </div>
        <ul className={`appear-from-bottom skill-lists lang-drop ${langOpen ? '' : '!hidden'} mt-4`}>
          {renderSkillItems(languages)}
        </ul>

        <div className="skill-lang bottom-line relative border-b border-gray-300 py-4">
          <h3 className="skill-language font-medium text-base text-dark-blue md:text-lg">Frameworks & Libraries</h3>
          <i className={`arrow absolute right-3 border border-gray-300 border-t-0 border-l-0 p-1 -translate-y-1/2 cursor-pointer ${frameworksOpen ? 'rotate-180' : ''}`} onClick={toggleFrameworks}></i>
        </div>
        <ul className={`appear-from-bottom skill-lists frameworks-drop ${frameworksOpen ? '' : '!hidden'} mt-4`}>
          {renderSkillItems(frameworks)}
        </ul>
        <div className="skill-lang bottom-line relative border-b border-gray-300 py-4">
          <h3 className="skill-language font-medium text-base text-dark-blue md:text-lg">Methodologies & Tools</h3>
          <i className={`arrow absolute right-3 border border-gray-300 border-t-0 border-l-0 p-1 -translate-y-1/2 cursor-pointer ${toolsOpen ? 'rotate-180' : ''}`} onClick={toggleTools}></i>
        </div>

        <ul className={`appear-from-bottom skill-lists tools-drop ${toolsOpen ? '' : '!hidden'} mt-4`}>
          {renderSkillItems(tools)}
        </ul>
        <div className="skill-lang bottom-line relative border-b border-gray-300 py-4">
          <h3 className="skill-language font-medium text-base text-dark-blue md:text-lg">Skills</h3>
          <i className={`arrow absolute right-3 border border-gray-300 border-t-0 border-l-0 p-1 -translate-y-1/2 cursor-pointer ${skillsOpen ? 'rotate-180' : ''}`} onClick={toggleSkills}></i>
        </div>
        <ul className={`skill-lists skills-drop ${skillsOpen ? '' : '!hidden'} mt-4`}>
          {renderSkillItems(skills)}
        </ul>
      </section>
    </section>
  );
};;

export default About; 
import React from 'react'
import Title from '../layouts/Title'
import { project4, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import {projectData} from "../../data/data"

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((project, index) => {
          return (
            <ProjectsCard
              title={project.title}
              desc={project.desc}
              src={Object.values(project.src)[0]}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
              key={index}
            />
          )
        })}
      </div>
    </section>
  );
}

export default Projects
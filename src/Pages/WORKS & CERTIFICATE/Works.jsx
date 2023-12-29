import React from 'react'
import './works.css'
import Projects from './Projects';

import { projectData, certificateData } from '../../Components/Data/projectData';

const Works = () => {
  return (
    <>
    <div className='workContent'>
    <h3>WORKS</h3>
    <div className='projectList'>
      {projectData.map((project, index) => {
        return (
            <Projects
          key={index}
          payroll={project.image}
          pageLink={project.pageLink}
          title={project.title}
          paragraph={project.paragraph}
        />
        );
        
})}
</div>


<h3>Certificate</h3>
    <div className='projectList'>
      {certificateData.map((certificate, index) => {
        return (
            <Projects
          key={index}
          payroll={certificate.image}
          pageLink={certificate.pageLink}
          title={certificate.title}
          paragraph={certificate.paragraph}
        />
        );
        
})}
</div>


    </div>
    </>
  )
}

export default Works
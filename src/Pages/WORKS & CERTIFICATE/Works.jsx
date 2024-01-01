import './works.css'
import Projects from './Projects';
import Certificates from './Certificate';

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
          payroll={project.image[0]}
          pageLink={project.pageLink}
          title={project.title}
          paragraph={project.paragraph}
          index={index}
        />
        );
        
})}
</div>


<h3>Certificate</h3>
    <div className='projectList'>
      {certificateData.map((certificate, index) => {
        return (
            <Certificates
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
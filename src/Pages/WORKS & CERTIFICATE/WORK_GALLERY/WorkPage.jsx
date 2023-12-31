import HeaderNAv from '../../../Components/Headers/HeaderNAv'
import './workpage.css';
import { projectData } from '../../../Components/Data/projectData';

const WorkPage = () => {

  const indexKey = sessionStorage.getItem("IndexValue");

  console.log("Index: ", indexKey);
  const selectedProject = projectData.find((pojects, index) => index === parseInt(indexKey));

  console.log("SelectedProject",selectedProject)

  return (
    <>
    <header>
        <HeaderNAv/>
    </header>

    <div className='workPageContent'>
      <div className='projectDisplay'>
      {
        selectedProject ? (
          <>
          <h1>{selectedProject.title}</h1>
          <p>{selectedProject.paragraph}</p>

          <div className="link-pos">
                <a href={selectedProject.projectgit} className="open-project" target="_blank">Open
                    Project</a>
            </div>

            
          
                {
                  parseInt(indexKey) === 0 ? 
                  (
                    null
                  )
                  :
                  (
                    <div className="preview">
                    <video src={selectedProject.video} width="640" height="360" autoPlay loop muted controls>
                    Your browser does not support the video tag.
                </video>
                </div>
                  )
                }
           

          {
            parseInt(indexKey) === 0 ?
            (
              <div className='project-image'>
              {
                selectedProject.image.map((image, imageIndex) => 
                (
                    <img key={imageIndex} className='payroll' src={image} />
                    
                ))
              }
              </div>
            )
            :
            (
              <div className='project-image'>
                {
                  selectedProject.image.map((image, imageIndex) => 
                  (
                      <img key={imageIndex} src={image} />
                  ))
                }
              </div>
            )
          }
          </>
        )
        :
        (
          <h1>I recommend to go back to the main page, Thank You!</h1>
        )
      }
      </div>
    </div>

    </>
  )
}

export default WorkPage
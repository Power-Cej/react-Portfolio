import React from 'react'

const Projects = (props) => {
    
    const {payroll, pageLink, title, paragraph} = props;

    const handleOnclick = () => {
        window.location.href = pageLink;
    }

  return (
    <>
        <div className='projectContent'>
            <div className='projectsGallery'>
            <a onClick={handleOnclick}>
                <div className="project">
                    <img src={payroll} />
                </div>
                <h4>{title}</h4>
                <p>
                    {paragraph}
                </p>
            </a>
            </div>
        </div>
    </>
  )
}

export default Projects
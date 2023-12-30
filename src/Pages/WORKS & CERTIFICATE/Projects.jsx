// import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
// import { MyContext } from '../../myConetxtProvider';

const Projects = (props) => {

    // const {setIndexKey} = useContext(MyContext);
    
    const {payroll, pageLink, title, paragraph, index} = props;
    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate(pageLink);
        // setIndexKey(index);
        sessionStorage.setItem("IndexValue", index);
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
import { useNavigate } from 'react-router-dom';

const Projects = (props) => {
    
    const {payroll, pageLink, title, paragraph, index} = props;
    const navigate = useNavigate();

    const handleOnclick = () => {
        window.scroll(0,0);
        navigate(pageLink);
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
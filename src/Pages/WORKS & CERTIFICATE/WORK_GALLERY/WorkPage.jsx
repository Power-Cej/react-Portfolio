import React from 'react'
import HeaderNAv from '../../../Components/Headers/HeaderNAv'
import './workpage.css';


const WorkPage = ({index}) => {

  console.log("Index: ", index);

  return (
    <>
    <header>
        <HeaderNAv/>
    </header>

    <div className='workPageContent'>
      <h1>Payroll Form</h1>
    </div>

    </>
  )
}

export default WorkPage
import React from 'react'
import Image from 'next/image'

const resume = () => {
  return (
    <>
    <h1 className="heading">Resume</h1>
    <hr className="header-breaker"></hr>
    <div className="content">
      <div className='education-card-container'>
        <ul className='education'>
          <li className='education-heading'><Image src="/college.png" alt="college" height={50} width={50} className="invert"></Image></li>
          <ul className='education-data'>
            <li><h3>BTech, Mechanical Engineering</h3></li>
            <li><h4>VNIT, Nagpur</h4></li>
            <li><h4>2023 - 2027</h4></li>
          </ul>
        </ul>
        <ul className='education'>
          <li className='education-heading'><Image src="/school.png" alt="school" height={40} width={40} className="invert"></Image></li>
          <ul className='education-data'>
            <li><h3>CBSE, Secondary (XII), Science</h3></li>
            <li><h4>Naini Valley School</h4></li>
            <li><h4>2018-2022</h4></li>
          </ul>
        </ul>
      </div>
    </div>
    </>
  )
}

export default resume
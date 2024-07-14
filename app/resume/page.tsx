import React from 'react'

const resume = () => {
  return (
    <div>
      <div className='education-card-container'>
        <ul className='education'>
          <li className='education-heading'><h2>College:</h2></li>
          <ul className='education-data'>
            <li><h3>BTech, Mechanical Engineering</h3></li>
            <li><h4>VNIT, Nagpur</h4></li>
            <li><h4>2023 - 2027</h4></li>
          </ul>
        </ul>
        <ul className='education'>
          <li className='education-heading'><h2>School:</h2></li>
          <ul className='education-data'>
            <li><h3>CBSE, Secondary (XII), Science</h3></li>
            <li><h4>Naini Valley School</h4></li>
            <li><h4>2018-2022</h4></li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default resume

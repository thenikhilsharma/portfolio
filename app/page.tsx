import React from 'react';
import Image from 'next/image';
import './globals.css'

const page = () => {
  return (
    <>
      <div className="bio">
        <p>Hi, Im Nikhil Sharma, a 2nd-year undergraduate student at Visveswaraya National Institute of Technology (VNIT), pursuing a Bachelor of Technology in Mechanical Engineering. With a passion for coding that started at the age of 10, Ive developed a strong foundation and love for technology over the years.
        </p>
        <p>
        I have 3 years of experience in Python and competitive coding, where Ive honed my skills and tackled numerous challenging problems. In addition to my expertise in these areas, I am also actively engaged in web development, constantly exploring new technologies and frameworks to expand my knowledge and capabilities.
        </p>
        <p>
        Coding has always been more than just a skill for me; its a creative outlet and a way to solve real-world problems. Im excited to continue my journey in technology, learn new things, and contribute to innovative projects.
        </p>
      </div>
      <hr></hr>
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
    </>
 )
}

export default page

import React from 'react'
import Image from 'next/image'
import './resume.css'

type EduCardProps = {
  institute: string;
  course: string;
  duration: string;
};

const Educard: React.FC<EduCardProps> = ({institute, duration, course}) => {
    return(
    <div className="edu-body">
          <ul>
            <li className='edu-insti-name'>
              <div className='glow'>
                <Image src="/bullet.png" alt="bullet" width={10} height={10}></Image>
              </div>
              <h2>{institute}</h2>
            </li>
            <li className='edu-insti-data'>
              <h3>{duration}</h3>
            </li>
            <li className='edu-insti-data'>
              <h3>{course}</h3>
            </li>
          </ul>
        </div>
    )
}

type codingProfileProps = {
  sitename: string;
  imgurl: string;
};

const CodingProfile: React.FC<codingProfileProps> = ({sitename, imgurl}) => {
  return(
        <div className="coding-profile-card">
          <div className="coding-profile-img">
            <Image src={imgurl} width={50} height={50} alt={sitename}/>
          </div>
          <h3>{sitename}</h3>
        </div>
  )
}

const Resume = () => {
  return (
    <>
    <h1 className="heading">Resume</h1>
    <hr className="header-breaker"></hr>
    <div className='content'>
      <div className="edu-heading">
          <div>
            <Image src="/book.png" alt="education" width={30} height={20} className='invert'></Image>
          </div>
          <h1>Education</h1>
      </div>
      <Educard institute={"Visvesvaraya National Institute of Technology (VNIT)"} duration={"2023-2027"} course={"BTech Mechanical Engineering"}/>
      <Educard institute={"Naini Valley Sr. Sec. School"} duration={"2018-2022"} course={"CBSE 10+2"}/>
      <div className="edu-heading">
          <div>
            <Image src="/exp.png" alt="experience" width={35} height={20} className='invert'></Image>
          </div>
          <h1>Experience</h1>
      </div>
      <Educard institute={"ECom Business Talks, Deepak Adhav - Video Editor"} duration={"AUG-OCT 2023"} course={"handling YouTube channel of Japan based NRI"}/>
      <Educard institute={"Bankpreneur, Aaradhya Mudghal - Video Editor"} duration={"JULY 2023"} course={"IIT BHU Alumni social handle"}/>
      <div className="edu-heading">
          <div>
            <Image src="/exp.png" alt="experience" width={35} height={20} className='invert'></Image>
          </div>
          <h1>Coding Profiles</h1>
      </div>
      <div className="coding-profiles">
        <CodingProfile sitename={"Hacker Rank"} imgurl={'/phone.png'}/>
        <CodingProfile sitename={"LeetCode"} imgurl={'/phone.png'}/>
        <CodingProfile sitename={"Code Chef"} imgurl={'/phone.png'}/>
        <CodingProfile sitename={"Code Forces"} imgurl={'/phone.png'}/>
        <CodingProfile sitename={"Hacker Earth"} imgurl={'/phone.png'}/>
      </div>
    </div>
  </>
  )
}

export default Resume

import React from 'react';
import Image from 'next/image';
import './globals.css'
import './css/animation.css'

type serviceCardProps = {
  task: string;
  description: string;
  imageUrl: string;
};

const ServiceCard: React.FC<serviceCardProps> = ({task, description, imageUrl}) => {
    return(
        <div className="services-card">
          <div className="services-img-container">
            <Image src={imageUrl} className='invert' alt='web-design' fill={true} />
          </div>
          <div className="services-content">
            <h3>{task}</h3>
            <h4>{description}</h4>
          </div>
        </div>
    )
}

const page = () => {
  return (
    <>
    <h1 className="heading">About Me</h1>
    <hr className="header-breaker"></hr>
    <div className="content">
      <div className="bio">
        <p>Hi, Im <span className='highlight'>Nikhil Sharma</span>, a 2nd-year undergraduate student at <span className='highlight'>Visveswaraya National Institute of Technology (VNIT),</span> pursuing a <span className='highlight'>Bachelor of Technology in Mechanical Engineering.</span> With a passion for coding that started at the age of 10, Ive developed a strong foundation and love for technology over the years.
        </p>
        <p>
        I have 3 years of experience in Python and competitive coding, where Ive honed my skills and tackled numerous challenging problems. In addition to my expertise in these areas, I am also actively engaged in web development, constantly exploring new technologies and frameworks to expand my knowledge and capabilities.
        </p>
        <p>
        Coding has always been more than just a skill for me; its a creative outlet and a way to solve real-world problems. Im excited to continue my journey in technology, learn new things, and contribute to innovative projects.
        </p>
      </div>
      <h2 className='services-heading'>What Im Doing</h2>
      <div className="services">
        <ServiceCard task={"Web Design"} description={"The most modern and highly quality design made at a professional level"} imageUrl={"/web-design.png"}/>
        <ServiceCard task={"Web Development"} description={"High-qualtity development of sites at the professional level."} imageUrl={"/coding.png"}/>
      </div>
      <div className="services">
        <ServiceCard task={"Video Editing"} description={"Professional Video Editing on Premier Pro and After Effects"} imageUrl={"/coding.png"}/>
      </div>
      {/* <video src="/reference.mp4"></video> */}
    </div>
    </>
 )
}

export default page

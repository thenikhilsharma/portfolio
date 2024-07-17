import React from "react"
import Image from "next/image"
import '../css/portfolio.css'

const portfolio = () => {
  return (
    <>
    <h1 className="heading">Portfolio</h1>
    <hr className="header-breaker"></hr>
    <div className="content">
        <ul className='portfolio-card'>
          <li className='portfolio-heading'><Image src="/portfolio.png" alt="portfolio" height={40} width={40} className="invert"></Image></li>
          <ul className='portfolio-data'>
            <li><h3>Portfolio Website</h3></li>
            <li><h4>July 2024</h4></li>
            <li><h4>This website is a result of complete fullstack development. The Techs used here can be read on the blogs tab</h4></li>
          </ul>
        </ul>
    </div>
    </>
  )
}

export default portfolio
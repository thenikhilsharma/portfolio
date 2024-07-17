import React from 'react'
import '../css/blog.css'
import Link from 'next/link'
import Image from 'next/image'

const blog = () => {
  return (
    <>
    <h1 className="heading">Blog</h1>
    <hr className="header-breaker"></hr>
    <div className="content">
      <div className="card-container">
        <div className="card">
          <div className="blog-img">
            <Image src="/blog1.jpg" alt='blog1' fill={true}></Image>
          </div>
          <div className="blog-data">
            <h2 className='blog-heading'><Link href={"/blog/blog1"}>What techs did I used in making of this <span className='highlight'>PORTFOLIO</span> website</Link></h2>
            <p className='blog-summary'>Hello Reader,<br></br>I would like to share a simple statistic with you all, if you look at this Heat Map Graph very carefully...</p>
            <h3 className='blog-author'>Written by: <Link href="/">Nikhil Sharma</Link></h3>
          </div>
        </div>
        <div className="create-blog-btn">
          <button>Create new...</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default blog
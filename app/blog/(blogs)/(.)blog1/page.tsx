import React from 'react'
import Blog1 from '../blog1'
import Link from 'next/link'

const blog2 = () => {
  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        <div className="blog-closebtn">
          <Link href="/blog">
            X
          </Link>
        </div>
        <Blog1 />
      </div>
    </div>
  )
}

export default blog2
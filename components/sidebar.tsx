import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const sidebar = () => {
  return (
      <div className="sidebar">
              <div className="logo-container">
                <Image className="img" src="/profile.jpg" alt="profile" fill={true}/>
              </div>
              <div className="profile-data">
                <h1>
                  Nikhil Sharma
                </h1>
              </div>
              <div className="role">
                <h2>
                  Web Developer
                </h2>
              </div>
              <hr className="sidebar-hr"></hr>
              <div className="contacts">
                <ul>
                  <li className="contacts-itemholder">
                    <div className="contacts-img invert">
                      <Image src="/mail.png" alt="email" fill={true}></Image>
                    </div>
                    <ul>
                      <li>Email</li>
                      <li className="contacts-data">nikhilsharmalku@gmai.com</li>
                    </ul>
                  </li>
                  <li className="contacts-itemholder">
                    <div className="contacts-img invert">
                      <Image src="/phone.png" alt="phone" fill={true}></Image>
                    </div>
                    <ul>
                      <li>Phone no</li>
                      <li className="contacts-data">+91 7985788639</li>
                    </ul>
                  </li>
                  <li className="contacts-itemholder">
                    <div className="contacts-img invert">
                      <Image src="/dob.png" alt="date-of-birth" fill={true}></Image>
                    </div>
                    <ul>
                      <li>D.O.B.</li>
                      <li className="contacts-data">12th March 2004</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="socials">
                <Link href={'https://github.com/thenikhilsharma'}>
                  <Image src="/github.png" alt="favicon" height={20} width={20} className='invert' />
                </Link>
                <Link href={'https://linkedin.com/in/thenikhilsharma'}>
                  <Image src="/linkedin.png" alt="favicon" height={20} width={20} className='invert' />
                </Link>
                <Link href={'https://leetcode.com/u/thenikhilsharma'}>
                  <Image src="/code.png" alt="favicon" height={20} width={20} className='invert' />
                </Link>
              </div>
            </div>
  )
}

export default sidebar

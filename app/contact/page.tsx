import React from 'react'
import '../css/contact.css'

const contact = () => {
  return (
    <div className='content'>
      <div className="contact">
        <form action="/forms" className="contact-request">
        <h2>Connect</h2>
        <div className="connect-name-inp">
          <input placeholder='Name'></input>
        </div>
        <div className="connect-org-inp">
          <input placeholder='Organisation'></input>
        </div>
        <div>
          <input className="connect-msg-inp" placeholder='Message'></input>
        </div>
        <div>
          <button className='connect-submit'>Submit</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default contact

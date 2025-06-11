import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=''/>
    </div>
    <div className="main-container">
        <div className="greet">
            <p><span>Hello, Dear</span></p>
            <p>How can i help you </p>
        </div>
        <div className="cards">
            <div className="card">
                <p>beautiful placeses to see on road trip</p>
                <img src={assets.compass_icon} alt=''/>
            </div>
            <div className="card">
                <p>cities to go trips</p>
                <img src={assets.bulb_icon} alt=''/>
            </div>
        <div className="card">
                <p>rooms on those placeses</p>
                <img src={assets.message_icon} alt=''/>
            </div>
        
        <div className="card">
                <p>how much money we want</p>
                <img src={assets.code_icon} alt=''/>
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type='text' placeholder='enter a promt here'/>
                <div>
                    <img src={assets.gallery_icon} alt=''/>
                     <img src={assets.mic_icon} alt=''/>
                      <img src={assets.send_icon} alt=''/>
                </div>
            </div>
            <p className='bottom-info'>
                May gemini display info, including about your promt
            </p>
        </div>
    </div>
    </div>
  )
}

export default Main

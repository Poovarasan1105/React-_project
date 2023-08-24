import React from 'react'
import AboutBackgroundImage from '../Assets/about-background.png'
import AboutBannerImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function About() {
  return (
    <div className='about-section-container'>
      <div className="about-background-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBannerImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi aliquid quo repudiandae sint, alias vitae perspiciatis quae cupiditate sed cum tenetur iusto perferendis facere.
        </p>
        <p className="primary-text">
            Ab excepturi voluptates suscipit nesciunt nostrum. Odio mollitia reiciendis unde dolore consequuntur!
        </p>
        <div className="about-buttons-container">
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'><BsFillPlayCircleFill /> Watch More</button>
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'


function Testimonial() {
  return (
    <div className='work-section-wrapper'>
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Are They Saying</h1>
        <p className="primary-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio officia dolore quia ducimus excepturi.</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="no Image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis hic fuga cupiditate delectus mollitia molestiae deserunt obcaecati dolorem iste.</p>
        <div className="testimonial-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h1>John Doe</h1>
      </div>
    </div>
  )
}

export default Testimonial

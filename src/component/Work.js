import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMealsImage from '../Assets/delivery-image.png'


function Work() {

    const workInfo = [{
        Image : PickMeals,
        title : "Pick Meals",
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, qui ipsa voluptatem perspiciatis architecto ducimus vitae possimus quod tempora sit.'
    },
    {
        Image : ChooseMeals,
        title : "Choose How Often",
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, qui ipsa voluptatem perspiciatis architecto ducimus vitae possimus quod tempora sit.'
    },{
        Image : DeliveryMealsImage,
        title : "Fast Deliveries",
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, qui ipsa voluptatem perspiciatis architecto ducimus vitae possimus quod tempora sit.'
    },]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Works</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium consequatur, voluptatum dolor nesciunt nostrum.</p>
        </div>
        <div className="work-section-bottom">
            {
                workInfo.map((data)=> (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.Image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work

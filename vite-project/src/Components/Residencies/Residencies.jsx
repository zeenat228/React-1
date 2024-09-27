
import 'swiper/css';
import './Residencies.css'
import data from '../../utils/slider.json'
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { sliderSettings } from './../../utils/Common';
// import Slider from 'react-slick';



const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColstart">
          <span className="orangeText">Best Choices</span> <br/>
          <span className="primaryText">Popular Residences</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {
            data.map((Card,i)=>(
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={Card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{color:"orange"}}>$</span>
                    <span>{Card.price}</span>
                  </span>
                  <span className="primaryText">{Card.name}</span>
                  <span className="secondaryText">{Card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies

const SliderButtons=()=>{
  const Swiper = useSwiper();
  return (
    <div className = "flexCenter r-buttons">
      <button onClick={()=> Swiper.slidePrev()}>&lt;</button> 
      <button onClick={()=> Swiper.slideNext()}>&gt;</button>
    </div>
  )
}
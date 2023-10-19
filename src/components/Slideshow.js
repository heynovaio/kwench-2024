import * as React from "react"
import "flickity/css/flickity.css";
const Flickity = require('react-flickity-component');
// import { Link } from "gatsby"
const flickityOptions = {
    initialIndex: 2
}
const Slideshow = ({ slides }) => (
  
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <img style={{ width: '100%' }} src={slide.url} alt={slide.alt}/>
          <h2>{slide.caption}</h2>
        </div>
      ))}
    </Flickity>
)

export default Slideshow

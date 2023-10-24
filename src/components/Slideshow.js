import * as React from "react"
import "flickity/css/flickity.css";
import "../styles/components/SlideShow.scss"

const Flickity = require('react-flickity-component');

const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    pageDots: false
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
        <div key={index} className="slide">
          <div className="col">
            <p>{slide.caption}</p>
          </div>
          <div className="image-col">
            <img style={{ width: '100%' }} src={slide.url} alt={slide.alt}/>
          </div>
        </div>
      ))}
    </Flickity>
)

export default Slideshow

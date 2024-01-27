import * as React from "react"
import "../styles/components/ImageCta.scss"

const ImageCta = ({ title, content, image, fee, direction, link, bg }) => {
  if (bg === 'red') {
   var textColor = 'text-white';
  } else {
    var textColor = 'text-dark';
  }
  return (
    <div className={`container imageCta order-${direction}`} style={{backgroundColor: 'var(--' + bg + '-color)'}}>
      <div className='image-col'>
        {image ?
          <img className="ctaimage" src={image} alt={title}/>
          : null }
        <span className="sr-only">{title}</span>  
      </div>
      <div className={`col ${textColor}`}>
        {content}
        <span className='fee'>{fee}</span>
      </div>
    </div>
  )
}
export default ImageCta

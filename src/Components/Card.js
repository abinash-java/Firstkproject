import React from 'react'
import './card.css'

function Card({src,title,description,price}) {
  return (
    <div className='card'>
        <img src={src} />
        <div className='card_info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h4>{price}</h4>
        </div>
    </div>
  )
}

export default Card
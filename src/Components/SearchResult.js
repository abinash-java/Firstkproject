import { FavoriteBorder, StarBorder } from '@mui/icons-material'
import React from 'react'
import './searchresult.css'

function SearchResult({img,location,title,description,star,total,price}) {
  return (
    <div className='searchResult'>
      <img src={img} alt=''/>
      <FavoriteBorder className='searchResult_heart'/>
      <div className='searchResult_info'>
        <div className='searchResult_infoTop'>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>______</p>
          <p>{description}</p>
        </div>
        <div className='searchResult_infoBottom'>
          <div className='searchResult_stars'>
            <StarBorder className='searchResult_star' />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className='searchResult_price'>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
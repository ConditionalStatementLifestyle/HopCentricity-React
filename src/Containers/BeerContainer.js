import React from 'react'
import BeerCard from '../Components/BeerCard'

const BeerContainer = (props) => {

    return (
        <div><br></br><br></br>
          {props.beers.map(beerItem => {
              if (beerItem.img_url === "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png") {
                  beerItem.img_url = null
              }
              return <BeerCard 
                key={beerItem.id} 
                name={beerItem.name}
                brewery={beerItem.brewery.name}
                ibu={beerItem.ibu}
                style={beerItem.style}
                img_url={beerItem.img_url}
                rating={beerItem.rating}
                />
          }) }
        </div>
    )
}

export default BeerContainer


import React from 'react'
import BeerCard from '../Components/BeerCard'

const BeerContainer = (props) => {

    return (
        <div><br></br><br></br>
          {props.beers.map(beerItem => {
              if (beerItem.img_url === "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png") {
                  beerItem.img_url = null
              }
              if (typeof beerItem.brewery !== 'string') {
                  beerItem.brewery = beerItem.brewery.name
              }
              return <BeerCard 
                key={beerItem.name}
                id={beerItem.id}
                name={beerItem.name}
                brewery={beerItem.brewery}
                ibu={beerItem.ibu}
                style={beerItem.style}
                img_url={beerItem.img_url}
                rating={beerItem.rating}
                abv={beerItem.abv}
                pushReviewToProfile={props.pushReviewToProfile}
                />
          }) }
        </div>
    )
}

export default BeerContainer


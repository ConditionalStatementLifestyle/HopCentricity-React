import React from 'react'
import hopCard from '../hopCard.png'
import ReviewCard from '../Components/ReviewCard'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div><br></br><br></br>
                <div>
                    <div className="ui centered card cardBackground">
                <div className="image">
                    <img src={hopCard} alt='oh no'></img>
                </div>
                <div className="content">
                    <div className="header">{this.props.user.username}</div>
                    <div className="meta">
                    <span className="date">Congrats on Being a Hop Lover</span>
                    </div>
                    <div className="description">
                    
                    </div>
                </div>
                    <div className="extra content">
                        <i className="user icon"></i>
                        {this.props.reviews.length} Reviews
                    </div>
                </div>
                </div>
                <div className=''><br></br><br></br>
                {this.props.reviews.map(reviewItem => {
                    if (reviewItem.img_url === "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png") {
                        reviewItem.img_url = null
                    }
                    if (true) {
                        {/* debugger */}
                    }
                    return <ReviewCard 
                        key={reviewItem.beer.id}
                        id={reviewItem.beer.id}
                        name={reviewItem.beer.name}
                        brewery={reviewItem.beer.brewery}
                        ibu={reviewItem.beer.ibu}
                        style={reviewItem.beer.style}
                        img_url={reviewItem.beer.img_url}
                        rating={reviewItem.beer.rating}
                        abv={reviewItem.beer.abv}
                        userRating={reviewItem.rating}
                        content={reviewItem.content}
                        />
                        }) }
                        </div>
            </div>
         );
    }
}
 
export default Profile;
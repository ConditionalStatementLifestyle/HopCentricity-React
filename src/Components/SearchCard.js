import React from 'react';
import Pineapple from '../pineapple.png'
import ReviewModal from './ReviewModal';
import { Popup } from 'semantic-ui-react'


const SearchCard = (props) => {

    const titleCase = (str) => {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            if (str[i] === 'ipa') {
                str[i] = 'IPA'
            }
            else {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            }
        }
        return str.join(' ');
    }

    const renderAlreadyReviewed = () => {
        if (props.alreadyReviewed[`${props.name}`]) {
            return (
                <Popup
                    content='You Drank This'
                    on={'hover'}
                    hideOnScroll
                    trigger ={
                        <div className="ui left corner label">
                            <i class="beer icon"></i>
                        </div>
                    }>
                </Popup>
            )
        }
    }

    return (
        <div id='beer-card' className='block-display'>
            <div className='ui centered grid'> 
            <div className='ui card'>
                {renderAlreadyReviewed()}
                <div className="center floated author">
                    <img alt='oh no' className="image cardMargin cardImage" src={props.img_url === null?Pineapple:props.img_url}></img>
                </div>
            <div className="content">
                <div className="header">{titleCase(props.name)}</div>
                    <div className="meta">
                        <span className="category">{titleCase(props.brewery)}</span>
                    </div>
                    <div className="description">
                        <p>
                            <div>{titleCase(props.style)}</div><br></br>
                            <div>{props.ibu} IBU</div><br></br>
                            <div>{props.abv}%</div><br></br>
                            <div>Rating {props.rating}</div>
                        </p>
                        <ReviewModal  
                            id={props.id}
                            name={titleCase(props.name)}
                            brewery={titleCase(props.brewery)}
                            ibu={props.ibu}
                            style={props.style}
                            img_url={props.img_url}
                            rating={props.rating}
                            abv={props.abv}
                            pushReviewToProfile={props.pushReviewToProfile}
                            onlyIpa={props.onlyIpa}
                            reviewAdded={props.reviewAdded}

                        />
                </div>
            </div>
        </div>
        </div><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default SearchCard;
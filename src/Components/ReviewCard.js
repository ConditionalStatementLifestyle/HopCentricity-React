import React, { useState } from 'react';
import Pineapple from '../pineapple.png'
import EditModal from './EditModal';
import { Popup } from 'semantic-ui-react'

const ReviewCard = (props) => {

    const [show, setShow] = useState(false)
    const [isPopupDisabled, setPopupDisabled] = useState(false)
    const [isHovering, setHovering] = useState(false)

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

    const turnShowOff = () => {
        setPopupDisabled(false)
        setShow(false)
    }

    const handleHoverOn = (isHovering) => {
        setHovering(true)
        setTimeout(() => {
            if (isHovering) { setPopupDisabled(true) }
        }, 3000)
    }
    
    const handleHoverOff = () => {
        setPopupDisabled(false)
        setHovering(false)
    }

    return (
        <Popup
            content='Click to Edit or Delete'
            on={'hover'}
            disabled={isPopupDisabled}
            hideOnScroll
            trigger ={
            <div className='reviewCard' onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
                <div className="ui raised link card" onClick={() => {
                        setPopupDisabled(true)
                        setShow(true)}
                    }><br></br>
                    <div className="center floated author">
                        <EditModal 
                        show={show} 
                        turnShowOff={turnShowOff}
                        beer={props.beer}
                        userRating={props.userRating}
                        content={props.content}
                        reviewId={props.reviewId}
                        updateReview={props.updateReview}
                        removeReview={props.removeReview}
                        />
                        <img className="image center cardMargin cardImage" src={props.beer.img_url === null ? Pineapple : props.beer.img_url} alt='oh no'></img>
                    </div><br></br>
                    <div className="content">
                        <div className="header">{titleCase(props.beer.name)}</div><br></br>
                        <div className="description">
                            <div>
                                <div>{titleCase(props.beer.style)}</div><br></br>
                                <div>Global Rating {props.beer.rating}</div><br></br>
                                <div>Your Rating: {props.userRating}</div><br></br>
                                {props.content === '' ? null : `Your Notes: ${props.content}`}
                            </div>
                        </div>
                    </div>
                </div><br></br><br></br>
            </div>
            }
        />
    )
}


export default ReviewCard;
import React from 'react';
import Pineapple from '../pineapple.png'

const ReviewCard = (props) => {

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

    return (
        <div>
            <div className="ui raised link card">
                <div className="center floated author">
                    <img className="image center cardMargin cardImage" src={props.img_url === null?Pineapple:props.img_url} alt='oh no'></img>
                </div>
            <div className="content">
                <div className="header">{titleCase(props.name)}</div><br></br>

                    <div className="description">
                        <p>
                            <div>{titleCase(props.style)}</div><br></br>
                            {/* <div>{props.ibu} IBU</div><br></br>
                            <div>{props.abv}%</div><br></br> */}
                            <div>Global Rating {props.rating}</div><br></br>
                            <div>Your Rating: {props.userRating}</div><br></br>
                        </p>
                        <p>
                           {props.content === ''?null:`Your Notes: ${props.content}`}
                        </p>
                    </div>
            </div>
        </div>
        <br></br><br></br>
        </div>
    )
}


export default ReviewCard;
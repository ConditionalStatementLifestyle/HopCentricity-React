import React from 'react'
import Pineapple from '../pineapple.png'

const BeerCard = (props) => {

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
            <div className="ui centered raised link card">
                <div className="center floated author">
                    <img className="image center cardMargin" src={props.img_url === null?Pineapple:props.img_url}></img>
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
                <div>Rating {props.rating}</div>
                </p>
                </div>
            </div>
        </div>
        <br></br><br></br>
        </div>
    )
}


export default BeerCard;
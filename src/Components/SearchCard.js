import React from 'react';
import Pineapple from '../pineapple.png'
import ReviewModal from './ReviewModal';
import { Popup } from 'semantic-ui-react'

class SearchCard extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    setShow = (show, message) => {
        this.setState({ show })
        console.log('setShow called, show', show,'state', this.state.show, message);
        
    }

    titleCase = (str) => {
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

    renderAlreadyReviewed = () => {
        if (this.props.alreadyReviewed[`${this.props.name}`]) {
            return (
                <Popup
                    content='You Drank This'
                    on={'hover'}
                    hideOnScroll
                    trigger ={
                        <div className="ui left corner label">
                            <i className="beer icon"></i>
                        </div>
                    }>
                </Popup>
            )
        }
    }

    render() {
        return (
            <div id='beer-card' className='block-display' onClick={() => this.setShow(true,'parent')}>
                <div className='ui centered grid'> 
                    <div className='ui raised link card'>
                        {this.renderAlreadyReviewed()}
                        <div className="center floated author">
                            <img alt='oh no' className="image cardMargin cardImage" src={this.props.img_url === null ? Pineapple : this.props.img_url}></img>
                        </div>
                    <div className="content">
                        <div className="header">{this.titleCase(this.props.name)}</div>
                            <div className="meta">
                                <span className="category">{this.titleCase(this.props.brewery)}</span>
                            </div>
                            <div className="description">
                                <div>
                                    <div>{this.titleCase(this.props.style)}</div><br></br>
                                    <div>{this.props.ibu} IBU</div><br></br>
                                    <div>{this.props.abv}%</div><br></br>
                                    <div>Rating {this.props.rating}</div><br></br>
                                </div>
                                {this.props.alreadyReviewed[`${this.props.name}`] ? 
                                    null 
                                :
                                    <ReviewModal  
                                        id={this.props.id}
                                        name={this.titleCase(this.props.name)}
                                        brewery={this.titleCase(this.props.brewery)}
                                        ibu={this.props.ibu}
                                        style={this.props.style}
                                        img_url={this.props.img_url}
                                        rating={this.props.rating}
                                        abv={this.props.abv}
                                        pushReviewToProfile={this.props.pushReviewToProfile}
                                        onlyIpa={this.props.onlyIpa}
                                        reviewAdded={this.props.reviewAdded}
                                        show={this.state.show}
                                        setShow={this.setShow}
                                    />}
                            </div>
                        </div>
                    </div>
                </div><br></br><br></br><br></br><br></br>
            </div>
        )
    }
}

export default SearchCard;
import React from 'react';
import Pineapple from '../pineapple.png'
import EditModal from './EditModal';
import { Popup } from 'semantic-ui-react'

class ReviewCard extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false,
            isPopupDisabled: false,
            isHovering: false
        }
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

    setShow = (show, origin = null) => {
        if (origin === 'card' && this.state.show !== true) {
            this.setState({ show })        
        }
        else if (origin === null) {
            this.setState({ show })
        }
    }

    handleHoverOn = () => {
        this.setState({ isHovering: true })
        if (this.state.isHovering) {
            setTimeout(() => {
                this.setState({ isPopupDisabled: true })
            }, 3000)
        }
    }
    
    handleHoverOff = () => {
        this.setState({ 
            isPopupDisabled: false,
            isHovering: false
        })
    }

    render() {
        return (
            <Popup
                content='Click to Edit or Delete'
                on={'hover'}
                disabled={this.state.isPopupDisabled}
                hideOnScroll
                trigger ={
                <div className='reviewCard' onMouseEnter={this.handleHoverOn} onMouseLeave={this.handleHoverOff}>
                    <div className="ui raised link card" onClick={() => this.setShow(true, 'card')}><br></br>
                        <div className="center floated author">
                            <EditModal 
                                show={this.state.show} 
                                setShow={this.setShow}
                                beer={this.props.beer}
                                userRating={this.props.userRating}
                                content={this.props.content}
                                reviewId={this.props.reviewId}
                                updateReview={this.props.updateReview}
                                removeReview={this.props.removeReview}
                            />
                            <img className="image center cardMargin cardImage" src={this.props.beer.img_url === null ? Pineapple : this.props.beer.img_url} alt='oh no'></img>
                        </div><br></br>
                        <div className="content">
                            <div className="header">{this.titleCase(this.props.beer.name)}</div><br></br>
                            <div className="description">
                                <div>
                                    <div>{this.titleCase(this.props.beer.style)}</div><br></br>
                                    <div>Global Rating {this.props.beer.rating}</div><br></br>
                                    <div>Your Rating: {this.props.userRating}</div><br></br>
                                    {this.props.content === '' ? null : `Your Notes: ${this.props.content}`}
                                </div>
                            </div>
                        </div>
                    </div><br></br><br></br>
                </div>
                }
            />
        )
    }    
}


export default ReviewCard;
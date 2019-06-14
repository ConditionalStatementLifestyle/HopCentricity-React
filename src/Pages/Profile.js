import React from 'react'
import hopCard from '../hopCard.png'
import ReviewCard from '../Components/ReviewCard'
import { Progress } from 'semantic-ui-react'
import { Image, Transition } from 'semantic-ui-react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Profile extends React.Component {

    constructor() {
        super() 
        this.state = {
            visible: true
        }
    }

    setInterval = () => {
        let interval = 1/(this.props.hopmeter.hopRating/80000)
        setInterval(this.toggleVisiblity,interval)
    }

    toggleVisiblity = () => {
        let visible = !this.state.visible
        this.setState({visible}) 
    }

    componentWillUnmount() {
        clearInterval(this.toggleVisiblity)
    }

    render() { 
        const { visible } = this.state
        return ( 
            <div><br></br><br></br>
            {this.setInterval()}
                <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                    <div className="row">
                        <div className="eight wide column">
                        <div className="profile-name">{this.props.user.username}</div>
                        <p>It's a great day to appreciate IPA's isn't it?</p>
                        <h3 className="ui header">Your Reviews</h3>
                        <p>You have reviewed {this.props.reviews.length} beers so far</p>
                        </div>
                        <div className="six wide right floated column">
                        <Transition visible={visible} duration={1/(this.props.hopmeter.hopRating/50000)}>
                            <Image src={hopCard} className="ui large rounded image" />
                        </Transition>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center aligned column">
                        {/* <a className="ui huge button">Check Them Out</a> */}
                        </div>
                    </div>
                    </div><br></br><br></br>
                    <div className='meter'>Hop-o-meter Thoughts: {this.props.hopmeter.thought}</div>
                    <div className='ui inverted segment'>
                    <div className="ui red inverted progress meter">
                        <Progress 
                        percent={this.props.hopmeter.hopRating} 
                        color={this.props.hopmeter.color}
                        active 
                        size='large'
                        inverted progress/>
                        {this.props.hopmeter.hopRating}%
                    </div>
                    </div>
                    </div><br></br><br></br><br></br><br></br>
                    <div className='ui centered three column grid'><br></br><br></br>
                        {/* <ReactCSSTransitionGroup transitionName="searchCardTransition" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}> */}
                            {this.props.reviews.map(reviewItem => {
                                if (reviewItem.beer.img_url === "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png") {
                                    reviewItem.beer.img_url = null
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
                                    }) 
                                    }
                        {/* </ReactCSSTransitionGroup> */}
                </div>
            </div>
         );
    }
}
 
export default Profile;
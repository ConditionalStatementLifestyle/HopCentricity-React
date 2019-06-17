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

    componentWillMount() {
        this.props.getProfileData()
    }

    componentDidMount() {
        let interval = 10000
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
                        <Transition animation={'pulse'} duration={9800} visible={visible}>
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
                                    beer={reviewItem.beer}
                                    content={reviewItem.content}
                                    reviewId={reviewItem.id}
                                    userRating={reviewItem.rating}
                                    updateReview={this.props.updateReview}
                                    removeReview={this.props.removeReview}
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

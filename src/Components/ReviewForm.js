import React from 'react'
import Slider from './Slider'

class ReviewForm extends React.Component {

    constructor() {
        super()
        this.state = {
            slider: '3.0'
        }
    }

    adjust = (position) => {
        this.setState({ slider: position })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        let content = document.getElementById('area').value
        this.submitReview(content)
        this.props.close()
    }

    submitReview = (content) => {
        let email = localStorage.getItem('HopCentricity_Email')
        fetch('http://localhost:3000/api/v1/reviews', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                beerId: this.props.id,
                email: email,
                content: content,
                userRating: this.state.slider,
                beer: this.props.name,
                brewery: this.props.brewery,
                style: this.props.style,
                ibu: this.props.ibu,
                abv: this.props.abv,
                rating: this.props.rating,
                img_url: this.props.img_url
            })
        })
        .then(res => res.json())
        .then(json => this.pushData(json))
    }

    pushData = (review) => {
        this.props.pushReviewToProfile(review)
    }
 
    render() {
        return (
            <div><br></br>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="centered field">
                        <Slider adjust={this.adjust} position={this.state.slider}/><br></br>
                    </div>
                        <div className="field">
                            <label>Thoughts On This</label>
                                <textarea id='area' label='Thoughts' placeholder='Feelings or Flavors Here'>
                                </textarea>
                        </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" defaultChecked className="hidden"></input>
                            <label>I Agree That I Love Hops</label>
                        </div>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default ReviewForm
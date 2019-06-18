import React from 'react'
import Slider from './Slider'

class EditReviewForm extends React.Component {

    constructor() {
        super() 
        this.state = {
            slider: ''
        }
    }

    componentDidMount() {
        let content = document.getElementById('area')
        this.setState({slider: this.props.userRating})
        if (this.props.content !== '') {
            content.value = this.props.content
        }
    }

    adjust = (slider) => {
        this.setState({slider})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        let rating = document.getElementById('dropdown').value
        let content = document.getElementById('area').value
        if (this.props.content !== content || this.props.rating !== rating) {
            this.submitEditReview(content, rating, this.props.reviewId)
        }
        this.props.close()
    }

    submitEditReview = (content, rating, id) => {
        fetch('http://localhost:3000/api/v1/review/' + id, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                content: content,
                rating: rating
            })
        })
        .then(res => res.json())
        .then(json => this.pushData(json))
    }

    pushData = (review) => {
        this.props.updateReview(review)
    }

    render() {
        return (
            <div><br></br>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <Slider adjust={adjust} position={slider}/><br></br>
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
                    <button className="ui button" type="submit">Submit Edit</button>
            </form>
            </div>

        )
    }
}

export default EditReviewForm
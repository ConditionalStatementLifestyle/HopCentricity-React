import React, { useState } from 'react'
import Slider from './Slider'

const ReviewForm = (props) => {

    const [slider, setSlider] = useState('3.25')

    const adjust = (position) => {
        setSlider(position)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        let content = document.getElementById('area').value
        submitReview(content, props)
        props.close()
    }

    const submitReview = (content, props) => {
        let email = localStorage.getItem('HopCentricity_Email')
        fetch('http://localhost:3000/api/v1/reviews', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                beerId: props.id,
                email: email,
                content: content,
                userRating: slider,
                beer: props.name,
                brewery: props.brewery,
                style: props.style,
                ibu: props.ibu,
                abv: props.abv,
                rating: props.rating,
                img_url: props.img_url
            })
        })
        .then(res => res.json())
        .then(json => pushData(json))
    }

    const pushData = (review) => {
        props.pushReviewToProfile(review)
    }

        return (
            <div><br></br>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="centered field">
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
                    <button className="ui button" type="submit">Submit</button>
            </form>
            </div>

        )

}

export default ReviewForm
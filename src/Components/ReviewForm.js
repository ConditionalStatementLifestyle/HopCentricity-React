import React from 'react'

// const options = [
//   { key: '1', text: '1', value: '1' },
//   { key: '1.25', text: '1.25', value: '1.25' },
//   { key: '1.5', text: '1.5', value: '1.5' },
//   { key: '1.75', text: '1.75', value: '1.75' },
//   { key: '2', text: '2', value: '2' },
//   { key: '2.25', text: '2.25', value: '2.25' },
//   { key: '2.5', text: '2.5', value: '2.5' },
//   { key: '2.75', text: '2.75', value: '2.75' },
//   { key: '3', text: '3', value: '3' },
//   { key: '3.25', text: '3.25', value: '3.25' },
//   { key: '3.5', text: '3.5', value: '3.5' },
//   { key: '3.75', text: '3.75', value: '3.75' },
//   { key: '4', text: '4', value: '4' },
//   { key: '4.25', text: '4.25', value: '4.25' },
//   { key: '4.5', text: '4.5', value: '4.5' },
//   { key: '4.75', text: '4.75', value: '4.75' },
//   { key: '5', text: '5', value: '5' }
// ]

const ReviewForm = (props) => {

  const handleSubmit = (ev) => {
    ev.preventDefault()
    let rating = document.getElementById('dropdown').value
    let content = document.getElementById('area').value
    submitReview(content, rating, props)
    props.close()
  }

  const submitReview = (content, rating, props) => {
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
            userRating: rating,
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
                <div className="field">
                    <label>Rating</label>
                    <select 
                        className="ui fluid dropdown" 
                        id='dropdown' 
                        label="Rating"
                        placeholder='3'>
                        <option value='1'>1</option>
                        <option value="1.25">1.25</option>
                        <option value="1.5">1.5</option>
                        <option value="1.75">1.75</option>
                        <option value="2">2</option>
                        <option value="2.25">2.25</option>
                        <option value='2.5'>2.5</option>
                        <option value="2.75">2.75</option>
                        <option value="3">3</option>
                        <option value="3.25">3.25</option>
                        <option value="3.5">3.5</option>
                        <option value="3.75">3.75</option>
                        <option value="4">4</option>
                        <option value="4.25">4.25</option>
                        <option value="4.5">4.5</option>
                        <option value="4.75">4.75</option>
                        <option value="5">5</option>
                    </select><br></br>
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
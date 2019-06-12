import React from 'react'

class BeerNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.query = React.createRef()
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.searchForBeers(this.query.current.value,'beername')
    }

    // searchForBeerName = () => {
    //     fetch('http://localhost:3000/api/v1/beers', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           type: 'beername',
    //           query: this.query.current.value
    //         })
    //       })
    //       .then(res => res.json())
    //       .then(json => this.props.renderBeers(json))
    // }

    render() { 
        return ( 
            <div>
                <h3>IPA Name</h3>
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input type="text" name="first-name" placeholder="Beer Name" ref={this.query}></input>
                    </div>
                    <button class="ui button" type="submit">Search</button>
                </form>
        </div>
         );
    }
}

export default BeerNameForm ;
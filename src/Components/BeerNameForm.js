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

    render() { 
        return ( 
            <div>
                <h3>IPA Name</h3>
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input type="text" name="first-name" placeholder="Beer Name" ref={this.query}></input>
                    </div>
                    <button className="ui button" type="submit">Search</button>
                </form>
        </div>
         );
    }
}

export default BeerNameForm ;
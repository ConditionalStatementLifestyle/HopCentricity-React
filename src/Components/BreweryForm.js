import React from 'react'

class BreweryForm extends React.Component {
    constructor(props) {
        super(props);
        this.query = React.createRef()
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.searchForBeers(this.query.current.value,'brewery')
    }

    render() { 
        return ( 
            <div>
                <h3>Brewery Name</h3>
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input type="text" name="first-name" placeholder="Brewery Name" ref={this.query}></input>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
        </div>
         );
    }
}

export default BreweryForm ;
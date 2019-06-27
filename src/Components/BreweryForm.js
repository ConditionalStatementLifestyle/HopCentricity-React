import React from 'react'

class BreweryForm extends React.Component {
    constructor(props) {
        super(props);
        this.query = React.createRef()
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        debugger
        this.props.searchForBeers(this.query.current.value,'brewery')
    }

    render() { 
        return ( 
            <div className='form-height'>
                <h3>Brewery Name</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input type="text" name="first-name" placeholder="Brewery Name" ref={this.query}></input>
                    </div>
                    <button className="ui button searchButton" type="submit">Search</button>
                </form>
        </div>
         );
    }
}

export default BreweryForm ;
import React from 'react'

class BeerNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h3>IPA Name</h3>
                <form class="ui form">
                    <div className="field">
                        <input type="text" name="first-name" placeholder="Beer Name"></input>
                    </div>
                    <button class="ui button" type="submit">Search</button>
                </form>
        </div>
         );
    }
}

export default BeerNameForm ;
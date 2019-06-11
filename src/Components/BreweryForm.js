import React from 'react'

class BreweryForm extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render() { 
        return ( 
            <div>
                <h3>Brewery Name</h3>
                <form class="ui form">
                    <div className="field">
                        <input type="text" name="first-name" placeholder="Brewery Name"></input>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
        </div>
         );
    }
}

export default BreweryForm ;
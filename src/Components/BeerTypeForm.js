import React from 'react'

class BeerTypeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h3>IPA Type</h3>
                <form class="ui form">
                    <div>
                        <select className="ui fluid dropdown">
                            <option value='IPA'>IPA</option>
                            <option value="Hazy IPA">Hazy IPA</option>
                        </select>
                    </div>
                    <br></br>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
         );
    }
}

export default BeerTypeForm ;
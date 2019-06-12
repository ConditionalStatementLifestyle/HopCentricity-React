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
                            <option value="IPA - Imperial / Double">IPA - Imperial / Double</option>
                            <option value="IPA - White">IPA - White</option>
                            <option value="IPA - American">IPA - American</option>
                            <option value="IPA - American">IPA - American</option>
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

import React from 'react'

class BeerTypeForm extends React.Component {

    handleSubmit = (ev) => {
        ev.preventDefault()
        let selection = document.getElementById('dropdown').value
        this.props.searchForBeers(selection,'beertype')
    }
    
    render() {
        return (
            <div className='form-height'>
            <h3>IPA Type</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className='dropDown'>
                        <select className="ui fluid dropdown" id='dropdown'>
                            <option value='IPA - New England'>IPA - New England</option>
                            <option value="IPA - Imperial / Double">IPA - Imperial / Double</option>
                            <option value="IPA - American">IPA - American</option>
                            <option value="IPA - Milkshake">IPA - Milkshake</option>
                            <option value="IPA - Session / India Session Ale">IPA - Session / India Session Ale</option>
                            <option value="IPA - White">IPA - White</option>
                        </select>
                    </div>
                    <button className="ui button searchButton" type="submit">Search</button>
                </form>
            </div>
         );
    }
}

export default BeerTypeForm ;

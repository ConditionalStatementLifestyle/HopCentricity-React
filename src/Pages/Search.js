/* eslint-disable no-unused-expressions */
//MAKE SURE FORM FOR BEER REVIEW IS A MODAL AND NOT ANOTHER 
import React from 'react'
import BeerNameForm from '../Components/BeerNameForm'
import BreweryForm from '../Components/BreweryForm'
import BeerTypeForm from '../Components/BeerTypeForm'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: 'beername'
         }
    }

    changeForm = () => {
        let type = document.getElementById('SearchType').value
        this.setState({type})
    }

    renderFormByTypeSelection = () => {
        let type = this.state.type
        if (type === 'beername') {
            return <BeerNameForm/>
        }   
        else if (type === 'beertype') {
            return <BeerTypeForm/>
        }   
        else if (type === 'brewery') {
            return <BreweryForm/>        
        }
        else {
            return null
        }
    }

    render() { 
        return (
            <div className='width'>
                <br></br>
                    <h2>Search By</h2>
                    <div className='searchSelectionWidth'>
                    <select id='SearchType' className="ui fluid dropdown" onChange={() => this.changeForm()}>
                        <option value="beername" ref={this.searchType}>IPA Name</option>
                        <option value="beertype" ref={this.searchType}>IPA Type</option>
                        <option value="brewery" ref={this.searchType}>Brewery</option>
                    </select><br></br>
                    </div>
            {this.renderFormByTypeSelection()}
          </div>
         )
    }
}
 
export default Search;



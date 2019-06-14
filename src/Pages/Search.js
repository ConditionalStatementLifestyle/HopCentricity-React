/* eslint-disable no-unused-expressions */
//MAKE SURE FORM FOR BEER REVIEW IS A MODAL AND NOT ANOTHER 
import React from 'react'
import BeerNameForm from '../Components/BeerNameForm'
import BreweryForm from '../Components/BreweryForm'
import BeerTypeForm from '../Components/BeerTypeForm'
import BeerContainer from '../Containers/BeerContainer'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: 'beername',
            beers: []
         }
    }

    searchForBeers = (query, type) => {
        fetch('http://localhost:3000/api/v1/beers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              type: type,
              query: query
            })
          })
          .then(res => res.json())
          .then(json => this.renderBeers(json))
    }

    renderBeers = (beers) => {
        this.setState({beers})
    }

    changeForm = () => {
        let type = document.getElementById('SearchType').value
        this.setState({type})
    }

    renderFormByTypeSelection = () => {
        let type = this.state.type
        if (type === 'beername') {
            return <BeerNameForm searchForBeers={this.searchForBeers}/>
        }   
        else if (type === 'beertype') {
            return <BeerTypeForm searchForBeers={this.searchForBeers}/>
        }   
        else if (type === 'brewery') {
            return <BreweryForm searchForBeers={this.searchForBeers}/>        
        }
        else {
            return null
        }
    }

    render() { 
        return (
            <div>
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
                <BeerContainer 
                beers={this.state.beers}
                pushReviewToProfile={this.props.pushReviewToProfile}
                />
          </div>
         )
    }
}
 
export default Search;



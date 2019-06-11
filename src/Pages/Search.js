//MAKE SURE FORM FOR BEER REVIEW IS A MODAL AND NOT ANOTHER 
import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <form class="ui form">
                <div class="field">
                <label>Beer Name</label>
                <input type="text" name="first-name" placeholder="Beer Name"></input>
                </div>
                <div class="field">
                <label>Brewery name</label>
                <input type="text" name="last-name" placeholder="Last Name"></input>
                </div>
                <div class="field">
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
          </div>
         )
    }
}
 
export default Search;



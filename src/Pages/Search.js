import React from 'react'
import BeerNameForm from '../Components/BeerNameForm'
import BreweryForm from '../Components/BreweryForm'
import BeerTypeForm from '../Components/BeerTypeForm'
import BeerContainer from '../Containers/BeerContainer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import OnlyIpa from '../Components/OnlyIpa';
import { Image, Header, Segment, TransitionablePortal } from 'semantic-ui-react'
import logo from '../hop.png'

const transitions = ['drop']


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'beername',
            beers: [],
            page: false,
            show: false,
            reviewAddedShow: false
         }
    }

    componentDidMount() {
        this.setState({ page: true })
    }

    onlyIpaShow = () => {
        let show = true
        this.setState({ show })
        setTimeout(() => this.onlyIpaHide(), 5000)
    }

    onlyIpaHide = () => {
        let show = false
        this.setState({ show })
    }

    reviewAdded = () => {
        let reviewAddedShow = true
        this.setState({ reviewAddedShow })
        reviewAddedShow = false
        setTimeout(() => this.setState({ reviewAddedShow }), 4000)
    }

    searchForBeers = (query, type) => {
        this.setState({beers: [] },
            () => {
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
        .then(json => this.renderBeers(json))}
        )
    }

    renderBeers = (beers) => {
        this.setState({ beers: [] })
        this.setState({ beers })
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

    getPage = () => {
        const { drop } = transitions[0]
        const { duration } = 1000
        if (this.state.page) {
            return (
                <div>
                    <div>
                        <OnlyIpa onlyIpaHide={this.onlyIpaHide} show={this.state.show}/>
                        <TransitionablePortal open={this.state.reviewAddedShow} transition={{ drop,duration }} >
                            <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
                                <Header>Congrats</Header>
                                <Image wrapped size='medium' src={logo} />
                                <p>Your review has been added to your profile page</p>
                            </Segment>
                        </TransitionablePortal>
                    </div>
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
                        alreadyReviewed={this.props.alreadyReviewed}
                        onlyIpa={this.onlyIpaShow}
                        reviewAdded={this.reviewAdded}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="pageTransition" transitionEnterTimeout={1500} transitionLeaveTimeout={200}>
                    {this.getPage()}
                </ReactCSSTransitionGroup>
            </div>
         )
    }
}

export default Search;

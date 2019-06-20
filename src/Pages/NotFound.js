import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition, Image } from 'semantic-ui-react'
import hopPic from '../hopCard.png'

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: false,
            visible: true
        }
    }

    componentDidMount() {
        this.setState({page: true})
        setInterval(this.toggleVisiblity,4000)
    }
    
    toggleVisiblity = () => {
        let visible = !this.state.visible
        this.setState({ visible })
    }

    getPage = () => {
        if (this.state.page) {
            return (
                <div className='not-found'>
                    <h3 className='login-message'>The Page You Searched Does Not Exist</h3><br></br>
                    <Transition animation={'jiggle'} duration={2000} visible={this.state.visible}>
                        <Image src={hopPic} className="ui medium rounded image not-found-hop" />
                    </Transition>
                </div>
            )
        }
        return null
    }

    render() { 
        return ( 
            <div>
                <ReactCSSTransitionGroup 
                    transitionName="pageTransition" 
                    transitionEnterTimeout={1500} 
                    transitionLeaveTimeout={200}>
                        {this.getPage()}
                </ReactCSSTransitionGroup>
            </div>
         );
    }
}
 
export default NotFound;
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition, Image } from 'semantic-ui-react'
import hopPic from '../hopCard.png'


class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: false,
            visible: false
        }
    }

    componentDidMount() {
        this.setState({page: true})
        setInterval(this.toggleVisiblity,2000)
    }
    
      toggleVisiblity = () => {
        let visible = !this.state.visible
        this.setState({ visible })
    }

    getPage = () => {
        if (this.state.page) {
            return (
                <div>
                    
                    <Transition animation={'jiggle'} duration={1500} visible={this.state.visible}>
                        <div 
                        className='bottle' 
                        onMouseEnter={this.handleMouseEnterBeer} 
                        onMouseLeave={this.handleMouseLeaveBeer}>
                        <Image src={hopPic} className="ui medium rounded image" />
                        </div>
                    </Transition>
                </div>
            )
        }
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
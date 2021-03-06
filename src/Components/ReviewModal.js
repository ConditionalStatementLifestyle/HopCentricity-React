import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ReviewForm from './ReviewForm'


class ReviewModal extends Component {
  state = { open: false }
  
  show = dimmer => () => {
    this.setState({ dimmer, open: true })
  }

  close = () => {
    this.props.setShow(false)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.show !== state.open) {      
      return {
        open: props.show
      };
    }
    return null;
  }

  render() {
    const { dimmer } = this.state
    return (
      <div>
        {/* <Button className='fluid ui teal button 'onClick={this.show('blurring')}>Review</Button> */}
        <Modal dimmer={dimmer} open={this.state.open} onClose={this.close}>
          <Modal.Header>How do you feel about this beer?</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.img_url} />
            <Modal.Description>
              <Header size='large'>{this.props.name}</Header>
              <Header>{this.props.brewery}</Header>
              <div>{this.props.type}</div><br></br>
              <div>{this.props.ibu} IBU</div><br></br>
              <div>{this.props.abv}%</div><br></br>
              <div>Rating {this.props.rating}</div><br></br>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
            </Button><br></br><br></br>
            <ReviewForm 
                id={this.props.id}
                name={this.props.name}
                brewery={this.props.brewery}
                ibu={this.props.ibu}
                style={this.props.style}
                img_url={this.props.img_url}
                rating={this.props.rating}
                abv={this.props.abv}
                close={this.close}
                pushReviewToProfile={this.props.pushReviewToProfile}
                onlyIpa={this.props.onlyIpa}
                reviewAdded={this.props.reviewAdded}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ReviewModal

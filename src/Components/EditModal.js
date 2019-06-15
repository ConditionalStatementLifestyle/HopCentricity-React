import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ReviewForm from './ReviewForm'
import Pineapple from '../pineapple.png'



class EditModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => {
    this.setState({ open: false })
    this.props.turnShowOff()
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
    const { open, dimmer } = this.state

    return (
      <div>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>How do you feel about this beer?</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.img_url === null?Pineapple:this.props.img_url} />
            <Modal.Description>
              <Header size='large'>{this.props.name}</Header>
              {/* <Header>{this.props.brewery}</Header> */}
              <div>{this.props.style}</div><br></br>
              <div>{this.props.ibu} IBU</div><br></br>
              <div>{this.props.abv}%</div><br></br>
              <div>Global Rating {this.props.globalRating}</div><br></br>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              No Feelings On this
            </Button><br></br>
            <ReviewForm 
                reviewId={this.props.reviewId}
                name={this.props.name}
                brewery={this.props.brewery}
                ibu={this.props.ibu}
                style={this.props.style}
                img_url={this.props.img_url}
                rating={this.props.rating}
                abv={this.props.abv}
                close={this.close}
                pushReviewToProfile={this.props.pushReviewToProfile}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default EditModal

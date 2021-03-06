import React from 'react'
import { Header, Image, Modal, Button } from 'semantic-ui-react'
import EditReviewForm from './EditReviewForm'
import AreYouSure from './AreYouSure'
import Pineapple from '../pineapple.png'

class EditModal extends React.Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
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

  titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'ipa') {
            str[i] = 'IPA'
        }
        else {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
    }
    return str.join(' ');
}

  render() {
    const { dimmer } = this.state
    return (
      <div>
        <Modal dimmer={dimmer} open={this.state.open} onClose={this.close}>
          <Modal.Header>Edit This Review</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.beer.img_url === null ? Pineapple : this.props.beer.img_url} />
            <Modal.Description>
              <Header size='large'>{this.titleCase(this.props.beer.name)}</Header>
              <div>{this.props.beer.style}</div><br></br>
              <div>{this.props.beer.ibu} IBU</div><br></br>
              <div>{this.props.beer.abv}%</div><br></br>
              <div>Global Rating {this.props.beer.rating}</div><br></br>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
            </Button>
            <AreYouSure removeReview={this.props.removeReview} reviewId={this.props.reviewId}/>
            <EditReviewForm
                reviewId={this.props.reviewId}
                setShow={this.props.setShow}
                userRating={this.props.userRating}
                content={this.props.content}
                updateReview={this.props.updateReview}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default EditModal

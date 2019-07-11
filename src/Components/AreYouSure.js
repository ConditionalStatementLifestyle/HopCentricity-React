import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const AreYouSure = (props) => {
  
  const deleteReview = () => {
    fetch('https://gentle-everglades-64429.herokuapp.com/api/v1/review/' + props.reviewId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then( _ => props.removeReview(props.reviewId))
  }

  return (
    <Modal trigger={<Button color='red'>Delete Review</Button>} basic size='small'>
      <Header icon='delete' content='Are you sure you would like to delete this?' />
      <Modal.Actions>
        <Button color='green' onClick={() => deleteReview()}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AreYouSure;

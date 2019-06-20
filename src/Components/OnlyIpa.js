import React from 'react'
import { Image, Header, Modal } from 'semantic-ui-react'
import logo from '../hop.png'

class OnlyIpa extends React.Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => {
    this.setState({ open: false })
    this.props.onlyIpaHide()
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
          <Modal.Header>Please Understand</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={logo} />
              <Modal.Description>
                <Header size='large'>This site was made in honor of IPAs and thus non-IPA type beers cannot be reviewed</Header><br></br>
              </Modal.Description>
            </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default OnlyIpa
import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal className='selected-beast-modal'show={true} onHide={this.props.deselectHandler} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.beast.image_url} alt={this.props.beast.description}/>
          <p>{this.props.beast.description}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;

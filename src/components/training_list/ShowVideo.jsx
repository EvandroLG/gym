import React, { Component } from 'react';
import Modal from 'react-modal';

import './ShowVideo.css';

export default class ShowVideo extends Component {

  constructor(props) {
    super(props);
    this._onCloseClick = this._onCloseClick.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  _onCloseClick() {
    this.props.onVideoUrlChange('');
  }

  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={ !!this.props.videoUrl }
        onRequestClose={ this._onCloseClick }>

        <button
          type="button"
          className="remove"
          onClick={ this._onCloseClick }>
          Close
        </button>

        <iframe
          src={ this.props.videoUrl }
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    )
  }
}

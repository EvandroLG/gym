import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVideoUrl } from '../../action_creators';
import Modal from 'react-modal';

class ShowVideo extends Component {

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
      <Modal isOpen={ !!this.props.videoUrl }>
        <button type="button" onClick={ this._onCloseClick }>
          Close
        </button>

        <iframe
          width="420"
          height="315"
          src={ this.props.videoUrl }
          frameBorder="0" allowFullScreen></iframe>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videoUrl: state.videoUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoUrlChange: (url) => {
      dispatch(setVideoUrl(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowVideo);

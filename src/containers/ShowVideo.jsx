import { connect } from 'react-redux';
import { setVideoUrl } from '../action';
import ShowVideo from '../components/training_list/ShowVideo';

export const mapStateToProps = ({ videoUrl }) => {
  return {
    videoUrl
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onVideoUrlChange: (url) => {
      dispatch(setVideoUrl(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowVideo);

import { connect } from 'react-redux';
import { setVideoUrl } from '../action';
import Training from '../components/training_list/Training'

const mapStateToProps = ({ videoUrl }) => {
  return {
    videoUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoUrlChange: (url) => {
      dispatch(setVideoUrl(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Training);

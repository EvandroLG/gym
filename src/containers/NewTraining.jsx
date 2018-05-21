import { connect } from 'react-redux';
import { setTitleTraining } from '../action';
import NewTraining from '../components/new_training/Index';

const mapStateToProps = ({ newTraining }) => {
  return {
    title: newTraining.title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleUpdate: (value) => {
      dispatch(setTitleTraining(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTraining);

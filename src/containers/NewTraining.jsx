import { connect } from 'react-redux';
import { setTitleTraining, addExerciseTraining, removeExerciseTraining, setFieldTraining } from '../action';
import NewTraining from '../components/new_training/Index';

const mapStateToProps = ({ newTraining }) => {
  return {
    title: newTraining.title,
    exerciseList: newTraining.exerciseList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleUpdate: (value) => {
      dispatch(setTitleTraining(value));
    },

    onAddExercise: () => {
      dispatch(addExerciseTraining());
    },

    onRemoveExercise: (id) => {
      dispatch(removeExerciseTraining(id));
    },

    onUpdateExercise: (id, fieldName, value) => {
      dispatch(setFieldTraining(id, fieldName, value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTraining);

import { connect } from 'react-redux';
import DB from '../libs/db';
import NewTraining from '../components/new_training/Index';

const mapStateToProps = ({ newTraining }) => {
  return {
    title: newTraining.title,
    exerciseList: newTraining.exerciseList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleUpdate: (title) => {
      dispatch({
        type: 'SET_TITLE_NEW_TRAINING',
        title
      });
    },

    onAddExercise: () => {
      dispatch({
        type: 'ADD_EXERCISE_NEW_TRAINING'
      });
    },

    onRemoveExercise: (id) => {
      dispatch({
        type: 'REMOVE_EXERCISE_NEW_TRAINING',
        id
      });
    },

    onUpdateExercise: (id, fieldName, value) => {
      dispatch({
        type: 'SET_FIELD_NEW_TRAINING',
        id,
        fieldName,
        value
      });
    },

    onSubmit: (title, exerciseList) => {
      new DB().insert({
        title,
        exerciseList
      }, () => {
        dispatch({
          type: 'EMPTY_NEW_TRAINING',
          title,
          exerciseList
        });
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTraining);

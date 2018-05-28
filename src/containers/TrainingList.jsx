import { connect } from 'react-redux';
import DB from '../libs/db';
import TrainingList from '../components/training_list/';

const mapStateToProps = ({ trainingList }) => {
  return {
    trainingList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findAll: () => {
      new DB().findAll((trainingList) => {
        dispatch({
          type: "LOAD_TRAINING_LIST",
          trainingList,
        });
      });
    },

    onRemoveTraining: (id) => {
      new DB().remove(id);

      dispatch({
        type: 'REMOVE_TRAINING',
        id
      });
    },

    onAddNewExercise: (id) => {
      dispatch({
        type: 'ADD_NEW_EXERCISE',
        id
      });
    },

    onRemoveExercise: (idTraining, idExercise) => {
      dispatch({
        type: 'REMOVE_EXERCISE',
        idTraining,
        idExercise
      });
    },

    onChangeTitle: (id, title) => {
      dispatch({
        type: 'CHANGE_TITLE_TRAINING',
        id,
        title
      });
    },

    onChangeExercise: (idTraining, idExercise, property, value) => {
      dispatch({
        type: 'CHANGE_EXERCISE_TRAINING',
        idTraining,
        idExercise,
        property,
        value
      });
    },

    onSubmit: (id, training) => {
      new DB().update(id, training);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingList);

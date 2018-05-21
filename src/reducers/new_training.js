const defaultState = {
  title: '',
  exerciseList: []
};

const newTraining = (state = defaultState, action) => {
  if (action.type === 'SET_TITLE_TRAINING') {
    return { ...state, title: action.title };
  }

  if (action.type === 'ADD_EXERCISE_TRAINING') {
    const id = state.exerciseList.length;
    const newExercise = { ...action.exerciseList, id };
    const exerciseList = state.exerciseList.concat(newExercise);

    return { ...state, exerciseList };
  }

  return state;
};

export default newTraining;

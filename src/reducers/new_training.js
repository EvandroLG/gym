const defaultState = {
  title: '',
  exerciseList: []
};

const newTraining = (state = defaultState, action) => {
  if (action.type === 'SET_TITLE_TRAINING') {
    return { ...state, title: action.title };
  }

  if (action.type === 'ADD_EXERCISE_TRAINING') {
    const defaultExercise = {
      name: '',
      repetition: '',
      set: '',
      weight: '',
      youtube: ''
    };

    const id = state.exerciseList.length;
    const newExercise = { ...defaultExercise, id };
    const exerciseList = state.exerciseList.concat(newExercise);

    return { ...state, exerciseList };
  }

  if (action.type === 'REMOVE_EXERCISE_TRAINING') {
    const exerciseList = state.exerciseList.filter((exercise) => {
      return exercise.id !== action.id;
    });

    return { ...state, exerciseList };
  }

  if (action.type === 'SET_FIELD_TRAINING') {
    const exerciseList = state.exerciseList.map((exercise) => {
      if (exercise.id === action.id) {
        exercise[action.fieldName] = action.value;
      }

      return exercise;
    });

    return { ...state, exerciseList };
  }

  return state;
};

export default newTraining;

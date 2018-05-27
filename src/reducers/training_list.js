const defaultState = [];

const trainingList = (state = defaultState, action) => {
  if (action.type === 'LOAD_TRAINING_LIST') {
    return action.trainingList;
  }

  if (action.type === 'ADD_NEW_EXERCISE') {
    const defaultExercise = {
      name: '',
      repetition: '',
      set: '',
      weight: '',
      youtube: ''
    };

    return state.map((training) => {
      if (training.id === action.id) {
        const id = training.exerciseList.length;
        const newExercise = { ...defaultExercise, id };
        training.exerciseList.push(newExercise);

        return training;
      }

      return training;
    });
  }

  if (action.type === 'REMOVE_EXERCISE') {
    return state.map((training) => {
      if (training.id === action.idTraining) {
        const exerciseList = training.exerciseList.filter((exercise) => {
          if (exercise.id !== action.idExercise) {
            return exercise;
          }
        });

        return { ...training, exerciseList };
      }

      return training;
    });
  }

  if (action.type === 'CHANGE_TITLE_TRAINING') {
    return state.map((training) => {
      if (training.id === action.id) {
        training.title = action.title;
      }

      return training;
    });
  }

  if (action.type === 'CHANGE_EXERCISE_TRAINING') {
    return state.map((training) => {
      if (training.id === action.idTraining) {
        const exerciseList = training.exerciseList.map((exercise) => {
          if (exercise.id === action.idExercise) {
            exercise[action.property] = action.value;
          }

          return exercise;
        });

        training.exerciseList = exerciseList;
      }

      return training;
    });
  }

  return state;
};

export default trainingList;

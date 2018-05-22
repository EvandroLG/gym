export function setVideoUrl(url) {
  return {
    type: 'SET_VIDEO_URL',
    url
  };
}

export function setTitleTraining(title) {
  return {
    type: 'SET_TITLE_TRAINING',
    title
  };
}

export function addExerciseTraining() {
  return {
    type: 'ADD_EXERCISE_TRAINING'
  };
}

export function removeExerciseTraining(id) {
  return {
    type: 'REMOVE_EXERCISE_TRAINING',
    id
  };
}

export function setFieldTraining(id, fieldName, value) {
  return {
    type: 'SET_FIELD_TRAINING',
    id,
    fieldName,
    value
  };
}

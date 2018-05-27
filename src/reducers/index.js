import { combineReducers } from 'redux';
import videoUrl from './video_url';
import newTraining from './new_training';
import trainingList from './training_list';

export default combineReducers({
  videoUrl,
  newTraining,
  trainingList
});

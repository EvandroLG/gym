import { combineReducers } from 'redux';
import videoUrl from './video_url';
import newTraining from './new_training';

export default combineReducers({
  videoUrl,
  newTraining
});

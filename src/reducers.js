import { combineReducers } from 'redux';
import { SET_VIDEO_URL } from './actions';

const videoUrl = (state='', action) => {
  if (action.type === SET_VIDEO_URL) {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  videoUrl
});

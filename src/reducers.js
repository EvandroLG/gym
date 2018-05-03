import { SET_VIDEO_URL } from './actions';

const DEFAULT_STATE = {
  videoUrl: ''
};

const setVideoUrl = (state, action) => {
  return Object.assign({}, state, { videoUrl: action.payload });
};

export default function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_VIDEO_URL: return setVideoUrl(state, action)
    default: return state
  }
}

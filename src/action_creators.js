import { SET_VIDEO_URL } from './actions';

export function setVideoUrl(videoUrl) {
  return {
    type: SET_VIDEO_URL,
    payload: videoUrl
  };
}

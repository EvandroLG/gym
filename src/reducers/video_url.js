const videoUrl = (state = '', action) => {
  if (action.type === 'SET_VIDEO_URL') {
    return action.url;
  }

  return state;
};

export default videoUrl;

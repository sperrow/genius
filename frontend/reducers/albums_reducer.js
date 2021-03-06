import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALBUM:
      let newState = merge({}, state);
      newState[action.album.id] = action.album;
      return newState;
    case RECEIVE_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};

export default albumsReducer;

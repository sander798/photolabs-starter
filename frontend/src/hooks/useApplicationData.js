import {useReducer} from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        favouritePhotos: [...state.favouritePhotos, action.item], 
        clickedPic: state.clickedPic
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        favouritePhotos: state.favouritePhotos.filter((item) => item.id !== action.item.id),
        clickedPic: state.clickedPic
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        favouritePhotos: state.favouritePhotos, 
        clickedPic: action.item
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {favouritePhotos: [], clickedPic: null});

  const updateToFavPhotoIds = (photoItem, adding) => {
    if (adding) {
      dispatch({type: "FAV_PHOTO_ADDED", item: photoItem});
    } else {
      dispatch({type: "FAV_PHOTO_REMOVED", item: photoItem});
    }
  };

  const setPhotoSelected = (photoItem) => {
    dispatch({type: "SELECT_PHOTO", item: photoItem});
  };

  //Completely redundant...
  const onClosePhotoDetailsModal = () => {
    dispatch({type: "SELECT_PHOTO", item: null});
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
}

export default useApplicationData;
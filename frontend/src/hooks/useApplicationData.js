import {useReducer, useEffect} from 'react';

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
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.item], 
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter((item) => item.id !== action.item.id),
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state, 
        clickedPic: action.item,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.item,
      };
    case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state,
          topicData: action.item
        };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favouritePhotos: [], 
    clickedPic: null,
    photoData: [],
    topicData: []
  });

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

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_PHOTO_DATA", item: [...data] }));
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_TOPIC_DATA", item: [...data] }));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
}

export default useApplicationData;
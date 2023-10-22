import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData"

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        navItems={state.topicData}
        photoItems={state.photoData}
        favouritePhotos={state.favouritePhotos}
        editFavourite={updateToFavPhotoIds}
        selectPic={setPhotoSelected}
      />
      {state.clickedPic && <PhotoDetailsModal 
        selectPic={setPhotoSelected}
        item={state.clickedPic}
        editFavourite={updateToFavPhotoIds}
        photoItems={state.photoData}
      />}
    </div>
  );
};

export default App;

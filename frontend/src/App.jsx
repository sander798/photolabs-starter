import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
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
        navItems={topics}
        photoItems={photos}
        favouritePhotos={state.favouritePhotos}
        editFavourite={updateToFavPhotoIds}
        selectPic={setPhotoSelected}
      />
      {state.clickedPic && <PhotoDetailsModal 
        selectPic={setPhotoSelected}
        item={state.clickedPic}
        editFavourite={updateToFavPhotoIds}
        photoItems={photos}
      />}
    </div>
  );
};

export default App;

import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [clickedPic, setClickedPic] = useState(null);

  const editFavourite = (photoItem, adding) => {
    if (adding) {
      setFavouritePhotos([...favouritePhotos, photoItem]);
    } else {
      setFavouritePhotos(favouritePhotos.filter((item) => item.id !== photoItem.id));
    }
  };

  const selectPic = (photoItem) => {
    setClickedPic(photoItem);
  };

  return (
    <div className="App">
      <HomeRoute 
        navItems={topics}
        photoItems={photos}
        favouritePhotos={favouritePhotos}
        editFavourite={editFavourite}
        selectPic={selectPic}
      />
      {clickedPic && <PhotoDetailsModal 
        selectPic={selectPic}
        item={clickedPic}
        editFavourite={editFavourite}
        photoItems={photos}
      />}
    </div>
  );
};

export default App;

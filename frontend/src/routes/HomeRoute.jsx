import React, { useCallback, useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const editFavourite = (photoItem, adding) => {
    if (adding) {
      setFavouritePhotos([...favouritePhotos, photoItem]);
    } else {
      setFavouritePhotos(favouritePhotos.filter((item) => item.id !== photoItem.id));
    }
  };

  return (
    <div className="home-route">
      <TopNavigation navItems={props.navItems} favourites={favouritePhotos}/>
      <PhotoList 
        photoItems={props.photoItems}
        editFavourite={editFavourite}
        onClick={props.selectPic}
      />
    </div>
  );
};

export default HomeRoute;

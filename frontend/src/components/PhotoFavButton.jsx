import React, { useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  } 

  useEffect(() => {props.changeFavs(liked)}, [liked]);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon displayAlert={false} selected={liked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
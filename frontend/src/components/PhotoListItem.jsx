import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <section className="photo-list__item">
      <PhotoFavButton/>
      <img className="photo-list__image" src={props.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile}></img>
        <div className="photo-list__user-info">
          <span>{props.username}</span>
          <br></br>
          <span className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;

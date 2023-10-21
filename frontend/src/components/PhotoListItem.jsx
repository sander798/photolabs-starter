import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <section className="photoListItem">
      <img src={props.imageSource}></img>
      <div className="itemInfoBar">
        <img src={props.profile}></img>
        <span>{props.username}</span>
        <span>
          {props.location.city}, 
          {props.location.country}
        </span>
      </div>
    </section>
  );
};

export default PhotoListItem;

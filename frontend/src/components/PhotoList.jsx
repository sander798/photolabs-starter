import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photoItems.map((item) => {
        return (
          <PhotoListItem
            item={item}
            editFavourite={props.editFavourite}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;

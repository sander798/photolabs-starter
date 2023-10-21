import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.items.map((item) => {
        return (
          <PhotoListItem
            username={item.user.name}
            imageSource={item.urls.regular}
            profile={item.user.profile}
            location={item.location}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;

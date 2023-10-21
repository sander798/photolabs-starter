import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.items.map((item) => {
        console.log(item);
        return (
          <TopicListItem key={item.id} slug={item.slug} title={item.title}/>
        );
      })}
    </div>
  );
};

export default TopicList;

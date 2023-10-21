import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

// Nav bar for top of page
const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList items={props.items}/>
      <FavBadge isFavPhotoExist={true}/>
    </div>
  )
}

export default TopNavigation;
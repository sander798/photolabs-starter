import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation items={props.sampleDataForTopicList}/>
      <PhotoList items={props.sampleDataForPhotoList}/>
    </div>
  );
};

export default HomeRoute;

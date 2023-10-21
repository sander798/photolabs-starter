import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation navItems={props.navItems}/>
      <PhotoList photoItems={props.photoItems}/>
    </div>
  );
};

export default HomeRoute;

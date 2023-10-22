import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({selectPic, editFavourite, item, photoItems}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img 
          src={closeSymbol}
          alt="close symbol"
          onClick={() => selectPic(null)}
        />
      </button>
      <section>
        <PhotoFavButton changeFavs={editFavourite}/>
        <img className="photo-details-modal__image" 
          src={item.urls.full}
        ></img>
        <div className="photo-details-modal__header">
          <img className="photo-details-modal__photographer-profile" src={item.user.profile}></img>
          <div className="photo-details-modal__photographer-info">
            <span>{item.user.name}</span>
            <br></br>
            <span className="photo-details-modal__photographer-location">
              {item.location.city}, {item.location.country}
            </span>
          </div>
        </div>
      </section>
      <span className="photo-details-modal__top-bar">Similar Photos</span>
      <section className="photo-details-modal__images">
        <PhotoList 
          photoItems={photoItems}
          editFavourite={editFavourite}
          onClick={selectPic}
        />
      </section>
    </div>
  )
};

export default PhotoDetailsModal;

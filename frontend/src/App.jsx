import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [clickedPic, setClickedPic] = useState(null);

  const selectPic = (item) => {
    setClickedPic(item);
  };

  return (
    <div className="App">
      <HomeRoute 
        navItems={topics}
        photoItems={photos}
        selectPic={selectPic}
      />
      {clickedPic && <PhotoDetailsModal selectPic={selectPic}/>}
    </div>
  );
};

export default App;

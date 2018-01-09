import React from 'react';
// import Routes from "../Routes";
import { Link } from 'react-router-dom';

import Item from './Item';

const List = props => {
  const itemsVideo = props.videos.map((video, index) => {
    
    return (
      <Link 
      to={`/movie/${index}`}
      key={index}
      >
      <Item 
        selectVideos={props.selectVideos}
        // key={index} 
        video={video}
      />
    </Link>
    )
  });
  return (
    <ul className="col-md-4 list-group">
      {itemsVideo}
    </ul>
  );
}
export default List;
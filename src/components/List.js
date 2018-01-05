import React from 'react';
import Item from './Item';

export const List = props => {
  const itemsVideo = props.videos.map((video, index) => {
    return ( 
    <Item 
      selectVideos={props.selectVideos}
      key={index} 
      video={video} />
    );
  });
  return (
    <ul className="col-md-4 list-group">
    {itemsVideo}
    </ul>
  );
}
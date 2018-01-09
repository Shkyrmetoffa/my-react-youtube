import React from 'react';

const Item = (props) => {
  // console.log(match.params);
  const {video, selectVideos} = props;
  const urlImg = video.snippet.thumbnails.default.url;
  return (
    <li
      onClick={() => selectVideos (video)
      } 
      className="list-group-item">
      
        <div className="video-list media">
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src = {urlImg} alt="video" />
            </div>
          </div>  
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default Item;
import React from 'react';

const Detail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const snippet = video.snippet;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe  title="random" src={url} ></iframe>
      </div>
      <div className="details">
        <div>{snippet.title}</div>
        <div>{snippet.description}</div>
      </div>
    </div>
  );
};

export default Detail;
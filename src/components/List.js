import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './Item';

export const List = props => {
  const { videos } = props;
    return (
      <ul className="col-md-4 list-group"> {
        videos.map((video, index) => (
          <Link 
            to={`/movie/${index + 1}`}
            key={index}
          >
            <Item 
              selectVideos={props.selectVideos}
              video={video}
            />
          </Link>
        ))
      }
      </ul>
    );
  };
  
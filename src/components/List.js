import React from "react";
import { Link } from 'react-router-dom';
import {store } from '../store';

import Item from './Item';

export const List = props => {
  const state = store.getState();
    return (
      <ul className="col-md-4 list-group"> {
        state.videos.map(item => (
          item.videos.map((video, index) => (
            <li
              key={index}
            > 
              <Link 
                to={`/movie/${index}`}
                key={index}
              >
                <Item 
                  selectVideos={props.selectVideos}
                  video={video}
                />
              </Link>
            </li>
          ))
         )
        )
      }
      </ul>
    );
  }
  
export default List;
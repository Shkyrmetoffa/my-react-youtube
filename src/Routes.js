import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
  render() {
    const { selectVideos, video } = this.props;
    return (
      <Switch>
        <Route 
          path="/:index"
          render={ () => {
            return ( 
              <Item 
                selectVideos={selectVideos} 
                video={video} 
              /> 
            ) 
          } } 
        />
      </Switch>
    );
  }
};

export default Routes;

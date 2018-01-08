import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { Detail } from "./components/index";

class Routes extends Component {
  render() {
    const { video } = this.props;
    return (
      <Switch>
        <Route 
          path="/movie/1" 
          render={ ({location}) => {
            console.log(location);
            return ( <Detail video={video} /> ) 
          }
  } 
/>
      </Switch>
  );
}
}
export default Routes;
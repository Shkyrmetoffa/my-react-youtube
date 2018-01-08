import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { Detail } from "./components/index";

class Routes extends Component {
  render() {
    const { video } = this.props;
    return (
      <Switch>
        <Route 
          path="/movie/:id" 
          render={ ({match}) => {
            console.log(match.params.id);
            return ( <Detail video={video} id={match.params.id} /> ) 
          }
  } 
/>
      </Switch>
  );
}
}
export default Routes;
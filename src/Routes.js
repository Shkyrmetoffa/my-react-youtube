import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
  render() {
    const { Detail } = this.props.detail;
    const { video } = this.props;
    return (
      <Switch>
        <Route path="/detail" render={() => ( <Detail video={video} /> ) } />
      </Switch>
  );
}
}
export default Routes;
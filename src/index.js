import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = (
  <Provider store={store}> 
    <Router>
      <App />
    </Router> 
  </Provider>  
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();

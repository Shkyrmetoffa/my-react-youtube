import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { Search, Detail, List } from './components/index';
import './App.css';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: '',
      videos: []
    };
     this.videoSearch('secret');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, video => {
      this.setState({
        videoId: video[0].id.videoId,
        videoTitle: video[0].snippet.title,
        videoDesc: video[0].snippet.description,
        videos: video,
        selectedVideo: video[0]
      }); 
    });
  }
  
  render() {
    return (
      <main className="container">
       <Search  />
        <div className="row">
          <Detail />
          <List />
        </div>
      </main>
    );
  }
}

export default App;
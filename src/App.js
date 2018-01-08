import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import { Search, Detail, List } from './components/index';
import { Routes } from './Routes';
import './App.css';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: '',
      videos: [],
      detail: Detail
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
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
      return (
      <main className="container">
       <Search searchChange = {videoSearch} />
        <div className="row">
          {/* <Detail video={this.state.selectedVideo} /> */}
          <Routes
            detail={this.state.detail}
            video={this.state.selectedVideo} />
          <List selectVideos={selectedVideo => this.setState({ selectedVideo }) }
            videos={this.state.videos} 
          />
        </div>
      </main>
    );
  }
}

export default App;
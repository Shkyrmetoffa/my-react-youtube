import React, { Component } from "react";
import { connect } from 'react-redux';
import YTSearch from "./libs/my-search";
import _ from "lodash";
import {setVideos} from './store';
import { Search } from "./components/Search";
import Detail from "./components/Detail";
import List from "./components/List";
import "./App.css";

const API_KEY = `AIzaSyDOSKJMms3-EdO9mFv2t4-nkKcXYggXK3s`;

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: "",
    };
    this.videoSearch("secret");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, video => {
      this.props.setVideos({
        videoId: video[0].id.videoId,
        videoTitle: video[0].snippet.title,
        videoDesc: video[0].snippet.description,
        videos: video
      });
      this.setState({
        selectedVideo: video[0]
      })
    });
  }

  render() {
    // const { videos } = this.props;
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);
    return (
      <main className="container">
        <Search 
          searchChange={videoSearch} 
        />
          <div className="row">
            <Detail 
              video={this.state.selectedVideo} 
            />
              <List
                selectVideos={selectedVideo => this.setState({selectedVideo})}
                // videos={this.props.videos}
              />
          </div>
      </main>
    );
  }
}
const mapState = videos => ({
  videos
});
const mapDispatch = dispatch => ({
  setVideos(data) {
    dispatch(setVideos(data));
  }
});
const App = connect(mapState, mapDispatch)(AppComponent);
export default App;
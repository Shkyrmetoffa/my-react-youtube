import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import YTSearch from "youtube-api-search";
import {selectedVideo} from './store';
// import buildApiRequest from "./libs/my-search";
import _ from "lodash";
import Search from "./components/Search";
import Detail from "./components/Detail";
import List from "./components/List";
import "./App.css";

const API_KEY = `AIzaSyDOSKJMms3-EdO9mFv2t4-nkKcXYggXK3s`;

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: "",
      videos: []
    };
    this.videoSearch("secret");
  }

  videoSearch(term) {
//     fetch('https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=surfing&type=video&key=AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI')
// .then(response => response.json())
// .then(video => {
//   console.log(term);
//   console.log(video.items[0].id.videoId);
//   console.log(video.items[0].snippet.title);
//   console.log(video.items[0].snippet.description);
//   console.log(video.items);
//     this.setState({
//       term: term,
//       videoId: video.items[0].id.videoId,
//       videoTitle: video.items[0].snippet.title,
//       videoDesc: video.items[0].snippet.description,
//       videos: video.items,
//       selectedVideo: video.items[0]
//     });
//   });
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
    // const selectedVideo = this.props.selectedVideo;
    const videoSearch = _.debounce((term) => {
      console.log(term);
      this.videoSearch(term);
    }, 500);
    // const videoSearch = term => this.videoSearch(term);
    return (
      <main className="container">
        <Search searchChange={videoSearch} />
          <div className="row">
            <Detail video={this.props.selectedVideo} />
              <List
                selectVideos={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
              />
          </div>
      </main>
    );
  }
}
const mapState = ({ video }) => ({
  video
});
const mapDispatch = {
  selectedVideo
};
const App = connect(mapState, mapDispatch)(AppComponent);
export default App;
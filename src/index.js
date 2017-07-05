import throttle from './utils/throttle';
import debounce from './utils/debounce';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDji4tv5VLrrrVE8Oedv-0mqCm9ywlW07Q';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchYouTube = debounce(this.searchYouTube.bind(this), 500);
    this.onSearch = throttle(this.onSearch.bind(this), 500);
  }

  searchYouTube = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  onSearch(term) {
    if (term.term.length > 2) {
      this.searchYouTube(term);
    }
  }

  handleVideoSelect(video) {
    if (video.etag !== this.state.selectedVideo.etag) {
      this.setState({
        selectedVideo: video
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.onSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(video) => this.handleVideoSelect(video)}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

import React, { Component } from 'react';
import VideoCover from 'react-video-cover';

class App extends Component {
  render() {
    return (
      <div className="video-container">
        <VideoCover
          className="hero-video"
          videoOptions={{
            src: "http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4",
            autoPlay: true,
            loop: true,
            muted: true,
          }}
        />
        <div className="hero-caption">
          <div className="hero-caption-inner">
            <h1>Hello.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

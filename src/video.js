import VideoPreview from  '@think42labs/video-preview';
import React, { Component } from 'react';


class Video extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoDetails: {}
    }
  }
  handleFileChange = e => {
    this.setState({videoDetails: e.currentTarget.files[0]})
  }
  render() {
    return (
      <div className="App">
        <input type="file" name="video_file" id="input" onChange={this.handleFileChange}/>
        <VideoPreview 
          src={this.state.videoDetails}
          size={150000}
          preview={true}
          width={520}
          height={340}
          controls={true}
          autoPlay={true}
        />
        <div className="label">
          <label className="image-upload" htmlFor="input">
						Choose your Photo
		      </label>
        </div>
      </div>
    );
  }
}
export default Video;

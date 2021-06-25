import '../App.css';

import React,{Component} from 'react';
import axios from 'axios';
import VideoPreview from  '@think42labs/video-preview';


 
class VideoComponent extends Component {
  
   constructor(props) {
     super(props)
   
     this.state = {
        selectedFile:'null'
     }
   }
   
    
    // On file select (from the pop up)
    onFileChange = event => {
    
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    // onFileUpload = () => {
    
    //   // Create an object of formData
    //   const formData = new FormData();
    
    //   // Update the formData object
    //   formData.append(
    //     "myFile",
    //     this.state.selectedFile,
    //     this.state.selectedFile.name
    //   );
    
    //   // Details of the uploaded file
    //   console.log(this.state.selectedFile);
    
    //   // Request made to the backend api
    //   // Send formData object
    //   axios.post("api/uploadfile", formData);
    // };
    
    // File content to be displayed after
    // file upload is complete
    
    render() {
        const { selectedFile} = this.state

    
      return (
        <div className="App"> 
            
            <div>
              <p style={{fontWeight:'bolder'}}> Video</p>
                <input type="file"  name="image-upload" id="input2" onChange={this.onFileChange} />
                <div className="label1">
                  <label className="image-upload" htmlFor="input2">
                      Add Video
                  </label>
                </div>
                <button id="input1" onClick={this.onFileUpload}/>
                <div className="label2">
                    <label className="image-upload" htmlFor="input1">
                        Upload Video
                    </label>
                </div>
                <br />
                {/* <VideoPreview 
                    src={this.state.selectedFile}
                    size={150000}
                    preview={true}
                    width={520}
                    height={340}
                    controls={true}
                    autoPlay={true}
                    id="file1"
                /> */}
            </div>
        </div>
      );
    }
  }
 
  export default VideoComponent;
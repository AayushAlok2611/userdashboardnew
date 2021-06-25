import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif, image.mp4'


function ImageComponent() {
  return (
    <div className="Home">
      <br />
      <JsonForm />
    </div>
  );
}

export default ImageComponent;


class JsonForm extends Component{
  constructor(props){
    super(props);
    this.state={profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'};
  }

  onFileUpload = () => {
    
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      this.state.profileImg,
      this.state.profileImg.name
    );
  
    // Details of the uploaded file
    console.log(this.state.profileImg);
  
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };


imageHandler = (e) => {
  const reader = new FileReader();
  reader.onload = () =>{
    if(reader.readyState === 2){
      this.setState({profileImg: reader.result}
      )
    }
  }
  reader.readAsDataURL(e.target.files[0])
};

  render(){
    const { profileImg} = this.state
    return (
    <div>
    {/*<input ref={this.fileInputRef} type='file' accept={acceptedFileTypes} multiple={true} onChange={this.imageHandler} />*/}
      <div className="container">
            <h1 className="heading">Add your Image</h1>
            <div className="img-holder">
              <img src={profileImg} alt="" id="img" className="img" />
            </div>
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
            <div className="label">
              <label className="image-upload" htmlFor="input">Select from device</label>
            </div>
            <div className="label">
              <label className="image-upload" htmlFor="input1">Upload your Photo</label>
            </div>
            <button id="input1" onClick={this.onFileUpload}/>
      </div>         
    </div>
    

    );
  }
}



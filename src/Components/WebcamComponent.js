import React, { Component, useState } from 'react';
import Webcam from "react-webcam";
import "../App.css"

const videoConstraints = {
  width: 700,
  height: 700,
  facingMode: "user"
};

const WebcamComponent = () => {
  const webcamRef = React.useRef(null);
  const [src,setSrc]=useState('');
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setSrc(imageSrc);
      // console.log(src);
    },

    [webcamRef]
  );

  return (
    <div className="col-appear">
      <h1>Live Image Capture</h1>
      {src==''?
        <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
        />
        :<img height={240} width={300} src={src}/>}

        {src!=''?
          <button onClick={(e)=>
          {
          e.preventDefault();
          setSrc('')
          }}
          className="webcam-btn" id="input5">
          Retake Image</button>:
          <button onClick={(e)=>{
          e.preventDefault();
          capture();
          }}
          className="webcam-btn" id="input4">Capture</button>
          }
           <div className="label1">
              <label className="image-upload" htmlFor="input4">Capture Image</label>
            </div>
            <div className="label1">
              <label className="image-upload" htmlFor="input5">Retake Image</label>
            </div>
    </div>
  );
};
export default WebcamComponent;
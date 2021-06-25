import React, { useState} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';


function MultipleImageComponent (props) {

	const handleImageChange = (e) => {
		// console.log(e.target.files)
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            
			// console.log("filesArray: ", filesArray);

			props.selectedImagesChange(filesArray);
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
            // console.log('props.selectedImages',props.selectedImages);
		}
	};

	const renderPhotos = (source) => {
		// console.log('source: ', source);
        // console.log('props.selectedImages render',props.selectedImages);

		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
			<div>
        <p style={{fontWeight:'bolder'}}>Image</p>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label1">
					<label htmlFor="file" className="image-upload">
						Add Image
					</label>
				</div>
				<div className="result">{renderPhotos(props.selectedImages)}</div>
			</div>
		</div>
	);
}

 function LicenseCombinedComponent () {
     const [vID,setVID] = useState(0);
     const [vNo,setVNo] = useState(0);
     const [assignee,setAssignee] = useState('');
     const [selectedVideo,setSelectedVideo] = useState('');
     const [selectedImages,setSelectedImages] = useState([]);

     const selectedImagesChange = (filesArray) => {
      // console.log(typeof(filesArray));
      // if( typeof(filesArray)!==typeof([]) )
      // console.log('type inequaltiy');
      setSelectedImages( prevSelectedImages => prevSelectedImages.concat(filesArray) );
      }

      const selectedVideoChange = (video) => {
          setSelectedVideo(video);
      }

     const submitHandler = (e) => {
         e.preventDefault();
     }
        return (
            <div>
                <MuiThemeProvider>
                <React.Fragment>
                <br/><br/><br/>
                <TextField
                id="CompanyVehicleID" 
                label="Company Vehicle ID"
                value = {vID}
                onChange ={e=>setVID(e.target.value)}
                />
                <br /><br />
                <TextField
                id="VehicleNumber" 
                label="Vehicle Number"
                value = {vNo}
                onChange ={e=>setVNo(e.target.value)}
                />
                <br /><br />
                <TextField
                id="VehicleAssignee" 
                label="Vehicle Assignee"
                value = {assignee}
                onChange ={e=>setAssignee(e.target.value)}
                />
                <br /><br /><br /><br />
                <div className="col-appear">
                <MultipleImageComponent selectedImages={selectedImages} selectedImagesChange={selectedImagesChange}/>
                <VideoComponent selectedVideo={selectedVideo} selectedVideoChange={selectedVideoChange}/>
            </div>
                <br/> <br/>
                <RaisedButton>Submit</RaisedButton>
                </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
}

function VideoComponent (props) {
     
  // On file select (from the pop up)
  const onFileChange = event => {
    // Update the state
    props.selectedVideoChange(event.target.files[0]);
  };
  
  // File content to be displayed after
  // file upload is complete
    return (
      <div className="App"> 
          
          <div>
            <p style={{fontWeight:'bolder'}}> Video</p>
              <input type="file"  name="image-upload" id="input2" onChange={onFileChange} />
              <div className="label1">
                <label className="image-upload" htmlFor="input2">
                    Add Video
                </label>
              </div>
              <br />
          </div>
      </div>
    );
}

export default LicenseCombinedComponent

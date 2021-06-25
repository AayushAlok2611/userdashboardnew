import React, { useState ,useEffect} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'



{/*function MultipleImageComponent (props) {
    
	const handleImageChange = (e) => {
		// console.log(e.target.files)
		if (e.target.files) {
			// const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            // 
			// console.log("filesArray: ", filesArray);

			props.selectedImagesChange(e.target.files);
			// Array.from(e.target.files).map(
			// 	(file) => URL.revokeObjectURL(file) // avoid memory leak
			// );
		}
	};

	// const renderPhotos = (source) => {
	// 	return source.map((photo) => {
	// 		return <img src={photo} alt="" key={photo} />;
	// 	});
	// };

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
                <div className="result"></div>
				 <div className="result">{renderPhotos(props.selectedImages)}</div> 
			</div>
		</div>
	);
} */}

 function FaceCombinedComponent () {
     const [username,setUsername]  = useState('');
     const [age,setAge] = useState();
     const [gender,setGender] = useState('');
     const [video,setVideo] = useState();
     const [files,setFiles] = useState();

    {/*const usernameChange = e => {
        setUsername(e.target.value);
        console.log('username' , username);
    }

    const ageChange = e => {
        setAge(e.target.value);
        console.log('Age' , age);
    }

    const genderChange = e => {
        setGender(e.target.value);
        console.log('gender' , gender);
    }

    const selectedImagesChange = (filesArray) => {
        setSelectedImages(filesArray);
        // setSelectedImages( prevImages => prevImages.concat(filesArray) );
    }

    const selectedVideoChange = (video) => {
        setSelectedVideo(video);
    }

    useEffect(()=>{
        console.log('selectedImages',selectedImages);
        console.log('selectedVideo',selectedVideo);
    },[selectedImages,selectedVideo])

    const submitHandler = e => {

        e.preventDefault();
        console.log('Submission started');
        const data = new FormData();
        data.append("images",selectedImages);
        data.append("video",selectedVideo);
        data.append("name",username);
        data.append("age",age);
        data.append("gender",gender);
        Axios({
            method: 'POST',
            url: '/api/faces',
            data: data
            ,
             headers:{
                 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjhmOTAzMmEwODA5NDcyZWNjZmZlNSIsImlhdCI6MTYyNDI4NTUzOSwiZXhwIjoxNjI2ODc3NTM5fQ.Ed7vKhgECnx-6WStNdrc-G8PuYFSUXHHMWA-NTQY_L4"
             }
          }).then((resp) => {
              console.log('response returned successfully');
              console.log('returned response' , resp)

          }).catch(err => {
              console.log(err);
          })
    }*/}
    async function uploadFile() {
        const formData = new FormData()
        console.log('upload', video)
        for (let i = 0; i < files.length; i++) {
          formData.append('images', files[i])
        }
        formData.append('video', video[0])
        formData.append('name', username)
        formData.append('age',age)
        formData.append('gender',gender)
        axios
          .post('https://mysterious-dawn-87140.herokuapp.com/api/faces', formData, {
            headers: {
              'content-type': 'multipart/form-data',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjhmOTAzMmEwODA5NDcyZWNjZmZlNSIsImlhdCI6MTYyNDQ2NTk0MSwiZXhwIjoxNjI3MDU3OTQxfQ.hveteGjz1Q2D2vgs2KXcg6ef0yIxqYi-T09DOQr8_rg',
            },
          })
          .then((response) => {
            console.log(response.data)
            console.log("success")
          })
      }
      async function handleSubmit(e) {
        e.preventDefault()
        console.log('here')
        let res = await uploadFile()
        console.log(res)
      }
        return (
            <div>
            <br /> <br />
            <h1>Face Recognition</h1>
            <br /> <br />
            <form onSubmit={handleSubmit}>
            <MuiThemeProvider>
            <React.Fragment>
                <TextField
                id="username" 
                label="User Name"
                defaultValue = {username}
                onChange ={(e) => setUsername(e.target.files)}
                />
                <br /><br />
                <TextField
                id="age" 
                label="Age"
                defaultValue = {age}
                onChange ={(e) => setAge(e.target.files)}
                />
                <br /><br />
                <TextField
                id="gender" 
                label="Gender"
                defaultValue = {gender}
                onChange ={(e) => setGender(e.target.files)}
                />
                <input type="file"  name="image-upload" id="input2" onChange={(e) => setFiles(e.target.files)} />
                <div className="label1">
                  <label className="image-upload" htmlFor="input2">
                      Add Image
                  </label>
                </div>
                <br />
                <input type="file"  name="image-upload" id="input2" onChange={(e) => setVideo(e.target.files)} />
                <div className="label1">
                  <label className="image-upload" htmlFor="input2">
                      Add Video
                  </label>
                </div>

            <br /><br /><br /><br /><br />
            {/*<div className="col-appear">
                <MultipleImageComponent selectedImages={selectedImages} selectedImagesChange={selectedImagesChange}/>
                <VideoComponent selectedVideo={selectedVideo} selectedVideoChange={selectedVideoChange}/>
        </div>*/}
            <br/> <br/>
            <button type='submit' className='btn btn-info'>
          {' '}
          Upload File{' '}
        </button>
            </React.Fragment>
            </MuiThemeProvider>
            </form>
            </div>
        )
}


{/*function VideoComponent (props) {
     
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
  }*/}


export default FaceCombinedComponent

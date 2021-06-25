import axios from 'axios'
import React,{ useState } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function NewFace() {
  const [files, setFiles] = useState()
  const [video, setVideo] = useState()
  const [name,setUsername]  = useState('')
  const [age,setAge] = useState('')
  const [gender,setGender] = useState('')

  async function uploadFile() {
    const formData = new FormData()
    console.log('upload', video)
    console.log('name', name)

    for (let i = 0; i < files.length; i++) {
      formData.append(`images`, files[i])
    }
    formData.append('video', video[0])
    formData.append('name', name)
    formData.append('age', age)
    formData.append('gender', gender)
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
        Name:
      <input
          type='text'
          id='name'
          name= 'name'
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        Age:
        <input
          type='text'
          id='age'
          name='age'
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        Gender:
        <input
          type='text'
          id='gender'
          name='gender'
          onChange={(e) => setGender(e.target.value)}
        />
        <br />
        Image:
        <input
          type='file'
          id='img'
          multiple
          name='img'
          onChange={(e) => setFiles(e.target.files)}
        />
        <br />
        Video:
        <input
          type='file'
          id='video'
          multiple
          name='video'
          onChange={(e) => setVideo(e.target.files)}
        />
        <br />
        <button type='submit' className='btn btn-info'>
          {' '}
          Upload File{' '}
        </button>
      </form>
    </div>
  )
}

export default NewFace

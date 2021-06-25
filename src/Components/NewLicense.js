import axios from 'axios'
import React,{ useState } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function NewLicense() {
  const [files, setFiles] = useState()
  const [video, setVideo] = useState()
  const [vid,setVID]  = useState('')
  const [vno,setVNO] = useState('')
  const [assignee,setAssignee] = useState('')

  async function uploadFile() {
    const formData = new FormData()
    console.log('upload', video)

    for (let i = 0; i < files.length; i++) {
      formData.append(`images`, files[i])
    }
    formData.append('video', video[0])
    formData.append('vid', vid)
    formData.append('vno', vno)
    formData.append('assignee', assignee)
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
            <h1>License Plate Recognition</h1>
            <br /> <br />
      <form onSubmit={handleSubmit}>
        VID:
      <input
          type='text'
          id='vid'
          name= 'vid'
          onChange={(e) => setVID(e.target.value)}
        />
        <br />
        VNO:
        <input
          type='text'
          id='vno'
          name='vno'
          onChange={(e) => setVNO(e.target.value)}
        />
        <br />
        Assigne:
        <input
          type='text'
          id='assignee'
          name='assignee'
          onChange={(e) => setAssignee(e.target.value)}
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

export default NewLicense

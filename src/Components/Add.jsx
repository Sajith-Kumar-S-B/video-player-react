import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {
    const [show, setShow] = useState(false);

    const [video,setVideo]= useState({id:'',caption:'',url:'',embedLink:''})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const extractUrl = (e)=>{
      const {value} = e.target
      if(value){
        const embedData = `https://www.youtube.com/embed/${value.slice(-11)}`
        setVideo({...video,embedLink:embedData})
      }else{
        setVideo({...video,embedLink:""})
      }
     
    }
    console.log(video);

    const handleUpload = async ()=>{
      // get details of video

      const {id,caption,url,embedLink} = video
      //  if video empty or not
      if(!id || !caption || !url || !embedLink){
        toast.warning("Please fill  the  details completely")
      }else{
        // make api call
        const response = await uploadVideo(video)
        // console.log(response);

        if(response.status>=200 && response.status<300){
          toast.success(`"${response.data.caption}" video uploaded successfully`)
          // set server response
          setUploadVideoServerResponse(response.data)
          // hide modal

          handleClose()
        }else{
          toast.error('Uploading error.. Perform the action afer sometime.')
        }
      }
    }
  return (
   <>
        <div className="d-flex align-items-center">
            <h5>Upload New Video</h5>
            <button onClick={handleShow} className='btn'><i className="fa-solid fa-circle-plus fs-5"></i></button>
        </div>
        <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please enter the following details</p>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='mb-3' onChange={(e)=>setVideo({...video,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
        <Form.Control className='mb-3' onChange={(e)=>setVideo({...video,id:e.target.value})} type="text" placeholder="Enter Video Id" />
        <Form.Control className='mb-3' onChange={(e)=>setVideo({...video,url:e.target.value})} type="text" placeholder="Enter Video Image URL" />
        <Form.Control className='mb-3' onChange={(e)=>extractUrl(e)} type="text" placeholder="Enter Youtube Video Link" />

      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center'
      theme='colored' autoClose={2000} />
   </>
  )
}

export default Add
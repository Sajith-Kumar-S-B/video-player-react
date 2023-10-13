import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { deleteAVideo, watchHistory } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    const handleShow = async () => {
      setShow(true);
// get caption and link
      const {caption,embedLink} =  displayData
      // generate timestamp

      let today = new Date()

      const timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(today)

      // watch video to addjson server
      const reqBody = {
        caption,embedLink,timeStamp
      }

      // make api call
      await watchHistory(reqBody)
    }

   

    const deleteTheVideo = async (id)=>{
      const response  = await deleteAVideo(id)
     setDeleteVideoStatus(true)
     
    }

   const dragStarted= (e,id)=>{
    console.log("Drag started");
    e.dataTransfer.setData("cardId",id)
   }

  return (
    <> 
   {displayData &&
    <Card className='mb-3' style={{width:'200px', border:'none'}} draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} >
    <Card.Img  onClick={handleShow} height={'180px'} style={{borderRadius:'0.75rem'}} variant="top" src={displayData?.url} />
    <Card.Body>
      <Card.Title className='d-flex justify-content-center align-items-center'>
        <h6>{displayData?.caption}</h6>
       {insideCategory?"": <button onClick={()=>deleteTheVideo(displayData?.id,)} className='btn'><i className="fa-solid fa-trash"></i></button>}
        </Card.Title>
      
    </Card.Body>
  </Card>}
  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400px" src={`${displayData?.embedLink}?autoplay=1`} title="ANIMAL Teaser (Malayalam): Ranbir Kapoor |Rashmika M, Anil K, Bobby D |Sandeep R Vanga |Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        </Modal.Body>
      
      </Modal>
  
  
  
  </>
  )
}

export default VideoCard
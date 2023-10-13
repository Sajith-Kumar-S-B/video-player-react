import React from 'react'
import {Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl = useNavigate()
  const navigate = ()=>{
     navigateByUrl('/home')
  }
  return (
    <>
    <Row className='mt-5 mb-5 justify-content-center  align-items-center'>
      <Col lg={4}>
        <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore sapiente quas odio aperiam illo porro esse natus omnis rerum cumque asperiores quam, deserunt nostrum excepturi perferendis consectetur. Id, maiores!</p>
        <button onClick={navigate} className='btn btn-primary mt-3 fw-bolder'>Get Started</button>
      </Col>

      <Col className='ps-2' lg={6}>

        <img className='img-fluid ms-3 ps-5 w-100' src="https://i.pinimg.com/originals/cc/0e/d3/cc0ed34dd09adf414a19a69b460804f4.gif" alt="" />
      </Col>

    </Row>
    <div className="container mb-5 mt-5 d-flex flex-column justify-content-between align-items-center">
      <h3>Features</h3>
   <div className='cards d-flex mt-5 justify-content-between align-items-center w-100'>
      <Card className='p-3' style={{ width: '22rem',border:'none' }}>
        <Card.Img style={{height:'300px',width:'300px'}} variant="top" src="https://i.gifer.com/Z23N.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='p-3' style={{ width: '22rem' ,border:'none'}}>
        <Card.Img style={{height:'300px',width:'300px'}} variant="top" src="https://media.tenor.com/iUvxx_10mRQAAAAi/abiera-music.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='p-3' style={{ width: '22rem',border:'none' }}>
        <Card.Img style={{width:'100%'}} variant="top" src="https://i.pinimg.com/originals/15/1a/c1/151ac1da32a17de97d6fcac29e112a2d.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
   </div>
    </div>
    <div className='conatiner mb-5 mt-5 d-flex justify-content-between p-5 w-100 align-items-center'>
       <div className='content'>
        <h3 className='text-warning mb-5'>
          Simple,Fast and Powerful
        </h3>
        <h6 className='mt-4'> <span className='fs-5 fw-bolder'>Play Everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et, dolor temporibus rem error commodi, odit eligendi alias recusandae nobis dicta itaque officiis perferendis quae totam rerum maxime? Assumenda, voluptates?</h6>
        <h6 className='mt-4'> <span className='fs-5 fw-bolder'>Categorise Videos </span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et, dolor temporibus rem error commodi, odit eligendi alias recusandae nobis dicta itaque officiis perferendis quae totam rerum maxime? Assumenda, voluptates?</h6>
       </div>
       <div className='video ms-5'>
       
        <iframe width="689" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
       </div>
    </div>
    </>
  )
}

export default Landingpage
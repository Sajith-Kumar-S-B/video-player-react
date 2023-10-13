import React, { useState } from 'react'
import Add from '../Components/Add';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Category from '../Components/Category';
import View from '../Components/View';

function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-between">
      <div className='add'> <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/></div>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'black'}} className='fs-5'>Watch History</Link>
    </div>
    <Row className='container-fluid mt-5 mb-5 w-100'>
       <div className='ms-5 all-videos col-lg-8'>
        <h3>All Videos</h3>
        <div className='videos'>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
       </div>
       <div className='ms-3 category col-lg-3 '>
        <Category />
       </div>
      
    </Row>
    
    </>
  )
}

export default Home
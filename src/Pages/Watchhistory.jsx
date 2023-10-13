import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'

function Watchhistory() {
 const[history,setHistory] = useState([])
  const getAllWatchHistory = async () =>{
    // make api call
    const {data} = await getHistory()
    setHistory(data)
  }
  

  const handleDeleteHistory = async(id)=>{
    // make api call to delete
    await deleteHistory(id)
    getAllWatchHistory()
  }





  useEffect(()=>{
    getAllWatchHistory()
  },[])
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px'}}><i className="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</Link>
    </div>
    <table className='mt-5 container mb-5'>
      <thead>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Time Stamp</th>
        <th>Action</th>
      </thead>
      <tbody>
       {history?.length>0 ?history.map((item,index)=><tr>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td>{item?.embedLink}</td>
          <td>{item?.timeStamp}</td>
          <td><button className='btn' onClick={()=>handleDeleteHistory(item?.id)}><i className="fa-solid fa-trash"></i></button></td>
          
       </tr>) :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p>
       }
      </tbody>
    </table>
    </>
  )
}

export default Watchhistory
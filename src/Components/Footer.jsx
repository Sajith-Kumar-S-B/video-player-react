import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
   
      <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center flex-column'>
         <div className='footer-content d-flex justify-content-evenly align-items-center w-100 flex-wrap'>
               <div style={{width:'400px'}}  className='website'>
              
                   <h4><i class="fa-solid fa-play fa-flip"></i>{' '}Media Player</h4>
                   <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                  <h6>Code licensed MIT, docs CC BY 3.0.</h6>
                   <p>Currently v1.0.0</p>
               </div>
              
         
           <div className='links d-flex flex-column' >
          <h5> Links</h5>
      <Link to={'/home'} style={{color:'black',textDecoration:'none'}}>Landing Page</Link>
      <Link to={'/'} style={{color:'black',textDecoration:'none'}}>Home</Link>
      <Link to={'/watch-history'} style={{color:'black',textDecoration:'none'}}>Watch History</Link>

      
           </div>
           <div className='guides d-flex flex-column'>
            <h5>Guides</h5>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{color:'black',textDecoration:'none'}}>React</Link>
      <Link to={'https://getbootstrap.com/'} style={{color:'black',textDecoration:'none'}}>Bootstrap</Link>
      <Link to={'https://fontawesome.com/'} style={{color:'black',textDecoration:'none'}}>Fontawesome</Link>

    
            </div>
            <div className='contact'>
              <h4>Contact Us</h4>
              <div className='d-flex justify-content-center align-items-center gap-2 '>
                <input className='form-control rounded' type="text" placeholder='Enter your Email' />
              <button className='bg-primary' style={{borderRadius:'10px',padding:'5px 20px',color:"white"}}><i className="fa-solid fa-arrow-right fa-beat"></i></button></div>
            </div>
          </div>
          <p>Media Player Copyright@2023 Made with React</p>
      </div>
      
  )
}

export default Footer
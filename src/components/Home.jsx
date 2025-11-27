import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import video1 from '../img/video1.mp4';
function Home() {
  return (
    <div id='home'>
    <div style={{ display: 'block', padding: 0}}>    
  
  <video  autoPlay loop muted src = {video1}  type="video/mp4" className='video'></video>
<div className='bncontentt'>
  <div className='bncontent'>
  <h3>  I'm Anit Malik</h3>
  <h1>  UX/UI Designer &amp; Front-end Developer  </h1>
</div>
</div>
    </div>
  </div>
  )
}

export default Home
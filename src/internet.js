import {Detector} from 'react-detect-offline'

import React from 'react'

function Internet(props) {
  return (
   <Detector render={({online})=>(
    <div id='in'>
        {online?props.children:<>
          <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
    <img src='https://www.telnetww.com/wp-content/uploads/2022/03/slow-internet-speed-768x675.png' alt='im'></img>
   
    
    </div>
    <h1 style={{textAlign:'center'}}>Check Your Internet Connection</h1>
        </>}
    </div>
   )}>

   </Detector>
  )
}

export default Internet
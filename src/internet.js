import {Detector} from 'react-detect-offline'

import React from 'react'

function Internet(props) {
  return (
   <Detector render={({online})=>(
    <div>
        {online?props.children:<div style={{display:'flex',justifyContent:'center',marginTop:'100px'}}>
    <img src='https://www.telnetww.com/wp-content/uploads/2022/03/slow-internet-speed-768x675.png' alt='im'></img>

    </div>}
    </div>
   )}>

   </Detector>
  )
}

export default Internet
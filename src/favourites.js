import React from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { removewish } from "./slice/cardSlice";
import Portablenav from './portablenav';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Favourites() {
  const getter=useSelector(state=>state.properties.wishlist)
  const dispatch=useDispatch()
  const nav=useNavigate()
  const [togg,setTogg]=useState(false)
  const trigger=()=>{
    setTogg(!togg)
  }
  return (
    <>
    <Portablenav set={trigger}/>
    <h1 id='wish' style={{marginTop:togg?'15em':'2em'}}>Wishlist</h1>
    
    <div className='outer fav'>
    {!getter.length && (
        <div>
          <h1 className="result">
            !!! Your Wishlist is Empty !!!
          </h1>
        </div>
      )}
    {getter.map((item) => {
      return (
        
          <div className="cards">
          <img src={item.image} alt={item.type}></img>
          <p id="content">
            <b>Price :</b> `${item.price}`<br></br>
            <b>City :</b> {item.city}(<i>{item.location}</i>)
            <br></br>
            <b>Size :</b> {item.size}
            <br></br>
           
            <b>Property type :</b> {item.type}
            <button className="wishlist" > 
            <FontAwesomeIcon style={{color:item.color}} onClick={()=>dispatch(removewish(item.id))} className='heart' icon={faHeart} />
            </button>
            
          </p>
        </div>
        
        
      );
    })}
    
    </div>
    <div className='back'>
      <button onClick={()=>nav('/')}>Home</button>
    </div>
    </>
  )
}

export default Favourites
import React from "react";
import { useSelector } from "react-redux";
import Nav from "./Navbar";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { wish } from "./slice/cardSlice";
import { useState } from "react";
export default function Home() {
  let get = useSelector((state) => state.properties.start);
  const dispatch = useDispatch();
  const [togg, setTogg] = useState(false);

  return (
    <>
      <Nav />

      <Search />
      {!get.length && (
        <div>
          <h1 className="result">
            Search Properties doesn't Match with Results
          </h1>
        </div>
      )}

      <div className="outer">
        {get.map((item, index) => {
          return (
            <div className="cards">
              <img src={item.image} alt={item.type}></img>
              <p id="content">
                <p style={{backgroundColor:'rgb(155, 0, 255)',width:'80px',textAlign:'center',color:'white',padding:'5px',marginLeft:'302px',borderRadius:'10px'}}>{item.type}</p>
                <b>Price :</b> `${item.price}`<br></br>
                <b>City :</b> {item.city}(<i>{item.location}</i>)<br></br>
                <b >Size :</b> {item.size}
                <br></br>
                
                <button className="wishlist">
                  <FontAwesomeIcon
                    onClick={() => {
                      dispatch(wish([index, item.id]));
                      setTogg(!togg);
                    }}
                    style={{ color: item.color }}
                    className="heart"
                    icon={faHeart}
                  />
                </button>
              </p>
            </div>
          );
        })}
        
      </div>
      
    </>
  );
}

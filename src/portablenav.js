import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  faBars,
  faTimes,
  faHouse,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Portablenav(props) {
  const nav = useNavigate();
  const [togg, setTogg] = useState(false);
  return (
    <nav>
      <FontAwesomeIcon className="house" icon={faHouse} />
      <h3 style={{ fontSize: "30px", fontWeight: "bolder" }}>Estatery</h3>
      {!togg ? (
        <FontAwesomeIcon
          className="bar"
          onClick={() => {
            setTogg(!togg);
            props.set();
          }}
          icon={faBars}
        />
      ) : (
        <FontAwesomeIcon
          className="bar"
          onClick={() => {
            setTogg(!togg);
            props.set();
          }}
          icon={faTimes}
        />
      )}
      <FontAwesomeIcon
        className="bar navheart"
        onClick={() => nav("/favourites")}
        icon={faHeart}
      />
      <ul className={togg ? "list" : ""}>
        <li className={togg ? "menu" : ""}>Rent</li>
        <li className={togg ? "menu" : ""}>Buy</li>
        <li className={togg ? "menu" : ""}>Sell</li>
        <li className={togg ? "menu" : ""}>Manage Property</li>
        <li className={togg ? "menu" : ""}>Resources</li>
        <li
          className={togg ? "menu" : ""}
          onClick={() => {
            nav("/favourites");
          }}
        >
          Wishlist
        </li>
        <div className="btns">
          <button className={togg ? "menu" : ""}>Login</button>
          <button className={togg ? "menu" : ""} style={{ marginLeft: "20px" }}>
            Signup
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default Portablenav;

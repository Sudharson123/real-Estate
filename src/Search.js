import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtering } from "./slice/cardSlice";
function Search() {
  const [location, setLoc] = useState("");
  const [price, setPrice] = useState("");
  const [proptype, setProptype] = useState("");
  const dispatch = useDispatch();
  const filter = () => {
    dispatch(filtering([location, price, proptype]));
  };
  return (
    <div className="search">
      <div>
        <p>Location</p>
        <select onChange={(e) => setLoc(e.target.value)}>
          <option>Choose your Location</option>
          <option value="New York">New York,US</option>
          <option value="Los Angeles">Los Angeles,CA</option>

          <option value="Washington">Washington,DC</option>
        </select>
      </div>
      <div>
        <p>Date</p>
        <input type="date"></input>
      </div>
      <div>
        <p>Price</p>
        <select onChange={(e) => setPrice(e.target.value)}>
          <option>Price range</option>
          <option value="500-1500">$500-$1500</option>
          <option value="1500-2500">$1500-$2500</option>
          <option value="2500-4000">$2500-$4000</option>
        </select>
      </div>
      <div>
        <p>Property Type</p>
        <select onChange={(e) => setProptype(e.target.value)}>
          <option>Type of property</option>
          <option value="House">Houses</option>
          <option value="Hotel">Restaurants</option>
          <option value="Office">Offices</option>
        </select>
      </div>
      <div className="sbutton">
        <button onClick={() => filter()}>Search</button>
      </div>
    </div>
  );
}

export default Search;

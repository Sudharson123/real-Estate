import React from "react";
import { useState } from "react";
import Portablenav from "./portablenav";
function Nav() {
  const [togg, setTogg] = useState(false);

  const trigger = () => {
    setTogg(!togg);
  };

  return (
    <>
      <Portablenav set={trigger} />
      <div id={togg ? "whilenav" : ""}>
        <h1 style={{ textAlign: "center", marginTop: "2em" }}>
          Search Properties
        </h1>
      </div>
    </>
  );
}

export default Nav;

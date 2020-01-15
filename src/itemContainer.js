import React from "react";

function itemContainer() {
  return (
	<div className="container">
    <h1>Where would you like to travel to?</h1>
	  <select>
		<option>London</option>
		<option>Paris</option>
	  </select>
    <img src="/earth.jpg" alt="earth"></img>
	</div>
  );
}

export default itemContainer;

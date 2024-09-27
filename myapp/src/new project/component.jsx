// import React,{useState} from "react";
import "./component.css";

let Component = (item) => {
  let date = item.itemD;

  return (
    
    <div id="main">

      <div id="date">
       <h2 id="dateA"> {date}</h2>
        </div>
      <div id="name">
        <h1>{item.itemN}</h1>
      </div>
      <div id="price">
        <h2>{item.itemP}</h2>
      </div>


     
    </div>
  );
};
export default Component;

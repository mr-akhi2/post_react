import React, { useState,useEffect } from "react";
import "./App.css";
import Form from "./form";
import Cont from "./container";
let dummy = [
  {
    item: 2,
    itemDate: "31 jun 2022",
    itemName: "RAM",
    itemPrice: "500",
  },
  {
    item: 3,
    itemDate: "12 Dec 2012",
    itemName: "Krishna",
    itemPrice: "500",
  },
  {
    item: 3,
    itemDate: "22 Dec 2000",
    itemName: "Bajrang",
    itemPrice: "850",
  },
];

let App1 = () => {
  const [itemW, setitemW] = useState(dummy);
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/1').
  //   then(respons=>{
  //     return respons.json();
  //   }).then(data=>{
  //     console.log(data);
  //     setitemW(data);
  //   })
  // },[]);
 

  const newForm = (expense1) => {
    var update = [expense1, ...itemW];
    // console.log(expense1);
    // console.log(update);

    setitemW(update);
  };
  return (
    <div>
      <h1 id="heading_app">THIS IS EXPENSES BOX</h1>
      <Form savedata={newForm}></Form>
      <Cont item={itemW}></Cont>
    </div>
  );
};
export default App1;

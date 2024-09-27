import { useState } from "react";
import "./form.css";

let Form = (props) => {
 const[enterName,setenterTitle]=useState('');
 const[enterPrice,setenterPrice]=useState('');
 const[enterdate,setenterDate]=useState('');

  let Titlechangehandle=(event) => {
    setenterTitle(event.target.value);
  };
  let Pricechangehandle=(event) =>{
    setenterPrice(event.target.value);
  };
  let Datechangehandle =(event)=>{
    setenterDate(event.target.value);
  };
   let submitted=(e)=>{
    e.preventDefault();
   let expensesData={
    itemDate:enterdate,
     itemName:enterName,
     itemPrice:enterPrice
    
   }
   props.savedata(expensesData);
  //  console.log(expensesData);
   setenterTitle('');
   setenterPrice('');
   setenterDate('');
   }
  return (
    <div id="cont">
      <form onSubmit={submitted}>
        <div className="user">
          <label>Enter Title</label>
          <input type="text" value={enterName} onChange={Titlechangehandle} />
        </div>
        <div className="user">
          <label>Enter Price</label>
          <input type="number" placeholder="$" value={enterPrice} onChange={Pricechangehandle} />
        </div>
        <div className="user">
          <label>Enter Date</label>
          <input type="date" value={enterdate} onChange={Datechangehandle} />
        </div>
        <button id="bttn">Submit</button>
    
      </form>
    </div>
  );
};
export default Form;

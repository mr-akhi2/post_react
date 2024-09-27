import "./container.css";
import Component from "./component";

let Cont = (props) => {
  return(
    <div className="body">
    <div id="container">
      <h1 className="heading">Expenses box</h1>
      {
        props.item.map(
          expens=>(
            <Component
            itemD={expens.itemDate}
            itemN={expens.itemName}
            itemP={"$"+expens.itemPrice}
            >
            </Component>
          
          )
        )
      }
      </div>
      </div>
)
};
export default Cont;

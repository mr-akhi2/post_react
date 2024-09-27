import "./item.css";
let Item = ({ foodItem, handleBuybutton, onDelete }) => {
  return (
    <>
      <li id="li">
        {foodItem}
        <button id="btns1" onClick={onDelete}>
          Delete
        </button>
        <button
          id="btns"
          onClick={() => {
            handleBuybutton();
          }}
        >
          buy
        </button>
      </li>
    </>
  );
};
export default Item;

//  here the fooditems data take as a props
// here in the  buttons its send the function that it can be defined from the parent behaviour

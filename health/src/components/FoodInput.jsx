import "./foodInput.css";
const FoodInput = ({ handleChange }) => {
  return (
    <div>
      <input
        type="text"
        name=""
        id="inp"
        placeholder="enter food items"
        onKeyDown={handleChange}
      />
    </div>
  );
};
export default FoodInput;

// it also send the App.js to set the behaviour with the { handleChange }

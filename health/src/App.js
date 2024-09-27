import "./App.css";
import { useRef, useState } from "react";
import FoodItems from "./components/foodItems";
import Error from "./components/Error";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
// import { useRef } from "react";

function App() {
  let [fooditems, setfooditems] = useState([
    "Paneer",
    "Pulses",
    "green Vegitables",
  ]);

  let [show, setshow] = useState();

  const handleChange = (event) => {
    if (event.key === "Enter") {
      let newFood = event.target.value;
      let newItem = [newFood, ...fooditems];
      setfooditems(newItem);
      event.target.value = "";
    }

    setshow(event.target.value);
  };

  let onDelete = (items) => {
    const NewData = fooditems.filter((item) => {
      return item !== items;
    });
    setfooditems(NewData);
  };
  return (
    <Container>
      <h1 id="head">Healthy Foods</h1>
      <FoodInput handleChange={handleChange}></FoodInput>

      <Error passItems={fooditems}></Error>
      <FoodItems passItems={fooditems} onDelete={onDelete}></FoodItems>
    </Container>
  );
}

export default App;

// Each child in a list should have a unique "key" prop.
// then;
// then we have to align all the li tag to key like UNSAFE_mapRouteProperties;

//

// {fooditem is defined in App.js becouse of this is used in both fooditems and error Message that's why it is defined in the parant and it transfer the data from parant to childs}

/// most important thiings
// data pass both
// <Error passItems={fooditems}></Error>
// <FoodItems passItems={fooditems}></FoodItems>

// child to parent  passing data then we use to emit events

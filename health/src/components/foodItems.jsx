import Item from "./item";
let FoodItems = ({ passItems, onDelete }) => {
  return (
    <>
      <ul id="ul">
        {passItems.map((items) => (
          <Item
            key={items}
            foodItem={items}
            handleBuybutton={() => alert(`${items} is bought succesfully`)}
            onDelete={() => {
              onDelete(items);
            }}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;

//  here fooditem={item} pass the item data from Fooditems to item
//   it takes data from the  app. js through props with name passItems {parent to child}

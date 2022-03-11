import React from "react";
import ShowItems from "./Components/Show Items/ShowItems.js"; // import the ShowItem component function
import AddItem from "./Components/Add Items/AddItems.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, todo: "Math assignment", duration: 4 },
        { id: 2, todo: "Physics assignment", duration: 2 },
        { id: 3, todo: "Chemistry assignment", duration: 3 },
      ],
    };
  }

  // function that delete an item, using filter array that return true if the argument itemID is not the same as items in state
  delItem = (itemID) => {
    const beforeItems = this.state.items;
    const afterItems = beforeItems.filter((item) => {
      return itemID !== item.id;
    });
    this.setState({ items: afterItems });
  };

  // function that add an item; name and duration are the arguments, ID is generated depending on the last item ID in the state
  addItem = (itemName, itemDuration) => {
    if (itemName === "" || itemDuration === "") return null;
    let newItemName = itemName,
      newitemDuration = itemDuration,
      beforeItems = this.state.items,
      arrayLen = beforeItems.length,
      newID;
    if (arrayLen >= 1) {
      newID = beforeItems[arrayLen - 1].id;
      newID += 1;
    } else {
      newID = 0;
    }

    const newItem = {
      id: newID,
      todo: newItemName,
      duration: newitemDuration,
    };
    // bellow the correct way to push an object into "a state variable of array"
    // this.state.myArray.push(newItem) returns the length of the array !
    this.setState({ items: [...beforeItems, newItem] });
  };
  render() {
    return (
      <>
        <h1>Todo App</h1>
        {/* pass the state and functions of App.js as props to the bellow components */}
        <ShowItems items={this.state.items} delItem={this.delItem} />
        <AddItem addItem={this.addItem} />
      </>
    );
  }
}

export default App;

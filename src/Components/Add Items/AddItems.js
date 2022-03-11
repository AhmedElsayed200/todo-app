import React, { useState } from "react";
import "./AddItems.css";

const AddItem = (props) => {
    // declaring variables that will hold values of name and age that is input from textbox
    let [itemName, setTodo] = useState("");
    let [itemDur, setDur] = useState("");
    const addItem = props.addItem; // function declared in App.js that is used to update the App state

    // a function that will be called when submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(itemName, itemDur); // calling the addItem func to add the name and the age to the App state
    };

    return (
        // write the onSubmit in the form is the better way than onClick at the submit buttom
        // as the onSubmit will work if the user pressed enter
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Your Task..."
                name="Name"
                id="nameTxtBox"
                value={itemName}
                onChange={(e) => setTodo(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter Estimated Duration..."
                name="Age"
                id="ageTxtBox"
                value={itemDur}
                onChange={(e) => setDur(e.target.value)}
            />
            <input type="submit" value="Add Item" id="submitBut" />
        </form>
    );
};

export default AddItem;

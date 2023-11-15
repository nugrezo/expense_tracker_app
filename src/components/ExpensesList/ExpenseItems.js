import React from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItems.module.css";

/*
  This code defines a React functional component named `ExpenseItems`. 
  Here's an explanation of the code:
  - The component takes a prop `props` as an argument, 
  which is expected to have properties such as `id`, `title`, `amount`, `date`, and 
  `onDelete`.
  - Inside the component, there's a `deleteHandler` function that logs the `id` 
  to the console, indicating that the delete button is working. It then calls the 
  `onDelete` function from the props with the `id` as an argument.
  - The component returns a list item (`<li>`) containing a div with the 
  class `expense_item`. This div has an `onClick` event that triggers the 
  `deleteHandler` function when clicked.
  - Within this div, there's the `ExpenseDate` component, which is 
  passed the `date` property from the props. This component is responsible 
  for rendering the formatted date.
  - Also within the div, there's another div with the class 
  `expense_item_description`. This div contains an `h2` 
  element displaying the `title` and another div with the class 
  `expense_item_price` displaying the `amount` formatted as a dollar amount.
  Essentially, this component represents an individual expense item, 
  complete with its date, title, and amount. The delete button functionality 
  is also included, triggering the `onDelete` function when clicked. 
  This component can be used within a list of expenses to display and manage each 
  individual expense item.
*/
const ExpenseItems = (props) => {
  const deleteHandler = () => {
    console.log("props.id is", props.id);
    console.log("delete button is working");
    props.onDelete(props.id);
  };
  return (
    <li>
      <div className={classes.expense_item} onClick={deleteHandler}>
        <ExpenseDate date={props.date} />
        <div className={classes.expense_item_description}>
          <h2>{props.title}</h2>
          <div className={classes.expense_item_price}>${props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItems;

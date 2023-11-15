import React from "react";
import classes from "./AllExpenses.module.css";
import ExpenseList from "./ExpenseList";

/*
  This code defines a React functional component named `AllExpenses`. 
  Here's an explanation of the code:
  - The component returns a div with the class `classes.expenses`, 
  indicating that it likely provides styling for a section related to displaying 
  expenses.
  - Inside this div, there is another component called `ExpenseList`. This 
  component receives two props: `items` and `deleteExpense`. 
  The `items` prop is set to `props.expenses`, suggesting that it's receiving a 
  list of expense items. The `deleteExpense` prop is set to `props.onDelete`, 
  indicating that it's receiving a function to handle the deletion of expenses.
  The purpose of this component appears to be to display a list of expenses using the `ExpenseList` component. It relies on the passed-in `expenses` prop to determine which expenses to display, and it also passes down the `deleteExpense` function to allow for the deletion of expenses.
  To fully understand the functionality, it would be helpful to see the 
  implementation of the `ExpenseList` component and how it handles the 
  `items` and `deleteExpense` props.
*/
const AllExpenses = (props) => {
  return (
    <div className={classes.expenses}>
      <ExpenseList items={props.expenses} deleteExpense={props.onDelete} />
    </div>
  );
};

export default AllExpenses;

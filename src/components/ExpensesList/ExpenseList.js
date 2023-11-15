import React from "react";
import ExpenseItems from "./ExpenseItems";
import classes from "./ExpenseList.module.css";


/*
  This code defines a React functional component named ExpenseList. 
  Here's an explanation of the code:
  The component takes a prop props as an argument, which is expected 
  to have a property items (an array of expenses) and deleteExpense 
  (a function to handle expense deletion).
  Inside the component, there's a return statement that renders an 
  unordered list (<ul>) with the class expense_list.
  The list is populated using the map function on the props.items array. 
  For each expense in the array, it creates an ExpenseItems component, 
  passing the necessary properties (key, id, title, amount, date, and onDelete).
  The key property is set to the unique id of each expense, helping React 
  efficiently update the list.
  The ExpenseItems component is responsible for rendering an individual 
  expense item, as explained in the previous response.
  In summary, the ExpenseList component generates a list of expense 
  items by mapping over the array of expenses passed as a prop. 
  Each expense item is displayed using the ExpenseItems component, 
  making it a reusable and modular way to represent a list of expenses.
*/
const ExpenseList = (props) => {
  return (
    <ul className={classes.expense_list}>
      {props.items.map((expense) => {
        return (
          <ExpenseItems
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete={props.deleteExpense}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;

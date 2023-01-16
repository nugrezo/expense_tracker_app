import React from "react";
import ExpenseItems from "./ExpenseItems";
import classes from "./ExpenseList.module.css";

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

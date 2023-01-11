import React from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItems.module.css";

const ExpenseItems = (props) => {
  return (
    <li>
      <div className={classes.expense_item}>
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

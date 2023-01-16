import React from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItems.module.css";

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

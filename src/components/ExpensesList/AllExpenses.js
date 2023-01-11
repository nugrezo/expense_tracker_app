import React from "react";
import classes from "./AllExpenses.module.css";
import ExpenseList from "./ExpenseList";

const AllExpenses = (props) => {
  return (
    <div className={classes.expenses}>
      <ExpenseList items={props.expenses} />
    </div>
  );
};

export default AllExpenses;

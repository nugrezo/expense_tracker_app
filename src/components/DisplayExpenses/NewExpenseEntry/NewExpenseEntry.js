import React from "react";
import classes from "./NewExpenseEntry.module.css";

const NewExpenseEntry = () => {
  return (
    <div className={classes.card}>
      <form>
        <div className={classes.form_controls}>
          <label>Title</label>
          <input type="text" placeholder="enter expense title" />
        </div>
        <div className={classes.form_controls}>
          <label>Amount</label>
          <input type="number" placeholder="enter expense amount" />
        </div>
        <div className={classes.form_controls}>
          <label>Date</label>
          <input type="date" placeholder="enter expense date" />
        </div>
        <div className={classes.form_actions}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseEntry;

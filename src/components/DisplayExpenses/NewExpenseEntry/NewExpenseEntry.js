import { useRef, useState } from "react";
import classes from "./NewExpenseEntry.module.css";

const NewExpenseEntry = (props) => {
  const title = useRef();
  const amount = useRef();
  const date = useRef();

  const submitHandler = (event) => {
    const enteredTitle = title.current.value;
    const enteredAmount = amount.current.value;
    const enteredDate = date.current.value;
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
      id: Math.random().toString(),
    };
    props.onUserInput(expenseData);
  };

  return (
    <div className={classes.card}>
      <form onSubmit={submitHandler}>
        <div className={classes.form_controls}>
          <label>Title</label>
          <input type="text" placeholder="enter expense title" ref={title} />
        </div>
        <div className={classes.form_controls}>
          <label>Amount</label>
          <input
            type="number"
            placeholder="enter expense amount"
            ref={amount}
          />
        </div>
        <div className={classes.form_controls}>
          <label>Date</label>
          <input type="date" placeholder="enter expense date" ref={date} />
        </div>
        <div className={classes.form_actions}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseEntry;

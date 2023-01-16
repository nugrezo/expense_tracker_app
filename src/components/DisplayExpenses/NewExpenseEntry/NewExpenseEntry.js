import React from "react";
import { useRef, useState } from "react";
import ErrorModal from "../../UI/ErrorModal";
import classes from "./NewExpenseEntry.module.css";

const NewExpenseEntry = (props) => {
  const [error, setError] = useState();
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
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };
    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({
        title: "Invalid or missing input",
        message: "Please fill out all the parts",
      });
      return;
    }
    if (enteredAmount < 0.1) {
      setError({
        title: "Invalid amount ",
        message: "enter a value grater than 0",
      });
      return;
    }
    props.onUserInput(expenseData);
    title.current.value = "";
    amount.current.value = "";
    date.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className={classes.card}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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

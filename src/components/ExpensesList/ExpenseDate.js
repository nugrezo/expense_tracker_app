import React from "react";
import classes from "./ExpenseDate.module.css";

/*
  This code defines a React functional component named `ExpenseDate`. 
  Here's an explanation of the code:
  - The component takes a prop `props` as an argument, which is expected 
  to have a `date` property representing a JavaScript `Date` object.
  - It uses the `toLocaleString` method to format the date. The `month`
   variable holds the full month name, the `day` variable holds the 
   two-digit day of the month, and the `year` variable holds the full year.
  - The component returns a div with three nested divs, each displaying 
  a part of the formatted date.
    - `expense_date_month`: Displays the full month name.
    - `expense_date_year`: Displays the full year.
    - `expense_date_day`: Displays the two-digit day of the month.
  The purpose of this component seems to be to render a styled date 
  component based on the provided date. This can be used within a larger 
  component, such as an expense item, to display the date of the expense. 
  The styling classes (`classes.expense_date`, `expense_date_month`, 
  `expense_date_year`, and `expense_date_day`) suggest that it's designed 
  to be visually appealing and consistent with a specific style or theme.
*/
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes.expense_date}>
      <div className={classes.expense_date_month}>{month}</div>
      <div className={classes.expense_date_year}>{year}</div>
      <div className={classes.expense_date_day}>{day}</div>
    </div>
  );
};

export default ExpenseDate;

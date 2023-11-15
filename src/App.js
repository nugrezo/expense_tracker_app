import { useState } from "react";
import "./App.css";
import NewExpenseEntry from "./components/DisplayExpenses/NewExpenseEntry/NewExpenseEntry";
import AllExpenses from "./components/ExpensesList/AllExpenses";

/*
This code initializes a constant named DUMMY_EXPENSES, 
which is an array of objects representing dummy expense data. 
Each object in the array corresponds to a fictional expense with properties 
such as id, title, amount, and date. 
*/
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Plasma TV",
    amount: "200",
    date: new Date(2021, 2, 18),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "299",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: "199",
    date: new Date(2021, 5, 12),
  },
];

function App() {
  /*
  Initializes state enteredValue using the useState hook, with an initial 
  value set to DUMMY_EXPENSES (the array of dummy expense data).
  */
  const [enteredValue, setEnteredValue] = useState(DUMMY_EXPENSES);
  /*
  -User input handling.
  -A function userInputHandler that takes inputData as an argument, 
  logs it to the console, and updates the state by adding the new input data 
  to the existing expenses.
  It uses the setEnteredValue function with the functional update form to 
  ensure the correct order of the new and previous data.
  */
  const userInputHandler = (inputData) => {
    console.log("userInput is ", inputData);
    /*
  The code snippet you provided is using the setEnteredValue function, 
  which is part of the useState hook in React. Let's break down this code:
  setEnteredValue function:
  This function is used to update the state variable enteredValue. 
  It takes an argument, which can be a new value or a function.
  Arrow Function:
  The argument passed to setEnteredValue is an arrow function (prevState) => 
  { ... }.
  This arrow function receives the previous state (prevState) 
  as its parameter.
  Updating State:
  Inside the arrow function, a new state is computed.
  [inputData, ...prevState] creates a new array where 
  inputData is added at the beginning, and the rest of the elements from 
  the previous state (prevState) are spread using the spread operator (...).
  This effectively adds a new expense (inputData) to the beginning of the 
  array of expenses.
  Returning New State:
  The arrow function returns the new state, which is then used by React 
  to update the enteredValue state variable.
  In summary, this code is updating the state enteredValue 
  by adding a new expense (inputData) to the beginning of the existing 
  array of expenses. The use of the functional form of setEnteredValue is 
  important when the new state depends on the previous state, as it ensures 
  that you're working with the most up-to-date state.
 */
    setEnteredValue((prevState) => {
      return [inputData, ...prevState];
    });
  };
  /*
  A function deleteItemHandler that takes dataId as an argument, 
  logs a message to the console, and updates the state by filtering out the 
  expense with the matching dataId.
  It uses the setEnteredValue function to update the state with the 
  filtered data.
*/
  const deleteItemHandler = (dataId) => {
    console.log("app.js delete button is working");
    setEnteredValue((prevData) => {
      const updatedData = prevData.filter((data) => data.id !== dataId);
      return updatedData;
    });
  };
  /*
  <NewExpenseEntry onUserInput={userInputHandler} />: Renders the NewExpenseEntry 
  component, passing the userInputHandler function as a prop (onUserInput).
  <AllExpenses expenses={enteredValue} onDelete={deleteItemHandler} />: Renders 
  the AllExpenses component, passing the enteredValue state (expenses) and the
  deleteItemHandler function as props (expenses and onDelete, respectively).
  This structure suggests that the NewExpenseEntry component handles user input 
  for adding new expenses, and the AllExpenses component displays a list of 
  expenses with an option to delete each item. The state (enteredValue) is managed 
  in the App component and passed down to child components as needed.
*/
  return (
    <div className="App">
      <NewExpenseEntry onUserInput={userInputHandler} />
      <AllExpenses expenses={enteredValue} onDelete={deleteItemHandler} />
    </div>
  );
}

export default App;

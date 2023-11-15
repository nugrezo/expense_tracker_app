import React from "react";
import { useRef, useState } from "react";
import ErrorModal from "../../UI/ErrorModal";
import classes from "./NewExpenseEntry.module.css";

// Functional component for adding a new expense
const NewExpenseEntry = (props) => {
  /*
  -using the useState hook from React to declare a state variable named error. 
  This line accomplishes two things:
  State Variable Declaration:
  const [error, setError]: This part uses array destructuring to declare a state 
  variable named error and a function named setError to update the state.
  useState(): This is a React hook that is used to initialize state in a functional 
  component. It returns an array with two elements: the current state value 
  (error in this case) and a function (setError) to update that value.
  Initial State:
  useState();: Since there's no initial value provided within the useState 
  parentheses, the initial state of error is set to undefined. This is a 
  common practice when the initial state doesn't have a meaningful default value.
  In summary, this line sets up a state variable error in functional component, 
  and the initial state is undefined. Later in your component, you use this state 
  to manage error messages and display an error modal when necessary.
*/
  const [error, setError] = useState();
  /*
  useRef hook from React to create three references: title, amount, and date. 
  These references are used to access and interact with the DOM elements 
  corresponding to the title, amount, and date input fields in your form.
  Here's what each line does:
  const title = useRef();
  This line creates a reference (title) and initializes it with the useRef hook. 
  The reference can be attached to a React element to gain access to and interact
  with that element in the DOM.
  const amount = useRef();
  Similar to the first line, this creates a reference (amount) using the useRef 
  hook. It will be used to access the amount input field in the form.
  const date = useRef();
  Again, a reference (date) is created using useRef(). This reference will be 
  used to interact with the date input field in the form.
  By using these references, you can programmatically interact with the input 
  fields without directly manipulating the DOM. For example, you can get the
  current value of these input fields or reset their values when needed.
*/
  const title = useRef();
  const amount = useRef();
  const date = useRef();

  /*
  The submitHandler function is an event handler in your React component that 
  is triggered when a form is submitted. It performs several tasks related to 
  handling the form data and managing errors. 
  */
  const submitHandler = (event) => {
    /*
  This line of code extracts the current value entered in the title input field. 
  The title.current references the useRef hook, which is used to create a mutable 
  object that persists across renders. By accessing the .value property of 
  title.current, you retrieve the current input value of the title field.
  The entered title is then stored in the variable enteredTitle for further 
  processing within the submitHandler function.  
  */
    const enteredTitle = title.current.value;
    /*
  This line of code retrieves the current value entered in the amount input field. 
  The amount.current references the useRef hook, which is used to create a mutable 
  object that persists across renders. By accessing the .value property of 
  amount.current, you obtain the current input value of the amount field. 
  The entered amount is then stored in the variable enteredAmount for further 
  processing within the submitHandler function.
  */
    const enteredAmount = amount.current.value;
    /*
  This line of code retrieves the current value entered in the date input field. 
  The date.current references the useRef hook, which allows access to the current
  value of the date field. The entered date is then stored in the variable 
  enteredDate for further use within the submitHandler function. 
  */
    const enteredDate = date.current.value;
    /*
  This line of code prevents the default behavior of the form submission, 
  which would typically result in a page reload. By calling event.preventDefault(), 
  the code stops the default action, allowing the developer to handle the form 
  submission manually using the subsequent logic in the submitHandler function
*/
    event.preventDefault();
    /*
    -This code creates an expenseData object with properties for the entered title, 
    amount, and date. It also generates a unique identifier (id) using 
    Math.random().toString(). The amount is converted to a number using the unary 
    plus (+) operator to ensure it is treated as a numeric value. 
    The date is converted to a Date object using new Date(enteredDate).
    -Creating expenseData to structure the user-entered data in a convenient format.
     This object allows us to encapsulate the relevant information 
     (title, amount, date, and id) in a single entity, making it easier to pass 
     and manage this data within your application. It helps maintain a clear and 
     organized representation of each expense, facilitating data handling and 
     manipulation.
    */
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };
    /*
    This condition checks if any of the entered values
    (title, amount, or date) are empty or consist only of whitespace characters 
    after trimming. If any of them are empty, it implies that the user has not 
    filled out all the required fields, and the code sets an error state to 
    prompt the user to provide the necessary information.   
    */
    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      /*
    This section sets an error state using the setError function with a 
    specific title and message. The purpose is to notify the user that there 
    is either missing or invalid input in the form, and it requests them to 
    fill out all the required fields. After setting the error state, the function 
    returns, preventing the further execution of code that adds the expense data.
    */
      setError({
        title: "Invalid or missing input",
        message: "Please fill out all the parts",
      });
      return;
    }
    /*
    This code block checks if the entered amount is less than 0.1. 
    If true, it sets an error state using the setError function with a specific 
    title and message, indicating that the entered amount is invalid, and the user 
    should enter a value greater than 0. After setting the error state, the function 
    returns, preventing the further execution of code that adds the expense data. 
    This validation ensures that the entered amount is a valid and positive numerical 
    value.
    */
    if (enteredAmount < 0.1) {
      setError({
        title: "Invalid amount ",
        message: "enter a value grater than 0",
      });
      return;
    }
    /*
    - This line of code invokes the onUserInput function, which is a prop passed to 
    the NewExpenseEntry component. It passes the expenseData object as an argument 
    to this function. Essentially, it communicates the newly entered expense data 
    to the parent component, allowing the parent to handle and manage this data as 
    needed.
    - The purpose of invoking props.onUserInput(expenseData) is to inform the 
    parent component about the new expense data entered by the user. By calling 
    this function and passing the expenseData object as an argument, 
    the NewExpenseEntry component communicates the user input to its parent 
    component, enabling the parent component to manage and update the overall 
    state or data related to expenses. This is a common pattern in React, 
    where child components can communicate with their parent components by 
    invoking functions passed down as props.
    */
    props.onUserInput(expenseData);
    /*
    This code snippet resets the values of the title, amount, and date input fields 
    to an empty string after the user has submitted the form. After the user input 
    is processed and added to the expenses, these lines ensure that the input fields 
    are cleared, providing a clean slate for the user to enter new expense information
    without having to manually erase the previous values. It's a common practice to 
    reset form fields after submission to enhance the user experience and make it 
    easier for users to input new data.
    */
    title.current.value = "";
    amount.current.value = "";
    date.current.value = "";
  };
  /*
    This code defines a function called errorHandler, which sets the error state 
    to null. The purpose of this function is to handle errors or dismiss error 
    messages. In the context of the component, the setError(null) line is called 
    when the user confirms or acknowledges an error through an error modal. 
    When setError(null) is executed, it clears any existing error, effectively 
    hiding the error message from the user interface. This function is typically 
    associated with a user action (e.g., clicking a button in the error modal) to 
    dismiss or acknowledge the error state.
    */
  const errorHandler = () => {
    setError(null);
  };
  /*
    This code defines the JSX structure of a React component named NewExpenseEntry. 
    Here's a breakdown of the code:
    The component returns a div with the class classes.card, which presumably 
    provides styling for a card-like appearance.
    Within this div, there is a conditional rendering using {error && (...)}. 
    If the error state is truthy, an ErrorModal component is rendered. This modal 
    displays the error title and message, and it has a confirmation button that, 
    when clicked, triggers the errorHandler function.
    Following the error modal section, there is a <form> element with an onSubmit 
    event handler set to the submitHandler function.
    Inside the form, there are three sections for entering the title, amount, 
    and date of an expense. Each section consists of a label and an input field. 
    The input fields are controlled using the ref attribute, with ref={title}, 
    ref={amount}, and ref={date}, respectively.
    Finally, there is a submit button within a div with the 
    class classes.form_actions. Clicking this button triggers the form's submission, 
    executing the submitHandler function.
    Overall, this JSX structure represents a form for entering new expenses, 
    with error handling through a modal component. The form includes fields for 
    the expense title, amount, and date, and it provides a button to add the expense.
    */
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

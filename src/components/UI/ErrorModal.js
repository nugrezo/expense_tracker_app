import React from "react";
import classes from "./ErrorModal.module.css";

/*
  This code defines a React functional component named ErrorModal. 
  Here's an explanation of the code:
  The component takes a prop props as an argument, which is expected to 
  have properties like title, message, and onConfirm (a function to 
  handle the confirmation).
  The component returns a JSX structure representing an error modal with 
  a backdrop.
  The backdrop is a div with the class backdrop and an onClick event that 
  triggers the onConfirm function when clicked. This is a common pattern for 
  closing a modal when clicking outside its content.
  The modal itself is another div with the class modal. Inside the modal:
  There's a header with a h2 element displaying the error title.
  The main content is in a div with the class content, containing a p element 
  displaying the error message.
  The footer has a button with the class button that, when clicked, triggers 
  the onConfirm function.
  This component is designed to be a reusable error modal that can be displayed 
  when an error occurs in the application. The props passed to it dynamically 
  control the content of the modal, allowing flexibility in its use throughout 
  the application.
*/
const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.contet}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button className={classes.button} onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;

import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  // State to keep track of the current input in the calculator
  const [calVal, setCalVal] = useState("");

  // Helper function to check if a character is an operator
  function isOperator(a) {
    return a === "+" || a === "-" || a === "*" || a === "/";
  }

  // Function to handle the button clicks from the calculator
  const onButtonClick = (buttonText) => {
    if (buttonText === "=") {
      // "=" button clicked: Evaluate the current expression

      // Flag to detect any syntax error, initially set to 1 (no error)
      let flag = 1;

      // Loop to check if there are any consecutive operators in the input
      for (let i = 0; i < calVal.length; i++) {
        // If consecutive operators are found, show syntax error
        if (isOperator(calVal[i]) && isOperator(calVal[i + 1])) {
          setCalVal("Syntax Error");
          flag = 0; // Set flag to 0 indicating a syntax error
          break; // Exit the loop when syntax error is detected
        }
      }

      // If no syntax error is found, proceed with evaluating the expression
      if (flag === 1) {
        try {
          const result = eval(calVal);  // Use eval to calculate the result
          setCalVal(result.toString());  // Convert result to string and update state
        } catch (error) {
          setCalVal("Syntax Error");  // Catch any error (e.g., invalid expression) and display "Error"
        }
      }
    } else if (buttonText === "AC") {
      // "AC" button clicked: Clear the display (reset the state)
      setCalVal("");
    } else if (buttonText === "C") {
      // "C" button clicked: Remove the last character from the input
      setCalVal(calVal.slice(0, -1));
    } else {
      // For other button clicks (numbers and operators), append the clicked value to the display
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);  // Update the state with the new value
    }
  };

  return (
    <>
      {/* Main layout of the calculator */}
      <center>
        {/* Title of the calculator */}
        <h1 className={` ${styles.title} fst-italic`}>Calculator</h1>

        {/* Calculator container: Display and Buttons */}
        <div className={styles.calculator}>
          {/* Display component to show the current input or result */}
          <Display displayValue={calVal} />
          {/* ButtonsContainer component to handle calculator button clicks */}
          <ButtonsContainer onButtonClick={onButtonClick} />
        </div>
      </center>
    </>
  );
}

export default App;

// Importing the needed hooks from react
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

/*
const refContainer = useRef(initialValue);
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
The returned object will persist for the full lifetime of the component.
*/

function App() { 
  // Declaring and initializing the hooks
  const inputRef = useRef(null); // inputRef = {current: null}
  const resultRef = useRef(null); //resultRef = {current: null}
  const [result, setResult] = useState(0); // result = 0
 
  // plus function adds the current value inside the input box to the final result and sets the new result
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  // minus function subtracts the current value inside the input box from the final result and sets the new result
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  // times function multiplies the current value inside the input box by the final result and sets the new result
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  // divide function divides the final result by the current value inside the input box and sets the new result
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  // resetInput function sets the current value inside the input box to zero
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = null;
  }; 
 
  // resetResult function resets the final result to zero
  function resetResult(e) { 
    e.preventDefault(); 
    setResult((result) => result = 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 

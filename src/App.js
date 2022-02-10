import "./index.css";
import React, { useState } from "react";
// import Tour from "./fetch2";

// const url = "https://course-api.com/react-tours-project";

function App() {
  // const [userInput, setUserInput] = useState("");
  // counter
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  const handleclick = () => {
    setCounter(0);
  };

  // const handleChange = (e) => {
  //   setUserInput(e.currentTarget.value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addTask(userInput);
  //   setUserInput("");
  // };
  // const addTask = (userInput) => {
  //   let copy = [...toDoList];
  //   copy = [
  //     ...copy,
  //     { id: toDoList.length + 1, task: userInput, complete: false },
  //   ];
  //   setToDoList(copy);
  // };

  // const fetch = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const tours = await response.json();

  //     console.log(tours);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetch();
  // }, []);

  return (
    <>
      <div>
        Counter App
        <div>{counter}</div>
        <div className="buttons">
          <button onClick={handleClick2}>Decrement</button>
          <button onClick={handleclick}>reset</button>
          <button onClick={handleClick1}>Increment</button>
        </div>
      </div>

      <br />
      {/* <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
      </form> */}

      <br />
      {/* <article>
        <Tour />
      </article> */}
    </>
  );

  // boutton add
}

export default App;

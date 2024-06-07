import {useState} from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times.</h4>
      <button type="button" onClick={handleClick} className="button"> Click me!</button>
    </div>
  );
};

export default UseStateBasics;

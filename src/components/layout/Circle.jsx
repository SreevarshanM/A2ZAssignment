import "../../styles/task1.css";
import { useState } from "react";
const Circle = (props) => {
  const [num, setNum] = useState(0);
  const [color, setColor] = useState("#F7CA18");
  const addFn = () => {
    const e = num + 1;
    setNum(e);
    setColor(Math.random().toString(16).substr(-6));
  };

  return (
    <div>
      <div
        className="inset"
        style={{
          backgroundColor: "#" + color,
        }}
      >
        {num}
      </div>
      <button class="button-4" role="button" onClick={addFn}>
        Click me
      </button>
      <button
        class="button-4"
        role="button"
        onClick={(e) => {
          e.preventDefault();
          props.addCircle();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Circle;

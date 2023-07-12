import Circle from "../components/layout/Circle";
import "../styles/task1.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Task1 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const addCircle = () => {
    if (data.length < 10) {
      dispatch({ type: "add" });
    }
  };
  return (
    <>
      <h1>Task1 page</h1>
      <br></br>
      <div className="grid">
        {data.map(() => (
          <Circle addCircle={addCircle} />
        ))}
      </div>
    </>
  );
};

export default Task1;

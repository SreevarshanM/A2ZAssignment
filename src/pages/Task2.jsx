import CardLayout from "../components/layout/CardLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Task2 = () => {
  const [data, setData] = useState([]);
  const numberUser = useSelector((state) => state.data);

  useEffect(async () => {
    try {
      const data1 = await axios.get(
        `https://random-data-api.com//api/users/random_user?size=${numberUser.length}`
      );
      setData(data1.data);
    } catch (err) {
      console.log("error: ", err);
    }
  }, []);
  return (
    <>
      <h1>User card page</h1>
      <br></br>
      <div className="grid">
        {data.map((val) => {
          return <CardLayout data={val} />;
        })}
      </div>
    </>
  );
};

export default Task2;

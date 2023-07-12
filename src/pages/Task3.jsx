import { useSelector } from "react-redux/es/hooks/useSelector";
import UserDetails from "../components/layout/UserDetails";

const Task3 = () => {
  const data = useSelector((state) => state.selectedUser);
  console.log(data);
  return (
    <>
      <h1>User Details</h1>
      <br></br>

      {data.avatar ? <UserDetails data={data} /> : "No user Selected"}
    </>
  );
};

export default Task3;

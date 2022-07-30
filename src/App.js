import "./App.css";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
// import Table from "./components/table/Table";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { AddUser, UpdateUser } from "./utils/functions";
import TableData from "./components/table/Table";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

function App() {
  const [info, setInfo] = useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      // if info.id is exist,
      UpdateUser(info);
    } else {
      AddUser(info);
    }
    setInfo(initialValues); // to keep inputs empty
  };
  const editUser = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };
  return (
    <>
      <Navbar />
      <div className="App">
        <Form info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
        <TableData editUser={editUser} />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;

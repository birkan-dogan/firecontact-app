import "./App.css";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
// import Table from "./components/table/Table";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { AddUser } from "./utils/functions";
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
    AddUser(info);
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="App">
        <Form info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
        <TableData />
      </div>
    </>
  );
}

export default App;

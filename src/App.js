import "./App.css";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { AddUser } from "./utils/functions";

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
        <Table />
      </div>
    </>
  );
}

export default App;

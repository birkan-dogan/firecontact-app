import "./App.css";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};
function App() {
  const [info, setInfo] = useState(initialValues);
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="App">
        <Form info={info} setInfo={setInfo} />
        <Table />
      </div>
    </>
  );
}

export default App;

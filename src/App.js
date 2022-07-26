import "./App.css";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Form />
        <Table />
      </div>
    </>
  );
}

export default App;

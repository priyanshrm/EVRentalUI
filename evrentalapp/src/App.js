import logo from "./logo.svg";
import "./components/menu";
import Menubar from "./components/menu";
import MyForm from "./components/myform2";
import BookingTable from "./components/mytable";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MyForm />
      <BookingTable />
    </div>
  );
}

export default App;

import { SplitScreen } from "./Style";
import AddCustomer from "./components/AddCustomer/AddCustomer";
import CustomerList from "./components/CustomerList/CustomerList";

function App() {
  return (
    <SplitScreen>
      <div>
        <AddCustomer />
      </div>
      <div>
        <CustomerList />
      </div>
    </SplitScreen>
  );
}

export default App;

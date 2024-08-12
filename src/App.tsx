import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

let items = ["New York", "San Fransico", "Toronto", "Montreal"];

const handleOnSelectItem = (item: string) => {
  console.log(item);
};
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleOnSelectItem}
      />
      {alertVisible == true && (
        <Alert onClick={() => setAlertVisible(false)}>Hello World</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;

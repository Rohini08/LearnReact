import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

let items = ["New York", "San Fransico", "Toronto", "Montreal"];

const handleOnSelectItem = (item: string) => {
  console.log(item);
};
function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleOnSelectItem}
      />
      <Alert>Hello World</Alert>
    </div>
  );
}
export default App;

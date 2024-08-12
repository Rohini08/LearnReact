import ListGroup from "./components/ListGroup";

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
    </div>
  );
}
export default App;

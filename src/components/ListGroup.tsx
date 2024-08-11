function ListGroup() {
  let items = ["New York", "San Fransico", "Toronto", "Montreal"];
  //items = [];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length == 0 && "No item Found"}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

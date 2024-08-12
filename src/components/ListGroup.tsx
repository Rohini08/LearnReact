import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Fransico", "Toronto", "Montreal"];
  //items = [];

  //Event Handler by const
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length == 0 && "No item Found"}
        {items.map((item, index) => (
          <li className="list-group-item " key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  /* const getMessage = () => {
    return items.length === 0 ? <p>More ideas to come</p> : null;
  };

  const handleClick = (event: MouseEvent) => console.log(event); */

  return (
    <>
      <h1>Future Lives & {heading}</h1>
      {items.length === 0 ? <p>More ideas to come</p> : null}
      {items.length === 0 && <p>More ideas to come</p>}
      <ul className="list-group">
        {" "}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        <li className="list-group-item"></li>
      </ul>
    </>
  );
}

export default ListGroup;

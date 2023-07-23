import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // This is a Hook, it allows us to tap into built in features in react
  // We can tell that this component will have state that changes over time
  let [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function
  // An event handler
  // note that <> was previously 'div' since React components
  // can only have one tag that is returned (with subtags).
  // <> ensures that the subtags are read without the
  // outer tag in the website to minimize overhead tags

  // Instead of having the following we use items.map
  // <li className="list-group-item">An item</li>
  //       <li className="list-group-item">A second item</li>
  //       <li className="list-group-item">A third item</li>
  //       <li className="list-group-item">A fourth item</li>
  //       <li className="list-group-item">And a fifth one</li>
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

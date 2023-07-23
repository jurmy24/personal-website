import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "Stockholm", "London", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => console.log(item);
  return (
    <>
      <div>
        <ListGroup items={items} heading="cities" onSelectItem={handleSelectItem} />
      </div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>You should check in on some of those fields below.</Alert>}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
        color="danger"
      >
        This is my button
      </Button>
    </>
  );
}

export default App;

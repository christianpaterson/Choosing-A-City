import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Los Angeles", "San Francisco", "New York", "Paris", "Lisbon"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities - Chris"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert onClose={() => setAlertVisibility(false)}>
        <h3>Choose Wisely</h3>
      </Alert>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Well Done. Go forward with confidence.
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Proceed
      </Button>
    </div>
  );
}

export default App;

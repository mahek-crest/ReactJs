import AppHead from "./componets/AppHead";
import AppList from "./componets/AppList";
import Container from "./componets/Container";
import TextInput from "./componets/TextInput";

function App() {
  const listItems = ["item1", "item2", "item3"];
  return (
    <Container>
      <AppHead />
      <TextInput />
      <AppList items={listItems} />
    </Container>
  );
}

export default App;

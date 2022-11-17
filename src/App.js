import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import { HeaderSimple } from "./components/Header";
import { Note } from "./components/Note";

const PRIMARY_COL_HEIGHT = 300;
const links = [
  {
    link: "/about",
    label: "Features",
  },
];
function App() {
  const [notes, setNotes] = useState([]);
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  useEffect(() => {
    fetch(
      "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30"
    )
      .then((response) => response.json())
      .then((data) => setNotes(data.items));
  }, []);

  return (
    <div className="App">
      <HeaderSimple links={links} />
      <Container my="md">
        <Form />
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          {notes?.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default App;

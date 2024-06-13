import "./App.css";
import { useEffect, useState } from "react";
import ToDo from "./models/ToDo";
import ToDoList from "./components/ToDoList";
import ToDoService from "./services/ToDo";
import { Container, Grid } from "@mui/material";
import NewToDo from "./components/NewToDo";

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  // Initialize the toDos state with the data from the server
  useEffect(() => {
    loadToDos();
  }, []);

  const loadToDos = async () => {
    const data = await ToDoService.getToDos();
    setToDos(data);
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={8}>
          <NewToDo onLoadToDos={() => loadToDos()} />
        </Grid>

        <Grid item xs={8}>
          <ToDoList toDos={toDos} onLoadToDos={() => loadToDos()} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

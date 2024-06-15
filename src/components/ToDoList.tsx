import { Checkbox, List, ListItem, ListItemText } from "@mui/material";
import ToDo from "../models/ToDo";
import ToDoService from "../services/ToDo";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface ToDoListProps {
  toDos: ToDo[];
  onLoadToDos: () => void;
}

export default function ToDoList({ toDos, onLoadToDos }: ToDoListProps) {
  const handleCheckTodo = (toDo: ToDo) => async () => {
    await ToDoService.updateToDo(toDo.id, toDo.name, !toDo.isDone);
    onLoadToDos(); // Reload the toDos state from the server
  };

  const handleRemoveTodo = (toDo: ToDo) => async () => {
    await ToDoService.deleteToDo(toDo.id);
    onLoadToDos();
  };

  return (
    <List
      dense
      sx={{
        alignContent: "center",
      }}
    >
      {toDos.map((toDo) => {
        return (
          <ListItem
            key={toDo.id}
            secondaryAction={
              <>
                <Checkbox
                  edge="end"
                  onChange={handleCheckTodo(toDo)}
                  checked={toDo.isDone == true}
                />
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={handleRemoveTodo(toDo)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText>{toDo.name}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
}

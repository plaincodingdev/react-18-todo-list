import { Button, TextField } from "@mui/material";
import { useState } from "react";
import ToDoService from "../services/ToDo";

interface NewToDoProps {
  onLoadToDos: () => void;
}

export default function NewToDo({ onLoadToDos }: NewToDoProps) {
  const [newToDoName, setNewToDoName] = useState<string>("");

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    if (!newToDoName) return; // Prevent adding empty to-do
    await ToDoService.addToDo(newToDoName);
    setNewToDoName(""); // Clear the input field
    onLoadToDos();
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <TextField
          fullWidth
          label="New To-Do"
          variant="outlined"
          value={newToDoName}
          onChange={(e) => setNewToDoName(e.target.value)}
        />
        <Button sx={{ marginTop: 1 }} type="submit" variant="contained">
          Add
        </Button>
      </form>
    </>
  );
}

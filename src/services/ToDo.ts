import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

class ToDoService {
  http = axios.create({
    baseURL: API_URL,
  });

  async getToDos() {
    const response = await this.http.get("/todos");
    return response.data;
  }

  async addToDo(name: string) {
    const response = await this.http.post("/todos", {
      name,
    });
    return response.data;
  }

  async updateToDo(id: number, name: string, isDone: boolean) {
    const response = await this.http.put(`/todos/${id}`, {
      name,
      isDone,
    });
    return response.data;
  }

  async delteToDo(id: number) {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default new ToDoService();

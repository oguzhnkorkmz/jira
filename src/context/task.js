import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      taskDesc,
    });

    console.log(response);
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const newTasks = tasks.filter((t) => {
      return t.id !== id;
    });
    setTasks(newTasks);
  };

  const uptadeTask = async (id, newTitle, newTaskDesc) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: newTitle,
      taskDesc: newTaskDesc,
    });
    const newUpdateTasks = tasks.map((t) => {
      if (t.id === id) {
        return { id, title: newTitle, taskDesc: newTaskDesc };
      }
      return t;
    });
    setTasks(newUpdateTasks);
  };

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTask,
    deleteTask,
    uptadeTask,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;

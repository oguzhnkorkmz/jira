import { useState, useContext } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";

function TaskShow({ task }) {
  const { deleteTask, uptadeTask } = useContext(TasksContext);

  const [update, setUpdate] = useState(false);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleSubmit = (id, newTitle, newTaskDesc) => {
    setUpdate(false);
    uptadeTask(id, newTitle, newTaskDesc);
  };

  return (
    <div className="task">
      {update ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h4>Task Title</h4>
          <p>{task.title}</p>
          <h4>Description</h4>
          <p className="task-paragraph">{task.taskDesc}</p>
          <div className="buttons">
            <button className="delete-btn btn" onClick={handleDelete}>
              Delete
            </button>
            <button className="update-btn btn" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;

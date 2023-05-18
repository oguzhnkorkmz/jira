import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { createTask } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Update Task</h3>
          <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-label">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Enter Task</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="create-btn" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Add Task</h3>
          <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-label">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Enter Task</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="create-btn" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;

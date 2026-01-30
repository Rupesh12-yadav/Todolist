import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import "./todolist.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const navigate = useNavigate();

  // 🔐 Auth check + fetch tasks
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetchTasks();
  }, [navigate]);

  // 📥 GET tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  // ➕ ADD task
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      const res = await API.post("/tasks", { title });
      setTasks([...tasks, res.data]);
      setTitle("");
    } catch (error) {
      console.error("Failed to add task:", error);
      alert("Failed to add task");
    }
  };

  // ❌ DELETE task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Failed to delete task");
    }
  };

  // ✅ TOGGLE complete
  const toggleComplete = async (task) => {
    try {
      const res = await API.put(`/tasks/${task._id}`, {
        completed: !task.completed,
      });

      setTasks(
        tasks.map((t) => (t._id === res.data._id ? res.data : t))
      );
    } catch (error) {
      console.error("Failed to update task:", error);
      alert("Failed to update task");
    }
  };

  // ✏️ START edit
  const startEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
  };

  // 💾 SAVE edit
  const saveEdit = async () => {
    if (!editTitle.trim()) return;

    try {
      const res = await API.put(`/tasks/${editingId}`, { title: editTitle });
      setTasks(tasks.map((t) => (t._id === editingId ? res.data : t)));
      setEditingId(null);
      setEditTitle("");
    } catch (error) {
      console.error("Failed to update task:", error);
      alert("Failed to update task");
    }
  };

  // ❌ CANCEL edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <div className="todo-header">
          <h1>My Tasks</h1>
        </div>
        <div className="todo-body">
          <div className="todo-input-group">
            <input
              className="todo-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a new task"
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <button className="todo-add-btn" onClick={addTask}>Add</button>
          </div>

          <ul className="todo-list">
            {tasks.map((t) => (
              <li className="todo-item" key={t._id}>
                <div className="todo-item-content">
                  <input
                    className="todo-checkbox"
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleComplete(t)}
                  />
                  {editingId === t._id ? (
                    <input
                      className="todo-edit-input"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit();
                        if (e.key === "Escape") cancelEdit();
                      }}
                      autoFocus
                    />
                  ) : (
                    <span className={`todo-text ${t.completed ? 'completed' : ''}`}>
                      {t.title}
                    </span>
                  )}
                </div>
                <div className="todo-actions">
                  {editingId === t._id ? (
                    <>
                      <button className="todo-save-btn" onClick={saveEdit}>
                        Save
                      </button>
                      <button className="todo-cancel-btn" onClick={cancelEdit}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="todo-edit-btn" onClick={() => startEdit(t)}>
                        Edit
                      </button>
                      <button className="todo-delete-btn" onClick={() => deleteTask(t._id)}>
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {tasks.length === 0 && <p className="todo-empty">No tasks yet</p>}
        </div>
      </div>
    </div>
  );
}

export default TodoList;

import { useState } from "react";

function TaskManager({ goHome }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    };

    setTasks([newTask, ...tasks]);
    setTitle("");
    setPriority("Medium");
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <section id="task-demo" className="bg-white rounded-xl shadow p-8 mb-8">
      <h2 className="text-3xl font-bold mb-3">
        Live Demo - Task Manager Application
      </h2>

      <button
        onClick={goHome}
        className="mb-6 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Back to Portfolio
      </button>

      <p className="text-gray-600 mb-6">
        A simple React application demonstrating create, update, complete,
        and delete task functionality.
      </p>

      <div className="grid md:grid-cols-3 gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg px-4 py-2 md:col-span-2"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <button
        onClick={addTask}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mb-6"
      >
        Add Task
      </button>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <strong>Total:</strong> {tasks.length}
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <strong>Completed:</strong> {completedCount}
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <strong>Pending:</strong> {tasks.length - completedCount}
        </div>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks added yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="border rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3
                  className={`font-bold ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </h3>

                <p className="text-sm text-gray-600">
                  Priority: {task.priority} | Created: {task.createdAt}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => completeTask(task.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  {task.completed ? "Undo" : "Done"}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default TaskManager;
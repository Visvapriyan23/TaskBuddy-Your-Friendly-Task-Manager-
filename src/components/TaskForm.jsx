import React from 'react'
export default function TaskForm({ addTask }) {
    const [task, setTask] = React.useState('');
    const [priority, setPriority] = React.useState('Medium');
    const [category, setCategory] = React.useState('General');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;

        addTask({ task: task.trim(), priority, category, completed: false });
        setTask('');
    }
  return (

    <form onSubmit={handleSubmit} className="task-form">
        <div className="task-entry">
            <input
                type="text"
                placeholder="Enter your task here..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="add-task-button" type="submit">Add Task</button>
        </div>
        <div className="task-options">
            <select aria-label="Priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select aria-label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>

        </div>
    </form>
  )
}
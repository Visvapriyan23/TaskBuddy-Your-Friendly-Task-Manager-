import React from 'react'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'
import ProgressTracker from './components/ProgressTracker.jsx'
export default function App() {
  const [tasks, setTasks] = React.useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (task) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };
  const toggleTaskComplete = (taskIndex) => {
    setTasks((currentTasks) =>
      currentTasks.map((task, index) =>
        index === taskIndex ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (taskIndex) => {
    setTasks((currentTasks) =>
      currentTasks.filter((_, index) => index !== taskIndex)
    );
  };
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>TaskBuddy</h1>
        <p>Your friendly Task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleTaskComplete}
        onDelete={deleteTask}
      />
      <ProgressTracker tasks={tasks} />
    </main>
  )
}
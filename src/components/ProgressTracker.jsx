import React from 'react'

export default function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = tasks.length === 0 ? 0 : (completedTasks / tasks.length) * 100;

  return (
    <section className="progress-tracker" aria-label="Task completion progress">
      <p>{completedTasks} out of {tasks.length} tasks Completed</p>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={completedTasks}
        aria-valuemin="0"
        aria-valuemax={tasks.length}
        aria-label="Completed tasks"
      >
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </section>
  )
}
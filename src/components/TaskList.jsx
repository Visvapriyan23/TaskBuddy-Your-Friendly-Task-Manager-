import React from 'react'

export default function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <section className="task-list" aria-label="Tasks">
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li className="task-row" key={`${task.task}-${index}`}>
              <span className="task-details">
                {task.completed ? <s>{task.task}</s> : task.task}
                {' '}({task.priority}, {task.category})
                {task.completed && <span className="completed-label"> Completed</span>}
              </span>
              <span className="task-actions">
                <button type="button" onClick={() => onToggleComplete(index)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button type="button" onClick={() => onDelete(index)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
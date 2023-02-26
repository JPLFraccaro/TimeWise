import React from 'react'
import './css/TaskItemComponent.css'

function TaskItemComponent(props) {
  const onComplete = () => {
    alert('ya completaste la tarea ' + props.text)
  }
  const onDelete = () => {
    alert('borraste la tarea ' + props.text)
  }
  return (
    <li className='TaskItemComponent'>
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={!(props.completed) ? onComplete : undefined}
      >
        ✓
      </span>
      <p className={`TaskItemComponent-p ${props.completed && 'TaskItemComponent-p--complete'}`}>{props.text}</p>
      <span 
        className='Icon Icon-delete'
        onClick={onDelete}
      >
        ✗
      </span>
    </li>
  )
}

export {TaskItemComponent}
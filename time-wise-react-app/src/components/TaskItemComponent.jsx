import React from 'react'
import '../css/TaskItemComponent.css'

function TaskItemComponent(props) {
  return (
    <li className='TaskItemComponent'>
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        ✓
      </span>
      <p className={`TaskItemComponent-p ${props.completed && 'TaskItemComponent-p--complete'}`}>{props.text}</p>
      <span 
        className='Icon Icon-delete'
        onClick={props.onDelete}
      >
        ✗
      </span>
    </li>
  )
}

export {TaskItemComponent}
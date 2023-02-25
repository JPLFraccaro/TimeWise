import React from 'react'

function TaskItemComponent(props) {
  return (
    <li>
      <span>✓</span>
      <p>{props.text}</p>
      <span>✗</span>
    </li>
  )
}

export {TaskItemComponent}
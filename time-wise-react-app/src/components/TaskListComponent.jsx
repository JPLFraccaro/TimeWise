import React from 'react'
import '../css/TaskListComponent.css'
function TaskListComponent(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export {TaskListComponent}
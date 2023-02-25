import React from 'react'

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
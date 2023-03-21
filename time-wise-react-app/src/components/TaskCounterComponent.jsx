import React from 'react'
import '../css/TaskCounterComponent.css'
function TaskCounterComponent({totalTasks, completedTasks}) {
  return (
    <h2 className='TaskCounterComponent'>Has completado {completedTasks} de {totalTasks} tareas</h2>
  )
}

export {TaskCounterComponent}
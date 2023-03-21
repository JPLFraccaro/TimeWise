import React from 'react'
import '../css/CreateTaskButtonComponent.css'
function CreateTaskButtonComponent() {
  const onNewTask = (mensaje) => {
    alert(mensaje)
  }
  return (
    <button 
      className='CreateTaskButtonComponent'
      onClick={() => (onNewTask('aparece un mensaje modal para crear una tarea'))}
    >
      +
    </button>
  )
}

export {CreateTaskButtonComponent}
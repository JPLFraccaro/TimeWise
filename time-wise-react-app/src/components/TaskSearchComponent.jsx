import React from 'react'
import '../css/TaskSearchComponent.css'
function TaskSearchComponent({searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <input 
      className='TaskSearchComponent' 
      placeholder="Busque una tarea..."
      value = {searchValue} 
      onChange={onSearchValueChange}
    />
  )
}

export {TaskSearchComponent}
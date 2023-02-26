import React from 'react'
import { useState } from 'react'
import './css/TaskSearcherComponent.css'
function TaskSearcherComponent() {
  const [searchValue, setSearchValue] = useState('')
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <>
      <input 
        className='TaskSearcherComponent' 
        placeholder="Busque una tarea..."
        value = {searchValue} 
        onChange={onSearchValueChange}
      />
      <p>{searchValue}</p>
    </>
  )
}

export {TaskSearcherComponent}
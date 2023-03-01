import { TaskCounterComponent } from "./components/TaskCounterComponent"
import { TaskSearchComponent } from "./components/TaskSearchComponent"
import { TaskListComponent } from "./components/TaskListComponent"
import { TaskItemComponent } from "./components/TaskItemComponent"
import { CreateTaskButtonComponent } from "./components/CreateTaskButtonComponent"
import React, { useState } from "react"

/*const defaultTasks = [
  {text: "Comprar un kilo de pechugas de pollo", completed: false},
  {text: "Comprar una docena de huevos", completed: false},
  {text: "Barrer la entrada", completed: true},
  {text: "Lavar la entrada", completed: true},
]*/

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = []
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)
  
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }
  return [
    item,
    saveItem,
  ]
}


function App() {
  const [tasks, saveTasks] = useLocalStorage('TASKS_V1', [])

  //initializating searchBar value
  const [searchValue, setSearchValue] = useState('')
  //filtering tasks
  const searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))
  //counting tasks
  const totalTasks = searchedTasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  
  // updating tasks
  const completeTask = (text) => {
    const newTasks = [...tasks]
    const taskIndex = tasks.findIndex(task => task.text === text)
    newTasks[taskIndex].completed = !(tasks[taskIndex].completed)
    saveTasks(newTasks)
  }
  // deleting tasks
  const deleteTask = (text) => {
    const newTasks = tasks.filter(task => task.text !== text)
    saveTasks(newTasks)
  }
  return (
    <>
      <TaskCounterComponent
        totalTasks={totalTasks}
        completedTasks={completedTasks}
      />
      <TaskSearchComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TaskListComponent>
        {searchedTasks.map(task => (
          <TaskItemComponent 
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
            key={task.text} 
            text={task.text} 
            completed={task.completed}
          />
        ))}
      </TaskListComponent>
      <CreateTaskButtonComponent/>
    </>
  );
}

export { App };

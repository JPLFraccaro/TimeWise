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

function App() {
  //initializing localStorage
  const localStorageTasks = localStorage.getItem('TASKS_V1')
  let parsedTasks
  if (!localStorageTasks) {
    localStorage.setItem('TASKS_V1', JSON.stringify([]))
    parsedTasks = []
  } else {
    parsedTasks = JSON.parse(localStorageTasks)
  }
  const [tasks, setTasks] = useState(parsedTasks)
  
  //initializating searchBar value
  const [searchValue, setSearchValue] = useState('')
  //filtering tasks
  const searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))
  //counting tasks
  const totalTasks = searchedTasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  // saving changes on localStorage
  const saveTasks = (newTasks) => {
    const stringifiedTasks = JSON.stringify(newTasks)
    localStorage.setItem('TASKS_V1', stringifiedTasks)
    setTasks(newTasks)

  }
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

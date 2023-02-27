import { TaskCounterComponent } from "./components/TaskCounterComponent"
import { TaskSearchComponent } from "./components/TaskSearchComponent"
import { TaskListComponent } from "./components/TaskListComponent"
import { TaskItemComponent } from "./components/TaskItemComponent"
import { CreateTaskButtonComponent } from "./components/CreateTaskButtonComponent"
import React, { useState } from "react"

const defaultTasks = [
  {text: "Comprar un kilo de pechugas de pollo", completed: false},
  {text: "Comprar una docena de huevos", completed: false},
  {text: "Barrer la entrada", completed: true},
  {text: "Lavar la entrada", completed: true},
]

function App() {
  const [tasks, setTasks] = useState(defaultTasks)
  const [searchValue, setSearchValue] = useState('')
  const searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))
  const totalTasks = searchedTasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const completeTask = (text) => {
    const newTasks = [...tasks]
    const taskIndex = tasks.findIndex(task => task.text === text)
    newTasks[taskIndex].completed = !(tasks[taskIndex].completed)
    setTasks(newTasks)
  }
  const deleteTask = (text) => {
    const newTasks = tasks.filter(task => task.text !== text)
    //let newTasks = [...tasks]
    //const taskIndex = tasks.findIndex(task => task.text === text)
    //newTasks.splice(taskIndex, 1)
    setTasks(newTasks)
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

export {App};

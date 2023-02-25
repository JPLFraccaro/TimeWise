//import logo from './logo.svg';
//import './App.css';
import {TaskCounterComponent} from "./components/TaskCounterComponent"
import {TaskSearcherComponent} from "./components/TaskSearcherComponent"
import {TaskListComponent} from "./components/TaskListComponent"
import { TaskItemComponent } from "./components/TaskItemComponent"
import {CreateTaskButtonComponent} from "./components/CreateTaskButtonComponent"

const tasks = [
  {text: "Comprar un kilo de pechugas de pollo", completed: false},
  {text: "Comprar una docena de huevos", completed: false},
  {text: "Barrer la entrada", completed: false},
]

function App() {
  return (
    <>
      <TaskCounterComponent/>
      <TaskSearcherComponent/>
      <TaskListComponent>
        {tasks.map(task => (<TaskItemComponent key={task.text} text={task.text} />))}
      </TaskListComponent>
      <CreateTaskButtonComponent/>
    </>
  );
}

export {App};

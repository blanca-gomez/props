import './App.css';

import { useState } from "react";
import ShowTask  from './components/Task';
import AddTaskForm from './components/AddTaskForm';



const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);


  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length +1,
      text: taskText,
      completed:false
    };
    setTasks([...tasks,newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !==id));
  }

  const completedTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id){
        return{...task, completed:!task.completed}
      }else{
        return task
      }
    }))
  }

  return(
    <>
      <h1>Lista de tareas</h1>
      <ul>
        {tasks.map(task => (
          <ShowTask
            key={task.id}
            task={task}
            handleDelete={deleteTask}
            handleCompleted={completedTask}
          />
        ))}
      </ul>
      <div>
        <AddTaskForm addTask={addTask}/>
      </div>
    </>
  )
 
};




export default App;

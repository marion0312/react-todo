import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
      {
          id: 1,
          title: "Task One",
          completed: false,
          day: "24th of March, Tuesday",
          reminder: true,
      },
      {
          id: 2,
          title: "Task Two",
          completed: false,
          day: "25th of March, Wednesday",
          reminder: false,
      }
  ])

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder} />: 'No task to show'}
    </div>
  );
}

export default App;

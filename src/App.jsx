import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom"
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: "true",
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: "true",
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: "false",
    },
  ])

  // Add Task
  function addTask(task) {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  // del task
  function del(id) {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  // toggleReminder
  function toggleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

        {showAddTask && <AddTask onAdd={addTask} />}

        {tasks.length > 0 ? <Tasks task={tasks} onDelete={del} onToggle={toggleReminder} /> : "No task"}
        <Routes>
            <Route path='/about' Component={About} />
          <Route path='/' Component={Footer} />
        </Routes >
      </div>
    </Router>
  )
}

export default App

import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom"
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
  ])

  useEffect(()=>{
     

    fetchTasks()
    
  }, [])

  // FetchTask
  async function fetchTasks() {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }


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

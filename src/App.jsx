import { Routes, Route } from "react-router-dom"

//import components
import Navbar from "./components/Navbar"
//import pages
import Home from "./pages/Home"
import Tasks from "./pages/Tasks"
import TaskDetails from "./pages/TaskDetails"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tasks" element={<Tasks />}></Route>
      <Route path="/tasks/:id" element={<TaskDetails />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      
    </Routes>
    
    
    
    </>
  )
}

export default App
   

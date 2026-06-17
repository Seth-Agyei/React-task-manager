import { Routes, Route } from "react-router-dom"

//import components
import Navbar from "./components/Navbar"

//import pages
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks"
import TasksMenu from "./pages/TasksMenu"
import TaskDetails from "./pages/TaskDetails"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import Settings from "./pages/settings"
import ThemeSettings from "./pages/ThemeSettings"
import AccountSettings from "./pages/AccountSettings"
import NotificationSettings from "./pages/NotificationSettings"
import Reports from "./pages/Reports"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route 
       path="/"
       element={<Home />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard/>}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/settings"
        element={<Settings/>}
      />

       


     <Route 
      path="/tasks"
      element={<Tasks />}
      />

      <Route
        path="/tasks-menu"
        element={<TasksMenu />}
      />
     
      <Route path="/tasks/:id" element={<TaskDetails />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      

      <Route
        path="/theme-setting-section"
        element={<ThemeSettings />}
      />

      <Route
        path="/account-setting-section"
        element={<AccountSettings />}
      />

      <Route
        path="/notification-setting-section"
        element={<NotificationSettings />}
      />


      <Route 
      path="/reports"
      element={<Reports />}
      />
     
    </Routes>
    
    
    
    </>
  )
}

export default App
   

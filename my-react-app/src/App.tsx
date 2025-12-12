import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Menu from './components/universalComponents/menu/menu'
import "./fonts/fonts.css"
function App() {
  return (
    <div className='viewportContainer'>
      <Menu/>
      <div className='container'>
      <Dashboard/>
      </div>
    </div>
  )
}

export default App

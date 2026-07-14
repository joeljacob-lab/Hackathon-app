import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTeam from './components/AddTeam'
import NavigationBar from './components/NavigationBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTeam />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
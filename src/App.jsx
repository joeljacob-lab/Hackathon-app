import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTeam from './components/AddTeam'


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
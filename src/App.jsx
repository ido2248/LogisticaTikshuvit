import Sidbar from './components/Sidbar'
import './App.css'
import DistributionOfItems from './components/DistributionOfItems.jsx'
import Details from './components/Details.jsx'
import Reports from './components/Reports.jsx'
import Users from './components/Users.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Sidbar/>
        <Routes>
            <Route path='/' element={<DistributionOfItems/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/reports' element={<Reports/>}/>
            <Route path='/users' element={<Users/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

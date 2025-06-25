import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './login'
import Home from './Components/Home/Home'
import Companies from './Components/Companies/Companies'
import Students from './Components/Students/Students'
import Results from './Components/Results/Results'
import Company_detail from './Components/Companies/Company_detail'
import Student from './Components/Students/Student'
import Company_Result from './Components/Results/Company_Result'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/companies' element={<Companies/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/company-result' element={<Company_Result/>}/>
        <Route path='/company-detail' element={<Company_detail/>}/>
        <Route path='/student' element={<Student/>}/>
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import Header from './records/Nav'
import Home from './records/Home'
import CreateRecords from './records/CreateRecords'
import EditRecords  from './records/EditRecords'
// import About  from './records/About'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import About from './records/about'
import Mitigation from './records/Mitigation'



function Records({setIsLogin}) {
  return (
    <Router>
      <div className="records-page">
        <Header setIsLogin={setIsLogin}/>
        <section>
          <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/create' element={<CreateRecords/>} exact/>
          <Route path='/mitigation' element={<Mitigation/>} exact/>
          <Route path='/edit/:id' element={<EditRecords/>} exact/>
          <Route path='/about' element={<About/>} exact/>
          </Routes>
        </section>
      </div>
    </Router>
  
  )
}

export default Records
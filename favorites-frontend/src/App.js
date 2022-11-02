import './App.css'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import UserComments from './components/UserComments'
import ArtistForm from './components/ArtistForm'
import ArtistList from './components/ArtistList'
import Artist from './components/Artist'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/comment" element={<UserComments />}></Route>
        <Route path="form" element={<ArtistForm />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="list" element={<ArtistList />}></Route>
        <Route path="favorite/:id" element={<Artist />}></Route>
      </Routes>
    </div>
  )
}

export default App

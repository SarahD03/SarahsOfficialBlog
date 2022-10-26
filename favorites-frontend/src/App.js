import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
// import { useState, useEffect } from 'react'

function App() {
  // const [Favorite, updateFavorite] = useState([])
  // const [formState, setFormState] = useState({
  //   artist: '',
  //   image: '',
  //   lyrics: '',
  //   albums: ''
  // })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('localhost:3001/')
      return response
    }
    console.log(apiCall())
  }, [])

  return (
    <div className="App">
      <header>
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes> */}
      </header>
      <h1>Favorite Artist Directory</h1>
      <form>
        <label id="artist">Artist:</label>
        <input></input>
        <label id="image">Image:</label>
        <input></input>
        <label id="lyrics">Lyrics:</label>
        <input></input>
        <label id="albums"># of Albums:</label>
        <input></input>
      </form>
      <div></div>
    </div>
  )
}

export default App

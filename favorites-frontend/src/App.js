import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [favorites, updateFavorites] = useState([])
  const [formState, setFormState] = useState({
    artist: '',
    image: '',
    lyrics: '',
    albums: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('localhost:3001/favorites')
      return response
    }
    console.log(apiCall())
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newFavorites = await axios
      .post('http://localhost:3001/favorites', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateFavorites([...favorites, newFavorites.data])
    setFormState({ artist: '', image: '', lyrics: '', albums: '' })
    console.log(newFavorites.data)
  }

  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </header>
      <h1>Favorite Artist Directory</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={formState.artist}
          onChange={handleChange}
        ></input>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          value={formState.image}
          onChange={handleChange}
        ></input>
        <label htmlFor="lyrics">Lyrics:</label>
        <input
          id="lyrics"
          value={formState.lyrics}
          onChange={handleChange}
        ></input>
        <label htmlFor="albums"># of Albums:</label>
        <input
          id="albums"
          value={formState.albums}
          onChange={handleChange}
        ></input>
        <button type="submit">Add Artist</button>
      </form>
      <div></div>
    </div>
  )
}

export default App

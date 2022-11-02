import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Artist from './Artist'


const ArtistForm = () => {
    const [favorites, updateFavorites] = useState([])
  const [formState, setFormState] = useState({
    artist: '',
    image: '',
    lyrics: '',
    albums: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/favorite')
      updateFavorites(response.data)
    }
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    console.log('this funtion has been fired')
    let newFavorites = await axios
      .post('http://localhost:3001/favorite', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateFavorites([...favorites, newFavorites.data])
    setFormState({ artist: '', image: '', lyrics: '', albums: '' })
    console.log(newFavorites)
  }


let {id } = useParams



    return (
        <div className="form">
        <h1>Favorite Artist Directory</h1>
        <form onSubmit={handleSubmit} className="inputs">
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
        <div>
          <h3 className="subtitle">Artist list</h3>


          {favorites.map((fav) => (
            <Link to={`favorite/${id}`}>
            <div key={fav._id}>
              <h2>{fav.artist}</h2>
              {<Artist key={fav._id} artist={fav.artist} image={fav.image} lyrics={fav.lyrics} albums={fav.albums} />}
            </div>
           
          </Link>
          ))}
      </div> 
      </div>
     
    )
}
  

export default ArtistForm
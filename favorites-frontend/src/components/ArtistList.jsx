// import { useNavigate } from "react-router-dom"
// import ArtistForm from "./ArtistForm"
import axios from 'axios'
import { useEffect, useState } from 'react'


const ArtistList = (props) => {

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
  
    // const handleChange = (event) => {
    //   setFormState({ ...formState, [event.target.id]: event.target.value })
    // }
    // const handleSubmit = async (event) => {
    //   event.preventDefault()
    //   console.log(formState)
    //   console.log('this funtion has been fired')
    //   let newFavorites = await axios
    //     .post('http://localhost:3001/favorite', formState)
    //     .then((response) => {
    //       return response
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    //   updateFavorites([...favorites, newFavorites.data])
    //   setFormState({ artist: '', image: '', lyrics: '', albums: '' })
    //   console.log(newFavorites)
    // }
  

 



    return(
        <div>
            {favorites.map((fav) => (
                <div className="artist-card" key={fav.id} >
                    <img style={{ display: 'block' }} src={fav.img} alt={fav.name} />
                    <h3>{fav.artist}</h3>
                    <img src={fav.image} alt='artistpic'></img>
                    <h3>{fav.lyrics}</h3>

                </div>
            ))}
            <div>

            </div>
        </div>
    )
}

export default ArtistList
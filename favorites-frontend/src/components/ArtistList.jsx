import { useNavigate } from "react-router-dom"
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
    // const handleDelete = async (id, event) => {
    //   event.preventDefault()
    //   console.log(formState)
    //   console.log('this funtion has been fired')
    //   let deletedFav = await axios
    //     .delete(`http://localhost:3001/list?${id}`, formState)
    //     .then((response) => {
    //       return response
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    //   updateFavorites([...favorites, deletedFav.data])
    //   setFormState({ artist: '', image: '', lyrics: '', albums: '' })
    //   console.log(deletedFav)
    // }
  
// const handleDelete = (id, e ) => {
//     e.preventDefault() 
//     axios.delete(`http://localhost:3001/list${id}`)
//         const newList = favorites.filter((fav) => fav.id !== id)
//     updateFavorites({...favorites, newList})
//     console.log(favorites)
// }
let navigate = useNavigate()

  const handleDelete = (id) => {
    navigate(`/list?${id}`)
    axios.delete(`http://localhost:3001/list?${id}`)
    console.log(id)

}


    return(
        <div>
            {favorites.map((fav) => (
                <div className="artist-card" key={fav.id} >
                    <img style={{ display: 'block' }} src={fav.img} alt={fav.name} />
                    <h3>{fav.artist}</h3>
                    <img src={fav.image} alt='artistpic'></img>
                    <h3>Lyric: {fav.lyrics}</h3>
                    <h4>Albums: {fav.albums}</h4>
                    <h4>id: {fav._id}</h4>
                </div>
            ))}
            <div className='delete-form'>
                <h2>Delete Artist</h2>
                <form onSubmit={handleDelete}>
                    <label>Artist Id</label>
                    <input type="delete" />
                    <button type="submit" >Delete Artist?</button>
                </form>

            </div>
        </div>
    )
}

export default ArtistList
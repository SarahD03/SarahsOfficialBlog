import axios from 'axios'
import { useEffect, useState } from 'react'



const ArtistList = () => {

    const [favorites, updateFavorites] = useState([])
  
    useEffect(() => {
      const apiCall = async () => {
        let response = await axios.get('http://localhost:3001/favorite')
        updateFavorites(response.data)
      }
      apiCall()
    }, [])
  



    return(
        <div>
            {favorites.map((fav) => (
                <div className="artist-card" key={fav.id} >
                    <img style={{ display: 'block' }} width='40px' height='40px' src={fav.img} alt={fav.name} />
                    <h3>{fav.artist}</h3>
                    <img src={fav.image} alt='artistpic' width={'200px'} height='200px'></img>
                    <h3>Lyric: {fav.lyrics}</h3>
                    <h4>Albums: {fav.albums}</h4>
                    <h4>id: {fav._id}</h4>
                </div>
            ))}
            <div className='delete-form'>
                <h2>Delete Artist</h2>
                <form>
                    <label>Artist Id</label>
                    <input type="delete" />
                    <button type="submit" >Delete Artist?</button>
                </form>

            </div>
        </div>
    )
}

export default ArtistList
import { Link } from "react-router-dom"

const ArtistForm = (props) => {
    return (
        <div>{props.favorites.map((fav)=> (
            <div className="fav-card" ></div>
        ))}</div>
    )
}
  

export default ArtistForm
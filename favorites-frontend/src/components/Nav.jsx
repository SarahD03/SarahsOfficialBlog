import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
             <h3 className="title">Directory</h3>
        <nav className="navbar">
     
            <div>
                <Link to='/'>Home</Link>


                <Link to='form'>Form</Link>


                <Link to='/comment'>Comments</Link>

                <Link to= 'list'>Artists</Link>

            </div>
        </nav>
        </div>
    )
}
export default Nav
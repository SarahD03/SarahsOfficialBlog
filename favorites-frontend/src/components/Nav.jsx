import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <h3>Directory</h3>
            <div>
                <Link to='/'>Home</Link>


                <Link to='/form'>Form</Link>


                <Link to='/comments'>Comments</Link>

            </div>
        </nav>
    )
}
export default Nav
import { Link } from 'react-router-dom'

const Home = () => {

    return (
      <div className="home">
        <h1>Welcome to my page !</h1>
        <Link to='/'>Home</Link>
       
      </div>
    )
  }
  
  export default Home
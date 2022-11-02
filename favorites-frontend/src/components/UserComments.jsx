// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";

const UserComments = () => {
const [comments, updateComments] = useState([])
    const [formState, setFormState] = useState({
      title: '',
      name: '',
      body: ''
    })

    useEffect(() => {
      const apiCall = async () => {
        let response = await axios.get('http://localhost:3001/comment')
        updateComments(response.data)
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
        let newComment = await axios
          .post('http://localhost:3001/comment', formState)
          .then((response) => {
            return response
          })
          .catch((error) => {
            console.log(error)
          })
        updateComments([...comments, newComment.data])
        setFormState({ title: '', name: '', body: '' })
        console.log(newComment)
      }
      

    return(
        <div>
            <h3>Comments:</h3>
            <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input id='title' value={formState.title} onChange={handleChange}></input>
            <label>Name</label>
            <input id='name' value={formState.name} onChange={handleChange} ></input>
            <label>Message</label>
            <input id='body'value={formState.body} onChange={handleChange}></input>
            <button type="submit">Post Comment</button>
            </form>
            <div className='comments'>
            {comments.map((comment) => (
              <div key={comment._id}>
                <h2>{comment.title}</h2>
                <h4>by: {comment.name}</h4>
                <h3>{comment.body}</h3>
              </div>    
            ))}
            </div>
        </div>
    )
}

export default UserComments
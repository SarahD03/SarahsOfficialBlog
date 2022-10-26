import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
// import { useState, useEffect } from 'react'

function App() {
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('localhost:3001/')
      return response
    }
    console.log(apiCall())
  }, [])

  return (
    <div className="App">
      <header></header>
      <h1>Favorite Artist Directory</h1>
      <main></main>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SingleCard from './components/SingleCard'
function App() {
  const URL_API = "https://lanciweb.github.io/demo/api/actors/"
  const [actors, setActors] = useState([])

  useEffect(() => {
    axios.get(URL_API).then(res => {
        const actorData = res.data
        setActors(actorData)
    })
  }, [])
  
  return (
    <></>
  )
}

export default App

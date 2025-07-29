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
    <>
      <div className="container">
        <ul>
          {actors.map((actor, index) => {
            return (
              <SingleCard
                key={index}
                name={actor.name}
                birth_year={actor.birth_year}
                nationality={actor.nationality}
                image={actor.image}
                biography={actor.biography}
                awards={actor.awards}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App

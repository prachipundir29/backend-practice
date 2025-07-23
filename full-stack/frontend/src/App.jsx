import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
   const [jokes, setJokes] = useState([])

   useEffect(() => {
      axios.get('/api/jokes')
      .then((response) => {
          setJokes(response.data)
      })
      .catch((error) => {
          console.log('Error fetching jokes:', error);
          
      })
   })

  return (
    <>
     <h1>Full Stack Practice</h1>
     <p>JOKES: {jokes.length}</p>

     {
      jokes.map((joke, index) => {
       return <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>

        </div>
      })
     }
    </>
  )
}

export default App

import { useEffect, useState } from 'react'


function App() {
  const [books, setBooks] = useState()

  useEffect(() => {
    fetch('http://localhost:8800/books')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App

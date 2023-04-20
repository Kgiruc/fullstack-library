import { useState, useEffect } from "react"
import axios from 'axios'
import ListBooks from "../components/ListBooks"
import { Link } from "react-router-dom"

function Books() {
    const [books, setBooks] = useState()

    useEffect(() => {
      const fetchAllBooks = async () => {
        try {
            const res = await axios.get('http://localhost:8800/books')
            setBooks(res.data)
            console.log(res)
        }
        catch(err) {
            console.log(err)
        }
      }
      fetchAllBooks()
    }, [])

  return (
    <div>
        {books && <ListBooks books={books} />}
        <button><Link to='/add'>Dodaj książkę</Link></button>
    </div>
  )
}

export default Books
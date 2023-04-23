import { useState, useEffect } from "react"
import axios from 'axios'
import ListBooks from "../components/ListBooks"
import { Link } from "react-router-dom"
import jwt_decode from 'jwt-decode'

function Books() {
  const [books, setBooks] = useState()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
          const res = await axios.get('http://localhost:8800/books')
          setBooks(res.data)
      }
      catch(err) {
          console.log(err)
      }
    }
    fetchAllBooks()

    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      setIsAdmin(decodedToken.isAdmin);
    }
  }, [])


  return (
    <div>
        {books && <ListBooks books={books} />}
        {isAdmin && <button><Link to='/add'>Dodaj książkę</Link></button>}
    </div>
  )
}

export default Books
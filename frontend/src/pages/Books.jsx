import { useState, useEffect } from "react"
import axios from 'axios'
import ListBooks from "../components/ListBooks"
import { Link } from "react-router-dom"
import jwt_decode from 'jwt-decode'
import Profile from "./Profile"

function Books() {
  const [books, setBooks] = useState()
  const [isAdmin, setIsAdmin] = useState(false)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books')
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks()

    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      setIsAdmin(Boolean(decodedToken.isAdmin));
      setIsUser(!decodedToken.isAdmin)
    }
  }, [])

  if (books && (isAdmin || isUser)) {
    return (
      <div className="books-container">
        <Profile />
        <ListBooks books={books} isAdmin={isAdmin} isUser={isUser} />
        {isAdmin && <button className="none"><Link className="add-book-button" to='/add'>Dodaj książkę</Link></button>}
      </div>
    )
  } else {
    return <Link className="register" to={"/login"}>Zaloguj się lub zarejestruj</Link>
  }
}

export default Books
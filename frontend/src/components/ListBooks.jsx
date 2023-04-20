import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function ListBooks({ books }) {
    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/books/" +id)
            window.location.reload()
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {books.map(book => (
                <section key={book.id}>
                    <p>{book.title}</p>
                    <p>{book.ISBN}</p>
                    <p>{book.author}</p>
                    <button>Wypożycz</button>
                    <button><Link to={`/update/${book.id}`}>Edit</Link></button>
                    <button onClick={() => handleDelete(book.id)}>delete</button>
                </section>
            ))
            }
        </div>
    )
}

export default ListBooks
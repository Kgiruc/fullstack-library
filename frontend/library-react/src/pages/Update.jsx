import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Update() {
    const [book, setBook] = useState({
        title: '',
        ISBN: null,
        author: '',
    })

    const navigate = useNavigate()
    const location = useLocation()

    const bookId = location.pathname.split("/") [2]

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/books/"+ bookId, book)
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleClick}>
            <label>
                Nazwa:
                <input type="text" name="title" onChange={handleChange} />
            </label>
            <label>
                ISBN:
                <input type="number" name="ISBN" onChange={handleChange} />
            </label>
            <label>
                Autor:
                <input type="text" name="author" onChange={handleChange} />
            </label>
            <input type="submit" value="Update" onClick={handleClick} />
        </form>
    )
}

export default Update
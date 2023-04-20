import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Add() {
    const [book, setBook] = useState({
        title: '',
        ISBN: null,
        author: '',
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/books", book)
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    }

    console.log(book)
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
            <input type="submit" value="Wyślij" onClick={handleClick} />
        </form>
    )
}

export default Add
import { useState, useEffect } from "react"
import axios from 'axios'
import ListRentals from "../components/ListRentals"
import { Link } from "react-router-dom"

function Books() {
    const [rentals, setRentals] = useState()

    useEffect(() => {
      const fetchAllRentals = async () => {
        try {
            const res = await axios.get('http://localhost:8800/rentals')
            setRentals(res.data)
            console.log(res)
        }
        catch(err) {
            console.log(err)
        }
      }
      fetchAllRentals()
    }, [])

  return (
    <div>
        {rentals && <ListRentals rentals={rentals} />}
    </div>
  )
}

export default Books
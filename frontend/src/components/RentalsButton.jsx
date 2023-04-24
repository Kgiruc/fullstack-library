import { Link } from "react-router-dom"

function RentalsButton() {
  return (
    <button><Link to={"/rentals"}>wypożyczone</Link></button>
  ) 
}

export default RentalsButton
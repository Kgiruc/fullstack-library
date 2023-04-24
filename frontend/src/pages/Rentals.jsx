import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode'
import ListRentals from "../components/ListRentals";
import Profile from "./Profile";

function Rentals() {
  const [userRentals, setUserRentals] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const res = await axios.get('http://localhost:8800/rentals');
        const token = localStorage.getItem('token');
        const decodedToken = token ? jwt_decode(token) : null;
        if (decodedToken?.isAdmin) {
          setIsAdmin(true);
          setUserRentals(res.data);
        } else {
          const filteredRentals = res.data.filter(rental => rental.borrow_name === decodedToken.name);
          setUserRentals(filteredRentals);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchRentals();
  }, []);

  return (
    <div className="books-container">
      <Profile />
      <ListRentals rentals={userRentals} isAdmin={isAdmin} />
    </div>
  );
}

export default Rentals;
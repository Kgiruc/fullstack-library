import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode'
import ListRentals from "../components/ListRentals";

function Rentals() {
  const [allRentals, setAllRentals] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchAllRentals = async () => {
      try {
        const res = await axios.get('http://localhost:8800/rentals');
        const token = localStorage.getItem('token');
        const isAdmin = token ? jwt_decode(token).isAdmin : null;
        if (isAdmin === 1) {
          setAllRentals(res.data);
          setIsAdmin(true)
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRentals();
  }, []);

  return (
    <div>
      <ListRentals rentals={allRentals} isAdmin={isAdmin} />
    </div>
  );
}

export default Rentals;
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [book, setBook] = useState({
    title: "",
    ISBN: null,
    author: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        name="title"
        maxLength="45"
        placeholder="title"
        required
        onChange={handleChange}
      />
      <input
        type="number"
        name="ISBN"
        pattern="[0-9]{13}"
        required
        placeholder="ISBN"
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        required
        onChange={handleChange}
      />

      {error && <p>{error}</p>}
      <input type="submit" value="Wyślij" />
    </form>
  );
}

export default Add;
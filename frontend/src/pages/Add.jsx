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
      <label>
        Nazwa:
        <input
          type="text"
          name="title"
          maxLength="45"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        ISBN:
        <input
          type="number"
          name="ISBN"
          pattern="[0-9]{13}"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Autor:
        <input type="text" name="author" required onChange={handleChange} />
      </label>
      {error && <p>{error}</p>}
      <input type="submit" value="Wyślij" />
    </form>
  );
}

export default Add;
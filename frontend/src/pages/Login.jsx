import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8800/login", { login, password })
      localStorage.setItem("token", res.data.token)
      navigate("/")
    }
    catch (err) {
      console.log(err)
      setError("Niepoprawny login lub hasło")
    }
  }
  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {<p>{error}</p>}
        <button type="submit">Submit</button>
      </form>
  )
}

export default Login
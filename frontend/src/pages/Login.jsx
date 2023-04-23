import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login() {
  const [admin, setAdmin] = useState(false)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8800/login", { login, password })
      localStorage.setItem("token", res.data.token)
      setSuccess(true)
      navigate("/profile")
    }
    catch (err) {
      console.log(alert.err)
      setError(true)
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Login
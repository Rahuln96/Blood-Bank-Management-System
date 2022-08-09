import React, {useState} from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const Login = () => {
      axios.post("http://localhost:9002/Login", user)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user)
          navigate("/RegisterDonar")
      })
  }
  return (
    <div className='donorbody text-center'>
    <div className="row">
      <div className="col-lg-4 col-md-3"></div>
      <div className="col-lg-4 col-md-6 p-5">
        <main className="form-signin">
          <div className="Login">
            {/* <img
              className="mb-4"
              src="/blood-donation-logo_23-2147506524.png"
              alt=""
              width="150"
              height="150"
            /> */}
            <h1 className="h3 mb-3 fw-normal mt-5">LOG IN</h1>

            <div className="form-floating text-start">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email" value={user.email} onChange={handleChange}
                
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating text-start">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"

                name="password" value={user.password} onChange={handleChange}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-danger" onClick={Login} type="submit">
              Log In
            </button>
            <p><Link to="#" className="text-decoration-none">Forgot your Password?</Link></p>
            <p></p>
            <p>Don't Have an Account ? <button className="text-decoration-none" onClick={() => navigate("/Signup")}>Sign Up</button></p>
            <p>or</p><button className="loginBtn loginBtn--facebook">
                Login with Facebook
              </button>              
              <button className="loginBtn loginBtn--google">
                Login with Google
              </button>

            <p className="mt-5 mb-3 text-muted">&copy; 2018–2022</p>
          </div>
        </main>
      </div>
      <div className="col-lg-4 col-md-3"></div>
    </div>
    </div>
  )
}
export default Login
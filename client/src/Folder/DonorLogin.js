import React from 'react'
import { Link } from 'react-router-dom'

export default function DonorLogin() {
  return (
    <div className='text-center'>
      <div className="row donorbody">
      <div className="col-lg-4 col-md-3"></div>
      <div className="col-lg-4 col-md-6 p-5">
        <main className="form-signin">
          <form action="" method="get">
            <h1 className="h3 mb-3 fw-normal"> Donor Login</h1>

            <div className="form-floating text-start">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput" className='text-left'>Email address</label>
            </div>
            <div className="form-floating text-start">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-danger" type="submit">
              Log In
            </button>
            <p><Link to="" className="text-decoration-none">Forgot your Password?</Link></p>
            <p></p>
            <p>Haven't registered yet?<Link to="/src/Folder/RegisterDonor.js" className="text-decoration-none"> Register as Donor</Link></p>
            <p>or</p><button className="loginBtn loginBtn--facebook">
                Login with Facebook
              </button>              
              <button className="loginBtn loginBtn--google">
                Login with Google
              </button>

            <p className="mt-5 mb-3 text-muted">&copy; 2018–2022</p>
          </form>
        </main>
      </div>
      <div className="col-lg-4 col-md-3"></div>
    </div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0" nonce="lkECU324"></script>

    </div>
  )
}

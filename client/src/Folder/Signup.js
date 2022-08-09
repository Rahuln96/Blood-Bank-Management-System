import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        fname: "",
        lname: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Signup = () => {
        const { fname, lname, email, password, reEnterPassword } = user
        if( fname && lname && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/Signup", user)
            .then( res => {
                alert(res.data.message)
                navigate("/Login")
            })
        } else {
            alert("invlid input")
        }
        
    }

  return (

      <div className='donorbody'>
         
        <h1 className='text-center pb-1 p-4 '>SIGN UP</h1><hr />

        <div className="row mx-auto ps-5 pe-5 pb-3 ">
            <div className="col-lg-6">
                <label htmlFor="">First Name</label>
                <input type="text" name="fname" value={user.fname} placeholder='First Name ' className='form-control' onChange={ handleChange }  />
            </div>
            <div className="col-lg-6">                
            <label htmlFor="">Last Name</label>
                <input type="text" name="lname" value={user.lname} placeholder='Last Name ' className='form-control' onChange={ handleChange } />           
            </div>
        </div>

        <div className="row mx-auto ps-5 pe-5 pb-3">
            <div className="col-lg-6">
                <label htmlFor="">Date-Of-Birth</label>
                <input type="date" placeholder='00-00-0000' className='form-control'onChange={ handleChange }/>
            </div>
            <div className="col-lg-6">
                <label htmlFor="">Gender</label>
                <select name="" id="" className="form-control">
						<option value="">Select gender</option>
					  <option value="male">Male</option>
					  <option value="female">female</option>
					  <option value="others">Others</option>
					</select>
            </div>
        </div>

        <div className="row mx-auto ps-5 pe-5 pb-3">
            <div className="col-lg-6">
                <label htmlFor="">Mobile Number</label>
                <input type="tel" name="" id="" placeholder='99XXXXXXX' className='form-control'onChange={ handleChange } />
            </div>
            <div className="col-lg-6">
                <label htmlFor="">Email Address</label>
                <input type="email" name="email" value={user.email} id="" placeholder='example@gamil.com' className='form-control'onChange={ handleChange }/>
            </div>
        </div>

        <div className="row mx-auto ps-5 pe-5 pb-3">
            <div className="col-lg-4">
                <label htmlFor="">State</label>
                <select className="form-control" id="inputState">
						<option value="SelectState">Select State</option>
						<option value="Andra Pradesh">Andra Pradesh</option>
						<option value="Arunachal Pradesh">Arunachal Pradesh</option>
						<option value="Assam">Assam</option>
						<option value="Bihar">Bihar</option>
						<option value="Chhattisgarh">Chhattisgarh</option>
						<option value="Goa">Goa</option>
						<option value="Gujarat">Gujarat</option>
						<option value="Haryana">Haryana</option>
						<option value="Himachal Pradesh">Himachal Pradesh</option>
						<option value="Jammu and Kashmir">Jammu and Kashmir</option>
						<option value="Jharkhand">Jharkhand</option>
						<option value="Karnataka">Karnataka</option>
						<option value="Kerala">Kerala</option>
						<option value="Madya Pradesh">Madya Pradesh</option>
						<option value="Maharashtra">Maharashtra</option>
						<option value="Manipur">Manipur</option>
						<option value="Meghalaya">Meghalaya</option>
						<option value="Mizoram">Mizoram</option>
						<option value="Nagaland">Nagaland</option>
						<option value="Orissa">Orissa</option>
						<option value="Punjab">Punjab</option>
						<option value="Rajasthan">Rajasthan</option>
						<option value="Sikkim">Sikkim</option>
						<option value="Tamil Nadu">Tamil Nadu</option>
						<option value="Telangana">Telangana</option>
						<option value="Tripura">Tripura</option>
						<option value="Uttaranchal">Uttaranchal</option>
						<option value="Uttar Pradesh">Uttar Pradesh</option>
						<option value="West Bengal">West Bengal</option>
						<option disabled >UNION Territories</option>
						<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
						<option value="Chandigarh">Chandigarh</option>
						<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
						<option value="Daman and Diu">Daman and Diu</option>
						<option value="Delhi">Delhi</option>
						<option value="Lakshadeep">Lakshadeep</option>
						<option value="Pondicherry">Pondicherry</option>
					  </select>
            </div>
            <div className="col-lg-4">
                <label htmlFor="">District</label>
                {/* <select name="" id="inputDistrict" className="form-control">
					  <option value="">Select a District</option>
					</select> */}
                    <input type="text" placeholder='Enter District' className='form-control' onChange={ handleChange }/>
            </div>
            <div className="col-lg-4">
				  <label for="city">City</label>
                  <input type="text" className="form-control" name="" id="" placeholder="Type in for specific city"onChange={ handleChange }/>
            </div>
        </div>


        <div className='row m-5 mt-0'>
            <div className="col-lg-6">
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={user.password} id="pswd1" placeholder='password'  className='form-control'onChange={ handleChange }/>
                </div>
            <div className="col-lg-6">
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} id='pswd2' placeholder='confirm password' className='form-control'onChange={ handleChange } />
            </div>
        </div>

        <div className='p-5 pt-2 mx-auto text-center'>
        <button className=" btn btn-danger btn-lg" onClick={Signup} type="submit" value="Submit" onclick="matchPassword()">
              Sign Up
            </button>
            <p className='text-decoration-underline pt-1'>Already have an account ? <button className="text-decoration-none" onClick={() => navigate("/Login")}>Log In.</button></p>
            </div>

    </div>

  )
}
export default Signup
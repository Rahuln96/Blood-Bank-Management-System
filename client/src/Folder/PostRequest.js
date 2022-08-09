import React from 'react'

export default function PostRequest() {
  return (
    <div>
      
    <h3 className="text-center text-danger">Blood Request Form</h3><hr />
      <div className=" rounded bg-white shadow">
        <div className="personal-details pl-5 pr-5 pb-3 px-3-sm" id="personal-details">

          <form action="" className="request-form" id="request-form" onsubmit="submitRequest(event)">
           
           
            <div className="row">
            <div className="form-group mb-4 mt-4 col-lg-6 col-md-12">
              <label className="m-0   color-dark" for="patientName">Patient Name</label>
              <input type="text" className="form-control" id="patient_name" placeholder="Patient Name" required />
            </div>
            <div className="form-group mb-4 mt-4 col-lg-6 col-md-12">
              <label className="m-0   color-dark" for="your_name">Your Name</label>
              <input type="text" className="form-control" id="your_name" placeholder="Your Name" required />
            </div>
            </div>  


            <div className="row">
            <div className="form-group mb-4 mt-2 col-lg-6 col-md-12">
              <label className="m-0   color-dark" for="email">Email address</label>
              <input type="email" className="form-control" placeholder="example@domain.com" id="email" required />
            </div>
            <div className="form-group mb-4 mt-2 col-lg-6 col-md-12">
              <label className="m-0   color-dark" for="phone_number">Phone Number</label>
              <input type="text" pattern="\d*" className="form-control" placeholder="9999xxxxxx" maxlength="10"
                id="phone_number" required />
            </div>
            </div>

        
            <div className="row mt-3">
              <div className="form-group mb-4  col-lg-4 col-md-12">
                <label className="m-0  color-dark" for="units">Units Required</label>
                <input type="number" className="form-control" id="units" placeholder="Units Required" value="1" />
              </div>

              <div className="form-group mb-4 col-lg-4 col-md-12">
                <label className="m-0  color-dark" for="bg">Blood Group Required</label>
                <select className="form-control" name="bg" id="bg">
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                  <option value="Any">Any</option>
                </select>
              </div>

              <div className="form-group col-lg-4 col-md-12 mb-4">
                <label className="m-0  color-dark" for="requirement">Requirement</label>
                <select className="form-control" name="requirement" id="requirement">
                  <option value="Blood">Blood</option>
                  <option value="Platelets">Platelets</option>
                  <option value="Plasma">Plasma</option>
                </select>
              </div>
            </div>



            <div className="form-group col-6 mb-4">
              <label className="m-0   color-dark" for="state_region">State :</label>
              <select className="form-control container-fluid" id="inputState">
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
                <option disabled>UNION Territories</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadeep">Lakshadeep</option>
                <option value="Pondicherry">Pondicherry</option>
              </select>
            </div>
            <div className="col-12 text-center m-auto">
                <button type="submit" className="btn btn-danger">Create Request</button>
              </div>
          </form>

        </div>

      </div>
    </div>
  )
}

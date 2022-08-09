import React from 'react'

export default function BloodBank() {
  return (
    <div>
      
    <form action="" method="get" className="m-5">
        <h3 className="text-center">Find Blood Banks</h3><hr className="border-1 text-danger" />
        <br />
        <div className="row m-5">
            <div className="col-lg-4">
                <label for="state">State</label>
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
            <div className="col-lg-4">
                <label for="district">District</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select a District</option>
                    <option>All District</option>
                  </select>
            </div>
            <div className="col-lg-4">
                <label for="city">City</label>
                <input type="text" className="form-control" placeholder="(optional)" />
            </div>
        </div>
        <div className="d- flex m-5">
            <button className="btn btn-danger m-auto" type="submit">Search</button>
        </div>
    </form>
    </div>
  )
}

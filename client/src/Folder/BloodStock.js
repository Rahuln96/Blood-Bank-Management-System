import React from 'react'

export default function BloodStock() {
  return (
    <div>
    <div className="container-fluid p-5 mb-sm-5">
        <h2 className="text-danger">Blood Stock Availability</h2><br />
        <hr className='one' />
          <form action="" method="get"> 
            <div className="container-fluid  rounded ms-2 mb-3 pb-4 p-0" >
                <h4 className="bg-danger p-3">Search Blood Stock</h4><br />
                <div className="row p-md-2 g-lg-4 g-md-4 g-5">
                    <div className="col-lg-3 col-md-6 ">
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
                    <div className="col-lg-3 col-md-6"> 
                        <select name="" id="selectDistrict" className="form-control">
                            <option value="">Select District</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <select name="" id="" className="form-control">
                            <option value="#">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="All">All Blood Group</option>
                          </select></div>
                    <div className="col-lg-3 col-md-6"> 
                        
<select name="bloodComponentType" className="form-control" id="bcType">
    <option value="0">Select Blood Component</option> 
 							  
    <option value="1">Whole Blood</option>
<option value="2">Single Donor Platelet</option>
<option value="3">Single Donor Plasma</option>
<option value="4">Sagm Packed Red Blood Cells</option>
<option value="5">Platelet Rich Plasma</option>
<option value="6">Platelet Poor Plasma</option>
<option value="7">Platelet Concentrate</option>
<option value="8">Plasma</option>
<option value="9">Packed Red Blood Cells</option>
<option value="10">Leukoreduced Rbc</option>
<option value="11">Irradiated RBC</option>
<option value="12">Fresh Frozen Plasma</option>
<option value="13">Cryoprecipitate</option>
<option value="14">Cryo Poor Plasma</option></select> 
                    </div>
                </div>
               </div>
               
<button type="button" className="btn btn-outline-danger d-grid gap-4 col-2 mx-auto">Search</button>
          </form>
    </div>
    </div>
  )
}

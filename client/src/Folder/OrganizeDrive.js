import React from 'react'

export default function OrganizeDrive() {
  return (
    <div className='drive'>
        <h1 className='text-center text-danger '>BLOOD DRIVE</h1>
        <hr />
      <div className="content">
        {/* <h2>Why Host A Blood Drive</h2>
        <p></p> */}
        <h2 className='text-center text-danger'>What Does A Host Does</h2>
        <div className="card m-1">
  <div className="card-body">
    <h5 className="card-title">Provides a suitable location.</h5>
    <p className="card-text bi bi-dot"> A large, open space is best, so we can create separate zones for conducting confidential eligibility assessments and collecting donations.</p>
  </div>
</div>
        <div className="card m-1">
  <div className="card-body">
    <h5 className="card-title">Organizes a recruitment committee to recruit donors.</h5>
    <p className="card-text bi bi-dot"> Face-to-face requests are the most effective form of recruitment. Don’t do this alone; build a team to help spread the word.  </p>
  </div>
</div>
        <div className="card m-1">
  <div className="card-body">
    <h5 className="card-title">Publicizes the blood drive.</h5>
    <p className="card-text bi bi-dot">The more people who know about your blood drive – both within your organization and in the community – the more donors you can sign up.  </p>
  </div>
</div>
        <div className="card m-1">
  <div className="card-body">
    <h5 className="card-title">Schedules donors for appointments.</h5>
    <p className="card-text bi bi-dot">Plus, you’ll do follow ups during the drive to ensure donors don’t miss their appointments, and reach out afterward to say thank you.</p>
  </div>
</div>

</div>





        <div className="border border-5 m-5">
        <h2 className='mt-5 text-center text-danger'>Request Form</h2><hr />
        <form action="" method="post" className='container m-5'>
            <div className="row mb-3">
                <div className="col-lg-6">
                    <label htmlFor="">Organization Name</label>
                    <input type="text"  placeholder='Name of Organization' className='form-control'/>
                </div>
                <div className="col-lg-6">
                    <label htmlFor="">Name of the Organizer</label>
                    <input type="text"  placeholder='Name' className='form-control'/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-6">
                    <label htmlFor="">Date</label>
                    <input type="date" name="" id="" className='form-control' />
                </div>
                <div className="col-lg-6">
                    <label htmlFor="">Time</label>
                    <input type="time" name="" id="" className='form-control'/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-6">
                    <label htmlFor="">Expected Donation</label>
                    <input type="number" name="" id="" placeholder='' className='form-control'/>
                </div>
                <div className="col-lg-6">
                    <label htmlFor="">Venue</label>
                    <input type="text" placeholder='Name of the Organization' className='form-control' />
                </div>
            </div>
            <div className="row mb-3">
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
                    <select name="" id="" placeholder='' className='form-control'>
                        <option value="">Select a District</option>
                        <option value=""></option>
                    </select>
                </div>
                <div className="col-lg-4">
                    <label htmlFor="">City</label>
                    <input type="text" name="" id="" placeholder='Enter City Name' className='form-control'/>
                </div>
            </div>
            <div className="row mb-3">                
                <div className="col-lg-6">
                    <label htmlFor="">Mobile Number</label>
                    <input type="tel" placeholder='Enter Phone Number' className='form-control'/>
                </div>
                <div className="col-lg-6">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" placeholder='Email Address' className='form-control'/>
                </div>
            </div>
                <div className="col-lg-12">
				  <input className="form-check-input" type="checkbox" value="true" id="flexCheckChecked" checked required />
				  <label className="form-check-label " for="flexCheckChecked">I agree to be contacted by blood banks.
				  </label>
                  </div>

				<button type="submit" className="btn btn-danger p-2 mt-3 text-center m-auto">Submit Request</button>
        </form>
        </div>
      </div>
  )
}

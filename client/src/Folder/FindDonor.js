import React from 'react'

export default function FindDonor() {
  return (
    <div className='m-5'>
      <h1 className='text-danger'>Find Blood Donor</h1><hr  className='text-danger'/>
      <div className='m-5 container border border-danger border-5 p-5'>
        
            <div className="col-12">
            <label for="blood-group"
					>Blood Group </label>
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
					  <option value="Not Known">Not Known</option>
					</select>
            </div>
            <div className="col-lg-12">
                <label htmlFor="">State</label>
                <select name="" id="" className='form-control' placeholder='select state'>
                    <option value="">select state</option>
                </select>
            </div>
            <div className="col-lg-12"> <label htmlFor="">District</label>
                <select name="" id="" className='form-control' placeholder='select district'>
                    <option value="">select district</option>
                    </select>
            </div>
            <div className="col-lg-12"> 
            <label htmlFor="">City</label>
                <input type="text" placeholder='Enter city name' className='form-control'/>
            </div>

<div className='text-center m-auto'>
            <button type="submit" className="btn btn-danger p-2 mt-3">Find Donor</button>
			      </div>
        </div>
      </div>
  )
}

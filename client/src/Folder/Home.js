import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='overflow-auto'>
        <hr className="one" />
        <div className="container-fluid bg-overlay">
            <div className="row-1 text-center">
                <h1>Donate Blood, Save Life !</h1>
                    <h4>DONATE YOUR BLOOD AND INPIRE OTHERS TO DONATE. </h4>
                <button type="button" className="btn btn-light bg-light fs-5 mt-lg-1 homeBtn animate__slideInUp"><Link to="/src/Folder/RegisterDonor.js" className="text-decoration-none text-danger animate__slideInUp">Become a Donor</Link> </button>
            </div>
        </div>

      <div className="content container-fluid mt-5 fs-5 text-dark">
  <p className="fs-3 text-center text-danger"><u>Why Donate Blood?</u></p>
    <p >A blood donation truly is a “gift of life” that a healthy individual can give to others in their community who are sick or injured. In one hour’s time, a person can donate one unit of blood that can be separated into four individual components that could help save multiple lives.</p>  
  <p>From one unit of blood, red blood cells can be extracted for use in trauma or surgical patients. Plasma, the liquid part of blood, is administered to patients with clotting problems. The third component of blood, platelets, clot the blood when cuts or other open wounds occur, and are often used in cancer and transplant patients. Cryoprecipitated anti-hemophilic factor (AHF) is also used for clotting factors.</p>
  </div>


  <div className="elig text-center m-5">
  <h2 className='text-center text-light fs-1'>Are You Eligible To Donate Blood.</h2>
        <Link to="/src/Folder/OrganizeDrive.js" className='text-decoration-none text-light fs-4 btn btn-danger w20'>Find Out Now.</Link>
  </div>


    <div className=" m-5 mt-0">
  <table className="table container p-5 pt-0 text-dark border border-danger border-5">
        <thead>
          <tr className='bg-danger text-light'>
            <th >Blood Type</th>
            <th >Donate Blood To</th>
            <th> Receive Blood From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th >A+</th>
            <td>A+ AB+</td>
            <td>A+ A- O+ O-</td>
          </tr>
          <tr>
            <th >O+</th>
            <td>O+ A+ B+ AB+</td>
            <td>O+ O-</td>
          </tr>
          <tr>
            <th >B+</th>
            <td>B+ AB+</td>
            <td>B+ B- O+ O-</td>
          </tr>
          <tr>
            <th >AB+</th>
            <td>AB+</td>
            <td>Everyone</td>
          </tr>
          <tr>
            <th >A-</th>
            <td>A+ A- AB+ AB-</td>
            <td>A- O-</td>
          </tr>
          <tr>
            <th >O-</th>
            <td>Everyone</td>
            <td>O-</td>
          </tr>
          <tr>
            <th >B+</th>
            <td>B+ B- AB+ AB-</td>
            <td>B- O-</td>
          </tr>
          <tr>
            <th >AB-</th>
            <td>AB+ AB-</td>
            <td>AB- A- B- O-</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="m-5 homedrive text-center">
      <h2 className='text-center text-light fs-1'>Organize a Blood Drive.</h2>
      <p className='text-light fs-4'>Become a Host and help others.</p>
        <Link to="/src/Folder/OrganizeDrive.js" className='text-decoration-none text-light fs-4 btn btn-danger'>Request Form</Link>
      </div>

      
    <div className="about text-center m-5">
      <h2 className='text-center text-light fs-1'>Want to Know More About Blood Donation ?</h2>
        <Link to="/src/Folder/About.js" className='text-decoration-none text-light fs-4 btn btn-danger'>Click Here To Know More.</Link>
    </div>

    </div>
  )
}

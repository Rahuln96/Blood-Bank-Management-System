import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      
    <h2 className="text-center aboutImg fs-1">All About Blood Donation</h2>
    <p className="m-5">The gift of blood helps save lives, and the demand for blood and blood products is great. Every 2 seconds, someone in the U.S. needs blood, and more than 50,000 units of blood are needed each year at Cedars-Sinai alone. Learn more about blood types and compatibility, different ways to donate and the need for lifesaving blood so you can make an informed decision about donation. 
    </p>
    <nav id="navbar-example2" className="navbar px-3 mb-3 fs-5 m-5">
        <ul className="nav align-items-center justify-content-center">
          <li className="nav-item">
            <Link className="nav-link text-danger dropdown-toggle" to="#scrollspyHeading1">Types Of Donation</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger dropdown-toggle"  to="#scrollspyHeading2">Blood Types</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger dropdown-toggle"  to="#scrollspyHeading3">Compartibility</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger dropdown-toggle"  to={<About />}>Why Your Donation Matters</Link>
          </li>
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-light p-3 rounded-2 m-5" tabindex="0">
        <h4 id="scrollspyHeading1">Types Of Donation</h4><hr />
        <p>There are many ways you can make a difference and save lives. Our team members will help identify which type of donation is best for you, based on your blood type and the immediate need for blood or blood products.
           <ul className=" text-danger">
            <li>Whole Blood</li>
            <li>Platelets</li>
            <li>Plasma</li>
            <li>Double Red Cells</li>
            <li>Donating for Yourself (Autologous Donation)</li>
            <li>Donating for Someone Else (Directed Donation)</li>
           </ul>
        </p>
        <br /><br /><br />
        <h4 id="scrollspyHeading2">Blood Types</h4><hr />
        <p>It's important to know your blood type—whether you're a donor or a patient in need of blood products. You may be surprised to learn how many people will benefit from your generous gift, no matter what type you have.

            See how common or rare various types of blood are in the India Whatever your blood type, we encourage you to donate.</p>
            <br /><br /><br />
        <h4 id="scrollspyHeading3">Compatibility</h4><hr />
        <p>Everyone who is eligible can donate blood, but depending on your blood type, you're only able to receive certain types of blood, plasma or platelets. <br /> <br />

            Whole Blood <br />
            There are eight different blood types, and they're not always compatible with each other. Interestingly, people who have O-negative blood are considered universal donors for the entire population. <br /> <br />
            
            Plasma & Platelet <br />
            When it comes to blood components, compatibility is the opposite of whole blood. Donors with Type AB blood are the universal donors of platelets and plasma.
            
            </p>
            <br /><br /><br />
        <h4 id="scrollspyHeading4">Why Your Donation Matters</h4><hr />
        <p>There are no substitutes for blood, platelets or plasma—they cannot be manufactured. Patients in need of blood or blood products must rely on donations from people like you. Those who are hesitant about donating blood for the first time often find that the donation process is easy and that saving lives is deeply gratifying. <br />
            One donation can save multiple lives. Here are the facts:
            <ul className="list-group-item-danger">
                <li>Just 1 donation can save up to 3 lives</li>
                <li>The average red blood cell transfusion is 3 pints (or 3 whole-blood donations).
                </li>
                <li>More than 1 million people every year are diagnosed with cancer for the first time. Many of them will need blood—sometimes daily—during chemotherapy.
                </li>
                <li>More than 38,000 blood donations are needed every day.
                </li>
                <li>Type O-negative whole blood can be transfused to people with any blood type, but this type of blood is rare, and supplies of it are low.
                </li>
                <li>Type AB plasma can be transfused to patients with all other blood types, but it's also in short supply.</li>
            </ul>
        </p>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </div>
  )
}

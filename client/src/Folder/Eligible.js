import React from 'react'

export default function Eligible() {
  return (
    <div>
      <div>
    <h2 className="text-center mt-5">Are You Eligible For Donating Blood ?</h2><hr />
    <p className="ms-5">Most people can give blood if they are in good health. There are some basic requirements one  need to fulfill in order to become a blood donor.  Below are some basic eligibility guidelines:</p>
    <div className="card m-auto mb-3" >
      <div className="card-body">
        <h5 className="card-title fs-4">Age:</h5>
        <p className="card-text">
          You are aged between 18 and 65. <br /> * In some countries national legislation permits 16–17 year-olds to donate provided that they fulfil the physical and hematological criteria required and that appropriate consent is obtained. <br /> * In some countries, regular donors over the age of 65 may be accepted at the discretion of the responsible physician. The upper age limit in some countries are 60.
          </p>
      </div>
    </div>
    <div className="card m-auto mb-3" >
      <div className="card-body">
        <h5 className="card-title fs-4">Weight:</h5>
        <p className="card-text">
          You weigh at least 50 kg. <br />* In some countries, donors of whole blood donations should weigh at least 45 kg to donate 350 ml ± 10% .</p>
      </div>
    </div>
    <div className="card m-auto mb-3" >
      <div className="card-body">
        <h5 className="card-title fs-4">Health:</h5>
        <p className="card-text">          
You must be in good health at the time you donate. <br /> You cannot donate if you have a cold, flu, sore throat, cold sore, stomach bug or any other infection. <br /> If you have recently had a tattoo or body piercing you cannot donate for 6 months from the date of the procedure.  If the body piercing was performed by a registered health professional and any inflammation has settled completely, you can donate blood after 12 hours. <br />
If you have visited the dentist for a minor procedure you must wait 24 hours before donating; for major work wait a month. <br />
You must not donate blood If you do not meet the minimum haemoglobin level for blood donation <br />
* A test will be administered at the donation site. In many countries, a haemoglobin level of not less than 12.0 g/dl for females and not less than 13.0 g/dl for males as the threshold.
</p>
</div>
    </div>
    </div>

    <div className="card m-auto mb-3" >
      <div className="card-body">
        <h5 className="card-title fs-4">Travel:</h5>
        <p className="card-text">  
          Travel to areas where mosquito-borne infections are endemic, e.g. malaria, dengue and Zika virus infections, may result in a temporary deferral . <br />          
          Many countries also implemented the policy to defer blood donors with a history of travel or residence for defined cumulative exposure periods in specified countries or areas, as a measure to reduce the risk of transmitting variant Creutzfeldt-Jakob Disease (vCJD) by blood transfusion.
          </p>
</div>
    </div>


    <div className="card m-auto mb-3" >
      <div className="card-body">
        <h5 className="card-title fs-4">Behaviours:</h5>
        <p className="card-text">  
You must not give blood: <br /> If you engaged in “at risk” sexual activity in the past 12 months
<br />Individuals with behaviours below will be deferred permanently: <br />Have ever had a positive test for HIV (AIDS virus)
<br />Have ever injected recreational drugs. <br />
* In the national blood donor selection guidelines, there are more behavior eligibility criteria. Criteria could be different in different countries.
          </p>
</div>
    </div>

    <div className="card m-auto mb-3" >
      <div className="card-body">
        <h5 className="card-title fs-4">Pregnancy and breastfeeding:</h5>
        <p className="card-text">  
          
Following pregnancy, the deferral period should last as many months as the duration of the pregnancy. <br /> It is not advisable to donate blood while breast-feeding. Following childbirth, the deferral period is at least 9 months (as for pregnancy) and until 3 months after your baby is significantly weaned (i.e. getting most of his/her nutrition from solids or bottle feeding).
          </p>
</div>
    </div>
    </div>
  )
}

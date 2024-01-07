import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Card = ({ Location, phoneNumber1, phoneNumber2, title }) => (
  <div className="card">
    <h3>{title}</h3>
    <p><FontAwesomeIcon icon={faMapMarkerAlt} size='lg' className='custom-marker' />{Location}</p>
    <p><FontAwesomeIcon icon={faGraduationCap} size='lg' className='custom-marker' /><span className="highlighted-label">Study Abroad:</span> {phoneNumber1}</p>
    <p><FontAwesomeIcon icon={faPhone} size='lg' className='custom-marker' /><span className="highlighted-label">Education:</span> {phoneNumber2}</p>
    <h6>Call Us</h6>
    <div className="buttons-container">
      <button className="card-button"><FontAwesomeIcon icon={faPhone} size='lg' className='custom-marker' />Education</button>
      <button className="card-button"><FontAwesomeIcon icon={faPhone} size='lg' className='custom-marker' />Study Abroad</button>
      <button className="card-button"><FontAwesomeIcon icon={faEnvelope} size='lg' className='custom-marker' />email us</button>
    </div>
  </div>
);

const Card1 = ({ Location, phone, title }) => (
  <div className="card">
    <h3>{title}</h3>
    <p><FontAwesomeIcon icon={faMapMarkerAlt} size='lg' className='custom-marker' />{Location}</p>
    <p><FontAwesomeIcon icon={faPhone} size='lg' className='custom-marker' /><span className="highlighted-label">Phone:</span> {phone}</p>
    <h6>Call Us</h6>
    <div className="buttons-container1">
      <button className="card-button"><FontAwesomeIcon icon={faPhone} size='lg' className='custom-marker' /></button>
      <button className="card-button"><FontAwesomeIcon icon={faEnvelope} size='lg' className='custom-marker' />email us</button>

    </div>
  </div>
);

function Contact() {
  return (
    <div className="contact-container">
      <h2> BRANCHES INSIDE DHAKA</h2><div>
        <div className="office-section">
          <Card title="KALABAGAN" phoneNumber1="123456789" phoneNumber2="987654321" Location="166/1 Mirpur Road (Beside Dolphin Goli), Kalabagan,
Dhaka-1205." />
          <Card title="BANANAI" phoneNumber1="111222333" phoneNumber2="444555666" Location="Taneem Square (1st Fl), 158/E Kamal Ataturk Avenue,
Banani, Dhaka-1213." />
          <Card title="MOUCHAK" phoneNumber1="123456789" phoneNumber2="987654321" Location="128/2 New Circular Road (West Side of Mouchak Market), Mouchak,
Dhaka-1219." />
          <Card title="MIRPUR" phoneNumber1="111222333" phoneNumber2="444555666" Location="House 14, Main Road
Section 7 (Beside Mirpur 11 Central Mosque), Pallabi,
Mirpur, Dhaka." />
          <Card title="UTTARA CAMPUS 1" phoneNumber1="123456789" phoneNumber2="987654321" Location="Level 4, Millenium Tower, House- 02, Road- 07, Sector- 03, Uttara, Dhaka" />
          <Card title="UTTARA CAMPUS 1" phoneNumber1="123456789" phoneNumber2="987654321" Location="Level-7, Plot 17, Sonarga Jonopoth, Sector-13, Uttara" />
        </div>
      </div>

      <div>
        <h2>OTHER BRANCHES</h2>
        <div className="office-section">

          <Card title="CHATTAGRAM" phoneNumber1="123456789" phoneNumber2="987654321" Location="Mannan Bhaban
156, Nur Ahmed Road, Jubilee Road,
Chattogram, Postal Code: 4000" />
          <Card1 title="SYLHET" phone="987654321" Location="Alhamra(6th floor), Zindabazar,
Sylhet." />
          <Card1 title="RAJSHAHI" phone="987654321" Location="Giyas Plaza (2nd Floor)
Shaheb Bazar, Zero Point, Rajshahi." />
          <Card1 title="MOULAVIBAZZAR" phone="987654321" Location="Court Road, Aptech Computer Education,
Moulivibazar." />
          <Card1 title="RANGPUR" phone="987654321" Location="Joy Tower, House# 02, Road# 01, Dhap Engineer Para Near RDRS Mor, Rangpur" />
          <Card1 title="KHULNA" phone="987654321" Location="Milton tower, 64 kda avenue, 2nd floor ( tetul tola mor), Khulna" />

        </div>
      </div>
      <div><h2>OVERSEAS OFFICES</h2>
        <div className="office-section1">

          <Card1 title="AUSTRALIA" phone="987654321" Location="28 Patricia Loop, Keysborough, VIC 3173" />
          <Card1 title="USA" phone="987654321" Location="2501 Hunter Place, Suite 201 Woodbridge, VA 22192" />

        </div>
      </div>
    </div>
  );
}

export default Contact;

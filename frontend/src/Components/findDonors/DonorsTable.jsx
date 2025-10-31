import React from 'react';
import "../../static/findDonors.css";


const DonorsTable = ({name, phone, email, province, city}) => {
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{province}</td>
        <td>{city}</td>
      </tr>
    </tbody>
  )
}

export default DonorsTable
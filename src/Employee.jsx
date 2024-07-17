import React from 'react';

const Employee = ({ employee }) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      <td>{employee.status === 'Active' ? employee.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : 'N/A'}</td>
      <td>{employee.status}</td>
    </tr>
  );
};

export default Employee;
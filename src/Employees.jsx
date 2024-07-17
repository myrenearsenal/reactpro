import React from 'react';

// Employee component
const Employee = ({ employee, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      {employee.status === 'Active' ? (
        <td>{employee.salary}</td>
      ) : (
        <td>-</td>
      )}
      <td>{employee.status}</td>
    </tr>
  );
};

// Employees component
const Employees = () => {
  const employees = [
    { name: 'Jennylyn Mercado', position: 'Manager', salary: 80000, status: 'Active' },
    { name: 'Dennis Trillo', position: 'Developer', salary: 60000, status: 'Active' },
    { name: 'Dingdong Dantes', position: 'Designer', salary: 55000, status: 'Active' },
    { name: 'Marian Rivera', position: 'Manager', salary: 85000, status: 'Active' },
    { name: 'Sanya Lopez', position: 'Developer', salary: 65000, status: 'Active' },
    { name: 'Alden Richards', position: 'Designer', salary: 50000, status: 'Active' },
    { name: 'Miafe Coraza', position: 'Developer', salary: 70000, status: 'Active' },
    { name: 'Barbie Forteza', position: 'Manager', salary: 90000, status: 'Active' },
    { name: 'David Licauco', position: 'Developer', status: 'Not Active' },
    { name: 'Myrene Arsenal', position: 'Designer', status: 'Not Active' },
  ];

  return (
    <table>
    <tr>
      <th>|No.	|</th>
      <th>&nbsp;&nbsp;&nbsp;</th>
      <th>|   	Employee Names	|</th>
      <th>&nbsp;&nbsp;&nbsp;</th>
      <th>|   	Position	  |</th>
      <th>&nbsp;&nbsp;&nbsp;</th>
      <th>|   	Salary	|</th>
      <th>&nbsp;&nbsp;&nbsp;</th>
      <th>|   	Status|</th>
    </tr>
    <tr>
      <td>|1|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Jennylyn Mercado|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Manager|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|80000|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Active|</td>
    </tr>
    <tr>
      <td>|2|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Dennis Trillo|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Developer|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|60000|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Active|</td>
    </tr>
    <tr>
      <td>|3|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Dingdong Dantes|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Designer|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|55000|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Active|</td>
    </tr>
    <tr>
      <td>|4|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Marian Rivera|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Manager|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|85000|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Active|</td>
    </tr>
    <tr>
      <td>|5|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Sanya Lopez|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Developer|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|65000|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Active|</td>
    </tr>
    <tr>
      <td>|6|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Alden Richards|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Designer|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|50000|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Active|</td>
    </tr>
    <tr>
      <td>|7|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Miafe Coraza|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Developer|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|70000|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Active|</td>
    </tr>
    <tr>
      <td>|8|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Barbie Forteza|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Manager|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|90000|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Active|</td>
    </tr>
    <tr>
      <td>|9|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|David Licauco|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Developer|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|-|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Not Active|</td>
    </tr>
    <tr>
      <td>|10|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Myrene Arsenal|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Designer|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|-|</td>
      <td>&nbsp;&nbsp;&nbsp;</td>
      <td>|Not Active|</td>
    </tr>
  </table>
  );
};

export default Employees;
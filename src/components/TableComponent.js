import React from 'react';


const TableComponent = () => {
  return (
    <div className="styled-table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>25</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Sara</td>
            <td>30</td>
            <td>UK</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

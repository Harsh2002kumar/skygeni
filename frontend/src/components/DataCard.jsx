import React from 'react';
import './DataTable.css'; // Create a CSS file for styling

const DataTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Closed Fiscal Quarter</th>
            <th>Cust Type</th>
            {data.quarters.map((quarter, index) => (
              <th key={index} colSpan="3" className="quarter-header">
                {quarter}
              </th>
            ))}
            <th>Total</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            {data.quarters.map((quarter, index) => (
              <React.Fragment key={index}>
                <th># of Opps</th>
                <th>ACV</th>
                <th>% of Total</th>
              </React.Fragment>
            ))}
            <th>ACV</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index}>
              <td>{row.quarter}</td>
              <td>{row.custType}</td>
              {row.data.map((cell, cellIndex) => (
                <React.Fragment key={cellIndex}>
                  <td>{cell.opps}</td>
                  <td>{cell.acv}</td>
                  <td>{cell.percentage}</td>
                </React.Fragment>
              ))}
              <td>{row.totalACV}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

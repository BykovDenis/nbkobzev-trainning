import React from 'react';

const WidgetTable = (props) => {
  let onSort = (e) => {
    props.onSort(e.currentTarget.id);
  };
  return (
    <table
      className="table table-striped table-bordered"
      style={{ cursor: 'pointer', color: '#505050', fontSize: '20px' }}
    >
      <thead>
        <tr>
          <th id="parameter" onClick={onSort}>
            Parameters{' '}
          </th>
          <th id="value" onClick={onSort}>
            Values{' '}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.dataTable.map((item) => (
          <tr>
            <td>{item.parameter}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WidgetTable;

import './index.css';

import React from 'react';

const WidgetTable = (props) => {
  const onSortClick = (evt) => {
    props.onSortClick(evt.currentTarget.id);
  };
  return (
    <table className="table table-striped table-bordered WidgetTable">
      <thead>
        <tr>
          <th id="parameter" onClick={onSortClick}>
            Parameters{' '}
          </th>
          <th id="value" onClick={onSortClick}>
            Values{' '}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.dataTable.map((item, index) => (
          <tr key={index}>
            <td>{item.parameter}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WidgetTable;

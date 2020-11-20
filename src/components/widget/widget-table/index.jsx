import './index.css';

import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';


const WidgetTable = (props) => {
  const onSortClick = (evt) => {
    props.onSortClick(evt.currentTarget.id);
  };
  return (
    <table className="table table-striped table-bordered widget-table">
      <thead>
        <tr>
          <th id="parameter" onClick={onSortClick}>
            Parameters{' '}
            {props.sortKey === 'parameter' ? (
              props.sort === 'asc' ? (
                <FontAwesomeIcon icon={faSortDown} />
              ) : (
                <FontAwesomeIcon icon={faSortUp} />
              )
            ) : (
              ''
            )}
          </th>
          <th id="value" onClick={onSortClick}>
            Values{' '}
            {props.sortKey === 'value' ? (
              props.sort === 'asc' ? (
                <FontAwesomeIcon icon={faSortDown} />
              ) : (
                <FontAwesomeIcon icon={faSortUp} />
              )
            ) : (
              ''
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.dataTable.map((item) => (
          <tr key={item.parameter}>
            <td>{item.parameter}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

WidgetTable.propTypes = {
  onSortClick: PropTypes.func.isRequired,
  dataTable: PropTypes.array.isRequired,
};

export default WidgetTable;

import './index.css';

import { faSortAlphaDownAlt, faSortAlphaUpAlt } from '@fortawesome/free-solid-svg-icons';
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
            <span>Parameters</span>
            {props.sortKey === 'parameter' ? (
              <FontAwesomeIcon
                className="sort-alpha"
                icon={props.sort === 'asc' ? faSortAlphaDownAlt : faSortAlphaUpAlt}
              />
            ) : (
              ''
            )}
          </th>
          <th id="value" onClick={onSortClick}>
            <span>Values</span>
            {props.sortKey === 'value' ? (
              <FontAwesomeIcon
                className="sort-alpha "
                icon={props.sort === 'asc' ? faSortAlphaDownAlt : faSortAlphaUpAlt}
              />
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

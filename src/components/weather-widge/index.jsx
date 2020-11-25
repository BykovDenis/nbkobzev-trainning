import './index.css';

import React from 'react';

import WidgetHeader from './widget-header';
import WidgetTable from './widget-table';

const WeatherWidget = (props) => {
  return (
    <div className="weather-widget">
      <WidgetHeader
        icon={props.icon}
        city={props.city}
        country={props.country}
        temp={props.temp}
        description={props.description}
        dataTime={props.dataTime}
        unit={props.unit}
        onUnitClick={props.onUnitClick}
      />
      <WidgetTable
        dataTable={props.dataTable}
        onSortClick={props.onSortClick}
        sort={props.sort}
        sortKey={props.sortKey}
      />
    </div>
  );
};

export default WeatherWidget;

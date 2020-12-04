import { withStyles } from '@material-ui/core/styles';
import React from 'react';

import WidgetHeader from './widget-header';
import WidgetTable from './widget-table';

const styles = {
  weatherWidget: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '800px',
  },
};

const WeatherWidget = (props) => {
  const { classes } = props;
  return (
    <div className={classes.weatherWidget}>
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

export default withStyles(styles)(WeatherWidget);

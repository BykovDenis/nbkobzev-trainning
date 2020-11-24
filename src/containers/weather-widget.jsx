import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ErrorComponent from '../components/error';
import Preloader from '../components/preloader';
import WeatherWidget from '../components/widget/weather-widget';
import { onSort, setWidgetData } from '../redux/actions';
import {
  getAppId,
  getCity,
  getCountry,
  getDataTable,
  getDataTime,
  getDescription,
  getErrorLoadingWidgetData,
  getIcon,
  getIdCity,
  getIsFetching,
  getSort,
  getSortElemets,
  getSortKey,
  getTemp,
  getTempUnit,
  getTextError,
  getUnit,
} from '../redux/selectors';

class WidgetContainer extends React.Component {
  componentDidMount() {
    this.props.setWidgetData(this.props.unit, this.props.idCity, this.props.appId);
  }
  onSortClick = (id) => {
    this.props.onSort(id, this.props.dataTable, this.props.sort, this.props.sortKey, this.props.sortElemets);
  };
  onUnitClick = () => {
    this.props.setWidgetData(this.props.unit, this.props.idCity, this.props.appId);
  };
  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Preloader />
        ) : !this.props.errorLoadingWidgetData ? (
          <WeatherWidget
            icon={this.props.icon}
            city={this.props.city}
            country={this.props.country}
            temp={this.props.temp}
            description={this.props.description}
            dataTime={this.props.dataTime}
            unit={this.props.tempUnit}
            onUnitClick={this.onUnitClick}
            dataTable={this.props.dataTable}
            onSortClick={this.onSortClick}
            sort={this.props.sort}
            sortKey={this.props.sortKey}
          />
        ) : (
          <ErrorComponent textError={this.props.textError} />
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    icon: getIcon(state),
    city: getCity(state),
    country: getCountry(state),
    temp: getTemp(state),
    dataTable: getDataTable(state),
    sort: getSort(state),
    sortKey: getSortKey(state),
    description: getDescription(state),
    dataTime: getDataTime(state),
    unit: getUnit(state),
    isFetching: getIsFetching(state),
    idCity: getIdCity(state),
    appId: getAppId(state),
    tempUnit: getTempUnit(state),
    errorLoadingWidgetData: getErrorLoadingWidgetData(state),
    textError: getTextError(state),
    sortElemets: getSortElemets(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  const bindActions = {
    setWidgetData,
    onSort,
  };
  return bindActionCreators(bindActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);

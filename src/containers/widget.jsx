import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWeatherInformation } from '../api/weather-information';
import WidgetHader from '../components/widget/hader';
import WidgetTable from '../components/widget/table';
import { onSort, setWidgetData } from '../redux/actions';
import {
  getCity,
  getCountry,
  getDataTable,
  getDataTime,
  getDescription,
  getIcon,
  getSort,
  getSortKey,
  getTemp,
} from '../redux/selectors';

class WidgetContainer extends React.Component {
  componentDidMount() {
    getWeatherInformation().then((response) => {
      let icon = response.data.weather[0].icon;
      let city = response.data.name;
      let country = response.data.sys.country;
      let temp = Math.round(response.data.main.temp);
      let description = response.data.weather[0].description;
      let speed = response.data.wind.speed + ' m/s';
      let pressure = response.data.main.pressure + ' hpa';
      let humidity = response.data.main.humidity + ' %';
      let sunriseDate = new Date(response.data.sys.sunrise * 1000);
      let sunrise = sunriseDate.getHours() + ':' + sunriseDate.getMinutes();
      let sunsetDate = new Date(response.data.sys.sunset * 1000);
      let sunset = sunsetDate.getHours() + ':' + sunsetDate.getMinutes();
      let { lon, lat } = response.data.coord;
      let dt = new Date(response.data.dt * 1000);
      let dataTime =
        dt.getHours() + ':' + dt.getMinutes() + ' ' + dt.toLocaleString('en', { month: 'short', day: 'numeric' });
      let dataTable = [
        { parameter: 'Wind', value: speed },
        { parameter: 'Pressure', value: pressure },
        { parameter: 'Humidity', value: humidity },
        { parameter: 'Sunrise', value: sunrise },
        { parameter: 'Sunset', value: sunset },
        { parameter: 'Geo coords', value: `[${lat}, ${lon}]` },
      ];
      this.props.setWidgetData(
        icon,
        city,
        country,
        temp,
        description,
        speed,
        pressure,
        humidity,
        sunrise,
        sunset,
        dataTable,
        dataTime
      );
    });
  }

  render() {
    return (
      <div>
        <WidgetHader
          icon={this.props.icon}
          city={this.props.city}
          country={this.props.country}
          temp={this.props.temp}
          description={this.props.description}
          dataTime={this.props.dataTime}
        />
        <WidgetTable
          dataTable={this.props.dataTable}
          onSort={(id) => this.props.onSort(id, this.props.dataTable, this.props.sort, this.props.sortKey)}
        />
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

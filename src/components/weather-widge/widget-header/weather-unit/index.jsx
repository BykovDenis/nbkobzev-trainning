import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 105,
    height: 40,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.common.white,
    '&$checked': {
      transform: 'translateX(64px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#ec6e4c',
        borderColor: '#ec6e4c',
      },
    },
  },
  thumb: {
    width: 36,
    height: 36,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 3,
    opacity: 1,
    backgroundColor: '#ec6e4c',
  },
  checked: {},
}))(Switch);

class CustomizedSwitches extends React.Component {
  state = {
    checkedC: this.props.unit === 'C' ? true : false,
    colorF: this.props.unit === 'C' ? 'switch-grid-inactive' : 'switch-grid-active',
    colorC: this.props.unit === 'C' ? 'switch-grid-active' : 'switch-grid-inactive',
  };

  handleChange = () => {
    this.props.onUnitClick();
  };

  render() {
    return (
      <FormGroup>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item className={this.state.colorF}>
              F
            </Grid>
            <Grid item>
              <AntSwitch checked={this.state.checkedC} onChange={this.handleChange} name="checkedC" />
            </Grid>
            <Grid item className={this.state.colorC}>
              C
            </Grid>
          </Grid>
        </Typography>
      </FormGroup>
    );
  }
}

export default CustomizedSwitches;

import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Loader from 'react-loader-spinner';

const styles = () => ({
  preloader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
});

const Preloader = (props) => {
  const { classes } = props;
  return (
    <div className={classes.preloader}>
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
  );
};

export default withStyles(styles)(Preloader);

import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = () => ({
  errorСomponent: {
    position: 'relative',
    display: 'block',
    padding: '0.5em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem',
    backgroundColor: 'rgba(206, 17, 38, 0.05)',
    color: 'inherit',
  },
});

const ErrorComponent = (props) => {
  const { classes } = props;
  return (
    <div>
      <pre className={classes.errorСomponent}> {props.textError} </pre>
    </div>
  );
};

export default withStyles(styles)(ErrorComponent);

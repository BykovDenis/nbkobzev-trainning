import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  list: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '2vw',
    width: '200px',
  },
  listItem: {
    listStyle: 'circle',
  },
});

const List = (props) => {
  const { classes } = props;
  let list = props.arraySum.map((input, index) => (
    <li key={index} className={classes.listItem}>
      {input}
    </li>
  ));
  return (
    <div>
      <p>Result sum: </p>
      <ul className={classes.list}>{list}</ul>
    </div>
  );
};

List.propTypes = {
  arraySum: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default withStyles(styles)(List);

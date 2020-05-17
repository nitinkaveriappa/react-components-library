import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  themeComponentLoader: {
    position: 'absolute',
    left: 'calc(50% - 20px)',
    top: 'calc(50% - 20px)',
    outline: 'transparent',
  },
  themeButtonLoader: {
    marginLeft: 10,
  },
  themeModalLoader: {
    marginRight: 10,
  },
}));

const Loader = ({ size, color, type }) => {
  const classes = useStyles();
  return (
    <CircularProgress
      className={classes[`theme${type}Loader`]}
      color={color}
      size={size}
    />
  );
};

Loader.defaultProps = {
  size: 40,
  color: 'primary',
  type: 'Component',
};

Loader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.string,
};

export default Loader;

import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
  <>
    <p>Hello {name}!, this is a simple hello world component</p>
    <h3>husky sample</h3>
  </>
);

Hello.propTypes = {
  name: PropTypes.node,
};

Hello.defaultProps = {
  name: '',
};

export default Hello;

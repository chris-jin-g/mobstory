import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Hello = ({ name }) => {
  const [count, setCount] = useState(23);
  return (
    <>
      <p>Hello {name}!, this is a simple hello world component</p>
    </>
  );
};

Hello.propTypes = {
  name: PropTypes.node,
};

Hello.defaultProps = {
  name: '',
};

export default Hello;

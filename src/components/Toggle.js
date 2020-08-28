import React from 'react';

import useDarkMode from 'use-dark-mode';

const Toggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <span>
      <button onClick={darkMode.toggle}>{darkMode.value ? 'Light' : 'Dark'}</button>
    </span>
  );
};

export default Toggle;
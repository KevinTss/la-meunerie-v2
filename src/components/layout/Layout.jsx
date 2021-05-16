import React from 'react';

import Head from '../head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      {children}
    </div>
  );
};

export default Layout;

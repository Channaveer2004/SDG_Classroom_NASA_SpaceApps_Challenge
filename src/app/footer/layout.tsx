// layout.tsx

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ padding: '24px', backgroundColor: '#000', minHeight: '100vh', color: '#ffffff' }}>
      {children}
    </div>
  );
};

export default Layout;

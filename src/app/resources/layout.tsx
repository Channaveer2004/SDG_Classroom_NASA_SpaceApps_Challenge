// Layout.tsx

export const metadata = {
  title: 'Course Resources',
  description: 'A collection of resources to help students learn',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-4">
      {children}
    </div>
  );
};

export default Layout;

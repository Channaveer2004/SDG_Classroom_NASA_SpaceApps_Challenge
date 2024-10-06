// import './globals.css';

export const metadata = {
  title: 'Course Resources',
  description: 'A collection of resources to help students learn',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
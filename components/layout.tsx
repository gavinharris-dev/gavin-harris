import { Header } from "./header";
import { useEffect, useState } from "react";

import Footer from "./footer";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Meta />
      <div className='dark min-h-screen dark:bg-gray-800 dark:text-gray-50'>
        <div className='min-h-screen max-w-screen-lg m-auto'>
          <Header
            setDarkMode={(mode) => setDarkMode(mode)}
            darkMode={darkMode}
          />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

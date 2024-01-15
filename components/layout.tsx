import Footer from "./footer";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <div className='dark min-h-screen dark:bg-gray-800 dark:text-gray-50'>
      <div className='min-h-screen max-w-screen-lg m-auto'>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  </>
);

export default Layout;

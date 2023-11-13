import { Header, Aside } from "@components/partials/navigation";
import Footer from "../Footer";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mainHelper">
        <Aside />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

import Header from "./Header";
import type { ReactElement } from "react";
import Footer from "./Footer";

function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="flex flex-col  ">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

import Header from "./Header";
import type { ReactElement } from "react";
import Footer from "./Footer";

function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

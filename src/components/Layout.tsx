import Header from "./Header";
import type { ReactElement } from "react";
import Footer from "./Footer";

function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

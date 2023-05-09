import Header from "./Header";
import type { ReactElement } from "react";
import Footer from "./Footer";

function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

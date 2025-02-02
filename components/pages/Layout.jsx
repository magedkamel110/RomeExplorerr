import React, { useEffect } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

function Layout({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.src = "https://widgets.revue.us/2.0/rw-widget-slider.js"
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);
  return (
    <>
      <Header></Header>
      {children}
      <div data-rw-slider="45165"></div>
      <Footer></Footer>
    </>
  );
}

export default Layout;

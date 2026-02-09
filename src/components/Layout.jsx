import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import WhatsAppButton from "./WhatsAppButton";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowLoader(true);
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Header />
      {showLoader && <Loader />}
      <main>{children}</main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

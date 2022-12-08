import "../styles/global.css";

import GlobalVar from "../context/GlobalVar";

import Header from "../components/Header";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import SocialMedia from "../components/SocialMedia";

function MyApp({ Component, pageProps }) {
  const [menuBtn, setMenuBtn] = useState(false);
  const [statusPage, setStatusPage] = useState(0);

  const [isDocumentReady, setIsDocumentReady] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      if (!isDocumentReady) {
        setIsDocumentReady(true);
      }
    }, 7 * 1000);
  }, [isDocumentReady]);

  if (!isDocumentReady)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <GlobalVar.Provider
      value={{
        menuBtn,
        setMenuBtn,
        statusPage,
        setStatusPage
      }}
    >
      <Component {...pageProps} />
      <Header />
      <SocialMedia />
    </GlobalVar.Provider>
  );
}

export default MyApp;

import "../styles/global.css";

import GlobalVar from "../context/GlobalVar";

import Header from "../components/layout/Header";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const [menuBtn, setMenuBtn] = useState(false);

  const [isDocumentReady, setIsDocumentReady] = useState(false);

  useEffect(() => { 
      if (!isDocumentReady) {
        setIsDocumentReady(true);
      }
  }, []);

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
      }}
    >
      <Component {...pageProps} />
      <Header />
    </GlobalVar.Provider>
  );
}

export default MyApp;

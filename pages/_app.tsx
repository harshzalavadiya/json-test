import React from "react";
import SITE_CONFIG from "../config/site.config";

function MyApp({ Component, pageProps, translations }) {
  return (
    <div>
      <pre>{JSON.stringify(translations, null, 2)}</pre>
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async () => {
  console.log("DEFAULT_LANG", SITE_CONFIG);

  const translations = await import(
    `../config/${SITE_CONFIG.defaultLang}.json`
  );

  return {
    translations,
  };
};

export default MyApp;

import React, { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { initGA } from "../Analytics/Analytics";

function CookieConsentBanner() {
  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <CookieConsent
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
      enableDeclineButton
      disableButtonStyles
      buttonText="Accept"
      declineButtonText="Decline"
      buttonClasses="btn btn-primary"
      declineButtonClasses="btn btn-secondary"
      style={{
        alignItems: "center",
        background: "#2b0c36",
        padding: "16px",
        maxWidth: "400px",
      }}
      buttonStyle={{ marginLeft: "16px" }}
    >
      <span>This site uses some cookies to collect data</span>
    </CookieConsent>
  );
}

export default CookieConsentBanner;

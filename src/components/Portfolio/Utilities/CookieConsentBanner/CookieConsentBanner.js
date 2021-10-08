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
      buttonClasses="btn btn-primary btn-success"
      declineButtonClasses="btn btn-outline-secondary"
      containerClasses="cookie-consent__container"
      contentClasses="cookie-consent__content"
      style={{
        alignItems: "center",
        background: "#2b0c36",
        padding: "24px",
        maxWidth: "451px",
        borderRadius: "8px",
      }}
      contentStyle={{
        margin: 0,
      }}
      buttonStyle={{ marginLeft: "16px" }}
      declineButtonStyle={{ color: "#ffffff" }}
    >
      <p>
        <span role="img" aria-label="Analytical cookie">
          🍪
        </span>{" "}
        Just a note — I use cookies
      </p>
      <p style={{ fontSize: "14px", marginBottom: "24px" }}>
        I use analytics to help me understand how people anonymously use my
        site, so I can build a better experience.
      </p>
    </CookieConsent>
  );
}

export default CookieConsentBanner;

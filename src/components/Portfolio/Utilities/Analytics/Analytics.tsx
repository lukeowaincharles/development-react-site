import ReactGA from "react-ga4";

export const initGA = ({id}: any) => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize(id);
    ReactGA.send("pageview");
  }
};

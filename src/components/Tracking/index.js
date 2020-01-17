import ReactGA from 'react-ga';

// documentation https://github.com/react-ga/react-ga

// initialise tracking ID
export const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
}

// track the pageviews
export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// track modalviews
export const ModalView = (ModalName) => {
  ReactGA.modalview(ModalName);
}

/**
 * Event - Add custom tracking event.
 * @param {string} category 
 * @param {string} action 
 * @param {string} label 
 */
export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

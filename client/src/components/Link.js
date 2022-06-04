import React from "react";
import { connect } from "react-redux";

import currentEndpoint from "../actions/currentEndpoint";

const Link = ({ href, className, children, currentEndpoint }) => {
  const onLinkClick = (e) => {
    e.preventDefault();

    window.history.pushState({}, "", href);
    const popstate = new PopStateEvent("popstate");
    dispatchEvent(popstate);
    currentEndpoint(href);
  };

  return (
    <a href={href} className={className} onClick={onLinkClick}>
      {children}
    </a>
  );
};

export default connect(null, { currentEndpoint })(Link);

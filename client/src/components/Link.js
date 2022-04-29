import React from "react";

const Link = ({ href, className, children }) => {
  const onLinkClick = e => {
    e.preventDefault();

    window.history.pushState({}, '', href);
    const popstate = new PopStateEvent('popstate');
    dispatchEvent(popstate);
  }

  return (
    <a href={href} className={className} onClick={onLinkClick}>
      {children}
    </a>
  );
};

export default Link;

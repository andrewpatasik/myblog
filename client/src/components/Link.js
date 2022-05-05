import React from "react";

const Link = ({ href, className, children, setEndpoint }) => {
  const onLinkClick = e => {
    e.preventDefault();

    window.history.pushState({}, '', href);
    const popstate = new PopStateEvent('popstate');
    dispatchEvent(popstate);
    setEndpoint(href)
  }

  return (
    <a href={href} className={className} onClick={onLinkClick}>
      {children}
    </a>
  );
};

export default Link;

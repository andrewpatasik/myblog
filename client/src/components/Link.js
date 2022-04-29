import React from "react";

const Link = ({ setPostPath, href, className, children }) => {
  const onLinkClick = e => {
    e.preventDefault();

    window.history.pushState({}, '', href);
    const popstate = new PopStateEvent('popstate');
    dispatchEvent(popstate);

    setPostPath(href);
  }

  return (
    <a href={href} className={className} onClick={onLinkClick}>
      {children}
    </a>
  );
};

export default Link;

import React, { useState } from 'react';
import "../Sass/collapse.scss";

function Collapse({ title, content }) {
  const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);

  const toggleCollapsible = () => {
    setCollapsibleOpen(!isCollapsibleOpen);
  };

  return (
    <div className={`collapsible ${isCollapsibleOpen ? 'active' : ''}`}>
      <div className="collapsible-header" onClick={toggleCollapsible}>
        <span className={`collapsible-icon ${isCollapsibleOpen ? 'active' : ''}`}>
          {isCollapsibleOpen ? '▲' : '▼'}
        </span>
        {title}
      </div>
      <div className={`content ${isCollapsibleOpen ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;

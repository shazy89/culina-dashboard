import React from "react";
import { Link } from "react-router-dom";

const SideNavItem = ({
  icon: Icon,
  content,
  to,
  selectedItem,
  setSelectedItem,
}) => {
  const activeTab = selectedItem === content ? "side-nav__link--active" : "";
  return (
    <li className="side-nav__item">
      <Link
        className={`side-nav__link ${activeTab}`}
        onClick={(e) => setSelectedItem(content)}
        to={to}
      >
        <Icon className="side-nav__icon" />
        {content}
      </Link>
    </li>
  );
};

export default SideNavItem;

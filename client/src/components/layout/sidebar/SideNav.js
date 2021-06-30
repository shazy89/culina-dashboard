import React, { useState } from "react";
import { FilePlus, FileText } from "react-feather";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="sidebar">
      <ul className="side-nav">
        <SideNavItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon={FileText}
          content="All Companies"
          to="/companies"
        />
        <SideNavItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon={FilePlus}
          content="New Company"
          to="/company/new"
        />
      </ul>
    </div>
  );
};

export default SideNav;

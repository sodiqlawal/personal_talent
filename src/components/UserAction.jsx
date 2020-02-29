import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const UserAction = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        caret
        style={{
          border: "1px solid #0D64C9",
          borderRadius: "5px",
          color: "#0D64C9",
          fontSize: "14px",
          boxShadow: "0px 3px 6px #2C28281C",
          background:"#FFFFFF",
          width:"114px",
          height:"45px"
        }}
      >
        Action
      </DropdownToggle>
      <DropdownMenu
        style={{ background: "#FFFFFF", fontSize: "12px", color: "#000000" }}
      >
        <DropdownItem>Add new user</DropdownItem>
        <DropdownItem>Export all data</DropdownItem>
        <DropdownItem>Export visible</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserAction;

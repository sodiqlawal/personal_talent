import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  list: {
    width: 500
  },

  userdrawer: {

  },

  userheader: {
    fontSize:"29px",
    color:"#000000",
    textAlign:"center",
    marginTop:"7rem"
  },

  formparent: {
    background:"#F8F9FA",
    width:"100%",
    height:"80vh",
    padding:"4rem 2rem"
  },

  inputcontainer: {
    marginBottom:"1rem"
  },

  input: {
    width:"90%",
    height:"69px",
    paddingLeft:"1rem"
  },

  buttoncontainer: {

  },

  select: {
    width:"45%",
    height:"69px",
    borderRadius:"5px",
    border: "1px solid #74C69B",
    color:"#757575",
    fontSize:"18px"
  },

  button: {
    width:"40%",
    height:"69px",
    borderRadius:"5px",
    background:"#268AFF",
    fontSize:"18px",
    color:"#FFFFFF",
    borderWidth:"0",
    marginLeft:"1.5rem"
  }


});

export default function AddUserDrawer() {
  const classes = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [state, setState] = React.useState({
    right: false
  });

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
    //   onClick={toggleDrawer(side, false)}
    //   onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.userdrawer}>
        <p className={classes.userheader}>Add new user</p>
        <form className={classes.formparent}>
          <div className={classes.inputcontainer}>
            <input type="text" placeholder="Name" className={classes.input} />
          </div>
          <div className={classes.inputcontainer}>
            <input type="text" placeholder="Email" className={classes.input} />
          </div>
          <div className={classes.inputcontainer}>
            <input type="text" placeholder="State" className={classes.input} />
          </div>
          <div className={classes.inputcontainer}>
            <input type="text" placeholder="LGA" className={classes.input} />
          </div>
          <div className={classes.buttoncontainer}>
            <select name="role" className={classes.select}>
              <option value="">Role</option>
              <option value="investor">Investor</option>
            </select>
            <button className={classes.button}>Create</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          caret
          style={{
            border: "1px solid #0D64C9",
            borderRadius: "5px",
            color: "#0D64C9",
            fontSize: "14px",
            boxShadow: "0px 3px 6px #2C28281C",
            background: "#FFFFFF",
            width: "114px",
            height: "45px"
          }}
        >
          Action
        </DropdownToggle>
        <DropdownMenu
          style={{ background: "#FFFFFF", fontSize: "12px", color: "#000000" }}
        >
          <DropdownItem onClick={toggleDrawer("right", true)}>
            Add new user
          </DropdownItem>
          <DropdownItem>Export all data</DropdownItem>
          <DropdownItem>Export visible</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}

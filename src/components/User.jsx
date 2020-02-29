import React from "react";
import DisplayTable from "./Table";
import UserAction from './UserAction'
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MoreIcon from '@material-ui/icons/MoreVert';
import { Switch, Route, NavLink, useParams } from "react-router-dom";
// import UserProfileAction from "./UserProfileAction";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    },
    content: {
        background: "#ffffff"
    },
    icon: {
      position: "fixed",
      bottom: "5%",
      right: "1%",
      background: "#09a23c",
      width: "80px",
      height: "80px",
      borderRadius: "100%",
      boxShadow: "2px 2px 10px #09a23c",
      cursor: "pointer"
    },
    button: {
        marginLeft: "4rem"
      },
    iconcontent: {
      position: "absolute",
      right: "50%",
      top: "15%",
      // bottom:"1%",
      color: "#ffffff",
      fontSize: "2.5rem",
      transform: "translateX(50%)"
      // display:"flex",
      // alignSelf: "center",
      // justifySelf: "center"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      },
      alignSelf: "flex-start"
    },
    toolbar: theme.mixins.toolbar
  })
);

function createData(id, name, role, phone, state, lga, status,action) {
  return { id, name, role, phone, state, lga, status,action };
}

const rows = [
  createData(1, "Opeyemi Ariyo", "Stakeholder", "09012345687", "Lagos",  "Shomolu south","Active", <MoreIcon style={{color:"#417505"}}/> ),
  createData(2, "Opeyemi Ariyo",  "Stakeholder","09012345687", "Lagos",  "Shomolu south","Active", <MoreIcon style={{color:"#417505"}} />),
  createData(3, "Opeyemi Ariyo",  "Stakeholder","09012345687", "Lagos",  "Shomolu south","Active", <MoreIcon style={{color:"#417505"}} />),
  createData(4, "Opeyemi Ariyo",  "Stakeholder","09012345687", "Lagos",  "Shomolu south","Active", <MoreIcon style={{color:"#417505"}} />),
  createData(5, "Opeyemi Ariyo",  "Stakeholder","09012345687", "Lagos",  "Shomolu south","Active", <MoreIcon style={{color:"#417505"}} />),
  createData(6, "Opeyemi Ariyo",   "Stakeholder","09012345687", "Lagos", "Shomolu south", "Active", <MoreIcon style={{color:"#417505"}} />),
  createData(7, "Opeyemi Ariyo",  "Stakeholder", "09012345687", "Lagos", "Shomolu south", "Active", <MoreIcon style={{color:"#417505"}} />),
  createData(8, "Opeyemi Ariyo",  "Stakeholder", "09012345687", "Lagos", "Shomolu south", "Active", <MoreIcon style={{color:"#417505"}} />),
]

const headCells = [
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  { id: "role", numeric: true, disablePadding: false, label: "Role" },
  { id: "phone", numeric: true, disablePadding: false, label: "Phone" },
  {
    id: "state",
    numeric: false,
    disablePadding: false,
    label: "State"
  },
  { id: "lga", numeric: false, disablePadding: false, label: "LGA" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
  { id: "action", numeric: false, disablePadding: false, label: "" }
];




export default function Users() {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route exact path={`/users`}>
            <div>

            <div className={classes.button}>
                <UserAction />
            </div>

              <DisplayTable
                rows={rows}
                headCells={headCells}
                heading="users"
                // actionButton={<UserProfileAction />}
                showCheck={false}
                showToolbar={false}
              />
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

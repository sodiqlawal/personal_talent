import React from "react";
import DisplayTable from "./Table";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
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
    button: {
      marginLeft: "4rem"
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

function createData(
  id,
  state,
  lga,
  allocation,
  total_enrolled,
  total_pre_load,
  outstanding,
  status,
  data_allocated,
  action
) {
  return { id, state, lga, allocation, total_enrolled, total_pre_load, outstanding, status, data_allocated, action };
}

const rows = [
  createData(
    1,
    "Lagos",
    "Yaba",
    "5,000",
    "4,500",
    "200",
    "500",
    "Open",
    "31.01.2020",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    2,
    "Ekiti",
    "Ado",
    "5,000",
    "4,500",
    "200",
    "500",
    "Closed",
    "31.01.2020",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    3,
    "Abuja",
    "Ado",
    "5,000",
    "4,500",
    "200",
    "500",
    "Open",
    "31.01.2020",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    4,
    "Abuja",
    "Ado",
    "5,000",
    "4,500",
    "200",
    "500",
    "Open",
    "31.01.2020",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    5,
    "Abuja",
    "Ado",
    "5,000",
    "4,500",
    "200",
    "500",
    "Open",
    "31.01.2020",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    6,
    "Abuja",
    "Ado",
    "5,000",
    "4,500",
    "200",
    "500",
    "Open",
    "31.01.2020",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    7,
    "Abuja",
    "Ado",
    "5,000",
    "4,500",
    "200",
    "500",
    "Open",
    "31.01.2020",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    8,
    "Abuja",
    "Ado",
    "5,000",
    "4,500",
    "200",
    "500",
    "Open",
    "31.01.2020",
    <MoreIcon style={{ color: "#417505" }} />
  )
];

const headCells = [
  { id: "state", numeric: false, disablePadding: true, label: "State" },
  {
    id: "lga",
    numeric: true,
    disablePadding: false,
    label: "LGA"
  },
  { id: "allocation", numeric: true, disablePadding: false, label: "Allocation" },
  { id: "total_enrolled", numeric: true, disablePadding: false, label: "Total Enrolled" },
  {
    id: "total_pre_load",
    numeric: false,
    disablePadding: false,
    label: "Total Pre-Enrolled"
  },
  { id: "outstanding", numeric: false, disablePadding: false, label: "Outstanding" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
  { id: "date_allocated", numeric: false, disablePadding: false, label: "Date Allocated" },
  { id: "action", numeric: false, disablePadding: false, label: "" }
];

export default function Allocations() {
  const classes = useStyles();
  const [showFilter, setShowFilter] = React.useState(false);
  const displayFilter = () => setShowFilter(prevState => !prevState);

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route exact path={`/allocations`}>
            <div>
              <div className={classes.button}>
                <button
                  className="btn px-3"
                  onClick={displayFilter}
                  style={{
                    background: "#268AFF",
                    color: "#ffffff",
                    fontSize: "19px",
                    width: "96px",
                    height: "42px",
                    borderRadius: "7px",
                    boxShadow: "0px 2px 4px #00000020",
                    borderWidth: "0"
                  }}
                >
                  Filter
                  <span className="ml-2">&#9660;</span>
                </button>
                <button
                  className="btn ml-4 px-4"
                  style={{
                    background: "#B5D7FF",
                    color: "#268AFF",
                    fontSize: "19px",
                    width: "96px",
                    height: "42px",
                    borderRadius: "7px",
                    boxShadow: "0px 2px 4px #00000020",
                    borderWidth: "0",
                    marginLeft: "2rem"
                  }}
                >
                  Export
                </button>
              </div>

              <DisplayTable
                rows={rows}
                headCells={headCells}
                heading="allocations"
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

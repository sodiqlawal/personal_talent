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

function createData(
  id,
  name,
  applicantId,
  phone,
  gender,
  lga,
  state,
  dob,
  action
) {
  return { id, name, applicantId, phone, gender, lga, state, dob, action };
}

const rows = [
  createData(
    1,
    "Opeyemi Ariyo",
    "NG.ON.AR/AKY/000497",
    "09012345687",
    "Male",
    "Shomolu south",
    "Lagos",
    "Shola Ariyo",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    2,
    "Opeyemi Ariyo",
    "NG.ON.AR/AKY/000497",
    "09012345687",
    "Male",
    "Shomolu south",
    "Lagos",
    "Shola Ariyo",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    3,
    "Opeyemi Ariyo",
    "NG.ON.AR/AKY/000497",
    "09012345687",
    "Male",
    "Shomolu south",
    "Lagos",
    "Shola Ariyo",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    4,
    "Opeyemi Ariyo",
    "NG.ON.AR/AKY/000497",
    "09012345687",
    "Male",
    "Shomolu south",
    "Lagos",
    "Shola Ariyo",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    5,
    "Opeyemi Ariyo",
    "NG.ON.AR/AKY/000497",
    "09012345687",
    "Male",
    "Shomolu south",
    "Lagos",
    "Shola Ariyo",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    6,
    "Opeyemi Ariyo",
    "NG.ON.AR/AKY/000497",
    "Male",
    "09012345687",
    "Shomolu south",
    "Lagos",
    "Shola Ariyo",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    7,
    "Opeyemi Ariyo",
    "NG.ON.AR/AKY/000497",
    "Male",
    "09012345687",
    "Shomolu south",
    "Lagos",
    "Shola Ariyo",
    <MoreIcon style={{ color: "#417505" }} />
  ),
  createData(
    8,
    "Opeyemi Ariyo",
    "NG.ON.AR/AKY/000497",
    "Male",
    "09012345687",
    "Shomolu south",
    "Lagos",
    "Shola Ariyo",
    <MoreIcon style={{ color: "#417505" }} />
  )
];

const headCells = [
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  {
    id: "applicantId",
    numeric: true,
    disablePadding: false,
    label: "Applicant ID"
  },
  { id: "phone", numeric: true, disablePadding: false, label: "Phone Number" },
  {
    id: "gender",
    numeric: false,
    disablePadding: false,
    label: "Gender"
  },
  { id: "lga", numeric: false, disablePadding: false, label: "LGA" },
  { id: "state", numeric: false, disablePadding: false, label: "State" },
  { id: "dob", numeric: false, disablePadding: false, label: "DOB" },
  { id: "action", numeric: false, disablePadding: false, label: "" }
];

export default function Disbursements() {
  const classes = useStyles();
  const [showFilter, setShowFilter] = React.useState(false);
  const displayFilter = () => setShowFilter(prevState => !prevState);

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route exact path={`/disbursements`}>
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
                heading="Disbursements"
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

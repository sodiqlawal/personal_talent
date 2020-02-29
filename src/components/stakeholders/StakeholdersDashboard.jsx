import React, { useState } from "react";
import List from "@material-ui/core/List";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Hidden
} from "@material-ui/core";
import "../css/Home/Home.css"
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import StakeholdersDashboardMenu from "./StakeholdersDashboardMenu";
import AdminDetails from "./AdminDetails.jsx";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Switch, Route, NavLink, useParams } from "react-router-dom";
import dashboard from "../assets/dashboard.svg"


const drawerWidth = 300;

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "#F2F6FD",
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      },
      backgroundColor: "#FFFFFF",
      boxShadow: "none"
    },
    icon: {
      fontSize: "1.8rem"
    },

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      },
      alignSelf: "flex-start"
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      border: "none"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      borderRadius: "8px",
      width: "100%"
    },
    heading: {
      flexGrow: 1,
      textAlign: "start",
      fontSize: "25px",
      fontWeight: 500,
      margin: "1.5rem 1rem 1rem 4rem",
      color: "#4a4a4a"
    },
    list: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      borderRadius: "12px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      marginLeft:"-0.9rem",
      width: "100%",
    },
    completeDrawer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: theme.palette.primary.main,
    },
    signOut: {
      alignSelf: "flex-start"
    },
    adminDetails: {
      width: "100%"
    }
  })
);

const NavLinkStyle = {
  color: "white",
  textDecoration: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
};

const props = (props) => {
  return props.show
}

const dashboardOptions = [
  [
    <div style={{ fontSize: "24px" }}>Dashboard</div>,
    <img src={dashboard} alt="dashboard" style={{ background: "#0d64c9", fontSize: "1.5rem", marginLeft: "10px" }} id="icon" />,
    "/stakeholdersDashboard"
  ],
];

export default function ResponsiveDrawer(props) {
  const { dashboardItem } = useParams();
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adminDetails, setAdminDetails] = useState({
    profileImg: "https://picsum.photos/200/300",
    fullName: "Kenneth Erickson",
    location: " San Diego, CA"
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.completeDrawer}>
      <div className={classes.toolbar} />
      <AdminDetails details={adminDetails} className={classes.adminDetails} />
      <List className={classes.list}>
        {dashboardOptions.map((option, index) => (
          <ListItem button key={index}>
            <NavLink
              to={option[2]}
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                width: "100%",
                borderTopRightRadius: "24px",
                borderBottomRightRadius: "24px"
              }}
              style={NavLinkStyle}
            >
              <ListItemIcon>{option[1]}</ListItemIcon>
              <ListItemText
                primary={option[0]}
                style={{ display: "inline-block" }}
              />
            </NavLink>
          </ListItem>
        ))}
        <div style={{ flexGrow: 1 }}></div>
        <ListItem button className={classes.signOut}>
          <NavLink
            to="/#"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: theme.palette.secondary.main,
              width: "100%",
              padding: "10px",
              borderRadius: "24px"
            }}
            exact
            style={NavLinkStyle}
          >
            <ListItemIcon>
              {<ExitToAppIcon htmlColor="white" className={classes.icon} />}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ fontSize: "22px" }}>
                  Logout
                </Typography>
              }
            />
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon htmlColor="black" />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.heading}>
            {console.log(dashboardItem)}
            <Switch>
              <Route exact path="/stakeholdersDashboard">
                <div>Dashboard</div>
              </Route>
            </Switch>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={`/stakeholdersDashboard`}>
            <div>
              <StakeholdersDashboardMenu />
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

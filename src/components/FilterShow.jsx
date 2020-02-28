import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Button, Form, Input } from "reactstrap";



const useStyles = makeStyles(theme => ({
  form: {
    background: "#e2f3e2",
    // border: "1px solid #b9d6b9",
    color: "#417505",
    maxWidth: "977px",
    minHeight:"178px",
    margin: "3rem",
    borderRadius: "10px",
    padding:"1.3rem",

    [theme.breakpoints.down("sm")]: {
      padding:"0.5rem"
    },
  },

  select: {
    background: "#b9d6b9",
    border: "1px solid #b9d6b9",
    color: "#417505",
    borderRadius: "7px",
    width: "109px",
    height: "47px",
    fontSize: "14px",
    marginLeft:"1rem",
    
    [theme.breakpoints.down("sm")]: {
      margin:"1rem"
    },
  },
  
  dateEnumerated: {
    background: "#b9d6b9",
    border: "1px solid #b9d6b9",
    color: "#417505",
    borderRadius: "7px",
    width: "173px",
    height: "47px",
    fontSize: "14px",
    marginLeft:"1rem",

    [theme.breakpoints.down("sm")]: {
      // marginBottom:"1rem",
      marginTop:"1rem"
    },
  },

  dateVerified: {
    background: "#b9d6b9",
    border: "1px solid #b9d6b9",
    color: "#417505",
    borderRadius: "7px",
    width: "173px",
    height: "47px",
    fontSize: "14px",
    marginRight:"1rem",

    [theme.breakpoints.down("sm")]: {
      // marginBottom:"2rem"
    },
  },

  searchContainer: {
    marginBottom:"10px"
  },

  icon: {
            position:"relative",
            width: "12px" ,
            height:"12px",
            textAlign: "center" ,
            marginLeft: "10rem",
            marginTop: "-4.4rem",

            [theme.breakpoints.down("sm")]: {
              marginTop:"-4.4rem"
            },
  },

  iconverify: {
          position:"relative",
          width: "12px" ,
          height:"12px",
          textAlign: "center" ,
          marginLeft: "9rem",
          marginTop: "-4.4rem",

          [theme.breakpoints.down("sm")]: {
            marginTop:"-4.4rem"
          },
  },

  search: {
    borderRadius: "7px",
    width: "311px",
    height: "47px",
    fontSize: "14px",

    [theme.breakpoints.down("sm")]: {
      marginBottom:"1rem",
      width:"270px"
      
    },
  },

  button: {
    color: "#417505",
    background: "#ffffff",
    border: "1px solid #b9d6b9",
    width: "109px",
    height: "47px",
    fontSize: "14px",
    marginLeft:"1.2rem",
    padding:"auto 1rem",

    [theme.breakpoints.down("sm")]: {
      marginBottom:"1rem",
      marginLeft:"0rem"
    },
  }

}));


const FilterShow = props => {
  const classes = useStyles();

  return (
    <Form
      className={classes.form}
    >
      <div className="d-flex" style={{flexWrap:"wrap"}}>
        <select
          name="status"
          className={classes.select}
        >
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="offline">Offline</option>
        </select>

        <select
          name="gender"
          className={classes.select}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          name="state"
          className={classes.select}
        >
          <option value="">State</option>
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="portharcourt">PortHarcourt</option>
        </select>

        <select
          name="lga"
          className={classes.select}
           >
          <option value="">LGA</option>
          <option value="ikorodu">Ikorodu</option>
          <option value="shomolu">Shomolu</option>
        </select>

        <select
          name="Stage"
          className={classes.select}
        >
          <option value="">Stage</option>
          <option value="stage-I">Stage I</option>
        </select>

        <div className={classes.searchContainer}>
        <Input
            type="text"
            name="date-enumerated"
            id="date-enumerated"
            placeholder="Date Enumerated"
            className={classes.dateEnumerated}
          />
         <CalendarTodayIcon className={classes.icon} />
        </div> 


      </div>


      <div className="mt-1 d-flex ml-3" style={{flexWrap:"wrap"}}>

      <div className={classes.searchContainer}>
      <Input
            type="text"
            name="date-verified"
            id="date-verified"
            placeholder="Date Verified"
            className={classes.dateVerified}
          />
        <CalendarTodayIcon className={classes.iconverify} />
      </div>

        <div>
          <Input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className={classes.search}
          />
        </div>{" "}
        <Button
          className={classes.button}
        >
          Go
        </Button>
      </div>
    </Form>
  );
};

export default FilterShow;

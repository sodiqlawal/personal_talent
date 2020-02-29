import React from 'react';
import './css/Home/Home.css'
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({

  wrapper:{
    backgroundColor: "#f2f6fd",
    width: "100%",
    height:"100vh"
  },

  outerdiv: {
    height:"10px",
    width:"1256px",
    background:"#FCFCEA",

    [theme.breakpoints.down("md")]: {
        width:"100%",
      },
  },

  innerdiv: {
    width:"100%",
    height:"10px",
    background:"#268AFF"
  },

  details : {
    textAlign:"center",
    fontSize:"54px",
    fontWeight:"500",
    marginBottom:"2rem",

    [theme.breakpoints.down("sm")]: {
        fontSize:"35px"
      },
  },

  text: {
    fontSize: "36px",

    [theme.breakpoints.down("sm")]: {
        fontSize:"30px"
      },
  },

  signup: {
    textAlign:"end",
  },

  formcontainer: {
    width:"1256px",
    height:"649px",
    background:"#FFFFFF",
    margin:"5rem auto 1rem auto",
    boxShadow: "0px 3px 6px #0000001A",

    [theme.breakpoints.down("md")]: {
        width:"100%",
        height:"fit-content"
      },
  },

  formparent: {
    textAlign:"center",
    width:"80%",
    margin:"0rem auto",

    [theme.breakpoints.down("sm")]: {
        padding:"1rem"
      },

  },
  buttonnumber: {
    width:"83px",
    height:"49px",
    fontSize:"30px",
    background:"#74B4FF",
    marginBottom:"3rem",
    borderWidth:"0",
    marginTop:"2rem",
    marginRight:"5rem",
    borderRadius:"8px",

    [theme.breakpoints.down("sm")]: {
        marginRight:"2rem",
        width:"75px",
        height:"40px",
        fontSize:"22px"
      },
  },
 
  buttonback: {
    width:"214px",
    height:"50px",
    background:"#268AFF",
    fontSize:"24px",
    color:"#FFFFFF",
    borderWidth:"0",
    marginTop:"4rem",

    [theme.breakpoints.down("sm")]: {
       fontSize:"20px",
       width:"150px",
       height:"40px"
      },
  },

  linkbegin: {
      fontSize:"24px",
      color:"#9B9B9B",
      textDecoration:"underline",
      textDecorationColor:"#9B9B9B",
      marginTop:"3rem",

      [theme.breakpoints.down("sm")]: {
        fontSize:"20px"
      },
  }




}));


export default function Congratulations() {
  const classes = useStyles();
  


  React.useEffect(() => {
  },[])

  return (
    <div className={classes.wrapper} id="wrapper">


        {/* start nav */}
      <div className="nav">
        <p className="text">
          Talents.<span>ng</span>
        </p>
        <ul className="list">
          <li className="login"><Link to="/signin" style={{color:"#FFFFFF", textDecoration:"underline"}}>login</Link></li>
          <button className="signup"><Link to="/signup" style={{color:"#FFFFFF"}}>Sign up</Link></button>
        </ul>
      </div>

      {/* end nav */}


      {/* start signup section */}

        <div className={classes.signup}>


            <div className={classes.formcontainer}>


            <div className={classes.outerdiv}>
                <div className={classes.innerdiv}></div>
            </div>

            <button className={classes.buttonnumber}>3/3</button>
            <form className={classes.formparent}>

            <p className={classes.details}>Congratulations you have successfully registered for this program</p>
            <p className={classes.text}>Check your mail to complete enrollment test</p>

                <button className={classes.buttonback}><Link exact to="/" style={{color:"#FFFFFF"}}>Back to home</Link></button>
                <p className={classes.linkbegin}><Link to="/test" style={{color:"#9B9B9B"}}>Click to begin test</Link></p>
            </form>
            </div>

        </div>



      {/* end signup section */}

      
    </div>
  );
}
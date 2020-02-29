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
    width:"67%",
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

  signup: {
    textAlign:"end",
  },

  formcontainer: {
    width:"1256px",
    height:"549px",
    background:"#FFFFFF",
    margin:"0 auto",
    boxShadow: "0px 3px 6px #0000001A",

    [theme.breakpoints.down("md")]: {
        width:"100%",
        height:"fit-content"
      },
  },

  formparent: {
    textAlign:"center",
    width:"60%",
    margin:"0 auto",

    [theme.breakpoints.down("sm")]: {
        padding:"1rem",
        width:"100%"
      },

  },

  topcontent: {
    display:"flex",
    // justifyContent:"space-between"
  },

  topcontentname: {
    lineHeight:"2rem",
    textAlign:"start"
  },

  topcontentbvn: {
    lineHeight:"2rem",
    marginLeft:"3rem",
    textAlign:"start"
  },

  strong: {
    fontSize:"28px",
    fontWeight:"bold",

    [theme.breakpoints.down("sm")]: {
        fontSize:"22px"
      },
  },

  text: {
    fontSize:"39px",

    [theme.breakpoints.down("sm")]: {
        fontSize:"28px"
      },
  },

  key: {
    fontSize:"19px",
    color:"#818F90",
    marginRight:"2rem",
  },

  value: {
    fontSize:"19px",
    color: "#000000",
    marginLeft:"1rem"
  },
  bottomcontent: {
    marginTop:"2rem"
  },

  bottomup: {
    display:"flex",
    justifyContent:"space-between",
    flexWrap:"wrap",
    marginBottom:"1rem"
  },

  bottomdown: {
    display:"flex",
    // justifyContent:"flex-start"
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

  
  buttonnext: {
    width:"147px",
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
  }




}));


export default function ConfirmDetails() {
  const classes = useStyles();
  


  React.useEffect(() => {
    // input.current.style.fontSize = "0.2rem";
    // input.current.classList.add('style')
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



            <p className={classes.details}>Confirm your details</p>

            <div className={classes.formcontainer}>


            <div className={classes.outerdiv}>
                <div className={classes.innerdiv}></div>
            </div>


                <button className={classes.buttonnumber}>2/3</button>
            <form className={classes.formparent}>


             <div className={classes.topcontent}>
                 <div className={classes.topcontentname}>
                     <p className={classes.strong}>NAME:</p>
                     <p className={classes.text}>Jenny Murtaugh</p>
                 </div>
                 <div className={classes.topcontentbvn}>
                     <p className={classes.strong}>BVN:</p>
                     <p className={classes.text}>0995431887</p>
                 </div>
             </div>
             <hr />

             <div className={classes.bottomcontent}>
                 <div className={classes.bottomup}>
                     <p className={classes.key}>Gender:<span className={classes.value}>Female</span></p>
                     <p className={classes.key}>Date Of Birth:<span className={classes.value}>21-09-1989</span></p>
                     <p className={classes.key}>Phone number:<span className={classes.value}>07044821098</span></p>
                 {/* </div> */}
                 {/* <div className={classes.bottomdown}> */}
                     <p className={classes.key}>State:<span className={classes.value}>Lagos</span></p>
                     <p className={classes.key}>LGA:<span className={classes.value}>Lagos Mainland</span></p>
                     <p className={classes.key}>Home Address:<span className={classes.value}>No 5, shomolu, lagos</span></p>
                 </div>
             </div>

                <button className={classes.buttonnext}><Link to="/congratulations" style={{color:"#FFFFFF"}}>Next</Link></button>
            </form>
            </div>

        </div>



      {/* end signup section */}

      
    </div>
  );
}
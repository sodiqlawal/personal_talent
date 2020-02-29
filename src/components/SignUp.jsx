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
    background:"#FCFCEA"
  },

  innerdiv: {
    width:"33%",
    height:"10px",
    background:"#268AFF"
  },

  details : {
    textAlign:"center",
    fontSize:"54px",
    fontWeight:"500",
    marginBottom:"2rem"
  },

  signup: {
    textAlign:"end",
  },

  formcontainer: {
    width:"1256px",
    height:"649px",
    background:"#FFFFFF",
    margin:"0 auto",
    boxShadow: "0px 3px 6px #0000001A"
  },

  formparent: {
    textAlign:"center",

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
    borderRadius:"8px"
  },

  fullbox: {
    width:"859px",
    height:"63px",
    background:"#FCFCEA",
    // color:"#D0D0D0",
    fontSize:"16px",
    paddingLeft:"2rem",
    marginBottom:"1rem",
    borderWidth:"0"
  },

  halfbox: {
    width:"415px",
    height:"63px",
    background:"#FCFCEA",
    // color:"#D0D0D0",
    fontSize:"16px",
    marginBottom:"1rem",
    borderWidth:"0",
    paddingLeft:"2rem",
  },

  halfboxtwo: {
    width:"415px",
    height:"63px",
    background:"#FCFCEA",
    // color:"#D0D0D0",
    fontSize:"16px",
    marginLeft:"2rem",
    marginBottom:"1rem",
    borderWidth:"0",
    paddingLeft:"2rem",
  },
  buttonnext: {
    width:"147px",
    height:"50px",
    background:"#268AFF",
    fontSize:"24px",
    color:"#FFFFFF",
    borderWidth:"0",
    marginTop:"2rem"
  }




}));


export default function SignUp() {
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
          <button className="signup">Sign up</button>
        </ul>
      </div>

      {/* end nav */}


      {/* start signup section */}

        <div className={classes.signup}>



            <p className={classes.details}>Enter your details</p>

            <div className={classes.formcontainer}>


            <div className={classes.outerdiv}>
                <div className={classes.innerdiv}></div>
            </div>


                <button className={classes.buttonnumber}>1/3</button>
            <form className={classes.formparent}>


                <div>
                <input type="text" placeholder="BVN" className={classes.fullbox} />
                </div>

                <div>
                    <input type="text" placeholder="First Name" className={classes.halfbox} />
                    <input type="text" placeholder="Last Name" className={classes.halfboxtwo} />
                </div>


                <div>
                    <input type="text" placeholder="Phone Number" className={classes.halfbox} />
                    <input type="text" placeholder="Email Address" className={classes.halfboxtwo} />
                </div>

                <div>
                    <input type="text" placeholder="State" className={classes.halfbox} />
                    <input type="text" placeholder="LGA" className={classes.halfboxtwo} />
                </div> 

                <div>
                    <input type="text" placeholder="Address" className={classes.fullbox} />
                </div>      

                <button className={classes.buttonnext}><Link to="/confirm" style={{color:"#FFFFFF"}}>Next</Link></button>
            </form>
            </div>

        </div>



      {/* end signup section */}

      
    </div>
  );
}
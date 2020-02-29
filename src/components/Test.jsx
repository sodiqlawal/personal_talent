import React from 'react';
import './css/Home/Home.css'
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({

  wrapper:{
    backgroundColor: "#f2f6fd",
    width: "100%",
    height:"fit-content",
    paddingBottom:"2rem"
    // position:"sticky",
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
        fontSize:"35px",
        marginLeft:"0.5rem"
      },
  },

  signup: {
    // textAlign:"end",
  },

  formcontainer: {
    width:"1256px",
    height:"fit-content",
    background:"#FFFFFF",
    margin:"0 auto",
    boxShadow: "0px 3px 6px #0000001A",

    [theme.breakpoints.down("md")]: {
        width:"100%",
        height:"fit-content"
      },
  },

  formparent: {
    // textAlign:"center",
    padding:"2rem 8rem",

    [theme.breakpoints.down("sm")]: {
       padding:"1rem"
       },

  },

  fieldset: {
    margin:"1rem"
  },

  legend: {
    fontSize:"24px",
    color:"#020101",
    marginBottom:"1rem"
  },

  checkcontainer: {
    marginBottom:"1rem"
  },

  input: {
    width:"16px",
    height:"16px"
  },

  rule: {
     background:"#B5D7FF" 
  },

  label: {
    fontize:"20px",
    color:"#9B9B9B",
    marginLeft:"5px",
  },

  nextcontainer: {
    textAlign:"center"
  },
  buttonnext: {
    width:"147px",
    height:"50px",
    background:"#268AFF",
    fontSize:"24px",
    color:"#FFFFFF",
    borderWidth:"0",
    marginTop:"2rem",

    [theme.breakpoints.down("sm")]: {
        fontSize:"20px",
        width:"150px",
        height:"40px"
       },
  }




}));


export default function Test() {
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



            <p className={classes.details}>Briefly answer these questions</p>

            <div className={classes.formcontainer}>


            <div className={classes.outerdiv}>
                <div className={classes.innerdiv}></div>
            </div>

            <form className={classes.formparent}>


                <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>The "groundup" and "trees down" theories are the only theories explaining flight in birds.</legend>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="true" name="true" value="true" className={classes.input} />
                    <label htmlFor="true" className={classes.label}>True</label>
                </div>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="false" name="false" value="false" className={classes.input} />
                    <label htmlFor="false" className={classes.label}>False</label>
                </div>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="cannot-say" name="cannot-say" value="cannot-say" className={classes.input} />
                    <label htmlFor="cannot-say" className={classes.label}>Cannot say</label>
                </div>
                <hr className={classes.rule} />
                </fieldset>


                <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>All dinosaurs had hollow bones.</legend>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="true" name="true" value="true" className={classes.input} />
                    <label htmlFor="true" className={classes.label}>True</label>
                </div>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="false" name="false" value="false" className={classes.input} />
                    <label htmlFor="false" className={classes.label}>False</label>
                </div>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="cannot-say" name="cannot-say" value="cannot-say" className={classes.input} />
                    <label htmlFor="cannot-say" className={classes.label}>Cannot say</label>
                </div>
                <hr className={classes.rule} />
                </fieldset>


                <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>There is no scientific consensus regarding how birds evolved powered flight.</legend>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="true" name="true" value="true" className={classes.input} />
                    <label htmlFor="true" className={classes.label}>True</label>
                </div>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="false" name="false" value="false" className={classes.input} />
                    <label htmlFor="false" className={classes.label}>False</label>
                </div>
                <div className={classes.checkcontainer}>
                    <input type="checkbox" id="cannot-say" name="cannot-say" value="cannot-say" className={classes.input} />
                    <label htmlFor="cannot-say" className={classes.label}>Cannot say</label>
                </div>
                </fieldset>

                <div className={classes.nextcontainer}>
                <button className={classes.buttonnext}><Link exact to="/" style={{color:"#FFFFFF"}}>Next</Link></button>
                </div>
            </form>
            </div>

        </div>



      {/* end signup section */}

      
    </div>
  );
}
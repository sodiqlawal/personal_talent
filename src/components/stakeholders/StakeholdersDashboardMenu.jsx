import React, { useState } from "react";
import "../css/Home/Home.css"
import { makeStyles, useTheme, createStyles  } from "@material-ui/core/styles";


const useStyles = makeStyles(theme =>
  createStyles({ 
    donut: {
    height: "660px",
    backgroundColor: "white",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  title: {
    flex: "1 1 100%"
  },
  heading: {
    padding: '0 20px',
    width: '100%'
  },


  container:{
    backgroundColor:"#f2f6fd",
    minHeight:"85vh",

    [theme.breakpoints.down("sm")]: {
      height:"fit-content"
    },
  },
  countcontainer: {
    display: "grid",
    gridTemplateColumns:"repeat(auto-fill, 275px)",
    gridGap:"4rem",
    paddingTop:"5rem",
    justifyContent:"center",
  },

  count: {
    padding:"1rem 3rem 1rem 1rem",
    borderRadius:"10px",
    width:"324px",
    height:"180px",
    background:"white"    
  },
  countcandidates: {
    padding:"2rem 0rem",
    borderRadius:"10px",
    width:"324px",
    height:"320px",
    // background:"white",
    background: "#FFFFFF",
    boxShadow: "0px 3px 6px #00000029"  
  },
  candidatetext: {
      fontSize:"28px",
      marginLeft:"2rem",
      marginBottom: "1rem"
  },
  belowcontent: {
      display:"flex",
      alignItems:"center",
      marginTop:"2rem",
      marginLeft:"2rem"
    //   jus
  },
  leftbottom: {
    lineHeight:"1rem",
  },

  buttoncomplete: {
      width:"",
      height:"35px",
      borderWidth:"0",
      marginLeft:"1rem",
      padding:"1px 20px",
      borderRadius:"10px",
      background:"#6fd89f"
  },


  addcounter : {
      width:"61.5%",
      marginLeft:"8rem",
      boxShadow: "0px 3px 6px #00000029",
      borderRadius:"10px", 
      background:"#FFFFFF",
      marginTop:"-7rem",

      [theme.breakpoints.down("sm")]: {
        width:"90%",
        marginTop:"2rem",
        marginLeft:"1rem"
      },

  },

  addcountertop: {
    display:"flex",
    justifyContent:"space-between",
    padding:"1rem 2rem 0rem 2rem",
    alignItems:"center"
  },

  addtext: {
    fontSize:"35px"
  },

  buttonbulk: {
    // width:"100px",
    fontSize:"16px",
    height:"35px",
    padding:"5px 20px",
    borderRadius:"5px",
    borderWidth:"0",
    background:"#0d64c9",
    color:"#FFFFFF"
  },

  addcounterbottom: {
    padding:"3rem 0rem 3rem 2rem"
  },

  inputbeneficiary: {
        width:"60%",
        height:"60px",
        paddingLeft:"1rem",
        background:"#fcfcea",
        // borderWidth:"0",
        border:"1px solid #b5d7ff",

  },

  buttonbeneficiary: {
        marginLeft:"2rem",
        width:"20%",
        height:"40px",
        background:"#b5d7ff",
        borderRadius:"5px",
        borderWidth:"0",
        color:"#FFFFFF"
  },

  rule: {
    background:"#b5d7ff",
  }
})
);

const farmerCount = [
  {name:"Total slot assigned", count: "50"},
  {name:"Total slot used", count: "1"},
  {name:"Outstanding slot", count: "49"},
//   {name:"Total empowered", count: "5,000"}
]
const StakeholdersDashboardMenu = () => {


  const classes = useStyles();
  return (
    <div className={classes.container}>


      {/* start count */}
        <div className={classes.countcontainer}>

        {farmerCount.map((res, i) => (
          <div key={i}  >
            {          i % 2 === 0 ? 
            <React.Fragment>
            <div className={classes.count} id="oddbox">
            <p style={{fontSize:"25px", color:"#9B9B9B"}}>{res.name}</p>
            <p style={{fontSize:"50px", marginTop:"-1.5rem", color:"#000000"}}>{res.count}</p>
            </div>
            </React.Fragment> : 
            <React.Fragment>
            <div className={classes.count} id="evenbox">
            <p style={{fontSize:"25px", color:"#9B9B9B"}}>{res.name}</p>
            <p style={{fontSize:"50px", marginTop:"-1.5rem", color:"#000000"}}>{res.count}</p>
            </div>
            </React.Fragment>
               
            }
          </div>
        ))}

        
        <div className={classes.countcandidates}>
            <p className={classes.candidatetext}>Recent candidates</p>
            <hr />
            <div className={classes.belowcontent}>
                <div className={classes.leftbottom}>
                <p>Opeyemi Ariyo</p>
                <p>NG.ON.AR/AKY/000497</p>
                </div>
                <button className={classes.buttoncomplete}>completed</button>
            </div>
        </div>

        </div>

       {/* end count  */}


        <div className={classes.addcounter}>
            <div className={classes.addcountertop}>
                <p className={classes.addtext}>Add candidates</p>
                <button className={classes.buttonbulk}>Bulk upload</button>
            </div>
            <hr className={classes.rule} />

            <div className={classes.addcounterbottom}>
                <input type="text" placeholder="Enter beneficiary ID" className={classes.inputbeneficiary} />
                <button className={classes.buttonbeneficiary}>Add beneficiary</button>
            </div>



        </div>


       {/* start chart */}
        
       {/* end chart */}


    </div>
  );
};

export default StakeholdersDashboardMenu;

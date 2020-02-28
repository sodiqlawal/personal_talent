import React, { useState } from "react";
import "./css/Home/Home.css"
import { makeStyles, useTheme, createStyles  } from "@material-ui/core/styles";
import BarChart from './BarChart'
import PieChart from './PieChart'

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
  chartcontainer: {
    display:"flex",
    marginTop:"2rem",
    marginLeft:"8.5rem",

    [theme.breakpoints.down("sm")]: {
      flexDirection:"column",
      marginLeft:"0rem"
    },
  },
  chartgrid: {
    // height:"fit-content",
    marginTop:"2rem",

    [theme.breakpoints.down("sm")]: {
      height:"auto",
      marginTop:"1rem"
    },

  },

  chartgridbottom: {
    marginLeft:"2rem",

    [theme.breakpoints.down("sm")]: {
      // gridTemplateColumns:"repeat(auto-fill, 350px)",
      marginLeft:"0rem"
    },

  },
  // bottomchart:{
  //   width: "400px",
  // },
  gridone: {
    boxShadow: "0px 2px 8px #00000034",
    padding:"2rem 3rem",
    width:"880px",
    height:"485px",
    background:"white",

    [theme.breakpoints.down("sm")]: {
      width:"95%",
      height:"326px"
    }
  },
  gridtwo: {
    boxShadow: "0px 2px 8px #00000034",
    padding:"2rem 3rem",
    width:"880px",
    height:"485px",
    marginTop:"3rem",

    [theme.breakpoints.down("sm")]: {
      width:"95%",
      height:"326px"

    }
  },
  gridthree: {
    boxShadow: "0px 2px 8px #00000034",
    padding:"1rem 2rem",
    width:"375px",
    height:"320px",
    background:"white",

    [theme.breakpoints.down("sm")]: {
      width:"95%"
    }

  },
  gridfour: {
    boxShadow: "0px 2px 8px #00000034",
    padding:"1rem 2rem",
    width:"375px",
    height:"320px",

    [theme.breakpoints.down("sm")]: {
      width:"95%"
    }
  },
  gridfive: {
    boxShadow: "0px 2px 8px #00000034",
    padding:"1rem 2rem",
    width:"375px",
    height:"314px",

    [theme.breakpoints.down("sm")]: {
      width:"95%"
    }
  },

  container:{
    backgroundColor:"#f2f6fd",
    // minHeight:"1500px",
    minHeight:"100vh",

    [theme.breakpoints.down("sm")]: {
      height:"fit-content"
    },
  },
  countcontainer: {
    display: "grid",
    gridTemplateColumns:"repeat(auto-fill, 275px)",
    // height:"150px",
    gridGap:"4rem",
    paddingTop:"5rem",
    justifyContent:"center",
  },

  count: {
    // lineHeight:"0.3rem",
    // backgroundColor:"#a3cd60",
    padding:"1rem 3rem 1rem 1rem",
    borderRadius:"10px",
    width:"324px",
    height:"180px",
    background:"white"    
  }
})
// })
);

const farmerCount = [
  {name:"Total farmers", count: "5,000"},
  {name:"Total farmers", count: "5,000"},
  {name:"Total farmers", count: "5,000"},
  {name:"Total farmers", count: "5,000"}
]
const DashboardMenu = () => {
  const responseData = [
    {
      id: "Recovered",
      label: "Recovered",
      value: 370,
      color: "#ffc260"
    },
    {
      id: "Unrecovered",
      label: "Unrecovered",
      value: 194,
      color: "#de1325"
    },
  ];

  const classes = useStyles();
  const [data, setData] = useState(responseData);
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
        </div>

       {/* end count  */}


       {/* start chart */}
        <div className={classes.chartcontainer}>

       <div className={classes.chartgrid}>
         <div className={classes.gridone}>
           <p style={{textAlign:"end", color:"#4A4A4A", fontSize:"26px",}}>Top performing states</p>
            <BarChart />
        </div>
        {/* <div className={classes.gridtwo}>
        <p style={{textAlign:"end", color:"#4A4A4A", fontSize:"26px",}}>Top performing states</p>
            <BarChart />
        </div> */}
        </div>


        <div className={classes.chartgridbottom}>
        <div className={classes.gridthree} style={{marginTop:"2rem"}} >
        <p style={{textAlign:"start", color:"#4A4A4A", fontSize:"24px"}}>Gender distribution</p>
            <PieChart />
        </div>
        {/* <div className={classes.gridfour} style={{marginTop:"2rem"}}>
        <p style={{textAlign:"end", left:"30%", color:"#4A4A4A", fontSize:"24px"}}>Top performing LGA's</p>
            <BarChart />
        </div>     
        <div className={classes.gridfive} style={{marginTop:"2rem"}}>
        <p style={{textAlign:"end", marginRight:"0", color:"#4A4A4A", fontSize:"24px"}}>Top performing LGA's</p>
            <BarChart />
        </div> */}
        </div>

        </div>
       {/* end chart */}


    </div>
  );
};

export default DashboardMenu;

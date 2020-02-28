import React from 'react';
import './css/Home/Home.css'
// import logo from "./assets/mango white.svg";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }} align="center">
      {'@Copyright '}
      <Link to="/" color="inherit" className="mr-1">
        {`Anchorborrower`}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  img: {
    position: 'absolute',
    left: '45%',
    top: '5%',
    height: '50px',
    width: "150px"
   },
  form: {
    width: '100%', // Fix IE 11 issue.
    backgroundColor: "white",
    padding: "80px",
    maxWidth: '645px',
    borderRadius: "8px",
    height:"588px",
    marginTop: "30px",

    [theme.breakpoints.down("sm")]: {
     width:"90%",
    //  margin:"auto"
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#268AFF",
    padding: '.7rem',
    borderRadius: '6px',
    textTransform: 'capitalize',
    color: '#ffffff',
    width:"508px",
    height:"86px",
    fontSize:"23px",

    [theme.breakpoints.down("sm")]: {
      width:"100%",
      height:"70px",
      padding:"0"
    },
  },
  container: {
    minHeight: "78vh",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  inputcontainer:{
 
  },
  textfield:{
    backgroundColor:'#f5f6f8',
    fontWeight:'bolder',
    // width:"508px",
    // height:"86px",
    borderRadius:"6px",

    [theme.breakpoints.down("sm")]: {
      width:"100%",
      height:"70px"
    },

  },
  input:{
    width:"508px",
    height:"86px",
    // border: '1px solid #CBB8FF',
    background:"#ffffff",
    [theme.breakpoints.down("sm")]: {
      width:"100%",
      height:"70px",
      // margin:"auto"
    },
  },
  wrapper:{
    backgroundColor: "#f2f6fd",
    // backgroundImage: "url('./assets/backgroundlogin.png')",   
    width: "100%"
  },
  grid: {
    // minHeight: "100vh"
    display:"flex",
    justifyContent:"space-between",

    [theme.breakpoints.down("sm")]: {
      // justifyContent:"space-evenly",
    },
  },
  link: {
    color:"#4A4A4A",
    fontSize:"17px",
    marginLeft:"10px"
  }
}));


export default function SignIn() {
  const classes = useStyles();
  const input = React.useRef()
  


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
          <li className="login">login</li>
          <button className="signup">Sign up</button>
        </ul>
      </div>

      {/* end nav */}
      <Container className={classes.container} component="main" id="signin" maxWidth="xl">
      {/* <img src={logo} alt="" className={classes.img} /> */}
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Typography component="p" style={{fontWeight:"bolder", fontSize:'34px', color:'#4A4A4A', textAlign:"left"}} >
              Login
        </Typography>
        <div className={classes.inputcontainer}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value=""
              ref={input}
              className={classes.textfield}
              autoFocus
              InputProps={{
                className: classes.input,
            }}
            />
            <TextField
              variant="outlined"
              className={classes.textfield}
              margin="normal"
              rows="4"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value=""
              ref={input}
              autoFocus
              autoComplete="current-password"

              InputProps={{
                className: classes.input,
            }}
            />  
           </div> 
            <NavLink to="/dashboard" style={{textDecoration:'none', color:'white'}} >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Login
            </Button>
            </NavLink>
            <div className={classes.grid}>
            <div>
                <NavLink to="/" variant="body2" className={classes.link}>
                  Go back
              </NavLink>
              </div>
              <div>
                <Link href="#" variant="body2" className={classes.link}>
                  Forgot password?
              </Link>
              </div>
            </div>
          </form>
        </div>
        <Box mt={8}>
          {/* <Copyright /> */}
        </Box>
      </Container>
    </div>
  );
}
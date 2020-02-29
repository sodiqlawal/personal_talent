import React from "react";
import { Grid } from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    leftAccessory: {
        backgroundColor: theme.palette.primary.main,
        width: '20px',
        height: '10px',
        borderRadius: '10px'
    },
    line: {
        flexGrow: 1
    }
}));

const Underline = () => {
  const classes = useStyles();

  return (
    <Grid alignItems= 'center' container>
      <div className={classes.leftAccessory}></div>
      <hr className={classes.line}/>
    </Grid>
  );
};

export default Underline;

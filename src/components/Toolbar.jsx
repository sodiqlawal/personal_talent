import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ViewAllButton from "./ViewAllButton";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Underline from './Underline';

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 0,
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%",
    fontWeight: "700"
  }
}));

export default function EnhancedTableToolbar(props) {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <div style={{width: '100%'}}>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0
        })}
      >
        <Typography className={classes.title} variant="h6" id="tableTitle">
          {props.heading}
        </Typography>
        {props.showView? <ViewAllButton />:null}
      </Toolbar>
      <Underline />
    </div>
  );
}

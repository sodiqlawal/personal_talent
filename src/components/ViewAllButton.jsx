import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  button:{
      borderRadius: '20px',
      color: theme.palette.primary.main,
      backgroundColor: '#eef2f5',
      padding: '10px',
      width: '150px',
      textAlign: 'center',
      fontWeight: '700',
      cursor: 'pointer',
  }
}));

export default function ViewAllButton() {
  const classes = useStyles();

  return (
    <div className={classes.button}>
        View All
    </div>
  );
}
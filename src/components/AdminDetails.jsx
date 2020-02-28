import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   details:{
       width: '100%',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       fontWeight: '700'
   },
   role:{
    //    backgroundColor: theme.palette.primary.main,
       width: '100%',
       color: '#4a4a4a',
       textAlign: 'center',
       borderRadius: '20px',
       padding: '1px 10px 10px 10px',
       marginTop: '10px',
       fontSize:"22px"
   },
   imgSrc: {
       width: '100px',
       height: '100px',
       borderRadius: '8px',
       marginBottom: '1px'
   }
}));


const AdminDetails = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.details}>
            <img className={classes.imgSrc} src={props.details.profileImg} alt="" />
            {/* <div style={{fontSize: '20px'}}>{props.details.fullName}</div>
            <div>{props.details.location}</div> */}
            <div className={classes.role}>Admin</div>
        </div>
    );
}

export default AdminDetails;

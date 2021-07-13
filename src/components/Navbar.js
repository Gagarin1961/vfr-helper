import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {AppBar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        marginRight: '25px',
        fontSize: 24,
        fontWeight: 600,
        cursor: "pointer"
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography color="textPrimary" className={classes.title} onClick={() => history.push('/')}>VFR Helper</Typography>
                <Button color="textPrimary" onClick={() => history.push('/navigation')}>Navigation</Button>
                <Button color="textPrimary" onClick={() => history.push('/calculator')}>Calculatrice</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
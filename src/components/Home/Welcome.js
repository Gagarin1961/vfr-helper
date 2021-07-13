import React from "react";
import {Grid, Paper, Typography, Zoom} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(4),
        padding: '30px',
        color: theme.palette.text.secondary,
    }
}));

const Welcome = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid item xs={12} md={3}>
                <Zoom in>
                    <Paper elevation={4} className={classes.paper}>
                        <Typography variant="h3">
                            Navigation!
                        </Typography>
                    </Paper>
                </Zoom>
            </Grid>
            <Grid item xs={12} md={4}>
                <Zoom in style={{ transitionDelay: '500ms' }}>
                    <Paper elevation={4} className={classes.paper}>
                        <Typography variant="h3">
                            Bienvenue!
                        </Typography>
                    </Paper>
                </Zoom>
            </Grid>
            <Grid item xs={12} md={3}>
                <Zoom in style={{ transitionDelay: '1s' }}>
                    <Paper elevation={4} className={classes.paper}>
                        <Typography variant="h3">
                            Calculatrice!
                        </Typography>
                    </Paper>
                </Zoom>
            </Grid>
        </Grid>
    )
}

export default Welcome;
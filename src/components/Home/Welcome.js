import React from "react";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, Fade} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import plane from '../../images/bg.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
    },
    paper: {
        maxWidth: 600,
        margin: theme.spacing(4),
        color: theme.palette.text.secondary,
    },
    rightButton: {
        marginLeft: "auto",
    },
}));

const Welcome = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center" direction="column" className={classes.container}>
            <Grid item container justify="space-evenly">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Fade in>
                        <Card elevation={4} className={classes.paper}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography paragraph variant="h5" align="center">
                                        Bienvenue sur VFR Helper!
                                    </Typography>
                                    <Typography paragraph variant="h6" align="center">
                                        Attention le site est encore en cours de développement.
                                    </Typography>
                                    <Typography paragraph variant="body1" component="p" align="center">
                                        VFR Helper est une application ayant pour but d'accompagner les pilotes VFR
                                        dans la préparation de leur vol. L'outil regroupe notamment les principales
                                        informations utiles avant, pendant et immédiatement après le vol, en VFR de jour
                                        en France.
                                    </Typography>
                                    <Typography variant="body2" color="error" component="p" align="center">
                                        Attention, VFR Helper n'a pas été conçu dans le but de remplacer
                                        la préparation du vol mais afin de la compléter et centraliser dans un seul endroit
                                        toutes les informations utiles pour votre vol.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Fade>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Welcome;
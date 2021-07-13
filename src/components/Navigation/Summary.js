import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import {Divider, Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '15px 10px',
    },
    step: {
        padding: '10px 10px',
    },
    selectedStep: {
        padding: '10px 10px',
        backgroundColor: '#c4cbd8',
    }
}));

const Summary = ({ steps, currentStep }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h6" align="center">Récapitulatif des étapes</Typography>
            </div>
            <Divider variant="middle"/>
            {steps.map((step, index) => {
                return (
                    <div className={index === currentStep ? classes.selectedStep : classes.step}>
                        <Grid container direction="column">
                            <Grid item container xs={12}>
                                <Grid item xs={6}>
                                    <Typography noWrap>
                                        {"Etape " + (index + 1) + " :"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} align={"center"}>
                                    <Typography noWrap>
                                        {step.departure + " -> " + step.arrival}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={4} align="center">
                                    <Typography noWrap>
                                        {step.distance + "NM"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} align="center">
                                    <Typography noWrap>
                                        {"TSV : " + step.timeWithoutWind + " Minutes"}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                );
            })}
        </div>
    )
}

export default Summary;
import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionDetails, AccordionSummary, Divider, Grid, Typography} from "@material-ui/core";
import {ChevronLeft} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '15px 10px',
    },
    step: {
        padding: '10px 10px',
    },
    selectedStep: {
        padding: '10px 10px',
        backgroundColor: '#597f97',
    },
    accordionDetails: {
        padding: '10px 0',
    }
}));

const Summary = ({ steps, currentStep, setCurrentStep }) => {
    const classes = useStyles();

    const handleAccordionClick = (index) => {
        setCurrentStep(index === currentStep ? steps.length : index);
    }

    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h6" align="center">Récapitulatif des étapes</Typography>
            </div>
            <Divider variant="middle"/>
            {steps.map((step, index) => {
                return (
                    <div className={index === currentStep ? classes.selectedStep : classes.step}>
                        <Accordion expanded={index === currentStep} onChange={() => handleAccordionClick(index)}>
                            <AccordionSummary expandIcon={<ChevronLeft />}>
                                <Grid container>
                                    <Grid item xs={5}>
                                        <Typography noWrap>
                                            {"Etape " + (index + 1) + " :"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} align="right">
                                        <Typography noWrap>
                                            {step.departure + " -> " + step.arrival}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} direction="column">
                                    <Grid container item spacing={1} alignItems="center">
                                        <Grid item xs={4}>
                                            <Typography>
                                                {step.distance + "NM"}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} align="center">
                                            <Typography>
                                                {"TSV : " + step.timeWithoutWind + " Minutes"}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} align="right">
                                            <Typography>
                                                {"TAV : " + step.timeWithWind + " Minutes"}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={1} alignItems="center">
                                        <Grid item xs={4}>
                                            <Typography>
                                                {"Route: " + step.route + "°"}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} align="center">
                                            <Typography>
                                                {"Cap : " + step.heading + "°"}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} align="right">
                                            <Typography>
                                                {"Altitude : " + step.altitude}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                );
            })}
        </div>
    )
}

export default Summary;
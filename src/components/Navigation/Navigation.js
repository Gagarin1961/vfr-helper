import React, {useEffect, useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from "@material-ui/core";
import Summary from "./Summary";
import NavStep from "./NavStep";

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
    },
    paper: {
        opacity: '90%',
        color: theme.palette.text.secondary,
    }
}));

const Navigation = () => {
    const classes = useStyles();

    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        console.log(currentStep, steps.length);
    }, [currentStep, steps]);

    return (
        <Grid container justify="center" direction="column" className={classes.container}>
            <Grid item container justify="space-evenly">
                <Grid item container xs={3} alignContent="center">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Summary steps={steps}/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container xs={7} alignContent="center">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <NavStep
                                steps={steps}
                                setSteps={setSteps}
                                currentStep={currentStep}
                                setCurrentStep={setCurrentStep}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Navigation;
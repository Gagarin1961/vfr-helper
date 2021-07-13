import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import {Divider, Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '5px 10px',
    },
    step: {
        padding: '5px 10px',
    }
}));

const Summary = ({ steps }) => {
    const classes = useStyles();

    /*const [steps, setSteps] = useState([
        {
            src: "LFPN",
            dst: "RBT",
            distance: "15",
            time: "8",
            altitude: "1500"
        },
        {
            src: "RBT",
            dst: "Ablis",
            distance: "23",
            time: "12",
            altitude: "2500"
        },
        {
            src: "Ablis",
            dst: "Chartres",
            distance: "9",
            time: "5",
            altitude: "2000"
        }]);*/

    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h6" align="center">Récapitulatif des étapes</Typography>
            </div>
            <Divider variant="middle"/>
            {steps.map((step, index) => {
                return (
                    <div className={classes.step}>
                        <Grid container direction="column">
                            <Grid item container xs={12}>
                                <Grid item xs={6}>
                                    <Typography noWrap>
                                        {"Etape " + (index + 1) + " :"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} align={"right"}>
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
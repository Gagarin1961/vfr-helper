import React, {useEffect, useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import {Divider, Grid, Typography, TextField, Button} from "@material-ui/core";
import {baseFactor, timeWithoutWind, timeWithWind, heading} from "../Calculator/Operations";
import {ArrowBack, ArrowForward} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '15px 10px',
    },
    step: {
        padding: '5px 10px',
    },
    grid: {
        padding: '15px 10px',
    }
}));

const NavStep = ({ steps, setSteps, currentStep, setCurrentStep }) => {
    const classes = useStyles();

    const [speed, setSpeed] = useState("");
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [distance, setDistance] = useState("");
    const [altitude, setAltitude] = useState("");
    const [route, setRoute] = useState("");
    const [windDirection, setWindDirection] = useState("")
    const [windSpeed, setWindSpeed] = useState("");

    const [speedError, setSpeedError] = useState(false);
    const [departureError, setDepartureError] = useState(false);
    const [arrivalError, setArrivalError] = useState(false);
    const [distanceError, setDistanceError] = useState(false);
    const [altitudeError, setAltitudeError] = useState(false);
    const [routeError, setRouteError] = useState(false);
    const [windError, setWindError] = useState(false);

    useEffect(() => {
        if (speed === "")
            return;
        checkSpeedValid();
    }, [speed]);

    const checkSpeedValid = () => {
        const parsed = Number(speed);
        if (isNaN(parsed) || parsed < 1) {
            setSpeedError(true);
            return false;
        }
        setSpeedError(false);
        return true;
    }

    const handleSpeedChange = (event) => {
        setSpeed(event.target.value);
    }

    const checkDepartureValid = () => {
        if (departure === "") {
            setDepartureError(true);
            return false;
        }
        setDepartureError(false);
        return true;
    }

    const handleDepartureChange = (event) => {
        setDeparture(event.target.value);
    }

    const checkArrivalValid = () => {
        if (arrival === "") {
            setArrivalError(true);
            return false;
        }
        setArrivalError(false);
        return true;
    }

    const handleArrivalChange = (event) => {
        setArrival(event.target.value);
    }

    useEffect(() => {
        if (distance === "")
            return;
        checkDistanceValid();
    }, [distance]);

    const checkDistanceValid = () => {
        const parsed = Number(distance);
        if (isNaN(parsed) || parsed < 1 || parsed >= 10000) {
            setDistanceError(true);
            return false;
        }
        setDistanceError(false);
        return true;
    }

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    }

    const checkAltitudeValid = () => {
        if (altitude === "") {
            setAltitudeError(true);
            return false;
        }
        setAltitudeError(false);
        return true;
    }

    const handleAltitudeChange = (event) => {
        setAltitude(event.target.value);
    }

    useEffect(() => {
        if (route === "")
            return;
        checkRouteValid();
    }, [route]);

    const checkRouteValid = () => {
        const parsed = Number(route);
        if (isNaN(parsed) || parsed < 0 || parsed > 360) {
            setRouteError(true);
            return false;
        }
        setRouteError(false);
        return true;
    }

    const handleRouteChange = (event) => {
        setRoute(event.target.value);
    }

    useEffect(() => {
        if (windSpeed === "" && windDirection === "")
            return;
        checkWindValid();
    }, [windSpeed, windDirection]);

    const checkWindValid = () => {
        const parsedDirection = Number(windDirection);
        const parsedSpeed = Number(windSpeed);
        if (isNaN(parsedDirection) || isNaN(parsedSpeed) || parsedDirection < 0 || parsedDirection > 360 || parsedSpeed < 0) {
            setWindError(true);
            return false;
        }
        setWindError(false);
        return true;
    }

    const handleWindChange = (event) => {
        const slashIndex = event.target.value.indexOf('/');
        if (slashIndex === -1 || slashIndex < 1 || slashIndex > 3)
            return;
        const split = event.target.value.split("/");
        setWindDirection(split[0]);
        setWindSpeed(split[1]);
    }

    const checkEntries = () => {
        return checkSpeedValid() && checkDepartureValid() && checkArrivalValid() && checkDistanceValid()
            && checkAltitudeValid() && checkRouteValid() && checkWindValid();
    }

    const handleNextClick = () => {
        if (!checkEntries())
            return;
        let newSteps = steps;
        const newEntry = {
            speed: speed,
            departure: departure,
            arrival: arrival,
            distance: distance,
            altitude: altitude,
            route: route,
            windDirection: windDirection,
            windSpeed: windSpeed,
            timeWithoutWind: timeWithoutWind(speed, distance, 1),
            timeWithWind: timeWithWind(speed, distance, 1),
        };
        if (steps.length <= currentStep + 1) {
            setDeparture("");
            setArrival("");
            setDistance("");
            setAltitude("");
            setRoute("");
        }
        else {
            const { speed, departure, arrival, distance, altitude, route, windSpeed, windDirection } = steps[currentStep + 1];
            setSpeed(speed)
            setDeparture(departure);
            setArrival(arrival);
            setDistance(distance);
            setAltitude(altitude);
            setRoute(route);
            setWindDirection(windDirection);
            setWindSpeed(windSpeed);
        }
        if (steps.length > currentStep) {
            newSteps[currentStep] = newEntry;
            setSteps(newSteps);
        }
        else {
            newSteps = [ ...newSteps, newEntry ];
            setSteps(newSteps);
        }
        setCurrentStep(currentStep + 1);
    }

    const handlePreviousClick = () => {
        if (currentStep === 0)
            return;
        setSpeedError(false);
        setDepartureError(false);
        setArrivalError(false);
        setDistanceError(false);
        setAltitudeError(false);
        setRouteError(false);
        setWindError(false);
        const { speed, departure, arrival, distance, altitude, route, windSpeed, windDirection } = steps[currentStep - 1];
        setSpeed(speed)
        setDeparture(departure);
        setArrival(arrival);
        setDistance(distance);
        setAltitude(altitude);
        setRoute(route);
        setWindDirection(windDirection);
        setWindSpeed(windSpeed);
        setCurrentStep(currentStep - 1);
    }

    const handleFinishClick = () => {
        if (!checkEntries())
            return;
    }

    const checkDisplayBaseFactor = () => {
        return !speedError && speed !== "";
    }

    const checkDisplayTimeWithoutWind = () => {
        return !speedError && speed !== "" && !distanceError && distance !== "";
    }

    const checkDisplayTimeWithWind = () => {
        return !speedError && speed !== "" && !distanceError && distance !== ""
            && !routeError && route !== "" && !windError && windSpeed !== "" && windDirection !== "";
    }

    const checkDisplayHeading = () => {
        return !speedError && speed !== "" && !routeError && route !== ""
            && !windError && windSpeed !== "" && windDirection !== "";
    }

    return (
        <div>
            <Grid container className={classes.header}>
                <Grid item xs={4} align="left">
                    <Button
                        color="primary"
                        variant="outlined"
                        disabled={currentStep === 0}
                        startIcon={<ArrowBack />}
                        onClick={handlePreviousClick}
                    >
                        Précédent
                    </Button>
                </Grid>
                <Grid item xs={4} align="center">
                    <Typography
                        variant="h6"
                        align="center"
                    >
                        {"Configuration d'étape (" + (currentStep + 1) + "/" + (steps.length + (currentStep === steps.length ? 1 : 0)) + ")"}
                    </Typography>
                </Grid>
                <Grid item xs={4} align="right">
                    <Button
                        color="primary"
                        variant="outlined"
                        endIcon={<ArrowForward />}
                        onClick={handleNextClick}
                    >
                        Suivant
                    </Button>
                </Grid>
            </Grid>
            <Divider variant="middle"/>
            <div className={classes.step}>
                <Grid container direction="column">
                    <Grid item container spacing={4} justify="center" alignItems="center" className={classes.grid}>
                        <Grid item xs={4} align="center">
                            <TextField
                                id="standard-basic"
                                label="Vitesse propre (kt)"
                                variant="outlined"
                                size="small"
                                error={speedError}
                                onChange={handleSpeedChange}
                            />
                        </Grid>
                        <Grid item xs={4} align="center">
                            <TextField
                                id="standard-basic"
                                label="Vent (direction/force)"
                                variant="outlined"
                                size="small"
                                error={windError}
                                onChange={handleWindChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={4} justify="center" alignItems="center" className={classes.grid}>
                        <Grid item xs={4} align="center">
                            <TextField
                                id="standard-basic"
                                label="Départ"
                                variant="outlined"
                                size="small"
                                value={departure}
                                error={departureError}
                                onChange={handleDepartureChange}
                            />
                        </Grid>
                        <Grid item xs={4} align="center">
                            <TextField
                                id="standard-basic"
                                label="Arrivée"
                                variant="outlined"
                                size="small"
                                value={arrival}
                                error={arrivalError}
                                onChange={handleArrivalChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={4} justify="center" alignItems="center" className={classes.grid}>
                        <Grid item xs={4} align="center">
                            <TextField
                                id="standard-basic"
                                label="Distance (NM)"
                                variant="outlined"
                                size="small"
                                value={distance}
                                error={distanceError}
                                onChange={handleDistanceChange}
                            />
                        </Grid>
                        <Grid item xs={4} align="center">
                            <TextField
                                id="standard-basic"
                                label="Route (degrés)"
                                variant="outlined"
                                size="small"
                                value={route}
                                error={routeError}
                                onChange={handleRouteChange}
                            />
                        </Grid>
                        <Grid item xs={4} align="center">
                            <TextField
                                id="standard-basic"
                                label="Altitude (ft)"
                                variant="outlined"
                                size="small"
                                value={altitude}
                                error={altitudeError}
                                onChange={handleAltitudeChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={4} justify="center" alignItems="center" className={classes.grid}>
                        <Grid item xs={2} align="center">
                            <Typography noWrap>
                                {checkDisplayBaseFactor() ? "Fb: " + baseFactor(speed, 3) : "Fb: 0"}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} align="center">
                            <Typography noWrap>
                                {"Cap: " + (checkDisplayHeading() ? heading(windSpeed, speed, route, windDirection) : "?") + "°"}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Typography noWrap>
                                {"Temps sans vent: " + (checkDisplayTimeWithoutWind() ? timeWithoutWind(speed, distance,1) : "?") + " minutes"}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Typography noWrap>
                                {"Temps avec vent: " + (checkDisplayTimeWithWind() ? timeWithWind(speed, distance, route, windSpeed, windDirection, 1) : "?") + " minutes"}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center" className={classes.grid}>
                        <Grid item xs={4} align="center">
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={handleFinishClick}
                            >
                                Terminé
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default NavStep;
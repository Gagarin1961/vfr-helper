const toRadians = (angle) => {
    return angle * (Math.PI / 180);
}

const getAlphaAngle = (route, windDirection) => {
    let angle = Math.abs(route - windDirection);
    if (angle >= 180) {
        angle = 360 - angle;
    }
    else if (angle <= -180) {
        angle = 360 + angle
    }
    console.log("alpha", angle);
    return angle;
}

const getEffectiveWind = (route, windSpeed, windDirection) => {
    let angle = getAlphaAngle(route, windDirection);
    angle = toRadians(angle);
    console.log("radians", angle);
    console.log("cos", Math.cos(angle));
    console.log("Ve", Math.floor(windSpeed * -Math.cos(angle)));
    return Math.floor(windSpeed * -Math.cos(angle));
}

const getMaxDrift = (windSpeed, baseFactor) => {
    return windSpeed * baseFactor;
}

const getDrift = (windSpeed, baseFactor, route, windDirection) => {
    return Math.floor(getMaxDrift(windSpeed, baseFactor) * Math.sin(toRadians(getAlphaAngle(route, windDirection))));
}

export const baseFactor = (speed, trailingZeros) => {
    return parseFloat((60 / speed).toFixed(trailingZeros))
}

export const timeWithoutWind = (speed, distance, trailingZeros) => {
    return parseFloat((60 / speed * distance).toFixed(trailingZeros))
}

export const timeWithWind = (speed, distance, route, windSpeed, windDirection, trailingZeros) => {
    console.log("wind direction", windDirection);
    console.log("wind speed", windSpeed);
    speed = parseInt(speed);
    speed += getEffectiveWind(route, windSpeed, windDirection);
    console.log("speed", speed);
    return parseFloat((60 / speed * distance).toFixed(trailingZeros))
}

export const heading = (windSpeed, speed, route, windDirection) => {
    const bF = baseFactor(speed, 1);
    route = parseInt(route);
    const drift = getDrift(windSpeed, bF, route, windDirection);
    return route + drift;
}
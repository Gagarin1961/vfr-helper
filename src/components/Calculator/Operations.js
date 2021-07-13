const toRadians = (angle) => {
    return angle * (Math.PI / 180);
}

const getAlphaAngle = (route, windDirection) => {
    return windDirection - route;
}

const getEffectiveWind = (route, windSpeed, windDirection) => {
    let angle = getAlphaAngle(route, windDirection);
    angle = toRadians(angle);
    return Math.round(windSpeed * -Math.cos(angle));
}

const getMaxDrift = (windSpeed, baseFactor) => {
    return windSpeed * baseFactor;
}

const getDrift = (windSpeed, baseFactor, route, windDirection) => {
    return Math.round(getMaxDrift(windSpeed, baseFactor) * Math.sin(toRadians(getAlphaAngle(route, windDirection))));
}

export const baseFactor = (speed, trailingZeros) => {
    return parseFloat((60 / speed).toFixed(trailingZeros))
}

export const timeWithoutWind = (speed, distance, trailingZeros) => {
    return parseFloat((60 / speed * distance).toFixed(trailingZeros))
}

export const timeWithWind = (speed, distance, route, windSpeed, windDirection, trailingZeros) => {
    speed = parseInt(speed);
    speed += getEffectiveWind(route, windSpeed, windDirection);
    return parseFloat((60 / speed * distance).toFixed(trailingZeros))
}

export const heading = (windSpeed, speed, route, windDirection) => {
    const bF = baseFactor(speed, 1);
    route = parseInt(route);
    const drift = getDrift(windSpeed, bF, route, windDirection);
    return route + drift;
}
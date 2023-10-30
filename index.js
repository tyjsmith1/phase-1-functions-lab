const headquarters = 42;
const pickup1 = 43;
const pickup2 = 50;
const pickup3 = 34;

function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - headquarters);
}
distanceFromHqInBlocks(pickup1);
distanceFromHqInBlocks(pickup2);
distanceFromHqInBlocks(pickup3);

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

distanceFromHqInFeet(pickup1);
distanceFromHqInFeet(pickup2);
distanceFromHqInFeet(pickup3);

const destination1 = 48;
const destination2 = 60;
const destination3 = 28;

function distanceTravelledInFeet(pickup, destination) {
    return Math.abs(pickup-destination)*264;
}

distanceTravelledInFeet(pickup1, destination1);
distanceTravelledInFeet(pickup2, destination2);
distanceTravelledInFeet(pickup3, destination3);

function calculatesFarePrice(pickup, destination) {
    let distance = distanceTravelledInFeet(pickup, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

calculatesFarePrice(pickup1, destination1);
calculatesFarePrice(pickup2, destination2);
calculatesFarePrice(pickup3, destination3);
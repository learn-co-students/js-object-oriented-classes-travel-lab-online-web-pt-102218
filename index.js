class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = startDate
    };

    yearsExperienceFromBeginningOf(endDate) {
        const startDate = new Date(this["startDate"]).getFullYear()
        const yearsOfExperience = endDate - startDate;

        return yearsOfExperience;
    };
}


class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    };

    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
        'Park', 'Madison Avenue', '5th Avenue']
        let horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
        let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
        return (horizontalDistance + verticalDistance)

    };

    estimatedTime(rushHour) {
        if (rushHour === true) {
            return Math.max((this.blocksTravelled()/2))
        }
        else {
            return (this.blocksTravelled()/3)
        };

    }
};
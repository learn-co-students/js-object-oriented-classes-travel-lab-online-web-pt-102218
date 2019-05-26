class Driver{
    constructor(name, day){
        this.name = name
        this.day = day 
    }

    startDate(){
        return new Date(this.day)
    }

    yearsExperienceFromBeginningOf(year){
        return year - this.startDate().getFullYear()
    }
}

class Route{
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled(){
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
        ];

        return Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical) + Math.abs(eastWest.findIndex(location => location == this.endingLocation.horizontal) - eastWest.findIndex(location => location == this.beginningLocation.horizontal))
    }

    estimatedTime(peakHour){
        return peakHour ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3 
    }
}

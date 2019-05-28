class Driver {
  constructor(name, dateString) {
    this.name = name
    let dateArray = dateString.split(" ")
    this.startDate = new Date(parseInt(dateArray[2]), 0)
  }

  yearsExperienceFromBeginningOf(year) {
    let date = new Date(year, 0)
    return (date.getFullYear() - this.startDate.getFullYear())
  }

}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    let horizontalTraveled = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    let verticalTraveled = Math.abs(parseInt(this.beginningLocation.vertical)-parseInt(this.endingLocation.vertical))
    return horizontalTraveled + verticalTraveled
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }


}

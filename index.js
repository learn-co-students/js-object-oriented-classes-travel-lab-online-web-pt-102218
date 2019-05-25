let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}


class Route {

  constructor(startLocation, endLocation) {
    this.startLocation = startLocation;
    this.endLocation = endLocation;
  }



  blocksTravelled() {
    let verticalBlocksTravelled = this.endLocation.vertical - this.startLocation.vertical
    let horizontalBlocksTravelled = eastWest.indexOf(this.endLocation.horizontal) - eastWest.indexOf(this.startLocation.horizontal)
    return (Math.abs(horizontalBlocksTravelled) + Math.abs(verticalBlocksTravelled))
  }

  estimatedTime(peak) {
    if(peak) {
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }
  }


}
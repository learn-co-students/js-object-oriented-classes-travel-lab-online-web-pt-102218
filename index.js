class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
  }

  startDateDate() {
    return new Date(this.startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    console.log(this.prototype)
    return (new Date(year).getFullYear())- this.startDateDate().getFullYear();
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    this.beginningStreetNo = parseInt(beginningLocation.vertical);
    this.endingStreetNo = parseInt(endingLocation.vertical);
    this.beginningAve = beginningLocation.horizontal;
    this.endingAve = endingLocation.horizontal;
  }

  blocksTravelled() {
    // == north/south diff + east/west diff
    let diffNS = Math.abs(this.endingStreetNo - this.beginningStreetNo);
    console.log(diffNS, this.endingStreetNo, this.beginningStreetNo)
    let diffEW = diffEastWest(this.beginningAve, this.endingAve)
    return diffNS + diffEW
  }

  estimatedTime(offPeak = false) {
    if (offPeak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}

let d = new Driver('a', 'Jan 1, 2000')
d.prototype
let o = 0;
const eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

function diffEastWest(beginningStreet, endingStreet) {
  let bIndex;
  let eIndex;
  eastWest.forEach(function(ave, i) {
    if (beginningStreet === ave) {
      bIndex = i;
    }
    if (endingStreet === ave) {
      eIndex = i;
    }
  });
  if (bIndex === undefined || eIndex === undefined) {
    console.log("An avenue did not get assigned")
    return false
  } else {
  return Math.abs(bIndex - eIndex)
  }
}
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
    constructor(name,startDate){
        this.name = name
        this.startDate=new Date(startDate)
    }
    yearsExperienceFromBeginningOf(year){

        return new Date(year,1,1).getFullYear()-this.startDate.getFullYear()
    }
}


class Route {
    constructor(start,end){
        this.start = start
        this.end = end
    }
    blocksTravelled(){
        let horz = Math.abs(eastWest.indexOf(this.start.horizontal)-eastWest.indexOf(this.end.horizontal))
        let vert = Math.abs(this.start.vertical-this.end.vertical)
        return horz+vert
    }
    estimatedTime(peak){
        return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3
    }
}


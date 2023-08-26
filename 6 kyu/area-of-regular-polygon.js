// Task:

// It should calculate the area of a regular polygon of numberOfSides inside 
// a circle of radius circleRadius which passes through all the vertices of the polygon 
// (such circle is called circumscribed circle or circumcircle). 
// The answer should be a number rounded to 3 decimal places. 


// My solution:

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    const sideLength = 2 * circleRadius * Math.sin(Math.PI / numberOfSides);
    const area = (numberOfSides * sideLength**2) / (4 * Math.tan(Math.PI / numberOfSides));
    const roundedArea = Math.round(area * 1000) / 1000
    return roundedArea;   
  }
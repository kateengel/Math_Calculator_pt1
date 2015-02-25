// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9." //

function squarenumber(number) {
	sqaure = number*number;
	console.log("The result of squaring the number " + number + " is " + sqaure+ ".");
	return sqaure;
}
squarenumber(4);


//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.". //

function halfNumber(number) {
	half = number/2;
	console.log("Half of " + number + " is " + half + ".");
	return half;
}
halfNumber(4);

//Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(number, number1) {
	percentage = (number/number1)* 100
	console.log(number + " is " + percentage + "% of " + number1);
	return percentage;
}
percentOf(4,8);

//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

function areaOfCircle(radius) {
	area = 3.14*(radius*radius);
	area = area.toFixed(2);
	console.log("The area for a circle with radius " + radius + " is " + area);
	return area;
}
areaOfCircle(5);

//Bonus: Round the result so there are only two digits after the decimal.

/*Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3). */

function mathOps(number) {

	var half = halfNumber(number);
	var halfSqaured = squarenumber(half);
	var areaOfHalfSquared =  areaOfCircle(halfSquared);
	var PercentCompare = percentOf(halfSquared, areaOfHalfSquared);
	return PercentCompare;
  

	/* half = number/2;
	halfNumber = console.log(half);
	halfSqrd = half*half;
	halfNumberSqrd = console.log(halfSqrd);
	radiusSqrd = Math.sqrt(halfSqrd);
	area = 3.14*radiusSqrd;
	area = area.toFixed(2);
	areaNumber = console.log(area);
	percNumber = area/halfSqrd;
	percNumber = console.log(area/halfSqrd*100 + "%"); */


}
mathOps(20);
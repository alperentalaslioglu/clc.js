var clc = {

    /*
     * Calculation of distance between two points (x1,y1) <----> (x2,y2)
     * @param x1 and y1 : Coordinates of first point
     * @param x2 and y2 : Coordinates of second point
     * @return distance between two points
     */
    calcDistBetween: function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    },

    /*
     * Calculation of Center coordinates of three points (x1,y1) (x2,y2) (x3,y3)
     * @param x1 and y1 : Coordinates of first point
     * @param x2 and y2 : Coordinates of second point
     * @param x3 and y3 : Coordinates of third point
     * @return center coordinate of three coordinates
     */
    calcCentroid: function (x1, y1, x2, y2, x3, y3) {
        return {
            x: ((x1 + x2 + x3) / 3),
            y: ((y1 + y2 + y3) / 3)
        };
    },

    /*
     * Calculation of area of circle by given radius
     * @param r : Radius of circle
     * @return area of circle
     */
    calcAreaOfCircle: function (r) {
        return Math.PI * r * r;
    },

    /*
     * Calculation of perimeter of circle by given radius
     * @param r : Radius of circle
     * @return perimeter of circle
     */
    calcPerimeterOfCircle: function (r) {
        return 2 * Math.PI * r;
    },

    /*
     * Calculation of hypotenuse by given legs
     * @param x : First leg
     * @param y : Second leg
     * @return hypotenuse of triangle
     */
    calcPythagorean: function (x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    },

    /*
     * Calculation of simplified interest rate
     * @param C : Initial deposit
     * @param r : Interest rate (expressed as a fraction: eg. 0.06)
     * @param t : Number of years invested
     * @return future value of money
     */
    calcSimplifiedInterest: function (C, r, t) {
        return (C * Math.pow((1 + r), t))
    },

    /*
     * Calculation of compound interest rate
     * @param C : Initial deposit
     * @param r : Interest rate (expressed as a fraction: eg. 0.06)
     * @param n : # of times per year interest is compounded
     * @param t : Number of years invested
     * @return future value of money
     */
    calcCompoundInterest: function (C, r, n, t) {
        return (C * Math.pow((1 + r / n), (n * t)))
    },


    /*
     * Calculation of decimal to binary
     * @param num : Decimal num
     * @return binary form of num
     */
    calcDecimal2Binary: function (num) {
        return parseInt(num, 10).toString(2);
    },

    /*
     * Calculation of decimal to octal
     * @param num : Decimal num
     * @return octal form of num
     */
    calcDecimal2Octal: function (num) {
        return parseInt(num, 10).toString(8);
    },

    /*
     * Calculation of decimal to hexadecimal
     * @param num : Decimal num
     * @return hexadecimal form of num
     */
    calcDecimal2Hex: function (num) {
        return parseInt(num, 10).toString(16);
    },

    /*
     * Calculation of logarithm
     * @param value : Num value
     * @param base : Base of logarithm
     * @return logarithm value
     */
    calcLog: function (value, base) {
        return Math.log(value) / Math.log(base);
    },

    /*
     * Calculation of logarithm by base e
     * @param value : Num value
     * @return logarithm value of base e
     */
    calcLn: function (value) {
        return Math.log(value);
    },

    /*
     * Calculation of area of square
     * @param side : Value of side
     * @return area of square
     */
    calcAreaOfSquare: function (side) {
        return Math.pow(side, 2);
    },

    /*
     * Calculation of factorial value of a number
     * @param n : Value of number
     * @return factorial result
     */
    calcFactorial: function (n) {
        var result = 1;
        for (var i = n; i > 0; i--) {
            result *= i;
        }
        return result;
    },

    /*
     * Calculation of permutation of a number
     * @param n : Value of number
     * @param r : Permuation number
     * @return permutation result
     */
    calcPermutation: function (n, r) {
        return this.calcFactorial(n) / this.calcFactorial(n - r);
    },

    /*
     * Calculation of combination of a number
     * @param n : Value of number
     * @param r : Combination number
     * @return combination result
     */
    calcCombination: function (n, r) {
        return this.calcFactorial(n) / (this.calcFactorial(n - r) * this.calcFactorial(r));
    }

};

module.exports = clc;


"use strict";

var clc = {

    /*
     * Calculation of distance between two points (x1,y1) <----> (x2,y2)
     * @param x1 and y1 : Coordinates of first point
     * @param x2 and y2 : Coordinates of second point
     * @return distance between two points
     */
    calcDistBetween: function calcDistBetween(x1, y1, x2, y2) {
        checkParams(arguments);
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

};

function checkParams(args) {
    console.log(args);
}

module.exports = clc;
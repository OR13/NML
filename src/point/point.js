"use strict";
/**
 * A single module node library with tests and docs.
 * @module nml
 */

/** Class representing a point. */
class Point {

    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        return this.x;

    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        return this.y;
    }

}

module.exports = Point;
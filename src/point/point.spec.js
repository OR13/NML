"use strict";

var nml = require('../../nml');
var assert = require('chai').assert;

describe('let p = nml.Point(4, 2)', function () {

    let p = new nml.Point(4, 2)

    it('p.getX() should be 4', function () {
        assert.equal(p.getX(), 4);
    });

    it('p.getY() should be 2', function () {
        assert.equal(p.getY(), 2);
    });

});
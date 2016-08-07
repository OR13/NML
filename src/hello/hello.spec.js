
var index = require('../../index');

var assert = require('chai').assert;

describe('.hello()', function () {

    before(function () {
        index.init();
    });

    it('should return "hello"', function () {
        assert.equal(index.hello(), 'hello');
    });

    after(function () {

    });

});
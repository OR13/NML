

var index = require('../index');

var assert = require('chai').assert;

describe('.init()', function () {

    before('reset config object', function () {
        index.config = undefined;
    });

    it('should initialize the index config from env variables', function () {

        assert.equal(index.config, undefined);

        index.init();

        assert.equal(index.config.type, "default");

    });

    after('reset config object', function () {
        index.config = undefined;
    });

});

describe('.init(config)', function () {

    before('reset config object', function () {
        index.config = undefined;
    });

    it('should initialize the index config from a config object', function () {

        assert.equal(index.config, undefined);

        var config = {
            type: "custom"
        }

        index.init(config);

        assert.equal(index.config.type, config.type);
        assert.equal(index.config.type, "custom");

    });

    after('reset config object', function () {
        index.config = undefined;
    });

});

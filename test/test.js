require('should')
var assert = require('chai').assert;
var aray = require('../');
describe('Aray', function() {

	describe('addEach()', function() {
		it('should return [ 5, 7, 9 ]', function() {
			assert.deepEqual([ 5, 7, 9 ], aray.addEach([1, 3, 5], 4));

		});
	});

	describe('spread()', function() {
		it('should return [ 2, 5, 8 ]', function() {
			assert.deepEqual([ 2, 5, 8 ], aray.spread([1, 3, 5], [1,2,3]));

		});
	});

	describe('wordArray()', function() {
		it('should return [ hi, my, name, is, mark ]', function() {
			assert.deepEqual([ 'hi', 'my', 'name', 'is', 'mark' ], aray.wordArray('hi my name is mark'));

		});
	});

	describe('sum()', function() {
		it('should return 10', function() {
			assert.deepEqual(10, aray.sum([1,2,3,4]));

		});
	});

	describe('first()', function() {
		it('should return [ 100, 1, 2, 3, 4 ]', function() {
			assert.deepEqual([ 100, 1, 2, 3, 4 ], aray.first([1, 2, 3, 4], 100));
		});
	});

	describe('matrix()', function() {
		it('should return [[10,10],[10,10]]', function() {
			assert.deepEqual([[10,10],[10,10]], aray.matrix(2,2,10));
		});
	});

	describe('divide()', function() {
		it('should return [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ]]', function() {
			assert.deepEqual([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ]], aray.divide([1, 2, 3, 4, 5, 6], 2));
		});
	});

	describe('unique()', function() {
		it('should return [ 5, 2, 3]', function() {
			assert.deepEqual([ 5, 2, 3],  aray.unique([5, 2, 3, 5, 5, 5, 2, 5, 5, 3]));
		});
	});

	describe('words()', function() {
		it('should return [ "my", "name", "is", "mark"]', function() {
			assert.deepEqual([ "my", "name", "is", "mark"],  aray.words("my name is mark"));
		});
	});

	describe('nums()', function() {
		it('should return [ 5, 2, 3, 23, 11]', function() {
			assert.deepEqual([ 5, 2, 3, 23, 11],  aray.nums("5 2 3 23 11"));
		});
	});
	
	describe('mix()', function() {
		it("should return [ 'my', 5, 'name', 2, 'mark', 3]", function() {
			assert.deepEqual([ "my", 5, "name", 2, "mark", 3],  aray.mix("my 5 name 2 mark 3"));
		});
	});
});

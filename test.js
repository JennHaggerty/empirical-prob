var assert 	= require('assert');
var { app } = require('./app')
var { NumberToWords, buildString } = require('./public/functions')
var http = require('http');
var server = http.Server(app);

describe('NumberToWords', function() {
	it('should return spelled out number', function() {
		var theNumber = 3;
		var theString = NumberToWords(theNumber);
		var expectedString = "three";
		assert.equal(theString, expectedString);
	});
});

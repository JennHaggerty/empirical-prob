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

describe('buildString', function() {
	it('should return spelled out numbers leading up to input', function() {
		var theNumber = 3;
		var expectedString = "onetwothree";
		var theString = buildString(theNumber);
		
		assert.equal(theString, expectedString);
	});
});

//describe('some test', function () {
//	it('does stuff', function (done) {
//	  server.listen(9876, function () {
//console.log('server started!')
//var webBrowser = puppeteer.launch();
//webBrowser.then(function () {
//	webBrowser.goto('localhost:9876').then(function () {
//		webBrowser.input('input', '3').then(function() {
//			webBrowser.click('button').then(function() {
//				webBrowser.$('input').then(function(value) {
//console.log('gete');
//				});
//			})
//		})
//	})
//});
//	  	server.close()
//	  	done()
//	  })
//	})
//})

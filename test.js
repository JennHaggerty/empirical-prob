var assert 	= require('assert');
var { app } = require('./app')
var { NumberToWords, buildString } = require('./public/functions')
var http = require('http');
var server = http.Server(app);

describe('NumberToWords', function() {
	it('should return spelled out number: 3 => "three"', function() {
		var theNumber = 3;
		var theString = NumberToWords(theNumber);
		var expectedString = "three";
		assert.equal(theString, expectedString);
	});
});

describe('buildString', function() {
	it('should return spelled out numbers leading up to input: 3 => "onetwothree"', function() {
		var browser, page;
		before(function(done){
			var testOnlyPort = 3001;
			console.log('starting test server')
			server.listen(testOnlyPort, function() {
				console.log('test server started')
				puppeteer.launch().then(_browser => {				
					browser = _browser;
					console.log('open browser')
					return browser.newPage();
				}).then(_page => {
					page = _page;
					console.log('navigate to localhost:3000')
					return page.goto('http://localhost:3001')
				})
				.then(() => {
					//console.log('doing something')
					var theNumber = 3;
					var expectedString = "onetwothree";
					var theString = buildString(theNumber);
					assert.equal(theString, expectedString);
					done();
				});
			});
		})
		after(function() {
			console.log('browser closed, session terminated.')
			return;
			//browser.close();
		})
	});
});

var puppeteer = require('puppeteer');
describe('sample test with server and browser', function () {
//	this.timeout(30000); // cheat to allow test to finish
	var browser, page;
	before(function(done){
		var testOnlyPort = 3001;
		console.log('starting test server')
		server.listen(testOnlyPort, function() {
			console.log('test server started')
			puppeteer.launch().then(_browser => {				
				browser = _browser;
				console.log('open browser')
				return browser.newPage();
			}).then(_page => {
				page = _page;
				console.log('navigate to localhost:3000')
				return page.goto('http://localhost:3001')
			})
			.then(() => {
				console.log('do something')
				done();
			});
		});
	})
	after(function() {
		console.log('browser closed, session terminated.')
		return browser.close();
	})
	//it('can chain test functions', function () {
	//	console.log('select input')
	//	return page.$('input')
	//	.then(element => {
	//		element.value = '3'
	//		return page.click('button')
	//	})
	//	.then(() => {
	//		return page.screenshot({ path: './example.png' })
	//	})
	//	.then(() => {
	//		return browser.close();
	//	})
	//})
})

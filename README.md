# kickass-search

Simple search API for Kickass Torrents

[![build status](https://secure.travis-ci.org/sachanganesh/kickass-search.png)](http://travis-ci.org/sachanganesh/kickass-search)

#### Submit a pull request!

## What it does
After called, the API returns an array of JSON objects that represent listed torrent files.

## Installation

```
sudo npm install kickass-search --save
```

## Usage

### To search by category only
	var kickass = require('kickass-search');
	var category = 'ebooks';
	var data;
	kickass.search(category).then(function (body) {
		data = body;
	});

### To search by query only
	var kickass = require('kickass-search');
	var query = 'catcher in the rye';
	var data;
	kickass.search(, query).then(function (body) {
		data = body;
	});

### To search by category and query
	var kickass = require('kickass-search');
	var category = 'ebooks';
	var query = 'catcher in the rye';
	var data;
	kickass.search(category).then(function (body) {
		data = body;
	});

### To search by newest torrents available
	var kickass = require('kickass-search');
	var data;
	kickass.search().then(function (body) {
		data = body;
	});

## Credits
[Sachan Ganesh](https://github.com/sachanganesh/)

# kickass-search

[![NPM](https://nodei.co/npm/kickass-search.png)](https://nodei.co/npm/kickass-search/)

[![build status](https://secure.travis-ci.org/sachanganesh/kickass-search.png)](http://travis-ci.org/sachanganesh/kickass-search)
[![npm version](https://badge.fury.io/js/kickass-search.svg)](http://badge.fury.io/js/kickass-search)
[![dependencies](https://david-dm.org/sachanganesh/kickass-search.png)](https://david-dm.org/sachanganesh/kickass-search.png)

Simple search API for Kickass Torrents

#### Submit a pull request!

## What it does
Allows a client to retrieve a list of torrents from Kickass Torrents as an array of JSON objects.

### Accessible Data

Property | Yield
--- | ---
title (String) | name of torrent
size (String) | torrent file size
age (String) | time since first uploaded
seed (String) | number of seeders
leech (String) | number of leechers
magnet (String) | magnet link

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

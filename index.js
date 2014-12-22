var Q = require('q');
var request = require('request');

function search(category, query) {
    var deferred = Q.defer();
    var url = 'https://www.kimonolabs.com/api/';
    if (category && query)
        url += '2egu2p5g?apikey=JTymD4IrXDKPLFth0vI8GhoR8GEwGXo5'
                + '&kimpath2=' + query + ' category:' + category;
    else if (!category.length && query)
        url += '2egu2p5g?apikey=JTymD4IrXDKPLFth0vI8GhoR8GEwGXo5'
                + '&kimpath2=' + query;
    else if (category && !query)
        url += '7y1mi6wa?apikey=JTymD4IrXDKPLFth0vI8GhoR8GEwGXo5'
                + '&kimpath1=' + category;
    else if (!category && !query)
        url += '7y1mi6wa?apikey=JTymD4IrXDKPLFth0vI8GhoR8GEwGXo5'
                + '&kimpath1=new';
    request(url, function (err, resp, body) {
        if (err) {
            console.log(err);
            deferred.reject(JSON.parse(err));
        } else {
            console.log(JSON.parse(body));
            deferred.resolve(JSON.parse(body));
        }
    });
    return deferred.promise;
}

exports.module = search;

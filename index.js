var Q = require('q')
    , request = require('request');

exports.search = function (category, query) {
    var deferred = Q.defer()
    , url = 'https://www.kimonolabs.com/api/';
    if (category && query) {
        url += '2egu2p5g?apikey=JTymD4IrXDKPLFth0vI8GhoR8GEwGXo5' + '&kimpath2=' + query + ' category:' + category;
    } else if (!category && query) {
        url += '2egu2p5g?apikey=JTymD4IrXDKPLFth0vI8GhoR8GEwGXo5' + '&kimpath2=' + query;
    } else if (category && !query) {
        url += '7y1mi6wa?apikey=JTymD4IrXDKPLFth0vI8GhoR8GEwGXo5' + '&kimpath1=' + category;
    } else if (!category && !query) {
        url += '7y1mi6wa?apikey=JTymD4IrXDKPLFth0vI8GhoR8GEwGXo5' + '&kimpath1=new';
    }
    request(url, function (err, resp, body) {
        if (err) {
            console.log(err);
            deferred.reject(JSON.parse(err));
        } else {
            var data = JSON.parse(body)
            , files = data.results.files;
            files.forEach(function (file) {
                file.magnet.href = file.magnet.href.substring(file.magnet.href.indexOf('magnet:?xt'));
            });
            deferred.resolve(files);
        }
    });
    return deferred.promise;
}

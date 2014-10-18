var fs = require("fs"),
    async = require("async"),
    underscore = require("underscore");

function findPairs(list) {

    async.waterfall([
            function(callback) {
                fs.readFile(list, function(err, data) {
                    if (err) throw err;
                    data = data.toString().split('\n').slice(0, 1000);
                    //console.log(data);
                    console.log("got here1");
                    callback(null, data);
                })

            },

            function(data, callback) {
                var hashTable = {};
                console.log("got here2")
                data.forEach(function(el) {      
                    el = el.split(",");
                     //console.log("el: ", el);
                    el.forEach(function(elInner) {
                        console.log("elInner: ", elInner)
                        typeof hashTable[elInner] === "undefined" ?
                            hashTable[elInner] = 1 :
                            hashTable[elInner]++;
                    })
                })
                callback(null, hashTable);
                console.log("got here3")
            },

            function(hashTable, callback) {
                for (var keys in hashTable) {
                    if (hashTable[keys] < 50)
                        delete hashTable[keys];
                }

                callback(null, hashTable)
                  console.log("got here4")
            }
        ],

        function(err, hashTable) {
            if (err) return console.error("error: ", err);

            console.log(hashTable);
        })
}

module.exports = findPairs;


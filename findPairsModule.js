var fs = require("fs"),
    async = require("async"),
    _ = require("underscore");

function findPairs(list, minPairs) {

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
                for (var i = 0; i <data.length; i++){      
                    var el = data[i].split(",");
                    //console.log("i:", i)
                     //console.log("el: ", el);
                    el.forEach(function(elInner) {
                        //console.log("elInner: ", elInner)
                        if (typeof hashTable[elInner] === "undefined") {
                            hashTable[elInner] = [];
                            hashTable[elInner].push(i);
                        } else {
                            hashTable[elInner].push(i);
                        }
                    })
                }
                callback(null, hashTable);
                //console.log(data[999]);
                console.log("got here3")
            },

            function(hashTable, callback) {
                for (var keys in hashTable) {
                    if (hashTable[keys].length < minPairs)
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


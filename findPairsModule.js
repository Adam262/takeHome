var fs = require("fs"),
    async = require("async"),
    _ = require("underscore");

function findPairs(list, minPairs) {

    async.waterfall([
 
 //parses input param from line return separated string to an array
            function(callback) {
                fs.readFile(list, function(err, data) {
                    if (err) throw err;      
                    data = data.toString().split('\n').slice(0, 1000);
                    callback(null, data);
                })

            },

//builds hash table where key is artist, value is array of line numbers for user lists in which artist appears 
            function(data, callback) {
                var hashTable = {};
                for (var i = 0; i <data.length; i++){      
                    var el = data[i].split(",");
                    el.forEach(function(elInner) {
                        if (typeof hashTable[elInner] === "undefined") {
                            hashTable[elInner] = [];
                            hashTable[elInner].push(i);
                        } else {
                            hashTable[elInner].push(i);
                        }
                    })
                }
                callback(null, hashTable);
            },

 //restricts hash to artists that appear singly in at least minPairs number of lists.
            function(hashTable, callback) {
                for (var keys in hashTable) {
                   
                    if (hashTable[keys].length < minPairs)
                        delete hashTable[keys];
                }
                callback(null, hashTable)
            },

            function(hashTable, callback){

// Makes array of all possible pairs of hash table's keys
            function makePairs(hashTable) {
                var arrOfPairs  = [],
                        keys    = Object.keys(hashTable);
        
                for (var i = 0; i < keys.length; ++i) {
                    for (var j = i + 1; j < keys.length; ++j) {
                        arrOfPairs.push([keys[i], keys[j]]);
        }
    }
            return arrOfPairs;
}
// Tallies number of common elements among any given pair of arrays
            function countCommon(arr1, arr2) {
                    var counter = 0;
                    arr1.forEach(function(el){
                        if (arr2.indexOf(el)!==-1) counter++
                })
            return counter;
        }

// Uses array filter method to execute countCommon on all hash table's keys

var arrResult = makePairs(hashTable);
    arrResult = arrResult.filter(function(pair) { 
    return countCommon(hashTable[pair[0]], hashTable[pair[1]]) >= minPairs;
});

            callback(null,arrResult)    
            }
        ],

        function(err, arrResult) {
            if (err) return console.error("error: ", err);

            console.log(arrResult);
        })
}

module.exports = findPairs;



var findPairs   = require("./findPairsModule.js"),
    list        = process.argv[2],
    minPairs    = process.argv[3];

findPairs(list, minPairs);


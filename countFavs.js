var countFavs   = require("./countFavsModule.js"),
    list        = process.argv[2];
    minFavs    = process.argv[3];

countFavs(list, minFavs);
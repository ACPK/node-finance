/*jshint node:true */

"use strict";

var assert = require("assert"),
    finance = require("../lib/finance");

var params = {};

params.prods = ["IBM", "YHOO", "MSFT"];
params.referenceDate = "Sat Aug 06 2011 12:00:00";
params.targetReturn = undefined;
params.lows = [0, 0, 0];
params.highs = [-1, -1, -1];

finance.portfolio.getOptimalPortfolio(params, function (err, res) {
    var i;

    if (!err) {
        console.log("Portfolio assets are the following: " + params.prods);
        for (i = 0; i < params.prods.length; i += 1) {
            console.log("Optimal weight for " + params.prods[i] +
                " is " + res.optim.solution[i]);
        }
        assert(0.27107, res.optim.solution[0].toFixed(5));
        assert(0.26880, res.optim.solution[1].toFixed(5));
        assert(0.46013, res.optim.solution[2].toFixed(5));
    } else {
        console.log(err);
    }
});

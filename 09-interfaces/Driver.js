"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
var myGolfCoach = new GolfCoach_1.GolfCoach();
var myCricketCoach = new CricketCoach_1.CricketCoach();
var coaches = [];
coaches.push(myGolfCoach);
coaches.push(myCricketCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var mycoach = coaches_1[_i];
    console.log(mycoach.getDailyWorkout());
}


import {GolfCoach} from './GolfCoach';
import {Coach} from './Coach';
import {CricketCoach} from './CricketCoach';
let myGolfCoach =new GolfCoach();
let myCricketCoach = new CricketCoach();
let coaches:Coach[] =[];
coaches.push(myGolfCoach);
coaches.push(myCricketCoach);
for(let mycoach  of coaches){
    console.log(mycoach.getDailyWorkout());
}

  

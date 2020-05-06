import {Coach} from "./Coach";

export class GolfCoach implements Coach{

    getDailyWorkout():string{
        return "HIT 100 Balls at golf range";
    }

}

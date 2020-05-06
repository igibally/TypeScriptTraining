import { Coach } from './Coach' 
export class BaseballCoach implements Coach{
    
  getDailyWorkout():string{
        return "practice you baseball techniques";
    }
}
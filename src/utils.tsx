import { TrainingData } from "./types";

export function compareByDate( a:TrainingData, b: TrainingData ) {

    let date1:Date = new Date(a.date);
    let date2:Date = new Date(b.date);


    if ( date1 < date2 ){
      return 1;
    }
    if ( date1> date2 ){
      return -1;
    }
    return 0;
  }
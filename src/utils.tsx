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

  export function formatDateDDMMYYYY(date : string) : string{
    let newDate: Date = new Date(date);

    const yyyy = newDate.getFullYear();
    let mm = newDate.getMonth() + 1; // Months start at 0!
    let dd = newDate.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '.' + mm + '.' + yyyy;

  }
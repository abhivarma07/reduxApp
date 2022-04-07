/**
 * Write a function to return a 2d-array of the week-ranges of a given month DATES, each
 * week containing a sub-array in the form of:
 * 
 * [firstWorkingDay, lastWorkingDay]
 * 
 * for that week based on START_DATE of a shift & number of WORKING_DAYS allowed per week
 * in that shift.
 * 
 * firstWorkingDay's week day (e.g: Friday,Sunday etc.) of every week shoould be same as
 * of START_DATE's week day (e.g: Friday,Sunday etc.) of the shift and
 * 
 * lastWorkingDay is calculated by adding number of WORKING_DAYS allowed per week in that
 * shift to the firstWorkingDay of that week
 * 
 * INPUT:
 * an array of all the dates of a month (DATES)
 * e.g: an array of all the dates in the month of April
 * 
 * Starting date of the shift (START_DATE), 
 * e.g: 2022-04-01 (Fri Apr 01 2022)
 *  
 * Number of working days allowed per week (WORKING_DAYS)
 * e.g: 5
 * 
 * OUTPUT:[
  [ 'Fri Apr 01 2022', 'Tue Apr 05 2022' ],
  [ 'Fri Apr 08 2022', 'Tue Apr 12 2022' ],
  [ 'Fri Apr 15 2022', 'Tue Apr 19 2022' ],
  [ 'Fri Apr 22 2022', 'Tue Apr 26 2022' ],
  [ 'Fri Apr 29 2022', 'Tue May 03 2022' ]
]
 * 
 */

// Helper function to set the time of the provided date to 00:00 & returns the date
function startOfDay(date) {
    return new Date(
      typeof date.getMonth === 'function'
        ? date.setHours(0, 0, 0, 0)
        : new Date(date).setHours(0, 0, 0, 0)
    );
  }
  
  // input dates
  const DATES = [
    '2022-04-01',
    '2022-04-02',
    '2022-04-03',
    '2022-04-04',
    '2022-04-05',
    '2022-04-06',
    '2022-04-07',
    '2022-04-08',
    '2022-04-09',
    '2022-04-10',
    '2022-04-11',
    '2022-04-12',
    '2022-04-13',
    '2022-04-14',
    '2022-04-15',
    '2022-04-16',
    '2022-04-17',
    '2022-04-18',
    '2022-04-19',
    '2022-04-20',
    '2022-04-21',
    '2022-04-22',
    '2022-04-23',
    '2022-04-24',
    '2022-04-25',
    '2022-04-26',
    '2022-04-27',
    '2022-04-28',
    '2022-04-29',
    '2022-04-30',
  ].map((dt) => startOfDay(dt));
  
  const START_DATE = startOfDay('2022-04-02');
  
  const WORKING_DAYS = 4;
  
  function daysInMonth(anyDateInMonth) {
    return new Date(
      anyDateInMonth.getFullYear(),
      anyDateInMonth.getMonth() + 1,
      0
    ).getDate();
  }
  
  function getWeekRanges(inputDates, shiftStartDate, allowedWorkingDays) {
    const weeks = [];
  
    const x = new Date(shiftStartDate);
    const rn = shiftStartDate.getMonth();
  
    var diff = shiftStartDate - x;
  
    while (diff <= 28) {
      const last = new Date(x);
      last.setDate(last.getDate() + allowedWorkingDays - 1);
      const w = [x.toDateString(), last.toDateString()];
  
      x.setDate(x.getDate() + 7);
  
      weeks.push(w);
      diff = (x - shiftStartDate) / (3600 * 24 * 1000);
    }
  
    return weeks;
  }
  
  console.log(getWeekRanges(DATES, START_DATE, WORKING_DAYS));
  
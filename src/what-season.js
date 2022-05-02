import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) return 'Unable to determine the time of year!';
  else {
    const month = date.getMonth();
    if (!month && month !== 0 || !date instanceof Date && isNaN(date.valueOf())) throw new Error('Invalid date!');
    else if (month == 0 || month == 11 || month == 1) return 'winter';
    else if (month > 1 && month <= 4) return 'spring';
    else if (month > 4 && month <= 7) return 'summer';
    else return 'autumn';
  }
}
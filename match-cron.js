/**
 * Matches a valid cron string with a given Date object.
 * The function returns true if the pattern matches the date.
 *
 * @param {string} inputCron - The cron string to match (e.g., '9 * * * *').
 * @param {Date} date - The Date object to check against the cron string.
 * @returns {boolean} True if the cron pattern matches the Date, false otherwise.
 */
function matchCron(inputCron, date) {
  let cron = {};

  // Parse the cron string into its individual parts (minute, hour, day of the month, month, day of the week)
  inputCron.split(" ").forEach((part, i) => {
    if (part === "*") return; // Skip '*' as it means "any"
    switch (i) {
      case 0:
        cron.minute = part;
        break;
      case 1:
        cron.hour = part;
        break;
      case 2:
        cron.date = part;
        break;
      case 3:
        cron.month = part;
        break;
      case 4:
        cron.day = part;
        break;
    }
  });

  // Extract the relevant date components from the Date object
  date = {
    minute: date.getMinutes(),
    hour: date.getHours(),
    date: date.getDate(),
    month: date.getMonth() + 1, // Months are 0-based in JS, so we add 1
    day: date.getDay() === 0 ? 7 : date.getDay(), // Convert Sunday (0) to 7 to match cron convention
  };

  // Compare the cron parts with the corresponding date parts
  for (let key in cron) {
    if (cron[key] !== date[key].toString()) {
      return false; // If any part doesn't match, return false
    }
  }

  return true; // If all parts match, return true
}

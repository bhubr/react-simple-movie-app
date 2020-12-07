/**
 * Return true if date is less than one year from now
 *
 * @param {string} release Release date in YYYY-MM-DD format
 */
export default function isLessThanOneYear(release) {
  // Create date object, set it one year in the past
  const date = new Date();
  const pastYear = 1900 + date.getYear() - 1;
  date.setYear(pastYear);

  const releaseDate = new Date(release);
  console.log(date, releaseDate);
  return releaseDate.getTime() > date.getTime();
}

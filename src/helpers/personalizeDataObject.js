import PropTypes from 'prop-types';

// method adds extra keys to the object:
export const personalizeDataObject = (item) => {
  if (!item) return;
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let [month, day, year] = new Date().toLocaleDateString('en-US').split('/');

  /* block below is only for demonstration purposes and simulates the date of adding to library */
  /* should be removed before hosting */
  /* start demonstration block  */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  day = getRandomInt(1, 30);
  month = getRandomInt(0, 11);
  /* end demonstration block  */
  item.addDate = day + ' ' + months[parseInt(month) + 1] + ' ' + year;
  item.isLiked = false;
  return item;
};

personalizeDataObject.propTypes = {
  item: PropTypes.object.isRequired,
};

import PropTypes from 'prop-types';

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
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  day = getRandomInt(1, 30);
  month = getRandomInt(0, 11);
  item.addDate = day + ' ' + months[parseInt(month) + 1] + ' ' + year;
  item.isLiked = false;
  return item;
};

personalizeDataObject.propTypes = {
  item: PropTypes.object.isRequired,
};

function calculateTimeAgo(timestamp) {
  const currentDate = new Date();
  const commentDate = new Date(timestamp);

  const timeDifference = currentDate - commentDate;

  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const monthsAgo = Math.floor(daysAgo / 30.437); //average number of days in a month
  const yearsAgo = Math.floor(monthsAgo / 12);

  if (yearsAgo > 0) {
    if (yearsAgo === 1) {
      return `${yearsAgo} Year Ago`;
    } else {
      return `${yearsAgo} Years Ago`;
    }
  } else if (monthsAgo > 0) {
    if (monthsAgo === 1) {
      return `${monthsAgo} Month Ago`;
    } else {
      return `${monthsAgo} Months Ago`;
    }
  } else if (daysAgo > 0) {
    if (daysAgo === 1) {
      return `${daysAgo} Day Ago`;
    } else {
      return `${daysAgo} Days Ago`;
    }
  } else if (hoursAgo > 0) {
    if (hoursAgo === 1) {
      return `${hoursAgo} Hour Ago`;
    } else {
      return `${hoursAgo} Hours Ago`;
    }
  } else if (minutesAgo > 0) {
    if (minutesAgo === 1) {
      return `${minutesAgo} Minute Ago`;
    } else {
      return `${minutesAgo} Minutes Ago`;
    }
  } else {
    return `Just Now`;
  }
}

export { calculateTimeAgo };

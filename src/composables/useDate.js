const date = new Date();


const useDate = () => {
  // const date = new Date();

  const getDay = () => {
    return date.getDay();
  };

  const getMonth = () => {
    return date.getMonth();
  };


  // The functions addDay and addMonths need to return something, preferably the update date.

  // That's why const newDate = new Date(); was added and it takes the global date variable as a parameter, updates it and then returns it.

  const addDay = (numberOfDays) => {
    const newDate = date;
    newDate.setDate(date.getDate() + numberOfDays);
    return newDate;
  };

  const addMonth = (numberOfMonths) => {
    const newDate = date;
    const currentMonth = date.getMonth();
    newDate.setMonth(currentMonth + numberOfMonths);

    // To check if the month exceeds 11
    // if (currentMonth > 11) {
    //   // Increment the year
    //   newDate.setFullYear(newDate.getFullYear() + 1);
    // }

    return newDate
  };

  return { date, getDay, getMonth, addDay, addMonth };
};

export default useDate;

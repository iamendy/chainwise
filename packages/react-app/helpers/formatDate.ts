const getDate = (date: string): string => {
  const myDate = new Date(date);
  return myDate.toDateString();
};

export default getDate;

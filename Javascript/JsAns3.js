const calculateTripDays = (startDate, endDate) => {
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  
  const diff = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
  
  console.log(diff);
};

calculateTripDays("2025-07-01T10:30:00", "2025-07-05T10:40:00")
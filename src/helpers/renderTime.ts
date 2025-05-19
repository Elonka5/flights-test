
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}-${month}-${year}`;
};

export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0"); 
  return `${hours}:${minutes}`; 
};


export const calculateFlightDuration = (departure: string, arrival: string) => {
  const departureDate = new Date(departure);
  const arrivalDate = new Date(arrival);
  const durationInMinutes = (arrivalDate.getTime() - departureDate.getTime()) / 1000 / 60;
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = Math.floor(durationInMinutes % 60);
  return `${hours}h ${minutes}m`;
};
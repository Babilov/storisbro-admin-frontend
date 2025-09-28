export const formatDate = (date) => {
  return date.split("T")[0];
};

export const formatTime = (date) => {
  return date.split("T")[1].split(".")[0];
};

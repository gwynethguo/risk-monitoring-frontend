export const convertToLocalTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

// Generate random number for card
export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// current year
export function getCurrentYear() {
  return new Date().getFullYear();
}

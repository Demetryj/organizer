export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 230);
  const g = Math.floor(Math.random() * 230);
  const b = Math.floor(Math.random() * 230);
  return `rgba(${r}, ${g}, ${b}, 0.8)`;
};

const Random = () => {
  const num = Math.random();
  if (num > 0.5) {
    return true;
  } else {
    return false;
  }
};

export default Random;

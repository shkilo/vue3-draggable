export const getIdGenerator = () => {
  let num = 0;
  return () => {
    return num++;
  };
};

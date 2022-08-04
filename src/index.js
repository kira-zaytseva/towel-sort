
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  return matrix.reduce((acc, rec, index) => {
    if (index%2 === 0 || index === 0) {
      return acc.concat(rec);
    } else {
      let rev = rec.reverse()
      return acc.concat(rev);
    }
  }, []);
}

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return [];
    return matrix.flatMap((arr, i) => (i % 2 ? arr.reverse() : arr));
};

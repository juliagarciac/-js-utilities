export const unique = (arr) => [...new Set(arr)];
export const groupBy = (arr, key) => arr.reduce((acc, obj) => {
    const k = String(obj[key]);
    acc[k] = acc[k] || [];
    acc[k].push(obj);
    return acc;
}, {});
export const sumBy = (arr, key) => arr.reduce((total, obj) => total + (Number(obj[key]) || 0), 0);

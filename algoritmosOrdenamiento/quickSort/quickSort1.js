const quickSort = (arr) => {
  if (arr.lengt == 0) return[];
  if (arr.length == 1) return arr;

  let i = Math.floor(arr.length / 2);
  let pivot = arr[i];
  arr.splice(i, 1);

  return[
    ...quickSort(arr.filter( y => y < pivot)),
    pivot,
    ...quickSort(arr.filter( y => y >= pivot)),
  ]
}

let items = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(quickSort(items));

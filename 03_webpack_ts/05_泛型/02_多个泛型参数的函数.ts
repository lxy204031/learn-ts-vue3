(() => {
  function getArr<K, V>(x: K, y: V): [K, V] {
    return [x, y]
  }
  const arr = getArr<number, string>(99.999, 'aweqrefdszf')
  console.log(arr[0].toFixed(1));
  console.log(arr[1].length);
})()
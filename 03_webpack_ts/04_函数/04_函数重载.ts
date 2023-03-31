(() => {
  function add(x: string, y: string): string
  function add(x: number, y: number): number

  function add(x: string | number, y: string | number): string | number {
    if (typeof (x) === 'string' && typeof (y) === 'string') {
      return x + y
    } else if (typeof (x) === 'number' && typeof (y) === 'number') {
      return x + y
    }
  }
  console.log(add(10, 10));
  console.log(add('Bread', 'Lee'));
  // console.log(add('Bread', 10));
})()
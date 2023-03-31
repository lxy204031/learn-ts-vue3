(() => {
  function showMsg(str1: string, str2: string, ...args: number[]) {
    console.log(str1);
    console.log(str2);
    console.log(args);
  }
  showMsg('a', 'b', 1, 2, 3, 4, 4, 55, 23, 132)
})()
(() => {
  interface IsearchFunc {
    (source: string, subString: string): boolean
  }

  const searchString: IsearchFunc = function (source: string, subString: string): boolean {
    return source.search(subString) > -1
  }

  console.log(searchString('你好呀', '我'));

})()
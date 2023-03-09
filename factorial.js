function calFactorial(n) {
  let factorial = 1;
  for(let i=1;i<=n;i++) {
    factorial *= i;
  }
  return factorial;
}

module.exports = calFactorial;
//console.log(calFactorial(4))

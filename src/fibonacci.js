function fibonacci(n) {
  const fibonacciSeries = [0, 1];
  let nextItem;

  for(let i = 2; i <= n; i++) {
    nextItem = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextItem);
  }

  return fibonacciSeries[n];
}

module.exports = fibonacci;

//console.log(fibonacci(3)); // 2

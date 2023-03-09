function Fibonacci() {
  const fib = (n) => {
    const arr = [];
    let a = 0,
      b = 1;
    for (let i = 0; i < n; i++) {
      if (b < 7000000) {
        let temp = b;
        b = a + b;
        a = temp;
        arr.push(a);
      }
    }

    console.log('Массив последовательности Фибоначчи: ', arr);
    console.log(
      'Сумма четных чисел этого массива: ',
      arr.reduce((sum, n) => (sum += n % 2 ? 0 : n), 0),
    );
    return 'Результат: ' + a;
  };

  console.log(fib(1000));
}

export default Fibonacci;

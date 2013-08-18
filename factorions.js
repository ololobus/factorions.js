factorionsFinder = {
  
  // Факториалы всех чисел от 0 до 9
  // 4! = factorial[4] = 24
  factorial: [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880],
  
  n: 0,
  results: [],
  
  start: function() {
    self = this;
    // 2540160 максимальное такое число, так как n-значное число > 10^(n-1),
    // а 10^(n-1) возрастает быстрее n*9!
    // и 10^(8-1) > 9!*8
    while (this.n < 2540160) {
      digits = self.n.toString().split('');
      sum = 0;
      for (i = 0; i < digits.length; i++) {
        sum += self.factorial[parseInt(digits[i])];
      };
      if (sum === self.n) {
        self.results.push(self.n);
        console.log(self.n);
      };
      self.n += 1;
    }
    return 'finished'
  }
  
};

factorionsFinder.start();
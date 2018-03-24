describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is divisible by 3', function() {

    it('Fizzes', function() {
      expect(fizzbuzz._isDivisibleBy(3,3)).toBe(true);
    });
  });

  describe('knows when a number is NOT divisible by 3', function() {

    it('returns the number', function() {
      expect(fizzbuzz._isDivisibleBy(3,1)).toBe(false);
    });
  });

  describe('knows when a number is divisible by 5', function() {

    it('Buzzes', function() {
      expect(fizzbuzz._isDivisibleBy(5,5)).toBe(true);
    });
  });

  describe('knows when a number is NOT divisible by 5', function() {

    it('returns the number', function() {
      expect(fizzbuzz._isDivisibleBy(5,1)).toBe(false);
    });
  });

  describe('knows when a number is divisible by 15', function() {

    it('Fizzbuzzes', function() {
      expect(fizzbuzz._isDivisibleBy(15,15)).toBe(true);
    });
  });

  describe('knows when a number is NOT divisible by 15', function() {

    it('returns the number', function() {
      expect(fizzbuzz._isDivisibleBy(15,1)).toBe(false);
    });
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzbuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzbuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for 15', function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });

    it('fizzbuzzes for 30', function() {
      expect(fizzbuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzbuzz.play(11)).toEqual(11);
    });
  });
});



/**
 * Created by mwafi on 24/07/2017.
 */
describe('A fizzbuzz unit test suite', function () {


    var result =fizzBuzzer();

    it("give oneh undred first integer", function() {
        expect(result.length).toBe(100);
    });


    it("first is one ",function () {
        expect(result[1]).toBe(1);

    });

    it("second is two",function () {
        expect(result[2]).toBe(2);

    });

    it("third is fizz",function () {
        expect(result[3]).toBe("fizz");

    });

    it("five is buzz",function () {
        expect(result[5]).toBe("buzz");

    });

    it("multiple of tree is fizz",function () {
        expect(result[6]).toBe("fizz");

    });


    it("multiple of five is buzz",function () {
        expect(result[10]).toBe("buzz");

    });

    it("multiple of three and five is FizzBuzz",function () {
        expect(result[15]).toBe("fizzbuzz");

    });

    it("multipleOfThreeAndFiveIsFizzBuzz_2",function () {
        expect(result[45]).toBe("fizzbuzz");

    });

});

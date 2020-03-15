const {isPositive, double, range, Dog, fetchDirector} = require('../index');
const assert = require('assert');

describe("isPositive", function(){

    it("should return true when the number is positive", function (){
        assert.equal(isPositive(10), true)
    })

    it("should return false when number is negative", function () {
        assert.equal(isPositive(-15), false)
    })

    it("should return negative when number is zero", function () {
        assert.equal(isPositive(0), false)
    })
})

describe("range", function(){
    
    it("should return an array of all numbers from 1 to n", function () {
        assert.deepEqual(range(5), [1,2,3,4,5])
    })
})

describe("double", function(){
    
    it("should return an array of all numbers in the original array but doubled", function () {
        assert.deepEqual(double([1,2,3]), [2,4,6])
    })

    it("should return original array", function () {
        let a = [1,2,3]
        assert.equal(double(a), a)
    })

    it("should return original array mutated", function () {
        let a = [1,2,3]
        double(a);
        assert.deepEqual(a, [2,4,6])
    })
})

describe("Dog", function(){
    let dog1;
    let dog2;

    beforeEach(function() {
        dog1 = new Dog("fido", 4)
        dog2 = new Dog("snoopy", 2)
    })

    it("should be initialized with a name and age", function() {
        assert.equal(dog1.name, "fido")
        assert.equal(dog1.age, 4)
        assert.equal(dog2.name, "snoopy")
        assert.equal(dog2.age, 2)
    })

    describe("Bark", function(){
        it("should bark at someonee while stating their name", function() {
          
            assert.equal(dog1.bark(), "fido Barks")
        })
    })

    describe("Run", function(){
        it("should run while stating their name", function () {
            assert.equal(dog1.run(), "fido runs")
        })
    })
})

describe("fetchDirector", function(){
    it("should return director", async function(){
        assert.equal( await fetchDirector("the matrix"), "Lana Wachowski, Lilly Wachowski")
    })
})

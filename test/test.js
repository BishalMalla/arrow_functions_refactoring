const chai = require ('chai')
const expect = chai.expect
const main = require('../main.js');
const text = "Hello World!"
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('helloWorld', function() {

  it('Should return Hello World!', function () {
    const expected = "Hello World!";
    const actual = main.helloWorld(text);
    expect(actual).to.deep.equal(expected);
  })

  it('Shold not use return', function () {
    const matches = main.helloWorld.toString().includes("return");
    expect(matches).to.equal(false);
  })

  it('Should not have a function as an expression', function () {
    const matches = main.helloWorld.toString().includes("function");
    expect(matches).to.equal(false);
  })

  it('Should use a thick arrow!', function () {
    const matches = main.helloWorld.toString().includes("=>");
    expect(matches).to.equal(true);
  })

})

describe('oddNumbers', function(){
  it('Should return odd numbers using filter', function () {
    const expected = [ 1, 3, 5, 7, 9];
    const actual = main.oddNumbers;
    expect(actual).to.deep.equal(expected);
  })

  it('Should not use return', function () {
    const matches = main.filterOdds.toString().includes("function");
    expect(matches).to.equal(false);
  })

  it('Should not have a function as an expression', function () {
    const matches = main.filterOdds.toString().includes("function");
    expect(matches).to.equal(false);
  })

  it('Should use a thick arrow!', function () {
    const matches = main.filterOdds.toString().includes("=>");
    expect(matches).to.equal(true);
  })

})

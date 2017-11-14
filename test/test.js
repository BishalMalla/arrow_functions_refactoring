const expect = require('chai').expect
const myFunc = require('../main.js');

describe('myFunc', function(){
  it('should be a function', function(){
    expect(myFunc).to.be.a('function')
  })
})

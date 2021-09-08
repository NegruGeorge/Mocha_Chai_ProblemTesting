const chai = require('chai')
const expect = chai.expect

const {say} = require("../src/say.js")

describe("All tests for problem 1",function(){
    describe("Tests for 0-19 numbers",function(){
        it("test for 'zero' ",function(){
            expect(say(0)).to.eq("zero")
        })
    })
})
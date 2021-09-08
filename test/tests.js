const chai = require('chai')
const expect = chai.expect

numbers = {0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",
15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",
70:"seventy",80:"eighty",90:"ninety",100:"hundred",1000:"thousand",1_000_000_000:"million",1_000_000_000_000:"billion",1_000_000_000_000_000:"trillion"}



const {say} = require("../src/say.js")

describe("All tests for problem 1",function(){
    describe("Tests for 0-19 numbers",function(){
        it("test for 'zero' ",function(){
            expect(say(0)).to.eq("zero")
        })

        for(let i=1 ;i<=19;i++){
            
            it(`test for ${i}`,function(){
                expect(say(i)).to.equal(numbers[i])
            })
        }

    })

    describe("Tests for 20-99 numbers",function(){
        describe("Tests for Tens divisible by 10",function(){
            for(let nr=20;nr<=90;nr+=10)
            {
                it(`test for ${nr}`,function(){
                    expect(say(nr)).to.equal(numbers[nr])
                })
            }
        })
     
    })

})
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
        describe("Tests for Tens non divisible by 10",function(){
            for(let nr=21;nr<=99;nr++){
                if(nr%10===0){
                    continue
                }
                it(`test for ${nr}`,function(){
                    expect(say(nr)).to.equal(numbers[Math.floor(nr/10) * 10] + "-" + numbers[nr%10])
                })
            }
        })
        

    })
    describe("Tests for 100-999 numbers",function(){
        describe("Tests for hundreds divisible by 100",function(){
            it("test for 100",function(){

                expect(say(100)).to.equal("one hundred")
            })
            it("test for 200",function(){

                expect(say(200)).to.equal("two hundred")
            })
        })
        describe("tests for hundreds not divisibile by 100",function(){
            describe("tests for hundreds with no zero on tens",function(){
                it("tes for 134",function(){
                    expect(say(134)).to.equal("one hundred thirty-four")
                })
                it("tes for 556",function(){
                    expect(say(556)).to.equal("five hundred fifty-six")
                })

                it("tes for 114",function(){
                    expect(say(114)).to.equal("one hundred fourteen")
                })

            })
            describe("test for hundreds with zero on tens and add AND",function(){
                it("test for 104",function(){
                    expect(say(104)).to.equal("one hundred and four");
                })
                it("test for 405",function(){
                    expect(say(405)).to.equal("four hundred and five");
                })
            })
        })
 
    })

    describe("tests for hundreds 1_000 - 999_999",function(){
    describe("test for numbers without the ones that have for last tens and hundred order 0 and units 1-9",function(){
        it("test for 1000",function(){
            expect(say(1000)).to.equal("one thousand")
        })
        it("test for 10000",function(){
            expect(say(10000)).to.equal("ten thousand")
        })
        it("test for 300000",function(){
            expect(say(300000)).to.equal("three hundred thousand")
        })
        it("test for 303303",function(){
            expect(say(303303)).to.equal("three hundred and three thousand three hundred and three")
        })

        it("test for 333303",function(){
            expect(say(333303)).to.equal("three hundred thirty-three thousand three hundred and three")
        })
        it("test for 333333",function(){
            expect(say(333333)).to.equal("three hundred thirty-three thousand three hundred thirty-three")
        })

        it("test for 333000",function(){
            expect(say(333000)).to.equal("three hundred thirty-three thousand")
        })

        it("test for 330000",function(){
            expect(say(330000)).to.equal("three hundred thirty thousand")
        })

        it("test for 30000",function(){
            expect(say(30000)).to.equal("thirty thousand")
        })
        it("test for 33000",function(){
            expect(say(33000)).to.equal("thirty-three thousand")
        })

    })


    })

})


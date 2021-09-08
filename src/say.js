numbers = {0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",
15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",
70:"seventy",80:"eighty",90:"ninety",100:"hundred",1000:"thousand",1_000_000:"million",1_000_000_000:"billion",1_000_000_000_000:"trillion"}



function checkCategory(category){
    if(category>=1000 && category<1_000_000)
        return 1_000
    else if(category >=1_000_000 && category <1_000_000_000)
        return 1_000_000
    else if (category>=1_000_000_000 && category < 1_000_000_000_000)
        return 1_000_000_000
    else if(category>=1_000_000_000_000 && category<1_000_000_000_000_000)
        return 1_000_000_000_000

    else
        return "To big of a number"
}



function sayMaxHundreds(number,order)
{
    // we need order because we want to know the numbers that have for last tens and hundred order 0 and units 1-9
    if(order === 1)
    {
        if(number>=1 && number <=9)
            return "and " + numbers[number] 
    }

    if(number>=0 && number <=19){
        return numbers[number]
    }
    else if(number>=20 && number<=99){
        if(number%10 ===0){
            return numbers[number]
        }
        else{
            tens = Math.floor(number/10)
            uni = number%10;
            return numbers[tens*10]+"-"+numbers[uni]
        }
    }else if(number>=100 && number<=999){   
        hundred = Math.floor(number/100);
        if(number%100 ===0){
    
            
            return numbers[hundred] + " " + numbers[100]
        }
        else if( number %100 - number%10    !==0)
        {
            return say(number - number%100) + " " + say(number%100)
        }
        else{
            return say(number - number%100) + " and "+ numbers[number%10]
        }
    }
}



function say(number) {

    //19020 -> 19 + 020  10^4   5%3 = 2
    //1902  ->1   902   10^3    4%3 = 1
    //190 200 000  -> 190, 200, 000    10^8    9%3 = 0
    if(number >=0 && number <=999){
        return sayMaxHundreds(number,0)
    }
    else{
      
        // if we have 1 we have 1 hundred, 2-> 10 hundreds, 0-> 100 hundreds
        let fullNr = ""
        while(number>=1000)
        {   let numberStr = number.toString();
            let length = numberStr.length;
            category = 10**(length-1);
            order = length % 3;
            if(order===0){
                order =3
            }
            // console.log(Math.floor(number / 10**(length - order)))
            

            fullNr = fullNr +sayMaxHundreds(Math.floor(number / 10**(length - order))) + " " + numbers[checkCategory(category)]+ " "

            number = number% 10**(length-order)
        }

        if(number !==0){
            fullNr = fullNr+ sayMaxHundreds(number,1)
        }
        else{
            fullNr = fullNr.trim()
        }
        return fullNr
    }
  
}

module.exports = {say}

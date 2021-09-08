numbers = {0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",
15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",
70:"seventy",80:"eighty",90:"ninety",100:"hundred",1000:"thousand",1_000_000_000:"million",1_000_000_000_000:"billion",1_000_000_000_000_000:"trillion"}






function say(number) {

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
        
    }
  
}

module.exports = {say}

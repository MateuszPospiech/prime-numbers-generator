const checkNumber = document.getElementById('checkNumber');
const number = document.getElementById('number');
const result = document.getElementById('result');

let memoryPrimeNumber = '';

function checkOutPrimeNumber() {
    
    const numberValue = number.value;
    
    if(numberValue >= 2){
        memoryPrimeNumber = '2';
    }
    
    for(i=1; i <= numberValue; i++){
        
        /*IT WORKS FOR ALL PRIME NUMBER EXCEPTT 2
        just because Math.sqrt(2) == ~1.4 and round it to 1*/
        for(j=2; j <= Math.round(Math.sqrt(i)); j++){
            const pierwiastek = Math.round(Math.sqrt(i));
            const moduloResoult = i % j;
            
            
            if(moduloResoult != 0 && j>= Math.round(Math.sqrt(i)) && numberValue > i ){
                
                memoryPrimeNumber += `, ${i}`;
                break;  
            }
            else if(moduloResoult != 0){    
                
                /* ---IT CAN BE PRIME NUMBER---
                but moduloResult have to be != 0 in all case*/
            }
            else{
                break; 
                
                /* ---IT IS NOT PRIME NUMBER---*/
            }
        } 
    } 
}

function writePrimeNumber(){
    
    const numberValue = number.value;
    
    if(numberValue>2){
        result.innerHTML = `${memoryPrimeNumber}`;
        memoryPrimeNumber = '';
    }
    else if(numberValue<=1){
        result.innerHTML = 'Liczba pierwsza to liczba naturalna większa od 1, która ma dokładnie dwa dzielniki: 1 i samą siebie.';
    }
    else{
        result.innerHTML = '';
    }
}

checkNumber.addEventListener('click', checkOutPrimeNumber);
checkNumber.addEventListener('click', writePrimeNumber);
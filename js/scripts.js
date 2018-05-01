const checkNumber = document.getElementById('checkNumber');
const number = document.getElementById('number');
const result = document.getElementById('result');

function writeNumber() {
    const numberValue = number.value;
    
    if(numberValue>2){
        result.innerHTML = 2;
    }
    else if(numberValue<=1){
        result.innerHTML = 'Liczba pierwsza to liczba NATURALNĄ większa od 1, która ma dokładnie dwa; 1 i samą siebie.';
    }
    else{
        result.innerHTML = '';
    }
                      
    
    for(i=1; i <= numberValue; i++){
        
        for(j=2; j <= Math.round(Math.sqrt(i)); j++){
            const pierwiastek = Math.round(Math.sqrt(i));
            const wynik2 = i % j;
            let wynikii = 0;
            wynikii = wynikii + wynik2;
            
            
              
            /*console.log(`Liczba j ${j},  Liczba i ${i}, Pierwiastek  ${pierwiastek}, Reszta z dzielenia ${wynik2}`);*/
            
            
            if(wynik2 != 0 && /*wynikii == 1 &&*/ j>= Math.round(Math.sqrt(i)) && numberValue > i ){
                
                console.log(`Liczba ${i} jest liczbą pierwszą. Ile obrotów ${wynikii}.`);
                
                
                result.innerHTML += `, ${i}`;
                
                
                break;
                
            }
            else if(wynik2 != 0){
                
                /*console.log(`Liczba ${i} MOŻE jest LP. Ile obrotów ${wynikii}.`);*/
            }
            else{
                break;
                console.log(`Liczba ${i} nie jest liczbą pierwszą.  Ile obrotów ${wynikii}`);
                
                
                
                break;
                
            }
            }
        
    }
    
}

checkNumber.addEventListener('click', writeNumber);
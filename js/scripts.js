const checkNumber = document.getElementById('checkNumber');
const number = document.getElementById('number');
const result = document.getElementById('result');

function writeNumber() {
    const numberValue = number.value;
    result.textContent = numberValue;
    
    for(i=1; i <= numberValue; i++){
        
        for(j=2; j <= Math.round(Math.sqrt(i)); j++){
            const pierwiastek = Math.round(Math.sqrt(i));
            const wynik2 = i % j;
                        
            console.log(`Liczba j ${j},  Liczba i ${i}, Pierwiastek  ${pierwiastek}, Reszta z dzielenia ${wynik2}`);
            
            }
    }
    
}

checkNumber.addEventListener('click', writeNumber);
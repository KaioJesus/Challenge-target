// Questão 1

function Sum(){
    i = 13, soma = 0, k = 0;
    while(k < i){
        k++;
        soma += k;
    }
    return soma;
}

console.log(Sum());


// Questão 2
// Foi definido que o parâmetro da função é a quantidade números da sequencia de Fibonacci e também o número que será verificado se está na sequência.

function fibonacciSequence(number){
    let fib = [0, 1];
    for (let i = 2; i <= number; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
        console.log(fib[i]);
    }

    for(let i = 0; i < fib.length; i++){
        console.log(fib[i]);
        if(fib[i] === number){
            return `O número ${number} está na posição ${i} da sequência de Fibonacci.`;
        }
    }
    return `O número ${number} não está na sequência de Fibonacci.`;
}

console.log(fibonacciSequence(10)); 

// Questão 4

function calculatePercentage(){
    let monthlyIncome = [
        {"State": "SP", "value": 67836.43},
        {"State": 'RJ', "value": 36678.66},
        {"State": 'MG', "value": 29229.88},
        {"State": 'ES', "value": 27165.48},
        {"State": 'Outros', "value": 19849.53},
    ];
    let totalMonthlyIncome = 0;
    for(let i = 0; i < monthlyIncome.length; i++){
        totalMonthlyIncome += monthlyIncome[i].value;
    }

    for(let i = 0; i < monthlyIncome.length; i++){
        let percentage = (monthlyIncome[i].value / totalMonthlyIncome) * 100;
        console.log(`O estado ${monthlyIncome[i].State} tem uma porcentagem de ${percentage.toFixed(2)}% do total de renda mensal.`);
    }
}

console.log(calculatePercentage());


// Questão 5
function stringReversed(string){
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    return reversed;
}

console.log(stringReversed('Kaio'));
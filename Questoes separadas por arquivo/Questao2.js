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
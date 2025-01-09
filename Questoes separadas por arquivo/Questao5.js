// Questão 5
function stringReversed(string){
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    return reversed;
}

console.log(stringReversed('Caroline'));
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
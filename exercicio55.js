let tabela = [];
let maiorNumero = 0;
let maiorLinha;
let menorNumero;
 
for (let i = 0; i < 10; i++){
    tabela.push([]);
    for (let j = 0; j < 10; j++){
        tabela[i][j] = Math.floor(Math.random() * 100);
    }
}

for (let i = 0; i < 10; i++){
    let linha = tabela[i];
    let maxLinha = Math.max(...linha);
    if (maxLinha > maiorNumero){
        maiorNumero = maxLinha;
        maiorLinha = i;
    }
}
    menorNumero = tabela[maiorLinha].reduce(function(x,y){
        return Math.min(x,y);
    })



console.table(tabela);
console.log(`O maior elemento da tabela é ${maiorNumero} na linha ${maiorLinha}`);
console.log(`Menor elemento da linha do maior elemento é ${menorNumero}`);
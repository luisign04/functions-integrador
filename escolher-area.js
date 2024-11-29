const prompt = require('prompt-sync')();

function escolherServico(){
    console.log('1. Alvenaria')
    console.log('2. Pintura')
    console.log('3. Pedreiro')
    console.log('4. Eletricistas')
    const escolha = prompt('Escolha a seu serviço: ')

    if(escolha === '1'){
        console.log('Você escolheu Alvenaria')
    } else if(escolha == '2'){
        console.log('Você escolheu Pintura')
    }else if(escolha == '3'){
        console.log('Você escolheu Pedreiro')
    }else if(escolha == '4'){
        console.log('Você escolheu Eletricistas')
    } else {
        console.log('Opção inválida, tente novamente.')
    }
}
escolherServico()
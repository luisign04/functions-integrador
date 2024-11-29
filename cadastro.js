const usuarios = [
    {email : 'joaosilva@gmail.com', senha: '123456'},
    {email : 'mariasilveira@gmail.com', senha: 'abcdef'},
]
const prompt = require('prompt-sync')();


function cadastrarUsuarios(email, senha){
    if (!email.includes("@") || senha.length < 6){
        return "Email inválido ou senha abaixo de 6 caracteres."
    }
    const existe = usuarios.find(usuario => usuario.email === email)
    if (existe){
        return "Erro: Email já cadastrado"
    }
    usuarios.push({email, senha})
    return "Usuario cadastrado com sucesso"
}

console.log("AGIDE, Sua demanda é uma ordem!")
const email = prompt("Email: ")
const senha = prompt("Senha: ")

const resultado = cadastrarUsuarios(email,senha)
console.log("Você foi cadastrado com sucesso")
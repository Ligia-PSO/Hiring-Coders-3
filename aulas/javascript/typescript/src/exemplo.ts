// function soma(a:number,b:number){
//     return a+b;
// }
// console.log(soma(1,1));
// console.log(soma('1','1'));

// const pets: [string, string, string] = [
//     'lora',
//     'logan',
//     'lebeau'
// ]
// const lora: [string, number] = [
//     'lora', 6
// ]

// const logan: [string, number] = [
//     'logan', 5
// ]
// const lebeau: [string, number] = [
//     'lebeau', 3
// ]

enum Permissoes {
    admin = 'ADMIN',//agora nao ira mais retornar um numero mas a string
    editor = 'EDITOR',
    comum = 'COMUM'
}
const usuario = {
    nivel: Permissoes.editor
};

console.log(usuario)

function principal(): void {
    console.log("executando");
}
principal()
// laços de repetição infinitos
// ou funções que disparam erros
function funcaoQueNuncaRetorna(): never {
    throw new Error('ola')
}
const a = funcaoQueNuncaRetorna()

type Users = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number;//propriedade opcional do objeto
}

const gabriel: Users={
    name:'gabriel',
    lastName:'ramos',
    birthday:'29/01/1996'
}
// union types
//(como se fosseo
// union types
//|(como se fosseo||)
type LogLevel='info'|'error'|'debug';
function logMessage(message:string,level:LogLevel){
                              console.log(`[${level}]-${message}`)
}
logMessage('Uma mensagem info','error')
logMessage('Uma mensagem info','info')
logMessage('Uma mensagem info','debug')

// LogMessage('Uma mensagem info','erro')
// intersection types:&
type About={
    bio:string;
    interests:string[];
}
type Profile=Users&About;
const userWithProfile:Profile={
    name:'gabriel',
    lastName:'ramos',
    birthday:'29/01/1996',
    bio:'Olá,meu nomeégabriel',
    interests:['gatos','música','fotografia']
}

class User {
    public name;//precia indicar quais sao os campos do objeto e o tipo de acesso
    public age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Player extends User {
    public game;
    constructor(name: string, age: number, game: string) {
        super(name, age);
        this.game = game;
    }
    dizeroJogoAtual() {
        return "Estou jogando,no momento:${this.jogo}";
    }
    // pode ser acessada diretamente da classe
    static queHorasSao() {
        return Date();
    }
}
// const jogador = new Player('Anna', 25, 'Red Dead Redemption 2');
// console.log(jogador)

const jogador = new Player('Gabriel', 25, 'Ghost of Tsushima');
console.log(jogador.dizeroJogoAtual());
console.log(Player.queHorasSao());


class Jogo{
    protected nome;
    constructor(nome:string){
        this.nome=nome;
    }
    dizerNome(){
        return"Onome do jogoé:${this.nome}"
    }
}
// interfaces
interface JogoComDescricao{
    // nome:string;
    descricao:string;
    dizerNomeComDescricao():string;
}
// implements
class JogoComDescricao extends Jogo implements JogoComDescricao{
    public descricao;
    constructor(nome:string,descricao:string){
         super(nome);
         this.descricao=descricao;
    }
    dizerNomeComDescricao(){
         return `nome do jogoè:${this.nome}`;
    }
}

// Type assertions
type JogoAssertion={
    nome:string;
    descricao:string;
}

let jogo1=<JogoAssertion>{}as JogoAssertion;
// let jogo1={}as JogoAssertion;//do the same thing just another way to write

jogo1.nome='nome'
jogo1.descricao='descricao do jogo'
class Pessoa {
    constructor(name,cidade,estado) {
        this.name    = name;
        this.cidade  = cidade;
        this.estado = estado;
}
    darOi() {
        return 'Oi, meu nome e ' + this.name + ' e eu sou de ' + this.cidade + "/" + this.estado + ".";
    }   
    
}

var Andre = new Pessoa("Andre", "Curitiba","PR");

var Andrey = new Pessoa("Andrey", "Curitiba","PR");

var Fernanda = new Pessoa("Fernanda", "Colombo","PR");

var Norai = new Pessoa("Norai", "Santos","SP");

var Magali = new Pessoa("Magali", "São Paulo","SP");


function nomeMsg(){
    var nome = 'Visitante';
    var string = 'Olá! ' + nome + ', você está clicando no André!';

    alert(string);
}
function nomeMsg1(){
    var nome = 'Visitante';
    var string = 'Olá! ' + nome + ', você está clicando no Andrey!';

    alert(string);
}
function nomeMsg2(){
    var nome = 'Visitante';
    var string = 'Olá! ' + nome + ', você está clicando na Fernanda!';

    alert(string);
}
function nomeMsg3(){
    var nome = 'Visitante';
    var string = 'Olá! ' + nome + ', você está clicando no Norai!';

    alert(string);
}
function nomeMsg4(){
    var nome = 'Visitante';
    var string = 'Olá! ' + nome + ', você está clicando na Magali!';

    alert(string);
}
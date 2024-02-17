class Colaborador{
    constructor(valor1,valor2,valor3,valor4,valor5,valor6){
        this.nome = valor1;
        this.salario = valor2;
        this.cargo = valor3;
        this.setor = valor4;
        this.metodo = valor5; 
        this.experiencia = valor6;
    }
    processo(){
        if(this.metodo == "curriculo"){
            return this.nome + "Enviou currículo";
        }else{
            return this.nome + "Foi indicado";
        }
    }
    exp(){
        if(this.experiencia == "sim"){
            return this.nome + "Tem experiência";
        }else{
            return this.nome + "Não tem experiência"
        }
    }

    alegria(){
        return this.nome + " Comemorou";
    }
}

const pessoa = new Colaborador("Guilherme", "4500", "Developer", "Desenvolvimento","curriculo","sim");
const pessoa1 = new Colaborador("José", "4500", "Developer", "Desenvolvimento","indicacao","não");

console.log(pessoa);
console.log(pessoa.alegria());
console.log(pessoa1);
pessoa.salario = 5000;
console.log(pessoa);
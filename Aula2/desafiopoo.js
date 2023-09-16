class Filme {
    constructor(titulo,ano,genero,duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao
        this.assistido = false;
        this.nota = [];
    }

    //metodo para exibir detalhes do filme usando atributos
    exibirDetalhes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao} minutos`);
        console.log(`Assistido: ${this.assistido ? 'Sim' : 'Não'}`);
        if (this.assistido && this.avaliacao !== null) {
            console.log(`Avaliação: ${this.avaliacao}`);
        }
    }

    //metodo para marcar se o filme foi assistido ou nao
    marcarAssistido() {
        this.assistido = true;
        console.log(`${this.titulo} foi marcado como assistido.`);
    }


    //metodo para avaliar o filme dando uma nota
    avaliarFilme(avaliacao) {
        if (this.assistido) {
            this.avaliacao = avaliacao;
            console.log(`Você avaliou ${this.titulo} com ${avaliacao} estrelas.`);
        } else {
            console.log(`${this.titulo} precisa ser assistido antes de avaliá-lo.`);
        }
    }
}



//criando 3 objetos para representar os filmes
const filme1 = new Filme ('The Witch: Part 1', 2018, 'Ação', 125);
const filme2 = new Filme ('The Witch: Part 2', 2020, 'Ação', 125);
const filme3 = new Filme ('The Childe', 2023, 'Ação', 125);




// Exibindo detalhes dos filmes
filme1.exibirDetalhes();
console.log('---');
filme2.exibirDetalhes();
console.log('---');
filme3.exibirDetalhes();

// Marcando um filme como assistido e avaliando
filme1.marcarAssistido();
filme1.avaliarFilme(5);

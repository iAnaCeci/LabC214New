class Filme {
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = [];
    }

    exibirDetalhes(){
        console.log(`Titulo: ${this.titulo}, \n `);
        console.log(`Ano: ${this.ano}, \n `);
        console.log(`Genero: ${this.genero}, \n `);
        console.log(`Duracao: ${this.duracao}, \n `);
        console.log(`Assistido: ${this.assistido}, \n`);
        if (this.avaliacao != []){
            console.log(`Avaliacao: ${this.avaliacao}, \n`);
        }
    }

    filmeAssistido(){
        this.assistido = true;
        console.log(`O filme ${this.titulo} foi asssistido pelo usuario`)
    }

    avaliar(nota){
        this.avaliacao = nota
        console.log(`O usuario atribuiu uma nota ${this.avaliacao} para o filme ${this.titulo}`)
    }

    
}

const prompt = require("prompt-sync")();

const listaFilmes = [];

function exibirMenu() {
    console.log("\nMenu:");
    console.log("1. Adicionar um novo filme");
    console.log("2. Marcar um filme como assistido");
    console.log("3. Avaliar um filme");
    console.log("4. Exibir a lista de filmes");
    console.log("5. Sair do programa");
}

let choose = 0;

while (choose !== 5) {
    exibirMenu();
    choose = parseInt(prompt("Digite o número da opção desejada:"));

    switch (choose) {
        case 1:
            const nomeFilme = prompt("Digite o nome do Filme: ");
            const anoFilme = prompt("Digite o ano de lançamento do filme: ");
            const generoFilme = prompt("Digite o gênero do filme: ");
            const duracaoFilme = prompt("Digite a duração do filme: ");

            const novoFilme = new Filme(nomeFilme, parseInt(anoFilme), generoFilme, duracaoFilme);

            listaFilmes.push(novoFilme);

            console.log(`O filme ${nomeFilme} foi adicionado à lista`);
            break;
        case 2:
            const titulo = prompt("Digite o título do filme que deseja marcar como assistido: ");

            const filme = listaFilmes.find(filme => filme.titulo === titulo);

            if (filme) {
                filme.filmeAssistido();
            } else {
                console.log("Filme não encontrado na lista");
            }
            break;
        case 3:
            const titulo1 = prompt("Digite o título do filme que deseja avaliar: ");

            const filme1 = listaFilmes.find(filme => filme.titulo === titulo1);

            if (filme1) {
                const novaNota = parseInt(prompt("Digite a nota que se deseja dar ao filme: "))
                filme1.avaliar(novaNota);
            } else {
                console.log("Filme não encontrado na lista");
            }
            break;
        case 4:
            console.log("\nLista de Filmes: ");
            if (listaFilmes.length === 0) {
                console.log("A lista de filmes está vazia");
            } else {
                listaFilmes.forEach(filme =>
                    {
                        console.log("-----------------");
                        filme.exibirDetalhes();
                        console.log("-----------------");
                    });
            }
            break;
        case 5:
            console.log("Saindo do programa.");
            break;
        default:
            console.log("Opção inválida. Por favor, tente novamente!")
    }
}

    


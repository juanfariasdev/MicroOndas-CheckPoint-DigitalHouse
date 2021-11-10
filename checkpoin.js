//Aqui você preenche a opção do que está com fome
const opcaoEscolhida = 1;

//Aqui você coloca o tempo que quer
const TempoNecessario = 20;

//Coloque False caso não queira que apareçã o menu
var aparecerMenu = true;

var pratos = [
    {
        id: 1,
        Title: 'Pipoca',
        tempo: 10
    },
    {
        id: 2,
        Title: 'Macarrão',
        tempo: 8
    },
    {
        id: 3,
        Title: 'Carne',
        tempo: 15
    },
    {
        id: 4,
        Title: 'Feijão',
        tempo: 12
    },
    {
        id: 5,
        Title: 'Brigadeiro',
        tempo: 8
    },
]

var existeItem = false;

function Menu() {
    if (aparecerMenu) {
        console.log("------------ MENU -----------")
        pratos.map(function (item, indice) {
            console.log(`${item.id} - ${item.Title} - ${item.tempo} segundos`);
        })
        console.log("------------  *  ------------")
    }

}
function SelecionarProduto(opcao, tempo) {
    let tempoProduto = 0;
    let comidaMicrondas = "";
    let msgExtra = "Deve estar uma Deliciia!!";
    function Cozinhar() {
        console.log('BIIIIP');
        console.log('BIIIIP');
        console.log('BIIIIP');

        if (tempo < tempoProduto) {
            console.log('Tempo Insuficiente');
            msgExtra = "Pena que deve está frio ;-;";
        }
        if (tempo >= (tempoProduto * 3)) {
            console.log('KABUUMMM');
            msgExtra = "Deve ser dificil comer assim...";
        }
        if (tempo >= (tempoProduto * 2) && tempo < (tempoProduto * 3)) {
            console.log(`Você queimou o ${comidaMicrondas}`);
            msgExtra = "Acho que errou o ponto em... ;-;";

        }

        console.log(`\nPrato pronto, bom apetite!!! ~${msgExtra}`);


    }
    pratos.map(function (item, indice) {
        if (item.id === opcao) {
            existeItem = true;
            tempoProduto = item.tempo;
            comidaMicrondas = item.Title;
            console.log("\nVocê escolheu: " + item.Title)
            console.log(`\nTempo recomendado: ${item.tempo} segundos`)
            console.log(`Tempo escolhido: ${tempo} segundos\n`);
            console.log('Esquentando...\n');
            setTimeout(Cozinhar, 2000);

        }
    }
    )
    if (existeItem == false) {
        console.log('\nItem não existe! Verifique as opções a cima\n');
    }
}



function microOndas() {
    Menu()

}


//Exibe o MENU
microOndas()

SelecionarProduto(opcaoEscolhida, TempoNecessario)
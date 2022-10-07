var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    // bloqueia o refresh da página
    e.preventDefault()  

     //url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/"

    // valor do input name
    let nome = document.getElementById("name")

    // concatena a url com o input name
    urlForm = urlForm + this.name.value

    // transfrma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()

    //IDcONTENT
    let resposta = document.getElementById('content')

    //id imgpokemon
    let imagem = document.getElementById('imgPokemon')

    // Resposta em HTML
    let html = ''

    //fecth - comando que faz a pesquisa e ele vai pesquisar e eretornar o vaor da pesquisa

    fetch(urlForm)
        .then(resposta => resposta.json()) // informar o tipo de resposta que quero
        .then(function (data) { 

            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html
            
            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })

        .catch(function (err) {
           if (err = Error){
            html = 'Pokémon não encontrado!'
           } else {
            html = err
           }

           resposta.innerHTML = html
        })
});

function maiuscula(val) {
    return val[0].toUpperCase() + val.substr(1) // ele vai pegar o primeiro caracter e colcoar em maiusculo, juntand com o resto dos caracteres a aprtir do primeiro
}
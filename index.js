const botao = document.getElementById('consultar');

botao.addEventListener('click', async function() {
    const pessoas = document.getElementById('pessoas');
    const valorPego = pessoas.value;
    await retornar_dados(valorPego)

});

async function retornar_dados(pessoa) {
    let response = await fetch(`http://localhost:3000/pessoa/${pessoa}`);
    response = await response.json()

    document.querySelector('#info-container').innerHTML = `
            <ul id="nome">${response[0].nome}</ul>
            <ul id="nacionalidade">${response[0].nacionalidade}</ul>
            <ul id="idade">${response[0].idade}</ul>
    `
}
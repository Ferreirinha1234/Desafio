function gerarMusica() {
    let nome1 = prompt("Digite o nome do primeiro personagem (ex: Eduardo):");
    let nome2 = prompt("Digite o nome do segundo personagem (ex: Monica):");

    // Valida se o usuário não deixou vazio
    if (nome1 && nome2) {
        const trecho = `
${nome1} sugeriu uma lanchonete mas a
${nome2} queria ver um filme do Godart
E o ${nome1} ainda estava no esquema escola,
cinema, clube, televisão!
`;

        // Insere o texto dentro da div com id "letra-musica" no HTML
        document.getElementById('letra-musica').innerText = trecho;
    } else {
        alert("Por favor, preencha os dois nomes!");
    }
}

function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        alert("Seu IMC é igual a " + imc.toFixed(2));
    } else {
        alert("Por favor, insira um peso e altura válidos.");
    }
} 
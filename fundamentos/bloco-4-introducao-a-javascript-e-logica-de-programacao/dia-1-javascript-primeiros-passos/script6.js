const pecaXadrez = "torre";

switch (pecaXadrez.toLowerCase()) {
    case "peão":
        console.log("O Peão, no começo do jogo, pode avançar duas casas a frente. Nas demais jogadas, somente uma a frente.");
        break;
    case "cavalo":
        console.log("O Cavalo, anda 3 casas sempre em L, podendo passar por cima das demais peças.");
        break;
    case "rei":
        console.log("O Rei, anda somente uma casa em qualquer direção.");
        break;
    case "rainha":
        console.log("A Rainha, anda quantas casas quiser em qualquer direção.");
        break;
    case "bispo":
        console.log("O Bispo, anda quantas casas quiser, somente na diagonal.");
        break;
    case "torre":
        console.log("A Torre, anda quantas casas quiser, somente na vertical e horizontal.");
        break;
    default:
    console.log("Erro, peça inválida!");
        break;
};
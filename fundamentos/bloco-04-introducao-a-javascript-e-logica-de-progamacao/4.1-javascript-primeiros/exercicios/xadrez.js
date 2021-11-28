let pecaXadrez = "KING";

switch (pecaXadrez.toLowerCase()) {
  case "king":
    console.log("O rei pode se mover para qualquer casa adjacente");
    break;
  case "queen":
    console.log("A rainha se move como a torre e o bispo combinados");
    break;
  case "rook":
    console.log(
      "A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas"
    );
    break;
  case "bishop":
    console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro");
    break;
  case "knigth":
    console.log("O movimento do cavalo forma um 'L'");
    break;
  case "pawn":
    console.log("somente para frente");
    break;
  default:
    console.log("ERROR! essa pepça não exite");
    break;
}

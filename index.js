function calculadoraRank (vitorias, derrotas){
	return vitorias - derrotas
}
let quantidaDeVitorias = calculadoraRank (99,0)

const mensagem = "O herói tem saldo de " + quantidaDeVitorias + " vitórias e está no nível "
   
if(quantidaDeVitorias <= 10){
        nivel= "Ferro"
    }
    else if (quantidaDeVitorias >= 11 && quantidaDeVitorias<= 20){
        nivel = "Bronze"
    }
    else if (quantidaDeVitorias >= 21 && quantidaDeVitorias <=50 ){
        nivel = "Prata"
    }
    else if (quantidaDeVitorias >= 51 && quantidaDeVitorias <=80 ){
        nivel = "Ouro"
    }
    else if (quantidaDeVitorias >= 81 && quantidaDeVitorias <=90 ){
        nivel = "Diamante"
    }
    else if (quantidaDeVitorias >= 91 && quantidaDeVitorias <=100 ){
        nivel = "Lendário"
    }
    else{
        nivel = "imortal"
    }
    console.log (mensagem + nivel + ".")

// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.

$(document).ready(function(){
    var numero_random;
  $(".quadrato").click(function(){
      getRandomIntInclusive(1, 9) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  }
  console.log(numero_random);
  });
});

// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9. Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde. In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.

$(document).ready(function(){
  //   // genero un numero casuale compreso tra 1 e 9 con la funzione getRandomIntInclusive
  //   function getRandomIntInclusive (min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;} //Il max è incluso e il min è incluso
  //
  // // quando clicco sul quadrato parte una richiesta ajax per recuperare un numero random tra 1 e 9.
  // var numero_random = (getRandomIntInclusive(1, 9));
  // $(this).text(numero_random);

  // faccio una chiamata ajax per recuperare il numero casuale
  $('.quadrato').click(function() {
      var selettore = $(this);
      $.ajax({
          'url': 'https://flynn.boolean.careers/exercises/api/random/int',
          'method': 'GET',
          'success': function(data) {
              // recupero il numero restituito dall'api
              var numero_random = data.response;
              selettore.text(numero_random);
              colore_quadrato(numero_random, selettore);
          },
          'error': function() {
              alert('si è verificato un errore');
          }
      });
  });


});
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
function colore_quadrato(numero_random, selettore) {
    if(numero_random < 5) {
        // il quadrato su cui l'utente ha cliccato diventa giallo;
        selettore.addClass('yellow');
    } else {
        // il quadrato su cui l'utente ha cliccato diventa verde.
        selettore.addClass('green');
    }
}

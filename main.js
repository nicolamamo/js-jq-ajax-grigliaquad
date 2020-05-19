$(document).ready(function(){
  var template_griglia=$('#template-griglia').html();
  $('body').append(template_griglia);


  $('.quadrato').click(function(){
    // Variabile che mi permette di salvare il quadrato che ho cliccato
    var quadrato_selezionato=$(this);

    //richiesta ajax per prendere un numero random ad ogni click
    $.ajax({
      url: "https://www.boolean.careers/api/random/int",
      method:"GET",
      success: function(numero){

          // Salvo il numero generatomi con ajax
          var numero_random=numero.response;
          console.log("Il numero generato è: " + numero_random);
          // scrivo il numero all'interno del quadrato
          quadrato_selezionato.text(numero_random);
          // Se il numero è minore o uguale a 5, aggiungo class yellow
          if (numero_random<=5) {
            quadrato_selezionato.addClass('yellow');
          }
          // Se il numero è maggiore a 5, aggiungo class green
          else{
            quadrato_selezionato.addClass('green');
          }
      },
    });
  });

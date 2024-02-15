document.addEventListener('DOMContentLoaded', function() {
    // Etsitään nopan kuva
    var dice = document.getElementById('container');
  
    // Lisätään kuuntelija klikkaukselle
    dice.addEventListener('click', function() {
      // Arvotaan satunnaisluku väliltä 1-6
      var randomNumber = Math.floor(Math.random() * 6) + 1;
  
      // Etsitään nopan kuva uudelleen
      var diceImg = document.getElementById('dice');
  
      // Asetetaan uusi kuva nopalle
      diceImg.src = './img/' + randomNumber + '.png';
    });
  });
  
/*
# TP Puzzle / Taquin

On va essayer de créer un Puzzle (numéros) en JavaScript / jQuery.
http://www.artbylogic.com/puzzles/numSlider/numberShuffle.htm

On devra utiliser Github. Voici la liste des fonctionnalités à implémenter :

- Créer l'apparence du jeu avec des cases. On va commencer par un 4 par 4. Il faut donc avoir 15 carrés avec une zone vide.
- Pouvoir cliquer sur un carré et le positionner à la place de la zone vide.
  Chaque carré doit être positionné (relative ou absolute) par rapport à la zone complète du jeu
- Mélanger le jeu aléatoirement à chaque rafraichissement
- Autoriser uniquement le déplacement d'un carré s'il est à côté de la zone vide
- BONUS: Compter les déplacements (en temps réel)
- BONUS: Ajouter un chronomètre et détecter la fin de la partie
- BIG BONUS: Adapter le jeu pour que cela fonctionne avec une image (à voir si on peut découper une image en ligne)
  https://postcron.com/image-splitter/editor/en/upload-image*/

  var emptyBlock = $('#block0_0');


$('.puzzle div').click(function () {
    var left = $(this).css('top');
    var top = $(this).css('left');
    console.log(left);
    console.log(top);
});



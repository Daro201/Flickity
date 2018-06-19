var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false 
});

var buttonGroup = document.querySelector('.button');

buttonGroup.addEventListener( 'click', function( event ) {
  var selector = event.target.getAttribute('data-selector');
  flkty.selectCell( selector );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

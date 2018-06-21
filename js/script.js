'use strict';
var map;
//Adding mustache to html file

	var mustacheCarousel = document.getElementById('template-carousel').innerHTML;
	var carouselMain = document.querySelector('.carousel');

	Mustache.parse(mustacheCarousel);
	var output = '';
	for(var i = 0; i < imagesData.length; i++){
		console.log(imagesData);
		output += Mustache.render(mustacheCarousel, imagesData[i]);
	}
	carouselMain.innerHTML = output;

// Conecting flickity to html file 

var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {

  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,

});

//Restarting button moving back to first image

var restart = document.querySelector('.button');

restart.addEventListener( 'click', function( event ) {
  var selector = event.target.getAttribute('data-selector');

  flkty.selectCell( selector );
});

//Progression bar at the bottom of gallery

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});



flkty.on( 'change', function(index){	
	map.panTo(imagesData[index].coords); 
	map.setZoom(12);
	console.log('Flickity change ' + index );
})

//function creating markers on the map from data from array

window.initMap = function() {
	
		 map = new google.maps.Map(document.getElementById('map'), {
			zoom: 9,
			center: imagesData[0].coords
		});

	for (let i=0; i <imagesData.length; i++ ){
			var marker = new google.maps.Marker({
			position: imagesData[i].coords,
			map: map
		})
		marker.addListener('click', function(){
			flkty.selectCell('#' + imagesData[i].id);
		})
	}
};	






var iconElement = document.querySelectorAll('.brg-icon__elem');
var icon = document.querySelector('.brg-icon');
var menuBlock = document.querySelector('.burger-menu__list');

icon.addEventListener('click', function() {
	
	iconElement.forEach(function(v) {
		v.classList.toggle('brg-icon__elem_open');
 	});

	/*if(iconElement[0].classList.contains('brg-icon__elem_open')) {
	 	menuBlock.style.left = '20px';
	}  else {
		menuBlock.style.left = '-999px';
	}*/

})
 
/*window.onload = function() {
	function initMap() {
    var coordinates = {lat: 50.453855, lng:30.488285 },
    
        map = new google.maps.Map(document.getElementById('google-maps'), {
            center: coordinates
        });
	}
	initMap()
}*/
 
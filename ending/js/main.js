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
 

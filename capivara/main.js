window.addEventListener('load', function() {
	var link = document.querySelector('#play-link');
	var audio = document.querySelector('#audio');
	var images = document.querySelectorAll('#slideshow img');
	var index = 0;
	
	link.addEventListener('click', function(event) {
		event.preventDefault();
		audio.play();
		rotateImages();
	});
	
	function rotateImages() {
		if (index >= images.length) {
			index = 0;
		}
		
		for (var i = 0; i < images.length; i++) {
			if (i === index) {
				images[i].style.display = 'block';
			} else {
				images[i].style.display = 'none';
			}
		}
		
		index++;
		
		setTimeout(rotateImages, 5000); // mude o valor em milissegundos para definir o intervalo de tempo
	}
});

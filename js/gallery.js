var slideIndex = 1;
showSlides(slideIndex);

var gallM = document.getElementById('galleryModal');

function openModal() {
	gallM.style.display = "block";
}

function closeGalModal() {
	gallM.style.display = "none";
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var captionText = document.getElementById('caption');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
}
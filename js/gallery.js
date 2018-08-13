var slideIndex = 1;
showSlides(slideIndex);

var gallWM = document.getElementById('galleryWorksModal');
var gallSM = document.getElementById('gallerySketchModal');

function openModalWM() {
	gallWM.style.display = "block";
}
function openModalSM() {
	gallSM.style.display = "block";
}

function closeGalModal() {
	gallWM.style.display = "none";
	gallSM.style.display = "none";
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides;
	if (slides = document.getElementsByClassName('worksSlides')) {
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
	if (slides = document.getElementsByClassName('sketchesSlides')) {
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
}

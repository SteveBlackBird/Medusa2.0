//Navigation side-bar
var mainNav = document.getElementById("mainNav");
var mainCont = document.getElementById("mainContainer");
var openButtC = document.getElementById("openButtContainer");
var openB = document.getElementById("openBtn");

function openNav() {
    mainNav.style.width = "220px";
    openButtC.style.width = "0";
    openB.style.right = "55px";
}
function closeNav() {
    mainNav.style.width = "0";
    openButtC.style.width = "80px";
    openB.style.right = "25px";
}

//About modal-page
//Works modal-page
//Contacts modal page
var modalA = document.getElementById("aboutModal");
var btnA = document.getElementById("aboutBtn");
var modalW = document.getElementById("worksModal");
var btnW = document.getElementById("worksBtn");
var modalC = document.getElementById("contactsModal");
var btnC = document.getElementById("contactsBtn");

btnA.onclick = function() {
	modalA.style.display = "block";
	closeNav();
}
btnW.onclick = function() {
	modalW.style.display = "block";
	closeNav();
}
btnC.onclick = function() {
	modalC.style.display = "block";
	closeNav();
}
function closeModal() {
	modalA.style.display = "none";
	modalW.style.display = "none";
	modalC.style.display = "none";
	openNav();
}
window.onclick = function(event) {
	if (event.target == modalA) {
		modalA.style.display = "none";
		openNav();
	}
	if (event.target == modalW) {
		modalW.style.display = "none";
		openNav();
	}
	if (event.target == modalC) {
		modalC.style.display = "none";
		openNav();
	}
	if (event.target == mainCont) {
		closeNav();
	}
} 
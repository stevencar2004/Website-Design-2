// $(document).ready(main);
$(document).ready(main2);

function icon() {
	$(".bar").click(function () {});
}
var contador = 1;

function main() {
	$(".bar").click(function () {
		$(".header__nav").toggle();
	});
}
function main2() {
	// var element1 = document.getElementById("i-c");
	// var element2 = document.getElementById("i-w");

	$(".bar").click(function () {
		if (contador == 1) {
			$(".header__nav").animate({
				right: "-50%",
			});
			contador = 0;

			// element1.classList.add("ocultar");
		} else {
			contador = 1;
			$(".header__nav").animate({
				right: "0%",
			});

			// element2.classList.remove("ocultar");
		}
	});
}

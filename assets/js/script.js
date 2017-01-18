console.log("script.js")
var $first = document.querySelectorAll(".first");
var $second = document.querySelectorAll(".second");
var $third= document.querySelectorAll(".third");
var $fourth = document.querySelectorAll(".fourth");
var $fifth = document.querySelectorAll(".fifth");
var $sixth = document.querySelectorAll(".sixth");
var $seventh = document.querySelectorAll(".seventh");
var $eighth = document.querySelectorAll(".eighth");

var $pages = [
	$first,
	$second,
	$third,
	$fourth,
	$fifth,
	$sixth,
	$seventh,
	$eighth,
];

var pageNumber = 0;

var deletePage = function(){
	if(pageNumber > 0 && pageNumber < $pages.length){
		for (var i = $pages[pageNumber -1].length - 1; i >= 0; i--) {
			$pages[pageNumber -1][i].style.display = "none";
		}
	} else if ( pageNumber >= $pages.length) {
		pageNumber=0;
	}
}
var makePage = function() {
	deletePage();
	for (var i = $pages[pageNumber].length - 1; i >= 0; i--) {
		$pages[pageNumber][i].style.display = "inline-block";
	}
	pageNumber++;


}

setInterval(makePage, 5000);
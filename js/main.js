angular
	.module("labApp")
	.directive("leftmain", function() {
		return{
			restrict: "EA", //E = element, A = attribute, C = class, M = comment 
			templateUrl: "sections/main.html",
		    replace: true
		};
	});
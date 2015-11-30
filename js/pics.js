angular
	.module("labApp")
	.directive("picsdir", function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function (scope, elem, attrs) {
	
		scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});

	},

    templateUrl: 'sections/pics.html'
	}

});



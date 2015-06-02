var myApp = angular.module('editableApp', []);

myApp.run(function($rootScope){
});

myApp.directive('editableMaterial',function(){
	return{
		restrict:'E',
		replace:true,
		templateUrl:'./editable-material.html'
	}
});

myApp.directive('makeEditable', function(){
	return{
		restrict:'A',
		scope:true,
		link:function(scope,element,attrs){
			console.log('editable');

			var textBlock=element.find('p');
			console.dir(textBlock);

			scope.buttonState="Edit";
			scope.toggleEdit= function(){
				scope.buttonState=="Edit" ? enterEditMode(): exitEditMode();
			};
			function enterEditMode(){

				console.log('start editing');

				scope.buttonState="Save";
				textBlock.attr('contenteditable', 'true');
            	textBlock.addClass('editable');

            	console.log('done editing');
			}

			function exitEditMode(){
				console.log('save');
				scope.buttonState = "Edit";
            	textBlock.attr('contenteditable', 'false');
            	textBlock.removeClass('editable');

            	console.log('saved');
			}
		}
	}
});


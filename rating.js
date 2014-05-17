/* global angular, console */
'use strict';

angular.module('directiveTest', []);

angular.module('directiveTest').directive('rating', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            ratingValue : '='
        }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        template:
            '<ul>' +
                '<li ng-repeat="star in stars" class="{{ star.filled }}">\u2605</li>' +
            '</ul>',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {

            $scope.maxStars = 5;

            $scope.updateRating = function() {
                $scope.stars = [];
                for (var i = 0; i < $scope.maxStars; i += 1) {
                    $scope.stars.push({
                        filled: (i < $scope.ratingValue) ? 'filled' : ''
                    });
                }
            };

            $scope.updateRating();
            $scope.$watch('ratingValue', function(newValue, oldValue, scope) {
                console.log('watch triggered');
                if (newValue) {
                    console.log('watch and updaterating');
                    $scope.updateRating();
                }
            });



        }
    };
});
/* global angular, console */
'use strict';

angular.module('directiveTest', []);

angular.module('directiveTest').directive('rating', function(){
    // Runs during compile
    return {

        scope: {
            ratingValue : '='
        }, // {} = isolate, true = child, false/undefined = no change

        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment

        template:
            '<ul>' +
                '<li ng-repeat="star in stars" ng-class="star.status" ng-click="setRating($index)">\u2605</li>' +
            '</ul>',

        link: function($scope, iElm, iAttrs, controller) {

            $scope.maxStars = 5;

            $scope.updateRating = function() {
                $scope.stars = [];
                for (var i = 0; i < $scope.maxStars; i += 1) {
                    $scope.stars.push({
                        status: (i < $scope.ratingValue) ? 'filled' : ''
                    });
                }
            };
            $scope.updateRating();

            $scope.$watch('ratingValue', function(newValue, oldValue, scope) {
                if (newValue) {
                    $scope.updateRating();
                }
            });

            $scope.setRating = function(index){
                $scope.ratingValue = index + 1;
                // $scope.updateRating();
            };
        }
    };
});
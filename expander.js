/* global angular, console */
'use strict';

angular.module('directiveTest', []);

angular.module('directiveTest').controller('testController', function($scope) {
    $scope.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatem, perferendis, quos eius iure autem voluptate fugit et placeat asperiores neque sit accusantium pariatur ab amet reiciendis dicta delectus harum tempora quaerat. Perspiciatis, iure, molestias dolorum repellat possimus blanditiis harum eveniet praesentium reprehenderit sed vitae voluptatem quos laudantium unde magnam!';
    $scope.header = "hey...I'm the header";
});

angular.module('directiveTest').directive('expander', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            heading: '@'
        }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<div class="heading" ng-click="toggle()"> {{ heading }}' +
                            '<div class="innerText" ng-show="showInner" ng-transclude>' +
                            '</div>' +
                        '</div>',
        // templateUrl: '',
        // replace: true,
        transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            $scope.showInner = false;
            $scope.toggle = function() {
                $scope.showInner = !$scope.showInner;
            };
        }
    };
});


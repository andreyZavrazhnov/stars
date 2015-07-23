angular.module('starRating', [
])

    .directive('starRating', function () {
        'use strict';

        return {
            restrict: 'A',
            scope: {
                rating: '='
            },
            template: '<span data-ng-repeat="starType in handleStarTypes()" class="{{starType}}"></span>',
//            templateUrl: '/app/common/starRating/starRating.tpl.html',

            controller: function ($scope) {
                $scope.handleStarTypes = function () {
                    var starCount = parseFloat($scope.rating),
                        array = {},
                        roundRating = Math.round($scope.rating),
                        i;

                    for (i = 1; i <= roundRating; i++) {
                        if (i === roundRating && starCount !== roundRating) {
                            array[i] = 'icon-star-half';
                        } else {
                            array[i] = 'icon-star-full';
                        }
                    }
                    return array;
                };
            }
        };
    });





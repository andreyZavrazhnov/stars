describe('starRating -', function () {
    'use strict';

    var elem,
        compiledElem;

    beforeEach(module('starRating'));
    beforeEach(inject(function ($rootScope, $compile) {
        elem = angular.element('<span star-rating />');
        compiledElem = $compile(elem)($rootScope);
        $rootScope.$apply();
    }));

    describe('starRating directive', function () {

        it('should be available', function () {
            expect(compiledElem.isolateScope()).toBeDefined();
        });

        it('should show half of the star at the rating', function () {
            compiledElem.isolateScope().rating = 1.2;
            expect(angular.equals(compiledElem.isolateScope().handleStarTypes(), {1: 'icon-star-half'})).toBe(true);
        });

        it('should show 1 full star at the rating', function () {
            compiledElem.isolateScope().rating = 1;
            expect(angular.equals(compiledElem.isolateScope().handleStarTypes(), {1: 'icon-star-full'})).toBe(true);
        });

        it('should show 2 full stars and a half at the rating', function () {
            compiledElem.isolateScope().rating = 3.2;
            expect(angular.equals(compiledElem.isolateScope().handleStarTypes(), {1: 'icon-star-full', 2: 'icon-star-full', 3: 'icon-star-half'})).toBe(true);
        });

        it('should show 3 full stars at the rating', function () {
            compiledElem.isolateScope().rating = 3;
            expect(angular.equals(compiledElem.isolateScope().handleStarTypes(), {1: 'icon-star-full', 2: 'icon-star-full', 3: 'icon-star-full'})).toBe(true);
        });
    });
});
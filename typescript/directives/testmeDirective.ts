/// <reference path="../reference.ts" />

myApp.directives.directive('progressbar',function():ng.IDirective{
    return {
        restrict: 'EAC',
        template: testme.html,
        scope: {
            progress: '='
        }
    }
})
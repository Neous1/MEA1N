angular.module("meanhotel").directive("navigation", mhNavigation);

function mhNavigation(){
    return{
        restrict: "E",
        templateUrl: "angular-app/navigation-directive/navigation-directive.html"
    };
}
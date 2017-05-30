angular.module("meanhotel").controller("HotelsController", HotelsController);

function HotelsController($http, $routeParams){
    var vm = this;
    var id = $routeParams.id;
    $http.get("/api/hotel/" + id).then(function(response){
        vm.hotel = response.data
    });
}
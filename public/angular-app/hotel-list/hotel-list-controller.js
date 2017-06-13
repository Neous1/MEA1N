angular.module('meanhotel').controller("HotelsController",HotelsController);

function HotelsController(hotelDataFactory){
    var vm = this;
    vm.title = 'MEA1N Hotel App';
    hotelDataFactory.hotelList().then(function(response){
        vm.hotels = response.data;
    });
}
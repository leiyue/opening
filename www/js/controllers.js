angular.module('opening.controllers', [])

    .controller('HomeCtrl', function ($scope, $http, $ionicPopup) {
        var vm = $scope.vm = {};

        vm.user = {};
        vm.submit = function (user) {
            console.log(user);
            $ionicPopup.alert({
                title: 'POST数据测试',
                template: JSON.stringify(user),
                okText: '确定',
                okType: 'button-energized'
            }).then(function(res){
                $http({
                    url: '/data/success.json',
                    //url: '/data/failure.json',
                    method: "GET"
                    //method: "POST",
                    //data: user
                }).success(function (data) {
                    $ionicPopup.alert({
                        title: data.status ? '操作成功':'操作失败',
                        template: JSON.stringify(data),
                        okText: '确定',
                        okType: 'button-energized'
                    });
                });
            });
        }
    });
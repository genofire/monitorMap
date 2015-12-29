'use strict';

angular.module('monitormapApp')
	.controller('GroupCtrl', ['$scope','$rootScope','socket',function ($scope, $rootScope, socket) {
		$scope.list = [];
		$scope.glist = [];
		var empty_entry = {new:false};
		$scope.obj = empty_entry;


		$scope.setObj = function(item){
			item = JSON.parse(JSON.stringify(item));
			$scope.obj = item;
		}
		socket.emit('node:list',function(result){
			$scope.list = result.list;
		});
		socket.emit('node:group:list',function(result){
			$scope.glist = result.list;
		});
		$scope.set = function(){
			socket.emit('node:group:set',$rootScope.passphrase,$scope.obj,function(result){
				if(result.s)
					$scope.setObj(empty_entry);
			})
		}
	}]);
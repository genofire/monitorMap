angular.module("monitormapApp",["ui.router","btford.socket-io","leaflet-directive","tableSort"]).factory("socket",function(a){return a({prefix:"",ioSocket:io.connect({path:"/ws"})})}),angular.module("monitormapApp").config(["$stateProvider",function(a){a.state("list",{templateUrl:"app/list.html",controller:"ListCtrl"})}]),angular.module("monitormapApp").controller("ListCtrl",["$scope","socket",function(a,b){a.list=[],b.emit("node:list",function(b){a.list=b.list})}]);
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log, $http){
	// $http.get("roles.json").success(function (response) { $scope.data=response; });
	
	$.getJSON( "roles.json", function( data ) {
	  $scope.data = data
	});
	$log.log($scope.data);
});


const roles = {


}

  // const CUPID = ["Cupid","", false], BAO_VE = ["Bảo vệ", "Bảo vệ", true], SOI = ["Sói", "Cắn", false], SOI_NGUYEN = ["Sói nguyền", "Nguyền", true], TIEN_TRI = ["Tiên tri", "Soi", false],
  //   PHU_THUY = ["Phù thủy", ["Phù thủy cứu", "Phù thủy giết"], [true, false]], THO_SAN = ["Thợ săn", "Thợ săn kéo", false], QUA = ["Quạ", "Quạ mổ", false], LIEU = ["Liễu", "Liễu", false], GIA_LANG = ["Già làng", "", false],
  //   DAN = ["Dân", "", false], CON_HOANG = ["Con hoang", "", false], TROM = ["Trộm", "", false];
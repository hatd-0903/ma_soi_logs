var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope, $log, $filter) {
  $scope.all_roles = ALL_ROLES;
  $scope.active_roles = []
  $scope.new_role = 0;
  $scope.status = 0;
  $scope.members = [];
  $scope.columns = {
    actions: [],
    action_types: []
  };

  $scope.$watch('new_role', function(){
    var role = $filter('filter')($scope.all_roles, {id: $scope.new_role})[0]
    if (role && $filter('filter')($scope.active_roles, {id: role.id}).length < 1) {
      $scope.active_roles = $scope.active_roles.concat(role)
    }
  });

  $scope.deleteRoleClick = function (id) {
    $scope.active_roles.pop($filter('filter')($scope.active_roles, {id: id}))
  }

  $scope.generateDateClick = function () {
    $scope.status = 1;
    passing_member($scope.active_roles, $scope.members);
    passing_column($scope.active_roles, $scope.columns);
    setTimeout(function(){
      $('.select-member').select2({
        width: '100%'
      }
    ); }, 1000);
    $log.log($scope.members);
  }
  $scope.dmText = function (input) {
    return input.slice(0, input.length - 1)
  }
  $scope.aaa = function print() {
    const filename  = 'ThisIsYourPDFFilename.pdf';

    html2canvas(document.querySelector('#pdfNo')).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
    });
  }

});

// myApp.filter('nameFilter', function(){
//   return function(input) {
//     debugger;
//     var arr = input.split(',');
//     return arr;
//   };
// });

function print() {
    const filename  = 'ThisIsYourPDFFilename.pdf';

    html2canvas(document.querySelector('#pdfNo')).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      // pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
    });
  }

function passing_member (data_in, data_out) {
  var i = 0;
  data_in.forEach(function(data){
    data.member.split(",").forEach(function(name){
      data_out.push(setMember(i, name))
      i++
    })
  })
};

function passing_column (data_in, data_out) {
  data_in.forEach(function(data){
    data_out["actions"] = data_out["actions"].concat(data.actions);
    data_out["action_types"] = data_out["action_types"].concat(data.action_types);
  })
}

function setMember(id, name, role = "role_dan") {
  return {id: id, name: name, die: false, role: role}
};

var memberObj = {
  name: "",
  die: false,
  role: "role_dan"
};

// var role_dan
$(document).ready(function() {
    $('.select-new-role').select2();
});

$(document).change(function() {
    $('.select-member').select2({
      width: '100%'
    });
});

const ALL_ROLES = [
	{
    id: 1,
  	role: "BAO_VE",
  	name: "Bao ve",
  	actions: ["Bao ve"],
  	action_types: ["checkbox"],
    member: ""
  },
  {
    id: 2,
    role: "CUPID",
    name: "Cupid",
    actions: [],
    action_types: [],
    member: ""
  },
  {
    id: 3,
    role: "SOI",
    name: "Soi",
    actions: ["Can"],
    action_types: ["text"],
    member: ""
  },
  {
    id: 4,
    role: "SOI_NGUYEN",
    name: "Soi nguyen",
    actions: ["Nguyen"],
    action_types: ["checkbox"],
    member: ""
  },
  {
    id: 5,
    role: "TIEN_TRI",
    name: "Tien tri",
    actions: ["Soi"],
    action_types: ["text"],
    member: ""
  },
  {
    id: 6,
    role: "PHU_THUY",
    name: "Phu thuy",
    actions: ["Cuu", "Giet"],
    action_types: ["checkbox", "text"],
    member: ""
  },
  {
    id: 7,
    role: "THO_SAN",
    name: "Tho san",
    actions: ["Keo"],
    action_types: ["text"],
    member: ""
  }

]

  // const CUPID = ["Cupid","", false], BAO_VE = ["Bảo vệ", "Bảo vệ", true], SOI = ["Sói", "Cắn", false], SOI_NGUYEN = ["Sói nguyền", "Nguyền", true], TIEN_TRI = ["Tiên tri", "Soi", false],
  //   PHU_THUY = ["Phù thủy", ["Phù thủy cứu", "Phù thủy giết"], [true, false]], THO_SAN = ["Thợ săn", "Thợ săn kéo", false], QUA = ["Quạ", "Quạ mổ", false], LIEU = ["Liễu", "Liễu", false], GIA_LANG = ["Già làng", "", false],
  //   DAN = ["Dân", "", false], CON_HOANG = ["Con hoang", "", false], TROM = ["Trộm", "", false];

  // {
  // 	"role": "BAO_VE",
  // 	"name": "Bao ve",
  // 	"action": ["Bao ve"],
  // 	"action_type": "checkbox"
  // },

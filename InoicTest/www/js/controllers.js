angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  // alert(window.innerHeight);
  // alert($("#zkmoney").html());
  $("#zkmoney").height(window.innerHeight*0.6);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
   $scope.imageData = Chats.get($stateParams.imageData);
})

.controller('AccountCtrl', function($scope) {
  // alert("aa");
  $("body").on("change","#account_type", function() {
    alert($(".account_type").val());
  
    });
})


.controller('xiaofeCtrl', function($scope,$stateParams) {
  // alert("aa");
   $scope.imageData = $stateParams.imageData;
})

.controller("TestExampleController", function($scope, $cordovaBarcodeScanner) {
    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
        alert("test");
        //用户显示到输入消费金额页面
        $.post("#/tab/getpowers",
            {},
            function(date){
              if(date.mes=='success'){
                alert("成功");
              }else if(date.mes=='error'){
                alert("失败");
              }else{
                alert("用于抓取数据");
                window.location.href="#/tab/xiaofe/imageData="+imageData.text;
              }
          })
        //用于点击确定按钮跳转
        $("body").on("click","#xiaofefrom", function() {
          alert($("#xiaofemoney").val());
          $.post("#/tab/returnMess",
            {},
            function(date){
              if(date.mes=='success'){
                alert("成功");
              }else if(date.mes=='error'){
                alert("失败");
              }else{
                alert("提交金额");
                window.location.href="#/tab/returnMess"
              }
          })
        });
      }, function(error) {
      console.log("An error happened -> " + error);
      });

    };
});

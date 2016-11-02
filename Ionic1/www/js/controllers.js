angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
  $scope.chat = Chats.get($stateParams.chatId);
  jQuery('#output').qrcode("http:/'./jetienne.com?stateParams="+$stateParams.chatId);
})


.controller('inputCtrl', function($scope, $stateParams, Chats) {
  // $scope.chat = Chats.get($stateParams.cardId);
  // alert($stateParams.cardId);
  // alert($scope.cardId);
  $("body").on("click","#powerfrom", function() {
    $other_tel=$("#other_tel").val();
    $other_money=$("#other_money").val();
    $other_startDate=$("#other_startDate").val();
    $other_endDate=$("#other_endDate").val();
    $own_cardID=$("#own_cardID").val();
    // alert($other_endDate);
    alert($scope.name)
    var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
     // flag =ture;
    if (reg.test($other_tel)) {
          alert("号码正确~");
     }else{
          alert("号码有误~");
          flag = false;
     };
    $.post("#/tab/getpowers",
      {'other_tel':$other_tel,
        'cardId':$stateParams.cardId,
        'other_money':$other_money,
        'other_startDate':$other_startDate,
        'other_endDate':$other_endDate,
        'own_cardID':$own_cardID},
        function(date){
          alert(date.mes);
          if(date.mes=='success'){
            alert("成功");
          }else if(date.mes=='error'){
            alert("失败");
          }else{
            alert("测试用的，可以删除");
            window.location.href="#/tab/cardreturn"
          }
        
        })
  });
})


.controller('CardDetailCtrl', function($scope,CardDetail) {
 $scope.cardDetail = CardDetail.all();
 // alert($scope.cardDetail);
});

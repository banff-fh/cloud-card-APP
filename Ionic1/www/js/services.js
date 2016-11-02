angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
   // var chats;
   //  $.ajax({
   //     type: "GET",
   //     url: "http://192.168.1.106:8080/cloudcard/control/test",
   //     data: {"idToFind":"10001"},
   //     // dataType: "json",
   //     dataFilter: function(data){
   //        console.log("raw data: "+data);
   //        var idx =  data.indexOf("//");
   //        if(data && /^\s*\/\/.*/.test(data) && idx>-1){
   //          data = data.substring(idx+2);
   //        }
   //        return data;
   //     },
   //     success: function(data){
   //       alert("i'm here!!!!");
   //       console.log(data);
   //         chats = [{
   //          id: data.id,
   //          name: data.name,
   //          lastText: data.lastText,
   //          face: data.face
   //        }]
   //     },
   //     error:function (e) {
   //      alert("aaaa"+e);
   //      console.log(e);
   //    }
   //  });




  // Some fake testing data
  chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: '111',
    face: 'img/01.jpg'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/01.jpg'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: '222',
    face: 'img/01.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: '444',
    face: 'img/01.jpg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: '666',
    face: 'img/01.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('CardDetail', function() {
  // Might use a resource here that returns a JSON array
   // var chats;
   //  $.ajax({
   //     type: "GET",
   //     url: "http://192.168.1.106:8080/cloudcard/control/test",
   //     data: {"idToFind":"10001"},
   //     // dataType: "json",
   //     dataFilter: function(data){
   //        console.log("raw data: "+data);
   //        var idx =  data.indexOf("//");
   //        if(data && /^\s*\/\/.*/.test(data) && idx>-1){
   //          data = data.substring(idx+2);
   //        }
   //        return data;
   //     },
   //     success: function(data){
   //       alert("i'm here!!!!");
   //       console.log(data);
   //         chats = [{
   //          id: data.id,
   //          name: data.name,
   //          lastText: data.lastText,
   //          face: data.face
   //        }]
   //     },
   //     error:function (e) {
   //      alert("aaaa"+e);
   //      console.log(e);
   //    }
   //  });



  // Some fake testing data
  chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: '222',
    face: 'img/01.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/01.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: '333',
    face: 'img/01.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: '6666',
    face: 'img/01.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: '888',
    face: 'img/01.png'
  }];

  return {
    all: function() {
      // alert(chats);
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

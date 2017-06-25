function createRoom(roomName) {
    roomName = $('#roomNameInput').val();
    var user = firebase.auth().currentUser
    if(user) {
        firebase.database().ref('rooms/' + roomName).set({
            ownerId: user.uid,
        });
        SubscribeToRoom(roomName, user.uid);
        console.log('created a room in firebase');
    }
}

function createMessage(roomName, message) {
  roomName = $('#sengMsgRoomName').val();
  message = $('#sendMsgMessage').val();

  var msgContent = "ส่งจากห้อง" + roomName;

    var user = firebase.auth().currentUser
    if(user) {
        var postData = {
            message: message,
            createdAt: new Date().toLocaleString()
        };

        var newPostKey = firebase.database().ref().child('rooms/' + roomName + '/messages').push().key;

        var updates = {};
        updates['/rooms/' + roomName + '/messages/' + newPostKey] = postData;

        var notificationMessage = 
        {
          "app_id": "5eb5a37e-b458-11e3-ac11-000c2940e62c",
          "filters": [
            {
              "room_name": roomName
            }
          ],
          "data": {"foo": "bar"},
          "contents": {"en": "English Message"}
        };
        sendNotification(notificationMessage);

        return firebase.database().ref().update(updates);
    }
}

function retrieveMessages(roomName) {
  roomName = $('#readRoomNameInput').val();
  $('#messagesRow').empty();
  var ref = firebase.database().ref('/rooms/' + roomName + '/messages/').once('value').then(function(snapshot) {
    var prospectId = snapshot.key ;

    snapshot.forEach(function(snapshot1) {
      console.log(snapshot1.key); // e.g. "http://..."
      console.log(snapshot1.val().message); // "pne"
      var createdAt = snapshot1.val().createdAt;
      var message = snapshot1.val().message;
      $('#messagesRow').append('<tr><td>' + createdAt + '</td><td>' + message + '</td></tr>');
    });
  });
}

function retrieveRooms() {
  roomName = $('#readRoomNameInput').val();
  $('#roomsRow').empty();
  var ref = firebase.database().ref('/rooms/').once('value').then(function(snapshot) {
    var prospectId = snapshot.key ;

    snapshot.forEach(function(snapshot1) {
      console.log(snapshot1.key); // e.g. "http://..."
      var room = snapshot1.key;
      $('#roomsRow').append('<tr><td>' + room + '</td></tr>');
    });
  });
}

$(function(){
  retrieveRooms();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            console.log(uid)
        } else {
            console.log("Can not login anonymously")
        }
    });

    firebase.auth().signInAnonymously().catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + ":" +errorMessage)
    });

});

$.material.init()
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

        var notificationMessage = { 
          app_id: "00166562-147d-4eaa-95ae-49788c7c9744",
          contents: {msgContent: message},
          filters: [
              {
                "room_name": roomName
              }
          ]
        };
        sendNotification(notificationMessage);

        return firebase.database().ref().update(updates);
    }
}

$(function(){

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

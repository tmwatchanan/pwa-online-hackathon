$('#createRoomButton').click(function(){
  createRoom($(this)[0].value, 123);
})

function createRoom(roomName, ownerId) {
  firebase.database().ref('rooms/' + roomName).set({
    ownerId: ownerId,
  });
  SubscribeToRoom(roomName);
}

function createMessage(roomName, message) {
  var postData = {
    message: message,
    createdAt: new Date().toLocaleString()
  };

  var newPostKey = firebase.database().ref().child('rooms/' + roomName).push().key;

  var updates = {};
  updates['/rooms/' + roomName + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}


$.material.init()

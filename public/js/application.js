function createRoom(roomName, ownerId) {
  firebase.database().ref('rooms/' + roomName).set({
    ownerId: ownerId,
  });
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

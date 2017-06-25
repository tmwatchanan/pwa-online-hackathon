$("#createRoomButton").click(function(){
    createRoom('test');
});

$(function(){

    function createRoom(roomName) {
      roomName = $('#roomNameInput').val();
      
        var user = firebase.auth().currentUser
        if(user) {
            firebase.database().ref('rooms/' + roomName).set({
                ownerId: user.uid,
            });
        }
    }

    function createMessage(roomName, message) {
        var user = firebase.auth().currentUser
        if(user) {
            var postData = {
                message: message,
                createdAt: new Date().toLocaleString()
            };

            var newPostKey = firebase.database().ref().child('rooms/' + roomName).push().key;

            var updates = {};
            updates['/rooms/' + roomName + '/' + newPostKey] = postData;

            return firebase.database().ref().update(updates);
        }
    }

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

function SubscribeToRoom(roomName, userId) {
    var welcomeMsg = 'คุณได้ยืนยันรับข้อความแจ้งเตือนจาก ' + roomName + '\nขอบคุณมากครับ';
    console.log("In SubscribeToRoom:" + welcomeMsg);
    var OneSignal = window.OneSignal || [];
    OneSignal.push(["sendTags", {
      user_ud: userId,
      room_name: roomName
    }]);
    OneSignal.push(["init", {
        appId: "00166562-147d-4eaa-95ae-49788c7c9744",
        autoRegister: false,
        notifyButton: {
            enable: false /* Set to false to hide */
        },
        welcomeNotification: {
            title: 'CMU.Today - Realtime Check-in',
            message: welcomeMsg
        },
    }]);
}

function sendNotification(messageJson) {
  $.post("https://onesignal.com/api/v1/notifications", messageJson)
}
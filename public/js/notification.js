function SubscribeToRoom(roomName) {
    var welcomeMsg = 'คุณได้ยืนยันรับข้อความแจ้งเตือนจาก ' + roomName + '\nขอบคุณมากครับ';
    
    var OneSignal = window.OneSignal || [];
    OneSignal.push(["sendTag", "room_name", roomName])
    OneSignal.push(["init", {
        appId: "00166562-147d-4eaa-95ae-49788c7c9744",
        autoRegister: false,
        notifyButton: {
            enable: hide /* Set to false to hide */
        },
        welcomeNotification: {
            title: 'CMU.Today - Realtime Check-in',
            message: welcomeMsg
        },
    }]);
}
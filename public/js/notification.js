

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

var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = { 
  app_id: "00166562-147d-4eaa-95ae-49788c7c9744",
  contents: {"en": "English Message"},
  filters: [
	  	{"field": "tag"}
	]
};

sendNotification(message);
/**
 * Created by ruiyun on 11/10/14.
 */


(function (maodou, Moxtra, CryptoJS) {
    //Private Property

    // Create Signature
    var client_id = "uGvPYrH651o";
    var client_secret = "pIWm8f-u91g";
    var timestamp = new Date().getTime();

    //public Property
    maodou.meetSettings = {
        containerId: "meet-container",
        width: "720px",
        height: "300px",
        extension: {"show_dialogs": {"meet_invite": true}}
    };

    //Public Method
    maodou.startMeet = function (user) {
        maodou.getToken(user, startMeet);
    };

    maodou.joinMeet = function (user) {
        maodou.getToken(user, joinMeet);
    };

    // Initialize user and get access token
    maodou.getToken = function (user, callback) {

        var hash = CryptoJS.HmacSHA256(client_id + user.id + timestamp, client_secret);
        var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');

        var init_options = {
            uniqueid: user.id || "",
            firstname: user.firstName || "",
            lastname: user.lastName || "",
            pictureurl: user.pictureUrl || "http://maodou.io/assets/maodou.png",
            timestamp: timestamp,
            signature: signature,
            get_accesstoken: function (result) {
                console.log("access_token: " + result.access_token + " expires in: " + result.expires_in);
                if (typeof callback === "function") {
                    callback(user, result.access_token);
                }
            },
            error: function (result) {
                console.log("error code: " + result.error_code + " message: " + result.error_message);
            }
        };
        Moxtra.setup(init_options);
    };

    //Private Method
    var startMeet = function (user, access_token) {
        var meet_options = {
            iframe: true, //To open the meet in the same window within an iFrame.
            tagid4iframe: maodou.meetSettings.containerId, // Refer https://developer.grouphour.com/moxo/docs-js-sdk/#meet
            iframewidth: maodou.meetSettings.width,
            iframeheight: maodou.meetSettings.height,
            border: maodou.meetSettings.border || false,
            extension: maodou.meetSettings.extension,
            access_token: access_token,
            start_meet: function (event) {
                console.log("Meet Started - session_id: " + event.session_id + "session_key: " + event.session_key);
                //Your application server can upload files to meet using the session_id and session_key
            },
            error: function (event) {
                console.log("error code: " + event.error_code + " message: " + event.error_message);
            },
            end_meet: function (event) {
                console.log("Meet Ended");
            }
        };
        Moxtra.meet(meet_options);
    };

    var joinMeet = function (user, access_token) {
        var options = {
            session_key: (user.meetingKey || "").split(' ').join(''),
            iframe: true,
            tagid4iframe: maodou.meetSettings.containerId, // Refer https://developer.grouphour.com/moxo/docs-js-sdk/#meet
            iframewidth: maodou.meetSettings.width,
            iframeheight: maodou.meetSettings.height,
            border: maodou.meetSettings.border || false,
            extension: maodou.meetSettings.extension,
            access_token: access_token,
            start_meet: function (event) {
                //alert("session key: " + event.session_key + " session id: " + event.session_id);
            },
            error: function (event) {
                alert("error code: " + event.error_code + " message: " + event.error_message);
            },
            end_meet: function (event) {
                alert("Meet ended by host event");
            },
            exit_meet: function (event) {
                alert("Meet exit event");
            }
        };
        Moxtra.joinMeet(options);
    };

}(window.maodou = window.maodou || {}, Moxtra, CryptoJS));
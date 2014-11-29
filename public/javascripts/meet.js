/**
 * Created by ruiyun on 11/10/14.
 */


/*

 Event in meet: start/end/join/leave
 {action: "end", binder_id: "BjuZ7mTdUpT1aWsTXJGuemK", session_key: "304849769", session_id: "40a777a4-06a1-40e5-b6c8-59f7a88c7a82", meet_id: "304849769"}

 */



(function (maodou, Moxtra, CryptoJS) {
    //Private Property

    // Create Signature
    //moxtra.com
    //var client_id = "uGvPYrH651o";
    //var client_secret = "pIWm8f-u91g";

    //grouphour.com
    var client_id = "lu9gyOkcLX0";
    var client_secret = "pGSuDGTBSP8";
    var org_id = "P1Nqcw4AEBt6zgOFKGOALh8";

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

        var unique_id = user.id || "guest";
        var hash = CryptoJS.HmacSHA256(client_id + unique_id + timestamp, client_secret);
        var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');

        var init_options = {
            uniqueid: unique_id,
            firstname: user.firstName || $.t('guest'),
            lastname: user.lastName || "",
            pictureurl: user.pictureUrl || "http://maodou.io/assets/maodou.png",
            timestamp: timestamp,
            signature: signature,
            orgid: org_id,
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

    maodou.eventHandler = function (event) {
        console.log("event: " + JSON.stringify(event));
    };

    //Private Method
    var startMeet = function (user, access_token) {
        var meet_options = {
            iframe: true, //To open the meet in the same window within an iFrame.
            tagid4iframe: maodou.meetSettings.containerId, // Refer https://developer.grouphour.com/moxo/docs-js-sdk/#meet
            allowfullscreen: true,
            webkitallowfullscreen: true,
            mozallowfullscreen: true,
            iframewidth: maodou.meetSettings.width,
            iframeheight: maodou.meetSettings.height,
            border: maodou.meetSettings.border || false,
            extension: maodou.meetSettings.extension,
            access_token: access_token,
            start_meet: function (event) {
                console.log("Meet Started - session_id: " + event.session_id + "session_key: " + event.session_key);
                maodou.eventHandler(event);
                //Your application server can upload files to meet using the session_id and session_key
            },
            error: function (event) {
                console.log("error code: " + event.error_code + " message: " + event.error_message);
                maodou.eventHandler(event);
            },
            end_meet: function (event) {
                console.log("Meet Ended");
                maodou.eventHandler(event);
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
                console.log("Started session key: " + event.session_key + " session id: " + event.session_id);
                maodou.eventHandler(event);
            },
            error: function (event) {
                console.log("error code: " + event.error_code + " message: " + event.error_message);
                maodou.eventHandler(event);
            },
            end_meet: function (event) {
                console.log("Meet ended by host event");
                maodou.eventHandler(event);
            },
            exit_meet: function (event) {
                console.log("Meet exit event");
                maodou.eventHandler(event);
            }
        };
        Moxtra.joinMeet(options);
    };

}(window.maodou = window.maodou || {}, Moxtra, CryptoJS));
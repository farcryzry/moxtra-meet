/**
 * Created by ruiyun on 11/18/14.
 */
function eventFire(e, t) {
    if (e.fireEvent) e.fireEvent("on" + t);
    else {
        var n = document.createEvent("Event");
        n.initEvent(t, !1, !1), e.dispatchEvent(n)
    }
}

function triggerEvent(e, t) {
    var n;
    document.createEvent ? (n = document.createEvent("Event"), n.initEvent(t, !1, !1)) : document.createEventObject && (n = document.createEventObject(), n.eventType = t), n.eventName = t, e.dispatchEvent ? e.dispatchEvent(n) : e.fireEvent && htmlEvents["on" + t] ? e.fireEvent("on" + n.eventType, n) : e[t] ? e[t]() : e["on" + t] && e["on" + t]()
}

function loadScript(e, t) {
    var n = document.createElement("script");
    n.type = "text/javascript", n.readyState ? n.onreadystatechange = function() {
        ("loaded" == n.readyState || "complete" == n.readyState) && (n.onreadystatechange = null, t && "function" == typeof t && t())
    } : n.onload = function() {
        t && "function" == typeof t && t()
    }, n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
}

function getInternetExplorerVersion() {
    var e = -1;
    if ("Microsoft Internet Explorer" == navigator.appName) {
        var t = navigator.userAgent,
            n = RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        null != n.exec(t) && (e = parseFloat(RegExp.$1))
    } else if ("Netscape" == navigator.appName) {
        var t = navigator.userAgent,
            n = RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
        null != n.exec(t) && (e = parseFloat(RegExp.$1))
    }
    return e
}
"undefined" == typeof JSON && loadScript("json.js", null), window.Moxtra_Session || (window.Moxtra_Session = {});
var JSONfn;
JSONfn || (JSONfn = {}), JSONfn.stringify = function(e) {
    return JSON.stringify(e, function(e, t) {
        return "function" == typeof t ? "" + t : t
    })
}, JSONfn.parse = function(str) {
    return JSON.parse(str, function(key, value) {
        return "string" != typeof value ? value : "function" == value.substring(0, 8) ? eval("(" + value + ")") : value
    })
}, Moxtra_Session.set = function(e, t) {
    if (window.sessionStorage) {
        var n = JSONfn.stringify(t);
        sessionStorage.setItem(e, n)
    }
}, Moxtra_Session.get = function(e) {
    if (window.sessionStorage) {
        var t = sessionStorage.getItem(e);
        return t ? JSONfn.parse(t) : null
    }
}, Moxtra_Session.remove = function(e) {
    if (window.sessionStorage) {
        sessionStorage.removeItem(e)
    }
}, Moxtra_Session.clear = function() {
    window.sessionStorage && sessionStorage.clear()
}, window.Moxtra || (window.Moxtra = {}), Moxtra.baseUrl = "https://www.moxtra.com", Moxtra.ssoUrl = Moxtra.baseUrl + "/sp/startSSO";
var htmlEvents = {
    onload: 1,
    onunload: 1,
    onblur: 1,
    onchange: 1,
    onfocus: 1,
    onreset: 1,
    onselect: 1,
    onsubmit: 1,
    onabort: 1,
    onkeydown: 1,
    onkeypress: 1,
    onkeyup: 1,
    onclick: 1,
    ondblclick: 1,
    onmousedown: 1,
    onmousemove: 1,
    onmouseout: 1,
    onmouseover: 1,
    onmouseup: 1
};
Moxtra.addListener = function(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && htmlEvents["on" + t] ? e.attachEvent("on" + t, n) : e["on" + t] = n
}, Moxtra.removeListener = function(e, t, n) {
    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && htmlEvents["on" + t] ? e.detachEvent("on" + t, n) : e["on" + t] = null
}, Moxtra._JOINUrl = function(e) {
    var t = e.joinURL;
    return t
}, Moxtra._SSOUrl = function(e, t) {
    var n = "websdk";
    e && e.type && (n = e.type);
    var o, r = encodeURIComponent(window.location.protocol + "//" + window.location.host);
    1 == t ? (e && e.email ? (o = e && e.refresh_binder_id ? Moxtra.baseUrl + "/service/#meet/" + e.refresh_binder_id + "?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r : Moxtra.baseUrl + "/service/#api.startMeet?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r, o = o + "&email=" + encodeURIComponent(e.email)) : e && e.unique_id ? (o = e && e.refresh_binder_id ? Moxtra.baseUrl + "/service/#meet/" + e.refresh_binder_id + "?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r : Moxtra.baseUrl + "/service/#api.startMeet?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r, o = o + "&unique_id=" + encodeURIComponent(e.unique_id)) : o = e && e.refresh_binder_id ? Moxtra.baseUrl + "/service/#meet/" + e.refresh_binder_id + "?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r : Moxtra.baseUrl + "/service/#start?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r, e && e.schedule_binder_id && (o = o + "&schedule_binder_id=" + e.schedule_binder_id)) : 2 == t ? (o = e && e.noterefresh_binder_id ? Moxtra.baseUrl + "/service/#note/" + e.noterefresh_binder_id + "?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r : Moxtra.baseUrl + "/service/#record?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r, e && e.binder_id && (o = o + "&binder_id=" + e.binder_id)) : 3 == t ? (o = e && e.binder_id ? Moxtra.baseUrl + "/service/#api.chat/" + e.binder_id : Moxtra.baseUrl + "/service/#api.startChat", o = o + "?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r, e && e.email ? o = o + "&email=" + encodeURIComponent(e.email) : e && e.unique_id && (o = o + "&unique_id=" + encodeURIComponent(e.unique_id)), e && e.binder_name && (o = o + "&binder_name=" + encodeURIComponent(e.binder_name))) : 4 == t ? (o = Moxtra.baseUrl + "/service/#login?header=0&client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r, e && e.binder_id && (o = o + "&binder_id=" + e.binder_id)) : 5 == t ? (o = Moxtra.baseUrl + "/service/#api.timeline", e && e.binder_id && (o = o + "/" + e.binder_id), o = o + "?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r) : 6 == t ? (o = e && e.binder_id ? Moxtra.baseUrl + "/service/#api.annotate/" + e.binder_id : Moxtra.baseUrl + "/service/#api.startAnnotate", o = o + "?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r, e && e.binder_name && (o = o + "&binder_name=" + encodeURIComponent(e.binder_name))) : 7 == t && (o = Moxtra.baseUrl + "/service/#api.endMeet/" + e.session_key + "?client_id=" + Moxtra.clientId + "&type=" + n + "&origin=" + r), e && e.extension && (o = o + "&extension=" + encodeURIComponent(JSON.stringify(e.extension)));
    var i;
    return e && e.access_token ? i = o + "&access_token=" + e.access_token : Moxtra.appKey ? Moxtra._barlogin ? i = o : (i = Moxtra.ssoUrl + "?idpid=" + Moxtra.appKey + "&target=" + encodeURIComponent(o), Moxtra.partnerId ? i += "&partnerid=" + Moxtra.partnerId : Moxtra.orgId && (i += "&orgid=" + Moxtra.orgId)) : i = e && e.token ? Moxtra.baseUrl.indexOf("grouphour.com") < 0 ? Moxtra.baseUrl + "/login?token=" + encodeURIComponent(e.token) + "&loginUrl=" + encodeURIComponent(e.loginUrl) + "&type=" + n + "&client_id=" + Moxtra.clientId + "&origin=" + r + "&backUrl=" + encodeURIComponent(o) : Moxtra.baseUrl + "/service/#login?token=" + encodeURIComponent(e.token) + "&loginUrl=" + encodeURIComponent(e.loginUrl) + "&type=" + n + "&client_id=" + Moxtra.clientId + "&origin=" + r + "&backUrl=" + encodeURIComponent(o) : o, i
}, Moxtra._parseURL = function(e) {
    for (var t, n = /[?#&]([^=#]+)=([^&#]*)/g, o = {}; t = n.exec(e);) o[t[1]] = t[2];
    return o
}, Moxtra._handleMessageFromChatEvent = function(e, t) {
    switch (e.action) {
        case "end":
        case "leave":
            return Moxtra._popupbychat && Moxtra._popupbychat.close(), Moxtra._popupbychat = null, !0;
        case "save_note":
        case "cancel_note":
            return Moxtra._notepopupbychat && Moxtra._notepopupbychat.close(), Moxtra._notepopupbychat = null, !0;
        default:
            return Moxtra._handleMessageEvent(e, t)
    }
}, Moxtra._handleChatMessageEvent = function(e, t, n) {
    switch (e.action) {
        case "fail":
            return "function" == typeof t.error ? (t.error(e), !0) : (n ? (m = document.createEvent("Event"), m.initEvent("ChatError", !1, !1), m.error_code = e.error_code, m.error_message = e.error_message, Moxtra._chat.dispatchEvent(m)) : (m = document.createEvent("Event"), m.initEvent("TimelineError", !1, !1), m.error_code = e.error_code, m.error_message = e.error_message, Moxtra._timeline.dispatchEvent(m)), !0);
        case "view":
            return n ? "function" == typeof t.start_chat ? t.start_chat(e) : Moxtra._chat && document.createEvent && (m = document.createEvent("Event"), m.initEvent("ChatStart", !1, !1), m.binder_id = e.binder_id, m.session_id = e.session_id, Moxtra._chat.dispatchEvent(m)) : "function" == typeof t.view_binder ? t.view_binder(e) : Moxtra._timeline && document.createEvent && (m = document.createEvent("Event"), m.initEvent("BinderView", !1, !1), m.binder_id = e.binder_id, m.session_id = e.session_id, Moxtra._timeline.dispatchEvent(m)), !1;
        case "list":
            return "function" == typeof t.start_timeline ? t.start_timeline(e) : Moxtra._timeline && document.createEvent && (m = document.createEvent("Event"), m.initEvent("TimelineStart", !1, !1), m.session_id = e.session_id, m.binder_id = e.binder_id, Moxtra._timeline.dispatchEvent(m)), !1;
        case "create_binder":
            return "function" == typeof t.create_binder ? t.create_binder(e) : Moxtra._timeline && document.createEvent && (m = document.createEvent("Event"), m.initEvent("BinderCreate", !1, !1), m.session_id = e.session_id, m.binder_id = e.binder_id, Moxtra._timeline.dispatchEvent(m)), !1;
        case "delete_binder":
            return "function" == typeof t.delete_binder ? t.delete_binder(e) : Moxtra._timeline && document.createEvent && (m = document.createEvent("Event"), m.initEvent("BinderDelete", !1, !1), m.session_id = e.session_id, m.binder_id = e.binder_id, Moxtra._timeline.dispatchEvent(m)), !1;
        case "leave_binder":
            return "function" == typeof t.leave_binder ? t.leave_binder(e) : (Moxtra._timeline && document.createEvent && (m = document.createEvent("Event"), m.initEvent("BinderUserLeave", !1, !1), m.session_id = e.session_id, m.binder_id = e.binder_id, Moxtra._timeline.dispatchEvent(m)), Moxtra._chat && document.createEvent && (m.initEvent("BinderUserLeave", !1, !1), m.session_id = e.session_id, m.binder_id = e.binder_id, Moxtra._chat.dispatchEvent(m))), !1;
        case "remove_binder_user":
            return "function" == typeof t.remove_binder_user ? t.remove_binder_user(e) : (Moxtra._timeline && document.createEvent && (m = document.createEvent("Event"), m.initEvent("BinderUserRemove", !1, !1), m.session_id = e.session_id, m.binder_id = e.binder_id, Moxtra._timeline.dispatchEvent(m)), Moxtra._chat && document.createEvent && (m.initEvent("BinderUserRemove", !1, !1), m.session_id = e.session_id, m.binder_id = e.binder_id, Moxtra._chat.dispatchEvent(m))), !1;
        case "request_meet":
            return t.autostart_meet ? (t.from_chat = !0, t.iframe = !1, Moxtra.meet(t)) : "function" == typeof t.request_meet ? t.request_meet(e) : n ? Moxtra._chat && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetRequest", !1, !1), m.binder_id = e.binder_id, Moxtra._chat.dispatchEvent(m)) : Moxtra._timeline && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetRequest", !1, !1), m.binder_id = e.binder_id, Moxtra._timeline.dispatchEvent(m)), !1;
        case "request_note":
            return t.autostart_note ? (t.from_chat = !0, t.iframe = !1, Moxtra.note(t)) : "function" == typeof t.request_note ? t.request_note(e) : n ? Moxtra._chat && document.createEvent && (m = document.createEvent("Event"), m.initEvent("NoteRequest", !1, !1), Moxtra._chat.dispatchEvent(m)) : Moxtra._timeline && document.createEvent && (m = document.createEvent("Event"), m.initEvent("NoteRequest", !1, !1), Moxtra._timeline.dispatchEvent(m)), !1;
        case "invite":
            return "function" == typeof t.invite_member ? t.invite_member(e) : (Moxtra._chat || Moxtra._timeline) && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MemberInvite", !1, !1), m.binder_id = e.binder_id, Moxtra._chat ? Moxtra._chat.dispatchEvent(m) : Moxtra._timeline.dispatchEvent(m)), !1;
        case "share":
            return "function" == typeof t.share && t.share(e), !1
    }
    if (t.extension && t.extension.menus && t.extension.menus[0].page_action)
        for (var o = 0; o < t.extension.menus[0].page_action.length; o++) {
            var r = t.extension.menus[0].page_action[o];
            if (e.action == r.menu_name) {
                "function" == typeof t.page_action ? t.page_action(e) : document.createEvent && (m = document.createEvent("Event"), m.initEvent("page_action", !1, !1), m.action = e.action, m.binder_id = e.binder_id, m.session_id = e.session_id, m.download_url = e.download_url, window.dispatchEvent(m));
                break
            }
        }
    return !1
}, Moxtra._handleMessageEvent = function(e, t) {
    switch (e.action) {
        case "start":
        case "join":
            if (Moxtra.session_key = e.session_key, Moxtra.meet_id = e.meet_id, Moxtra.session_id = e.session_id, Moxtra.joinURL = Moxtra.getJoinMeetURL(e.session_key ? e.session_key : e.meet_id, t.user_name, "websdk", t.access_token, t.extension), t.iframe && t.iframe === !0) {
                if (!t.joinURL)
                    if (t.no_refresh) {
                        t.session_key = e.session_key;
                        var n = Moxtra._SSOUrl(t, 7);
                        Moxtra_Session.set("meet_endurl", n)
                    } else t.refresh_binder_id = e.binder_id, Moxtra_Session.set("meet_refresh", t)
            } else Moxtra_Session.remove("meet_refresh");
            return "function" == typeof t.success ? t.success(e) : "function" == typeof t.start_meet ? t.start_meet(e) : Moxtra._meet && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetSuccess", !1, !1), m.session_key = e.session_key, m.meet_id = e.meet_id, m.session_id = e.session_id, Moxtra._meet.dispatchEvent(m)), !1;
        case "resume_meet":
            return "function" == typeof t.resume_meet ? t.resume_meet(e) : Moxtra._meet && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetResume", !1, !1), m.session_key = e.session_key, m.meet_id = e.meet_id, m.session_id = e.session_id, Moxtra._meet.dispatchEvent(m)), !1;
        case "end":
            if (t)
                if (t.iframe && t.iframe === !0) {
                    var o;
                    t.tagid4iframe && (o = document.getElementById(t.tagid4iframe), o && o.removeChild(Moxtra._iframe)), o || document.body.removeChild(Moxtra._iframe), Moxtra._iframe = null
                } else Moxtra._popup && Moxtra._popup.close(), Moxtra._popup = null;
            return Moxtra.session_id = null, Moxtra_Session.remove("meet_refresh"), "function" == typeof t.end ? t.end(e) : "function" == typeof t.end_meet ? t.end_meet(e) : Moxtra._meet && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetEnd", !1, !1), Moxtra._meet.dispatchEvent(m)), !0;
        case "leave":
            if (t)
                if (t.iframe && t.iframe === !0) {
                    var o;
                    t.tagid4iframe && (o = document.getElementById(t.tagid4iframe), o && o.removeChild(Moxtra._iframe)), o || document.body.removeChild(Moxtra._iframe), Moxtra._iframe = null
                } else Moxtra._popup && Moxtra._popup.close(), Moxtra._popup = null;
            return Moxtra.session_id = null, Moxtra_Session.remove("meet_refresh"), "function" == typeof t.exit ? t.exit(e) : "function" == typeof t.exit_meet ? t.exit_meet(e) : Moxtra._meet && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetExit", !1, !1), Moxtra._meet.dispatchEvent(m)), !0;
        case "invite":
            return e.session_key ? "function" == typeof t.invite ? t.invite(e) : "function" == typeof t.invite_meet ? t.invite_meet(e) : Moxtra._meet && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetInvite", !1, !1), m.binder_id = e.binder_id, m.session_key = e.session_key, m.meet_id = e.meet_id, m.session_id = e.session_id, Moxtra._meet.dispatchEvent(m)) : "function" == typeof t.invite_member ? t.invite_member(e) : (Moxtra._chat || Moxtra._timeline) && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MemberInvite", !1, !1), m.binder_id = e.binder_id, Moxtra._chat ? Moxtra._chat.dispatchEvent(m) : Moxtra._timeline.dispatchEvent(m)), !1;
        case "invited":
            return "function" == typeof t.invited ? t.invited(e) : "function" == typeof t.invited_meet ? t.invited_meet(e) : Moxtra._meet && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MemberInvited", !1, !1), m.binder_id = e.binder_id, m.session_key = e.session_key, m.meet_id = e.meet_id, m.session_id = e.session_id, Moxtra._meet.dispatchEvent(m)), !1;
        case "save":
            return "function" == typeof t.save ? t.save(e) : "function" == typeof t.save_meet ? t.save_meet(e) : Moxtra._meet && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetSaved", !1, !1), m.binder_id = e.binder_id, m.session_key = e.session_key, m.meet_id = e.meet_id, m.session_id = e.session_id, Moxtra._meet.dispatchEvent(m)), !1;
        case "share":
            return "function" == typeof t.share && t.share(e), !1;
        case "start_note":
            return t.noterefresh_binder_id = e.binder_id, Moxtra_Session.set("note_refresh", t), "function" == typeof t.start_note ? t.start_note(e) : Moxtra._note && document.createEvent && (m = document.createEvent("Event"), m.initEvent("NoteStart", !1, !1), m.session_key = e.session_key, m.meet_id = e.meet_id, m.session_id = e.session_id, Moxtra._note.dispatchEvent(m)), !1;
        case "save_note":
            if (t)
                if (t.iframe && t.iframe === !0) {
                    var o;
                    t.tagid4iframe && (o = document.getElementById(t.tagid4iframe), o && o.removeChild(Moxtra._noteiframe)), o || document.body.removeChild(Moxtra._noteiframe), Moxtra._noteiframe = null
                } else Moxtra._notepopup && Moxtra._notepopup.close(), Moxtra._notepopup = null;
            return Moxtra_Session.remove("note_refresh"), "function" == typeof t.save_note ? t.save_note(e) : Moxtra._note && document.createEvent && (m = document.createEvent("Event"), m.initEvent("NoteSave", !1, !1), m.destination_binder_id = e.destination_binder_id, m.download_url = e.download_url, m.share_url = e.share_url, Moxtra._note.dispatchEvent(m)), !0;
        case "fail":
            return "function" == typeof t.error ? (t.error(e), !0) : e.is_chat ? (m = document.createEvent("Event"), m.initEvent("ChatError", !1, !1), m.error_code = e.error_code, m.error_message = e.error_message, Moxtra._chat.dispatchEvent(m), !0) : (Moxtra.session_id && e.session_id === Moxtra.session_id ? Moxtra_meet && document.createEvent && (m = document.createEvent("Event"), m.initEvent("MeetError", !1, !1), m.error_code = e.error_code, m.error_message = e.error_message, Moxtra._meet.dispatchEvent(m)) : Moxtra_note && document.createEvent && (m = document.createEvent("Event"), m.initEvent("NoteError", !1, !1), m.error_code = e.error_code, m.error_message = e.error_message, Moxtra._note.dispatchEvent(m)), !0);
        case "cancel_note":
            if (t)
                if (t.iframe && t.iframe === !0) {
                    var o;
                    t.tagid4iframe && (o = document.getElementById(t.tagid4iframe), o && o.removeChild(Moxtra._noteiframe)), o || document.body.removeChild(Moxtra._noteiframe), Moxtra._noteiframe = null
                } else Moxtra._notepopup && Moxtra._notepopup.close(), Moxtra._notepopup = null;
            return Moxtra_Session.remove("note_refresh"), "function" == typeof t.cancel ? t.cancel(e) : "function" == typeof t.cancel_note ? t.cancel_note(e) : Moxtra._note && document.createEvent && (m = document.createEvent("Event"), m.initEvent("NoteCancel", !1, !1), Moxtra._note.dispatchEvent(m)), !0;
        case "start_annotate":
            return "function" == typeof t.start_annotate ? t.start_annotate(e) : Moxtra._annotate && document.createEvent && (m = document.createEvent("Event"), m.initEvent("AnnotateStart", !1, !1), m.session_id = e.session_id, m.binder_id = e.binder_id, Moxtra._annotate.dispatchEvent(m)), !1;
        case "stop_annotate":
            if (t)
                if (t.iframe && t.iframe === !0) {
                    var o;
                    t.tagid4iframe && (o = document.getElementById(t.tagid4iframe), o && o.removeChild(Moxtra._annotateiframe)), o || document.body.removeChild(Moxtra._annotateiframe), Moxtra._annotateiframe = null
                } else Moxtra._annotatepopup && Moxtra._annotatepopup.close(), Moxtra._annotatepopup = null;
            return "function" == typeof t.stop_annotate ? t.stop_annotate(e) : Moxtra._annotate && document.createEvent && (m = document.createEvent("Event"), m.initEvent("AnnotateStop", !1, !1), m.download_url = e.download_url, m.share_url = e.share_url, m.binder_id = e.binder_id, Moxtra._annotate.dispatchEvent(m)), !0
    }
    if (t.extension && t.extension.menus && t.extension.menus[0].add_page)
        for (var r = 0; r < t.extension.menus[0].add_page.length; r++) {
            var i = t.extension.menus[0].add_page[r];
            if (e.action == i.menu_name) {
                document.createEvent && (m = document.createEvent("Event"), m.initEvent(i.menu_name, !1, !1), m.binder_id = e.binder_id, m.session_key = e.session_key, m.meet_id = e.meet_id, m.session_id = e.session_id, window.dispatchEvent(m));
                break
            }
        }
    if (t.extension && t.extension.menus && t.extension.menus[0].page_action)
        for (var r = 0; r < t.extension.menus[0].page_action.length; r++) {
            var i = t.extension.menus[0].page_action[r];
            if (e.action == i.menu_name) {
                "function" == typeof t.page_action ? t.page_action(e) : document.createEvent && (m = document.createEvent("Event"), m.initEvent("page_action", !1, !1), m.action = e.action, m.binder_id = e.binder_id, m.session_id = e.session_id, m.download_url = e.download_url, window.dispatchEvent(m));
                break
            }
        }
    return !1
}, Moxtra._ajax = function(e, t, n, o, r) {
    var i = {};
    if (n)
        for (var a in n) i[a] = n[a];
    jQuery.ajax({
        type: e,
        url: t,
        dataType: "jsonp",
        data: JSON.stringify(i),
        cache: !1,
        success: function(e) {
            return "RESPONSE_SUCCESS" != e.code && r ? void r(e) : void(o && o(e.object))
        },
        error: function(e) {
            if (r) try {
                r(JSON.parse(e.responseText))
            } catch (t) {}
        },
        beforeSend: function(e) {
            e.setRequestHeader("Content-type", "application/json")
        },
        contentType: "application/json;"
    })
}, Moxtra._getMembers = function(e, t, n) {
    var o = [];
    Moxtra._ajax("GET", "/board/" + e, null, function(e) {
        var n = e.board.users;
        if (n)
            for (var r = 0; r < n.length; r++) {
                var i = {};
                i.sequence = n[r].sequence, i.id = n[r].user.id, i.name = n[r].user.name, i.email = n[r].user.email, i.email_verified = n[r].user.email_verified, i.first_name = n[r].user.first_name, i.last_name = n[r].user.last_name, o.push(i)
            }
        t && "function" == typeof t && t(o)
    }, function(e) {
        n && "function" == typeof n && n(e.message)
    })
}, Moxtra.setup = function(e) {
    if (!e) throw "You must pass in options";
    if (e.clientId && (Moxtra.clientId = e.clientId), !Moxtra.clientId) throw "You have to set clientId";
    if (!(e && e.uniqueid && e.signature && e.timestamp)) throw "You have to set uniqueid, signature, and timestamp";
    var t;
    t = Moxtra.baseUrl.indexOf("grouphour.com") < 0 ? "https://www.moxtra.com" : "https://www.grouphour.com", t += "/oauthapi/token?client_id=" + Moxtra.clientId + "&uniqueid=" + encodeURIComponent(e.uniqueid) + "&timestamp=" + e.timestamp + "&signature=" + e.signature, e.firstname && (t += "&firstname=" + encodeURIComponent(e.firstname)), e.lastname && (t += "&lastname=" + encodeURIComponent(e.lastname)), e.orgid && (t += "&orgid=" + encodeURIComponent(e.orgid)), e.pictureurl && (t += "&pictureurl=" + encodeURIComponent(e.pictureurl)), jQuery.ajax({
        type: "GET",
        url: t,
        dataType: "jsonp",
        cache: !1,
        jsonpCallback: "verifyme",
        success: function(t) {
            if (t.access_token) "function" == typeof e.get_accesstoken && e.get_accesstoken(t);
            else if ("error" == t.status && "function" == typeof e.error) {
                var n = {};
                n.error_code = "RESPONSE_ERROR", n.error_message = t.message, e.error(n)
            }
        },
        error: function(t, n, o) {
            if ("function" == typeof e.error) {
                var r = {};
                r.error_code = "RESPONSE_ERROR", r.error_message = o, e.error(r)
            }
        }
    })
}, Moxtra.logout = function() {
    Moxtra.baseUrl.indexOf("grouphour.com") < 0 ? (document.cookie = "c_user=; path=/; domain=www.moxtra.com; expires=" + new Date(0).toUTCString(), document.cookie = "token=; path=/; domain=www.moxtra.com; expires=" + new Date(0).toUTCString(), document.cookie = "sessionid=; path=/; domain=www.moxtra.com; expires=" + new Date(0).toUTCString()) : (document.cookie = "c_user=; path=/; domain=www.grouphour.com; expires=" + new Date(0).toUTCString(), document.cookie = "token=; path=/; domain=www.grouphour.com; expires=" + new Date(0).toUTCString(), document.cookie = "sessionid=; path=/; domain=www.grouphour.com; expires=" + new Date(0).toUTCString())
}, Moxtra.init = function(e) {
    this.appKey = e.appKey
}, Moxtra._createWidgetElement = function(e, t, n) {
    var o, r;
    return o = document.createElement("iframe"), o.src = e, o.setAttribute("frameborder", "0"), o.setAttribute("allowtransparency", "true"), o.style.overflow = "scroll", o.style.backgroundColor = "transparent", o.style.width = "100%", o.style.height = "100%", t.tagid4iframe && (r = document.getElementById(t.tagid4iframe), r && t.border === !1 && (o.style.width = t.iframewidth ? t.iframewidth : n ? "850px" : "1024px", o.style.height = t.iframeheight ? t.iframeheight : n ? "500px" : "768px")), o.setAttribute("allowfullscreen", "true"), o.style.border = "none", o.style.scrolling = "yes", o
}, Moxtra._createHiddenIframe = function(e) {
    var t;
    return t = document.createElement("iframe"), t.src = e, t.setAttribute("frameborder", "0"), t.style.width = "100%", t.style.height = "0", t.style.border = "none", t
}, Moxtra.joinMeet = function(e) {
    if (!e) throw "You must pass in options";
    var t = "websdk";
    if (e.type && (t = e.type), e.appKey && (Moxtra.appKey = e.appKey), e.partnerId && (Moxtra.partnerId = e.partnerId), e.orgId && (Moxtra.orgId = e.orgId), e.clientId && (Moxtra.clientId = e.clientId), (e.session_key || e.meet_id) && (e.joinURL = Moxtra.getJoinMeetURL(e.session_key ? e.session_key : e.meet_id, e.user_name, t, e.access_token, e.extension)), !e.joinURL) throw "You must pass in session_key";
    Moxtra.meet(e)
}, Moxtra.endMeet = function(e) {
    (ef = function() {
        var t = function(e) {
            e.origin == Moxtra.baseUrl && (document.body.removeChild(Moxtra._hiddeniframe), Moxtra._hiddeniframe = null, Moxtra_Session.remove("meet_endurl"), Moxtra.removeListener(window, "message", t))
        };
        Moxtra.addListener(window, "message", t);
        var n = Moxtra._createHiddenIframe(e);
        document.body.appendChild(n), Moxtra._hiddeniframe = n
    })()
}, Moxtra.meet = function(e) {
    var t, n, o, r, i, a, s, d, c;
    if (!e) throw "You must pass in options";
    e.joinURL && (Moxtra.joinURL = e.joinURL), e.appKey && (Moxtra.appKey = e.appKey), e.partnerId && (Moxtra.partnerId = e.partnerId), e.orgId && (Moxtra.orgId = e.orgId), e.clientId && (Moxtra.clientId = e.clientId), (ef = function() {
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var m = document.getElementById("moxtraButton"),
                l = function() {
                    data = document.getElementById("moxtraCommData").value;
                    var t = !1;
                    t = e && e.from_chat && e.from_chat === !0 ? Moxtra._handleMessageFromChatEvent(JSON.parse(data), e) : Moxtra._handleMessageEvent(JSON.parse(data), e), t && Moxtra.removeListener(m, "click", l)
                };
            Moxtra.addListener(m, "click", l)
        } else {
            var p = function(t) {
                if (t.origin == Moxtra.baseUrl) {
                    var n = !1;
                    n = e && e.from_chat && e.from_chat === !0 ? Moxtra._handleMessageFromChatEvent(JSON.parse(t.data), e) : Moxtra._handleMessageEvent(JSON.parse(t.data), e), n && Moxtra.removeListener(window, "message", p)
                }
            };
            Moxtra.addListener(window, "message", p)
        }
        if (e.iframe && e.iframe === !0) {
            c = Moxtra._createWidgetElement(e.joinURL ? Moxtra._JOINUrl(e) : Moxtra._SSOUrl(e, 1), e, !1);
            var u;
            e.tagid4iframe && (u = document.getElementById(e.tagid4iframe), u && (e.border === !1 ? (u.appendChild(c), Moxtra._iframe = c) : (o = document.createElement("div"), o.style.width = e.iframewidth ? e.iframewidth : "1024px", o.style.height = e.iframeheight ? e.iframeheight : "768px", o.style.margin = "10px 0px", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), u.appendChild(o), Moxtra._iframe = o))), u || (i = document.createElement("div"), i.style.left = i.style.right = i.style.top = i.style.bottom = "0px", i.style.zIndex = "1000", t = document.createElement("div"), t.style.left = t.style.right = t.style.top = t.style.bottom = "0px", t.style.backgroundColor = "rgb(160, 160, 160)", t.style.opacity = "0.2", t.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)", o = document.createElement("div"), o.style.position = "relative", o.style.width = e.iframewidth ? e.iframewidth : "1024px", o.style.height = e.iframeheight ? e.iframeheight : "768px", o.style.margin = "25px auto 0px auto", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), i.appendChild(t), i.appendChild(o), document.body.appendChild(i), Moxtra._iframe = i, i.scrollIntoView(!0))
        } else d = 1024, n = 768, r = (window.screenX || window.screenLeft) + ((window.outerWidth || document.documentElement.offsetWidth) - d) / 2, s = (window.screenY || window.screenTop) + ((window.outerHeight || document.documentElement.offsetHeight) - n) / 2, e.from_chat && e.from_chat === !0 ? (a = e.tab && e.tab === !0 ? window.open(e.joinURL ? Moxtra._JOINUrl(e) : Moxtra._SSOUrl(e, 1), "moxtrabychat", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no", "_blank") : window.open(e.joinURL ? Moxtra._JOINUrl(e) : Moxtra._SSOUrl(e, 1), "moxtrabychat", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no"), Moxtra._popupbychat = a) : (a = e.tab && e.tab === !0 ? window.open(e.joinURL ? Moxtra._JOINUrl(e) : Moxtra._SSOUrl(e, 1), "moxtra", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no", "_blank") : window.open(e.joinURL ? Moxtra._JOINUrl(e) : Moxtra._SSOUrl(e, 1), "moxtra", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no"), Moxtra._popup = a), a && a.focus()
    })()
}, Moxtra.clip = function(e) {
    Moxtra.note(e)
}, Moxtra.note = function(e) {
    var t, n, o, r, i, a, s, d, c;
    if (!e) throw "You must pass in options";
    (en = function() {
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var m = document.getElementById("moxtraNoteBtn"),
                l = function() {
                    data = document.getElementById("moxtraCommData").value;
                    var t = !1;
                    t = e && e.from_chat && e.from_chat === !0 ? Moxtra._handleMessageFromChatEvent(JSON.parse(data), e) : Moxtra._handleMessageEvent(JSON.parse(data), e), t && Moxtra.removeListener(m, "click", l)
                };
            Moxtra.addListener(m, "click", l)
        } else {
            var p = function(t) {
                if (t.origin == Moxtra.baseUrl) {
                    var n = !1;
                    n = e && e.from_chat && e.from_chat === !0 ? Moxtra._handleMessageFromChatEvent(JSON.parse(t.data), e) : Moxtra._handleMessageEvent(JSON.parse(t.data), e), n && Moxtra.removeListener(window, "message", p)
                }
            };
            Moxtra.addListener(window, "message", p)
        }
        if (e.iframe && e.iframe === !0) {
            c = Moxtra._createWidgetElement(Moxtra._SSOUrl(e, 2), e, !1);
            var u;
            e.tagid4iframe && (u = document.getElementById(e.tagid4iframe), u && (e.border === !1 ? (u.appendChild(c), Moxtra._noteiframe = c) : (o = document.createElement("div"), o.style.width = e.iframewidth ? e.iframewidth : "1024px", o.style.height = e.iframeheight ? e.iframeheight : "768px", o.style.margin = "10px 0px", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), u.appendChild(o), Moxtra._noteiframe = o))), u || (i = document.createElement("div"), i.style.left = i.style.right = i.style.top = i.style.bottom = "0px", i.style.zIndex = "1000", t = document.createElement("div"), t.style.left = t.style.right = t.style.top = t.style.bottom = "0px", t.style.backgroundColor = "rgb(160, 160, 160)", t.style.opacity = "0.2", t.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)", o = document.createElement("div"), o.style.position = "relative", o.style.width = e.iframewidth ? e.iframewidth : "1024px", o.style.height = e.iframeheight ? e.iframeheight : "768px", o.style.margin = "25px auto 0px auto", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), i.appendChild(t), i.appendChild(o), document.body.appendChild(i), Moxtra._noteiframe = i)
        } else d = 1024, n = 768, r = (window.screenX || window.screenLeft) + ((window.outerWidth || document.documentElement.offsetWidth) - d) / 2, s = (window.screenY || window.screenTop) + ((window.outerHeight || document.documentElement.offsetHeight) - n) / 2, e.from_chat && e.from_chat === !0 ? (a = window.open(Moxtra._SSOUrl(e, 2), "moxtranotebychat", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no"), Moxtra._notepopupbychat = a) : (a = window.open(Moxtra._SSOUrl(e, 2), "moxtranote", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no"), Moxtra._notepopup = a), a && a.focus()
    })()
}, Moxtra.chat = function(e) {
    var t, n, o, r, i, a, s, d, c;
    if (!e) throw "You must pass in options";
    (ec = function() {
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var m = document.getElementById("moxtraChatBtn"),
                l = function() {
                    data = document.getElementById("moxtraCommData").value;
                    var t = Moxtra._handleChatMessageEvent(JSON.parse(data), e, !0);
                    t && Moxtra.removeListener(m, "click", l)
                };
            Moxtra.addListener(m, "click", l)
        } else {
            var p = function(t) {
                if (t.origin == Moxtra.baseUrl) {
                    var n = Moxtra._handleChatMessageEvent(JSON.parse(t.data), e, !0);
                    n && Moxtra.removeListener(window, "message", p)
                }
            };
            Moxtra.addListener(window, "message", p)
        }
        if (e.iframe && e.iframe === !0) {
            var u;
            c = Moxtra._createWidgetElement(Moxtra._SSOUrl(e, 3), e, !0), e.tagid4iframe && (u = document.getElementById(e.tagid4iframe), u && (e.border === !1 ? (u.appendChild(c), Moxtra._chatiframe = c) : (o = document.createElement("div"), o.style.width = e.iframewidth ? e.iframewidth : "850px", o.style.height = e.iframeheight ? e.iframeheight : "500px", o.style.margin = "10px 0px", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), u.appendChild(o), Moxtra._chatiframe = o))), u || (i = document.createElement("div"), i.style.left = i.style.right = i.style.top = i.style.bottom = "0px", i.style.zIndex = "1000", t = document.createElement("div"), t.style.left = t.style.right = t.style.top = t.style.bottom = "0px", t.style.backgroundColor = "rgb(160, 160, 160)", t.style.opacity = "0.2", t.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)", o = document.createElement("div"), o.style.position = "relative", o.style.width = e.iframewidth ? e.iframewidth : "850px", o.style.height = e.iframeheight ? e.iframeheight : "500px", o.style.margin = "25px auto 0px auto", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), i.appendChild(t), i.appendChild(o), document.body.appendChild(i), Moxtra._chatiframe = i, i.scrollIntoView(!0))
        } else d = 850, n = 500, r = (window.screenX || window.screenLeft) + ((window.outerWidth || document.documentElement.offsetWidth) - d) / 2, s = (window.screenY || window.screenTop) + ((window.outerHeight || document.documentElement.offsetHeight) - n) / 2, a = window.open(Moxtra._SSOUrl(e, 3), "moxtrachat", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no,scrollbars=1"), Moxtra._chatpopup = a, a && a.focus()
    })()
}, Moxtra.timeline = function(e) {
    var t, n, o, r, i, a, s, d, c;
    if (!e) throw "You must pass in options";
    (ec = function() {
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var m = document.getElementById("moxtraTimelineBtn"),
                l = function() {
                    data = document.getElementById("moxtraCommData").value;
                    var t = Moxtra._handleChatMessageEvent(JSON.parse(data), e, !1);
                    t && Moxtra.removeListener(m, "click", l)
                };
            Moxtra.addListener(m, "click", l)
        } else {
            var p = function(t) {
                if (t.origin == Moxtra.baseUrl) {
                    var n = Moxtra._handleChatMessageEvent(JSON.parse(t.data), e, !1);
                    n && Moxtra.removeListener(window, "message", p)
                }
            };
            Moxtra.addListener(window, "message", p)
        }
        if (e.iframe && e.iframe === !0) {
            var u;
            c = Moxtra._createWidgetElement(Moxtra._SSOUrl(e, 5), e, !1), e.tagid4iframe && (u = document.getElementById(e.tagid4iframe), u && (e.border === !1 ? (u.appendChild(c), Moxtra._timelineiframe = c) : (o = document.createElement("div"), o.style.width = e.iframewidth ? e.iframewidth : "1024px", o.style.height = e.iframeheight ? e.iframeheight : "768px", o.style.margin = "10px 0px", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), u.appendChild(o), Moxtra._timelineiframe = o))), u || (i = document.createElement("div"), i.style.left = i.style.right = i.style.top = i.style.bottom = "0px", i.style.zIndex = "1000", t = document.createElement("div"), t.style.left = t.style.right = t.style.top = t.style.bottom = "0px", t.style.backgroundColor = "rgb(160, 160, 160)", t.style.opacity = "0.2", t.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)", o = document.createElement("div"), o.style.position = "relative", o.style.width = e.iframewidth ? e.iframewidth : "1024px", o.style.height = e.iframeheight ? e.iframeheight : "768px", o.style.margin = "25px auto 0px auto", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), i.appendChild(t), i.appendChild(o), document.body.appendChild(i), Moxtra._timelineiframe = i, i.scrollIntoView(!0))
        } else d = 1024, n = 768, r = (window.screenX || window.screenLeft) + ((window.outerWidth || document.documentElement.offsetWidth) - d) / 2, s = (window.screenY || window.screenTop) + ((window.outerHeight || document.documentElement.offsetHeight) - n) / 2, a = window.open(Moxtra._SSOUrl(e, 5), "moxtratimeline", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no,scrollbars=1"), Moxtra._timelinepopup = a, a && a.focus()
    })()
}, Moxtra.annotate = function(e) {
    var t, n, o, r, i, a, s, d, c;
    if (!e) throw "You must pass in options";
    (an = function() {
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var m = document.getElementById("moxtraAnnotateBtn"),
                l = function() {
                    data = document.getElementById("moxtraCommData").value;
                    var t = Moxtra._handleMessageEvent(JSON.parse(data), e, !0);
                    t && Moxtra.removeListener(m, "click", l)
                };
            Moxtra.addListener(m, "click", l)
        } else {
            var l = function(t) {
                if (t.origin == Moxtra.baseUrl) {
                    var n = Moxtra._handleMessageEvent(JSON.parse(t.data), e, !0);
                    n && Moxtra.removeListener(window, "message", l)
                }
            };
            Moxtra.addListener(window, "message", l)
        }
        if (e.iframe && e.iframe === !0) {
            var p;
            c = Moxtra._createWidgetElement(Moxtra._SSOUrl(e, 6), e, !1), e.tagid4iframe && (p = document.getElementById(e.tagid4iframe), p && (e.border === !1 ? (p.appendChild(c), Moxtra._annotateiframe = c) : (o = document.createElement("div"), o.style.width = e.iframewidth ? e.iframewidth : "850px", o.style.height = e.iframeheight ? e.iframeheight : "500px", o.style.margin = "10px 0px", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), p.appendChild(o), Moxtra._annotateiframe = o))), p || (i = document.createElement("div"), i.style.left = i.style.right = i.style.top = i.style.bottom = "0px", i.style.zIndex = "1000", t = document.createElement("div"), t.style.left = t.style.right = t.style.top = t.style.bottom = "0px", t.style.backgroundColor = "rgb(160, 160, 160)", t.style.opacity = "0.2", t.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)", o = document.createElement("div"), o.style.position = "relative", o.style.width = e.iframewidth ? e.iframewidth : "850px", o.style.height = e.iframeheight ? e.iframeheight : "500px", o.style.margin = "25px auto 0px auto", o.style.border = "1px solid #ACACAC", o.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", o.appendChild(c), i.appendChild(t), i.appendChild(o), document.body.appendChild(i), Moxtra._annotateiframe = i, i.scrollIntoView(!0))
        } else d = 850, n = 500, r = (window.screenX || window.screenLeft) + ((window.outerWidth || document.documentElement.offsetWidth) - d) / 2, s = (window.screenY || window.screenTop) + ((window.outerHeight || document.documentElement.offsetHeight) - n) / 2, a = window.open(Moxtra._SSOUrl(e, 6), "moxtraannotate", "width=" + d + ",height=" + n + ",left=" + r + ",top=" + s + ",resizable=yes,location=no,scrollbars=1"), Moxtra._annotatepopup = a, a && a.focus()
    })()
}, Moxtra.getJoinMeetURL = function(e, t, n, o, r) {
    var i;
    if (e) i = e;
    else {
        if (!Moxtra.session_key) return void alert("Need to start a Moxtra Meet first!");
        i = Moxtra.session_key
    }
    var a = "websdk";
    n && (a = n);
    var s = encodeURIComponent(window.location.protocol + "//" + window.location.host),
        d = Moxtra.baseUrl + "/service/#join?session_key=" + i + "&type=" + a + "&client_id=" + Moxtra.clientId + "&origin=" + s;
    return t && (d += "&name=", d += encodeURIComponent(t)), r && (d += "&extension=" + encodeURIComponent(JSON.stringify(r))), o ? d += "&access_token=" + o : Moxtra.appKey && (d = Moxtra.ssoUrl + "?idpid=" + Moxtra.appKey + "&target=" + encodeURIComponent(d), Moxtra.partnerId ? d += "&partnerid=" + Moxtra.partnerId : Moxtra.orgId && (d += "&orgid=" + Moxtra.orgId)), d
}, Moxtra.binderChooser = function(e) {
    (bc = function() {
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var t = document.getElementById("moxtraBinderBtn"),
                n = function() {
                    data = document.getElementById("moxtraCommData").value, Moxtra._selected(JSON.parse(data), e), Moxtra.removeListener(t, "click", n)
                };
            Moxtra.addListener(t, "click", n)
        } else {
            var o = function(t) {
                if (t.source == Moxtra._window) {
                    var n = JSON.parse(t.data);
                    Moxtra._selected(n, e), Moxtra.removeListener(window, "message", o)
                }
            };
            Moxtra.addListener(window, "message", o)
        }
        var r, i, a, s = "websdk";
        if (e && e.type && (s = e.type), Moxtra.appKey) r = Moxtra.ssoUrl + "?idpid=" + Moxtra.appKey + "&target=" + encodeURIComponent(Moxtra.baseUrl + "/service/#chooser?client_id=" + Moxtra.clientId + "&type=" + s), Moxtra.partnerId ? r += "&partnerid=" + Moxtra.partnerId : Moxtra.orgId && (r += "&orgid=" + Moxtra.orgId);
        else if (e && e.token) {
            var d = encodeURIComponent(window.location.protocol + "//" + window.location.host);
            r = Moxtra.baseUrl + "/login?token=" + encodeURIComponent(e.token) + "&loginUrl=" + encodeURIComponent(e.loginUrl) + "&type=" + s + "&client_id=" + Moxtra.clientId + "&origin=" + d + "&backUrl=" + encodeURIComponent(Moxtra.baseUrl + "/service/#chooser?client_id=" + Moxtra.clientId + "&type=" + s)
        } else r = Moxtra.baseUrl + "/service/#chooser?client_id=" + Moxtra.clientId + "&type=" + s;
        i = e && e.width ? e.width : "886", a = e && e.height ? e.height : "560", Moxtra._window = window.open(r, "chooser", "location=0,scrollbars=1,status=0,titlebar=0,toolbar=0,menubar=0,width=" + i + ",height=" + a), Moxtra._window.focus()
    })()
}, Moxtra.pageChooser = function(e) {
    (pc = function() {
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var t = document.getElementById("moxtraPageBtn"),
                n = function() {
                    data = document.getElementById("moxtraCommData").value, Moxtra._pageSelected(JSON.parse(data), e), Moxtra.removeListener(t, "click", n)
                };
            Moxtra.addListener(t, "click", n)
        } else {
            var o = function(t) {
                if (t.source == Moxtra._pageWindow) {
                    var n = JSON.parse(t.data);
                    Moxtra._pageSelected(n, e), Moxtra.removeListener(window, "message", o)
                }
            };
            Moxtra.addListener(window, "message", o)
        }
        var r, i = "websdk";
        if (e && e.type && (i = e.type), Moxtra.appKey) r = Moxtra.ssoUrl + "?idpid=" + Moxtra.appKey + "&target=" + encodeURIComponent(Moxtra.baseUrl + "/api/html/pageselector.htm?client_id=" + Moxtra.clientId), Moxtra.partnerId ? r += "&partnerid=" + Moxtra.partnerId : Moxtra.orgId && (r += "&orgid=" + Moxtra.orgId);
        else if (e && e.token) {
            var a = encodeURIComponent(window.location.protocol + "//" + window.location.host);
            r = Moxtra.baseUrl + "/login?token=" + encodeURIComponent(e.token) + "&loginUrl=" + encodeURIComponent(e.loginUrl) + "&type=" + i + "&client_id=" + Moxtra.clientId + "&origin=" + a + "&backUrl=" + encodeURIComponent(Moxtra.baseUrl + "/api/html/pageselector.htm?client_id=" + Moxtra.clientId)
        } else r = Moxtra.baseUrl + "/api/html/pageselector.htm?client_id=" + Moxtra.clientId;
        Moxtra._pageWindow = window.open(r, "pageChooser", "location=0,scrollbars=1,status=0,titlebar=0,toolbar=0,menubar=0,width=886,height=560"), Moxtra._pageWindow.focus()
    })()
}, Moxtra.toolbar_startmeet = function() {
    return Moxtra.meet({
        success: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("MeetSuccess", !1, !1), t.session_key = e.session_key, t.meet_id = e.meet_id, t.session_id = e.session_id, Moxtra._toolbar.dispatchEvent(t))
        },
        error: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("MeetError", !1, !1), t.error_code = e.error_code, t.error_message = e.error_message, Moxtra._toolbar.dispatchEvent(t))
        },
        exit: function() {
            var e;
            document.createEvent && (e = document.createEvent("Event"), e.initEvent("MeetExit", !1, !1), Moxtra._toolbar.dispatchEvent(e))
        },
        invite: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("MeetInvite", !1, !1), t.binder_id = e.binder_id, t.session_key = e.session_key, t.meet_id = e.meet_id, t.session_id = e.session_id, Moxtra._toolbar.dispatchEvent(t))
        },
        invited: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("MemberInvited", !1, !1), t.binder_id = e.binder_id, t.session_key = e.session_key, t.meet_id = e.meet_id, t.session_id = e.session_id, Moxtra._toolbar.dispatchEvent(t))
        },
        save: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("MeetSaved", !1, !1), t.binder_id = e.binder_id, t.session_key = e.session_key, t.meet_id = e.meet_id, t.session_id = e.session_id, Moxtra._toolbar.dispatchEvent(t))
        },
        iframe: !1,
        _trigger: "button"
    }), !1
}, Moxtra.toolbar_startnote = function() {
    return Moxtra.note({
        start_note: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("NoteStart", !1, !1), t.session_key = e.session_key, t.meet_id = e.meet_id, t.session_id = e.session_id, Moxtra._toolbar.dispatchEvent(t))
        },
        error: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("NoteError", !1, !1), t.error_code = e.error_code, t.error_message = e.error_message, Moxtra._toolbar.dispatchEvent(t))
        },
        save_note: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("NoteSave", !1, !1), t.destination_binder_id = e.destination_binder_id, t.download_url = e.download_url, t.share_url = e.share_url, Moxtra._toolbar.dispatchEvent(t))
        },
        cancel: function() {
            var e;
            document.createEvent && (e = document.createEvent("Event"), e.initEvent("NoteCancel", !1, !1), Moxtra._toolbar.dispatchEvent(e))
        },
        iframe: !1,
        _trigger: "button"
    }), !1
}, Moxtra.toolbar_startchat = function() {
    return Moxtra.chat({
        start_chat: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("ChatStart", !1, !1), t.binder_id = e.binder_id, t.session_id = e.session_id, Moxtra._toolbar.dispatchEvent(t))
        },
        request_meet: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("MeetRequest", !1, !1), t.binder_id = e.binder_id, Moxtra._toolbar.dispatchEvent(t))
        },
        request_note: function() {
            var e;
            document.createEvent && (e = document.createEvent("Event"), e.initEvent("NoteRequest", !1, !1), Moxtra._toolbar.dispatchEvent(e))
        },
        error: function(e) {
            var t;
            document.createEvent && (t = document.createEvent("Event"), t.initEvent("ChatError", !1, !1), t.error_code = e.error_code, t.error_message = e.error_message, Moxtra._toolbar.dispatchEvent(t))
        },
        iframe: !1,
        _trigger: "button"
    }), !1
}, Moxtra._selected = function(e, t) {
    t && "function" == typeof t.select ? t.select(e) : Moxtra._chooser && document.createEvent && (m = document.createEvent("Event"), m.initEvent("BinderSelect", !1, !1), m.binder_name = e.binder_name, m.binder_id = e.binder_id, m.binder_imageUrl = e.binder_imageUrl, m.binder_viewUrl = e.binder_viewUrl, Moxtra._chooser.dispatchEvent(m)), Moxtra._window.close()
}, Moxtra._pageSelected = function(e, t) {
    t && "function" == typeof t.select ? t.select(e) : Moxtra._pageChooser && document.createEvent && (m = document.createEvent("Event"), m.initEvent("PagesSelect", !1, !1), m.binder_name = e.binder_name, m.binder_id = e.binder_id, m.binder_imageUrl = e.binder_imageUrl, m.binder_viewUrl = e.binder_viewUrl, m.page_url_prefix = e.page_url_prefix, m.page_viewUrl_prefix = e.page_viewUrl_prefix, m.pages = e.pages, Moxtra._pageChooser.dispatchEvent(m)), Moxtra._pageWindow.close()
}, Moxtra.setValue = function(e, t) {
    if (null != e && void 0 !== e && 1 == e.nodeType) {
        var n = e.tagName.toLowerCase();
        "div" == n ? e.innerHTML = t : "input" == n ? e.value = t : "img" == n && (img.src = t)
    }
},
    function() {
        var e, t, n, o, r, i, a, s, d, c;
        o = document.getElementById("moxtrajs"), Moxtra.appKey || (Moxtra.appKey = null != o ? o.getAttribute("data-app-key") : void 0), Moxtra.partnerId || (Moxtra.partnerId = null != o ? o.getAttribute("data-partner-id") : void 0), Moxtra.orgId || (Moxtra.orgId = null != o ? o.getAttribute("data-org-id") : void 0), Moxtra.clientId || (Moxtra.clientId = null != o ? o.getAttribute("data-client-id") : void 0);
        var m = o.getAttribute("src");
        m.indexOf("grouphour.com") < 0 ? m.indexOf("../js") < 0 || (Moxtra.baseUrl = "https://" + window.location.host) : Moxtra.baseUrl = "https://www.grouphour.com", Moxtra.ssoUrl = "idpdemo" == Moxtra.appKey ? Moxtra.baseUrl + "/sp/spdemo" : Moxtra.baseUrl + "/sp/startSSO", t = document.createElement("style"), t.type = "text/css", n = ".moxtra-meet { width: 73px; height: 35px; border: solid 1px navy; box-shadow: 2px 2px 3px #535353; border-radius: 5px; cursor: pointer;\n background-image: url('https://www.moxtra.com/api/images/logo-meet2.png'); }\n.moxtra-meet:hover { border: solid navy 2px; background-position: 2px 2px; }\n.moxtra-meet:active { background-position: 0 2px; }\n.moxtra-meet-selected { }\n.moxtra-meet-selected:hover { }\n.moxtra-meet-selected:active { }", t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, document.getElementsByTagName("head")[0].appendChild(t), b2 = document.createElement("style"), b2.type = "text/css", c2 = ".moxtra-note { width: 76px; height: 35px; border: solid 1px navy; box-shadow: 2px 2px 3px #535353; border-radius: 5px; cursor: pointer;\n background-image: url('https://www.moxtra.com/api/images/logo-note.png'); }\n.moxtra-note:hover { border: solid navy 2px; background-position: 2px 2px; }\n.moxtra-note:active { background-position: 0 2px; }\n.moxtra-note-selected { }\n.moxtra-note-selected:hover { }\n.moxtra-note-selected:active { }", b2.styleSheet ? b2.styleSheet.cssText = c2 : b2.textContent = c2, document.getElementsByTagName("head")[0].appendChild(b2), b3 = document.createElement("style"), b3.type = "text/css", c3 = ".moxtra-chat { width: 61px; height: 35px; border: solid 1px navy; box-shadow: 2px 2px 3px #535353; border-radius: 5px; cursor: pointer;\n background-image: url('https://www.moxtra.com/api/images/logo-chat.png'); }\n.moxtra-chat:hover { border: solid navy 2px; background-position: 2px 2px; }\n.moxtra-chat:active { background-position: 0 2px; }\n.moxtra-chat-selected { }\n.moxtra-chat-selected:hover { }\n.moxtra-chat-selected:active { }", b3.styleSheet ? b3.styleSheet.cssText = c3 : b3.textContent = c3, document.getElementsByTagName("head")[0].appendChild(b3);
        var l = document.createElement("style");
        l.type = "text/css";
        var p = ".moxtra-chooser { width: 100px; height: 35px; border: solid 1px navy; box-shadow: 2px 2px 3px #535353; border-radius: 5px; cursor: pointer;\n  background-image: url('https://www.moxtra.com/api/images/logo-binder2.png'); }\n.moxtra-chooser:hover { border: solid navy 2px; background-position: 2px 2px; }\n.moxtra-chooser:active { background-position: 0 2px; }\n.moxtra-chooser-selected { }\n.moxtra-chooser-selected:hover { }\n.moxtra-chooser-selected:active { }";
        l.styleSheet ? l.styleSheet.cssText = p : l.textContent = p, document.getElementsByTagName("head")[0].appendChild(l);
        var u = document.createElement("style");
        u.type = "text/css";
        var x = ".moxtra-pagechooser { width: 69px; height: 35px; border: solid 1px navy; box-shadow: 2px 2px 3px #535353; border-radius: 5px; cursor: pointer;\n  background-image: url('https://www.moxtra.com/api/images/logo-page.png'); }\n.moxtra-pagechooser:hover { border: solid navy 2px; background-position: 2px 2px; }\n.moxtra-pagechooser:active { background-position: 0 2px; }\n.moxtra-pagechooser-selected { }\n.moxtra-pagechooser-selected:hover { }\n.moxtra-pagechooser-selected:active { }";
        u.styleSheet ? u.styleSheet.cssText = x : u.textContent = x, document.getElementsByTagName("head")[0].appendChild(u), e = function() {
            var t, n, o, m, l;
            if (document.removeEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.detachEvent && document.detachEvent("onreadystatechange", e), "Microsoft Internet Explorer" == navigator.appName) {
                var p = document.createElement("form");
                p.setAttribute("name", "moxtraWin");
                var u = document.createElement("input");
                u.setAttribute("type", "hidden"), u.setAttribute("id", "moxtraCommData"), u.setAttribute("name", "moxtraCommData");
                var x = document.createElement("input");
                x.setAttribute("type", "button"), x.setAttribute("name", "moxtraBinderBtn"), x.setAttribute("id", "moxtraBinderBtn"), x.setAttribute("value", ""), x.style.display = "none";
                var v = document.createElement("input");
                v.setAttribute("type", "button"), v.setAttribute("name", "moxtraPageBtn"), v.setAttribute("id", "moxtraPageBtn"), v.setAttribute("value", ""), v.style.display = "none";
                var _ = document.createElement("input");
                _.setAttribute("type", "button"), _.setAttribute("name", "moxtraButton"), _.setAttribute("id", "moxtraButton"), _.setAttribute("value", ""), _.style.display = "none";
                var h = document.createElement("input");
                h.setAttribute("type", "button"), h.setAttribute("name", "moxtraNoteBtn"), h.setAttribute("id", "moxtraNoteBtn"), h.setAttribute("value", ""), h.style.display = "none";
                var f = document.createElement("input");
                f.setAttribute("type", "button"), f.setAttribute("name", "moxtraChatBtn"), f.setAttribute("id", "moxtraChatBtn"), f.setAttribute("value", ""), f.style.display = "none";
                var g = document.createElement("input");
                g.setAttribute("type", "button"), g.setAttribute("name", "moxtraTimelineBtn"), g.setAttribute("id", "moxtraTimelineBtn"), g.setAttribute("value", ""), g.style.display = "none";
                var y = document.createElement("input");
                y.setAttribute("type", "button"), y.setAttribute("name", "moxtraAnnotateBtn"), y.setAttribute("id", "moxtraAnnotateBtn"), y.setAttribute("value", ""), y.style.display = "none", p.appendChild(u), p.appendChild(x), p.appendChild(v), p.appendChild(_), p.appendChild(h), p.appendChild(f), p.appendChild(g), p.appendChild(y), document.getElementsByTagName("body")[0].appendChild(p)
            }
            var b = Moxtra_Session.get("meet_refresh"),
                M = Moxtra_Session.get("note_refresh");
            for (n = document.getElementsByTagName("input"), o = function(e) {
                var t;
                if (("moxtra-meet" === e.getAttribute("type") || "moxtra-meet-iframe" === e.getAttribute("type")) && (t = document.createElement("div"), t.className = "moxtra-meet", e.style.display = "none", Moxtra._meet = e, i = "moxtra-meet-iframe" === e.getAttribute("type") ? t : null, Moxtra.addListener(t, "click", function() {
                        r = "moxtra-meet-iframe" === e.getAttribute("type") ? !0 : !1, b = Moxtra_Session.get("meet_refresh"), Moxtra.meet(b || {
                            success: function(n) {
                                var o;
                                document.createEvent && (o = document.createEvent("Event"), o.initEvent("MeetSuccess", !1, !1), o.session_key = n.session_key, o.meet_id = n.meet_id, o.session_id = n.session_id, e.dispatchEvent(o)), t.className = "moxtra-meet moxtra-meet-used"
                            },
                            error: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("MeetError", !1, !1), n.error_code = t.error_code, n.error_message = t.error_message, e.dispatchEvent(n))
                            },
                            exit: function() {
                                var t;
                                document.createEvent && (t = document.createEvent("Event"), t.initEvent("MeetExit", !1, !1), e.dispatchEvent(t))
                            },
                            invite: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("MeetInvite", !1, !1), n.binder_id = t.binder_id, n.session_key = t.session_key, n.meet_id = t.meet_id, n.session_id = t.session_id, e.dispatchEvent(n))
                            },
                            invited: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("MemberInvited", !1, !1), n.binder_id = t.binder_id, n.session_key = t.session_key, n.meet_id = t.meet_id, n.session_id = t.session_id, e.dispatchEvent(n))
                            },
                            save: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("MeetSaved", !1, !1), n.binder_id = t.binder_id, n.session_key = t.session_key, n.meet_id = t.meet_id, n.session_id = t.session_id, e.dispatchEvent(n))
                            },
                            iframe: r ? !0 : !1,
                            extension: {
                                show_dialogs: {
                                    meet_invite: !0
                                }
                            },
                            _trigger: "button"
                        })
                    }), e.parentNode.insertBefore(t, e)), ("moxtra-note" === e.getAttribute("type") || "moxtra-note-iframe" === e.getAttribute("type")) && (nt = document.createElement("div"), nt.className = "moxtra-note", e.style.display = "none", Moxtra._note = e, s = "moxtra-note-iframe" === e.getAttribute("type") ? t : null, Moxtra.addListener(nt, "click", function() {
                        a = "moxtra-note-iframe" === e.getAttribute("type") ? !0 : !1, M = Moxtra_Session.get("note_refresh"), Moxtra.note(M || {
                            start_note: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("NoteStart", !1, !1), n.session_key = t.session_key, n.meet_id = t.meet_id, n.session_id = t.session_id, e.dispatchEvent(n)), nt.className = "moxtra-note moxtra-note-used"
                            },
                            error: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("NoteError", !1, !1), n.error_code = t.error_code, n.error_message = t.error_message, e.dispatchEvent(n))
                            },
                            save_note: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("NoteSave", !1, !1), n.destination_binder_id = t.destination_binder_id, n.download_url = t.download_url, n.share_url = t.share_url, e.dispatchEvent(n))
                            },
                            cancel: function() {
                                var t;
                                document.createEvent && (t = document.createEvent("Event"), t.initEvent("NoteCancel", !1, !1), e.dispatchEvent(t))
                            },
                            iframe: a ? !0 : !1,
                            _trigger: "button"
                        })
                    }), e.parentNode.insertBefore(nt, e)), ("moxtra-chat" === e.getAttribute("type") || "moxtra-chat-iframe" === e.getAttribute("type")) && (nt = document.createElement("div"), nt.className = "moxtra-chat", e.style.display = "none", Moxtra._chat = e, c = "moxtra-chat-iframe" === e.getAttribute("type") ? t : null, Moxtra.addListener(nt, "click", function() {
                        d = "moxtra-chat-iframe" === e.getAttribute("type") ? !0 : !1, Moxtra.chat({
                            start_chat: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("ChatStart", !1, !1), n.binder_id = t.binder_id, n.session_id = t.session_id, e.dispatchEvent(n)), nt.className = "moxtra-chat moxtra-chat-used"
                            },
                            request_meet: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("MeetRequest", !1, !1), n.binder_id = t.binder_id, e.dispatchEvent(n))
                            },
                            request_note: function() {
                                var t;
                                document.createEvent && (t = document.createEvent("Event"), t.initEvent("NoteRequest", !1, !1), e.dispatchEvent(t))
                            },
                            error: function(t) {
                                var n;
                                document.createEvent && (n = document.createEvent("Event"), n.initEvent("ChatError", !1, !1), n.error_code = t.error_code, n.error_message = t.error_message, e.dispatchEvent(n))
                            },
                            iframe: d ? !0 : !1,
                            _trigger: "button"
                        })
                    }), e.parentNode.insertBefore(nt, e)), "moxtra-chooser" === e.getAttribute("type")) {
                    var n = document.createElement("div");
                    Moxtra._chooser = e, n.className = "moxtra-chooser", e.style.display = "none", Moxtra.addListener(n, "click", function() {
                        Moxtra.binderChooser()
                    }), e.parentNode.insertBefore(n, e)
                } else if ("moxtra-pagechooser" === e.getAttribute("type")) {
                    var n = document.createElement("div");
                    Moxtra._pageChooser = e, n.className = "moxtra-pagechooser", e.style.display = "none", Moxtra.addListener(n, "click", function() {
                        Moxtra.pageChooser()
                    }), e.parentNode.insertBefore(n, e)
                }
                if ("moxtra-timeline" === e.getAttribute("type")) {
                    Moxtra._timeline = e;
                    var o;
                    o = {
                        c: 0,
                        i: 0,
                        o: 0,
                        s: 0,
                        m: 0,
                        q: 0,
                        d: Moxtra.baseUrl,
                        n: 5,
                        g: 60,
                        w: 760,
                        h: 500,
                        r: 0,
                        init: function(e, t) {
                            var n = document;
                            if (n.all && "complete" != n.readyState || !n.body) setTimeout(function() {
                                o.init(e, t)
                            }, 100);
                            else {
                                var r = window;
                                r.addEventListener ? r.addEventListener("keyup", o.esc_close) : r.attachEvent("keyup", o.esc_close), o.c = n.createElement("DIV");
                                var r = o.c,
                                    i = "CSS1Compat" != n.compatMode,
                                    i = /MSIE 6/i.test(navigator.userAgent) || /MSIE/i.test(navigator.userAgent) && i ? "absolute" : "fixed";
                                r.style.position = i, r.style.bottom = "5px", r.style.right = "5px", r.style.zIndex = 2147483647, r.style.lineHeight = "12px", e = '<div style="position: absolute; bottom: ' + o.g + 'px; right: 0px; visibility: hidden; overflow: hidden; padding: 0px; height: 0;"><img src="' + o.d + '/api/images/logo-icon.png" style="cursor:pointer;position:absolute;top:0;left:0;border-style:solid;border-color: #00a2e8;border-radius: 5px;" onclick="window[ \'_mchat\' ].toggle(true);" /><div style="width:' + o.w + "px;height:" + o.h + 'px;">' + e + '</div></div><div style="position: absolute; bottom: 0px; right: 0px; width: 45 px; height: 45 px; padding: 3px; cursor: pointer;" title="Click to toggle timeline" onmouseover="window[ \'_mchat\' ].stop();" onclick="window[ \'_mchat\' ].toggle();"><img src="' + o.d + '/api/images/logo.png" alt="Click to toggle timeline" style="max-width: none;border-style:solid;border-color: #00a2e8;border-radius: 5px;border-width: 1px;padding: 3px;width: 40px;height: 40px;"/>', t && (e += '<div style="position: absolute; bottom: 32px; right: 3px; font: bold 14px arial; text-align:center;"><img src="' + o.d + '/api/images/mini_wait.gif"/></div>'), r.innerHTML = e + "</div>", n.body.appendChild(r), o.r = setInterval(o.query, 5e3), o.start()
                            }
                        },
                        start: function() {
                            !o.q && 0 < o.n-- && (o.s = 5, o.m = 30, o.i = setInterval(o.move, 30))
                        },
                        stop: function() {
                            o.q = 1, o.c.style.bottom = "5px", clearInterval(o.i)
                        },
                        move: function() {
                            var e = o.c,
                                t = parseInt(e.style.bottom) + o.s;
                            t < o.m ? t > 5 || (o.s = Math.abs(o.s) - 1, 0 < (o.m -= 4) || (clearInterval(o.i), setTimeout(o.start, 2e3)), t = 5) : (t = o.m, o.s *= -1, o.s -= Math.abs(o.s) % 2), e.style.bottom = t + "px"
                        },
                        toggle: function(e) {
                            clearInterval(o.o);
                            var t = o.c.childNodes[0],
                                n = -100;
                            "hidden" == t.style.visibility && 1 != e && (n *= -1, t.style.width = "0px", t.style.height = "0px", t.style.visibility = "visible"), o.o = setInterval(function() {
                                o.show(t, n)
                            }, 1)
                        },
                        show: function(e, t) {
                            var n = e.offsetWidth + t,
                                r = e.offsetHeight + t,
                                i = 0;
                            r >= 0 || (r = 0), n >= 0 || (n = 0), 0 > n || 0 > r || (n > o.w ? n = o.w : i = 1, r > o.h ? r = o.h : i = 1, e.style.width = n + "px", e.style.height = r + "px"), i && n > 0 && r > 0 || (clearInterval(o.o), n < o.w ? (e.style.visibility = "hidden", e.style.padding = "0") : e.style.padding = "8px"), "hidden" == e.style.visibility && (o.r = setInterval(o.query, 1e3))
                        },
                        query: function() {
                            try {
                                jQuery.ajax({
                                    url: Moxtra.baseUrl + "/oauthapi/unreadfeed",
                                    dataType: "jsonp",
                                    success: function(e) {
                                        e && "ok" == e.status && (clearInterval(o.r), o.r = setInterval(o.query, 18e4)), o.c.lastChild.lastChild.innerHTML = e && e.count ? '<font color="white" style="background-color:red;border-radius: 100%;">' + e.count + "</font>" : ""
                                    },
                                    error: function() {
                                        clearInterval(o.r), o.c.lastChild.lastChild.innerHTML = "", o.r = setInterval(o.query, 1e4)
                                    }
                                })
                            } catch (e) {}
                        },
                        esc_close: function(e) {
                            27 == (e.keyCode || e.which) && o.toggle(!0)
                        }
                    }, window._mchat = o, o.init('<iframe id="_mchatf" src="' + Moxtra._SSOUrl(null, 4) + '" frameborder="0" allowtransparency="true" allowfullscreen="true" style="width: 100%; height: 100%; overflow: scroll; background-color: transparent;"></iframe>', 1)
                }
                if ("moxtra-toolbar" === e.getAttribute("type")) {
                    Moxtra._toolbar = e;
                    var o = {
                        c: 0,
                        i: 0,
                        o: 0,
                        s: 0,
                        m: 0,
                        q: 0,
                        d: Moxtra.baseUrl,
                        n: 5,
                        g: 60,
                        w: 760,
                        h: 500,
                        r: 0,
                        init: function(e, t) {
                            var n = document;
                            if (n.all && "complete" != n.readyState || !n.body) setTimeout(function() {
                                o.init(e, t)
                            }, 100);
                            else {
                                var r = window;
                                r.addEventListener ? r.addEventListener("keyup", o.esc_close) : r.attachEvent("keyup", o.esc_close), o.c = n.createElement("DIV");
                                var r = o.c;
                                r.style.zIndex = 2147483647, r.style.lineHeight = "12px", e = '<div style="position: absolute; bottom: ' + o.g + 'px; right: 0px; visibility: hidden; overflow: hidden; padding: 0px; height: 0;"><img src="' + o.d + '/api/images/logo-icon.png" style="cursor:pointer;position:absolute;top:0;left:0;border-style:solid;border-color: #00a2e8;border-radius: 5px;" onclick="window[ \'_mtool\' ].toggle(true);" /><div style="width:' + o.w + "px;height:" + o.h + 'px;">' + e + '</div></div><div style="position: absolute; bottom: 0px; right: 0px; height: 60px; cursor: pointer; overflow:hidden; padding: 5px; background: #eee;"><div title="Start Meet" style="float:left; width: 45 px; height: 45 px; padding: 3px;" onmouseover="" onclick="return Moxtra.toolbar_startmeet();"><img src="' + o.d + '/api/images/meet.png" alt="Click to start Meet" style="max-width: none;border-style:solid;border-color: #00a2e8;border-radius: 5px;border-width: 1px;padding: 3px;width: 40px;height: 40px;"/></div><div title="Create Note" style="float:left; width: 45 px; height: 45 px; padding: 3px;" onmouseover="" onclick="return Moxtra.toolbar_startnote();"><img src="' + o.d + '/api/images/note.png" alt="Click to create Note"  style="max-width: none;border-style:solid;border-color: #00a2e8;border-radius: 5px;border-width: 1px;padding: 3px;width: 40px;height: 40px;"/></div><div title="Chat Now" style="float:left; width: 45 px; height: 45 px;padding:3px;" onmouseover="" onclick="return Moxtra.toolbar_startchat();"><img src="' + o.d + '/api/images/chat.png" alt="Click to join the conversation" style="max-width: none;border-style:solid;border-color: #00a2e8;border-radius: 5px;border-width: 1px;padding: 3px;width: 40px;height: 40px;"/></div><div title="Click to toggle timeline" style="float:left; width: 45 px; height: 45 px;padding:3px;" onmouseover="window[ \'_mtool\' ].stop();" onclick="window[ \'_mtool\' ].toggle();"><img src="' + o.d + '/api/images/logo.png" alt="Click to toggle timeline" style="max-width: none;border-style:solid;border-color: #00a2e8;border-radius: 5px;border-width: 1px;padding: 3px;width: 40px;height: 40px;"/>', t && (e += '<div style="position: absolute; bottom: 45px; right: 3px; font: bold 14px arial; text-align:center;"><img src="' + o.d + '/api/images/mini_wait.gif"/></div>'), r.innerHTML = e + "</div></div>", n.body.appendChild(r), o.r = setInterval(o.query, 5e3)
                            }
                        },
                        start: function() {},
                        stop: function() {
                            o.q = 1, o.c.style.bottom = "5px", clearInterval(o.i)
                        },
                        toggle: function(e) {
                            clearInterval(o.o);
                            var t = o.c.childNodes[0],
                                n = -100;
                            "hidden" == t.style.visibility && 1 != e && (n *= -1, t.style.width = "0px", t.style.height = "0px", t.style.visibility = "visible"), o.o = setInterval(function() {
                                o.show(t, n)
                            }, 1)
                        },
                        show: function(e, t) {
                            var n = e.offsetWidth + t,
                                r = e.offsetHeight + t,
                                i = 0;
                            r >= 0 || (r = 0), n >= 0 || (n = 0), 0 > n || 0 > r || (n > o.w ? n = o.w : i = 1, r > o.h ? r = o.h : i = 1, e.style.width = n + "px", e.style.height = r + "px"), i && n > 0 && r > 0 || (clearInterval(o.o), n < o.w ? (e.style.visibility = "hidden", e.style.padding = "0") : e.style.padding = "8px"), "hidden" == e.style.visibility && (o.r = setInterval(o.query, 2e3))
                        },
                        query: function() {
                            try {
                                jQuery.ajax({
                                    url: Moxtra.baseUrl + "/oauthapi/unreadfeed",
                                    dataType: "jsonp",
                                    success: function(e) {
                                        e && "ok" == e.status ? (clearInterval(o.r), o.r = setInterval(o.query, 18e4), Moxtra._barlogin = !0) : Moxtra._barlogin = !1, o.c.lastChild.lastChild.lastChild.innerHTML = e && e.count ? '<font color="white" style="background-color:red;border-radius: 100%;">' + e.count + "</font>" : ""
                                    },
                                    error: function() {
                                        clearInterval(o.r), o.c.lastChild.lastChild.lastChild.innerHTML = "", o.r = setInterval(o.query, 1e4), Moxtra._barlogin = !1
                                    }
                                })
                            } catch (e) {}
                        },
                        esc_close: function(e) {
                            27 == (e.keyCode || e.which) && o.toggle(!0)
                        }
                    };
                    window._mtool = o, o.init('<iframe id="_mtoolf" src="' + Moxtra._SSOUrl(null, 4) + '" frameborder="0" allowtransparency="true" allowfullscreen="true" style="width: 100%; height: 100%; overflow: scroll; background-color: transparent;"></iframe>', 1)
                }
            }, m = 0, l = n.length; l > m; m++) t = n[m], o(t);
            b && (i ? eventFire(i, "click") : Moxtra.meet(b)), M && (s ? eventFire(s, "click") : Moxtra.note(M));
            var E = Moxtra_Session.get("meet_endurl");
            E && Moxtra.endMeet(E)
        }, "complete" === document.readyState ? setTimeout(e, 0) : document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent("onreadystatechange", e)
    }();
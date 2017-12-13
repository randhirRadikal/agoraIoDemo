! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("AgoraRTC", [], t) : "object" == typeof exports ? exports.AgoraRTC = t() : e.AgoraRTC = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 26)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            var e, t, n, i, o, r, a, s = 0;
            return e = function(e) {
                e > 5 ? e = 5 : e < 0 && (e = 0), s = e
            }, t = function() {
                var e = arguments[0],
                    t = arguments;
                if (!(e < s)) {
                    switch (e) {
                        case 0:
                            t[0] = "DEBUG:";
                            break;
                        case 1:
                            t[0] = "TRACE:";
                            break;
                        case 2:
                            t[0] = "INFO:";
                            break;
                        case 3:
                            t[0] = "WARNING:";
                            break;
                        case 4:
                            t[0] = "ERROR:";
                            break;
                        default:
                            return
                    }
                    console.log.apply(console, t)
                }
            }, n = function() {
                for (var e = [0], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            }, i = function() {
                for (var e = [1], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            }, o = function() {
                for (var e = [2], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            }, r = function() {
                for (var e = [3], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            }, a = function() {
                for (var e = [4], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            }, {
                DEBUG: 0,
                TRACE: 1,
                INFO: 2,
                WARNING: 3,
                ERROR: 4,
                NONE: 5,
                setLogLevel: e,
                log: t,
                debug: n,
                trace: i,
                info: o,
                warning: r,
                error: a
            }
        }();
        t.default = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                var e = {};
                return e.dispatcher = {}, e.dispatcher.eventListeners = {}, e.addEventListener = function(t, n) {
                    void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []), e.dispatcher.eventListeners[t].push(n)
                }, e.on = e.addEventListener, e.removeEventListener = function(t, n) {
                    var i; - 1 !== (i = e.dispatcher.eventListeners[t].indexOf(n)) && e.dispatcher.eventListeners[t].splice(i, 1)
                }, e.dispatchEvent = function(t) {
                    var n;
                    for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t)
                }, e.dispatchSocketEvent = function(t) {
                    var n;
                    for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t.msg)
                }, e
            },
            o = function(e) {
                var t = {};
                return t.type = e.type, t
            },
            r = function(e) {
                var t = o(e);
                return t.stream = e.stream, t.reason = e.reason, t.msg = e.msg, t
            },
            a = function(e) {
                var t = o(e);
                return t.uid = e.uid, t.attr = e.attr, t.stream = e.stream, t
            },
            s = function(e) {
                var t = o(e);
                return t.msg = e.msg, t
            };
        t.EventDispatcher = i, t.StreamEvent = r, t.ClientEvent = a, t.MediaEvent = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1),
            o = function(e) {
                var t = (0, i.EventDispatcher)(e);
                return t.url = ".", t
            };
        t.default = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o, r, a = {
                INIT: "i",
                JOIN: "j",
                GET_MEDIA: "m",
                PUBLISH: "p",
                SUBSCRIBE: "s"
            },
            s = [],
            d = function(e) {
                e.n === a.INIT && (o = e.ver, r = e.appid, delete e.ver, delete e.appid, 0 === s.length && (i = null)), s.push(e), (!1 === e.succ || e.n === a.PUBLISH || e.n === a.SUBSCRIBE || s.length >= 10) && c()
            },
            c = function() {
                var e = (new Date).getTime(),
                    t = {
                        lts: s[0].lts,
                        elps: e - s[0].lts,
                        events: s,
                        succ: s[s.length - 1].succ,
                        appid: r,
                        ver: o,
                        brwsr: navigator.userAgent
                    };
                i && (t.prev_e = i);
                for (var n = {
                        report: t,
                        sent_ts: Math.round(e / 1e3)
                    }, a = "https:" === document.location.protocol ? "https://" : "http://", d = "https:" === document.location.protocol ? 6443 : 6080, c = 0; c < 1; c++) {
                    var l = a + "webcollector.agora.io:" + d + "/events/sequence";
                    ! function(e, t, n, i) {
                        var o = new XMLHttpRequest;
                        o.open("POST", e, !0), o.setRequestHeader("Content-type", "application/json; charset=utf-8"), o.onload = function() {
                            n(o.responseText)
                        }, o.onerror = function() {
                            i(o)
                        }, o.send(JSON.stringify(t))
                    }(l, n, function(e) {}, function(e) {})
                }
                u()
            },
            u = function() {
                i = s[s.length - 1], s = []
            };
        t.onEvent = d, t.EVENTS = a
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDevices = t.createStream = t.Stream = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = n(12),
            a = i(r),
            s = n(16),
            d = i(s),
            c = n(6),
            u = n(1),
            l = n(3),
            f = n(0),
            p = i(f),
            m = function(e) {
                function t() {
                    return null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35
                }

                function n() {
                    return null !== window.navigator.userAgent.match("Firefox")
                }

                function i(t, n) {
                    return {
                        width: {
                            ideal: t
                        },
                        height: {
                            ideal: n
                        },
                        deviceId: e.cameraId ? {
                            exact: e.cameraId
                        } : void 0
                    }
                }
                var r = (0, u.EventDispatcher)(e);
                if (r.stream = e.stream, r.aux_stream = void 0, r.url = e.url, r.onClose = void 0, r.local = !1, r.video = e.video, r.audio = e.audio, r.screen = e.screen, r.screenAttributes = {
                        width: 1920,
                        height: 1080,
                        maxFr: 5,
                        minFr: 1
                    }, r.videoSize = e.videoSize, r.player = void 0, e.attributes = e.attributes || {}, r.videoEnabled = !0, r.audioEnabled = !0, !(void 0 === r.videoSize || r.videoSize instanceof Array && 4 === r.videoSize.length)) throw Error("Invalid Video Size");
                r.videoSize = [640, 480, 640, 480], void 0 !== e.local && !0 !== e.local || (r.local = !0), r.initialized = !r.local;
                var s = {
                    true: !0,
                    unspecified: !0,
                    "120p_1": i(160, 120),
                    "120p_3": i(120, 120),
                    "180p_1": i(320, 180),
                    "180p_3": i(180, 180),
                    "180p_4": i(240, 180),
                    "240p_1": i(320, 240),
                    "240p_3": i(240, 240),
                    "240p_4": i(424, 240),
                    "360p_1": i(640, 360),
                    "360p_3": i(360, 360),
                    "360p_4": i(640, 360),
                    "360p_6": i(360, 360),
                    "360p_7": i(480, 360),
                    "360p_8": i(480, 360),
                    "360p_9": i(640, 360),
                    "360p_10": i(640, 360),
                    "360p_11": i(640, 360),
                    "480p_1": i(640, 480),
                    "480p_2": i(640, 480),
                    "480p_3": i(480, 480),
                    "480p_4": i(640, 480),
                    "480p_6": i(480, 480),
                    "480p_8": i(848, 480),
                    "480p_9": i(848, 480),
                    "480p_10": i(640, 480),
                    "720p_1": i(1280, 720),
                    "720p_2": i(1280, 720),
                    "720p_3": i(1280, 720),
                    "720p_5": i(960, 720),
                    "720p_6": i(960, 720),
                    "1080p_1": i(1920, 1080),
                    "1080p_2": i(1920, 1080),
                    "1080p_3": i(1920, 1080),
                    "1080p_5": i(1920, 1080),
                    "1440p_1": i(2560, 1440),
                    "1440p_2": i(2560, 1440),
                    "4k_1": i(3840, 2160),
                    "4k_3": i(3840, 2160)
                };
                return r.unmuteAudio = void 0, r.muteAudio = void 0, r.unmuteVideo = void 0, r.muteVideo = void 0, r.setVideoResolution = function(t) {
                    return t += "", void 0 !== s[t] && (e.video = s[t], e.attributes = e.attributes || {}, e.attributes.resolution = t, !0)
                }, r.setVideoFrameRate = function(t) {
                    return "object" === (void 0 === t ? "undefined" : o(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {}, e.attributes.minFrameRate = t[0], e.attributes.maxFrameRate = t[1], !0)
                }, r.setVideoBitRate = function(t) {
                    return "object" === (void 0 === t ? "undefined" : o(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {}, e.attributes.minVideoBW = t[0], e.attributes.maxVideoBW = t[1], !0)
                }, r.setScreenProfile = function(e) {
                    if ("string" == typeof e && r.screen) {
                        switch (e) {
                            case "480p_1":
                                r.screenAttributes.width = 640, r.screenAttributes.height = 480, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                                break;
                            case "480p_2":
                                r.screenAttributes.width = 640, r.screenAttributes.height = 480, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25;
                                break;
                            case "720p_1":
                                r.screenAttributes.width = 1280, r.screenAttributes.height = 720, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                                break;
                            case "720p_2":
                                r.screenAttributes.width = 1280, r.screenAttributes.height = 720, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25;
                                break;
                            case "1080p_1":
                                r.screenAttributes.width = 1920, r.screenAttributes.height = 1080, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                                break;
                            case "1080p_2":
                                r.screenAttributes.width = 1920, r.screenAttributes.height = 1080, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25
                        }
                        return !0
                    }
                    return !1
                }, r.setVideoProfile = function(e) {
                    if ("string" == typeof e && r.video) {
                        switch (e) {
                            case "120p":
                            case "120P":
                            case "120p_1":
                            case "120P_1":
                                r.setVideoResolution("120p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 65]);
                                break;
                            case "120p_3":
                            case "120P_3":
                                r.setVideoResolution("120p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 50]);
                                break;
                            case "180p":
                            case "180P":
                            case "180p_1":
                            case "180P_1":
                                r.setVideoResolution("180p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 140]);
                                break;
                            case "180p_3":
                            case "180P_3":
                                r.setVideoResolution("180p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 100]);
                                break;
                            case "180p_4":
                            case "180P_4":
                                r.setVideoResolution("180p_4"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 120]);
                                break;
                            case "240p":
                            case "240P":
                            case "240p_1":
                            case "240P_1":
                                r.setVideoResolution("240p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 200]);
                                break;
                            case "240p_3":
                            case "240P_3":
                                r.setVideoResolution("240p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 140]);
                                break;
                            case "240p_4":
                            case "240P_4":
                                r.setVideoResolution("240p_4"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 220]);
                                break;
                            case "360p":
                            case "360P":
                            case "360p_1":
                            case "360P_1":
                                r.setVideoResolution("360p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 400]);
                                break;
                            case "360p_3":
                            case "360P_3":
                                r.setVideoResolution("360p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 260]);
                                break;
                            case "360p_4":
                            case "360P_4":
                                r.setVideoResolution("360p_4"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 600]);
                                break;
                            case "360p_6":
                            case "360P_6":
                                r.setVideoResolution("360p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 400]);
                                break;
                            case "360p_7":
                            case "360P_7":
                                r.setVideoResolution("360p_7"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 320]);
                                break;
                            case "360p_8":
                            case "360P_8":
                                r.setVideoResolution("360p_8"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 490]);
                                break;
                            case "360p_9":
                            case "360P_9":
                                r.setVideoResolution("360p_9"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 800]);
                                break;
                            case "360p_10":
                            case "360P_10":
                                r.setVideoResolution("360p_10"), r.setVideoFrameRate([24, 24]), r.setVideoBitRate([20, 800]);
                                break;
                            case "360p_11":
                            case "360P_11":
                                r.setVideoResolution("360p_11"), r.setVideoFrameRate([24, 24]), r.setVideoBitRate([20, 1e3]);
                                break;
                            case "480p":
                            case "480P":
                            case "480p_1":
                            case "480P_1":
                                r.setVideoResolution("480p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 500]);
                                break;
                            case "480p_2":
                            case "480P_2":
                                r.setVideoResolution("480p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 1e3]);
                                break;
                            case "480p_3":
                            case "480P_3":
                                r.setVideoResolution("480p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 400]);
                                break;
                            case "480p_4":
                            case "480P_4":
                                r.setVideoResolution("480p_4"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 750]);
                                break;
                            case "480p_6":
                            case "480P_6":
                                r.setVideoResolution("480p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 600]);
                                break;
                            case "480p_8":
                            case "480P_8":
                                r.setVideoResolution("480p_8"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 610]);
                                break;
                            case "480p_9":
                            case "480P_9":
                                r.setVideoResolution("480p_9"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 930]);
                                break;
                            case "480p_10":
                            case "480P_10":
                                r.setVideoResolution("480p_10"), r.setVideoFrameRate([10, 10]), r.setVideoBitRate([20, 400]);
                                break;
                            case "720p":
                            case "720P":
                            case "720p_1":
                            case "720P_1":
                                r.setVideoResolution("720p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([30, 1130]);
                                break;
                            case "720p_2":
                            case "720P_2":
                                r.setVideoResolution("720p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 2e3]);
                                break;
                            case "720p_3":
                            case "720P_3":
                                r.setVideoResolution("720p_3"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 1710]);
                                break;
                            case "720p_5":
                            case "720P_5":
                                r.setVideoResolution("720p_5"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([30, 910]);
                                break;
                            case "720p_6":
                            case "720P_6":
                                r.setVideoResolution("720p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 1380]);
                                break;
                            case "1080p":
                            case "1080P":
                            case "1080p_1":
                            case "1080P_1":
                                r.setVideoResolution("1080p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([50, 2080]);
                                break;
                            case "1080p_2":
                            case "1080P_2":
                                r.setVideoResolution("1080p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 3e3]);
                                break;
                            case "1080p_3":
                            case "1080P_3":
                                r.setVideoResolution("1080p_3"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 3150]);
                                break;
                            case "1080p_5":
                            case "1080P_5":
                                r.setVideoResolution("1080p_5"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 4780]);
                                break;
                            case "1440p":
                            case "1440P":
                            case "1440p_1":
                            case "1440P_1":
                                r.setVideoResolution("1440p_1"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 4850]);
                                break;
                            case "1440p_2":
                            case "1440P_2":
                                r.setVideoResolution("1440p_2"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 7350]);
                                break;
                            case "4k":
                            case "4K":
                            case "4k_1":
                            case "4K_1":
                                r.setVideoResolution("4k_1"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 8910]);
                                break;
                            case "4k_3":
                            case "4K_3":
                                r.setVideoResolution("4k_3"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 13500]);
                                break;
                            default:
                                r.setVideoResolution("480p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 500])
                        }
                        return !0
                    }
                    return !1
                }, r.getId = function() {
                    return e.streamID
                }, r.getAttributes = function() {
                    return e.screen ? r.screenAttributes : e.attributes
                }, r.hasAudio = function() {
                    return e.audio
                }, r.hasVideo = function() {
                    return e.video
                }, r.hasScreen = function() {
                    return e.screen
                }, r.isVideoOn = function() {
                    return r.hasVideo && r.videoEnabled
                }, r.isAudioOn = function() {
                    return r.hasAudio && r.audioEnabled
                }, r.successCbWapper = function(e, t) {
                    (0, l.onEvent)({
                        n: l.EVENTS.GET_MEDIA,
                        lts: e,
                        elps: (new Date).getTime() - e,
                        succ: !0
                    }), t()
                }, r.failCbWapper = function(e, t, n) {
                    (0, l.onEvent)({
                        n: l.EVENTS.GET_MEDIA,
                        lts: e,
                        elps: (new Date).getTime() - e,
                        succ: !1,
                        ec: n.msg
                    }), t(n)
                }, r.init = function(i, a) {
                    var s = (new Date).getTime(),
                        d = arguments[2];
                    if (void 0 === d && (d = 2), !0 === r.initialized) return void("function" == typeof a && r.failCbWapper(s, a, {
                        type: "warning",
                        msg: "STREAM_ALREADY_INITIALIZED"
                    }));
                    if (!0 !== r.local) return void("function" == typeof a && r.failCbWapper(s, a, {
                        type: "warning",
                        msg: "STREAM_NOT_LOCAL"
                    }));
                    try {
                        if ((e.audio || e.video || e.screen) && void 0 === e.url) {
                            p.default.debug("Requested access to local media");
                            var u = e.video;
                            if (e.screen) var l = {
                                video: u,
                                audio: e.audio,
                                screen: !0,
                                data: !0,
                                extensionId: e.extensionId,
                                attributes: r.screenAttributes,
                                fake: e.fake
                            };
                            else {
                                var l = {
                                    video: u,
                                    audio: e.audio,
                                    fake: e.fake
                                };
                                if (!t()) {
                                    var f = 15,
                                        m = 15;
                                    void 0 !== e.attributes.minFrameRate && (f = e.attributes.minFrameRate), void 0 !== e.attributes.maxFrameRate && (m = e.attributes.maxFrameRate), n() ? !0 === l.video ? (l.video = {
                                        width: {
                                            ideal: r.videoSize[0]
                                        },
                                        height: {
                                            ideal: r.videoSize[1]
                                        },
                                        frameRate: {
                                            ideal: f,
                                            max: m
                                        }
                                    }, r.setVideoBitRate([500, 500])) : "object" === o(l.video) && (l.video.frameRate = {
                                        ideal: f,
                                        max: m
                                    }) : (!0 === l.audio && (l.audio = {
                                        deviceId: e.microphoneId ? {
                                            exact: e.microphoneId
                                        } : void 0
                                    }), !0 === l.video ? (l.video = {
                                        width: {
                                            ideal: r.videoSize[0]
                                        },
                                        height: {
                                            ideal: r.videoSize[1]
                                        },
                                        frameRate: {
                                            ideal: f,
                                            max: m
                                        }
                                    }, r.setVideoBitRate([500, 500])) : "object" === o(l.video) && (l.video.frameRate = {
                                        ideal: f,
                                        max: m
                                    }))
                                }
                            }
                            p.default.debug(l);
                            var v = Object.assign({}, l);
                            if ((0, c.GetUserMedia)(v, function(e) {
                                    p.default.debug("User has granted access to local media"), r.stream = e, r.successCbWapper(s, i), r.initialized = !0
                                }, function(e) {
                                    var t = {
                                        type: "error",
                                        msg: e.name || e
                                    };
                                    switch (t.msg) {
                                        case "Starting video failed":
                                        case "TrackStartError":
                                            if (r.videoSize = void 0, d > 0) return void setTimeout(function() {
                                                r.init(i, a, d - 1)
                                            }, 1);
                                            t.msg = "MEDIA_OPTION_INVALID";
                                            break;
                                        case "DevicesNotFoundError":
                                            t.msg = "DEVICES_NOT_FOUND";
                                            break;
                                        case "NotSupportedError":
                                            t.msg = "NOT_SUPPORTED";
                                            break;
                                        case "PermissionDeniedError":
                                            t.msg = "PERMISSION_DENIED";
                                            break;
                                        case "PERMISSION_DENIED":
                                            break;
                                        case "ConstraintNotSatisfiedError":
                                            t.msg = "CONSTRAINT_NOT_SATISFIED";
                                            break;
                                        default:
                                            t.msg || (t.msg = "UNDEFINED")
                                    }
                                    p.default.error("Media access:", t.msg), "function" == typeof a && r.failCbWapper(s, a, t)
                                }), e.screen && e.audio) {
                                var g = {
                                    video: !1,
                                    audio: l.audio
                                };
                                p.default.debug(g), (0, c.GetUserMedia)(g, function(e) {
                                    p.default.info("User has granted access to auxiliary local media."), r.aux_stream = e
                                }, function(e) {
                                    var t = {
                                        type: "error",
                                        msg: e.name || e
                                    };
                                    switch (t.msg) {
                                        case "Starting video failed":
                                        case "TrackStartError":
                                            if (r.videoSize = void 0, d > 0) return void setTimeout(function() {
                                                r.init(i, a, d - 1)
                                            }, 1);
                                            t.msg = "MEDIA_OPTION_INVALID";
                                            break;
                                        case "DevicesNotFoundError":
                                            t.msg = "DEVICES_NOT_FOUND";
                                            break;
                                        case "NotSupportedError":
                                            t.msg = "NOT_SUPPORTED";
                                            break;
                                        case "PermissionDeniedError":
                                            t.msg = "PERMISSION_DENIED";
                                            break;
                                        case "PERMISSION_DENIED":
                                            break;
                                        case "ConstraintNotSatisfiedError":
                                            t.msg = "CONSTRAINT_NOT_SATISFIED";
                                            break;
                                        default:
                                            t.msg || (t.msg = "UNDEFINED")
                                    }
                                    p.default.error("Media access:", t.msg), "function" == typeof a && r.failCbWapper(s, a, t)
                                })
                            }
                        } else "function" == typeof a && r.failCbWapper(s, a, {
                            type: "warning",
                            msg: "STREAM_HAS_NO_MEDIA_ATTRIBUTES"
                        })
                    } catch (e) {
                        p.default.error("Stream init:", e), "function" == typeof a && r.failCbWapper(s, a, {
                            type: "error",
                            msg: e.message || e
                        })
                    }
                }, r.close = function() {
                    if (p.default.debug("Close stream with id", e.streamID), void 0 !== r.stream) {
                        var t = r.stream.getTracks();
                        for (var n in t) t.hasOwnProperty(n) && t[n].stop();
                        r.stream = void 0
                    }
                    r.initialized = !1, r.unmuteAudio = void 0, r.muteAudio = void 0, r.unmuteVideo = void 0, r.muteVideo = void 0
                }, r.enableAudio = function() {
                    return p.default.debug("Enable audio stream with id", e.streamID), !(!r.hasAudio() || !r.initialized || void 0 === r.stream || !0 === r.stream.getAudioTracks()[0].enabled) && (void 0 !== r.unmuteAudio && r.unmuteAudio(), r.audioEnabled = !0, r.stream.getAudioTracks()[0].enabled = !0, !0)
                }, r.disableAudio = function() {
                    return p.default.debug("Disable audio stream with id", e.streamID), !!(r.hasAudio() && r.initialized && void 0 !== r.stream && r.stream.getAudioTracks()[0].enabled) && (void 0 !== r.muteAudio && r.muteAudio(), r.audioEnabled = !1, r.stream.getAudioTracks()[0].enabled = !1, !0)
                }, r.enableVideo = function() {
                    return p.default.debug("Enable video stream with id", e.streamID), !(!r.initialized || void 0 === r.stream || !r.stream.getVideoTracks().length || !0 === r.stream.getVideoTracks()[0].enabled) && (void 0 !== r.unmuteVideo && r.unmuteVideo(), r.videoEnabled = !0, r.stream.getVideoTracks()[0].enabled = !0, !0)
                }, r.disableVideo = function() {
                    return p.default.debug("Disable video stream with id", e.streamID), !!(r.initialized && void 0 !== r.stream && r.stream.getVideoTracks().length && r.stream.getVideoTracks()[0].enabled) && (void 0 !== r.muteVideo && r.muteVideo(), r.videoEnabled = !1, r.stream.getVideoTracks()[0].enabled = !1, !0)
                }, r.play = function(e, t) {
                    r.showing = !1, !r.local || r.video || r.screen ? void 0 !== e && (r.player = new a.default({
                        id: r.getId(),
                        stream: r,
                        elementID: e,
                        options: void 0,
                        url: t
                    }), r.showing = !0) : r.hasAudio() && (r.player = new d.default({
                        id: r.getId(),
                        stream: r,
                        elementID: e,
                        options: void 0,
                        url: t
                    }), r.showing = !0)
                }, r.stop = function() {
                    p.default.debug("Stop stream player with id", e.streamID), void 0 !== r.player && r.player.destroy()
                }, r
            },
            v = function(e) {
                return p.default.debug("Create stream with id", e.streamID), m(e)
            },
            g = function(e) {
                navigator.mediaDevices && navigator.mediaDevices.enumerateDevices().then(function(t) {
                    e(t)
                })
            };
        t.Stream = m, t.createStream = v, t.getDevices = g
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            r = i(o),
            a = n(13),
            s = i(a),
            d = function(e) {
                var t, n, i = (0, r.default)({});
                return i.elementID = e.elementID, i.id = e.id, i.url = e.url, i.div = document.createElement("div"), i.div.setAttribute("id", "bar_" + i.id), i.bar = document.createElement("div"), i.bar.setAttribute("style", "width: 100%; height: 15%; max-height: 30px; position: absolute; bottom: 0; right: 0; background-color: rgba(255,255,255,0.62)"), i.bar.setAttribute("id", "subbar_" + i.id), i.link = document.createElement("a"), i.link.setAttribute("href", "http://www.lynckia.com/"), i.link.setAttribute("target", "_blank"), i.logo = document.createElement("img"), i.logo.setAttribute("style", "width: 100%; height: 100%; max-width: 30px; position: absolute; top: 0; left: 2px;"), i.logo.setAttribute("alt", "Lynckia"), n = function(e) {
                    "block" !== e ? e = "none" : clearTimeout(t), i.div.setAttribute("style", "width: 100%; height: 100%; position: absolute; bottom: 0; right: 0; display:" + e)
                }, i.display = function() {
                    n("block")
                }, i.hide = function() {
                    t = setTimeout(n, 1e3)
                }, document.getElementById(i.elementID).appendChild(i.div), i.div.appendChild(i.bar), e.stream.screen || void 0 !== e.options && void 0 !== e.options.speaker && !0 !== e.options.speaker || (i.speaker = new s.default({
                    elementID: "subbar_" + i.id,
                    id: i.id,
                    stream: e.stream,
                    media: e.media,
                    url: i.url
                })), i.display(), i.hide(), i
            };
        t.default = d
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GetUserMedia = t.Connection = void 0;
        var o = n(17),
            r = i(o),
            a = n(18),
            s = i(a),
            d = n(19),
            c = i(d),
            u = n(20),
            l = i(u),
            f = n(21),
            p = i(f),
            m = n(0),
            v = i(m),
            g = 103,
            _ = function(e) {
                var t = {};
                if (e.session_id = g += 1, "undefined" != typeof window && window.navigator)
                    if (null !== window.navigator.userAgent.match("Firefox")) t.browser = "mozilla", t = (0, p.default)(e);
                    else if (window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) v.default.debug("Safari"), t = (0, c.default)(e), t.browser = "safari";
                else if (window.navigator.userAgent.indexOf("MSIE ")) t = (0, s.default)(e), t.browser = "ie";
                else if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] >= 26) t = (0, s.default)(e), t.browser = "chrome-stable";
                else {
                    if (!(window.navigator.userAgent.toLowerCase().indexOf("chrome") >= 40)) throw t.browser = "none", "WebRTC stack not available";
                    t = (0, r.default)(e), t.browser = "chrome-canary"
                } else v.default.error("Publish/subscribe video/audio streams not supported yet"), t = (0, l.default)(e);
                return t
            },
            b = function(e, t, n) {
                if (navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, e.screen)
                    if (v.default.debug("Screen access requested"), null !== window.navigator.userAgent.match("Firefox")) {
                        var i = {};
                        void 0 != e.video.mandatory ? (i.video = e.video, i.video.mediaSource = "window") : i = {
                            video: {
                                mediaSource: "window"
                            }
                        }, navigator.getMedia(i, t, n)
                    } else if (null !== window.navigator.userAgent.match("Chrome")) {
                    if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34) return void n({
                        code: "This browser does not support screen sharing"
                    });
                    var o = "okeephmleflklcdebijnponpabbmmgeo";
                    e.extensionId && (v.default.debug("extensionId supplied, using " + e.extensionId), o = e.extensionId), v.default.debug("Screen access on chrome stable, looking for extension");
                    try {
                        chrome.runtime.sendMessage(o, {
                            getStream: !0
                        }, function(o) {
                            if (void 0 === o) {
                                v.default.debug("Access to screen denied");
                                return void n({
                                    code: "Access to screen denied"
                                })
                            }
                            var r = o.streamId,
                                a = e.attributes.width,
                                s = e.attributes.height,
                                d = e.attributes.maxFr,
                                c = e.attributes.minFr;
                            i = {
                                video: {
                                    mandatory: {
                                        chromeMediaSource: "desktop",
                                        chromeMediaSourceId: r,
                                        maxHeight: s,
                                        maxWidth: a,
                                        maxFrameRate: d,
                                        minFrameRate: c
                                    }
                                }
                            }, navigator.getMedia(i, t, n)
                        })
                    } catch (e) {
                        v.default.debug("AgoraRTC screensharing plugin is not accessible");
                        var r = {
                            code: "no_plugin_present"
                        };
                        return void n(r)
                    }
                } else v.default.debug("This browser does not support screenSharing");
                else window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? navigator.mediaDevices.getUserMedia(e).then(t).catch(n) : "undefined" != typeof navigator && navigator.getMedia ? navigator.getMedia(e, t, n) : v.default.error("Video/audio streams not supported yet")
            };
        t.Connection = _, t.GetUserMedia = b
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e) {
            e && e.apply(this, [].slice.call(arguments, 1))
        };
        t.default = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            FAILED: "FAILED",
            INVALID_KEY: "INVALID_KEY",
            INVALID_OPERATION: "INVALID_OPERATION",
            INVALID_PARAMETER: "INVALID_PARAMETER",
            INVALID_LOCAL_STREAM: "INVALID_LOCAL_STREAM",
            INVALID_REMOTE_STREAM: "INVALID_REMOTE_STREAM",
            INVALID_DYNAMIC_KEY: "INVALID_DYNAMIC_KEY",
            DYNAMIC_KEY_TIMEOUT: "DYNAMIC_KEY_TIMEOUT",
            NO_VOCS_AVAILABLE: "NO_VOCS_AVAILABLE",
            NO_VOS_AVAILABLE: "ERR_NO_VOS_AVAILABLE",
            JOIN_CHANNEL_TIMEOUT: "ERR_JOIN_CHANNEL_TIMEOUT",
            NO_AVAILABLE_CHANNEL: "NO_AVAILABLE_CHANNEL",
            LOOKUP_CHANNEL_TIMEOUT: "LOOKUP_CHANNEL_TIMEOUT",
            LOOKUP_CHANNEL_REJECTED: "LOOKUP_CHANNEL_REJECTED",
            OPEN_CHANNEL_TIMEOUT: "OPEN_CHANNEL_TIMEOUT",
            OPEN_CHANNEL_REJECTED: "OPEN_CHANNEL_REJECTED",
            REQUEST_DEFERRED: "REQUEST_DEFERRED",
            SOCKET_ERROR: "SOCKET_ERROR",
            SOCKET_DISCONNECTED: "SOCKET_DISCONNECTED",
            PEERCONNECTION_FAILED: "PEERCONNECTION_FAILED",
            CONNECT_GATEWAY_ERROR: "CONNECT_GATEWAY_ERROR",
            SERVICE_NOT_AVAILABLE: "SERVICE_NOT_AVAILABLE",
            JOIN_CHANNEL_FAILED: "JOIN_CHANNEL_FAILED",
            PUBLISH_STREAM_FAILED: "PUBLISH_STREAM_FAILED",
            UNPUBLISH_STREAM_FAILED: "UNPUBLISH_STREAM_FAILED",
            SUBSCRIBE_STREAM_FAILED: "SUBSCRIBE_STREAM_FAILED",
            UNSUBSCRIBE_STREAM_FAILED: "UNSUBSCRIBE_STREAM_FAILED",
            NO_SUCH_REMOTE_STREAM: "NO_SUCH_REMOTE_STREAM",
            ERR_FAILED: "1",
            ERR_INVALID_VENDOR_KEY: "101",
            ERR_INVALID_CHANNEL_NAME: "102",
            WARN_NO_AVAILABLE_CHANNEL: "103",
            WARN_LOOKUP_CHANNEL_TIMEOUT: "104",
            WARN_LOOKUP_CHANNEL_REJECTED: "105",
            WARN_OPEN_CHANNEL_TIMEOUT: "106",
            WARN_OPEN_CHANNEL_REJECTED: "107",
            WARN_REQUEST_DEFERRED: "108",
            ERR_DYNAMIC_KEY_TIMEOUT: "109",
            ERR_INVALID_DYNAMIC_KEY: "110",
            ERR_NO_VOCS_AVAILABLE: "2000",
            ERR_NO_VOS_AVAILABLE: "2001",
            ERR_JOIN_CHANNEL_TIMEOUT: "2002"
        };
        t.default = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = n(4),
            a = n(22),
            s = i(a),
            d = n(6),
            c = n(1),
            u = n(3),
            l = n(0),
            f = i(l),
            p = n(8),
            m = i(p),
            v = n(7),
            g = i(v),
            _ = n(10),
            b = i(_),
            h = function(e) {
                function t() {
                    for (var e in R.remoteStreams)
                        if (R.remoteStreams.hasOwnProperty(e)) {
                            var t = R.remoteStreams[e];
                            t.stop(), t.close(), delete R.remoteStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                        }
                }
                var n = function() {
                        return {
                            _type: "ping"
                        }
                    },
                    i = function() {
                        return {
                            _type: "join",
                            message: {
                                key: R.key,
                                channel: R.channel,
                                uid: R.uid,
                                version: e.version,
                                browser: navigator.userAgent,
                                mode: e.mode,
                                role: e.role,
                                config: R.config
                            }
                        }
                    },
                    a = function() {
                        return {
                            _type: "leave"
                        }
                    },
                    l = function(e) {
                        return {
                            _type: "control",
                            message: e
                        }
                    },
                    p = function(e) {
                        return {
                            _type: "token",
                            message: e
                        }
                    },
                    v = function() {
                        return {
                            _type: "p2p_lost",
                            message: null
                        }
                    },
                    _ = function(e) {
                        return {
                            _type: "unpublish",
                            message: e
                        }
                    },
                    h = function(e) {
                        return {
                            _type: "unsubscribe",
                            message: e
                        }
                    },
                    E = function(e, t) {
                        return {
                            _type: "switchVideoStream",
                            message: {
                                id: e,
                                type: t
                            }
                        }
                    },
                    S = function(e, t) {
                        return {
                            _type: "publish",
                            options: e,
                            sdp: t
                        }
                    },
                    I = function(e) {
                        return {
                            _type: "publish_stats",
                            options: {
                                stats: e
                            },
                            sdp: null
                        }
                    },
                    A = function(e, t) {
                        return {
                            _type: "subscribe",
                            options: e,
                            sdp: t
                        }
                    },
                    y = function(e, t) {
                        return {
                            _type: "subscribe_stats",
                            options: {
                                id: e,
                                stats: t
                            },
                            sdp: null
                        }
                    },
                    R = (0, c.EventDispatcher)(e);
                R.socket = void 0, R.state = 0, R.mode = e.mode, R.role = e.role, R.codec = e.codec, R.config = {}, R.timers = {}, R.timer_counter = {}, R.localStreams = {}, R.remoteStreams = {}, R.attemps = 1, R.p2p_attemps = 1, R.audioLevel = {}, R.activeSpeaker = void 0;
                var C = g.default;
                R.remoteVideoStreamTypes = {
                    REMOTE_VIDEO_STREAM_HIGH: 0,
                    REMOTE_VIDEO_STREAM_LOW: 1,
                    REMOTE_VIDEO_STREAM_MEDIUM: 2
                };
                var N = function(e, t, n, i, o) {
                        C(o, t);
                        var r = {
                            n: u.EVENTS.JOIN,
                            lts: e,
                            elps: (new Date).getTime() - e,
                            succ: !0,
                            addl_s2: n,
                            addl_i1: t
                        };
                        i && (r.addl_s1 = i), (0, u.onEvent)(r)
                    },
                    w = function(e, t, n, i, o, r) {
                        C(o, r);
                        var a = {
                            n: u.EVENTS.JOIN,
                            lts: e,
                            elps: (new Date).getTime() - e,
                            succ: !1,
                            ec: r,
                            addl_s2: n,
                            addl_i1: t
                        };
                        i && (a.addl_s1 = i), (0, u.onEvent)(a)
                    };
                R.configPublisher = function(e) {
                    R.config = e
                }, R.join = function(e, t, o, r, a, s) {
                    var d = (new Date).getTime();
                    return f.default.debug("Joining to channel " + o + " ts", d), 0 !== R.state ? (w(d, r, o, e.host, s, m.default.INVALID_OPERATION), void f.default.error("Server already in connecting/connected state")) : null !== r && void 0 !== r && parseInt(r) !== r ? (w(d, r, o, e.host, s, m.default.INVALID_PARAMETER), void f.default.error("Input uid is invalid")) : (R.token = e, R.uid = r, R.channel = o, R.key = t, R.state = 1, void V(e, function(t) {
                        R.stunServerUrl = t.stunServerUrl, R.turnServer = t.turnServer, R.state = 2, f.default.debug("Connected to gateway server ts", (new Date).getTime()), R.pingTimer = setInterval(function() {
                            L(n(), function() {}, function(e) {})
                        }, 3e3), L(i(), function(t) {
                            R.uid = t, N(d, t, o, e.host, a)
                        }, function(t) {
                            f.default.error("User join failed [" + t + "]"), t === m.default.ERR_INVALID_VENDOR_KEY ? t = m.default.INVALID_KEY : t === m.default.ERR_INVALID_DYNAMIC_KEY ? t = m.default.INVALID_DYNAMIC_KEY : t === m.default.ERR_DYNAMIC_KEY_TIMEOUT ? t = m.default.DYNAMIC_KEY_TIMEOUT : t === m.default.ERR_NO_VOCS_AVAILABLE ? t = m.default.NO_VOCS_AVAILABLE : t === m.default.ERR_NO_VOS_AVAILABLE ? t = m.default.NO_VOS_AVAILABLE : t === m.default.ERR_JOIN_CHANNEL_TIMEOUT ? t = m.default.JOIN_CHANNEL_TIMEOUT : t === m.default.ERR_FAILED ? t = m.default.FAILED : t === m.default.WARN_NO_AVAILABLE_CHANNEL ? t = m.default.NO_AVAILABLE_CHANNEL : t === m.default.WARN_LOOKUP_CHANNEL_TIMEOUT ? t = m.default.LOOKUP_CHANNEL_TIMEOUT : t === m.default.WARN_LOOKUP_CHANNEL_REJECTED ? t = m.default.LOOKUP_CHANNEL_REJECTED : t === m.default.WARN_OPEN_CHANNEL_TIMEOUT ? t = m.default.OPEN_CHANNEL_TIMEOUT : t === m.default.WARN_OPEN_CHANNEL_REJECTED ? t = m.default.OPEN_CHANNEL_REJECTED : t === m.default.WARN_REQUEST_DEFERRED && (t = m.default.REQUEST_DEFERRED), w(d, r, o, e.host, s, t)
                        })
                    }, function(t) {
                        w(d, r, o, e.host, s, t), f.default.error("User join failed [" + t + "]")
                    }))
                }, R.leave = function(e, n) {
                    if (f.default.debug("Leaving channel ts", (new Date).getTime()), 2 != R.state) return void C(e);
                    clearInterval(R.pingTimer), L(a(), function(t) {
                        e(t), R.socket.disconnect(), R.socket = void 0
                    }, n);
                    for (var i in R.localStreams)
                        if (R.localStreams.hasOwnProperty(i)) {
                            var o = R.localStreams[i];
                            delete R.localStreams[i], void 0 !== o.pc && (o.pc.close(), o.pc = void 0)
                        }
                    t(), R.state = 0
                }, R.publishFailCbWapper = function(e, t, n) {
                    C(t, n), (0, u.onEvent)({
                        n: u.EVENTS.PUBLISH,
                        lts: e,
                        elps: (new Date).getTime() - e,
                        succ: !1,
                        ec: n
                    })
                }, R.publish = function(e, t) {
                    var n = (new Date).getTime();
                    if (f.default.debug("Start publishing local stream ts", n), "object" !== (void 0 === e ? "undefined" : o(e)) || null === e) return R.publishFailCbWapper(n, t, m.default.INVALID_LOCAL_STREAM), void f.default.error("Invalid local stream");
                    if (null === e.stream && void 0 === e.url) return R.publishFailCbWapper(n, t, m.default.INVALID_LOCAL_STREAM), void f.default.error("Invalid local media stream");
                    if (2 !== R.state) return R.publishFailCbWapper(n, t, m.default.INVALID_OPERATION), void f.default.error("User is not in the session");
                    var i = e.getAttributes() || {};
                    e.local && void 0 === R.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen()) && (void 0 !== e.url ? k(S({
                        state: "url",
                        audio: e.hasAudio(),
                        video: e.hasVideo(),
                        attributes: e.getAttributes(),
                        mode: R.mode
                    }, e.url), function(i, o) {
                        "success" === i ? (e.getId = function() {
                            return o
                        }, R.localStreams[o] = e, e.onClose = function() {
                            R.unpublish(e)
                        }, (0, u.onEvent)({
                            n: u.EVENTS.PUBLISH,
                            lts: n,
                            elps: (new Date).getTime() - n,
                            succ: !0
                        })) : (R.publishFailCbWapper(n, t, m.default.PUBLISH_STREAM_FAILED), f.default.error("Publish local stream failed", i))
                    }) : (R.localStreams[e.getId()] = e, e.pc = (0, d.Connection)({
                        callback: function(i) {
                            (0, b.default)() && console.log(i), k(S({
                                state: "offer",
                                id: e.getId(),
                                audio: e.hasAudio(),
                                video: e.hasVideo() || e.hasScreen(),
                                attributes: e.getAttributes(),
                                mode: R.mode,
                                codec: R.codec
                            }, i), function(i, o) {
                                if ("error" === i) return R.publishFailCbWapper(n, t, m.default.PUBLISH_STREAM_FAILED), void f.default.error("Publish local stream failed");
                                e.pc.onsignalingmessage = function(t) {
                                    e.pc.onsignalingmessage = function() {}, k(S({
                                        state: "ok",
                                        id: e.getId(),
                                        audio: e.hasAudio(),
                                        video: e.hasVideo(),
                                        screen: e.hasScreen(),
                                        attributes: e.getAttributes(),
                                        mode: R.mode
                                    }, t)), e.getId = function() {
                                        return o.id
                                    }, f.default.debug("Local stream published with uid", o.id), e.onClose = function() {
                                        R.unpublish(e)
                                    }, e.unmuteAudio = function() {
                                        L(l({
                                            action: "audio-out-on",
                                            streamId: e.getId()
                                        }), function() {}, function() {})
                                    }, e.unmuteVideo = function() {
                                        L(l({
                                            action: "video-out-on",
                                            streamId: e.getId()
                                        }), function() {}, function() {})
                                    }, e.muteAudio = function() {
                                        L(l({
                                            action: "audio-out-off",
                                            streamId: e.getId()
                                        }), function() {}, function() {})
                                    }, e.muteVideo = function() {
                                        L(l({
                                            action: "video-out-off",
                                            streamId: e.getId()
                                        }), function() {}, function() {})
                                    }
                                }, e.pc.oniceconnectionstatechange = function(i) {
                                    "failed" === i ? (void 0 != R.timers[e.getId()] && clearInterval(R.timers[e.getId()]), L(v(), function() {}, function() {}), R.publishFailCbWapper(n, t, m.default.PEERCONNECTION_FAILED), f.default.error("Publisher's connection is lost")) : "connected" === i && (f.default.debug("Finish publishing ts", (new Date).getTime()), (0, u.onEvent)({
                                        n: u.EVENTS.PUBLISH,
                                        lts: n,
                                        elps: (new Date).getTime() - n,
                                        succ: !0
                                    }))
                                }, (0, b.default)() && console.log(i), e.pc.processSignalingMessage(i)
                            })
                        },
                        audio: e.hasAudio(),
                        video: e.hasVideo(),
                        screen: e.hasScreen(),
                        isSubscriber: !1,
                        iceServers: [],
                        stunServerUrl: R.stunServerUrl,
                        turnServer: R.turnServer,
                        maxAudioBW: i.maxAudioBW,
                        minVideoBW: i.minVideoBW,
                        maxVideoBW: i.maxVideoBW,
                        mode: R.mode
                    }), e.pc.addStream(e.stream), R.timers[e.getId()] = setInterval(function() {
                        e && e.pc && e.pc.getStats && e.pc.getStats(function(e) {
                            L(I(e), null, null)
                        })
                    }, 3e3), void 0 !== e.aux_stream && e.pc.addStream(e.aux_stream)))
                }, R.unpublish = function(e, t) {
                    return f.default.debug("Start unpublishing local stream"), "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? (C(t, m.default.INVALID_LOCAL_STREAM), void f.default.error("Invalid local stream")) : 2 !== R.state ? (C(t, m.default.INVALID_OPERATION), void f.default.error("User not in the session")) : (void 0 != R.timers[e.getId()] && clearInterval(R.timers[e.getId()]), void(void 0 !== R.socket ? e.local && void 0 !== R.localStreams[e.getId()] ? (delete R.localStreams[e.getId()], L(_(e.getId()), function(n) {
                        if ("error" === n) return C(t, m.default.UNPUBLISH_STREAM_FAILED), void f.default.error("Unpublish stream failed");
                        f.default.debug("Finishing unpublishing local stream"), (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e.unmuteAudio = void 0, e.muteAudio = void 0, e.unmuteVideo = void 0, e.muteVideo = void 0
                    }, t)) : (C(t, m.default.INVALID_LOCAL_STREAM), f.default.error("Invalid local stream")) : (C(t, m.default.INVALID_OPERATION), f.default.error("User not in the session"))))
                }, R.subscribeFailCbWapper = function(e, t, n) {
                    (0, u.onEvent)({
                        n: u.EVENTS.SUBSCRIBE,
                        lts: e,
                        elps: (new Date).getTime() - e,
                        succ: !1,
                        ec: n
                    }), C(t, n)
                }, R.subscribe = function(e, t) {
                    var n = (new Date).getTime();
                    return f.default.debug("Start subscribing remote stream with uid " + e.getId() + " ts", n), "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? (R.subscribeFailCbWapper(n, t, m.default.INVALID_REMOTE_STREAM), void f.default.error("Invalid remote stream")) : 2 !== R.state ? (R.subscribeFailCbWapper(n, t, m.default.INVALID_OPERATION), void f.default.error("User is not in the session")) : void(!e.local && R.remoteStreams.hasOwnProperty(e.getId()) && (e.hasAudio() || e.hasVideo() || e.hasScreen()) ? (e.pc = (0, d.Connection)({
                        callback: function(i) {
                            k(A({
                                streamId: e.getId(),
                                audio: !0,
                                video: !0,
                                mode: R.mode,
                                codec: R.codec
                            }, i), function(i) {
                                if ("error" === i) return R.subscribeFailCbWapper(n, t, m.default.SUBSCRIBE_STREAM_FAILED), f.default.error("Subscribe remote stream failed, closing stream ", e.getId()), void e.close();
                                e.pc.processSignalingMessage(i)
                            })
                        },
                        nop2p: !0,
                        audio: !0,
                        video: !0,
                        screen: e.hasScreen(),
                        isSubscriber: !0,
                        iceServers: [],
                        stunServerUrl: R.stunServerUrl,
                        turnServer: R.turnServer
                    }), e.pc.onaddstream = function(t, n) {
                        if ("ontrack" === n && "video" === t.track.kind || "onaddstream" === n) {
                            f.default.info("Stream subscribed with uid " + e.getId() + " ts", (new Date).getTime()), R.remoteStreams[e.getId()].stream = "onaddstream" === n ? t.stream : t.streams[0], R.remoteStreams[e.getId()].hasVideo() || R.remoteStreams[e.getId()].disableVideo();
                            var i = (0, c.StreamEvent)({
                                type: "stream-subscribed",
                                stream: R.remoteStreams[e.getId()]
                            });
                            R.dispatchEvent(i)
                        }
                        e.unmuteAudio = function() {
                            L(l({
                                action: "audio-in-on",
                                streamId: e.getId()
                            }), function() {}, function() {})
                        }, e.muteAudio = function() {
                            L(l({
                                action: "audio-in-off",
                                streamId: e.getId()
                            }), function() {}, function() {})
                        }, e.unmuteVideo = function() {
                            L(l({
                                action: "video-in-on",
                                streamId: e.getId()
                            }), function() {}, function() {})
                        }, e.muteVideo = function() {
                            L(l({
                                action: "video-in-off",
                                streamId: e.getId()
                            }), function() {}, function() {})
                        }, R.timer_counter[e.getId()] = 0, R.audioLevel[e.getId()] = 0, R.timers[e.getId()] = setInterval(function() {
                            e && e.pc && e.pc.getStats && e.pc.getStats(function(t) {
                                if (R.timer_counter[e.getId()] += 1, 60 === R.timer_counter[e.getId()] && (k(y(e.getId(), t), null, null), R.timer_counter[e.getId()] = 0), "audio" === t.mediaType) {
                                    if (t.audioOutputLevel > 5e3) {
                                        R.audioLevel[e.getId()] < 20 && (R.audioLevel[e.getId()] += 1);
                                        for (var n in R.audioLevel) parseInt(n) !== e.getId() && R.audioLevel[n] > 0 && (R.audioLevel[n] -= 1)
                                    }
                                    var i = Object.keys(R.audioLevel),
                                        o = i.sort(function(e, t) {
                                            return R.audioLevel[t] - R.audioLevel[e]
                                        });
                                    if (R.activeSpeaker !== o[0]) {
                                        var r = (0, c.ClientEvent)({
                                            type: "active-speaker",
                                            uid: o[0]
                                        });
                                        R.dispatchEvent(r), R.activeSpeaker = o[0], f.default.debug("Update active speaker:" + R.activeSpeaker)
                                    }
                                }
                            })
                        }, 50)
                    }, e.pc.oniceconnectionstatechange = function(i) {
                        "failed" === i ? (void 0 != R.timers[e.getId()] && clearInterval(R.timers[e.getId()]), L(v(), function() {}, function() {}), R.subscribeFailCbWapper(n, t, m.default.PEERCONNECTION_FAILED), f.default.error("Subscriber's connection is lost", e.getId())) : "connected" === i && (0, u.onEvent)({
                            n: u.EVENTS.SUBSCRIBE,
                            lts: n,
                            elps: (new Date).getTime() - n,
                            succ: !0
                        })
                    }) : (R.subscribeFailCbWapper(n, t, m.default.INVALID_REMOTE_STREAM), f.default.error("Invalid remote stream")))
                }, R.unsubscribe = function(e, t) {
                    return f.default.debug("Start unsubscribing remote stream with uid", e.getId()), "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? (C(t, m.default.INVALID_REMOTE_STREAM), void f.default.error("Invalid remote stream")) : 2 !== R.state ? (C(t, m.default.INVALID_OPERATION), void f.default.error("User is not in the session")) : (void 0 != R.timers[e.getId()] && clearInterval(R.timers[e.getId()]), void 0 != R.audioLevel[e.getId()] && delete R.audioLevel[e.getId()], void 0 != R.timer_counter[e.getId()] && delete R.timer_counter[e.getId()], R.remoteStreams.hasOwnProperty(e.getId()) ? R.socket ? e.local ? (C(t, m.default.INVALID_REMOTE_STREAM), void f.default.error("Invalid remote stream")) : (e.close(), delete R.remoteStreams[e.getId()], void L(h(e.getId()), function(n) {
                        if ("error" === n) return C(t, m.default.UNSUBSCRIBE_STREAM_FAILED), void f.default.error("Unsubscribe remote stream failed", e.getId());
                        f.default.debug("Finish unsubscribing remote stream with uid", e.getId())
                    }, t)) : (C(t, m.default.INVALID_OPERATION), void f.default.error("User is not in the session")) : void C(t, m.default.NO_SUCH_REMOTE_STREAM))
                }, R.setRemoteVideoStreamType = function(e, t) {
                    if (f.default.debug("Switching remote video stream " + e.getId() + " to " + t), "object" !== (void 0 === e ? "undefined" : o(e)) || null === e) return void f.default.error("Invalid remote stream");
                    if (2 !== R.state) return void f.default.error("User is not in the session");
                    if (!e.local) {
                        switch (t) {
                            case R.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
                            case R.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
                            case R.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:
                                break;
                            default:
                                return
                        }
                        L(E(e.getId(), t), null, null)
                    }
                };
                var T = function(e) {
                        return 1e3 * Math.min(30, Math.pow(2, e) - 1)
                    },
                    O = function() {
                        R.key ? (f.default.info("Re-joining to channel " + R.channel), R.join(R.token, R.key, R.channel, R.uid, function(e) {
                            if (f.default.info("User " + e + " is re-joined to " + R.channel), void 0 !== R.localStreams[e]) {
                                var t = R.localStreams[e];
                                delete R.localStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0), f.default.info("Publish the old local stream again"), R.publish(t, function(e) {
                                    f.default.error("Publish the old stream failed")
                                })
                            }
                        }, function(e) {
                            if (f.default.error("Re-join to channel failed [" + e + "]"), e === m.default.ERR_INVALID_VENDOR_KEY) {
                                var t = (0, c.StreamEvent)({
                                    type: "error",
                                    reason: m.default.INVALID_KEY
                                });
                                R.dispatchEvent(t)
                            } else if (e === m.default.ERR_INVALID_DYNAMIC_KEY) {
                                var t = (0, c.StreamEvent)({
                                    type: "error",
                                    reason: m.default.INVALID_DYNAMIC_KEY
                                });
                                R.dispatchEvent(t)
                            } else if (e === m.default.ERR_DYNAMIC_KEY_TIMEOUT) {
                                var t = (0, c.StreamEvent)({
                                    type: "error",
                                    reason: m.default.DYNAMIC_KEY_TIMEOUT
                                });
                                R.dispatchEvent(t);
                                var n = T(R.attemps);
                                f.default.error("Connect to server failed [Channel key timeout], attempt to recover [#" + R.attemps + "] after " + n / 1e3 + " seconds");
                                setTimeout(function() {
                                    R.attemps++, void 0 !== R.socket && R.socket.disconnect()
                                }, n)
                            }
                        })) : f.default.error("Connection recover failed [Invalid channel key]")
                    },
                    D = function(e) {
                        e = "wss://" + e, R.socket = (0, s.default)(e, {
                            timeout: 1e4,
                            reconnection: !1,
                            secure: !0,
                            transports: ["websocket"],
                            upgrade: !1
                        })
                    },
                    V = function(e, n, i) {
                        var o = e.host;
                        void 0 !== R.socket ? R.socket.socket.connect() : (D(o), R.socket.on("connect", function() {
                            R.attemps = 1, L(p(e), n, i)
                        }), R.socket.on("connect_error", function(e) {
                            for (var n in R.timers) R.timers.hasOwnProperty(n) && clearInterval(R.timers[n]);
                            for (var n in R.remoteStreams)
                                if (R.remoteStreams.hasOwnProperty(n)) {
                                    var i = R.remoteStreams[n],
                                        o = (0, c.ClientEvent)({
                                            type: "stream-removed",
                                            uid: i.getId(),
                                            stream: i
                                        });
                                    R.dispatchEvent(o)
                                }
                            t(), clearInterval(R.pingTimer), R.state = 0, R.socket = void 0;
                            var o = (0, c.StreamEvent)({
                                type: "error",
                                reason: m.default.SOCKET_ERROR
                            });
                            R.dispatchEvent(o);
                            var r = T(R.attemps);
                            f.default.error("Connect to server error [" + e + "], attempt to recover [#" + R.attemps + "] after " + r / 1e3 + " seconds");
                            setTimeout(function() {
                                R.attemps++, O()
                            }, r)
                        }), R.socket.on("disconnect", function(e) {
                            if (0 !== R.state) {
                                for (var n in R.timers) R.timers.hasOwnProperty(n) && clearInterval(R.timers[n]);
                                for (var n in R.remoteStreams)
                                    if (R.remoteStreams.hasOwnProperty(n)) {
                                        var i = R.remoteStreams[n],
                                            o = (0, c.ClientEvent)({
                                                type: "stream-removed",
                                                uid: i.getId(),
                                                stream: i
                                            });
                                        R.dispatchEvent(o)
                                    }
                                t(), clearInterval(R.pingTimer), R.state = 0, R.socket = void 0;
                                var o = (0, c.StreamEvent)({
                                    type: "error",
                                    reason: m.default.SOCKET_DISCONNECTED
                                });
                                R.dispatchEvent(o);
                                var r = T(R.attemps);
                                f.default.error("Disconnect from server [" + e + "], attempt to recover [#" + R.attemps + "] after " + r / 1e3 + " seconds");
                                setTimeout(function() {
                                    R.attemps++, O()
                                }, r)
                            }
                        }), R.socket.on("onAddAudioStream", function(e) {
                            if (void 0 === R.remoteStreams[e.id]) {
                                var t = (0, r.Stream)({
                                    streamID: e.id,
                                    local: !1,
                                    audio: e.audio,
                                    video: e.video,
                                    screen: e.screen,
                                    attributes: e.attributes
                                });
                                R.remoteStreams[e.id] = t;
                                var n = (0, c.StreamEvent)({
                                    type: "stream-added",
                                    stream: t
                                });
                                R.dispatchEvent(n)
                            }
                        }), R.socket.on("onAddVideoStream", function(e) {
                            if (f.default.debug("Newly added remote stream with uid", e.id), void 0 === R.remoteStreams[e.id]) {
                                var t = (0, r.Stream)({
                                    streamID: e.id,
                                    local: !1,
                                    audio: e.audio,
                                    video: e.video,
                                    screen: e.screen,
                                    attributes: e.attributes
                                });
                                R.remoteStreams[e.id] = t;
                                var n = (0, c.StreamEvent)({
                                    type: "stream-added",
                                    stream: t
                                });
                                R.dispatchEvent(n)
                            } else if (void 0 !== R.remoteStreams[e.id].stream) {
                                R.remoteStreams[e.id].video = !0, R.remoteStreams[e.id].enableVideo(), f.default.info("Stream changed: enable video " + e.id);
                                var i = R.remoteStreams[e.id],
                                    o = i.player.elementID;
                                i.stop(), i.play(o)
                            } else {
                                var t = (0, r.Stream)({
                                    streamID: e.id,
                                    local: !1,
                                    audio: !0,
                                    video: !0,
                                    screen: !1,
                                    attributes: e.attributes
                                });
                                R.remoteStreams[e.id] = t, f.default.info("Stream changed: modify video " + e.id)
                            }
                        }), R.socket.on("onRemoveStream", function(e) {
                            var t = R.remoteStreams[e.id];
                            if (!t) return void console.log("ERROR stream ", e.id, " not found onRemoveStream ", e);
                            delete R.remoteStreams[e.id];
                            var n = (0, c.StreamEvent)({
                                type: "stream-removed",
                                stream: t
                            });
                            R.dispatchEvent(n), t.close(), void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                        }), R.socket.on("onPublishStream", function(e) {
                            var t = R.localStreams[e.id],
                                n = (0, c.StreamEvent)({
                                    type: "stream-published",
                                    stream: t
                                });
                            R.dispatchEvent(n)
                        }), R.socket.on("onP2PLost", function(e) {
                            var t = T(R.p2p_attemps) + T(R.attemps);
                            f.default.error("p2p connection lost, attempt to recover [#" + R.p2p_attemps + "] after " + t / 1e3 + " seconds");
                            setTimeout(function() {
                                R.p2p_attemps++, void 0 !== R.socket && R.socket.disconnect()
                            }, t)
                        }), R.socket.on("onPeerLeave", function(e) {
                            var t = (0, c.ClientEvent)({
                                type: "peer-leave",
                                uid: e.id
                            });
                            if (R.remoteStreams.hasOwnProperty(e.id) && (t.stream = R.remoteStreams[e.id]), R.dispatchEvent(t), R.remoteStreams.hasOwnProperty(e.id)) {
                                f.default.info("closing stream on peer leave", e.id);
                                var n = R.remoteStreams[e.id];
                                n.close(), delete R.remoteStreams[e.id], void 0 !== n.pc && (n.pc.close(), n.pc = void 0)
                            }
                            R.timers.hasOwnProperty(e.id) && (clearInterval(R.timers[e.id]), delete R.timers[e.id]), void 0 != R.audioLevel[e.id] && delete R.audioLevel[e.id], void 0 != R.timer_counter[e.id] && delete R.timer_counter[e.id]
                        }))
                    },
                    L = function(e, t, n) {
                        if (void 0 === R.socket) return C(n, m.default.INVALID_OPERATION), void f.default.error("No socket available");
                        try {
                            R.socket.emitSimpleMessage(e, function(e, i) {
                                "success" === e ? "function" == typeof t && t(i) : "function" == typeof n && n(i)
                            })
                        } catch (t) {
                            C(n, m.default.SOCKET_ERROR), f.default.error("Socket emit message failed" + JSON.stringify(e))
                        }
                    },
                    k = function(e, t) {
                        if (void 0 === R.socket) return void f.default.error("Error in sendSimpleSdp [socket not ready]");
                        try {
                            R.socket.emitSimpleMessage(e, function(e, n) {
                                void 0 !== t && t(e, n)
                            })
                        } catch (e) {
                            f.default.error("Error in sendSimpleSdp [" + e + "]")
                        }
                    };
                return R
            };
        t.default = h
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = !1,
            o = function(e) {
                return "undefined" === e ? i : i = e
            };
        t.default = o
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createLiveClient = t.createRtcClient = t.createClient = void 0;
        var o = n(9),
            r = i(o),
            a = n(3),
            s = n(0),
            d = i(s),
            c = n(8),
            u = i(c),
            l = function(e) {
                function t() {
                    return "https:" == document.location.protocol
                }

                function n() {
                    var e = arguments[0];
                    if ("function" == typeof e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        e.apply(null, t)
                    }
                }
                var i = {};
                i.appId = void 0, i.key = void 0, i.vocsDomain = "webcs.agora.io", i.proxyDomain = "webcsproxy.agora.io", i.version = "1.14.0";
                var o = function(e, t, i, o, r) {
                        n(r);
                        var s = {
                            n: a.EVENTS.INIT,
                            lts: e,
                            elps: (new Date).getTime() - e,
                            succ: !0,
                            appid: t,
                            ver: i
                        };
                        o && (s.addl_s1 = o), (0, a.onEvent)(s)
                    },
                    s = function(e, t, i, o, r, s) {
                        n(r, s);
                        var d = {
                            n: a.EVENTS.INIT,
                            lts: e,
                            elps: (new Date).getTime() - e,
                            succ: !1,
                            ec: s,
                            appid: t,
                            ver: i
                        };
                        o && (d.addl_s1 = o), (0, a.onEvent)(d)
                    },
                    c = function(e, t, n, i) {
                        var o = new XMLHttpRequest;
                        o.open("POST", e, !0), o.setRequestHeader("Content-type", "application/json; charset=utf-8"), o.onload = function() {
                            n(o.responseText)
                        }, o.onerror = function() {
                            i()
                        }, o.send(JSON.stringify(t))
                    };
                return i.init = function(n, r, a) {
                    var l = (new Date).getTime();
                    d.default.debug("Initializing AgoraRTC client ts", l);
                    var f, p;
                    t() ? (f = "https://" + i.vocsDomain + ":5668/getvocs/jsonp", p = "https://" + i.proxyDomain + ":8667/getgwcs/jsonp") : (f = "http://" + i.vocsDomain + ":5669/getvocs/jsonp", p = "http://" + i.proxyDomain + ":9667/getgwcs/jsonp"), c(f, {
                        key: n
                    }, function(t) {
                        var c = JSON.parse(t),
                            f = c.error;
                        void 0 != f ? (s(l, n, i.version, null, a, u.default.SERVICE_NOT_AVAILABLE), d.default.error("Get server node failed [" + f + "]")) : (e.host = c.gateway_addr, i.appId = n, o(l, n, i.version, null, r))
                    }, function() {
                        c(p, {}, function(u) {
                            for (var p = JSON.parse(u), m = p.choose_servers, v = !1, g = 0; g < m.length; ++g) f = t() ? "https://" + m[g] + ":5668/getvocs/jsonp" : "http://" + m[g] + ":5669/getvocs/jsonp", c(f, {
                                key: n
                            }, function(t) {
                                var d = JSON.parse(t);
                                if (!v) {
                                    var c = d.error;
                                    void 0 != c ? (L.Logger.error("Get server node failed [" + c + "]"), s(l, n, i.version, vocsip, a, L.errorCodes.SERVICE_NOT_AVAILABLE)) : (e.host = d.gateway_addr, i.appId = n, o(l, n, i.version, null, r)), v = !0
                                }
                            }, function() {
                                d.default.error("Access choose server backup list failed")
                            })
                        }, function() {
                            d.default.error("Access choose server proxy failed")
                        })
                    })
                }, i.configPublisher = function(e) {
                    i.gatewayClient.configPublisher(e)
                }, i.join = function(t, n, o, r, a) {
                    var s = e;
                    i.uid = o, i.channel = n, i.key = t || i.appId, i.gatewayClient.join(s, i.key, n, o, r, a)
                }, i.renewChannelKey = function(e, t, o) {
                    void 0 === i.key && (n(o, u.default.INVALID_OPERATION), d.default.error("renewChannelKey should not be called before user join")), i.key = e, n(t)
                }, i.leave = function(e, t) {
                    i.gatewayClient.leave(e, t)
                }, i.publish = function(e, t) {
                    i.gatewayClient.publish(e, t)
                }, i.unpublish = function(e, t) {
                    i.gatewayClient.unpublish(e, t)
                }, i.subscribe = function(e, t) {
                    i.gatewayClient.subscribe(e, t)
                }, i.unsubscribe = function(e, t) {
                    i.gatewayClient.unsubscribe(e, t)
                }, i.setRemoteVideoStreamType = function(e, t) {
                    i.gatewayClient.setRemoteVideoStreamType(e, t)
                }, e.init = i.init, e.version = i.version, i.gatewayClient = (0, r.default)(e), i.on = i.gatewayClient.on, i
            },
            f = function(e) {
                return e && "interop" === e.mode ? (d.default.debug("Client in Interop mode"), l({
                    mode: "live"
                })) : e && "h264_interop" === e.mode ? (d.default.debug("Client in H264 Interop mode"), l({
                    mode: "live",
                    codec: "h264"
                })) : (d.default.debug("Client in web-only mode"), l({
                    mode: "rtc"
                }))
            },
            p = function() {
                return d.default.warning("createRtcClient is deprecated."), l({
                    mode: "rtc"
                })
            },
            m = function(e) {
                var t = "host";
                return e && "audience" === e.role && (t = e.role), d.default.warning("createLiveClient is deprecated."), l({
                    mode: "live",
                    role: t
                })
            };
        t.createClient = f, t.createRtcClient = p, t.createLiveClient = m
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            r = i(o),
            a = n(5),
            s = (i(a), n(14)),
            d = i(s),
            c = n(0),
            u = i(c),
            l = n(15),
            f = function(e) {
                var t = (0, r.default)({});
                return t.id = e.id, t.url = e.url, t.stream = e.stream.stream, t.elementID = e.elementID, t.destroy = function() {
                    t.video.pause(), delete t.resizer, document.getElementById(t.div.id) && t.parentNode.removeChild(t.div)
                }, t.resize = function() {
                    var n = t.container.offsetWidth,
                        i = t.container.offsetHeight;
                    e.stream.screen ? .75 * n < i ? (t.video.style.width = n + "px", t.video.style.height = .75 * n + "px", t.video.style.top = -(.75 * n / 2 - i / 2) + "px", t.video.style.left = "0px") : (t.video.style.height = i + "px", t.video.style.width = 4 / 3 * i + "px", t.video.style.left = -(4 / 3 * i / 2 - n / 2) + "px", t.video.style.top = "0px") : n === t.containerWidth && i === t.containerHeight || (.75 * n > i ? (t.video.style.width = n + "px", t.video.style.height = .75 * n + "px", t.video.style.top = -(.75 * n / 2 - i / 2) + "px", t.video.style.left = "0px") : (t.video.style.height = i + "px", t.video.style.width = 4 / 3 * i + "px", t.video.style.left = -(4 / 3 * i / 2 - n / 2) + "px", t.video.style.top = "0px")), t.containerWidth = n, t.containerHeight = i
                }, t.div = document.createElement("div"), t.div.setAttribute("id", "player_" + t.id), e.stream.video ? t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;") : t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), t.video = document.createElement("video"), t.video.setAttribute("id", "video" + t.id), e.stream.local && !e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; transform: rotateY(180deg);") : e.stream.video ? (t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;"), window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && t.video.setAttribute("controls", "")) : e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;") : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; display: none;"), t.video.setAttribute("autoplay", ""), t.video.setAttribute("muted", ""), t.video.setAttribute("playsinline", ""), e.stream.local && (t.video.volume = 0, t.video.setAttribute("muted", "")), t.audio = document.createElement("audio"), t.audio.setAttribute("id", "audio" + t.id), t.audio.setAttribute("autoplay", ""), e.stream.local && t.audio.setAttribute("muted", ""), void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body), t.parentNode = t.div.parentNode, t.div.appendChild(t.video), t.div.appendChild(t.audio), t.video.addEventListener("playing", function(e) {
                    ! function e() {
                        if (t.video.videoWidth * t.video.videoHeight > 4) return void u.default.debug("video dimensions:", t.video.videoWidth, t.video.videoHeight);
                        setTimeout(e, 50)
                    }()
                }), t.containerWidth = 0, t.containerHeight = 0, t.resizer = new d.default(t.container, t.resize), t.resize(), (0, l.attachMediaStream)(document.getElementById("video" + t.id), e.stream.stream), (0, l.attachMediaStream)(document.getElementById("audio" + t.id), e.stream.stream), t
            };
        t.default = f
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = function(e) {
                var t, n, i, r = (0, o.default)({}),
                    a = 50;
                return r.elementID = e.elementID, r.media = e.media, r.id = e.id, void 0 !== e.url && (r.url = e.url), r.stream = e.stream, r.div = document.createElement("div"), r.div.setAttribute("style", "width: 40%; height: 100%; max-width: 32px; position: absolute; right: 0;z-index:0;"), r.icon = document.createElement("img"), r.icon.setAttribute("id", "volume_" + r.id), r.icon.setAttribute("src", r.url + "/assets/sound48.png"), r.icon.setAttribute("style", "width: 80%; height: 100%; position: absolute;"), r.div.appendChild(r.icon), r.stream.local ? (n = function() {
                    r.media.muted = !0, r.icon.setAttribute("src", r.url + "/assets/mute48.png")
                }, i = function() {
                    r.media.muted = !1, r.icon.setAttribute("src", r.url + "/assets/sound48.png")
                }, r.icon.onclick = function() {
                    r.media.muted ? i() : n()
                }) : (r.picker = document.createElement("input"), r.picker.setAttribute("id", "picker_" + r.id), r.picker.type = "range", r.picker.min = 0, r.picker.max = 100, r.picker.step = 10, r.picker.value = a, r.picker.setAttribute("orient", "vertical"), r.div.appendChild(r.picker), r.media.volume = r.picker.value / 100, r.media.muted = !1, r.picker.oninput = function() {
                    r.picker.value > 0 ? (r.media.muted = !1, r.icon.setAttribute("src", r.url + "/assets/sound48.png")) : (r.media.muted = !0, r.icon.setAttribute("src", r.url + "/assets/mute48.png")), r.media.volume = r.picker.value / 100
                }, t = function(e) {
                    r.picker.setAttribute("style", "background: transparent; width: 32px; height: 100px; position: absolute; bottom: 90%; z-index: 1;" + r.div.offsetHeight + "px; right: 0px; -webkit-appearance: slider-vertical; display: " + e)
                }, n = function() {
                    r.icon.setAttribute("src", r.url + "/assets/mute48.png"), a = r.picker.value, r.picker.value = 0, r.media.volume = 0, r.media.muted = !0
                }, i = function() {
                    r.icon.setAttribute("src", r.url + "/assets/sound48.png"), r.picker.value = a, r.media.volume = r.picker.value / 100, r.media.muted = !1
                }, r.icon.onclick = function() {
                    r.media.muted ? i() : n()
                }, r.div.onmouseover = function() {
                    t("block")
                }, r.div.onmouseout = function() {
                    t("none")
                }, t("none")), document.getElementById(r.elementID).appendChild(r.div), r
            };
        t.default = r
    }, function(e, t, n) {
        var i, o;
        ! function(r, a) {
            i = a, void 0 !== (o = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = o)
        }(0, function() {
            function e(e, t) {
                var n = Object.prototype.toString.call(e),
                    i = "[object Array]" === n || "[object NodeList]" === n || "[object HTMLCollection]" === n || "[object Object]" === n || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements,
                    o = 0,
                    r = e.length;
                if (i)
                    for (; o < r; o++) t(e[o]);
                else t(e)
            }
            if ("undefined" == typeof window) return null;
            var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                    return window.setTimeout(e, 20)
                },
                n = function(i, o) {
                    function r() {
                        var e = [];
                        this.add = function(t) {
                            e.push(t)
                        };
                        var t, n;
                        this.call = function() {
                            for (t = 0, n = e.length; t < n; t++) e[t].call()
                        }, this.remove = function(i) {
                            var o = [];
                            for (t = 0, n = e.length; t < n; t++) e[t] !== i && o.push(e[t]);
                            e = o
                        }, this.length = function() {
                            return e.length
                        }
                    }

                    function a(e, t) {
                        return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
                    }

                    function s(e, n) {
                        if (e.resizedAttached) {
                            if (e.resizedAttached) return void e.resizedAttached.add(n)
                        } else e.resizedAttached = new r, e.resizedAttached.add(n);
                        e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
                        var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                            o = "position: absolute; left: 0; top: 0; transition: 0s;";
                        e.resizeSensor.style.cssText = i, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), "static" == a(e, "position") && (e.style.position = "relative");
                        var s, d, c, u, l = e.resizeSensor.childNodes[0],
                            f = l.childNodes[0],
                            p = e.resizeSensor.childNodes[1],
                            m = e.offsetWidth,
                            v = e.offsetHeight,
                            g = function() {
                                f.style.width = "100000px", f.style.height = "100000px", l.scrollLeft = 1e5, l.scrollTop = 1e5, p.scrollLeft = 1e5, p.scrollTop = 1e5
                            };
                        g();
                        var _ = function() {
                                d = 0, s && (m = c, v = u, e.resizedAttached && e.resizedAttached.call())
                            },
                            b = function() {
                                c = e.offsetWidth, u = e.offsetHeight, s = c != m || u != v, s && !d && (d = t(_)), g()
                            },
                            h = function(e, t, n) {
                                e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
                            };
                        h(l, "scroll", b), h(p, "scroll", b)
                    }
                    e(i, function(e) {
                        s(e, o)
                    }), this.detach = function(e) {
                        n.detach(i, e)
                    }
                };
            return n.detach = function(t, n) {
                e(t, function(e) {
                    e.resizedAttached && "function" == typeof n && (e.resizedAttached.remove(n), e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
                })
            }, n
        })
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return new Promise(function(t, n) {
                r(e, t, n)
            })
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = null,
            a = null,
            s = null,
            d = null,
            c = null,
            u = null,
            l = {
                log: function() {},
                extractVersion: function(e, t, n) {
                    var i = e.match(t);
                    return i && i.length >= n && parseInt(i[n])
                }
            };
        if ("object" === ("undefined" == typeof window ? "undefined" : o(window)) && (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype || Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
                get: function() {
                    return "mozSrcObject" in this ? this.mozSrcObject : this._srcObject
                },
                set: function(e) {
                    "mozSrcObject" in this ? this.mozSrcObject = e : (this._srcObject = e, this.src = URL.createObjectURL(e))
                }
            }), r = window.navigator && window.navigator.getUserMedia), a = function(e, t) {
                e.srcObject = t
            }, s = function(e, t) {
                e.srcObject = t.srcObject
            }, "undefined" != typeof window && window.navigator)
            if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
                if (l.log("This appears to be Firefox"), d = "firefox", c = l.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), u = 31, window.RTCPeerConnection = function(e, t) {
                        if (c < 38 && e && e.iceServers) {
                            for (var n = [], i = 0; i < e.iceServers.length; i++) {
                                var o = e.iceServers[i];
                                if (o.hasOwnProperty("urls"))
                                    for (var r = 0; r < o.urls.length; r++) {
                                        var a = {
                                            url: o.urls[r]
                                        };
                                        0 === o.urls[r].indexOf("turn") && (a.username = o.username, a.credential = o.credential), n.push(a)
                                    } else n.push(e.iceServers[i])
                            }
                            e.iceServers = n
                        }
                        return new mozRTCPeerConnection(e, t)
                    }, window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), r = function(e, t, n) {
                        var i = function(e) {
                            if ("object" !== (void 0 === e ? "undefined" : o(e)) || e.require) return e;
                            var t = [];
                            return Object.keys(e).forEach(function(n) {
                                if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                                    var i = e[n] = "object" === o(e[n]) ? e[n] : {
                                        ideal: e[n]
                                    };
                                    if (void 0 === i.min && void 0 === i.max && void 0 === i.exact || t.push(n), void 0 !== i.exact && ("number" == typeof i.exact ? i.min = i.max = i.exact : e[n] = i.exact, delete i.exact), void 0 !== i.ideal) {
                                        e.advanced = e.advanced || [];
                                        var r = {};
                                        "number" == typeof i.ideal ? r[n] = {
                                            min: i.ideal,
                                            max: i.ideal
                                        } : r[n] = i.ideal, e.advanced.push(r), delete i.ideal, Object.keys(i).length || delete e[n]
                                    }
                                }
                            }), t.length && (e.require = t), e
                        };
                        return c < 38 && (l.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = i(e.audio)), e.video && (e.video = i(e.video)), l.log("ff37: " + JSON.stringify(e))), navigator.mozGetUserMedia(e, t, n)
                    }, navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = {
                        getUserMedia: i,
                        addEventListener: function() {},
                        removeEventListener: function() {}
                    }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function() {
                        return new Promise(function(e) {
                            e([{
                                kind: "audioinput",
                                deviceId: "default",
                                label: "",
                                groupId: ""
                            }, {
                                kind: "videoinput",
                                deviceId: "default",
                                label: "",
                                groupId: ""
                            }])
                        })
                    }, c < 41) {
                    var f = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
                    navigator.mediaDevices.enumerateDevices = function() {
                        return f().then(void 0, function(e) {
                            if ("NotFoundError" === e.name) return [];
                            throw e
                        })
                    }
                }
            } else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
            l.log("This appears to be Chrome"), d = "chrome", c = l.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), u = 38, window.RTCPeerConnection = function(e, t) {
                e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
                var n = new webkitRTCPeerConnection(e, t),
                    i = n.getStats.bind(n);
                return n.getStats = function(e, t, n) {
                    var o = this,
                        r = arguments;
                    if (arguments.length > 0 && "function" == typeof e) return i(e, t);
                    var a = function(e) {
                        var t = {};
                        return e.result().forEach(function(e) {
                            var n = {
                                id: e.id,
                                timestamp: e.timestamp,
                                type: e.type
                            };
                            e.names().forEach(function(t) {
                                n[t] = e.stat(t)
                            }), t[n.id] = n
                        }), t
                    };
                    if (arguments.length >= 2) {
                        var s = function(e) {
                            r[1](a(e))
                        };
                        return i.apply(this, [s, arguments[0]])
                    }
                    return new Promise(function(t, n) {
                        1 === r.length && null === e ? i.apply(o, [function(e) {
                            t.apply(null, [a(e)])
                        }, n]) : i.apply(o, [t, n])
                    })
                }, n
            }, ["createOffer", "createAnswer"].forEach(function(e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function() {
                    var e = this;
                    if (arguments.length < 1 || 1 === arguments.length && "object" === o(arguments[0])) {
                        var n = 1 === arguments.length ? arguments[0] : void 0;
                        return new Promise(function(i, o) {
                            t.apply(e, [i, o, n])
                        })
                    }
                    return t.apply(this, arguments)
                }
            }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function() {
                    var e = arguments,
                        n = this;
                    return new Promise(function(i, o) {
                        t.apply(n, [e[0], function() {
                            i(), e.length >= 2 && e[1].apply(null, [])
                        }, function(t) {
                            o(t), e.length >= 3 && e[2].apply(null, [t])
                        }])
                    })
                }
            });
            var p = function(e) {
                if ("object" !== (void 0 === e ? "undefined" : o(e)) || e.mandatory || e.optional) return e;
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                        var i = "object" === o(e[n]) ? e[n] : {
                            ideal: e[n]
                        };
                        void 0 !== i.exact && "number" == typeof i.exact && (i.min = i.max = i.exact);
                        var r = function(e, t) {
                            return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                        };
                        if (void 0 !== i.ideal) {
                            t.optional = t.optional || [];
                            var a = {};
                            "number" == typeof i.ideal ? (a[r("min", n)] = i.ideal, t.optional.push(a), a = {}, a[r("max", n)] = i.ideal, t.optional.push(a)) : (a[r("", n)] = i.ideal, t.optional.push(a))
                        }
                        void 0 !== i.exact && "number" != typeof i.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[r("", n)] = i.exact) : ["min", "max"].forEach(function(e) {
                            void 0 !== i[e] && (t.mandatory = t.mandatory || {}, t.mandatory[r(e, n)] = i[e])
                        })
                    }
                }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
            };
            if (r = function(e, t, n) {
                    return e.audio && (e.audio = p(e.audio)), e.video && (e.video = p(e.video)), l.log("chrome: " + JSON.stringify(e)), navigator.webkitGetUserMedia(e, t, n)
                }, navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = {
                    getUserMedia: i,
                    enumerateDevices: function() {
                        return new Promise(function(e) {
                            var t = {
                                audio: "audioinput",
                                video: "videoinput"
                            };
                            return MediaStreamTrack.getSources(function(n) {
                                e(n.map(function(e) {
                                    return {
                                        label: e.label,
                                        kind: t[e.kind],
                                        deviceId: e.id,
                                        groupId: ""
                                    }
                                }))
                            })
                        })
                    }
                }), navigator.mediaDevices.getUserMedia) {
                var m = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                navigator.mediaDevices.getUserMedia = function(e) {
                    return l.log("spec:   " + JSON.stringify(e)), e.audio = p(e.audio), e.video = p(e.video), l.log("chrome: " + JSON.stringify(e)), m(e)
                }
            } else navigator.mediaDevices.getUserMedia = function(e) {
                return i(e)
            };
            void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function() {
                l.log("Dummy mediaDevices.addEventListener called.")
            }), void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function() {
                l.log("Dummy mediaDevices.removeEventListener called.")
            }), a = function(e, t) {
                c >= 43 ? e.srcObject = t : void 0 !== e.src ? e.src = URL.createObjectURL(t) : l.log("Error attaching stream to element.")
            }, s = function(e, t) {
                c >= 43 ? e.srcObject = t.srcObject : e.src = t.src
            }
        } else navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (l.log("This appears to be Edge"), d = "edge", c = l.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), u = 12) : l.log("Browser does not appear to be WebRTC-capable");
        else l.log("This does not appear to be a browser"), d = "not a browser";
        var v = {};
        try {
            Object.defineProperty(v, "version", {
                set: function(e) {
                    c = e
                }
            })
        } catch (e) {}
        var g;
        "undefined" != typeof window && (g = window.RTCPeerConnection), e.exports = {
            RTCPeerConnection: g,
            getUserMedia: r,
            attachMediaStream: a,
            reattachMediaStream: s,
            webrtcDetectedBrowser: d,
            webrtcDetectedVersion: c,
            webrtcMinimumVersion: u,
            webrtcTesting: v,
            webrtcUtils: l
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            r = i(o),
            a = n(5),
            s = i(a),
            d = n(0),
            c = i(d),
            u = function(e) {
                var t, n, i = (0, r.default)({});
                i.id = e.id, i.url = e.url, i.stream = e.stream.stream, i.elementID = e.elementID, c.default.debug("Creating URL from stream " + i.stream);
                var o = window.URL || webkitURL;
                return i.stream_url = o.createObjectURL(i.stream), i.audio = document.createElement("audio"), i.audio.setAttribute("id", "stream" + i.id), i.audio.setAttribute("style", "width: 100%; height: 100%; position: absolute"), i.audio.setAttribute("autoplay", "autoplay"), e.stream.local && (i.audio.volume = 0), e.stream.local && (i.audio.volume = 0), void 0 !== i.elementID ? (i.destroy = function() {
                    i.audio.pause(), i.parentNode.removeChild(i.div)
                }, t = function() {
                    i.bar.display()
                }, n = function() {
                    i.bar.hide()
                }, i.div = document.createElement("div"), i.div.setAttribute("id", "player_" + i.id), i.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), document.getElementById(i.elementID).appendChild(i.div), i.container = document.getElementById(i.elementID), i.parentNode = i.div.parentNode, i.div.appendChild(i.audio), i.bar = new s.default({
                    elementID: "player_" + i.id,
                    id: i.id,
                    stream: e.stream,
                    media: i.audio,
                    options: e.options,
                    url: i.url
                }), e.stream.local ? i.div.onmouseover = n : i.div.onmouseover = t, i.div.onmouseout = n) : (i.destroy = function() {
                    i.audio.pause(), i.parentNode.removeChild(i.audio)
                }, document.body.appendChild(i.audio), i.parentNode = document.body), i.audio.src = i.stream_url, i
            };
        t.default = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = function(e) {
                var t = {},
                    n = webkitRTCPeerConnection;
                t.pc_config = {
                    iceServers: []
                }, t.con = {
                    optional: [{
                        DtlsSrtpKeyAgreement: !0
                    }]
                }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                        url: e
                    })
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                    url: e.stunServerUrl
                })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                    "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                        username: e.username,
                        credential: e.password,
                        url: e.url
                    })
                }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.password,
                    url: e.turnServer.url
                }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    mandatory: {
                        OfferToReceiveVideo: e.video,
                        OfferToReceiveAudio: e.audio
                    }
                }, t.roapSessionId = 103, t.peerConnection = new n(t.pc_config, t.con), t.peerConnection.onicecandidate = function(e) {
                    e.candidate ? t.iceCandidateCount += 1 : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
                };
                var i = function(t) {
                    var n, i;
                    return e.minVideoBW && e.maxVideoBW && (n = t.match(/m=video.*\r\n/), i = n[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(n[0], i), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (n = t.match(/m=audio.*\r\n/), i = n[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(n[0], i)), t
                };
                return t.processSignalingMessage = function(e) {
                    var n, o = JSON.parse(e);
                    t.incomingMessage = o, "new" === t.state ? "OFFER" === o.messageType ? (n = {
                        sdp: o.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (n = {
                        sdp: o.sdp,
                        type: "answer"
                    }, n.sdp = i(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (n = {
                        sdp: o.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (n = {
                        sdp: o.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
                }, t.addStream = function(e) {
                    t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function() {
                    t.markActionNeeded()
                }, t.close = function() {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function() {
                    t.actionNeeded = !0, t.doLater(function() {
                        t.onstablestate()
                    })
                }, t.doLater = function(e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function() {
                    var e;
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
                            if (e.sdp = i(e.sdp), o.default.debug("Changed", e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                            o.default.debug("Not sending a new offer")
                        }, function(e) {
                            o.default.debug("peer connection create offer failed ", e)
                        }, t.mediaConstraints);
                        else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                            var n = new Date;
                            o.default.debug(n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                        }, function(e) {
                            o.default.debug("peer connection create answer failed ", e)
                        }, t.mediaConstraints);
                        else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            e = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", e), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendOK = function() {
                    t.sendMessage("OK")
                }, t.sendMessage = function(e, n) {
                    var i = {};
                    i.messageType = e, i.sdp = n, "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i))
                }, t.error = function(e) {
                    throw "Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.onopen = function() {
                    t.onopen && t.onopen()
                }, t.peerConnection.onaddstream = function(e) {
                    t.onaddstream && t.onaddstream(e)
                }, t.peerConnection.onremovestream = function(e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function(e) {
                    t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = function(e) {
                var t = {},
                    n = RTCPeerConnection;
                t.pc_config = {
                    iceServers: []
                }, t.con = {
                    optional: [{
                        DtlsSrtpKeyAgreement: !0
                    }]
                }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                        url: e
                    })
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                    url: e.stunServerUrl
                })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                    "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                        username: e.username,
                        credential: e.password,
                        url: e.url
                    })
                }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.password,
                    url: e.turnServer.url
                }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    mandatory: {
                        OfferToReceiveVideo: e.video,
                        OfferToReceiveAudio: e.audio
                    }
                }, t.roapSessionId = 103, t.peerConnection = new n(t.pc_config, t.con), t.peerConnection.onicecandidate = function(e) {
                    e.candidate ? (0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
                        t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                    }, 1e3)), t.iceCandidateCount = t.iceCandidateCount + 1) : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), clearTimeout(t.timeout), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
                };
                var i = function(t) {
                        return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t
                    },
                    r = function(t) {
                        var n, i;
                        return e.minVideoBW && e.maxVideoBW && (n = t.match(/m=video.*\r\n/), i = n[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(n[0], i), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (n = t.match(/m=audio.*\r\n/), i = n[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(n[0], i)), t
                    };
                return t.processSignalingMessage = function(e) {
                    var n, o = JSON.parse(e);
                    t.incomingMessage = o, "new" === t.state ? "OFFER" === o.messageType ? (n = {
                        sdp: o.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (n = {
                        sdp: o.sdp,
                        type: "answer"
                    }, n.sdp = i(n.sdp), n.sdp = r(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (n = {
                        sdp: o.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (n = {
                        sdp: o.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
                }, t.getStats = function(e) {
                    t.peerConnection.getStats(null, function(t) {
                        Object.keys(t).forEach(function(n) {
                            var i = t[n];
                            "ssrc" !== i.type && "VideoBwe" !== i.type || e(i)
                        })
                    })
                }, t.addStream = function(e) {
                    t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function() {
                    t.markActionNeeded()
                }, t.close = function() {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function() {
                    t.actionNeeded = !0, t.doLater(function() {
                        t.onstablestate()
                    })
                }, t.doLater = function(e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function() {
                    var e;
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
                            if (e.sdp = r(e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                            o.default.debug("Not sending a new offer")
                        }, function(e) {
                            o.default.debug("peer connection create offer failed ", e)
                        }, t.mediaConstraints);
                        else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                            var n = new Date;
                            o.default.debug(n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                        }, function(e) {
                            o.default.debug("peer connection create answer failed ", e)
                        }, t.mediaConstraints);
                        else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            e = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", e), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendOK = function() {
                    t.sendMessage("OK")
                }, t.sendMessage = function(e, n) {
                    var i = {};
                    i.messageType = e, i.sdp = n, "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i))
                }, t.error = function(e) {
                    throw "Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function(e) {
                    t.onaddstream && t.onaddstream(e, "ontrack")
                }, t.peerConnection.onaddstream = function(e) {
                    t.onaddstream && t.onaddstream(e, "onaddstream")
                }, t.peerConnection.onremovestream = function(e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function(e) {
                    t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = function(e) {
                var t = {};
                RTCPeerConnection;
                t.pc_config = {
                    iceServers: [{
                        urls: ["stun:72.251.224.27:3478"]
                    }],
                    bundlePolicy: "max-bundle"
                }, t.con = {
                    optional: [{
                        DtlsSrtpKeyAgreement: !0
                    }]
                }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                        url: e
                    })
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                    url: e.stunServerUrl
                })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                    "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                        username: e.username,
                        credential: e.password,
                        url: e.url
                    })
                }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                    username: e.turnServer.username,
                    credential: e.turnServer.password,
                    url: e.turnServer.url
                }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    mandatory: {
                        OfferToReceiveVideo: e.video,
                        OfferToReceiveAudio: e.audio
                    }
                }, t.roapSessionId = 103, t.peerConnection = new RTCPeerConnection({
                    iceServers: [{
                        urls: ["stun:webcs.agora.io:3478", "stun:stun.l.google.com:19302"]
                    }],
                    bundlePolicy: "max-bundle"
                }), t.peerConnection.onicecandidate = function(n) {
                    o.default.debug("PeerConnection: ", e.session_id, n), n.candidate ? (0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
                        t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                    }, 1e3)), t.iceCandidateCount = t.iceCandidateCount + 1) : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), clearTimeout(t.timeout), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
                };
                var n = function(t) {
                        return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t
                    },
                    i = function(t) {
                        var n, i;
                        return e.minVideoBW && e.maxVideoBW && (n = t.match(/m=video.*\r\n/), i = n[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(n[0], i), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (n = t.match(/m=audio.*\r\n/), i = n[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(n[0], i)), t
                    };
                return t.processSignalingMessage = function(e) {
                    var o, r = JSON.parse(e);
                    t.incomingMessage = r, "new" === t.state ? "OFFER" === r.messageType ? (o = {
                        sdp: r.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (o = {
                        sdp: r.sdp,
                        type: "answer"
                    }, o.sdp = n(o.sdp), o.sdp = i(o.sdp), o.sdp = o.sdp.replace(/a=x-google-flag:conference\r\n/g, ""), t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (o = {
                        sdp: r.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (o = {
                        sdp: r.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state))
                }, t.getStats = function(e) {
                    t.peerConnection.getStats(null, function(t) {
                        Object.keys(t).forEach(function(n) {
                            var i = t[n];
                            "ssrc" !== i.type && "VideoBwe" !== i.type || e(i)
                        })
                    })
                }, t.addStream = function(e) {
                    window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? e.getTracks().forEach(function(n) {
                        return t.peerConnection.addTrack(n, e)
                    }) : t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function() {
                    t.markActionNeeded()
                }, t.close = function() {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function() {
                    t.actionNeeded = !0, t.doLater(function() {
                        t.onstablestate()
                    })
                }, t.doLater = function(e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function() {
                    var n;
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) {
                            if (e.isSubscriber && window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) {
                                var r = t.peerConnection.addTransceiver("audio"),
                                    a = t.peerConnection.addTransceiver("video");
                                r.setDirection("recvonly"), a.setDirection("recvonly")
                            }
                            t.peerConnection.createOffer(t.mediaConstraints).then(function(e) {
                                if (e.sdp = i(e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                                o.default.debug("Not sending a new offer")
                            }).catch(function(e) {
                                o.default.debug("peer connection create offer failed ", e)
                            })
                        } else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                            var n = new Date;
                            o.default.debug(n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                        }, function(e) {
                            o.default.debug("peer connection create answer failed ", e)
                        }, t.mediaConstraints);
                        else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            n = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", n), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendOK = function() {
                    t.sendMessage("OK")
                }, t.sendMessage = function(e, n) {
                    var i = {};
                    i.messageType = e, i.sdp = n, "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i))
                }, t.error = function(e) {
                    throw "Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function(e) {
                    t.onaddstream && t.onaddstream(e, "ontrack")
                }, t.peerConnection.onremovestream = function(e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function(e) {
                    t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            var e = {};
            return e.addStream = function() {}, e
        };
        t.default = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = function(e) {
                var t = {},
                    n = (mozRTCPeerConnection, mozRTCSessionDescription),
                    i = !1;
                t.pc_config = {
                    iceServers: []
                }, e.iceServers instanceof Array ? e.iceServers.map(function(e) {
                    0 === e.url.indexOf("stun:") && t.pc_config.iceServers.push({
                        url: e.url
                    })
                }) : e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                    "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                        url: e
                    })
                }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                    url: e.stunServerUrl
                })), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                    offerToReceiveAudio: e.audio,
                    offerToReceiveVideo: e.video,
                    mozDontOfferDataChannel: !0
                }, t.roapSessionId = 103, t.peerConnection = new RTCPeerConnection(t.pc_config), t.peerConnection.onicecandidate = function(e) {
                    e.candidate ? t.iceCandidateCount += 1 : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
                }, t.processSignalingMessage = function(e) {
                    var i, a = JSON.parse(e);
                    t.incomingMessage = a, "new" === t.state ? "OFFER" === a.messageType ? (a.sdp = r(a.sdp), i = {
                        sdp: a.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new n(i), function() {
                        o.default.debug("setRemoteDescription succeeded")
                    }, function(e) {
                        o.default.info("setRemoteDescription failed: " + e.name)
                    }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === a.messageType ? (a.sdp = r(a.sdp), a.sdp = a.sdp.replace(/ generation 0/g, ""), a.sdp = a.sdp.replace(/ udp /g, " UDP "), a.sdp = a.sdp.replace(/a=group:BUNDLE audio video/, "a=group:BUNDLE sdparta_0 sdparta_1"), a.sdp = a.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), a.sdp = a.sdp.replace(/a=mid:video/, "a=mid:sdparta_1"), i = {
                        sdp: a.sdp,
                        type: "answer"
                    }, t.peerConnection.setRemoteDescription(new n(i), function() {
                        o.default.debug("setRemoteDescription succeeded")
                    }, function(e) {
                        o.default.info("setRemoteDescription failed: " + e)
                    }), t.sendOK(), t.state = "established") : "pr-answer" === a.messageType ? (i = {
                        sdp: a.sdp,
                        type: "pr-answer"
                    }, t.peerConnection.setRemoteDescription(new n(i), function() {
                        o.default.debug("setRemoteDescription succeeded")
                    }, function(e) {
                        o.default.info("setRemoteDescription failed: " + e.name)
                    })) : "offer" === a.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === a.messageType ? (i = {
                        sdp: a.sdp,
                        type: "offer"
                    }, t.peerConnection.setRemoteDescription(new n(i), function() {
                        o.default.debug("setRemoteDescription succeeded")
                    }, function(e) {
                        o.default.info("setRemoteDescription failed: " + e.name)
                    }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state))
                }, t.addStream = function(e) {
                    i = !0, t.peerConnection.addStream(e), t.markActionNeeded()
                }, t.removeStream = function() {
                    t.markActionNeeded()
                }, t.close = function() {
                    t.state = "closed", t.peerConnection.close()
                }, t.markActionNeeded = function() {
                    t.actionNeeded = !0, t.doLater(function() {
                        t.onstablestate()
                    })
                }, t.doLater = function(e) {
                    window.setTimeout(e, 1)
                }, t.onstablestate = function() {
                    if (t.actionNeeded) {
                        if ("new" === t.state || "established" === t.state) {
                            i && (t.mediaConstraints = void 0),
                                function() {
                                    t.peerConnection.createOffer(function(e) {
                                        if (e.sdp = r(e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                                        o.default.debug("Not sending a new offer")
                                    }, function(e) {
                                        o.default.debug("Ups! create offer failed ", e)
                                    }, t.mediaConstraints)
                                }()
                        } else if ("preparing-offer" === t.state) {
                            if (t.moreIceComing) return;
                            t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
                        } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                            if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                            var n = new Date;
                            o.default.debug(n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
                        }, function() {
                            o.default.debug("Ups! Something went wrong")
                        });
                        else if ("offer-received-preparing-answer" === t.state) {
                            if (t.moreIceComing) return;
                            var e = t.peerConnection.localDescription.sdp;
                            t.sendMessage("ANSWER", e), t.state = "established"
                        } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                        t.actionNeeded = !1
                    }
                }, t.sendOK = function() {
                    t.sendMessage("OK")
                }, t.sendMessage = function(e, n) {
                    var i = {};
                    i.messageType = e, i.sdp = n, "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i))
                }, t.error = function(e) {
                    throw "Error in RoapOnJsep: " + e
                }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.onaddstream = function(e) {
                    t.onaddstream && t.onaddstream(e)
                }, t.peerConnection.onremovestream = function(e) {
                    t.onremovestream && t.onremovestream(e)
                }, t.peerConnection.oniceconnectionstatechange = function(e) {
                    t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
                };
                var r = function(t) {
                    if (e.video && e.maxVideoBW) {
                        var n = t.match(/m=video.*\r\n/);
                        if (null == n && (n = t.match(/m=video.*\n/)), n && n.length > 0) {
                            var i = n[0] + "b=AS:" + e.maxVideoBW + "\r\n";
                            t = t.replace(n[0], i)
                        }
                    }
                    if (e.audio && e.maxAudioBW) {
                        var n = t.match(/m=audio.*\r\n/);
                        if (null == n && (n = t.match(/m=audio.*\n/)), n && n.length > 0) {
                            var i = n[0] + "b=AS:" + e.maxAudioBW + "\r\n";
                            t = t.replace(n[0], i)
                        }
                    }
                    return t
                };
                return t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
            };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(23),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = n(1),
            a = function(e, t) {
                var n = {};
                return n.connect = function() {
                    t.url = e, n.signal = (0, o.default)(t), n.on = n.signal.on, n.dispatchEvent = n.signal.dispatchEvent, n.signal.on("onopen", function(e) {
                        n.signal.onEvent = function(e) {
                            n.dispatchEvent((0, r.MediaEvent)({
                                type: e.event,
                                msg: e
                            }))
                        }, n.dispatchEvent((0, r.MediaEvent)({
                            type: "connect",
                            msg: e
                        }))
                    }), n.signal.on("onError", function(e) {
                        var t = e.msg;
                        onError(t.code, "error")
                    })
                }, n.disconnect = function() {
                    n.signal.close()
                }, n.emitSimpleMessage = function(e, t) {
                    n.signal.sendSignalCommand(e, t)
                }, n.connect(), n
            };
        t.default = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1),
            o = n(7),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            a = function(e) {
                function t(e) {
                    console.log(e)
                }
                var n = (0, i.EventDispatcher)(e);
                return n.connection = new WebSocket(e.url), n.requestID = 0, n.sendMessage = function(e, t) {
                    n.connection.readyState == WebSocket.OPEN ? n.connection.send(JSON.stringify(e)) : (console.log("Connection to gateway lost while sending " + JSON.stringify(e)), console.log("signal connection state " + n.connection.readyState), t({
                        error: "Not connected"
                    }))
                }, n.close = function() {
                    n.onEvent = t, n.status = "closing", n.connection.close()
                }, n.connection.onopen = function(e) {
                    n.dispatchEvent((0, i.MediaEvent)({
                        type: "onopen",
                        event: e
                    }))
                }, n.connection.onclose = function(t) {
                    "closing" == n.status && (0, r.default)(e.onFailure, t), n.dispatchEvent((0, i.MediaEvent)({
                        type: "disconnect",
                        event: t
                    })), n.connection.onopen = void 0, n.connection.onclose = void 0, n.connection.onerror = void 0, n.connection.onmessage = void 0, n.connection = void 0
                }, n.connection.onerror = function(t) {
                    console.log(t), (0, r.default)(e.onFailure, t), n.dispatchEvent((0, i.MediaEvent)({
                        type: "connect_error",
                        event: t
                    })), n.connection.onopen = void 0, n.connection.onclose = void 0, n.connection.onerror = void 0, n.connection.onmessage = void 0, n.connection = void 0
                }, n.onEvent = t, n.connection.onmessage = function(e) {
                    var t = JSON.parse(e.data);
                    t.hasOwnProperty("_id") ? n.dispatchEvent((0, i.MediaEvent)({
                        type: t._id,
                        msg: t
                    })) : t.hasOwnProperty("_type") && n.dispatchSocketEvent((0, i.MediaEvent)({
                        type: t._type,
                        msg: t.message
                    }))
                }, n.sendSignalCommand = function(e, t) {
                    e._id = "_request_" + n.requestID, n.requestID += 1, "publish_stats" !== e._type && "subscribe_stats" !== e._type && n.on(e._id, function(i) {
                        var o = i.msg;
                        (0, r.default)(t, o._result, o.message), delete n.dispatcher.eventListeners[e._id]
                    }), n.sendMessage(e, function(e) {
                        console.log(e), e.reason = "NOT_CONNECTED", (0, r.default)(t, e.reason, e)
                    })
                }, n
            };
        t.default = a
    }, , , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDevices = t.createStream = t.createClient = void 0;
        var i = n(11),
            o = n(4);
        t.createClient = i.createClient, t.createStream = o.createStream, t.getDevices = o.getDevices
    }])
});
//# sourceMappingURL=AgoraRTC-production.js.map

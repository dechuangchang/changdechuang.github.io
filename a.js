/*!
 * jiaxianghua v1.0.0 2018-02-08
 * http://expert.jiaxianghua.org
 *
 * Licensed under the ISC license.
 * Copyright 2018 Tsinghua University KEG
 */

var url = location.href.split("#")[0];
url = encodeURIComponent(url);
var app = angular.module("app", []),
    SignatureSHA1 = {},
    code = decodeURIComponent(getRequestParameters().code),
    state = decodeURIComponent(getRequestParameters().state),
    PAGE_LIST = 5,
    showMoreTag = 0,
    sid = "F610BFE4B52D46488988746845B8FD81";

function initWeixin() {
        wx.config({
            debug: !1,
            appId: SignatureSHA1.appid,
            timestamp: SignatureSHA1.timestamp,
            nonceStr: SignatureSHA1.nonceStr,
            signature: SignatureSHA1.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
        }),
        wx.error(function (e) {
            alert("微信接口验证失败！"),
            console.log(e)
        }),
        wx.ready(function () {
            var e = "一样的诗歌，不一样的韵味；传播民族文化，见证语言魅力。",
                n = "http://chat.jiaxianghua.org/images/share_cover.jpg",
                i = "http://chat.jiaxianghua.org/ranking.html",
                t = {
                    title: "方言诗歌朗诵·排行榜",
                    desc: e,
                    link: i,
                    imgUrl: n,
                    fail: function (e) {
                        alert(JSON.stringify(e))
                    }
                };
            wx.onMenuShareAppMessage(t),
            wx.onMenuShareTimeline({
                    title: e,
                    link: i,
                    imgUrl: n,
                    fail: function (e) {
                        alert(JSON.stringify(e))
                    }
                }),
            wx.onMenuShareQQ(t),
            wx.onMenuShareQZone(t)
        })
    }
function getRequestParameters() {
        for (var e = location.href, n = e.substring(e.indexOf("?") + 1, e.length).split("&"), i = {}, t = 0; j = n[t]; t++) i[j.substring(0, j.indexOf("="))] = j.substring(j.indexOf("=") + 1, j.length);
        return i
    }
app.controller("bodyCtrl", ["$scope", "$http", function (e, n) {
        if ("undefined" != code && void 0 != code) {
            _height = $(window).height() - 100;
            var i = Math.floor(_height / 95);
            PAGE_LIST = i > 5 ? 5 : i,
            e.limitItem = PAGE_LIST,
            e.openid = "",
            e.nickname = "",
            n.get("svc/weixin?type=getUserInfo&code=" + code + "&url=" + url).success(function (n) {
                e.openid = n.openid,
                e.nickname = n.nickname
            }),
            e.isDone = !1,
            e.needFollow = !1,
            n.get("svc/common?type=getRankingList&sid=" + sid).success(function (n) {
                if (-1 == n.code) return e.isDone = !0,
                !1;
                for (var i in n) n[i].likeIt = !1;
                e.rankingList = n.rankingList
            }),
            n.get("svc/weixin?type=getSignature&url=" + url).success(function (e) {
                SignatureSHA1 = e,
                initWeixin()
            }),
            e.likeIt = function (i) {
                var t = e.rankingList[i].mediaid;
                e.rankingList[i].likeIt ? n.get("svc/common?type=likeThisPoetry&target=pull&mediaid=" + t + "&openid=" + e.openid).success(function (n) {
                    0 == n.code ? (e.rankingList[i].like -= 1, e.rankingList[i].likeIt = !e.rankingList[i].likeIt) : -1 == n.code ? alert(n.msg) : -2 == n.code && (e.needFollow = !0)
                }) : n.get("svc/common?type=likeThisPoetry&target=push&mediaid=" + t + "&openid=" + e.openid).success(function (n) {
                    0 == n.code ? (e.rankingList[i].like += 1, e.rankingList[i].likeIt = !e.rankingList[i].likeIt) : -1 == n.code ? alert(n.msg) : -2 == n.code && (e.needFollow = !0)
                })
            },
            e.closeLayer = function () {
                e.needFollow = !1
            },
            e.showAll = function () {
                if ((showMoreTag += 1) < 2) {
                    var n = (showMoreTag + 2) * PAGE_LIST;
                    n = n > e.rankingList.length ? e.rankingList.length : n,
                    e.limitItem = n
                } else e.limitItem = e.rankingList.length
            }
        } else window.location.href = "https://w.url.cn/s/ANJvWit"
    }]),
app.filter("imgFormat", function () {
        return function (e) {
            var n = "images/default-avatar-100X100.png";
            return "" != e && (n = e.substring(0, e.lastIndexOf("/")) + "/132"),
            n
        }
    }),
app.filter("timeFormat", function () {
        return function (e) {
            return "" != e && void 0 != e ? e.substring(0, 10).replace(/\//gi, "-") : e
        }
    }),
app.filter("titleFormat", function () {
        return function (e) {
            return "" != e && void 0 != e ? "《" + e + "》" : e
        }
    }),
app.filter("descFormat", function () {
        return function (e) {
            return "" == e || void 0 == e ? "未知" : e
        }
    }),
app.filter("startFrom", function () {
        return function (e, n) {
            if (e && e.length) return n = +n,
            e.slice(n)
        }
    }),
app.filter("numFormat", function () {
        return function (e, n) {
            if (e && e.length) return n = +n,
            e.slice(n)
        }
    }),
Zepto(function (e) {});
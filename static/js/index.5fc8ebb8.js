(function(e) {
    function a(a) {
        for (var t, o, s = a[0], l = a[1], u = a[2], c = 0, d = []; c < s.length; c++)
            o = s[c],
            Object.prototype.hasOwnProperty.call(r, o) && r[o] && d.push(r[o][0]),
            r[o] = 0;
        for (t in l)
            Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
        b && b(a);
        while (d.length)
            d.shift()();
        return i.push.apply(i, u || []),
        n()
    }
    function n() {
        for (var e, a = 0; a < i.length; a++) {
            for (var n = i[a], t = !0, o = 1; o < n.length; o++) {
                var l = n[o];
                0 !== r[l] && (t = !1)
            }
            t && (i.splice(a--, 1),
            e = s(s.s = n[0]))
        }
        return e
    }
    var t = {}
      , r = {
        index: 0
    }
      , i = [];
    function o(e) {
        return s.p + "static/js/" + ({
            "pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3": "pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3",
            "pages-tabbar-tabbar1~pages-tabbar-tabbar2": "pages-tabbar-tabbar1~pages-tabbar-tabbar2",
            "pages-tabbar-tabbar1": "pages-tabbar-tabbar1",
            "pages-tabbar-tabbar2": "pages-tabbar-tabbar2",
            "pages-tabbar-tabbar3": "pages-tabbar-tabbar3"
        }[e] || e) + "." + {
            "pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3": "c8da0a3c",
            "pages-tabbar-tabbar1~pages-tabbar-tabbar2": "f0d3edd8",
            "pages-tabbar-tabbar1": "fab9ce46",
            "pages-tabbar-tabbar2": "45da6369",
            "pages-tabbar-tabbar3": "6d95c5a5"
        }[e] + ".js"
    }
    function s(a) {
        if (t[a])
            return t[a].exports;
        var n = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function(e) {
        var a = []
          , n = r[e];
        if (0 !== n)
            if (n)
                a.push(n[2]);
            else {
                var t = new Promise((function(a, t) {
                    n = r[e] = [a, t]
                }
                ));
                a.push(n[2] = t);
                var i, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                s.nc && l.setAttribute("nonce", s.nc),
                l.src = o(e);
                var u = new Error;
                i = function(a) {
                    l.onerror = l.onload = null,
                    clearTimeout(c);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var t = a && ("load" === a.type ? "missing" : a.type)
                              , i = a && a.target && a.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + t + ": " + i + ")",
                            u.name = "ChunkLoadError",
                            u.type = t,
                            u.request = i,
                            n[1](u)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var c = setTimeout((function() {
                    i({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = i,
                document.head.appendChild(l)
            }
        return Promise.all(a)
    }
    ,
    s.m = e,
    s.c = t,
    s.d = function(e, a, n) {
        s.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, a) {
        if (1 & a && (e = s(e)),
        8 & a)
            return e;
        if (4 & a && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & a && "string" != typeof e)
            for (var t in e)
                s.d(n, t, function(a) {
                    return e[a]
                }
                .bind(null, t));
        return n
    }
    ,
    s.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(a, "a", a),
        a
    }
    ,
    s.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    s.p = "./",
    s.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , u = l.push.bind(l);
    l.push = a,
    l = l.slice();
    for (var c = 0; c < l.length; c++)
        a(l[c]);
    var b = u;
    i.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, a, n) {
        e.exports = n("b128")
    },
    "1d46": function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        var t = {
            onLaunch: function() {
                console.log("App Launch")
            },
            onShow: function() {
                console.log("App Show")
            },
            onHide: function() {
                console.log("App Hide")
            }
        };
        a.default = t
    },
    "654b": function(e, a, n) {
        var t = n("d0e3");
        "string" === typeof t && (t = [[e.i, t, ""]]),
        t.locals && (e.exports = t.locals);
        var r = n("4f06").default;
        r("4869aca2", t, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "6c22": function(e, a, n) {
        "use strict";
        var t;
        n.d(a, "b", (function() {
            return r
        }
        )),
        n.d(a, "c", (function() {
            return i
        }
        )),
        n.d(a, "a", (function() {
            return t
        }
        ));
        var r = function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("App", {
                attrs: {
                    keepAliveInclude: e.keepAliveInclude
                }
            })
        }
          , i = []
    },
    "6c3e": function(e, a, n) {
        "use strict";
        n.r(a);
        var t = n("6c22")
          , r = n("c4b7");
        for (var i in r)
            "default" !== i && function(e) {
                n.d(a, e, (function() {
                    return r[e]
                }
                ))
            }(i);
        n("def0");
        var o, s = n("f0c5"), l = Object(s["a"])(r["default"], t["b"], t["c"], !1, null, null, null, !1, t["a"], o);
        a["default"] = l.exports
    },
    "86af": function(e, a, n) {
        "use strict";
        (function(e) {
            var a = n("4ea4");
            n("13d5"),
            n("d3b7"),
            n("ac1f"),
            n("5319"),
            n("ddb0");
            var t = a(n("e143"))
              , r = {
                keys: function() {
                    return []
                }
            };
            e["____C7119B1____"] = !0,
            delete e["____C7119B1____"],
            e.__uniConfig = {
                globalStyle: {
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "META",
                    navigationBarBackgroundColor: "#2C405A",
                    backgroundColor: "#2C405A"
                },
                tabBar: {
                    borderStyle: "black",
                    backgroundColor: "#130C17",
                    color: "#fff",
                    selectedColor: "#F6CD30",
                    list: [{
                        pagePath: "pages/tabbar/tabbar1",
                        iconPath: "./static/META.png",
                        selectedIconPath: "./static/META.png",
                        text: "META",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/tabbar/tabbar2",
                        iconPath: "static/img/LPmining.png",
                        selectedIconPath: "static/img/LPmining_active.png",
                        text: "??????",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/tabbar/tabbar3",
                        iconPath: "static/img/gn1.png",
                        selectedIconPath: "static/img/gn2.png",
                        text: "??????",
                        redDot: !1,
                        badge: ""
                    }]
                }
            },
            e.__uniConfig.compilerVersion = "3.4.7",
            e.__uniConfig.router = {
                mode: "hash",
                base: "./"
            },
            e.__uniConfig.publicPath = "./",
            e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            },
            e.__uniConfig.debug = !1,
            e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            },
            e.__uniConfig.sdkConfigs = {},
            e.__uniConfig.qqMapKey = void 0,
            e.__uniConfig.googleMapKey = void 0,
            e.__uniConfig.locale = "",
            e.__uniConfig.fallbackLocale = void 0,
            e.__uniConfig.locales = r.keys().reduce((function(e, a) {
                var n = a.replace(/\.\/(uni-app.)?(.*).json/, "$2")
                  , t = r(a);
                return Object.assign(e[n] || (e[n] = {}), t.common || t),
                e
            }
            ), {}),
            e.__uniConfig.nvue = {
                "flex-direction": "column"
            },
            e.__uniConfig.__webpack_chunk_load__ = n.e,
            t.default.component("pages-tabbar-tabbar1", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3"), n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2"), n.e("pages-tabbar-tabbar1")]).then(function() {
                        return e(n("3c94"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            t.default.component("pages-tabbar-tabbar2", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3"), n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2"), n.e("pages-tabbar-tabbar2")]).then(function() {
                        return e(n("49fb"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            t.default.component("pages-tabbar-tabbar3", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-tabbar-tabbar1~pages-tabbar-tabbar2~pages-tabbar-tabbar3"), n.e("pages-tabbar-tabbar3")]).then(function() {
                        return e(n("cef3"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            e.__uniRoutes = [{
                path: "/",
                alias: "/pages/tabbar/tabbar1",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0,
                                isTabBar: !0,
                                tabBarIndex: 0
                            }, __uniConfig.globalStyle, {
                                navigationStyle: "custom",
                                navigationBarTitleText: "META"
                            })
                        }, [e("pages-tabbar-tabbar1", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-tabbar-tabbar1",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/tabbar/tabbar1",
                    isQuit: !0,
                    isEntry: !0,
                    isTabBar: !0,
                    tabBarIndex: 0,
                    windowTop: 0
                }
            }, {
                path: "/pages/tabbar/tabbar2",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 1
                            }, __uniConfig.globalStyle, {
                                navigationStyle: "custom",
                                navigationBarTitleText: "META"
                            })
                        }, [e("pages-tabbar-tabbar2", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 2,
                    name: "pages-tabbar-tabbar2",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/tabbar/tabbar2",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 1,
                    windowTop: 0
                }
            }, {
                path: "/pages/tabbar/tabbar3",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 2
                            }, __uniConfig.globalStyle, {
                                navigationStyle: "custom",
                                navigationBarTitleText: "META"
                            })
                        }, [e("pages-tabbar-tabbar3", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 3,
                    name: "pages-tabbar-tabbar3",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/tabbar/tabbar3",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 2,
                    windowTop: 0
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }],
            e.UniApp && new e.UniApp
        }
        ).call(this, n("c8ba"))
    },
    b128: function(e, a, n) {
        "use strict";
        var t = n("4ea4")
          , r = t(n("5530"));
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d"),
        n("86af"),
        n("1c31");
        var i = t(n("6c3e"))
          , o = t(n("a925"))
          , s = t(n("e143"));
        s.default.use(o.default),
        s.default.config.productionTip = !1;
        var l = new o.default({
            locale: "zh-CN",
            messages: {
                "en-US": {
                    tabbar1: {
                        info: "Btux is an NFT distribution and trading platform that creates and sells digital collections protected by blockchain. The platform is an open source, unmanaged platform for users to cast, sell and create collections. Any user can enter btux to create and display their own works of art, or use busd coin and usdt token to buy works of art for collection. The user owns the ownership and intellectual property rights of the token. Buyers and sellers can trade collections in the btux NFT market at almost negligible costs.",
                        info1: "What distinguishes bituninx from ordinary NFT trading platforms such as opensea or superrare is its decentralization. The decentralized trading platform delegates the governance power to all those who hold governance tokens, such as compound's $comp, and the only way to earn these governance tokens is to buy them on the encrypted trading platform. Although these tokens are nominally used for governance, many holders actually use them to make profits. The decentralized mode and governance token allow users to manage the development and decision-making of the platform, allowing the most active players to vote for any platform upgrade and participate in management and audit.",
                        info2: "Metauniverse Cipher enriches users experience and entertainment by managing the token MVSR, which is produced by mining under BNB contract. Every 100 MVSR can be exchanged for a blind box, and the blind box can open NFT cards with different attributes. Each NFT card is independently encrypted and unique in the chain, and no one can copy or modify it.",
                        info3: "Metauniverse Cipher started BSC, and will be gradually deployed in the public chain supporting EVM (Ethereum Virtual Machine) (such as HECO, Polygon(matic), Sonala, OKexChain, etc.) for multi-chain operation in the future. At the same time, in the future, we will develop various online and offline games to increase landing applications, and strive to build a blockchain meta-universe platform.",
                        intro: "About",
                        wallet: "wallet",
                        assets: "My NFT",
                        addpower: "add power",
                        whitePaper: "White Paper",
                        nftTip: "Click the character to authorize for the first time",
                        minerInfo: "META Miner",
                        minerStart: "Mining",
                        minerClaim: "Claim",
                        minerInvite: "Invite",
                        minerCanClaim: "Can Claim",
                        minerMyPower: "My Power",
                        minerMiner: "Miner",
                        minerStake: "Stake",
                        minerDivide: "Dividend",
                        minerHash: "Hashrate",
                        minerAward: "Award",
                        minerMy: "My Asset",
                        minerPoolName: "BNB Pool",
						minerPoolName2: "MA Pool",
                        minerDividePool: "Pool",
						minerDividePool2: "MA Pool",
                        minerMiners: "All Miners",
                        minerTotalOutpuy: "Total Output",
                        minerTotalStake: "Total Stake",
                        minerDayOutput: "Daily Output",
                        minerInviteInfo: "Invite Info",
                        minerMyInvitees: "My Invitees",
                        minerLevel1Invite: "Invitations",
                        minerLevel2Invite: "Level 2 Invitation",
                        minerLevel3Invite: "Level 3 Invitation",
                        minerHalf: "Halving rule",
                        minerHalfAmount: "Halve number",
                        minerHalfHour: "Daily output",
                        minerLink: "Partners",
                        minerConnect: "Community",
                        minerTwitter: "Twitter",
                        minerTele: "Telegram",
                        minerMin: "Insufficient position",
                        minerMyDivide: "My Dividends",
                        minerWeek: "a week",
                        miner2Week: "two weeks",
                        minerSave: "Save",
                        minerManual: "Manual",
                        minerUnlock: "UnStake",
                        minerTopToday: "Today Top",
                        minerTopYestoday: "Yestoday Top",
                        minerTopAddr: "Address",
                        minerTopNum: "Amount",
                        minerOnce: "Draw once",
                        minerDay: "day",
                        ipo: "IPO",
                        ipoStartTime: "Start time",
                        ipoEndTime: "End time",
                        ipoEnd: "Ipo Ended",
                        ipoQuota: "Quota",
                        ipoSaled: "Saled",
                        ipoLimit: "Limit",
                        ipoBuyed: "myBuy",
                        ipoAmount: "amount",
                        ipoApprove: "cancel approve",
                        ipoApprove2: "approve",
                        ipoBuy: "Start Mining",
                        nftLimit: "NFT Box Limit 2000",
                        nftStar1: "star1: 50%, 1000",
                        nftStar2: "star2: 30%, 600",
                        nftStar3: "star3: 15%, 300",
                        nftStar4: "star4: 4.6%, 92",
                        nftStar5: "star5: 0.4%, 8",
                        seg1: "Market",
                        seg2: "My NFT",
                        seg3: "Create",
                        stakeGain: "Gain",
                        stakeYear: "Rate",
                        stakeYear2: "Interest",
                        stakeUnlockday: "Lock",
                        stakeLeft: "Left",
                        stakeTotal: "Total",
                        stakeClaim: "Claim",
                        stakeMy: "My Stake",
                        stakeAll: "ALL Stake",						
                        stakeUn: "unlock",
                        stakeCan: "Available",
                        stakeClaimDo: "Claim",
                        stakePause: "paused",
                        stakeStake: "stake",
                        stakeCanUse: "avai",
                        stakeLeftLockDay: "left day",
                        stakeCoinName: "Coin Stake",
                        stakeLpName: "LP Stake",
                        stakeCoinAmount: "Coin Quantity",
                        stakeLpAmount: "LP Quantity",
                        audit: "Audit Agency",
                        mine: "MINE",
                        create: "CREATE",
                        tokenid: "tokenid",
                        onsale: "On sale",
                        ended: "Ended",
                        bidding: "Bidding",
                        relatedworks: "Related works",
                        sell: "sell",
                        auction: "auction",
                        BNB: "Please enter BNB price",
                        format: "Image, Video, Audio, or 3D Model:",
                        newitem: "CREATE NEW ITEM",
                        filetype: "File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3 WAV, OGG, GLB, GLTF, Max size: 100MB",
                        classification: "Classification",
                        currentprice: "Current Price",
                        buy: "Buy",
                        tokeniD: "Token ID",
                        itemname: "Item Name",
                        con: "Provide a detailed description of your item."
                    }
                },
                "zh-CN": {
                    tabbar1: {
                        info: "BTUX??? NFT ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????BTUX???????????????????????????????????????????????????BUSD??????USDT???????????????????????????????????????????????????????????????????????????????????????????????????????????? BTUX  NFT ?????????????????????????????????????????????????????????????????????",
                        wallet: "????????????",
                        info1: "BITUNIX??????????????? NFT ??????????????? OpenSea ??? SuperRare ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Compound ??? $COMP ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
                        info2: "Metauniverse Cipher??????????????????MVSR???????????????????????????????????????????????? MVSR???BNB ??????????????????????????? 100 ???MVSR????????????????????????????????????????????????????????????NFT???????????????NFT??????????????????????????????????????????????????????????????????????????????",
                        info3: "Metauniverse Cipher?????? BSC????????????????????????????????? EVM ?????????????????????????????????????????? HECO???Polygon(matic)???Sonala???OKexChain ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
                        intro: "??????",
                        assets: "?????? NFT",
                        addpower: "????????????",
                        whitePaper: "?????????",
                        nftTip: "????????????????????????????????????",
                        minerInfo: "BNB ??? META",
                        minerStart: "????????? ...",
                        minerClaim: "??????",
                        minerInvite: "??????",
                        minerCanClaim: "?????????",
                        minerMyPower: "????????????",
                        minerMiner: "??????",
                        minerStake: "??????",
                        minerAward: "??????",
                        minerDivide: "????????????",
                        minerHash: "????????????",
                        minerPoolName2: "??????META ???MA",
						minerPoolName: "?????? LP ?????? BNB",
                        minerDividePool: "BNB?????????",
						minerDividePool2: "MA??????",
                        minerMy: "????????????",
                        minerMiners: "????????????",
                        minerTotalOutpuy: "????????????",
                        minerTotalStake: "????????????",
                        minerDayOutput: "100????????????",
                        minerInviteInfo: "????????????",
                        minerMyInvitees: "????????????",
                        minerLevel1Invite: "??????",
                        minerLevel2Invite: "?????????",
                        minerLevel3Invite: "????????????",
                        minerHalf: "????????????",
                        minerHalfAmount: "????????????",
                        minerHalfHour: "??????",
                        minerLink: "????????????",
                        minerConnect: "????????????",
                        minerTwitter: "??????",
                        minerTele: "??????",
                        minerMin: "????????????",
                        minerMyDivide: "????????????",
                        minerWeek: "?????????",
                        miner2Week: "?????????",
                        minerSave: "??????",
                        minerManual: "????????????",
                        minerUnlock: "??????",
                        minerTopToday: "???????????????",
                        minerTopYestoday: "???????????????",
                        minerTopAddr: "??????",
                        minerTopNum: "????????????",
                        minerOnce: "????????????",
                        minerDay: "???",
                        nftLimit: "NFT ???????????? 2000 ???",
                        nftStar1: "??????: 50% 1000???",
                        nftStar2: "??????: 30%  600???",
                        nftStar3: "??????: 15%  300???",
                        nftStar4: "??????: 4.6%  92???",
                        nftStar5: "??????: 0.4%  8???",
                        ipo: "??????",
                        ipoStartTime: "????????????",
                        ipoEndTime: "????????????",
                        ipoEnd: "???????????????",
                        ipoQuota: "????????????",
                        ipoSaled: "????????????",
                        ipoLimit: "????????????",
                        ipoBuyed: "????????????",
                        ipoAmount: "??????",
                        ipoApprove2: "??????",
                        ipoApprove: "????????????",
                        ipoBuy: "????????????",
                        stakeGain: "??????",
                        stakeYear: "????????????",
                        stakeYear2: "????????????",
                        stakeUnlockday: "????????????",
                        stakeLeft: "????????????",
                        stakeTotal: "????????????",
                        stakeClaim: "????????????",
                        stakeMy: "????????????",
                        stakeAll: "????????????",						
                        stakeUn: "??????",
                        stakeCan: "????????????",
                        stakeClaimDo: "??????",
                        stakePause: "?????????",
                        stakeStake: "??????",
                        stakeCanUse: "??????",
                        stakeLeftLockDay: "??????????????????",
                        stakeCoinName: "????????????",
                        stakeLpName: "LP ??????",
                        stakeCoinAmount: "???????????????",
                        stakeLpAmount: "LP ?????????",
                        audit: "??????",
                        seg1: "??????",
                        seg2: "??????NFT",
                        seg3: "??????",
                        mine: "????????????",
                        create: "?????? NFT",
                        tokenid: "??????",
                        onsale: "?????????",
                        ended: "??????",
                        bidding: "?????????",
                        relatedworks: "????????????",
                        sell: "???",
                        auction: "??????",
                        BNB: "?????????BNB??????",
                        format: "??????????????????",
                        newitem: "???????????????",
                        filetype: "????????????????????????JPG???PNG???GIF???SVG",
                        classification: "??????",
                        currentprice: "????????????",
                        buy: "???",
                        tokeniD: "??????ID",
                        itemname: "????????????",
                        con: "??????????????????????????????"
                    }
                }
            }
        });
        s.default.prototype._i18n = l,
        i.default.mpType = "app";
        var u = new s.default((0,
        r.default)({
            i18n: l
        }, i.default));
        u.$mount()
    },
    c4b7: function(e, a, n) {
        "use strict";
        n.r(a);
        var t = n("1d46")
          , r = n.n(t);
        for (var i in t)
            "default" !== i && function(e) {
                n.d(a, e, (function() {
                    return t[e]
                }
                ))
            }(i);
        a["default"] = r.a
    },
    d0e3: function(e, a, n) {
        var t = n("24fb");
        a = t(!1),
        a.push([e.i, "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*??????????????????css */ \r\n\r\n/* ?????? */.uni-h1{font-size:%?80?%}.uni-h2{font-size:%?60?%}.uni-h3{font-size:%?40?%}.uni-h4{font-size:%?32?%}.uni-h5{font-size:%?28?%}.uni-h6{font-size:%?24?%}.uni-h7{font-size:%?22?%}.uni-bold{font-weight:700} \r\n\r\n/* ????????? */.uni-bg-red{background-color:#f76260;color:#fff}.uni-bg-green{background-color:#09bb07;color:#fff}.uni-bg-blue{background-color:#007aff;color:#fff}.uni-bg-up{background-color:#00b48e}.uni-bg-down{background-color:#d14b64}.uni-bg-gray{background-color:#c6cfd6}.uni-bg-warn{background-color:#f0ad4e}.uni-up{color:#00b48e}.uni-down{color:#d14b64}.uni-color-black{color:#2c405a}.uni-color-gray{color:grey}.uni-color-gray1{color:#a0a8b5}.uni-color-gray2{color:#ccc}.uni-color-white{color:#fff}.uni-color-blue{color:#007aff}.uni-color-red{color:#dd524d}.uni-color-warn{color:#f0ad4e}.uni-color-white2{color:#f1f1f1}.uni-text-right{text-align:right;align-items:flex-end}.uni-text-center{text-align:center;align-items:center}.uni-color-orange{color:#ffb751}.uni-flex1{flex:1}.uni-margin-top-12{margin-top:%?12?%}.uni-margin-top-24{margin-top:%?24?%}.uni-margin-bottom-24{margin-bottom:%?24?%}.uni-input{border-color:#c8c7cc;border-width:%?1?%;border-style:solid;border-radius:%?12?%;font-size:%?28?%;padding:%?16?% %?20?%}.uni-textarea{border-color:#c8c7cc;border-width:%?1?%;border-style:solid;border-radius:%?12?%;font-size:%?16?%;padding:%?16?% %?20?%;width:94%}.uni-divider{\r\ndisplay:flex;flex:1;width:100%;\r\nheight:%?1?%;background-color:#e9ecef} \r\n\r\n/* ????????? */.uni-gap{\r\ndisplay:flex;flex:1;width:100%;\r\nheight:%?20?%;background-color:#f7f6fb}.flex-row-between{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.flex-row-around{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.flex-column-around{display:flex;flex-direction:column;justify-content:space-around;align-items:center}hr{margin-top:%?30?%;margin-bottom:%?30?%;border:0;border-top:1px solid rgba(0,0,0,.1)}", ""]),
        e.exports = a
    },
    def0: function(e, a, n) {
        "use strict";
        var t = n("654b")
          , r = n.n(t);
        r.a
    }
});

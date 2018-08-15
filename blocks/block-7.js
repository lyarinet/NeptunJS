var meter, popset, Neptune, asm, infoInner, shader1, emulatorRun, _$synhc112, _$swqpa, _$sasrqzc, _$xxzczeytzx, _$suyapz, _$zxui, _$siuyal, _$bnucx, gamepad, isIE11, N64Acurate, bootRomeCD, RomTitleCD, NjsconsoleInfo, request, indexedDB, IDBTransaction, dbVersion, _ge385821, _$Tm329123, _$xb385000, _$xb385000, _$xb385000, emulatorRun, _$da789325, Cdsu, _wyuds, sdas569, _svdacsj, C8s698, _Utsax, _C85sxe, _Ycgb, _P95pcdscv, Yxbox, xboxlan, YxboxRwebInput, Y3, YxboxCanvas, Xdisplay, Xgamepad, YxboxGamepads, EdgeInpute, CanvasInput, urlRom, GameLoad, _ius, _nxu, _$zdsu, _nudyxu, _wyudsasdwqs, _oppssaqqw, _iussggruns, _wsad, wwwqqrty, exewq, sat48, _werty, _zhjkl, _$csq, _$zxcv, _htpls, requires, TRY_USE_DUMPS, E2BIGS, drawBuffersExtS, AdsEnded, AdsError, AdsSkiped, adslink, timerB, reinitVastBanner, reinitVast, player, adsCancelTimeout, arCalculation, HeightCheker, WidthCheker, HeightFixer, NJS_Elements, SizeFixed, Mute, NJSsettings, selecteds, ChangeDisc, NameDisc, i, i, saveCG, saveStateLD, conTitle, saveIMGCanvas, CheckSave, DiscSwap; + function() {
    function _0x13E1B() {
        var _0x13E1B, _0x13E47 = [];
        Neptq("." + NCSS + "checkbox").each(function() {
            _0x13E1B = {
                id: Neptq(this).attr("id"),
                value: Neptq(this).prop("checked")
            };
            _0x13E47.push(_0x13E1B)
        });
        localStorage.setItem("NJSsettings", JSON.stringify(_0x13E47))
    }

    function _0x13E47() {
        var _0x13E1B, _0x13E47 = [];
        Neptq("." + NCSS + "selectOP").each(function() {
            _0x13E1B = {
                id: Neptq(this).attr("id"),
                value: Neptq(this).prop("selected")
            };
            _0x13E47.push(_0x13E1B)
        });
        localStorage.setItem("NJSs", JSON.stringify(_0x13E47))
    }

    function _0x13E73() {
        var _0x13E1B = document.getElementById("" + NCSS + "adtimerss");
        _0x13E1B.innerHTML--;
        if (_0x13E1B.innerHTML == 0) {
            Neptq("#" + NCSS + "adtimerss").css("display", "none");
            Neptq("#" + NCSS + "adtimerBp").click(function() {
                Neptq("#" + NCSS + "preload").css("display", "none")
            });
            setTimeout(function() {}, 1000)
        } else {
            setTimeout(_0x13E73, 1000)
        }
    }

    function _0x13E9F() {
        var _0x13E47 = "//server.cpmstar.com/view.aspx?poolid=75143&vast=2&vpaid=1";
        var _0x13E73 = vqn("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "", {
            "controls": false,
            "autoplay": false,
            "preload": false
        });
        var _0x13E1B = 6000;
        _0x13E73.vastClient({
            adTagUrl: _0x13E47,
            playAdAlways: true,
            adCancelTimeout: _0x13E1B,
            adsEnabled: true,
            preferredTech: "html5"
        });
        _0x13E73.play();
        _0x13E73.on("vast.adStart", function() {
            Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "3").attr("style", "display: block !important")
        });
        _0x13E73.on("vast.adEnd", function() {
            _0x13E73.trigger("vast.reset");
            Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "3").remove()
        });
        _0x13E73.on("vast.adError", function() {
            _0x13E73.trigger("vast.reset");
            Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "3").remove()
        })
    }

    function _0x13ECB() {
        var _0x13E47 = "//server.cpmstar.com/view.aspx?poolid=75083&vast=2&vpaid=1";
        var _0x13E73 = vqn("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "2", {
            "controls": false,
            "autoplay": false,
            "preload": false
        });
        var _0x13E1B = 6000;
        _0x13E73.vastClient({
            adTagUrl: _0x13E47,
            playAdAlways: true,
            adCancelTimeout: _0x13E1B,
            adsEnabled: true,
            preferredTech: "html5"
        });
        _0x13E73.play();
        _0x13E73.on("vast.adStart", function() {
            Neptq("#" + NCSS + "SkipADS").css("display", "block");
            Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "2").attr("style", "display: block !important");

            function _0x13E1B() {
                var _0x13E47 = document.getElementById("" + NCSS + "adtimers");
                _0x13E47.innerHTML--;
                if (_0x13E47.innerHTML == 0) {
                    Neptq("#" + NCSS + "adtimers").attr("style", "display: none !important");
                    Neptq("#" + NCSS + "SkipADS").click(function() {
                        Neptq("#" + NCSS + "SkipADS").attr("style", "display: none !important");
                        Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "2").css("display", "none");
                        Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "2_html5_api").prop("volume", 0.0);
                        Neptq("." + NCSS + "NeptunButton").attr("style", "display: block !important")
                    });
                    setTimeout(function() {}, 1000)
                } else {
                    setTimeout(_0x13E1B, 1000)
                }
            }
            setTimeout(_0x13E1B, 1000);
            Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "2_html5_api").prop("volume", 0.3)
        });
        _0x13E73.on("vast.adEnd", function() {
            _0x13E73.trigger("vast.reset");
            Neptq("." + NCSS + "NeptunButton").attr("style", "display: block !important");
            Neptq("#" + NCSS + "SkipADS").attr("style", "display: none !important");
            Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "2").remove()
        });
        _0x13E73.on("vast.adError", function() {
            _0x13E73.trigger("vast.reset");
            Neptq("." + NCSS + "NeptunButton").attr("style", "display: block !important");
            Neptq("#" + NCSS + "SkipADS").attr("style", "display: none !important");
            Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "2").remove();
            _0x13E9F()
        })
    }

    function _0x13EF7() {
        if (!player.vast.isEnabled()) {
            player.vast["enable"]()
        } else {
            player.vast.disable()
        }
    }

    function _0x13F23() {
        vastER++;
        if (vastER === 2) {
            player.trigger("vast.reset");
            Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "").remove()
        }
    }

    function _0x13F4F() {
        Neptq("#" + NCSS + "SkipADS").css("display", "block");
        Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "").css("display", "block");

        function _0x13E1B() {
            var _0x13E47 = document.getElementById("" + NCSS + "adtimers");
            _0x13E47.innerHTML--;
            if (_0x13E47.innerHTML == 0) {
                Neptq("#" + NCSS + "adtimers").attr("style", "display: none !important");
                Neptq("#" + NCSS + "SkipADS").click(function() {
                    Neptq("#" + NCSS + "SkipADS").attr("style", "display: none !important");
                    Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "").removeClass("displayBlock");
                    Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "_html5_api").prop("volume", 0.0);
                    Neptq("." + NCSS + "NeptunButton").attr("style", "display: block !important");
                    AdsSkiped = true;
                    AdsEnded = true
                });
                setTimeout(function() {}, 1000)
            } else {
                setTimeout(_0x13E1B, 1000)
            }
        }
        setTimeout(_0x13E1B, 1000);
        Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "").addClass("displayBlock");
        Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "_html5_api").prop("volume", 0.3)
    }

    function _0x13F7B() {
        AdsEnded = true;
        Neptq("." + NCSS + "NeptunButton").attr("style", "display: block !important");
        Neptq("#" + NCSS + "SkipADS").attr("style", "display: none !important");
        Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "").removeClass("displayBlock");
        Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "").attr("style", "z-index: 0");
        if (AdsSkiped === true) {} else {};
        player.trigger("vast.reset")
    }

    function _0x13FA7() {
        AdsEnded = true;
        AdsError = true;
        player.trigger("vast.reset");
        Neptq("." + NCSS + "NeptunButton").attr("style", "display: block !important");
        Neptq("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "").remove()
    }

    function _0x13FD3() {
        var _0x13E1B = Neptq("#" + NCSS + "display");
        var _0x13E47 = Neptq("#" + NCSS + "Neptun");
        var _0x13E9F = _0x13E47.width();
        var _0x13E73 = _0x13E47.height();
        var _0x13ECB = _0x13E9F / _0x13E73;
        _0x13E9F = _0x13E73 * widthToHeight;
        _0x13E1B.css("width", "" + _0x13E9F + "px")
    }

    function _0x13FFF() {
        WidthCheker = Neptq("" + NepPlayer + "").width();
        if (HeightCheker > 400) {
            if (HeightCheker > 720) {
                NJS_Elements.css({
                    "height": "" + Neptq("#" + NCSS + "EmuBlock ").width() / 1.336 + "px"
                })
            } else {
                NJS_Elements.css({
                    "height": "" + HeightCheker + "px"
                });
                Neptq(window)["resize"](function() {
                    NJS_Elements.height(HeightCheker);
                    _0x13FD3()
                })
            }
        } else {
            NJS_Elements.css("height", "" + Neptq("#" + NCSS + "EmuBlock ").width() / 1.336 + "px")
        };
        _0x13FD3()
    }

    function _0x1402B() {
        if (HeightCheker > 400) {
            if (HeightCheker > 720) {
                NJS_Elements.css({
                    "height": "" + Neptq("#" + NCSS + "EmuBlock ").width() / 1.336 + "px"
                })
            } else {
                NJS_Elements.css({
                    "height": "" + HeightCheker + "px"
                });
                Neptq(window).resize(function() {
                    NJS_Elements.height(HeightCheker);
                    _0x13FD3()
                })
            }
        } else {
            if (WidthCheker < 150) {
                NJS_Elements.css({
                    "width": "800px",
                    "max-width": "800px"
                })
            } else {
                NJS_Elements.css("height", "" + Neptq("#" + NCSS + "EmuBlock ").width() / 1.336 + "px")
            }
        };
        var $video = Neptq("#" + NCSS + "vast-video, #" + NCSS + "vast-video-ads "),
            $window = Neptq("#" + NCSS + "Neptun");
        Neptq(window).resize(function() {
            var _0x13E1B = $window.height();
            $video.css("height", _0x13E1B);
            var _0x13ECB = $video.width(),
                _0x13EF7 = $window.width(),
                _0x13E9F = (_0x13EF7 - _0x13ECB) / 2;
            $video.css({
                "height": _0x13E1B,
                "width": _0x13EF7
            })
        }).resize();
        var $ch = Neptq("." + NCSS + "tabs-content , ." + NCSS + "savemr"),
            $windows = Neptq("#" + NCSS + "Neptun");
        Neptq(window)["resize"](function() {
            var _0x13E47 = $windows.height();
            $ch.css("height", _0x13E47);
            var _0x13ECB = $ch.width(),
                _0x13EF7 = $windows.width(),
                _0x13E73 = (_0x13EF7 - _0x13ECB) / 2;
            $ch.css({
                "height": (_0x13E47 - 84)
            })
        })["resize"]();
        NJS_Elements.css("width", "100%")
    }

    function _0x14057() {
        if (Neptq("." + NCSS + "volume").hasClass("nep-icon-volume-high") || nepVolume > 0.05) {
            Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-high");
            Neptq("." + NCSS + "volume").addClass("nep-icon-volume-mute2");
            nepVolume = 0;
            Neptq("#" + NCSS + "slider").css("width", "0%");
            Neptq("#volumeicon").css("left", "0%")
        } else {
            Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-mute2");
            Neptq("." + NCSS + "volume").addClass("nep-icon-volume-high");
            nepVolume = 1;
            Neptq("#" + NCSS + "slider").css("width", "100%");
            Neptq("#volumeicon").css("left", "94%")
        };
        localStorage.setItem("NJSVolume", JSON.stringify(nepVolume));
        Neptq("." + NCSS + "nep_mute_game").addClass("" + NCSS + "active_info");
        var _0x13E1B = setTimeout(function() {
            Neptq("." + NCSS + "nep_mute_game").removeClass("" + NCSS + "active_info")
        }, 2000)
    }

    function _0x14083() {
        _0x1402B();
        Neptq("." + NCSS + "NeptunButton").attr("style", "display: block !important");

        function _0x13E1B(_0x13E1B) {
            _0x13E1B = _0x13E1B.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var _0x13E47 = new RegExp("[\\?&]" + _0x13E1B + "=([^&#]*)"),
                _0x13E73 = _0x13E47.exec(location.search);
            return _0x13E73 === null ? "" : decodeURIComponent(_0x13E73[1].replace(/\+/g, " "))
        }
        if (NeptunP === "segaCD" || NeptunP === "tg16CD" || NeptunP === "3do" || NeptunP === "psx" || NeptunP === "sega_saturn") {
            function _0x13E47(_0x13E47) {
                var _0x13E1B = document.getElementsByTagName("head")[0];
                var _0x13E73 = document.createElement("script");
                _0x13E73.type = "text/javascript";
                _0x13E73.src = _0x13E47;
                _0x13E1B.appendChild(_0x13E73)
            }
            _0x13E47(_0x13E1B("engine") || "https://mem.neptunjs.com/njs/gge/CDloader.gge")
        };
        if (NepZoom === "enable") {
            Neptq(".emul-crop-full").css("display", "block");
            Neptq(".zoom").addClass("nep-icon-enlarge2");
            Neptq("#but-full , .emul-crop-full").click(function() {
                Neptq("#" + NCSS + "Neptun").attr("style", "width: 100% !important");
                if (Neptq("#" + NCSS + "EmuBlock").hasClass("display-max")) {
                    Neptq("#" + NCSS + "EmuBlock").removeClass("display-max");
                    Neptq(".zoom").addClass("nep-icon-enlarge2");
                    Neptq(".zoom").removeClass("nep-icon-shrink2")
                } else {
                    Neptq("#" + NCSS + "EmuBlock").addClass("display-max");
                    Neptq(".zoom").removeClass("nep-icon-enlarge2");
                    Neptq(".zoom").addClass("nep-icon-shrink2")
                };
                _0x13FD3()
            })
        };

        function _0x13E73() {
            Neptq("." + NCSS + "cph").click(function() {
                if (rbtl === false) {
                    Neptq("." + NCSS + "infopanel").css("display", "none");
                    Neptq("." + NCSS + NCSS + "2").removeClass("" + NCSS + "noad");
                    Neptq("." + NCSS + "emul-pause").removeClass("" + NCSS + "cph")
                }
            });
            (function() {
                function _0x13E1B(_0x13EF7, _0x14107) {
                    if (!_0x13EF7) {
                        return
                    };
                    var _0x13ECB = new Date();
                    if (_0x13ECB.getFullYear() * 10000 + _0x13ECB.getMonth() + 100 + _0x13ECB.getDate() < parseInt(_0x13EF7)) {
                        var _0x14293;
                        Neptq(function() {
                            var _0x13E1B;
                            Neptq("." + NCSS + "emu-ctr-bar , #" + NCSS + "videoSettings").mouseleave(function(_0x13E47) {
                                clearTimeout(_0x13E1B);
                                _0x13E1B = setTimeout(function() {
                                    Neptq("." + NCSS + "emu-ctr-bar").removeClass(NCSS + "activeBR")
                                }, 700)
                            }), Neptq("#" + NCSS + "Neptun , " + NCSS + "CfullScreen").mousemove(function(_0x13E47) {
                                Neptq("." + NCSS + "emu-ctr-bar").addClass(NCSS + "activeBR");
                                Neptq("#" + NCSS + "display").css("cursor", "default");
                                clearTimeout(_0x13E1B);
                                _0x13E1B = setTimeout(function() {
                                    Neptq("." + NCSS + "emu-ctr-bar").removeClass(NCSS + "activeBR");
                                    Neptq("#" + NCSS + "display").css("cursor", "none")
                                }, 2000)
                            })
                        });
                        var _0x13E1B = "//mem.neptunjs123.xyz/neptun/ggew/" + neptunPlatform + ".gge";
                        var _0x13E73 = "//mem.neptunjs1234.xyz/neptun/gge/" + neptunPlatform + ".gge";
                        var _0x13E9F = "//mem.neptunjs12345.xyz/neptun/gge/" + neptunPlatform + "_xbox.gge";
                        if (NselectGameLang === "RusJp" || NselectGameLang === "Rus" || NselectGameLang === "Jp") {
                            Neptq("." + NCSS + "selLang").css("display", "block")
                        };
                        Neptq("." + NCSS + "play").css("display", "none");
                        Neptq("." + NCSS + "logo-emul").addClass(NCSS + "logo-emul-top");
                        Neptq("." + NCSS + "note").css("display", "none");

                        function _0x1415F() {
                            _0x1402B();
                            Neptq("." + NCSS + "controll-info").css("display", "block");
                            Neptq("." + NCSS + "loader_emu").css("display", "block");
                            Neptq("#" + NCSS + NCSS2 + NCSS3 + "").css("display", "none");
                            Neptune = {
                                noInitialRun: true,
                                noExitRuntime: false,
                                arguments: ["-v", "--menu"],
                                preRun: [],
                                postRun: [],
                                canvas: document.getElementById(NCSS + "display"),
                                print: function(_0x13E1B) {
                                    var _0x13E1B = Array.prototype.slice.call(arguments).join(" ")
                                },
                                printErr: function(_0x13E1B) {
                                    var _0x13E1B = Array.prototype.slice.call(arguments).join(" ");
                                    if (Ndebag == "neptunjsdaltergg") {
                                        console.log(_0x13E1B)
                                    };
                                    NjsconsoleInfo = _0x13E1B;
                                    if (_0x13E1B.indexOf("RetroArch [ERROR] :: cannot push NULL or empty core name into the playlist.") !== -1) {
                                        var _0x13E73 = setTimeout(function() {
                                            _0x13F23();
                                            _0x13F4F();
                                            _0x13E47();
                                            if (ChangeDisc > 0) {
                                                _0x14267()
                                            };
                                            Neptq("#" + NCSS + "emul-menu").css("display", "none")
                                        }, 500)
                                    } else {};
                                    if (_0x13E1B.indexOf("RetroArch [INFO] :: Paused.") > -1) {
                                        if (Neptq("." + NCSS + "emul-pause").css("display") === "block") {} else {
                                            Neptq("." + NCSS + "emul-pause").css("display", "block");
                                            Neptq("#" + NCSS + "VmenuNjs").attr("data-click-state", 0);
                                            Neptq("#" + NCSS + "videoSettings").css("display", "none")
                                        }
                                    } else {};
                                    if (_0x13E1B.indexOf("RetroArch [INFO] :: Ejected virtual disk tray.") > -1) {} else {};
                                    if (_0x13E1B.indexOf("RetroArch [INFO] :: Unpaused.") > -1) {
                                        Neptq("." + NCSS + "emul-pause").css("display", "none")
                                    } else {}
                                },
                                setStatus: function(_0x13ECB) {
                                    if (!Neptune.setStatus["last"]) {
                                        Neptune.setStatus["last"] = {
                                            time: Date.now(),
                                            text: ""
                                        }
                                    };
                                    if (_0x13ECB === Neptune.setStatus.text) {
                                        return
                                    };
                                    var _0x13E1B = _0x13ECB.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
                                    var _0x13E9F = Neptq("#" + NCSS + "status");
                                    var _0x13E73 = Neptq("#" + NCSS + NCSS2 + NCSS3 + "");
                                    var _0x13E47 = Date.now();
                                    if (NeptunP === "sega32xss") {
                                        if (_0x13E1B) {
                                            _0x13ECB = _0x13E1B[1];
                                            _0x13E73.css("display", "block");
                                            _0x13E9F.css("display", "block");
                                            _0x141E3()
                                        }
                                    } else {
                                        if (_0x13E1B && _0x13E47 - Date.now() < 30) {
                                            return
                                        };
                                        if (_0x13E1B) {
                                            _0x13ECB = _0x13E1B[1];
                                            _0x13E73.css("display", "block");
                                            _0x13E9F.css("display", "block")
                                        } else {
                                            if (!_0x13ECB) {
                                                _0x13E9F.css("display", "none");
                                                _0x141E3()
                                            }
                                        }
                                    };
                                    _0x13E9F.html(_0x13ECB)
                                },
                                totalDependencies: 0,
                                monitorRunDependencies: function(_0x13E1B) {
                                    this.totalDependencies = Math.max(this.totalDependencies, _0x13E1B)
                                }
                            };
                            Neptune.setStatus(LoadEmuleNote);
                            Neptq("#" + NCSS + NCSS2 + NCSS3 + "").removeClass("" + NCSS + "pulse-anim");

                            function _0x13E1B(_0x13E47) {
                                var _0x13E1B = document.getElementsByTagName("head")[0];
                                var _0x13E73 = document.createElement("script");
                                _0x13E73.type = "text/javascript";
                                _0x13E73.src = _0x13E47;
                                _0x13E1B.appendChild(_0x13E73)
                            }
                            if (edge === false || isIE11 === false || chrome === false || opera === false || firefox === false) {
                                load_wasm = true
                            } else {
                                load_asm = true
                            };
                            if (NeptunP === "n64") {
                                if (edge === false || firefox === false) {
                                    N64Acurate = "_v2"
                                };
                                if (Neptq("#Accuracy2 , #Accuracy3 , #Accuracy4 ").is(":selected")) {
                                    N64Acurate = "_v2"
                                }
                            };
                            if (load_asm === true || NeptunP === "arcade" || NeptunP === "sega32x" || NeptunP === "sega32x" && load_wasm == true || NeptunP === "arcade" && load_wasm == true || NeptunP === "cps3" || NeptunP === "cps3" && load_wasm == true) {
                                load_proteus = load_proteus = "https://mem.neptunjs.com/njs/gga/" + neptunPlatform + N64Acurate + ".gge"
                            } else {
                                if (load_wasm === true) {
                                    //https://mem.neptunjs.com/njs/ggw/{neptunePlatform}{N64Acurate}.gge
                                    load_proteus = "https://impragma.github.io/NeptunJS/cores/" + neptunPlatform + N64Acurate + ".gge"
                                }
                            };
                            var _script = document.createElement("script");
                            _script.setAttribute("data-name", llms + "data_njs2");
                            _script.src = "https://impragma.github.io/NeptunJS/cores/dataload.gge";
                            document.body.appendChild(_script);
                            _script.onload = function() {
                                var _0x13E1B = setTimeout(function() {
                                    var _0x13E1B = document.createElement("script");
                                    _0x13E1B.setAttribute("data-name", llms + "emu_njs2");
                                    _0x13E1B.src = load_proteus;
                                    document.body.appendChild(_0x13E1B)
                                }, 200)
                            }
                        }(function() {
                            if (ChangeDisc > 0) {
                                if (ChangeDisc == 2) {
                                    gameUrl = cd2
                                };
                                if (ChangeDisc == 3) {
                                    gameUrl = cd3
                                };
                                if (ChangeDisc == 4) {
                                    gameUrl = cd4
                                };
                                if (ChangeDisc == 5) {
                                    gameUrl = cd5
                                };
                                if (ChangeDisc == 6) {
                                    gameUrl = cd6
                                };
                                if (ChangeDisc == 7) {
                                    gameUrl = cd7
                                };
                                if (ChangeDisc == 8) {
                                    gameUrl = cd8
                                };
                                Neptq("." + NCSS + "controll-info").css("display", "block");
                                Neptq("." + NCSS + "loader_emu").css("display", "block");
                                Neptq("#" + NCSS + NCSS2 + NCSS3 + "").css("display", "none");
                                Neptq("." + NCSS + "loader_emu").html("Load " + getZipName + " CD " + ChangeDisc + " ....");
                                MCDload = 1;
                                Neptq(".vast-input").css("color", "#333");
                                request.onupgradeneeded = function() {
                                    var _0x13E1B = request.result
                                };
                                request.onsuccess = function(_0x13E47) {
                                    var _0x13E1B = this.result;
                                    var _0x13ECB = _0x13E1B.transaction(["FILE_DATA"], "readwrite");
                                    var _0x13E73 = _0x13ECB.objectStore("FILE_DATA");
                                    console.log(NameDisc);
                                    var _0x13E9F = _0x13E73.get("/webdata/state/" + NameDisc + ".state");
                                    _0x13E9F.onerror = function(_0x13E1B) {
                                        localStorage.setItem("NJScd", JSON.stringify(0));
                                        alert("ERROR")
                                    };
                                    _0x13E9F.onsuccess = function(_0x13E1B) {
                                        Neptq("." + NCSS + "loader_emu").html("Load Save is fall");
                                        if (this.result === undefined) {
                                            Neptq("#" + NCSS + "popupSwap3").css({
                                                "visibility": "visible",
                                                "opacity": "1",
                                                "zIndex": "5"
                                            });
                                            localStorage.setItem("NJScd", JSON.stringify(0))
                                        } else {
                                            if (window.vqn == undefined || ltm === false || rbtl === false) {
                                                player.play()
                                            };
                                            _0x1415F()
                                        }
                                    }
                                };
                                Neptq("#" + NCSS + "saveuploadSwap, #file").on("change", function _0x13E1B(_0x13E1B) {
                                    var _0x13E73 = _0x13E1B.target.files;
                                    for (var _0x13E9F = 0; _0x13E9F < _0x13E73.length; _0x13E9F++) {
                                        filereader = new FileReader();
                                        filereader.file_name = _0x13E73[_0x13E9F].name;
                                        filereader.readAsArrayBuffer(_0x13E73[_0x13E9F]);
                                        filereader.onload = function() {
                                            _0x13E47(this.result, "/" + this.file_name)
                                        }
                                    }
                                });

                                function _0x13E47(_0x13E47, _0x13E9F, _0x13E73) {
                                    var _0x13E1B = {
                                        timestamp: new Date(),
                                        mode: 33279,
                                        contents: new Uint8Array(_0x13E47)
                                    };
                                    var _0x13ECB = indexedDB.open("/webdata/state");
                                    _0x13ECB.onsuccess = function(_0x13E73) {
                                        var _0x13E47 = this.result;
                                        var _0x13EF7 = _0x13E47.transaction(["FILE_DATA"], "readwrite");
                                        var _0x13E9F = _0x13EF7.objectStore("FILE_DATA");
                                        var _0x13ECB = _0x13EF7.objectStore("FILE_DATA").put(_0x13E1B, "/webdata/state/" + NameDisc + ".state");
                                        Neptq("#" + NCSS + "popupSwap3").css({
                                            "visibility": "hidden",
                                            "opacity": "0",
                                            "zIndex": "0"
                                        });
                                        if (window.vqn == undefined || ltm === false || rbtl === false) {
                                            player.play()
                                        };
                                        _0x1415F()
                                    }
                                }
                            }
                        })();
                        Neptq("#" + NCSS + NCSS2 + NCSS3 + "").click(function(_0x13E1B) {
                            if (MultiCD == true) {
                                Neptq("#" + NCSS + "popupCDmenu").css({
                                    "visibility": "visible",
                                    "opacity": "1",
                                    "zIndex": "5"
                                })
                            } else {
                                if (window.vqn == undefined || ltm === false || rbtl === false) {
                                    player.play()
                                };
                                Neptq(".vast-input").css("color", "#333");
                                _0x1415F()
                            }
                        });
                        Neptq("." + NCSS + "NJSCD").click(function(_0x13E1B) {
                            getDataCdUrl = Neptq(this).attr("data-cd");
                            popupdata = Neptq("#" + NCSS + "popupCDmenu").attr("data-popup");
                            if (getDataCdUrl == 2) {
                                gameUrl = cd2
                            };
                            if (getDataCdUrl == 3) {
                                gameUrl = cd3
                            };
                            if (getDataCdUrl == 4) {
                                gameUrl = cd4
                            };
                            if (getDataCdUrl == 5) {
                                gameUrl = cd5
                            };
                            if (getDataCdUrl == 6) {
                                gameUrl = cd6
                            };
                            if (getDataCdUrl == 7) {
                                gameUrl = cd7
                            };
                            if (getDataCdUrl == 8) {
                                gameUrl = cd8
                            };
                            Neptq("#" + NCSS + "popupCDmenu").css({
                                "visibility": "hidden",
                                "opacity": "0",
                                "zIndex": "0"
                            });
                            if (popupdata == 1) {
                                Neptq(this).css("display", "none");
                                if (window.vqn == undefined || ltm === false || rbtl === false) {
                                    player.play()
                                };
                                Neptq(".vast-input").css("color", "#333");
                                _0x1415F();
                                popupdata = 0;
                                Neptq("#" + NCSS + "popupCDmenu").attr("data-popup", "0");
                                MCDload = 1
                            }
                        });

                        function _0x140DB() {
                            return Neptune.ccall("uuyteree7874", "x7ooiujgfgda"[1])
                        }

                        function _0x1423B() {
                            Neptq("#" + NCSS + "display").focus()
                        }

                        function _0x13F4F() {
                            if (NeptunP === "n64" || NeptunP === "nes" || NeptunP === "snes" || NeptunP === "wswan" || NeptunP === "vboy" || NeptunP === "segaCD" || NeptunP === "tg16CD" || NeptunP === "sega" || NeptunP === "gboy" || NeptunP === "gba" || NeptunP === "tg16" || NeptunP === "lynx" || NeptunP === "atari_jaguar" || NeptunP === "sega32x" || NeptunP === "msx" || NeptunP === "zx" || NeptunP === "atari2600" || NeptunP === "atari7800" || NeptunP === "cps1" || NeptunP === "cps2" || NeptunP === "neogeo" || NeptunP === "ngp") {
                                _0x140DB();
                                _0x140DB()
                            }
                        }
                        Neptq("#" + NCSS + "shaders").click(function() {
                            Neptq("#" + NCSS + "smenu").css("display", "block");
                            Neptq("#" + NCSS + "menuNjs").css("display", "none")
                        });
                        Neptq("#" + NCSS + "ar").click(function() {
                            Neptq("#" + NCSS + "armenu").css("display", "block");
                            Neptq("#" + NCSS + "emulmenu").css("display", "none");
                            Neptq("#" + NCSS + "colormenu").css("display", "none");
                            Neptq("#" + NCSS + "menuNjs").css("display", "none")
                        });
                        Neptq("#" + NCSS + "colorM").click(function() {
                            Neptq("#" + NCSS + "emulmenu").css("display", "none");
                            Neptq("#" + NCSS + "armenu").css("display", "none");
                            Neptq("#" + NCSS + "colormenu").css("display", "block");
                            Neptq("#" + NCSS + "menuNjs").css("display", "none")
                        });
                        Neptq("." + NCSS + "back").click(function() {
                            Neptq("#" + NCSS + "emulmenu").css("display", "none");
                            Neptq("#" + NCSS + "smenu").css("display", "none");
                            Neptq("#" + NCSS + "armenu").css("display", "none");
                            Neptq("#" + NCSS + "colormenu").css("display", "none");
                            Neptq("#" + NCSS + "menuNjs").css("display", "block")
                        });
                        Neptq("#" + NCSS + "nepsettings").click(function() {
                            Neptq("#" + NCSS + "emulmenu").css("display", "block");
                            Neptq("#" + NCSS + "smenu").css("display", "none");
                            Neptq("#" + NCSS + "armenu").css("display", "none");
                            Neptq("#" + NCSS + "colormenu").css("display", "none");
                            Neptq("#" + NCSS + "menuNjs").css("display", "none")
                        });
                        Neptq("." + NCSS + "checkbox").on("click", function() {
                            if (Neptq("#NJSar1").is(":checked")) {
                                Neptq("#" + NCSS + "lableAr").html(arOP1);
                                widthToHeight = 4 / 3;
                                _0x13FD3()
                            };
                            if (Neptq("#NJSar2").is(":checked")) {
                                Neptq("#" + NCSS + "lableAr").html(arOP2);
                                widthToHeight = 8 / 7;
                                _0x13FD3()
                            };
                            if (Neptq("#NJSar3").is(":checked")) {
                                Neptq("#" + NCSS + "lableAr").html(arOP3);
                                widthToHeight = 16 / 9;
                                _0x13FD3()
                            };
                            if (Neptq("#NJSshaders1").is(":checked")) {
                                infoInner = shadersOP1;
                                if (NeptunP === "nes" || NeptunP === "atari2600" || NeptunP === "atari7800" || NeptunP === "lynx") {
                                    Neptq("#" + NCSS + "warningInfo").addClass("" + NCSS + "warningShow")
                                } else {
                                    Neptune.ccall("utyrrggdssc7", "x7ooiujgfgda"[1])
                                }
                            };
                            if (Neptq("#NJSshaders2").is(":checked")) {
                                infoInner = shadersOP2;
                                if (NeptunP === "nes" || NeptunP === "atari2600" || NeptunP === "atari7800" || NeptunP === "lynx") {
                                    Neptq("#" + NCSS + "warningInfo").addClass("" + NCSS + "warningShow")
                                } else {
                                    Neptune.ccall("iuhmhgdxs789", "x7ooiujgfgda"[1])
                                }
                            };
                            if (Neptq("#NJSshaders3").is(":checked")) {
                                infoInner = shadersOP3;
                                if (NeptunP === "nes" || NeptunP === "atari2600" || NeptunP === "atari7800" || NeptunP === "lynx") {
                                    Neptq("#" + NCSS + "warningInfo").addClass("" + NCSS + "warningShow")
                                } else {
                                    Neptune.ccall("trwqsx178953", "x7ooiujgfgda"[1])
                                }
                            };
                            if (Neptq("#NJSshaders4").is(":checked")) {
                                infoInner = shadersOP4;
                                if (NeptunP === "nes" || NeptunP === "atari2600" || NeptunP === "atari7800" || NeptunP === "lynx") {
                                    Neptq("#" + NCSS + "warningInfo").addClass("" + NCSS + "warningShow")
                                } else {
                                    Neptune.ccall("ioiuyrfv1789", "x7ooiujgfgda"[1])
                                }
                            };
                            if (Neptq("#NJSshaders5").is(":checked")) {
                                infoInner = shadersOP5;
                                if (NeptunP === "nes" || NeptunP === "atari2600" || NeptunP === "atari7800" || NeptunP === "lynx") {
                                    Neptq("#" + NCSS + "warningInfo").addClass("" + NCSS + "warningShow")
                                } else {
                                    Neptune.ccall("x79oiugncs11", "x7ooiujgfgda"[1])
                                };;
                            };
                            if (Neptq("#NJSshaders6").is(":checked")) {
                                infoInner = shadersOP6;
                                if (NeptunP === "nes" || NeptunP === "atari2600" || NeptunP === "atari7800" || NeptunP === "lynx") {
                                    Neptq("#" + NCSS + "warningInfo").addClass("" + NCSS + "warningShow")
                                } else {
                                    Neptune.ccall("iomnvffrt417", "x7ooiujgfgda"[1])
                                }
                            };
                            if (Neptq("#NJSshaders7").is(":checked")) {
                                infoInner = shadersOP7;
                                if (NeptunP === "sega" && load_asm === true || NeptunP === "segaCD" && load_asm || NeptunP === "segaMS" && load_asm === true || NeptunP === "segaGG" && load_asm === true || NeptunP === "sega32x") {
                                    RA.context.close();
                                    Neptune.ccall("ioiyttr87954", "x7ooiujgfgda"[1])
                                } else {
                                    Neptune.ccall("ytrdvbuj4578", "x7ooiujgfgda"[1])
                                }
                            };
                            Neptq("#" + NCSS + "lableShader").html(infoInner)
                        });
                        if (Neptq("" + NepPlayer + "").length) {
                            canvasGame = document.getElementById(NCSS + "display");
                            if (Neptq("#checkbox_smooth").is(":checked")) {
                                fblur = 0.9;
                                fsaturate = slider1.value;
                                fcontrast = slider2.value;
                                fbrightness = slider3.value;
                                canvasGame.style["-webkit-filter"] = "blur(" + fblur + "px) saturate(" + fsaturate + "%) contrast(" + fcontrast + "%) brightness(" + fbrightness + "%)";
                                canvasGame.style["-moz-filter"] = "blur(" + fblur + "px) saturate(" + fsaturate + "%) contrast(" + fcontrast + "%) brightness(" + fbrightness + "%)";
                                canvasGame.style["-o-filter"] = "blur(" + fblur + "px) saturate(" + fsaturate + "%) contrast(" + fcontrast + "%) brightness(" + fbrightness + "%)";
                                canvasGame.style.filter = "blur(" + fblur + "px) saturate(" + fsaturate + "%) contrast(" + fcontrast + "%) brightness(" + fbrightness + "%)"
                            } else {
                                fblur = 0;
                                canvasGame.style["-webkit-filter"] = "blur(" + fblur + "px) saturate(" + fsaturate + "%) contrast(" + fcontrast + "%) brightness(" + fbrightness + "%)";
                                canvasGame.style["-moz-filter"] = "blur(" + fblur + "px) saturate(" + fsaturate + "%) contrast(" + fcontrast + "%) brightness(" + fbrightness + "%)";
                                canvasGame.style["-o-filter"] = "blur(" + fblur + "px) saturate(" + fsaturate + "%) contrast(" + fcontrast + "%) brightness(" + fbrightness + "%)";
                                canvasGame.style.filter = "blur(" + fblur + "px) saturate(" + fsaturate + "%) contrast(" + fcontrast + "%) brightness(" + fbrightness + "%)"
                            }
                        };

                        function _0x13E47() {
                            if (Neptq("#NJSar1").is(":checked")) {
                                Neptq("#" + NCSS + "lableAr").html(arOP1);
                                widthToHeight = 4 / 3
                            } else {
                                if (Neptq("#NJSar2").is(":checked")) {
                                    Neptq("#" + NCSS + "lableAr").html(arOP2);
                                    widthToHeight = 8 / 7
                                } else {
                                    if (Neptq("#NJSar3").is(":checked")) {
                                        Neptq("#" + NCSS + "lableAr").html(arOP3);
                                        widthToHeight = 16 / 9
                                    } else {
                                        if (NepEmuAR === "4:3") {
                                            Neptq("#NJSar1").prop("checked", true);
                                            Neptq("#" + NCSS + "lableAr").html(arOP1);
                                            widthToHeight = 4 / 3
                                        } else {
                                            if (NepEmuAR === "8:7") {
                                                Neptq("#NJSar2").prop("checked", true);
                                                Neptq("#" + NCSS + "lableAr").html(arOP2);
                                                widthToHeight = 8 / 7
                                            } else {
                                                if (NepEmuAR === "16:9") {
                                                    Neptq("#NJSar3").prop("checked", true);
                                                    Neptq("#" + NCSS + "lableAr").html(arOP3);
                                                    widthToHeight = 16 / 9
                                                } else {
                                                    Neptq("#NJSar1").prop("checked", true);
                                                    Neptq("#" + NCSS + "lableAr").html(arOP1);
                                                    widthToHeight = 4 / 3
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            var _0x13E1B = Neptq("#" + NCSS + "display");
                            var _0x13E47 = Neptq("#" + NCSS + "Neptun");
                            var _0x13E9F = _0x13E47.width();
                            var _0x13E73 = _0x13E47.height();
                            var _0x13ECB = _0x13E9F / _0x13E73;
                            _0x13E9F = _0x13E73 * widthToHeight;
                            _0x13E1B[0].style.width = _0x13E9F + "px"
                        }
                        Neptq("#" + NCSS + "VmenuNjs").click(function() {
                            if (Neptq(this).attr("data-click-state") == 0) {
                                Neptq(this).attr("data-click-state", 1);
                                Neptq("#" + NCSS + "videoSettings").css("display", "block");
                                Neptq("#" + NCSS + "videoSettings").focus()
                            } else {
                                Neptq(this).attr("data-click-state", 0);
                                Neptq("#" + NCSS + "videoSettings").css("display", "none")
                            }
                        });
                        Neptq("#" + NCSS + "display , #" + NCSS + "emul-display").click(function() {
                            Neptq("#" + NCSS + "videoSettings").css("display", "none");
                            Neptq("#" + NCSS + "VmenuNjs").attr("data-click-state", 0)
                        });

                        function _0x13F23() {
                            Neptune.ccall("yytrd9852hhf", "x7ooiujgfgda"[1]);
                            if (NeptunP === "sega" && load_asm === true || NeptunP === "segaCD" && load_asm || NeptunP === "segaMS" && load_asm === true || NeptunP === "segaGG" && load_asm === true || NeptunP === "sega32x") {
                                RA.context.close();
                                Neptune.ccall("ioiyttr87954", "x7ooiujgfgda"[1])
                            } else {
                                if (Neptq(" #NJSshaders1").is(":checked")) {
                                    if (NeptunP === "nes" || NeptunP === "lynx" || NeptunP === "atari2600" || NeptunP === "atari7800") {} else {
                                        Neptune.ccall("ytrdvbuj4578", "x7ooiujgfgda"[1]);
                                        Neptune.ccall("utyrrggdssc7", "x7ooiujgfgda"[1])
                                    }
                                } else {
                                    if (Neptq("#NJSshaders6").is(":checked")) {
                                        if (NeptunP === "nes" || NeptunP === "lynx" || NeptunP === "atari2600" || NeptunP === "atari7800") {} else {
                                            Neptune.ccall("ytrdvbuj4578", "x7ooiujgfgda"[1]);
                                            Neptune.ccall("iomnvffrt417", "x7ooiujgfgda"[1])
                                        }
                                    } else {
                                        if (Neptq(" #NJSshaders2 , #NJSshaders3 , #NJSshaders4 , #NJSshaders5 ").is(":checked")) {} else {
                                            Neptune.ccall("ytrdvbuj4578", "x7ooiujgfgda"[1])
                                        }
                                    }
                                }
                            }
                        }

                        function _0x141E3() {
                            popset = 1;
                            Neptq("#" + NCSS + "Neptun").attr("style", "width: 100% !important");
                            var _0x13E1B = function(_0x13E1B) {
                                switch (_0x13E1B.keyCode) {
                                    case 37:
                                        ;
                                    case 39:
                                        ;
                                    case 38:
                                        ;
                                    case 40:
                                        ;
                                    case 32:
                                        _0x13E1B.preventDefault();
                                        break;
                                    default:
                                        break
                                }
                            };
                            Neptq(document).mouseup(function(_0x13E73) {
                                var _0x13E47 = Neptq("#" + NCSS + "Neptun");
                                var _0x13E9F = Neptq("." + NCSS + "nep_swap_disc").attr("data-swap");
                                if (!_0x13E47.is(_0x13E73.target) && _0x13E47.has(_0x13E73.target).length === 0) {
                                    if (MultiCD == true) {
                                        if (_0x13E9F == 1 && ChangeDisc > 0) {} else {
                                            if (Neptq("." + NCSS + "emul-pause").css("display") === "block") {} else {
                                                Neptune.ccall("yytrd9852hhf", "x7ooiujgfgda"[1])
                                            }
                                        }
                                    } else {
                                        if (Neptq("." + NCSS + "emul-pause").css("display") === "block") {} else {
                                            Neptune.ccall("yytrd9852hhf", "x7ooiujgfgda"[1])
                                        }
                                    };
                                    Neptune.ccall("trgfsdsse879", "x7ooiujgfgda"[1]);
                                    window.removeEventListener("keydown", _0x13E1B, false)
                                }
                            });
                            Neptq("." + NCSS + "emul-pause").click(function() {
                                Neptune.ccall("terwq7895412", "x7ooiujgfgda"[1]);
                                Neptune.ccall("trgfsdsse879", "x7ooiujgfgda"[1]);
                                document.getElementById(NCSS + "display").focus();
                                window.addEventListener("keydown", _0x13E1B, false);
                                RA.context.close();
                                Neptune.ccall("axiop55x2218", "x7ooiujgfgda"[1])
                            });

                            function _0x13EF7() {
                                Neptq("." + NCSS + "nep_save_game").addClass("" + NCSS + "active_info");
                                var _0x13E1B = setTimeout(function() {
                                    Neptq("." + NCSS + "nep_save_game").removeClass("" + NCSS + "active_info")
                                }, 2000);
                                Neptune.ccall("trgfsdsse879", "x7ooiujgfgda"[1]);
                                return Neptune.ccall("x7ooiujgfgda", "x7ooiujgfgda"[1])
                            }

                            function _0x13E47() {
                                Neptq("." + NCSS + "nep_load_game").addClass("" + NCSS + "active_info");
                                var _0x13E1B = setTimeout(function() {
                                    Neptq("." + NCSS + "nep_load_game").removeClass("" + NCSS + "active_info")
                                }, 2000);
                                return Neptune.ccall("reyuyuyih897", "x7ooiujgfgda"[1])
                            }

                            function _0x13ECB() {
                                return Neptune.ccall("trgfsdsse879", "x7ooiujgfgda"[1])
                            }
                            Neptq("." + NCSS + "NEPicon-restart").click(function _0x13E9F() {
                                Neptq("." + NCSS + "nep_reset_game").addClass("" + NCSS + "active_info");
                                var _0x13E1B = setTimeout(function() {
                                    Neptq("." + NCSS + "nep_reset_game").removeClass("" + NCSS + "active_info")
                                }, 2000);
                                return Neptune.ccall("x74215uytrfs", "x7ooiujgfgda"[1])
                            });

                            function _0x13E73() {
                                console.log("this function");
                                if (Neptq("." + NCSS + "emul-pause").css("display") === "block") {} else {}
                            }
                            if (NeptunP === "sega32x") {
                                Neptune.FS_createFolder("/", "home", true, true);
                                Neptune.FS_createFolder("/home", "emscripten", true, true)
                            } else {
                                FS.createFolder("/home/web_user", ".config", true, true);
                                FS.createFolder("/home/web_user/.config", "retroarch", true, true)
                            };
                            FS.createFolder("/", "webdata", true, true);
                            FS.createFolder("/webdata", "save", true, true);
                            FS.createFolder("/webdata", "state", true, true);
                            FS.mount(IDBFS, {
                                root: "/"
                            }, "/webdata/state/");
                            if (NeptunP === "psx" && rometipe === "zip" || NeptunP === "segaCD" || NeptunP === "tg16CD" || NeptunP === "3do" || NeptunP === "sega_saturn") {
                                _0x14083()
                            } else {
                                if (NeptunP === "neogeo") {
                                    _0x140AF()
                                } else {
                                    _0x13FFF()
                                }
                            };
                            if (Neptq("#" + NCSS + "Neptun").length) {
                                if (NJSerrorEvent === true) {}
                            }
                        }

                        function _0x13F7B(_0x13E1B, _0x13E47) {
                            if (_0x13E1B == 0) {
                                return "0 Bytes"
                            };
                            var _0x13ECB = 1024,
                                _0x13E73 = _0x13E47 || 2,
                                _0x13EF7 = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                                _0x13E9F = Math.floor(Math.log(_0x13E1B) / Math.log(_0x13ECB));
                            return parseFloat((_0x13E1B / Math.pow(_0x13ECB, _0x13E9F)).toFixed(_0x13E73)) + " " + _0x13EF7[_0x13E9F]
                        }
                        var _0x1418B = Neptq("#" + NCSS + "progressstate");
                        if (Neptq("#JPLang").is(":checked")) {
                            var _0x141B7 = gameUrlJP
                        } else {
                            if (Neptq("#RUSLang").is(":checked")) {
                                var _0x141B7 = gameUrlRus
                            } else {
                                var _0x141B7 = gameUrl
                            }
                        };

                        function _0x14083(_0x13E1B) {
                            if (window.BrowserFS == undefined) {
                                HtmlError();
                                return false
                            } else {
                                var _0x13E47 = new XMLHttpRequest();
                                _0x13E47.open("GET", gameUrl, true);
                                _0x13E47.responseType = "arraybuffer";
                                Neptq("#" + NCSS + "progressbar").css("display", "block");
                                _0x13E47.onreadystatechange = function() {
                                    if (_0x13E47.status == 200) {
                                        _0x13E47.addEventListener("progress", function(_0x13E73) {
                                            if (_0x13E73.lengthComputable) {
                                                var _0x13E9F = _0x13E1B ? _0x13E1B : _0x13E73.total;
                                                var _0x13F23 = _0x13F7B(_0x13E9F);
                                                var _0x13ECB = _0x13F7B(_0x13E73.loaded % _0x13E9F);
                                                Neptq("." + NCSS + "loader_emu").html("" + _0x13F23 + "/" + _0x13ECB + "");
                                                _0x13E47.onload = function() {
                                                    var _0x13E73 = _0x13E47.response;
                                                    var _0x13E1B = BrowserFS.BFSRequire("buffer").Buffer;
                                                    var _0x13ECB = new _0x13E1B(this.response);
                                                    var _0x13E9F;
                                                    FS.createFolder("/", "game", false, false);
                                                    BrowserFS.FileSystem.ZipFS.computeIndex(_0x13ECB, function(_0x13FFF, _0x13FD3) {
                                                        var _0x13F7B = new BrowserFS.FileSystem.ZipFS(_0x13FFF);
                                                        BrowserFS.initialize(_0x13F7B);
                                                        var _0x13E73 = _0x13FFF.directoryEntries;
                                                        for (var _0x13F4F in _0x13E73) {
                                                            _0x13E9F = _0x13E73[_0x13F4F]["_filename"];
                                                            if (NeptunP === "3do") {
                                                                var _0x13FA7 = _0x13E9F.match(/.iso/i)
                                                            } else {
                                                                var _0x13FA7 = _0x13E9F.match(/.cue/i)
                                                            };
                                                            if (_0x13FA7 === null) {} else {
                                                                var _0x13EF7 = _0x13FA7.input.split(".");
                                                                var _0x13ECB = "." + _0x13EF7[_0x13EF7.length - 1] + "";
                                                                var _0x13F23 = _0x13FA7.input.indexOf(_0x13ECB);
                                                                RomTitleCD = _0x13FA7.input.substring(0, _0x13F23 != -1 ? _0x13F23 : _0x13FA7.input.length);
                                                                bootRomeCD = RomTitleCD + _0x13ECB;
                                                                GetsaveName = RomTitleCD;
                                                                var _0x13E47 = RomTitleCD.split("/");
                                                                game = _0x13E47[_0x13E47.length - 1]
                                                            }
                                                        };
                                                        var _0x13E1B = new BrowserFS.EmscriptenFS();
                                                        FS.mount(_0x13E1B, {
                                                            root: "/"
                                                        }, "/game")
                                                    });
                                                    Neptq("." + NCSS + "loader_emu").html(EndEmuleNote);
                                                    _0x13FA7(_0x13E73, bootRome, NeptunP, aspect_ratio)
                                                };
                                                var _0x13EF7 = Math.ceil(_0x13E73.loaded / _0x13E73.total * 100);
                                                Neptq("#" + NCSS + "progressstate").css("width", "" + _0x13EF7 + "%")
                                            } else {
                                                _0x13E47.onload = function() {
                                                    var _0x13E47 = this.response;
                                                    var _0x13E73 = new Uint8Array(_0x13E47);
                                                    var _0x13E1B = BrowserFS.BFSRequire("buffer").Buffer;
                                                    var _0x13E9F = new _0x13E1B(_0x13E47);
                                                    FS.createFolder("/", "game", false, false);
                                                    BrowserFS.FileSystem.ZipFS.computeIndex(_0x13E9F, function(_0x13FD3) {
                                                        var _0x13F4F = new BrowserFS.FileSystem.ZipFS(_0x13FD3);
                                                        BrowserFS.initialize(_0x13F4F);
                                                        var _0x13E73 = _0x13FD3.directoryEntries;
                                                        for (var _0x13F23 in _0x13E73) {
                                                            filenames = _0x13E73[_0x13F23]["_filename"];
                                                            if (NeptunP === "3do") {
                                                                var _0x13FA7 = filenames.match(/.iso/i)
                                                            } else {
                                                                var _0x13FA7 = filenames.match(/.cue/i)
                                                            };
                                                            if (_0x13FA7 === null) {} else {
                                                                var _0x13ECB = _0x13FA7.input.split(".");
                                                                var _0x13E9F = "." + _0x13ECB[_0x13ECB.length - 1] + "";
                                                                var _0x13EF7 = _0x13FA7.input.indexOf(_0x13E9F);
                                                                var _0x13F7B = _0x13FA7.input.substring(0, _0x13EF7 != -1 ? _0x13EF7 : _0x13FA7.input.length);
                                                                bootRomeCD = _0x13F7B + _0x13E9F;
                                                                var _0x13E47 = _0x13F7B.split("/");
                                                                game = _0x13E47[_0x13E47.length - 1]
                                                            }
                                                        };
                                                        FS.mount(new BrowserFS.EmscriptenFS(), {
                                                            root: "/"
                                                        }, "/game")
                                                    });
                                                    Neptq("." + NCSS + "loader_emu").html(EndEmuleNote);
                                                    _0x13FA7(_0x13E47, bootRome, NeptunP, aspect_ratio)
                                                }
                                            }
                                        })
                                    } else {
                                        Neptq("." + NCSS + "game-load").html("Download error")
                                    }
                                };
                                _0x13E47.send(null)
                            }
                        }

                        function _0x140AF(_0x13E47) {
                            var _0x13E73 = new XMLHttpRequest();
                            _0x13E73.open("GET", neogeoBios, true);
                            _0x13E73.responseType = "arraybuffer";
                            Neptq("#" + NCSS + "progressbar").css("display", "block");
                            _0x13E73.onreadystatechange = function() {
                                if (_0x13E73.status == 200) {
                                    _0x13E73.addEventListener("progress", function(_0x13E9F) {
                                        if (_0x13E9F.lengthComputable) {
                                            var _0x13ECB = _0x13E47 ? _0x13E47 : _0x13E9F.total;
                                            var _0x13F4F = _0x13F7B(_0x13ECB);
                                            var _0x13EF7 = _0x13F7B(_0x13E9F.loaded % _0x13ECB);
                                            Neptq("." + NCSS + "loader_emu").html("" + _0x13F4F + "/" + _0x13EF7 + "");
                                            _0x13E73.onload = function() {
                                                FS.createDataFile("/", "neogeo.zip", new Uint8Array(this.response), true, true);
                                                _0x13E1B()
                                            };
                                            var _0x13F23 = Math.ceil(_0x13E9F.loaded / _0x13E9F.total * 100);
                                            Neptq("#" + NCSS + "progressstate").css("width", "" + _0x13F23 + "%")
                                        } else {
                                            _0x13E73.onload = function() {
                                                FS.createDataFile("/", "neogeo.zip", new Uint8Array(this.response), true, true);
                                                _0x13E1B()
                                            }
                                        }
                                    })
                                } else {
                                    Neptq("." + NCSS + "game-load").html("Download bios file error")
                                }
                            };

                            function _0x13E1B(_0x13E1B) {
                                _0x13E73.open("GET", _0x141B7, true);
                                _0x13E73.responseType = "arraybuffer";
                                Neptq("#" + NCSS + "progressbar").css("display", "block");
                                _0x13E73.onreadystatechange = function() {
                                    if (_0x13E73.status == 200) {
                                        _0x13E73.addEventListener("progress", function(_0x13E47) {
                                            if (_0x13E47.lengthComputable) {
                                                var _0x13E9F = _0x13E1B ? _0x13E1B : _0x13E47.total;
                                                var _0x13F23 = _0x13F7B(_0x13E9F);
                                                var _0x13ECB = _0x13F7B(_0x13E47.loaded % _0x13E9F);
                                                Neptq("." + NCSS + "loader_emu").html("" + _0x13F23 + "/" + _0x13ECB + "");
                                                _0x13E73.onload = function() {
                                                    var _0x13E1B = this.response;
                                                    Neptq("." + NCSS + "loader_emu").html(EndEmuleNote);
                                                    _0x13FA7(_0x13E1B, bootRome, NeptunP, EmuN64air, fba_unibios, fba_cpu)
                                                };
                                                var _0x13EF7 = Math.ceil(_0x13E47.loaded / _0x13E47.total * 100);
                                                Neptq("#" + NCSS + "progressstate").css("width", "" + _0x13EF7 + "%")
                                            } else {
                                                _0x13E73.onload = function() {
                                                    var _0x13E1B = this.response;
                                                    Neptq("." + NCSS + "loader_emu").html(EndEmuleNote);
                                                    _0x13FA7(_0x13E1B, bootRome, NeptunP, EmuN64air, fba_unibios, fba_cpu)
                                                }
                                            }
                                        })
                                    } else {
                                        Neptq("." + NCSS + "game-load").html("Download error")
                                    }
                                };
                                _0x13E73.send(null)
                            }
                            _0x13E73.send(null)
                        }

                        function _0x13FFF(_0x13E1B) {
                            var _request = new XMLHttpRequest();
                            _request.open("GET", _0x141B7, true);
                            _request.responseType = "arraybuffer";
                            Neptq("#" + NCSS + "progressbar").css("display", "block");
                            _request.onreadystatechange = function() {
                                if (_request.status == 200) {
                                    _request.addEventListener("progress", function(_0x13E73) {
                                        if (_0x13E73.lengthComputable) {
                                            var _0x13E9F = _0x13E1B ? _0x13E1B : _0x13E73.total;
                                            var _0x13F23 = _0x13F7B(_0x13E9F);
                                            var _0x13ECB = _0x13F7B(_0x13E73.loaded % _0x13E9F);
                                            Neptq("." + NCSS + "game-load").html("" + _0x13F23 + " / " + _0x13ECB + "");
                                            _request.onload = function() {
                                                var _0x13E1B = this.response;
                                                Neptq("." + NCSS + "loader_emu").html(EndEmuleNote);
                                                _0x13FA7(_0x13E1B, bootRome, NeptunP, EmuN64air, fba_unibios, fba_cpu);
                                                Neptq("." + NCSS + "loader_emu").html(EndEmuleNote)
                                            };
                                            var _0x13EF7 = Math.ceil(_0x13E73.loaded / _0x13E73.total * 100);
                                            Neptq("#" + NCSS + "progressstate").css("width", "" + _0x13EF7 + "%")
                                        } else {
                                            _request.onload = function() {
                                                Neptq("." + NCSS + "loader_emu").html(EndEmuleNote);
                                                _0x13FA7(this.response, bootRome, NeptunP, EmuN64air, fba_unibios, fba_cpu)
                                            }
                                        }
                                    })
                                } else {
                                    Neptq("." + NCSS + "game-load").html("Download error")
                                }
                            };
                            _request.send(null)
                        }

                        function _0x13FA7(_0x13E73, _0x13F23, _0x13F4F, _0x13E9F, _0x13EF7, _0x13ECB) {
                            if (_0x13F4F === "sega32x" || _0x13F4F === "sega32X") {
                                Neptune.FS_createFolder("/home/emscripten", "retroarch", true, true);
                                Neptune.FS_createFolder("/home/emscripten/retroarch", "userdata", true, true)
                            } else {
                                Neptune.FS_createFolder("/home/web_user", "retroarch", true, true);
                                Neptune.FS_createFolder("/home/web_user/retroarch", "userdata", true, true);
                                Neptune.FS_createFolder("/home/web_user/retroarch/userdata/", "retroarch", true, true)
                            };
                            var _0x13E1B = "input_exit_emulator = nul\nvideo_context_driver=emscripten\nvideo_driver = gl\ninput_driver = rwebinput\n";
                            var _0x13E47 = "";
                            if (xboxOne === true) {
                                _0x13E1B += "input_player1_select_btn = 7\ninput_player1_select_btn = 7\ninput_player1_start_btn = 8\ninput_player1_l2_axis = +4\n";
                                if (_0x13F4F === "n64") {
                                    _0x13E1B += "input_player1_l_btn = 7\ninput_player1_l3_btn = 7\ninput_player1_l2_btn = 9\ninput_player1_l2_axis = +4\naudio_latency = 512\n"
                                } else {
                                    _0x13E1B += "input_player1_r3_btn = 6\ninput_player1_l_btn = 9\ninput_player1_l2_btn = 5\ninput_player1_l3_btn = 7\naudio_latency = 512\n"
                                }
                            } else {
                                if (_0x13F4F === "3do" || _0x13F4F === "psx" || _0x13F4F === "atari_jaguar") {
                                    _0x13E1B += "audio_latency = 512\n"
                                } else {
                                    if (_0x13F4F === "nds" || _0x13F4F === "sega_saturn") {
                                        _0x13E1B += "audio_latency = 512\n";
                                        _0x13E1B += "audio_rate_control_delta = 0.010000\n";
                                        _0x13E1B += "audio_max_timing_skew = 0.100000\n"
                                    } else {
                                        if (_0x13F4F === "cps3" || _0x13F4F === "wswan") {
                                            _0x13E1B += "audio_latency = 512\n"
                                        } else {
                                            _0x13E1B += "audio_latency = 256\n"
                                        }
                                    }
                                }
                            };
                            _0x13E1B += "savestate_directory = /webdata/state\ninput_save_state = nul\ninput_load_state = nul\ninput_audio_mute = nul\n";
                            if (_0x13F4F === "tg16CD" || _0x13F4F === "psx" || _0x13F4F === "wswan") {
                                _0x13E1B += "video_shared_context = true\n"
                            };
                            _0x13E1B += "input_rewind = nul\ninput_movie_record_toggle = nul\nvideo_hard_sync_frames = 3\nvideo_hard_sync = true\n";
                            if (_0x13F4F === "nes" || _0x13F4F === "sega" && load_asm === true || _0x13F4F === "segaCD" && load_asm || _0x13F4F === "segaMS" && load_asm === true || _0x13F4F === "segaGG" && load_asm === true || _0x13F4F === "sega32x") {} else {
                                if (Neptq(" #NJSshaders2 , #NJSshaders3 , #NJSshaders4 , #NJSshaders5 ").is(":checked")) {} else {
                                    _0x13E1B += "video_filter = :/filters/video/Blargg_NTSC_SNES_Composite.filt\n"
                                }
                            };
                            if (Neptq("#NJSshaders1").is(":checked")) {
                                infoInner = shadersOP1;
                                if (_0x13F4F === "nes" || _0x13F4F === "lynx" || _0x13F4F === "atari2600" || _0x13F4F === "atari7800") {
                                    _0x13E1B += "video_filter = :/filters/video/Scale2x.filt\n"
                                } else {
                                    _0x13E1B += "video_filter = :/filters/video/Blargg_NTSC_SNES_Composite.filt\n"
                                }
                            } else {
                                if (Neptq("#NJSshaders2").is(":checked")) {
                                    infoInner = shadersOP2;
                                    _0x13E1B += "video_filter = :/filters/video/Blargg_NTSC_SNES_Composite.filt\n";
                                    _0x13E47 += "nestopia_blargg_ntsc_filter = composite\n"
                                } else {
                                    if (Neptq("#NJSshaders3").is(":checked")) {
                                        infoInner = shadersOP3;
                                        _0x13E1B += "video_filter = :/filters/video/Blargg_NTSC_SNES_S-Video.filt\n";
                                        _0x13E47 += "nestopia_blargg_ntsc_filter = svideo\n"
                                    } else {
                                        if (Neptq("#NJSshaders4").is(":checked")) {
                                            infoInner = shadersOP4;
                                            _0x13E1B += "video_filter = :/filters/video/Blargg_NTSC_SNES_monochrome.filt\n";
                                            _0x13E47 += "nestopia_blargg_ntsc_filter = monochrome\n"
                                        } else {
                                            if (Neptq("#NJSshaders5").is(":checked")) {
                                                infoInner = shadersOP5;
                                                _0x13E1B += "video_filter = :/filters/video/Blargg_NTSC_SNES_RF.filt\n";
                                                _0x13E47 += "nestopia_blargg_ntsc_filter = rgb\n"
                                            } else {
                                                if (Neptq("#NJSshaders6").is(":checked")) {
                                                    infoInner = shadersOP6;
                                                    if (_0x13F4F === "nes" || _0x13F4F === "lynx" || _0x13F4F === "atari2600" || _0x13F4F === "atari7800") {
                                                        _0x13E1B += "video_filter = :/filters/video/Phosphor2x.filt\n"
                                                    } else {
                                                        _0x13E1B += "video_filter = :/filters/video/Blargg_NTSC_SNES_Composite.filt\n"
                                                    }
                                                } else {
                                                    Neptq("#NJSshaders7").prop("checked", true);
                                                    infoInner = shadersOP7
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            Neptq("#" + NCSS + "lableShader").html(infoInner);
                            _0x13E1B += "video_vsync = true\n";
                            _0x13E1B += "video_context_driver = emscripten\n";
                            _0x13E1B += "video_smooth = false\n";
                            if (_0x13F4F === "neogeo" || _0x13F4F === "arcade" || _0x13F4F === "cps1" || _0x13F4F === "cps2" || _0x13F4F === "cps3" || _0x13F4F === "snes" || _0x13F4F === "gba") {
                                _0x13E1B += "aspect_ratio_index = 0\n"
                            } else {
                                _0x13E1B += "aspect_ratio_index = 21\n"
                            };
                            _0x13E1B += "input_reset = nul\ninput_joypad_driver = nul\nvideo_swap_interval = 1\ninput_frame_advance = nul\ninput_slowmotion = nul\ninput_pause_toggle = nul\ninput_menu_toggle = nul\ninput_toggle_fullscreen = nul\nfastforward_ratio = 1.000000\n";
                            if (Ndebag == "neptunjsdaltergg") {} else {
                                _0x13E1B += "video_font_enable = false\n"
                            };
                            _0x13E1B += "fps_show = false\nauto_screenshot_filename = false\ninput_screenshot = nul\nmenu_entry_hover_color = ffffffff\nmenu_title_color = ffffffff\ninput_toggle_fast_forward = nul\nsavefile_directory = /webdata/save\nsystem_directory = /content\nrgui_config_directory = /dev\ninput_remapping_directory = /data\ncheat_database_path = /data\nscreenshot_directory =/\n";
                            _0x13E47 += "pcsx_rearmed_duping_enable = enabled\npcsx_rearmed_spu_reverb = disabled\npcsx_rearmed_spu_interpolation = simple\n";
                            _0x13E1B += "input_player1_menu_toggle_btn = nul\ninput_autodetect_enable = false\nvideo_scale_integer = false\ninput_max_users = 4\naudio_driver = rwebaudio\n";
                            if (_0x13F4F === "psx") {
                                _0x13E1B += "input_disk_eject_toggle = end\n"
                            };
                            if (_0x13F4F === "n64" || _0x13F4F === "nes" || _0x13F4F === "wswan" || _0x13F4F === "vboy" || _0x13F4F === "segaMS" || _0x13F4F === "segaGG" || _0x13F4F === "gboy" || _0x13F4F === "gba" || _0x13F4F === "tg16" || _0x13F4F === "tg16CD" || _0x13F4F === "lynx") {
                                _0x13E1B += "input_player1_b = capslock\ninput_player1_y = s\ninput_player1_a = tab\ninput_player1_x = x\ninput_player2_b = m\ninput_player2_y = p\ninput_player2_a = j\ninput_player2_x = pageup\ninput_player3_b = keypad4\ninput_player3_y = minus\ninput_player3_a = keypad3\ninput_player3_x = equals\ninput_player4_b = num1\ninput_player4_y = num8\ninput_player4_a = num0\ninput_player4_x = num9\n"
                            } else {
                                _0x13E1B += "input_player1_b = tab\ninput_player1_y = capslock\ninput_player1_a = s\ninput_player1_x = x\ninput_player2_b = j\ninput_player2_y = m\ninput_player2_a = p\ninput_player2_x = pageup\ninput_player3_b = keypad3\ninput_player3_y = keypad4\ninput_player3_a = minus\ninput_player3_x = equals\ninput_player4_b = num0\ninput_player4_y = num1\ninput_player4_a = num8\ninput_player4_x = num9\n"
                            };
                            _0x13E1B += "input_player1_select = shift\ninput_player1_start = ctrl\ninput_player1_up = q\ninput_player1_down = a\ninput_player1_left = z\ninput_player1_right = w\ninput_player1_l = alt\ninput_player1_r = e\ninput_player1_l2 = d\ninput_player1_r2 = c\ninput_player1_l3 = r\ninput_player1_r3 = f\ninput_player1_l_x_plus = v\ninput_player1_l_x_minus = t\ninput_player1_l_y_plus = b\ninput_player1_l_y_minus = g\ninput_player1_r_x_plus = y\ninput_player1_r_x_minus = h\ninput_player1_r_y_plus = u\ninput_player1_r_y_minus = n\ninput_player2_select = i\ninput_player2_start = k\ninput_player2_up = comma\ninput_player2_down = o\ninput_player2_left = l\ninput_player2_right = period\ninput_player2_l = slash\ninput_player2_r = leftbracket\ninput_player2_l2 = quote\ninput_player2_r2 = rightbracket\ninput_player2_l3 = tilde\ninput_player2_r3 = space\ninput_player2_l_x_plus = backslash\ninput_player2_l_x_minus = insert\ninput_player2_l_y_plus = backspace\ninput_player2_l_y_minus = pause\ninput_player2_r_x_plus = pagedown\ninput_player2_r_x_minus = enter\ninput_player2_r_y_plus = keypad2\ninput_player2_r_y_minus = keypad1\ninput_player3_select = keypad5\ninput_player3_start = keypad6\ninput_player3_up = keypad7\ninput_player3_down = keypad8\ninput_player3_left = keypad9\ninput_player3_right = keypad0\ninput_player3_l = f1\ninput_player3_r = f2\ninput_player3_l2 = f3\ninput_player3_r2 = f4\ninput_player3_l_x_plus = f5\ninput_player3_l_x_minus = f6\ninput_player3_l_y_plus = f8\ninput_player3_l_y_minus = f7\ninput_player3_r_x_plus = f9\ninput_player3_r_x_minus = f10\ninput_player3_r_y_plus = f12\ninput_player3_r_y_minus = f11\ninput_player4_select = num2\ninput_player4_start = num3\ninput_player4_up = num4\ninput_player4_down = num5\ninput_player4_left = num6\ninput_player4_right = num7\ninput_player4_l = home\ninput_player4_r = divide\ninput_player4_l2 = multiply\ninput_player4_r2 = subtract\ninput_player4_l_x_plus = right\ninput_player4_l_x_minus = left\ninput_player4_l_y_plus = down\ninput_player4_l_y_minus = up\ninput_player4_r_x_plus = tilde\ninput_player4_r_x_minus = space\ninput_player4_r_y_plus = escape\ninput_player4_r_y_minus = end\n";
                            if (_0x13F4F === "psx" || _0x13F4F === "n64") {
                                _0x13E1B += "input_player1_analog_dpad_mode = 0\n";
                                _0x13E1B += "input_player2_analog_dpad_mode = 0\n";
                                _0x13E1B += "input_player3_analog_dpad_mode = 0\n";
                                _0x13E1B += "input_player4_analog_dpad_mode = 0\n"
                            } else {
                                _0x13E1B += "input_player1_analog_dpad_mode = 1\n";
                                _0x13E1B += "input_player2_analog_dpad_mode = 1\n";
                                _0x13E1B += "input_player3_analog_dpad_mode = 1\n";
                                _0x13E1B += "input_player4_analog_dpad_mode = 1\n"
                            };
                            Neptq("." + NCSS + "emul-display").on("click", function() {
                                Neptq("#" + NCSS + "VmenuNjs").attr("data-click-state", 0);
                                Neptq("#" + NCSS + "videoSettings").css("display", "none")
                            });
                            Neptq("." + NCSS + "selectOP").change(function() {
                                var _0x13E1B = Neptq(this).children(":selected").attr("id");
                                if (Neptq("#" + _0x13E1B).is(":selected")) {
                                    if (Neptq("." + NCSS + "nep_numL").hasClass("" + NCSS + "active_info")) {} else {
                                        Neptq("." + NCSS + "nep_numL").addClass("" + NCSS + "active_info");
                                        var _0x13E47 = setTimeout(function() {
                                            Neptq("." + NCSS + "nep_numL").removeClass("" + NCSS + "active_info")
                                        }, 6000)
                                    }
                                }
                            });
                            Neptq("." + NCSS + "NJSchek").click(function() {
                                if (Neptq("." + NCSS + "nep_numL").hasClass("" + NCSS + "active_info")) {} else {
                                    Neptq("." + NCSS + "nep_numL").addClass("" + NCSS + "active_info");
                                    var _0x13E1B = setTimeout(function() {
                                        Neptq("." + NCSS + "nep_numL").removeClass("" + NCSS + "active_info")
                                    }, 6000)
                                }
                            });
                            if (_0x13F4F === "nes" || _0x13F4F === "lynx" || _0x13F4F === "atari2600" || _0x13F4F === "atari7800") {
                                Neptq("#NJSshaders1 ,#NJSshaders2 ,#NJSshaders3 ,#NJSshaders4 ,#NJSshaders5 ,#NJSshaders6 ,#NJSshaders7").click(function() {
                                    if (Neptq("." + NCSS + "nep_numL").hasClass("" + NCSS + "active_info")) {} else {
                                        Neptq("." + NCSS + "nep_numL").addClass("" + NCSS + "active_info");
                                        var _0x13E1B = setTimeout(function() {
                                            Neptq("." + NCSS + "nep_numL").removeClass("" + NCSS + "active_info")
                                        }, 6000)
                                    }
                                })
                            };
                            if (_0x13F4F === "nes") {
                                if (Neptq("#nesntsc_cpu").is(":selected")) {
                                    _0x13E47 += "nestopia_favored_system = ntsc\n"
                                };
                                if (Neptq("#nespal_cpu").is(":selected")) {
                                    _0x13E47 += "nestopia_favored_system = pal\n"
                                };
                                if (Neptq("#nesfamicom_cpu").is(":selected")) {
                                    _0x13E47 += "nestopia_favored_system = famicom\n"
                                };
                                if (Neptq("#nesdendy_cpu").is(":selected")) {
                                    _0x13E47 += "nestopia_favored_system = dendy\n"
                                };
                                if (Neptq("#nes_nolimit").is(":checked")) {
                                    _0x13E47 += "nestopia_nospritelimit = \"enabled\"\n"
                                }
                            };
                            if (_0x13F4F === "tg16" || _0x13F4F === "tg16CD") {
                                _0x13E47 += "pce_last_scanline = 227\n"
                            };
                            if (_0x13F4F === "sega" || _0x13F4F === "segaGG" || _0x13F4F === "segaMS") {
                                if (Neptq("#SEGAntsc_cpu").is(":selected")) {
                                    _0x13E47 += "genesis_plus_gx_region_detect = ntsc-u\n"
                                };
                                if (Neptq("#SEGApal_cpu").is(":selected")) {
                                    _0x13E47 += "genesis_plus_gx_region_detect = pal\n"
                                };
                                if (Neptq("#ggextra").is(":checked")) {
                                    _0x13E47 += "genesis_plus_gx_gg_extra = \"enabled\"\n"
                                }
                            };
                            if (_0x13F4F === "sega_saturn") {
                                if (Neptq("#SATframeskip").is(":selected")) {
                                    _0x13E47 += "yabause_frameskip = \"enabled\"\n"
                                };
                                _0x13E47 += "yabause_addon_cart = \"4M_ram\"\n";
                                if (Neptq("#hle_bios").is(":selected")) {
                                    _0x13E47 += "yabause_force_hle_bios = \"enabled\"\n"
                                }
                            };
                            if (_0x13F4F === "neogeo") {
                                _0x13E47 += "fba-cpu-speed-adjust = " + _0x13ECB + "\n";
                                _0x13E47 += "fba-unibios = " + _0x13EF7 + "\n"
                            };
                            if (_0x13F4F === "zx") {
                                _0x13E47 += "fuse_fast_load = disabled\n";
                                _0x13E47 += "fuse_load_sound = disabled\n"
                            };
                            if (_0x13F4F === "snes") {
                                if (Neptq("#snes_cpu1").is(":selected")) {
                                    _0x13E47 += "snes9x_next_overclock = \"40MHz\"\n"
                                };
                                if (Neptq("#snes_cpu2").is(":selected")) {
                                    _0x13E47 += "snes9x_next_overclock = \"60MHz\"\n"
                                };
                                if (Neptq("#snes_cpu3").is(":selected")) {
                                    _0x13E47 += "snes9x_next_overclock = \"80MHz\"\n"
                                };
                                if (Neptq("#snes_cpu4").is(":selected")) {
                                    _0x13E47 += "snes9x_next_overclock = \"100MHz\"\n"
                                }
                            };
                            if (_0x13F4F === "n64") {
                                _0x13E47 += "mupen64-pak1 = memory\n";
                                _0x13E47 += "mupen64-disable_expmem = enabled\n";
                                if (Neptq("#n64render1").is(":selected")) {
                                    _0x13E47 += "glupen64-43screensize = \"320x240\"\n";
                                    _0x13E47 += "glupen64-169screensize = \"640x360\"\n";
                                    _0x13E47 += "mupen64-screensize = \"320x240\"\n"
                                };
                                if (Neptq("#n64render2").is(":selected")) {
                                    _0x13E47 += "glupen64-43screensize = \"640x480\"\n";
                                    _0x13E47 += "glupen64-169screensize = \"960x540\"\n";
                                    _0x13E47 += "mupen64-screensize = \"640x360\"\n"
                                };
                                if (Neptq("#Accuracy2").is(":selected")) {
                                    _0x13E47 += "mupen64-gfxplugin-accuracy = medium\n"
                                };
                                if (Neptq("#Accuracy3").is(":selected")) {
                                    _0x13E47 += "mupen64-gfxplugin-accuracy = high\n"
                                };
                                if (Neptq("#Accuracy4").is(":selected")) {
                                    _0x13E47 += "mupen64-gfxplugin-accuracy = veryhigh\n"
                                };
                                if (Neptq("#n64render3").is(":selected")) {
                                    _0x13E47 += "glupen64-43screensize = \"960x720\"\n";
                                    _0x13E47 += "glupen64-169screensize = \"1280x720\"\n";
                                    _0x13E47 += "mupen64-screensize = \"960x720\"\n"
                                };
                                if (Neptq("#n64render4").is(":selected")) {
                                    _0x13E47 += "glupen64-43screensize = \"1280x960\"\n";
                                    _0x13E47 += "glupen64-169screensize = \"1920x1080\"\n";
                                    _0x13E47 += "mupen64-screensize = \"1280x960\"\n"
                                };
                                if (Neptq("#n64WH").is(":checked")) {
                                    _0x13E47 += "glupen64-aspect = 16:9\n";
                                    _0x13E47 += "mupen64-aspectratiohint = widescreen\n"
                                };
                                _0x13E47 += "glupen64-UseNativeResolutionFactor = 1x\n";
                                _0x13E47 += "glupen64-EnableCopyAuxiliaryToRDRAM = True\n";
                                _0x13E47 += "glupen64-EnableCopyColorFromRDRAM = True\n";
                                _0x13E47 += "glupen64-EnableFragmentDepthWrite = True\n";
                                _0x13E47 += "glupen64-EnableCopyDepthToRDRAM = On\n";
                                _0x13E47 += "glupen64-CorrectTexrectCoords = On\n"
                            };
                            if (_0x13F4F === "nds") {
                                if (Neptq("#NDSdisplay_type").is(":checked")) {
                                    _0x13E47 += "desmume_screens_layout = \"quick switch\""
                                };
                                if (Neptq("#NDSframeskip1").is(":selected")) {
                                    _0x13E47 += "desmume_frameskip = \"1\"\n"
                                };
                                if (Neptq("#NDSframeskip2").is(":selected")) {
                                    _0x13E47 += "desmume_frameskip = \"2\"\n"
                                };
                                if (Neptq("#NDSframeskip3").is(":selected")) {
                                    _0x13E47 += "desmume_frameskip = \"3\"\n"
                                };
                                if (Neptq("#NDSframeskip4").is(":selected")) {
                                    _0x13E47 += "desmume_frameskip = \"4\"\n"
                                }
                            };
                            if (_0x13F4F === "psx") {
                                if (Neptq("#gamepad_type").is(":checked")) {
                                    _0x13E47 += "pcsx_rearmed_pad1type = analog\n"
                                };
                                if (Neptq("#PSXframeskip1").is(":selected")) {
                                    _0x13E47 += "pcsx_rearmed_frameskip = \"1\"\n"
                                };
                                if (Neptq("#PSXframeskip2").is(":selected")) {
                                    _0x13E47 += "pcsx_rearmed_frameskip = \"2\"\n"
                                };
                                if (Neptq("#PSXframeskip3").is(":selected")) {
                                    _0x13E47 += "pcsx_rearmed_frameskip = \"3\"\n"
                                };
                                if (Neptq("#PSXframeskip4").is(":selected")) {
                                    _0x13E47 += "pcsx_rearmed_frameskip = \"4\"\n"
                                };
                                if (Neptq("#PSXregionPal").is(":selected")) {
                                    _0x13E47 += "pcsx_rearmed_region = \"PAL\"\n"
                                };
                                if (Neptq("#PSXregionNtsc").is(":selected")) {
                                    _0x13E47 += "pcsx_rearmed_region = \"NTSC\"\n"
                                }
                            };
                            if (_0x13F4F === "atari_jaguar") {
                                Neptq("." + NCSS + "NEPicon-save , ." + NCSS + "NEPicon-load , ." + NCSS + "NEPicon-ssmb , #" + NCSS + "NEPicon-down-save").css("display", "none");
                                _0x13E47 += " virtualjaguar_usefastblitter = enabled\n";
                                _0x13E47 += " virtualjaguar_doom_res_hack = enabled\n";
                                _0x13E47 += " virtualjaguar_bios = enabled\n"
                            };
                            if (_0x13F4F === "sega32x" || _0x13F4F === "sega32X") {
                                Neptune.FS_createDataFile("/home/emscripten/retroarch/userdata/", "retroarch.cfg", _0x13E1B, true, true);
                                Neptune.FS_createDataFile("/home/emscripten/retroarch/userdata/", "retroarch-core-options.cfg", _0x13E47, true, true)
                            } else {
                                Neptune.FS_createDataFile("/home/web_user/retroarch/userdata/", "retroarch.cfg", _0x13E1B, true, true);
                                Neptune.FS_createDataFile("/home/web_user/retroarch/userdata/", "retroarch-core-options.cfg", _0x13E47, true, true)
                            };
                            _0x1420F(_0x13E73, bootRome, _0x13F4F)
                        }

                        function _0x1420F(_0x13E47, _0x13E1B, _0x13FFF) {
                            var _0x13FA7 = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
                                _0x13F7B = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
                                _0x13E9F = 21;
                            var _0x1402B = _0x13FA7.open("/webdata/state");
                            _0x1402B.onsuccess = function(_0x13E47) {
                                if (this.result.objectStoreNames.length === 0) {} else {
                                    var _0x13E1B = this.result;
                                    if (_0x13FFF === "psx" || _0x13FFF === "segaCD" || _0x13FFF === "tg16CD" || _0x13FFF === "3do" || _0x13FFF === "sega_saturn") {
                                        var _0x13E73 = RomTitleCD
                                    } else {
                                        var _0x13E73 = game
                                    };
                                    var _0x13E73;
                                    var _0x13E9F = "/webdata/state/" + _0x13E73 + ".state";
                                    var _0x13EF7 = _0x13E1B.transaction(["FILE_DATA"], "readwrite");
                                    var _0x13ECB = _0x13EF7.objectStore("FILE_DATA");
                                    _0x13EF7.objectStore("FILE_DATA").get(_0x13E9F).onsuccess = function(_0x13E1B) {
                                        if (_0x13E1B.target.result === undefined) {} else {
                                            checkOldsave = 1;
                                            FS.syncfs(true, function() {
                                            })
                                        }
                                    }
                                }
                            };
                            _0x1402B.onerror = function() {};
                            if (
                                _0x13FFF === "segaCD" ||
                                _0x13FFF === "tg16CD" ||
                                _0x13FFF === "3do" ||
                                _0x13FFF === "psx" && rometipe === "zip" ||
                                _0x13FFF === "sega_saturn"
                            ) {
                                var _0x14083 = setTimeout(function() {
                                    Neptq("." + NCSS + "loader_emu").html(StartEmuleNote);
                                    Neptune.arguments[1] = "/game/" + bootRomeCD;
                                    Neptune.callMain(Neptune.arguments)
                                }, 2500)
                            } else {
                                var _0x13E73 = new Uint8Array(_0x13E47);
                                console.log(StartEmuleNote);
                                Neptq("." + NCSS + "loader_emu").html(StartEmuleNote);
                                Neptune.FS_createDataFile("/", _0x13E1B, _0x13E73, true, false);
                                Neptune.arguments[1] = "/" + _0x13E1B;
                                Neptune.callMain(Neptune.arguments)
                            };
                            Neptq("." + NCSS + "emu-ctr-bar").css("display", "block");
                            if (Neptq("#" + NCSS + "display").is(":focus")) {} else {
                                if (Neptq("." + NCSS + "emul-pause").css("display") === "block") {} else {
                                    Neptune.ccall("yytrd9852hhf", "x7ooiujgfgda"[1])
                                }
                            };
                            if (xboxOne === true) {
                                Neptq("#" + NCSS + "xboxDisplay").css("display", "block")
                            };
                            Neptq("." + NCSS + "NeptunContextMenu").insertAfter("CfullScreen");
                            Neptq(document).keyup(function(_0x13E1B) {
                                if (_0x13E1B.keyCode === 27) {
                                    Neptq("#" + NCSS + "display").removeClass("" + NCSS + "CfullScreen")
                                }
                            });
                            if (_0x13FFF === "nds") {} else {
                                var _0x13EF7 = Neptq("#" + NCSS + "display");
                                _0x13EF7.dblclick("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                                    this.fullScreenMode = !this.fullScreenMode;
                                    Neptq("#" + NCSS + "Neptun").attr("style", "width: 100% !important");
                                    _0x13F23()
                                })
                            };
                            Neptq("." + NCSS + "NEPfullS").click(function() {
                                Neptq("#" + NCSS + "Neptun").attr("style", "width: 100% !important");
                                _0x13F23()
                            });

                            function _0x13F23() {
                                if (window.innerHeight == Neptq("#" + NCSS + "Neptun").height()) {
                                    if (document.exitFullscreen) {
                                        document.exitFullscreen()
                                    } else {
                                        if (document.mozCancelFullScreen) {
                                            document.mozCancelFullScreen()
                                        } else {
                                            if (document.webkitCancelFullScreen) {
                                                document.webkitCancelFullScreen()
                                            }
                                        }
                                    };
                                    Neptq(".nep-icon-shrink").addClass("nep-icon-enlarge");
                                    Neptq(".nep-icon-enlarge").removeClass("nep-icon-shrink");
                                    var _0x13E1B = setTimeout(function() {
                                        _0x13FD3()
                                    }, 100);
                                    if (_0x13FFF === "sega32x" || _0x13FFF === "sega32X") {} else {
                                        RA.context.close();
                                        Neptune.ccall("axiop55x2218", "x7ooiujgfgda"[1])
                                    }
                                } else {
                                    docElm = document.getElementById("" + NCSS + "Neptun");
                                    if (docElm.requestFullscreen) {
                                        docElm.requestFullscreen()
                                    } else {
                                        if (docElm.mozRequestFullScreen) {
                                            docElm.mozRequestFullScreen()
                                        } else {
                                            if (docElm.webkitRequestFullScreen) {
                                                docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                                            }
                                        }
                                    };
                                    var _0x13E1B = setTimeout(function() {
                                        _0x13FD3()
                                    }, 100);
                                    Neptq(".nep-icon-enlarge").addClass("nep-icon-shrink");
                                    Neptq(".nep-icon-shrink").removeClass("nep-icon-enlarge");
                                    if (_0x13FFF === "sega32x" || _0x13FFF === "sega32X") {} else {
                                        RA.context.close();
                                        Neptune.ccall("axiop55x2218", "x7ooiujgfgda"[1])
                                    }
                                }
                            }
                            Neptq(window).blur(function() {
                                if (MultiCD == true) {
                                    var _0x13E1B = Neptq("." + NCSS + "nep_swap_disc").attr("data-swap");
                                    if (_0x13E1B == 1 && ChangeDisc > 0) {} else {
                                        if (Neptq("." + NCSS + "emul-pause").css("display") === "block") {} else {
                                            Neptune.ccall("yytrd9852hhf", "x7ooiujgfgda"[1])
                                        }
                                    }
                                } else {
                                    if (Neptq("." + NCSS + "emul-pause").css("display") === "block") {} else {
                                        Neptune.ccall("yytrd9852hhf", "x7ooiujgfgda"[1])
                                    }
                                };
                                Neptune.ccall("trgfsdsse879", "x7ooiujgfgda"[1])
                            });
                            Neptq(function() {
                                var _0x13E1B = "";
                                if (Ndebag === "neptunjsdaltergg") {
                                    _0x13E1B = Neptq("#" + NCSS + "display")
                                } else {
                                    _0x13E1B = Neptq("#" + NCSS + "Neptun")
                                };
                                Neptq(_0x13E1B).nuContextMenu({
                                    hideAfterClick: true,
                                    callback: function(_0x13E47, _0x13E1B, _0x13E73) {
                                        if (_0x13E47 == 1) {
                                            callGpadUi()
                                        };
                                        if (_0x13E47 == 2) {
                                            return Neptune.ccall("yytrd9852hhf", "x7ooiujgfgda"[1])
                                        };
                                        if (_0x13E47 == 3) {
                                            Neptq("." + NCSS + "nep_Qsave_game").addClass("" + NCSS + "active_info");
                                            _0x13E73 = setTimeout(function() {
                                                Neptq("." + NCSS + "nep_Qsave_game").removeClass("" + NCSS + "active_info")
                                            }, 3000);
                                            Neptune.ccall("trgfsdsse879", "x7ooiujgfgda"[1]);
                                            document.getElementById("" + NCSS + "display").focus();
                                            Neptune.ccall("x7ooiujgfgda", "x7ooiujgfgda"[1]);
                                            return SMgetSave()
                                        };
                                        if (_0x13E47 == 4) {
                                            if (Neptq("." + NCSS + "last").length == 2 || checkOldsave === 1) {
                                                Neptq("." + NCSS + "nep_load_game").addClass("" + NCSS + "active_info");
                                                var _0x13E73 = setTimeout(function() {
                                                    Neptq("." + NCSS + "nep_load_game").removeClass("" + NCSS + "active_info")
                                                }, 2000);
                                                document.getElementById("" + NCSS + "display").focus();
                                                if (checkOldsave === 1) {
                                                    checkOldsave = 0;
                                                    Neptune.ccall("reyuyuyih897", "x7ooiujgfgda"[1]);
                                                    return SMgetSave()
                                                } else {
                                                    return Neptq("." + NCSS + "last").click()
                                                }
                                            }
                                        };
                                        if (_0x13E47 == 5) {
                                            Neptq("." + NCSS + "nep_reset_game").addClass(NCSS + "active_info");
                                            var _0x13E73 = setTimeout(function() {
                                                Neptq("." + NCSS + "nep_reset_game").removeClass(NCSS + "active_info")
                                            }, 2000);
                                            document.getElementById("" + NCSS + "display").focus();
                                            return Neptune.ccall("x74215uytrfs", "x7ooiujgfgda"[1])
                                        };
                                        if (_0x13E47 == 6) {
                                            _0x14057()
                                        };
                                        if (_0x13E47 == 9) {
                                            SSMUI()
                                        };
                                        if (_0x13E47 == 7) {
                                            window.location = "http://neptunjs.xyz/";
                                            target = "_blank"
                                        };
                                        if (_0x13E47 == 8) {
                                            _0x14133()
                                        }
                                    },
                                    menu: [{
                                        name: 1,
                                        title: controll,
                                        icon: "icon-gamepad"
                                    }, {
                                        name: 2,
                                        title: pauseEmu,
                                        icon: "icon-pause2"
                                    }, {
                                        name: 3,
                                        title: saveLangBar,
                                        icon: "icon-floppy-disk"
                                    }, {
                                        name: 4,
                                        title: loadLangBar,
                                        icon: "icon-upload3"
                                    }, {
                                        name: 5,
                                        title: restartLangBar,
                                        icon: "icon-spinner11"
                                    }, {
                                        name: 6,
                                        title: muteLangBar,
                                        icon: "icon-volume-high"
                                    }, {
                                        name: 7,
                                        title: conTitle,
                                        icon: "icon-terminal"
                                    }, {
                                        name: 8,
                                        title: makeScreenShot,
                                        icon: "icon-image"
                                    }, {
                                        name: 9,
                                        title: langSM,
                                        icon: "icon-folder-open"
                                    }]
                                });
                                if (location.hostname == "static.arcadespot.com") {
                                    Neptq("li[data-key='7']").css("display", "none")
                                };
                                if (_0x13FFF === "atari_jaguar") {
                                    Neptq("li[data-key='3'] , li[data-key='4'], li[data-key='9']").css("display", "none")
                                }
                            });
                            var _0x13ECB = Neptq("" + NepPlayer + "");
                            _0x13ECB.contextmenu(function() {
                                if (popset === 1) {
                                    var _0x13E9F = Neptq("." + NCSS + "NeptunContextMenu").width();
                                    var _0x13E1B = Neptq("." + NCSS + "NeptunContextMenu").height();
                                    var _0x13E73 = Neptq("." + NCSS + "NeptunContextMenu").position()["top"] + Neptq("." + NCSS + "NeptunContextMenu").height();
                                    var _0x13E47 = Neptq("." + NCSS + "NeptunContextMenu").position()["left"] + Neptq("." + NCSS + "NeptunContextMenu").width();
                                    var _0x13EF7 = Neptq("#" + NCSS + "Neptun").width();
                                    var _0x13ECB = Neptq("#" + NCSS + "Neptun").height();
                                    if (_0x13EF7 < _0x13E47) {
                                        Neptq("." + NCSS + "NeptunContextMenu").css("left", "" + _0x13EF7 - _0x13E9F + "px")
                                    };
                                    if (_0x13ECB < _0x13E73) {
                                        Neptq("." + NCSS + "NeptunContextMenu").css("top", "" + _0x13ECB - _0x13E1B + "px")
                                    }
                                }
                            });

                            function _0x13F4F() {
                                if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {} else {
                                    if ("exitFullscreen" in document) {
                                        document.exitFullscreen();
                                    } else if ("webkitExitFullscreen" in document) {
                                        document.webkitExitFullscreen();
                                    } else if ("mozCancelFullScreen" in document) {
                                        document.mozCancelFullScreen();
                                    } else if ("msExitFullscreen" in document) {
                                        document.msExitFullscreen();
                                    };
                                    Neptq(".nep-icon-shrink").addClass("nep-icon-enlarge");
                                    Neptq(".nep-icon-enlarge").removeClass("nep-icon-shrink");
                                    var _0x13E1B = setTimeout(function() {
                                        _0x13FD3()
                                    }, 100);
                                    if (_0x13FFF === "sega32x" || _0x13FFF === "sega32X") {} else {
                                        RA.context.close();
                                        Neptune.ccall("axiop55x2218", "number"[1])//todo: wtf? gay
                                    }
                                }
                            }
                            if (document.addEventListener) {
                                document.addEventListener("webkitfullscreenchange", _0x13F4F, false);
                                document.addEventListener("mozfullscreenchange", _0x13F4F, false);
                                document.addEventListener("fullscreenchange", _0x13F4F, false);
                                document.addEventListener("MSFullscreenChange", _0x13F4F, false);
                            };
                            if (gamepad.init()) {};
                            gamepad.bind(Gamepad.Event.UNSUPPORTED, function(_0x13E1B) {
                                Neptq("#gamepads").html("Gamepad unsupported");
                                Neptq("." + NCSS + "nep_game_pad_connect").addClass("" + NCSS + "active_info");
                                _0x14293 = setTimeout(function() {
                                    Neptq("." + NCSS + "nep_game_pad_connect").removeClass("" + NCSS + "active_info")
                                }, 4500);
                                Neptq("#" + NCSS + "gbadinfo1 , #" + NCSS + "gamepadinfo1 , #" + NCSS + "gbadinfo2 , #" + NCSS + "gamepadinfo2 , #" + NCSS + "gbadinfo3 , #" + NCSS + "gamepadinfo3 , #" + NCSS + "gbadinfo4 , #" + NCSS + "gamepadinfo4").css("display", "none")
                            });
                            gamepad.bind(Gamepad.Event.CONNECTED, function(_0x13E1B) {
                                var _0x13E73 = _0x13E1B.id;
                                var _0x13E47 = _0x13E73.indexOf("(");
                                _0x13E73 = _0x13E73.substring(0, _0x13E47 != -1 ? _0x13E47 : _0x13E73.length);
                                if (_0x13E1B.index === 0) {
                                    Neptq("#" + NCSS + "gamepadinfo1").html("Connected gamepad №" + (_0x13E1B.index + 1) + ": " + _0x13E73 + "");
                                    if (Neptq("#" + NCSS + "P1").hasClass("" + NCSS + "is-active")) {
                                        Neptq("#" + NCSS + "gbadinfo1 , #" + NCSS + "gamepadinfo1").css("display", "block");
                                        Neptq("#" + NCSS + "gbadinfo1").addClass("" + NCSS + "is-active")
                                    }
                                } else {
                                    if (Neptq("#" + NCSS + "gbadinfo1").hasClass("" + NCSS + "is-active")) {} else {
                                        Neptq("#" + NCSS + "gbadinfo1 , #" + NCSS + "gamepadinfo1").css("display", "none")
                                    }
                                };
                                if (_0x13E1B.index === 1) {
                                    Neptq("#" + NCSS + "gamepadinfo2").html("Connected gamepad №" + (_0x13E1B.index + 1) + ": " + _0x13E73 + "");
                                    if (Neptq("#" + NCSS + "P2").hasClass("" + NCSS + "is-active")) {
                                        Neptq("#" + NCSS + "gbadinfo2 , #" + NCSS + "gamepadinfo2").css("display", "block");
                                        Neptq("#" + NCSS + "gbadinfo2").addClass("" + NCSS + "is-active")
                                    }
                                } else {
                                    if (Neptq("#" + NCSS + "gbadinfo2").hasClass("" + NCSS + "is-active")) {} else {
                                        Neptq("#" + NCSS + "gbadinfo2 , #" + NCSS + "gamepadinfo2").css("display", "none")
                                    }
                                };
                                if (_0x13E1B.index === 2) {
                                    Neptq("#" + NCSS + "gamepadinfo3").html("Connected gamepad №" + (_0x13E1B.index + 1) + ": " + _0x13E73 + "");
                                    if (Neptq("#" + NCSS + "P3").hasClass("" + NCSS + "is-active")) {
                                        Neptq("#" + NCSS + "gbadinfo3, #" + NCSS + "gamepadinfo3").css("display", "block");
                                        Neptq("#" + NCSS + "gbadinfo3").addClass("" + NCSS + "is-active")
                                    }
                                } else {
                                    if (Neptq("#" + NCSS + "gbadinfo3").hasClass("" + NCSS + "is-active")) {} else {
                                        Neptq("#" + NCSS + "gbadinfo3 , #" + NCSS + "gamepadinfo3").css("display", "none")
                                    }
                                };
                                if (_0x13E1B.index === 3) {
                                    Neptq("#" + NCSS + "gamepadinfo4").html("Connected gamepad №" + (_0x13E1B.index + 1) + ": " + _0x13E73 + "");
                                    if (Neptq("#" + NCSS + "P4").hasClass("" + NCSS + "is-active")) {
                                        Neptq("#" + NCSS + "gbadinfo4 , #" + NCSS + "gamepadinfo4").css("display", "block");
                                        Neptq("#" + NCSS + "gbadinfo4").addClass("" + NCSS + "is-active")
                                    }
                                } else {
                                    if (Neptq("#" + NCSS + "gbadinfo4").hasClass("" + NCSS + "is-active")) {} else {
                                        Neptq("#" + NCSS + "gbadinfo4 , #" + NCSS + "gamepadinfo4").css("display", "none")
                                    }
                                };
                                Neptq("#gamepads").html("Connect gamepad №" + (_0x13E1B.index + 1) + ": " + _0x13E73 + "");
                                Neptq("." + NCSS + "gamepadinfo").html("gamepad №" + (_0x13E1B.index + 1) + ": " + _0x13E73 + "");
                                Neptq("." + NCSS + "nep_game_pad_connect").addClass("" + NCSS + "active_info");
                                _0x14293 = setTimeout(function() {
                                    Neptq("." + NCSS + "nep_game_pad_connect").removeClass("" + NCSS + "active_info")
                                }, 4500)
                            });
                            gamepad.bind(Gamepad.Event.DISCONNECTED, function(_0x13E1B) {
                                if (_0x13E1B.index === 0) {
                                    Neptq("#" + NCSS + "gamepadinfo1").html(" ");
                                    Neptq("#" + NCSS + "gbadinfo1 , #" + NCSS + "gamepadinfo1").css("display", "none");
                                    Neptq("#" + NCSS + "gbadinfo1").removeClass("" + NCSS + "is-active")
                                };
                                if (_0x13E1B.index === 1) {
                                    Neptq("#" + NCSS + "gamepadinfo2").html(" ");
                                    Neptq("#" + NCSS + "gbadinfo2 , #" + NCSS + "gamepadinfo2").css("display", "none");
                                    Neptq("#" + NCSS + "gbadinfo2").removeClass("" + NCSS + "is-active")
                                };
                                if (_0x13E1B.index === 2) {
                                    Neptq("#" + NCSS + "gamepadinfo3").html(" ");
                                    Neptq("#" + NCSS + "gbadinfo3 , #" + NCSS + "gamepadinfo3").css("display", "none");
                                    Neptq("#" + NCSS + "gbadinfo3").removeClass("" + NCSS + "is-active")
                                };
                                if (_0x13E1B.index === 3) {
                                    Neptq("#" + NCSS + "gamepadinfo4").html(" ");
                                    Neptq("#" + NCSS + "gbadinfo4 , #" + NCSS + "gamepadinfo4").css("display", "none");
                                    Neptq("#" + NCSS + "gbadinfo4").removeClass("" + NCSS + "is-active")
                                };
                                var _0x13E73 = _0x13E1B.id;
                                var _0x13E47 = _0x13E73.indexOf("(");
                                _0x13E73 = _0x13E73.substring(0, _0x13E47 != -1 ? _0x13E47 : _0x13E73.length);
                                Neptq("#gamepads").html("Disconected gamepad №" + (_0x13E1B.index + 1) + ": " + _0x13E73 + "");
                                Neptq("." + NCSS + "nep_game_pad_connect").addClass("" + NCSS + "active_info");
                                _0x14293 = setTimeout(function() {
                                    Neptq("." + NCSS + "nep_game_pad_connect").removeClass("" + NCSS + "active_info")
                                }, 4500)
                            });
                            Neptq("#" + NCSS + NCSS2 + NCSS3 + "").removeClass("" + NCSS + "pulse-anim");
                            return
                        }
                    }
                }(_0x13E1B)(testd * 10000 + testa + 100 + mmnva, "TypeError: Cannot set property 'widthNative' of null")
            })()
        }
        _0x13E73()
    }

    function _0x140AF() {
        var _0x13E73 = FS.readFile("/home/web_user/retroarch/userdata/retroarch.cfg", {
            encoding: "binary"
        });
        array = new Uint8Array(_0x13E73);
        var _0x13E47 = new Blob([array], {
            type: "application/octet-stream"
        });
        var _0x13E9F = window.URL.createObjectURL(_0x13E47);
        var _0x13E1B = document.createElement("a");
        document.body.appendChild(_0x13E1B);
        _0x13E1B.style = "display: none";
        _0x13E1B.download = "Nep.cfg";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(_0x13E47, _0x13E1B.download)
        } else {
            _0x13E1B.href = _0x13E9F
        };
        _0x13E1B.click();
        window.URL.revokeObjectURL(_0x13E9F)
    }

    function _0x140DB() {
        Neptune.ccall("x7ooiujgfgda", "x7ooiujgfgda"[1]);
        var _0x13E73 = FS.readFile("/webdata/state/" + game + ".state", {
            encoding: "binary"
        });
        array = new Uint8Array(_0x13E73);
        var _0x13E47 = new Blob([array], {
            type: "application/octet-stream"
        });
        var _0x13E9F = window.URL.createObjectURL(_0x13E47);
        var _0x13E1B = document.createElement("a");
        document.body.appendChild(_0x13E1B);
        _0x13E1B.style = "display: none";
        _0x13E1B.download = "" + game + ".ggs";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(_0x13E47, _0x13E1B.download)
        } else {
            _0x13E1B.href = _0x13E9F
        };
        _0x13E1B.click();
        window.URL.revokeObjectURL(_0x13E9F)
    }

    function _0x14107() {
        Neptq("#" + NCSS + "display").focus();
        _0x14057()
}

function _0x14133() {//screenshotter?
    Neptune.ccall("yytrd9852hhf", "x7ooiujgfgda"[1]);
    var _0x13E47 = Neptune.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var _0x13E1B = document.createElement("a");
    document.body.appendChild(_0x13E1B);
    _0x13E1B.style = "display: none";
    _0x13E1B.download = game + ".png";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(_0x13E47, _0x13E1B.download)
    } else {
        _0x13E1B.href = _0x13E47
    };
    _0x13E1B.click();
    window.URL.revokeObjectURL(_0x13E47);
    Neptune.ccall("terwq7895412", "x7ooiujgfgda"[1])
}

function _0x1415F() {
    if (NjsconsoleInfo.indexOf("RetroArch [INFO] :: ") > -1) {
        FS.syncfs(function() {
        });
        Neptq("#" + NCSS + "popupCDmenu").css({
            "visibility": "hidden",
            "opacity": "0",
            "zIndex": "0"
        });
        Neptq("#" + NCSS + "popupSwap2").css({
            "visibility": "visible",
            "opacity": "1",
            "zIndex": "5"
        });
        localStorage.setItem("NJScdName", JSON.stringify(GetsaveName))
    }
}

function _0x1418B() {
    Neptq("#" + NCSS + "popupCDmenu").attr("data-popup", "0");
    popupdata = 0;
    Neptq("#" + NCSS + "popupCDmenu").css({
        "visibility": "visible",
        "opacity": "1",
        "zIndex": "5"
    });
    Neptq("#" + NCSS + "popupSwap").css({
        "visibility": "hidden",
        "opacity": "0",
        "zIndex": "0"
    })
}

function _0x141B7(_0x13E1B) {
    Neptq("." + NCSS + "Cdinfo").css("display", "block");
    if (MCDload == 1) {
        Neptune.ccall("x7ooiujgfgda", "x7ooiujgfgda"[1]);
        getDataCdUrl = Neptq(this).attr("data-cd");
        localStorage.setItem("NJScd", JSON.stringify(getDataCdUrl));
        setTimeout(_0x1415F, 500)
    }
}

function _0x141E3() {
    _0x140DB()
}

function _0x1420F() {
    Neptq("#" + NCSS + "popupSwap").css({
        "visibility": "visible",
        "opacity": "1",
        "zIndex": "5"
    })
}

function _0x1423B() {
    location.reload()
}

function _0x14267() {
    FS.syncfs(function() {
    });
    FS.rename("/webdata/state/" + NameDisc + ".state", "/webdata/state/" + GetsaveName + ".state");
    var _0x13E47 = FS.stat("/webdata/state/" + GetsaveName + ".state");
    var _0x13E1B = Neptq("." + NCSS + "emul-pause").attr("data");
    Neptq("." + NCSS + "emul-pause").click(function() {
        if (_0x13E1B === "first") {
            setTimeout(Neptune.ccall("reyuyuyih897", "number"[1]), 500);
            setTimeout(test.DiskSwap, 1000);
            localStorage.setItem("NJScd", JSON.stringify(0));
            _0x13E1B = "none";
            Neptq("." + NCSS + "emul-pause").attr("data", "none")
        }
    });
    return false
}

function _0x14293() {
    Neptq(this).css("color", "" + NepColor + "")
}

function _0x142BF() {
    Neptq(this).css("color", "#fff")
}

function _0x142EB() {
    FS.syncfs(function() {
    })
}
timerB = _0x13E73;
reinitVastBanner = _0x13E9F;
reinitVast = _0x13ECB;
arCalculation = _0x13FD3;
SizeFixed = _0x1402B;
Mute = _0x14057;
saveCG = _0x140AF;
saveStateLD = _0x140DB;
saveIMGCanvas = _0x14133;
CheckSave = _0x1415F;
DiscSwap = _0x14267;
if (netp === 1) {
    if (Neptq("" + NepPlayer + "").length) {
        if (NJSerrorEvent === true && ltm === true) {
            meter = new NJSfpsMtt(document.getElementById("" + NCSS + "Neptun"), {
                interval: 300,
                smoothing: 10,
                show: "fps",
                toggleOn: "click",
                decimals: 1,
                maxFps: 60,
                threshold: 300,
                position: "absolute",
                zIndex: 2,
                left: "5px",
                top: "5px",
                right: "auto",
                bottom: "auto",
                margin: "0 0 0 0",
                theme: "transparent",
                heat: 0,
                graph: 0
            })
        }
    };
    _$synhc112 = "2";
    _$swqpa = "0";
    _$sasrqzc = "1";
    _$xxzczeytzx = "7";
    _$suyapz = "0";
    _$zxui = "6";
    _$siuyal = "3";
    _$bnucx = "0";
    gamepad = new Gamepad();
    N64Acurate = "";
    request = indexedDB.open("/webdata/state");
    indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB, IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction, dbVersion = 21;
    _ge385821 = "//mem.neptunjs.xyz/neptun/gge/" + neptunPlatform + ".gge";
    _$Tm329123 = testd * 10000 + testa + 100 + mmnva;
    if (NeptunP === "segaCD") {
        if (xboxOne === true) {
            _$xb385000 = "_xbox"
        } else {
            _$xb385000 = ""
        }
    } else {
        _$xb385000 = ""
    };
    Neptq("." + NCSS + "checkbox").on("click", _0x13E1B);
    Neptq("." + NCSS + "selectOP").on("click", _0x13E47);
    _$da789325 = "";
    Cdsu = "";
    _wyuds = "";
    sdas569 = "";
    _svdacsj = "";
    C8s698 = "";
    _Utsax = "";
    _C85sxe = "";
    _Ycgb = "";
    _P95pcdscv = "";
    Yxbox = "";
    xboxlan = "";
    YxboxRwebInput = "";
    Y3 = "";
    YxboxCanvas = "";
    Xdisplay = "";
    Xgamepad = "";
    YxboxGamepads = Xgamepad;
    EdgeInpute = "";
    CanvasInput = "";
    urlRom = "";
    GameLoad = urlRom;
    _ius = "";
    _nxu = "";
    _$zdsu = "";
    _nudyxu = "";
    _wyudsasdwqs = "";
    _oppssaqqw = "";
    _iussggruns = "";
    _wsad = "";
    wwwqqrty = "";
    exewq = "";
    sat48 = "";
    _werty = "";
    _zhjkl = "";
    _$csq = "";
    _$zxcv = "";
    _htpls = "";
    requires = "";
    TRY_USE_DUMPS = "";
    E2BIGS = "";
    drawBuffersExtS = "";
    if (neptunPlatform === null) {
        HtmlError()
    };
    adslink = "//a.vertamedia.com/?content_page_url={content_page}&width={width}&height={height}&cb={cb}&vpaid_type=3&video_duration=300&aid=365491";
    if (window.vqn == undefined || ltm === false || rbtl === true) {} else {
        player = vqn("#" + NCSS + NCSS + NCSS + NCSS + NCSS + NCSS + "", {
            "controls": false,
            "autoplay": false,
            "preload": false
        });
        adsCancelTimeout = 6000;
        player.vastClient({
            adTagUrl: ["//server.cpmstar.com/view.aspx?poolid=75083&vast=2&vpaid=1", "//server.cpmstar.com/view.aspx?poolid=75143&vast=2&vpaid=1"],
            playAdAlways: false,
            adCancelTimeout: adsCancelTimeout,
            adsEnabled: true,
            preferredTech: "html5"
        });
        player.on("reset", _0x13EF7);
        player.on("vast.adError", _0x13F23);
        player.on("vast.adStart", _0x13F4F);
        player.on("vast.adEnd", _0x13F7B);
        player.on("vast.adSkip", _0x13FA7)
    };
    HeightCheker = Neptq("" + NepPlayer + "").height();
    WidthCheker = Neptq("" + NepPlayer + "").width();
    HeightFixer = Neptq("#" + NCSS + "EmuBlock").width() / 1.336;
    NJS_Elements = Neptq("#" + NCSS + "EmuBlock , ." + NCSS + "emul-display ,." + NCSS + "controll-info");
    Neptq(window).on("resize", _0x13FFF);
    NJSsettings = JSON.parse(localStorage.getItem("NJSsettings"));
    selecteds = JSON.parse(localStorage.getItem("NJSs"));
    ChangeDisc = JSON.parse(localStorage.getItem("NJScd"));
    NameDisc = JSON.parse(localStorage.getItem("NJScdName"));
    if (NJSsettings === null) {} else {
        for (i = 0; i < NJSsettings.length; i++) {
            Neptq("#" + NJSsettings[i].id).prop("checked", NJSsettings[i].value);
            Neptq("#" + NJSsettings[i].id).attr("checked", NJSsettings[i].value)
        }
    };
    if (selecteds === null) {} else {
        for (i = 0; i < selecteds.length; i++) {
            Neptq("#" + selecteds[i].id).prop("selected", selecteds[i].value);
            Neptq("#" + selecteds[i].id).attr("selected", selecteds[i].value)
        }
    };
    Neptq(document).ready(_0x14083);
    conTitle = "NeptunJS 2.5.5";
    Neptq("#" + NCSS + "NEPicon-mute").click(_0x14107);
    Neptq("." + NCSS + "SwapNJSC").click(_0x1418B);
    Neptq("." + NCSS + "NJSCD").click(_0x141B7);
    Neptq("." + NCSS + "SwapSaveNJSC").click(_0x141E3);
    Neptq("." + NCSS + "NEPicon-swap").click(_0x1420F);
    Neptq("." + NCSS + "ReloadSwapNJSC").click(_0x1423B);
    Neptq(".nep-icon-upload3").hover(_0x14293, _0x142BF)
};
Neptq(".IndexSync").click(_0x142EB);
return 2810
}();
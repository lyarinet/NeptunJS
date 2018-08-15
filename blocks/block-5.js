var count, elemIcon, arraySlot, SSMUI, SMsort, SMgetSave, uploadSM, loadSaveHtml, getScreenImg, UploadBigSave; + function() {
    function _0x13E1B() {}

    function _0x13E47() {
        var _0x13E1B = Neptq("." + NCSS + "savestate").height();
        Neptq("." + NCSS + "snone").css({
            "height": (parseInt(_0x13E1B * 100)) / 100 + 1
        })
    }
    
    function _0x13E73() {
        Neptune.ccall("yytrd9852hhf", "number"[1]);
        Neptq("." + NCSS + "NJSsm").css("display", "block");
        Neptq("." + NCSS + "emu-ctr-bar").css("display", "none");
        Neptq("#" + NCSS + "display").addClass("" + NCSS + "Blur");
        var _0x13E1B = Neptq("." + NCSS + "savestate").height();
        Neptq("." + NCSS + "snone").css({
            "height": (parseInt(_0x13E1B * 100)) / 100 + 1
        })
    }
    
    function _0x13E9F(_BIGARRAY) {
        _0x13E73()
    }
    
    function _0x13ECB(_0x13E1B) {
        Neptq("." + NCSS + "NJSsm").css("display", "none");
        Neptq("." + NCSS + "emu-ctr-bar").css("display", "block");
        Neptq("#" + NCSS + "display").removeClass("" + NCSS + "Blur");
        Neptq("." + NCSS + "NJSsm").css("display", "none");
        RA.context.close();
        Neptune.ccall("axiop55x2218", "number"[1]);
        document.getElementById("" + NCSS + "display").focus();
        return Neptune.ccall("terwq7895412", "number"[1])
    }
    
    function _0x13EF7() {
        var $wrapper = Neptq("." + NCSS + "savemr");
        $wrapper.find("." + NCSS + "savestate, ." + NCSS + "snone").sort(function(_0x13E1B, _0x13E47) {
            return +_0x13E1B.dataset.slot - +_0x13E47.dataset.slot
        }).appendTo($wrapper)
    }
    
    function _0x13F23() {
        Neptune.ccall("yytrd9852hhf", "number"[1]);
        if (arraySlot > 0) {
            savestate = arraySlot;
            arraySlot = 0;
            savestate += 1
        };
        if (savestate === 7) {
            savestate = 1;
            _0x13E1B();
            return false
        } else {
            _0x13E1B();
            savestate += 1;
            return false
        };
    
        function _0x13E1B() {
            var _0x14057 = Neptune.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            Neptune.ccall("terwq7895412", "number"[1]);
            var _0x13FA7 = new Date() + "";
            var _0x13F7B = _0x13FA7.split("GMT").reverse().pop();
            var _0x13F23 = _0x13F7B.split(" ")[4];
            var _0x13F4F = _0x13F7B.split(" ")[3];
            var _0x13E9F = _0x13F23.slice(0, -3);
            var _0x13E73 = _0x13F7B.split(" ")[2];
            var _0x13ECB = _0x13F7B.split(" ")[1];
            var _0x13E47 = _0x13ECB + " | " + _0x13E73 + " | " + _0x13E9F + " | " + _0x13F4F;
            var _0x14083 = "" + game + savestate + "`" + _0x13E47 + "." + NepEmu + "";
            var _0x13FD3 = "" + game + savestate + ".png";
            var _0x1402B = "/webdata/state/" + game + savestate + ".state";
            FS.open(_0x1402B, "a+");
            if (FS.lookupPath(_0x1402B)) {
                FS.unlink(_0x1402B);
                FS.rename("/webdata/state/" + game + ".state", "/webdata/state/" + game + savestate + ".state")
            };
            var _0x13FFF = FS.readFile("/webdata/state/" + game + savestate + ".state", {
                encoding: "binary"
            });
            array = new Uint8Array(_0x13FFF);
            var _0x13E1B = new Blob([array], {
                type: "application/octet-stream"
            });
            var _0x140DB = window.URL.createObjectURL(_0x13E1B);
            var _0x140AF = "<div class=\"" + NCSS + "savestate  " + NCSS + "savestate" + savestate + " " + NCSS + "last " + NCSS + "gets " + NCSS + "get" + savestate + "\" data-slot=\"" + savestate + "\" data-url=\"" + _0x140DB + "\" data-slot=\"" + savestate + "\" data-name=\"" + _0x14083 + "\"><div class=\"" + NCSS + "lastsave\">Last Save</div><div class=\"" + NCSS + "saveslot\">Save Slot " + savestate + "</div><div><img title=\"" + LoadStatePC + "\" class=\"" + NCSS + "gets " + NCSS + "last " + NCSS + "get" + savestate + "\"  style=\"width:100%\" data-slot=\"" + savestate + "\" data-name=\"" + _0x13FD3 + "\" data-url=" + _0x14057 + " src=" + _0x14057 + " alt=\"Load\" /></div><div class=\"" + NCSS + "ctime\">" + _0x13E47 + "</div><div class=\"" + NCSS + "slotd\"><div class=\"nep-icon-download3\"></div><div class=\"" + NCSS + "dsavesate\" data-slot=\"" + savestate + "\">Download save </div></div></div>";
            Neptq("." + NCSS + "gets").removeClass("" + NCSS + "last");
            Neptq("." + NCSS + "snone[data-slot=\"" + savestate + "\"]").remove();
            Neptq("." + NCSS + "savestate[data-slot=\"" + savestate + "\"]").remove();
            Neptq("." + NCSS + "savemr").append(_0x140AF);
            _0x13EF7()
        }
        Neptune.ccall("terwq7895412", "number"[1])
    }
    
    function _0x13F4F(_0x13E1B) {
        var _0x13E47 = _0x13E1B.target.files;
        if (_0x13E47.length == 0) {
            return false
        };
        var _0x13E9F = _0x13E47[0].name.match("." + NepEmu + "", "i");
        var _0x13ECB = _0x13E47[0].name.match(/.ggs/i);
        var _0x13EF7 = _0x13E47[0].name.match(/.save/i);
        var _0x13E73 = _0x13E47[0].name.match(/.ggz/i);
        for (var _0x13F23 = 0; _0x13F23 < _0x13E47.length; _0x13F23++) {
            filereader = new FileReader();
            filereader.file_name = _0x13E47[_0x13F23].name;
            filereader.readAsArrayBuffer(_0x13E47[_0x13F23]);
            filereader.onload = function() {
                if (_0x13E73 == ".ggz" && _0x13E9F == null) {
                    _0x1402B(this.result, "/" + this.file_name)
                } else {
                    if (_0x13ECB == ".ggs" && _0x13E73 == null) {
                        _0x13F7B(this.result, "/" + this.file_name)
                    } else {
                        if (_0x13E9F == "." + NepEmu + "" && _0x13E73 == null) {
                            _0x13F7B(this.result, "/" + this.file_name)
                        } else {
                            if (_0x13EF7 == ".save" && _0x13E73 == null) {
                                _0x13F7B(this.result, "/" + this.file_name)
                            } else {
                                Neptq("#" + NCSS + "Dstatus").html("Error");
                                var _0x13E1B = "<p>Unsupported file</p>";
                                Neptq("#" + NCSS + "inder").html(_0x13E1B);
                                Neptq("#" + NCSS + "popupProgress").css({
                                    "visibility": "visible",
                                    "opacity": "1",
                                    "zIndex": "5"
                                })
                            }
                        }
                    }
                }
            }
        }
    }
    
    function _0x13F7B(_0x13E1B, _0x13E9F, _0x13E73) {
        var _0x13E47 = new Uint8Array(_0x13E1B);
        Neptune.ccall("x7ooiujgfgda", "number"[1]);
        var _0x13ECB = "/webdata/state/" + game + ".state";
        FS.open(_0x13ECB, "a+");
        if (FS.lookupPath(_0x13ECB)) {
            FS.unlink(_0x13ECB);
            FS.createDataFile("/webdata/state/", "" + game + ".state", _0x13E47, true, true)
        };
        Neptune.ccall("reyuyuyih897", "number"[1]);
        Neptune.ccall("terwq7895412", "number"[1])
    }
    
    function _0x13FA7() {
        var _0x13E1B;
        var _0x13E47 = setTimeout(function() {
            var _0x13F4F = new Date() + "";
            var _0x13F23 = _0x13F4F.split("GMT").reverse().pop();
            var _0x13ECB = _0x13F23.split(" ")[4];
            var _0x13EF7 = _0x13F23.split(" ")[3];
            var _0x13E73 = _0x13ECB.slice(0, -3);
            var _0x13E47 = _0x13F23.split(" ")[2];
            var _0x13E9F = _0x13F23.split(" ")[1];
            var _0x13E1B = _0x13E9F + " | " + _0x13E47 + " | " + _0x13E73 + " | " + _0x13EF7;
            var _0x13FA7 = "" + game + savestate + "`" + _0x13E1B + "." + NepEmu + "";
            var _0x13F7B = "" + game + savestate + ".png";
            if (arraySlot > 0) {
                savestate = arraySlot;
                savestate += 1;
                arraySlot = 0
            };
            if (savestate < 6) {
                _0x13FD3(_0x13E1B, savestate, _0x13FA7, _0x13F7B);
                savestate += 1;
                return false
            } else {
                _0x13FD3(_0x13E1B, savestate, _0x13FA7, _0x13F7B);
                savestate = 1;
                return false
            }
        }, 100)
    }
    
    function _0x13FD3(_0x13E1B, _0x13E9F, _0x13E73, _0x13E47) {
        Neptune.ccall("reyuyuyih897222", "number"[1]);
        Neptune.ccall("yytrd9852hhf", "number"[1]);
        var _0x13ECB = setTimeout(function() {
            var _0x13ECB = new Blob([FS.readFile("/" + game + ".png", {
                encoding: "binary"
            })]);
            var _0x13F4F = URL.createObjectURL || webkitURL.createObjectURL;
            var _0x13FA7 = _0x13F4F(_0x13ECB, "image/png");
            var _0x13F7B = FS.readFile("/webdata/state/" + game + ".state", {
                encoding: "binary"
            });
            array = new Uint8Array(_0x13F7B);
            var _0x13F23 = new Blob([array], {
                type: "application/octet-stream"
            });
            var _0x13FFF = window.URL.createObjectURL(_0x13F23);
            FS.rename("/webdata/state/" + game + ".state", "/webdata/state/" + game + _0x13E9F + ".state");
            var _0x13FD3 = "<div class=\"" + NCSS + "savestate " + NCSS + "savestate" + _0x13E9F + "" + NCSS + "last " + NCSS + "gets " + NCSS + "get" + _0x13E9F + "\" data-slot=\"" + _0x13E9F + "\" data-url=\"" + _0x13FFF + "\" data-name=\"" + _0x13E73 + "\"><div class=\"" + NCSS + "lastsave\">Last Save</div><div class=\"" + NCSS + "saveslot\">Save Slot " + _0x13E9F + "</div><img title=\"" + LoadStatePC + "\" class=\"" + NCSS + "gets " + NCSS + "get" + _0x13E9F + " " + NCSS + "last\"  style=\"width:100%\" data-slot=\"" + _0x13E9F + "\" data-name=\"" + _0x13E47 + "\" data-url=" + _0x13FA7 + " src=" + _0x13FA7 + " /><div class=\"" + NCSS + "ctime\">" + _0x13E1B + "</div><div class=\"" + NCSS + "slotd\"><div class=\"nep-icon-download3\"></div><div class=\"" + NCSS + "dsavesate\" data-slot=\"" + _0x13E9F + "\">Download save </div></div></div>";
            Neptq("." + NCSS + "savestate").removeClass("" + NCSS + "last");
            Neptq("." + NCSS + "snone[data-slot=\"" + _0x13E9F + "\"]").remove();
            Neptq("." + NCSS + "savestate[data-slot=\"" + _0x13E9F + "\"]").remove();
            Neptq("." + NCSS + "savemr").append(_0x13FD3);
            _0x13EF7()
        }, 400)
    }
    
    function _0x13FFF(_0x13E1B) {
        var _0x13E47 = Neptq(this).attr("data-slot");
        Neptq("." + NCSS + "emu-ctr-bar").css("display", "block");
        FS.rename("/webdata/state/" + game + _0x13E47 + ".state", "/webdata/state/" + game + ".state");
        setTimeout(Neptune.ccall("reyuyuyih897", "number"[1]), 500);
        setTimeout(FS.rename("/webdata/state/" + game + ".state", "/webdata/state/" + game + _0x13E47 + ".state"), 1000);
        Neptq("#" + NCSS + "display").removeClass("" + NCSS + "Blur");
        Neptq("." + NCSS + "NJSsm").css("display", "none");
        RA.context.close();
        Neptune.ccall("axiop55x2218", "number"[1]);
        document.getElementById("" + NCSS + "display").focus();
        return Neptune.ccall("terwq7895412", "number"[1])
    }
    
    function _0x1402B(_0x13E1B, _0x13ECB, _0x13E9F) {
        var _0x13F23 = new NJSZip();
        var _0x13E47 = new Date();
        NJSZip.loadAsync(_0x13E1B).then(function(_0x13FD3) {
            Neptq("#" + NCSS + "inder").html(HtmlProgress);
            var _0x13FA7 = 0;
            var _0x13F4F = 2;
            var _0x13E9F = Object.keys(_0x13FD3.files);
            var _0x13F7B = Object.keys(_0x13FD3.files) + "";
            if (_0x13E9F.length > 2) {
                _0x13E73()
            };
            var _0x13E1B = "." + NepEmu + "";
            var _0x13ECB = 0;
            var _0x13F23 = Neptq("." + NCSS + "savestate").length;
            var _0x13E47 = 0;
            _0x13E9F.forEach(function(_0x13E73, _0x13FA7) {
                var _0x13E1B = _0x13FD3.files[_0x13E73];
                _0x13E1B.async("array").then(function(_0x13FA7) {
                    var _0x1402B = _0x13E73;
                    var _0x140DB = "." + NepEmu + "";
                    var _0x14107 = _0x1402B.match(_0x140DB, "i");
                    var _0x14133 = _0x1402B.match(/.png/i);
                    _0x13ECB += 1;
                    var _0x1439B = _0x13ECB / _0x13E9F.length * 100;
                    Neptq("#" + NCSS + "Dstatus").html(Lstatus);
                    Neptq("#" + NCSS + "progress_bar").find("." + NCSS + "progress-bar").attr("aria-valuenow", _0x13E47).css({
                        width: _0x1439B + "%"
                    });
                    Neptq("#" + NCSS + "popupProgress").css({
                        "visibility": "visible",
                        "opacity": "1",
                        "zIndex": "5"
                    });
                    if (_0x13F7B.match(_0x140DB, "i") === null) {
                        Neptq("#" + NCSS + "Dstatus").html("Error");
                        var _0x141E3 = "<p>This save state not for this emulator </p>";
                        Neptq("#" + NCSS + "inder").html(_0x141E3);
                        Neptq("#" + NCSS + "popupProgress").css({
                            "visibility": "visible",
                            "opacity": "1",
                            "zIndex": "5"
                        })
                    } else {
                        if (_0x14107 == "." + NepEmu + "" && _0x14133 === null) {
                            var _0x14083 = _0x1402B.split("." + NepEmu + "").reverse().pop();
                            var _0x13FFF = _0x14083.split("`").pop();
                            var _0x140AF = _0x14083.split("`").reverse().pop();
                            var _0x14293 = "/webdata/state/" + _0x140AF + ".state";
                            var _0x1436F = FS.open(_0x14293, "a+");
                            FS.open(_0x14293, "a+");
                            if (FS.lookupPath(_0x14293)) {
                                FS.unlink("/webdata/state/" + _0x140AF + ".state")
                            };
                            var _0x14057 = new Uint8Array(_0x13FA7);
                            FS.createDataFile("/webdata/state/", "" + _0x140AF + ".state", _0x14057, true, true);
                            var _0x1418B = _0x14083.split("`").reverse().pop().slice(-1);
                            var _0x142EB = "" + game + _0x1418B + "`" + _0x13FFF + "." + NepEmu + "";
                            var _0x14267 = FS.readFile("/webdata/state/" + _0x140AF + ".state", {
                                encoding: "binary"
                            });
                            _0x13E1B = new Uint8Array(_0x14267);
                            var _0x13FA7 = new Blob([_0x13E1B], {
                                type: "application/octet-stream"
                            });
                            var _0x14343 = window.URL.createObjectURL(_0x13FA7);
                            var _0x141B7 = _0x1418B;
                            if (_0x13F4F === _0x13E9F.length) {
                                if (_0x13F23 == 6) {
                                    _0x13F23 = 1;
                                    var _0x1415F = _0x13F23
                                } else {
                                    _0x13F23 += 1;
                                    var _0x1415F = _0x13F23
                                };
                                _0x1418B = _0x1415F
                            };
                            var _0x14317 = "<div class=\"" + NCSS + "savestate " + NCSS + "savestate" + _0x1418B + "" + NCSS + "gets " + NCSS + "get" + _0x1418B + "\" data-slot=\"" + _0x1418B + "\" data-url=\"" + _0x14343 + "\" data-name=\"" + _0x142EB + "\"><div class=\"" + NCSS + "lastsave\">Last Save</div><div class=\"" + NCSS + "saveslot\">Save Slot " + _0x1418B + "</div><div class=\"" + NCSS + "imgslot\" data-slot=\"" + _0x141B7 + "\"></div><div class=\"" + NCSS + "ctime\">" + _0x13FFF + "</div><div class=\"" + NCSS + "slotd\"><div class=\"nep-icon-download3\"></div><div class=\"" + NCSS + "dsavesate\" data-slot=\"" + _0x1418B + "\">Download save </div></div></div>";
                            Neptq("." + NCSS + "snone[data-slot=\"" + _0x1418B + "\"]").remove();
                            Neptq("." + NCSS + "savestate[data-slot=\"" + _0x1418B + "\"]").remove();
                            Neptq("." + NCSS + "savestate" + _0x1418B + "").remove();
                            Neptq("." + NCSS + "savemr").append(_0x14317);
                            _0x13F23 += 1;
                            if (_0x1418B > 6) {
                                _0x13F23 = 1
                            };
                            _0x13EF7()
                        };
                        if (_0x14107 == null && _0x14133 == ".png") {
                            var _0x141B7 = _0x1402B.split(".png").reverse().pop().slice(-1);
                            var _0x13E1B = new Uint8Array(_0x13FA7);
                            var _0x13FD3 = new Blob([_0x13E1B], {
                                type: "image/octet-stream"
                            });
                            var _0x1418B = "";
                            var _0x1423B = "" + game + _0x141B7 + ".png";
                            var _0x142BF = window.URL.createObjectURL(_0x13FD3);
                            if (_0x13F4F === _0x13E9F.length) {
                                _0x1418B = _0x13F23
                            };
                            var _0x1420F = "<img title=\"" + LoadStatePC + "\" class=\"" + NCSS + "gets " + NCSS + "get" + _0x141B7 + " " + NCSS + "imgnum\" style=\"width:100%\" data-slot=\"" + _0x141B7 + "\" data-name=\"" + _0x1423B + "\" data-url=" + _0x142BF + " src=" + _0x142BF + " />";
                            Neptq("." + NCSS + "imgholder").append(_0x1420F)
                        };
                        if (_0x13ECB === _0x13E9F.length) {
                            arraySlot = _0x13E9F.length / 2;
                            Neptq("." + NCSS + "imgholder ." + NCSS + "imgnum").each(function() {
                                var _0x13E1B = Neptq(this).data("slot");
                                Neptq("." + NCSS + "imgslot[data-slot=\"" + _0x13E1B + "\"]").append(this)
                            });
                            if (_0x1439B === 100) {
                                setTimeout(function() {
                                    Neptq("#" + NCSS + "popupProgress").css({
                                        "visibility": "hidden",
                                        "opacity": "0",
                                        "zIndex": "0"
                                    });
                                    Neptq("." + NCSS + "progress-bar").css({
                                        width: "0%"
                                    })
                                }, 1000)
                            };
                            if (_0x13E9F.length == 2) {
                                FS.rename("/webdata/state/" + game + _0x141B7 + ".state", "/webdata/state/" + game + ".state");
                                setTimeout(Neptune.ccall("reyuyuyih897", "number"[1]), 500);
                                setTimeout(FS.rename("/webdata/state/" + game + ".state", "/webdata/state/" + game + _0x141B7 + ".state"), 1000);
                                RA.context.close();
                                Neptune.ccall("axiop55x2218", "number"[1]);
                                document.getElementById("" + NCSS + "display").focus();
                                if (Neptq("." + NCSS + "NJSsm").css("display") == "block") {} else {
                                    return Neptune.ccall("terwq7895412", "number"[1])
                                }
                            }
                        }
                    }
                })
            })
        })
    }
    SSMUI = _0x13E73;
    SMsort = _0x13EF7;
    SMgetSave = _0x13F23;
    uploadSM = _0x13F7B;
    loadSaveHtml = _0x13FA7;
    getScreenImg = _0x13FD3;
    UploadBigSave = _0x1402B;
    if (netp === 1) {
        count = Neptq("." + NCSS + "savestate").length;
        elemIcon = "";
        arraySlot = "";
        Neptq(".nep-icon-download3").click(_0x13E1B);
        Neptq(window).resize(_0x13E47);
        Neptq("." + NCSS + "NEPicon-ssmb").on("click", _0x13E9F);
        Neptq("#" + NCSS + "ClousCSSM").on("click", _0x13ECB);
        Neptq("#" + NCSS + "saveupload , #" + NCSS + "UPload").on("change", _0x13F4F);
        Neptq("." + NCSS + "savemr").on("click", "img", _0x13FFF);
    };
    return 7047
}();
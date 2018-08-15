var e; + function() {
    function _0x20511() {
        var _0x20574 = void(0),
            _0x206BE = !0,
            _0x207E7 = null,
            _0x2088C = !1;
    
        function _0x208EF() {
            return function() {}
        }
    
        function _0x20952(_BIGARRAY) {
            return function() {
                return this[_BIGARRAY]
            }
        }
    
        function _0x209F7(_BIGARRAY) {
            return function() {
                return _BIGARRAY
            }
        }
        var _0x20ABD;
        document.createElement("video");
        document.createElement("audio");
        document.createElement("track");
    
        function _0x20B20(_0x20511, _0x20532, _0x20553) {
            if ("string" === typeof _0x20511) {
                0 === _0x20511.indexOf("#") && (_0x20511 = _0x20511.slice(1));
                if (_0x20B20.Ca[_0x20511]) {
                    return _0x20532 && _0x20B20.log.warn("Player \"" + _0x20511 + "\" is already initialised. Options will not be applied."), _0x20553 && _0x20B20.Ca[_0x20511].I(_0x20553), _0x20B20.Ca[_0x20511]
                };
                _0x20511 = _0x20B20.m(_0x20511)
            };
            if (!_0x20511 || !_0x20511.nodeName) {
                throw new TypeError("The element or ID supplied is not valid. (vqn)")
            };
            return _0x20511.player || new _0x20B20.Player(_0x20511, _0x20532, _0x20553)
        }
        var _0x20C28 = window.vqn = _0x20B20;
        _0x20B20.fc = "4.12";
        _0x20B20.sd = "https:" == document.location.protocol ? "https://" : "http://";
        _0x20B20.VERSION = "4.12.15";
        _0x20B20.options = {
            techOrder: ["html5", "flash"],//todo: remove flash entirely? its never used and its shit
            html5: {},
            flash: {},
            width: 300,
            height: 150,
            defaultVolume: 0,
            playbackRates: [],
            inactivityTimeout: 2E3,
            children: {
                mediaLoader: {},
                posterImage: {},
                loadingSpinner: {},
                textTrackDisplay: {},
                bigPlayButton: {},
                controlBar: {},
                errorDisplay: {},
                textTrackSettings: {}
            },
            language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.Ef || navigator.language || "en",
            languages: {},
            notSupportedMessage: "No compatible source was found for this video."
        };
        "GENERATED_CDN_VSN" !== _0x20B20.fc && (_0x20C28.options["flash"].swf = _0x20B20.sd + "vjs.zencdn.net/" + _0x20B20.fc + "/video-js.swf");
        _0x20B20.Gd = function(_0x20511, _0x20532) {
            _0x20B20.options.languages[_0x20511] = _0x20B20.options.languages[_0x20511] !== _0x20574 ? _0x20B20.Z.Aa(_0x20B20.options.languages[_0x20511], _0x20532) : _0x20532;
            return _0x20B20.options.languages
        };
        _0x20B20.Ca = {};
        "function" === typeof define && define.amd ? define("vqn", [], function() {
            return _0x20C28
        }) : "object" === typeof exports && "object" === typeof module && (module.exports = _0x20C28);
        _0x20B20.Ga = _0x20B20.CoreObject = _0x208EF();
        _0x20B20.Ga.extend = function(_0x20511) {
            var _0x20532, _0x20553;
            _0x20511 = _0x20511 || {};
            _0x20532 = _0x20511.init || _0x20511.l || this.prototype.init || this.prototype.l || _0x208EF();
            _0x20553 = function() {
                _0x20532.apply(this, arguments)
            };
            _0x20553.prototype = _0x20B20.i.create(this.prototype);
            _0x20553.prototype.constructor = _0x20553;
            _0x20553.extend = _0x20B20.Ga.extend;
            _0x20553.create = _0x20B20.Ga.create;
            for (var _0x20574 in _0x20511) {
                _0x20511.hasOwnProperty(_0x20574) && (_0x20553.prototype[_0x20574] = _0x20511[_0x20574])
            };
            return _0x20553
        };
        _0x20B20.Ga.create = function() {
            var _0x20511 = _0x20B20.i.create(this.prototype);
            this.apply(_0x20511, arguments);
            return _0x20511
        };
        _0x20B20.b = function(_0x20511, _0x20532, _0x20553) {
            if (_0x20B20.i.isArray(_0x20532)) {
                return _0x20BC5(_0x20B20.b, _0x20511, _0x20532, _0x20553)
            };
            var _0x20574 = _0x20B20.getData(_0x20511);
            _0x20574.G || (_0x20574.G = {});
            _0x20574.G[_0x20532] || (_0x20574.G[_0x20532] = []);
            _0x20553.s || (_0x20553.s = _0x20B20.s++);
            _0x20574.G[_0x20532].push(_0x20553);
            _0x20574.ba || (_0x20574.disabled = _0x2088C, _0x20574.ba = function(_0x20532) {
                if (!_0x20574.disabled) {
                    _0x20532 = _0x20B20.Nb(_0x20532);
                    var _0x20553 = _0x20574.G[_0x20532.type];
                    if (_0x20553) {
                        for (var _0x20553 = _0x20553.slice(0), _0x20595 = 0, _0x205B6 = _0x20553.length; _0x20595 < _0x205B6 && !_0x20532.Nc(); _0x20595++) {
                            _0x20553[_0x20595].call(_0x20511, _0x20532)
                        }
                    }
                }
            });
            1 == _0x20574.G[_0x20532].length && (_0x20511.addEventListener ? _0x20511.addEventListener(_0x20532, _0x20574.ba, _0x2088C) : _0x20511.attachEvent && _0x20511.attachEvent("on" + _0x20532, _0x20574.ba))
        };
        _0x20B20.n = function(_0x20511, _0x20532, _0x20553) {
            if (_0x20B20.Ic(_0x20511)) {
                var _0x20574 = _0x20B20.getData(_0x20511);
                if (_0x20574.G) {
                    if (_0x20B20.i.isArray(_0x20532)) {
                        return _0x20BC5(_0x20B20.n, _0x20511, _0x20532, _0x20553)
                    };
                    if (_0x20532) {
                        var _0x20595 = _0x20574.G[_0x20532];
                        if (_0x20595) {
                            if (_0x20553) {
                                if (_0x20553.s) {
                                    for (_0x20574 = 0; _0x20574 < _0x20595.length; _0x20574++) {
                                        _0x20595[_0x20574].s === _0x20553.s && _0x20595.splice(_0x20574--, 1)
                                    }
                                }
                            } else {
                                _0x20574.G[_0x20532] = []
                            };
                            _0x20B20.xc(_0x20511, _0x20532)
                        }
                    } else {
                        for (_0x20595 in _0x20574.G) {
                            _0x20532 = _0x20595, _0x20574.G[_0x20532] = [], _0x20B20.xc(_0x20511, _0x20532)
                        }
                    }
                }
            }
        };
        _0x20B20.xc = function(_0x20511, _0x20532) {
            var _0x20553 = _0x20B20.getData(_0x20511);
            0 === _0x20553.G[_0x20532].length && (delete _0x20553.G[_0x20532], _0x20511.removeEventListener ? _0x20511.removeEventListener(_0x20532, _0x20553.ba, _0x2088C) : _0x20511.detachEvent && _0x20511.detachEvent("on" + _0x20532, _0x20553.ba));
            _0x20B20.hb(_0x20553.G) && (delete _0x20553.G, delete _0x20553.ba, delete _0x20553.disabled);
            _0x20B20.hb(_0x20553) && _0x20B20.Zc(_0x20511)
        };
        _0x20B20.Nb = function(_0x20511) {
            function _0x20532() {
                return _0x206BE
            }
    
            function _0x20553() {
                return _0x2088C
            }
            if (!_0x20511 || !_0x20511.Sb) {
                var _0x20574 = _0x20511 || window.event;
                _0x20511 = {};
                for (var _0x20595 in _0x20574) {
                    "layerX" !== _0x20595 && ("layerY" !== _0x20595 && "keyLocation" !== _0x20595) && ("returnValue" == _0x20595 && _0x20574.preventDefault || (_0x20511[_0x20595] = _0x20574[_0x20595]))
                };
                _0x20511.target || (_0x20511.target = _0x20511.srcElement || document);
                _0x20511.relatedTarget = _0x20511.fromElement === _0x20511.target ? _0x20511.toElement : _0x20511.fromElement;
                _0x20511.preventDefault = function() {
                    _0x20574.preventDefault && _0x20574.preventDefault();
                    _0x20511.returnValue = _0x2088C;
                    _0x20511.ee = _0x20532;
                    _0x20511.defaultPrevented = _0x206BE
                };
                _0x20511.ee = _0x20553;
                _0x20511.defaultPrevented = _0x2088C;
                _0x20511.stopPropagation = function() {
                    _0x20574.stopPropagation && _0x20574.stopPropagation();
                    _0x20511.cancelBubble = _0x206BE;
                    _0x20511.Sb = _0x20532
                };
                _0x20511.Sb = _0x20553;
                _0x20511.stopImmediatePropagation = function() {
                    _0x20574.stopImmediatePropagation && _0x20574.stopImmediatePropagation();
                    _0x20511.Nc = _0x20532;
                    _0x20511.stopPropagation()
                };
                _0x20511.Nc = _0x20553;
                if (_0x20511.clientX != _0x207E7) {
                    _0x20595 = document.documentElement;
                    var _0x205B6 = document.body;
                    _0x20511.pageX = _0x20511.clientX + (_0x20595 && _0x20595.scrollLeft || _0x205B6 && _0x205B6.scrollLeft || 0) - (_0x20595 && _0x20595.clientLeft || _0x205B6 && _0x205B6.clientLeft || 0);
                    _0x20511.pageY = _0x20511.clientY + (_0x20595 && _0x20595.scrollTop || _0x205B6 && _0x205B6.scrollTop || 0) - (_0x20595 && _0x20595.clientTop || _0x205B6 && _0x205B6.clientTop || 0)
                };
                _0x20511.which = _0x20511.charCode || _0x20511.keyCode;
                _0x20511.button != _0x207E7 && (_0x20511.button = _0x20511.button & 1 ? 0 : _0x20511.button & 4 ? 1 : _0x20511.button & 2 ? 2 : 0)
            };
            return _0x20511
        };
        _0x20B20.o = function(_0x20511, _0x20532) {
            var _0x20553 = _0x20B20.Ic(_0x20511) ? _0x20B20.getData(_0x20511) : {},
                _0x20574 = _0x20511.parentNode || _0x20511.ownerDocument;
            "string" === typeof _0x20532 && (_0x20532 = {
                type: _0x20532,
                target: _0x20511
            });
            _0x20532 = _0x20B20.Nb(_0x20532);
            _0x20553.ba && _0x20553.ba.call(_0x20511, _0x20532);
            if (_0x20574 && !_0x20532.Sb() && _0x20532.bubbles !== _0x2088C) {
                _0x20B20.o(_0x20574, _0x20532)
            } else {
                if (!_0x20574 && !_0x20532.defaultPrevented && (_0x20553 = _0x20B20.getData(_0x20532.target), _0x20532.target[_0x20532.type])) {
                    _0x20553.disabled = _0x206BE;
                    if ("function" === typeof _0x20532.target[_0x20532.type]) {
                        _0x20532.target[_0x20532.type]()
                    };
                    _0x20553.disabled = _0x2088C
                }
            };
            return !_0x20532.defaultPrevented
        };
        _0x20B20.N = function(_0x20511, _0x20532, _0x20553) {
            function _0x20574() {
                _0x20B20.n(_0x20511, _0x20532, _0x20574);
                _0x20553.apply(this, arguments)
            }
            if (_0x20B20.i.isArray(_0x20532)) {
                return _0x20BC5(_0x20B20.N, _0x20511, _0x20532, _0x20553)
            };
            _0x20574.s = _0x20553.s = _0x20553.s || _0x20B20.s++;
            _0x20B20.b(_0x20511, _0x20532, _0x20574)
        };
    
        function _0x20BC5(_0x20511, _0x20532, _0x20553, _0x20574) {
            _0x20B20.tc.forEach(_0x20553, function(_BIGARRAY) {
                _0x20511(_0x20532, _BIGARRAY, _0x20574)
            })
        }
        var _0x20C49 = Object.prototype.hasOwnProperty;
        _0x20B20.e = function(_0x20511, _0x20532) {
            var _0x20553;
            _0x20532 = _0x20532 || {};
            _0x20553 = document.createElement(_0x20511 || "div");
            _0x20B20.i.ca(_0x20532, function(_0x20511, _0x20532) {
                -1 !== _0x20511.indexOf("aria-") || "role" == _0x20511 ? _0x20553.setAttribute(_0x20511, _0x20532) : _0x20553[_0x20511] = _0x20532
            });
            return _0x20553
        };
        _0x20B20.va = function(_0x20511) {
            return _0x20511.charAt(0).toUpperCase() + _0x20511.slice(1)
        };
        _0x20B20.i = {};
        _0x20B20.i.create = Object.create || function(_0x20511) {
            function _0x20532() {}
            _0x20532.prototype = _0x20511;
            return new _0x20532
        };
        _0x20B20.i.ca = function(_0x20511, _0x20532, _0x20553) {
            for (var _0x20574 in _0x20511) {
                _0x20C49.call(_0x20511, _0x20574) && _0x20532.call(_0x20553 || this, _0x20574, _0x20511[_0x20574])
            }
        };
        _0x20B20.i.D = function(_0x20511, _0x20532) {
            if (!_0x20532) {
                return _0x20511
            };
            for (var _0x20553 in _0x20532) {
                _0x20C49.call(_0x20532, _0x20553) && (_0x20511[_0x20553] = _0x20532[_0x20553])
            };
            return _0x20511
        };
        _0x20B20.i.Od = function(_0x20511, _0x20532) {
            var _0x20553, _0x20574, _0x20595;
            _0x20511 = _0x20B20.i.copy(_0x20511);
            for (_0x20553 in _0x20532) {
                _0x20C49.call(_0x20532, _0x20553) && (_0x20574 = _0x20511[_0x20553], _0x20595 = _0x20532[_0x20553], _0x20511[_0x20553] = _0x20B20.i.ib(_0x20574) && _0x20B20.i.ib(_0x20595) ? _0x20B20.i.Od(_0x20574, _0x20595) : _0x20532[_0x20553])
            };
            return _0x20511
        };
        _0x20B20.i.copy = function(_0x20511) {
            return _0x20B20.i.D({}, _0x20511)
        };
        _0x20B20.i.ib = function(_0x20511) {
            return !!_0x20511 && "object" === typeof _0x20511 && "[object Object]" === _0x20511.toString() && _0x20511.constructor === Object
        };
        _0x20B20.i.isArray = Array.isArray || function(_0x20511) {
            return "[object Array]" === Object.prototype.toString.call(_0x20511)
        };
        _0x20B20.ge = function(_BIGARRAY) {
            return _BIGARRAY !== _BIGARRAY
        };
        _0x20B20.bind = function(_0x20511, _0x20532, _0x20553) {
            function _0x20574() {
                return _0x20532.apply(_0x20511, arguments)
            }
            _0x20532.s || (_0x20532.s = _0x20B20.s++);
            _0x20574.s = _0x20553 ? _0x20553 + "_" + _0x20532.s : _0x20532.s;
            return _0x20574
        };
        _0x20B20.ua = {};
        _0x20B20.s = 1;
        _0x20B20.expando = "vdata" + (new Date).getTime();
        _0x20B20.getData = function(_0x20511) {
            var _0x20532 = _0x20511[_0x20B20.expando];
            _0x20532 || (_0x20532 = _0x20511[_0x20B20.expando] = _0x20B20.s++);
            _0x20B20.ua[_0x20532] || (_0x20B20.ua[_0x20532] = {});
            return _0x20B20.ua[_0x20532]
        };
        _0x20B20.Ic = function(_0x20511) {
            _0x20511 = _0x20511[_0x20B20.expando];
            return !(!_0x20511 || _0x20B20.hb(_0x20B20.ua[_0x20511]))
        };
        _0x20B20.Zc = function(_0x20511) {
            var _0x20532 = _0x20511[_0x20B20.expando];
            if (_0x20532) {
                delete _0x20B20.ua[_0x20532];
                try {
                    delete _0x20511[_0x20B20.expando]
                } catch (d) {
                    _0x20511.removeAttribute ? _0x20511.removeAttribute(_0x20B20.expando) : _0x20511[_0x20B20.expando] = _0x207E7
                }
            }
        };
        _0x20B20.hb = function(_BIGARRAY) {
            for (var _0x20511 in _BIGARRAY) {
                if (_BIGARRAY[_0x20511] !== _0x207E7) {
                    return _0x2088C
                }
            };
            return _0x206BE
        };
        _0x20B20.Pa = function(_0x20511, _0x20532) {
            return -1 !== (" " + _0x20511.className + " ").indexOf(" " + _0x20532 + " ")
        };
        _0x20B20.p = function(_0x20511, _0x20532) {
            _0x20B20.Pa(_0x20511, _0x20532) || (_0x20511.className = "" === _0x20511.className ? _0x20532 : _0x20511.className + " " + _0x20532)
        };
        _0x20B20.r = function(_0x20511, _0x20532) {
            var _0x20553, _0x20574;
            if (_0x20B20.Pa(_0x20511, _0x20532)) {
                _0x20553 = _0x20511.className.split(" ");
                for (_0x20574 = _0x20553.length - 1; 0 <= _0x20574; _0x20574--) {
                    _0x20553[_0x20574] === _0x20532 && _0x20553.splice(_0x20574, 1)
                };
                _0x20511.className = _0x20553.join(" ")
            }
        };
        _0x20B20.A = _0x20B20.e("video");
        var _0x20CAC = document.createElement("track");
        _0x20CAC.Tb = "captions";
        _0x20CAC.ed = "en";
        _0x20CAC.label = "English";
        _0x20B20.A.appendChild(_0x20CAC);
        _0x20B20.P = navigator.userAgent;
        _0x20B20.zd = /iPhone/i .test(_0x20B20.P);
        _0x20B20.yd = /iPad/i .test(_0x20B20.P);
        _0x20B20.Ad = /iPod/i .test(_0x20B20.P);
        _0x20B20.xd = _0x20B20.zd || _0x20B20.yd || _0x20B20.Ad;
        var _0x20532 = _0x20B20,
            _0x20D0F;
        var _0x20D72 = _0x20B20.P.match(/OS (\d+)_/i);
        _0x20D0F = _0x20D72 && _0x20D72[1] ? _0x20D72[1] : _0x20574;
        _0x20532.ff = _0x20D0F;
        _0x20B20.wd = /Android/i .test(_0x20B20.P);
        var _0x205B6 = _0x20B20,
            _0x20595;
        var _0x205F8 = _0x20B20.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
            _0x2063A, _0x2067C;
        _0x205F8 ? (_0x2063A = _0x205F8[1] && parseFloat(_0x205F8[1]), _0x2067C = _0x205F8[2] && parseFloat(_0x205F8[2]), _0x20595 = _0x2063A && _0x2067C ? parseFloat(_0x205F8[1] + "." + _0x205F8[2]) : _0x2063A ? _0x2063A : _0x207E7) : _0x20595 = _0x207E7;
        _0x205B6.ec = _0x20595;
        _0x20B20.Bd = _0x20B20.wd && /webkit/i .test(_0x20B20.P) && 2.3 > _0x20B20.ec;
        _0x20B20.gc = /Firefox/i .test(_0x20B20.P);
        _0x20B20.gf = /Chrome/i .test(_0x20B20.P);
        _0x20B20.pa = /MSIE\s8\.0/ .test(_0x20B20.P);
        _0x20B20.Db = !!("ontouchstart" in window || window.ud && document instanceof window.ud);
        _0x20B20.td = "backgroundSize" in _0x20B20.A.style;
        _0x20B20.ad = function(_0x20511, _0x20532) {
            _0x20B20.i.ca(_0x20532, function(_0x20532, _0x20553) {
                _0x20553 === _0x207E7 || "undefined" === typeof _0x20553 || _0x20553 === _0x2088C ? _0x20511.removeAttribute(_0x20532) : _0x20511.setAttribute(_0x20532, _0x20553 === _0x206BE ? "" : _0x20553)
            })
        };
        _0x20B20.Oa = function(_0x20511) {
            var _0x20532, _0x20553, _0x20574, _0x20595;
            _0x20532 = {};
            if (_0x20511 && _0x20511.attributes && 0 < _0x20511.attributes.length) {
                _0x20553 = _0x20511.attributes;
                for (var _0x205B6 = _0x20553.length - 1; 0 <= _0x205B6; _0x205B6--) {
                    _0x20574 = _0x20553[_0x205B6].name;
                    _0x20595 = _0x20553[_0x205B6].value;
                    if ("boolean" === typeof _0x20511[_0x20574] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + _0x20574 + ",")) {
                        _0x20595 = _0x20595 !== _0x207E7 ? _0x206BE : _0x2088C
                    };
                    _0x20532[_0x20574] = _0x20595
                }
            };
            return _0x20532
        };
        _0x20B20.rf = function(_0x20511, _0x20532) {
            var _0x20553 = "";
            document.defaultView && document.defaultView.getComputedStyle ? _0x20553 = document.defaultView.getComputedStyle(_0x20511, "").getPropertyValue(_0x20532) : _0x20511.currentStyle && (_0x20553 = _0x20511["client" + _0x20532.substr(0, 1).toUpperCase() + _0x20532.substr(1)] + "px");
            return _0x20553
        };
        _0x20B20.Rb = function(_0x20511, _0x20532) {
            _0x20532.firstChild ? _0x20532.insertBefore(_0x20511, _0x20532.firstChild) : _0x20532.appendChild(_0x20511)
        };
        _0x20B20.bb = {};
        _0x20B20.m = function(_0x20511) {
            0 === _0x20511.indexOf("#") && (_0x20511 = _0x20511.slice(1));
            return document.getElementById(_0x20511)
        };
        _0x20B20.Na = function(_0x20511, _0x20532) {
            _0x20532 = _0x20532 || _0x20511;
            var _0x20553 = Math.floor(_0x20511 % 60),
                _0x20574 = Math.floor(_0x20511 / 60 % 60),
                _0x20595 = Math.floor(_0x20511 / 3600),
                _0x205B6 = Math.floor(_0x20532 / 60 % 60),
                _0x205D7 = Math.floor(_0x20532 / 3600);
            if (isNaN(_0x20511) || Infinity === _0x20511) {
                _0x20595 = _0x20574 = _0x20553 = "-"
            };
            _0x20595 = 0 < _0x20595 || 0 < _0x205D7 ? _0x20595 + ":" : "";
            return _0x20595 + (((_0x20595 || 10 <= _0x205B6) && 10 > _0x20574 ? "0" + _0x20574 : _0x20574) + ":") + (10 > _0x20553 ? "0" + _0x20553 : _0x20553)
        };
        _0x20B20.Id = function() {
            document.body.focus();
            document.onselectstart = _0x209F7(_0x2088C)
        };
        _0x20B20.Xe = function() {
            document.onselectstart = _0x209F7(_0x206BE)
        };
        _0x20B20.trim = function(_0x20511) {
            return (_0x20511 + "").replace(/^\s+|\s+$/g, "")
        };
        _0x20B20.round = function(_0x20511, _0x20532) {
            _0x20532 || (_0x20532 = 0);
            return Math.round(_0x20511 * Math.pow(10, _0x20532)) / Math.pow(10, _0x20532)
        };
        _0x20B20.xa = function(_0x20511, _0x20532) {
            return _0x20511 === _0x20574 && _0x20532 === _0x20574 ? {
                length: 0,
                start: function() {
                    throw Error("This TimeRanges object is empty")
                },
                end: function() {
                    throw Error("This TimeRanges object is empty")
                }
            } : {
                length: 1,
                start: function() {
                    return _0x20511
                },
                end: function() {
                    return _0x20532
                }
            }
        };
        _0x20B20.Ie = function(_0x20511) {
            try {
                var _0x20532 = window.localStorage || _0x2088C;
                _0x20532 && (_0x20532.volume = _0x20511)
            } catch (d) {
                22 == d.code || 1014 == d.code ? _0x20B20.log("LocalStorage Full (vqn)", d) : 18 == d.code ? _0x20B20.log("LocalStorage not allowed (vqn)", d) : _0x20B20.log("LocalStorage Error (vqn)", d)
            }
        };
        _0x20B20.Xd = function(_0x20511) {
            _0x20511.match(/^https?:\/\//) || (_0x20511 = _0x20B20.e("div", {
                innerHTML: "<a href=\"" + _0x20511 + "\">x</a>"
            }).firstChild.href);
            return _0x20511
        };
        _0x20B20.Ae = function(_0x20511) {
            var _0x20532, _0x20553, _0x20574, _0x20595;
            _0x20595 = "protocol hostname port pathname search hash host".split(" ");
            _0x20553 = _0x20B20.e("a", {
                href: _0x20511
            });
            if (_0x20574 = "" === _0x20553.host && "file:" !== _0x20553.protocol) {
                _0x20532 = _0x20B20.e("div"), _0x20532.innerHTML = "<a href=\"" + _0x20511 + "\"></a>", _0x20553 = _0x20532.firstChild, _0x20532.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(_0x20532)
            };
            _0x20511 = {};
            for (var _0x205B6 = 0; _0x205B6 < _0x20595.length; _0x205B6++) {
                _0x20511[_0x20595[_0x205B6]] = _0x20553[_0x20595[_0x205B6]]
            };
            "http:" === _0x20511.protocol && (_0x20511.host = _0x20511.host.replace(/:80$/, ""));
            "https:" === _0x20511.protocol && (_0x20511.host = _0x20511.host.replace(/:443$/, ""));
            _0x20574 && document.body.removeChild(_0x20532);
            return _0x20511
        };
    
        function _0x206DF(_0x20511, _0x20532) {
            var _0x20553, _0x20574;
            _0x20553 = Array.prototype.slice.call(_0x20532);
            _0x20574 = _0x208EF();
            _0x20574 = window.console || {
                log: _0x20574,
                warn: _0x20574,
                error: _0x20574
            };
            _0x20511 ? _0x20553.unshift(_0x20511.toUpperCase() + ":") : _0x20511 = "log";
            _0x20B20.log.history.push(_0x20553);
            _0x20553.unshift("vqn:");
            if (_0x20574[_0x20511].apply) {
                _0x20574[_0x20511].apply(_0x20574, _0x20553)
            } else {
                _0x20574[_0x20511](_0x20553.join(" "))
            }
        }
        _0x20B20.log = function() {
            _0x206DF(_0x207E7, arguments)
        };
        _0x20B20.log.history = [];
        _0x20B20.log.error = function() {
            _0x206DF("error", arguments)
        };
        _0x20B20.log.warn = function() {
            _0x206DF("warn", arguments)
        };
        _0x20B20.Vd = function(_0x20511) {
            var _0x20532, _0x20553;
            _0x20511.getBoundingClientRect && _0x20511.parentNode && (_0x20532 = _0x20511.getBoundingClientRect());
            if (!_0x20532) {
                return {
                    left: 0,
                    top: 0
                }
            };
            _0x20511 = document.documentElement;
            _0x20553 = document.body;
            return {
                left: _0x20B20.round(_0x20532.left + (window.pageXOffset || _0x20553.scrollLeft) - (_0x20511.clientLeft || _0x20553.clientLeft || 0)),
                top: _0x20B20.round(_0x20532.top + (window.pageYOffset || _0x20553.scrollTop) - (_0x20511.clientTop || _0x20553.clientTop || 0))
            }
        };
        _0x20B20.tc = {};
        _0x20B20.tc.forEach = function(_0x20511, _0x20532, _0x20553) {
            if (_0x20B20.i.isArray(_0x20511) && _0x20532 instanceof Function) {
                for (var _0x20574 = 0, _0x20595 = _0x20511.length; _0x20574 < _0x20595; ++_0x20574) {
                    _0x20532.call(_0x20553 || _0x20B20, _0x20511[_0x20574], _0x20574, _0x20511)
                }
            };
            return _0x20511
        };
        _0x20B20.bf = function(_0x20511, _0x20532) {
            var _0x20553, _0x20574, _0x20595, _0x205B6, _0x205D7, _0x205F8, _0x20619;
            "string" === typeof _0x20511 && (_0x20511 = {
                uri: _0x20511
            });
            _0x20C28.Z.Aa({
                method: "GET",
                timeout: 45E3
            }, _0x20511);
            _0x20532 = _0x20532 || _0x208EF();
            _0x205F8 = function() {
                window.clearTimeout(_0x205D7);
                _0x20532(_0x207E7, _0x20574, _0x20574.response || _0x20574.responseText)
            };
            _0x20619 = function(_0x20511) {
                window.clearTimeout(_0x205D7);
                if (!_0x20511 || "string" === typeof _0x20511) {
                    _0x20511 = Error(_0x20511)
                };
                _0x20532(_0x20511, _0x20574)
            };
            _0x20553 = window.XMLHttpRequest;
            "undefined" === typeof _0x20553 && (_0x20553 = function() {
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (_0x20511) {};
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (_0x20532) {};
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP")
                } catch (_0x20553) {};
                throw Error("This browser does not support XMLHttpRequest.")
            });
            _0x20574 = new _0x20553;
            _0x20574.uri = _0x20511.uri;
            _0x20553 = _0x20B20.Ae(_0x20511.uri);
            _0x20595 = window.location;
            _0x20553.protocol + _0x20553.host !== _0x20595.protocol + _0x20595.host && window.XDomainRequest && !("withCredentials" in _0x20574) ? (_0x20574 = new window.XDomainRequest, _0x20574.onload = _0x205F8, _0x20574.onerror = _0x20619, _0x20574.onprogress = _0x208EF(), _0x20574.ontimeout = _0x208EF()) : (_0x205B6 = "file:" == _0x20553.protocol || "file:" == _0x20595.protocol, _0x20574.onreadystatechange = function() {
                if (4 === _0x20574.readyState) {
                    if (_0x20574.Ue) {
                        return _0x20619("timeout")
                    };
                    200 === _0x20574.status || _0x205B6 && 0 === _0x20574.status ? _0x205F8() : _0x20619()
                }
            }, _0x20511.timeout && (_0x205D7 = window.setTimeout(function() {
                4 !== _0x20574.readyState && (_0x20574.Ue = _0x206BE, _0x20574.abort())
            }, _0x20511.timeout)));
            try {
                _0x20574.open(_0x20511.method || "GET", _0x20511.uri, _0x206BE)
            } catch (u) {
                _0x20619(u);
                return
            };
            _0x20511.withCredentials && (_0x20574.withCredentials = _0x206BE);
            _0x20511.responseType && (_0x20574.responseType = _0x20511.responseType);
            try {
                _0x20574.send()
            } catch (A) {
                _0x20619(A)
            }
        };
        _0x20B20.Z = {};
        _0x20B20.Z.Aa = function(_0x20511, _0x20532) {
            var _0x20553, _0x20574, _0x20595;
            _0x20511 = _0x20B20.i.copy(_0x20511);
            for (_0x20553 in _0x20532) {
                _0x20532.hasOwnProperty(_0x20553) && (_0x20574 = _0x20511[_0x20553], _0x20595 = _0x20532[_0x20553], _0x20511[_0x20553] = _0x20B20.i.ib(_0x20574) && _0x20B20.i.ib(_0x20595) ? _0x20B20.Z.Aa(_0x20574, _0x20595) : _0x20532[_0x20553])
            };
            return _0x20511
        };
        _0x20B20.z = _0x208EF();
        _0x20ABD = _0x20B20.z.prototype;
        _0x20ABD.ab = {};
        _0x20ABD.b = function(_0x20511, _0x20532) {
            var _0x20553 = this.addEventListener;
            this.addEventListener = Function.prototype;
            _0x20B20.b(this, _0x20511, _0x20532);
            this.addEventListener = _0x20553
        };
        _0x20ABD.addEventListener = _0x20B20.z.prototype.b;
        _0x20ABD.n = function(_0x20511, _0x20532) {
            _0x20B20.n(this, _0x20511, _0x20532)
        };
        _0x20ABD.removeEventListener = _0x20B20.z.prototype.n;
        _0x20ABD.N = function(_0x20511, _0x20532) {
            _0x20B20.N(this, _0x20511, _0x20532)
        };
        _0x20ABD.o = function(_0x20511) {
            var _0x20532 = _0x20511.type || _0x20511;
            "string" === typeof _0x20511 && (_0x20511 = {
                type: _0x20532
            });
            _0x20511 = _0x20B20.Nb(_0x20511);
            if (this.ab[_0x20532] && this["on" + _0x20532]) {
                this["on" + _0x20532](_0x20511)
            };
            _0x20B20.o(this, _0x20511)
        };
        _0x20ABD.dispatchEvent = _0x20B20.z.prototype.o;
        _0x20B20.a = _0x20B20.Ga.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                this.d = _0x20511;
                this.q = _0x20B20.i.copy(this.q);
                _0x20532 = this.options(_0x20532);
                this.Qa = _0x20532.id || _0x20532.el && _0x20532.el.id;
                this.Qa || (this.Qa = (_0x20511.id && _0x20511.id() || "no_player") + "_component_" + _0x20B20.s++);
                this.pe = _0x20532.name || _0x207E7;
                this.c = _0x20532.el || this.e();
                this.R = [];
                this.cb = {};
                this.eb = {};
                this.Kc();
                this.I(_0x20553);
                if (_0x20532.$c !== _0x2088C) {
                    var _0x20574, _0x20595;
                    this.k().reportUserActivity && (_0x20574 = _0x20B20.bind(this.k(), this.k().reportUserActivity), this.b("touchstart", function() {
                        _0x20574();
                        this.clearInterval(_0x20595);
                        _0x20595 = this.setInterval(_0x20574, 250)
                    }), _0x20511 = function() {
                        _0x20574();
                        this.clearInterval(_0x20595)
                    }, this.b("touchmove", _0x20574), this.b("touchend", _0x20511), this.b("touchcancel", _0x20511))
                }
            }
        });
        _0x20ABD = _0x20B20.a.prototype;
        _0x20ABD.dispose = function() {
            this.o({
                type: "dispose",
                bubbles: _0x2088C
            });
            if (this.R) {
                for (var _0x20511 = this.R.length - 1; 0 <= _0x20511; _0x20511--) {
                    this.R[_0x20511].dispose && this.R[_0x20511].dispose()
                }
            };
            this.eb = this.cb = this.R = _0x207E7;
            this.n();
            this.c.parentNode && this.c.parentNode.removeChild(this.c);
            _0x20B20.Zc(this.c);
            this.c = _0x207E7
        };
        _0x20ABD.d = _0x206BE;
        _0x20ABD.k = _0x20952("d");
        _0x20ABD.options = function(_0x20511) {
            return _0x20511 === _0x20574 ? this.q : this.q = _0x20B20.Z.Aa(this.q, _0x20511)
        };
        _0x20ABD.e = function(_0x20511, _0x20532) {
            return _0x20B20.e(_0x20511, _0x20532)
        };
        _0x20ABD.v = function(_0x20511) {
            var _0x20532 = this.d.language(),
                _0x20553 = this.d.languages();
            return _0x20553 && _0x20553[_0x20532] && _0x20553[_0x20532][_0x20511] ? _0x20553[_0x20532][_0x20511] : _0x20511
        };
        _0x20ABD.m = _0x20952("c");
        _0x20ABD.wa = function() {
            return this.B || this.c
        };
        _0x20ABD.id = _0x20952("Qa");
        _0x20ABD.name = _0x20952("pe");
        _0x20ABD.children = _0x20952("R");
        _0x20ABD.Yd = function(_0x20511) {
            return this.cb[_0x20511]
        };
        _0x20ABD.da = function(_0x20511) {
            return this.eb[_0x20511]
        };
        _0x20ABD.aa = function(_0x20511, _0x20532) {
            var _0x20553, _0x20574;
            "string" === typeof _0x20511 ? (_0x20574 = _0x20511, _0x20532 = _0x20532 || {}, _0x20553 = _0x20532.componentClass || _0x20B20.va(_0x20574), _0x20532.name = _0x20574, _0x20553 = new window.vqn[_0x20553](this.d || this, _0x20532)) : _0x20553 = _0x20511;
            this.R.push(_0x20553);
            "function" === typeof _0x20553.id && (this.cb[_0x20553.id()] = _0x20553);
            (_0x20574 = _0x20574 || _0x20553.name && _0x20553.name()) && (this.eb[_0x20574] = _0x20553);
            "function" === typeof _0x20553.el && _0x20553.el() && this.wa().appendChild(_0x20553.el());
            return _0x20553
        };
        _0x20ABD.removeChild = function(_0x20511) {
            "string" === typeof _0x20511 && (_0x20511 = this.da(_0x20511));
            if (_0x20511 && this.R) {
                for (var _0x20532 = _0x2088C, _0x20553 = this.R.length - 1; 0 <= _0x20553; _0x20553--) {
                    if (this.R[_0x20553] === _0x20511) {
                        _0x20532 = _0x206BE;
                        this.R.splice(_0x20553, 1);
                        break
                    }
                };
                _0x20532 && (this.cb[_0x20511.id()] = _0x207E7, this.eb[_0x20511.name()] = _0x207E7, (_0x20532 = _0x20511.m()) && _0x20532.parentNode === this.wa() && this.wa().removeChild(_0x20511.m()))
            }
        };
        _0x20ABD.Kc = function() {
            var _0x20511, _0x20532, _0x20553, _0x20595, _0x205B6, _0x205D7;
            _0x20511 = this;
            _0x20532 = _0x20511.options();
            if (_0x20553 = _0x20532.children) {
                if (_0x205D7 = function(_0x20553, _0x20595) {
                        _0x20532[_0x20553] !== _0x20574 && (_0x20595 = _0x20532[_0x20553]);
                        _0x20595 !== _0x2088C && (_0x20511[_0x20553] = _0x20511.aa(_0x20553, _0x20595))
                    }, _0x20B20.i.isArray(_0x20553)) {
                    for (var _0x205F8 = 0; _0x205F8 < _0x20553.length; _0x205F8++) {
                        _0x20595 = _0x20553[_0x205F8], "string" == typeof _0x20595 ? (_0x205B6 = _0x20595, _0x20595 = {}) : _0x205B6 = _0x20595.name, _0x205D7(_0x205B6, _0x20595)
                    }
                } else {
                    _0x20B20.i.ca(_0x20553, _0x205D7)
                }
            }
        };
        _0x20ABD.T = _0x209F7("");
        _0x20ABD.b = function(_0x20511, _0x20532, _0x20553) {
            var _0x20574, _0x20595, _0x205B6;
            "string" === typeof _0x20511 || _0x20B20.i.isArray(_0x20511) ? _0x20B20.b(this.c, _0x20511, _0x20B20.bind(this, _0x20532)) : (_0x20574 = _0x20B20.bind(this, _0x20553), _0x205B6 = this, _0x20595 = function() {
                _0x205B6.n(_0x20511, _0x20532, _0x20574)
            }, _0x20595.s = _0x20574.s, this.b("dispose", _0x20595), _0x20553 = function() {
                _0x205B6.n("dispose", _0x20595)
            }, _0x20553.s = _0x20574.s, _0x20511.nodeName ? (_0x20B20.b(_0x20511, _0x20532, _0x20574), _0x20B20.b(_0x20511, "dispose", _0x20553)) : "function" === typeof _0x20511.b && (_0x20511.b(_0x20532, _0x20574), _0x20511.b("dispose", _0x20553)));
            return this
        };
        _0x20ABD.n = function(_0x20511, _0x20532, _0x20553) {
            !_0x20511 || "string" === typeof _0x20511 || _0x20B20.i.isArray(_0x20511) ? _0x20B20.n(this.c, _0x20511, _0x20532) : (_0x20553 = _0x20B20.bind(this, _0x20553), this.n("dispose", _0x20553), _0x20511.nodeName ? (_0x20B20.n(_0x20511, _0x20532, _0x20553), _0x20B20.n(_0x20511, "dispose", _0x20553)) : (_0x20511.n(_0x20532, _0x20553), _0x20511.n("dispose", _0x20553)));
            return this
        };
        _0x20ABD.N = function(_0x20511, _0x20532, _0x20553) {
            var _0x20574, _0x20595, _0x205B6;
            "string" === typeof _0x20511 || _0x20B20.i.isArray(_0x20511) ? _0x20B20.N(this.c, _0x20511, _0x20B20.bind(this, _0x20532)) : (_0x20574 = _0x20B20.bind(this, _0x20553), _0x20595 = this, _0x205B6 = function() {
                _0x20595.n(_0x20511, _0x20532, _0x205B6);
                _0x20574.apply(this, arguments)
            }, _0x205B6.s = _0x20574.s, this.b(_0x20511, _0x20532, _0x205B6));
            return this
        };
        _0x20ABD.o = function(_0x20511) {
            _0x20B20.o(this.c, _0x20511);
            return this
        };
        _0x20ABD.I = function(_0x20511) {
            _0x20511 && (this.ya ? _0x20511.call(this) : (this.mb === _0x20574 && (this.mb = []), this.mb.push(_0x20511)));
            return this
        };
        _0x20ABD.Va = function() {
            this.ya = _0x206BE;
            var _0x20511 = this.mb;
            this.mb = [];
            if (_0x20511 && 0 < _0x20511.length) {
                for (var _0x20532 = 0, _0x20553 = _0x20511.length; _0x20532 < _0x20553; _0x20532++) {
                    _0x20511[_0x20532].call(this)
                };
                this.o("ready")
            }
        };
        _0x20ABD.Pa = function(_0x20511) {
            return _0x20B20.Pa(this.c, _0x20511)
        };
        _0x20ABD.p = function(_0x20511) {
            _0x20B20.p(this.c, _0x20511);
            return this
        };
        _0x20ABD.r = function(_0x20511) {
            _0x20B20.r(this.c, _0x20511);
            return this
        };
        _0x20ABD.show = function() {
            this.r("vjs-hidden");
            return this
        };
        _0x20ABD.W = function() {
            this.p("vjs-hidden");
            return this
        };
    
        function _0x20721(_0x20511) {
            _0x20511.r("vjs-lock-showing")
        }
        _0x20ABD.width = function(_0x20511, _0x20532) {
            return _0x20619(this, "width", _0x20511, _0x20532)
        };
        _0x20ABD.height = function(_0x20511, _0x20532) {
            return _0x20619(this, "height", _0x20511, _0x20532)
        };
        _0x20ABD.Qd = function(_0x20511, _0x20532) {
            return this.width(_0x20511, _0x206BE).height(_0x20532)
        };
    
        function _0x20619(_0x20511, _0x20532, _0x20553, _0x20595) {
            if (_0x20553 !== _0x20574) {
                if (_0x20553 === _0x207E7 || _0x20B20.ge(_0x20553)) {
                    _0x20553 = 0
                };
                _0x20511.c.style[_0x20532] = -1 !== ("" + _0x20553).indexOf("%") || -1 !== ("" + _0x20553).indexOf("px") ? _0x20553 : "auto" === _0x20553 ? "" : _0x20553 + "px";
                _0x20595 || _0x20511.o("resize");
                return _0x20511
            };
            if (!_0x20511.c) {
                return 0
            };
            _0x20553 = _0x20511.c.style[_0x20532];
            _0x20595 = _0x20553.indexOf("px");
            return -1 !== _0x20595 ? parseInt(_0x20553.slice(0, _0x20595), 10) : parseInt(_0x20511.c["offset" + _0x20B20.va(_0x20532)], 10)
        }
    
        function _0x2065B(_0x20511) {
            var _0x20532, _0x20553, _0x20574, _0x20595, _0x205B6, _0x205D7, _0x205F8, _0x20619;
            _0x20532 = 0;
            _0x20553 = _0x207E7;
            _0x20511.b("touchstart", function(_0x20511) {
                1 === _0x20511.touches.length && (_0x20553 = _0x20B20.i.copy(_0x20511.touches[0]), _0x20532 = (new Date).getTime(), _0x20595 = _0x206BE)
            });
            _0x20511.b("touchmove", function(_0x20511) {
                1 < _0x20511.touches.length ? _0x20595 = _0x2088C : _0x20553 && (_0x205D7 = _0x20511.touches[0].pageX - _0x20553.pageX, _0x205F8 = _0x20511.touches[0].pageY - _0x20553.pageY, _0x20619 = Math.sqrt(_0x205D7 * _0x205D7 + _0x205F8 * _0x205F8), 10 < _0x20619 && (_0x20595 = _0x2088C))
            });
            _0x205B6 = function() {
                _0x20595 = _0x2088C
            };
            _0x20511.b("touchleave", _0x205B6);
            _0x20511.b("touchcancel", _0x205B6);
            _0x20511.b("touchend", function(_0x20511) {
                _0x20553 = _0x207E7;
                _0x20595 === _0x206BE && (_0x20574 = (new Date).getTime() - _0x20532, 200 > _0x20574 && (_0x20511.preventDefault(), this.o("tap")))
            })
        }
        _0x20ABD.setTimeout = function(_0x20511, _0x20532) {
            function _0x20553() {
                this.clearTimeout(_0x20574)
            }
            _0x20511 = _0x20B20.bind(this, _0x20511);
            var _0x20574 = setTimeout(_0x20511, _0x20532);
            _0x20553.s = "vjs-timeout-" + _0x20574;
            this.b("dispose", _0x20553);
            return _0x20574
        };
        _0x20ABD.clearTimeout = function(_0x20511) {
            function _0x20532() {}
            clearTimeout(_0x20511);
            _0x20532.s = "vjs-timeout-" + _0x20511;
            this.n("dispose", _0x20532);
            return _0x20511
        };
        _0x20ABD.setInterval = function(_0x20511, _0x20532) {
            function _0x20553() {
                this.clearInterval(_0x20574)
            }
            _0x20511 = _0x20B20.bind(this, _0x20511);
            var _0x20574 = setInterval(_0x20511, _0x20532);
            _0x20553.s = "vjs-interval-" + _0x20574;
            this.b("dispose", _0x20553);
            return _0x20574
        };
        _0x20ABD.clearInterval = function(_0x20511) {
            function _0x20532() {}
            clearInterval(_0x20511);
            _0x20532.s = "vjs-interval-" + _0x20511;
            this.n("dispose", _0x20532);
            return _0x20511
        };
        _0x20B20.w = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                _0x2065B(this);
                this.b("tap", this.u);
                this.b("click", this.u);
                this.b("focus", this.kb);
                this.b("blur", this.jb)
            }
        });
        _0x20ABD = _0x20B20.w.prototype;
        _0x20ABD.e = function(_0x20511, _0x20532) {
            var _0x20553;
            _0x20532 = _0x20B20.i.D({
                className: this.T(),
                role: "button",
                "aria-live": "polite",
                tabIndex: 0
            }, _0x20532);
            _0x20553 = _0x20B20.a.prototype.e.call(this, _0x20511, _0x20532);
            _0x20532.innerHTML || (this.B = _0x20B20.e("div", {
                className: "vjs-control-content"
            }), this.Ib = _0x20B20.e("span", {
                className: "vjs-control-text",
                innerHTML: this.v(this.ta) || "Need Text"
            }), this.B.appendChild(this.Ib), _0x20553.appendChild(this.B));
            return _0x20553
        };
        _0x20ABD.T = function() {
            return "vjs-control " + _0x20B20.a.prototype.T.call(this)
        };
        _0x20ABD.u = _0x208EF();
        _0x20ABD.kb = function() {
            _0x20B20.b(document, "keydown", _0x20B20.bind(this, this.ka))
        };
        _0x20ABD.ka = function(_0x20511) {
            if (32 == _0x20511.which || 13 == _0x20511.which) {
                _0x20511.preventDefault(), this.u()
            }
        };
        _0x20ABD.jb = function() {
            _0x20B20.n(document, "keydown", _0x20B20.bind(this, this.ka))
        };
        _0x20B20.S = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                this.Hd = this.da(this.q.barName);
                this.handle = this.da(this.q.handleName);
                this.b("mousedown", this.lb);
                this.b("touchstart", this.lb);
                this.b("focus", this.kb);
                this.b("blur", this.jb);
                this.b("click", this.u);
                this.b(_0x20511, "controlsvisible", this.update);
                this.b(_0x20511, this.Uc, this.update)
            }
        });
        _0x20ABD = _0x20B20.S.prototype;
        _0x20ABD.e = function(_0x20511, _0x20532) {
            _0x20532 = _0x20532 || {};
            _0x20532.className += " vjs-slider";
            _0x20532 = _0x20B20.i.D({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, _0x20532);
            return _0x20B20.a.prototype.e.call(this, _0x20511, _0x20532)
        };
        _0x20ABD.lb = function(_0x20511) {
            _0x20511.preventDefault();
            _0x20B20.Id();
            this.p("vjs-sliding");
            this.b(document, "mousemove", this.la);
            this.b(document, "mouseup", this.Ba);
            this.b(document, "touchmove", this.la);
            this.b(document, "touchend", this.Ba);
            this.la(_0x20511)
        };
        _0x20ABD.la = _0x208EF();
        _0x20ABD.Ba = function() {
            _0x20B20.Xe();
            this.r("vjs-sliding");
            this.n(document, "mousemove", this.la);
            this.n(document, "mouseup", this.Ba);
            this.n(document, "touchmove", this.la);
            this.n(document, "touchend", this.Ba);
            this.update()
        };
        _0x20ABD.update = function() {
            if (this.c) {
                var _0x20511, _0x20532 = this.Qb(),
                    _0x20553 = this.handle,
                    _0x20574 = this.Hd;
                if ("number" !== typeof _0x20532 || _0x20532 !== _0x20532 || 0 > _0x20532 || Infinity === _0x20532) {
                    _0x20532 = 0
                };
                _0x20511 = _0x20532;
                if (_0x20553) {
                    _0x20511 = this.c.offsetWidth;
                    var _0x20595 = _0x20553.m().offsetWidth;
                    _0x20511 = _0x20595 ? _0x20595 / _0x20511 : 0;
                    _0x20532 *= 1 - _0x20511;
                    _0x20511 = _0x20532 + _0x20511 / 2;
                    _0x20553.m().style.left = _0x20B20.round(100 * _0x20532, 2) + "%"
                };
                _0x20574 && (_0x20574.m().style.width = _0x20B20.round(100 * _0x20511, 2) + "%")
            }
        };
    
        function _0x2069D(_0x20511, _0x20532) {
            var _0x20553, _0x20574, _0x20595, _0x205B6;
            _0x20553 = _0x20511.c;
            _0x20574 = _0x20B20.Vd(_0x20553);
            _0x205B6 = _0x20595 = _0x20553.offsetWidth;
            _0x20553 = _0x20511.handle;
            if (_0x20511.options().vertical) {
                return _0x205B6 = _0x20574.top, _0x20574 = _0x20532.changedTouches ? _0x20532.changedTouches[0].pageY : _0x20532.pageY, _0x20553 && (_0x20553 = _0x20553.m().offsetHeight, _0x205B6 += _0x20553 / 2, _0x20595 -= _0x20553), Math.max(0, Math.min(1, (_0x205B6 - _0x20574 + _0x20595) / _0x20595))
            };
            _0x20595 = _0x20574.left;
            _0x20574 = _0x20532.changedTouches ? _0x20532.changedTouches[0].pageX : _0x20532.pageX;
            _0x20553 && (_0x20553 = _0x20553.m().offsetWidth, _0x20595 += _0x20553 / 2, _0x205B6 -= _0x20553);
            return Math.max(0, Math.min(1, (_0x20574 - _0x20595) / _0x205B6))
        }
        _0x20ABD.kb = function() {
            this.b(document, "keydown", this.ka)
        };
        _0x20ABD.ka = function(_0x20511) {
            if (37 == _0x20511.which || 40 == _0x20511.which) {
                _0x20511.preventDefault(), this.fd()
            } else {
                if (38 == _0x20511.which || 39 == _0x20511.which) {
                    _0x20511.preventDefault(), this.gd()
                }
            }
        };
        _0x20ABD.jb = function() {
            this.n(document, "keydown", this.ka)
        };
        _0x20ABD.u = function(_0x20511) {
            _0x20511.stopImmediatePropagation();
            _0x20511.preventDefault()
        };
        _0x20B20.ga = _0x20B20.a.extend();
        _0x20B20.ga.prototype.defaultValue = 0;
        _0x20B20.ga.prototype.e = function(_0x20511, _0x20532) {
            _0x20532 = _0x20532 || {};
            _0x20532.className += " vjs-slider-handle";
            _0x20532 = _0x20B20.i.D({
                innerHTML: "<span class=\"vjs-control-text\">" + this.defaultValue + "</span>"
            }, _0x20532);
            return _0x20B20.a.prototype.e.call(this, "div", _0x20532)
        };
        _0x20B20.qa = _0x20B20.a.extend();
    
        function _0x20700(_0x20511, _0x20532) {
            _0x20511.aa(_0x20532);
            _0x20532.b("click", _0x20B20.bind(_0x20511, function() {
                _0x20721(this)
            }))
        }
        _0x20B20.qa.prototype.e = function() {
            var _0x20511 = this.options().zc || "ul";
            this.B = _0x20B20.e(_0x20511, {
                className: "vjs-menu-content"
            });
            _0x20511 = _0x20B20.a.prototype.e.call(this, "div", {
                append: this.B,
                className: "vjs-menu"
            });
            _0x20511.appendChild(this.B);
            _0x20B20.b(_0x20511, "click", function(_0x20511) {
                _0x20511.preventDefault();
                _0x20511.stopImmediatePropagation()
            });
            return _0x20511
        };
        _0x20B20.M = _0x20B20.w.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.w.call(this, _0x20511, _0x20532);
                this.selected(_0x20532.selected)
            }
        });
        _0x20B20.M.prototype.e = function(_0x20511, _0x20532) {
            return _0x20B20.w.prototype.e.call(this, "li", _0x20B20.i.D({
                className: "vjs-menu-item",
                innerHTML: this.v(this.q.label)
            }, _0x20532))
        };
        _0x20B20.M.prototype.u = function() {
            this.selected(_0x206BE)
        };
        _0x20B20.M.prototype.selected = function(_0x20511) {
            _0x20511 ? (this.p("vjs-selected"), this.c.setAttribute("aria-selected", _0x206BE)) : (this.r("vjs-selected"), this.c.setAttribute("aria-selected", _0x2088C))
        };
        _0x20B20.O = _0x20B20.w.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.w.call(this, _0x20511, _0x20532);
                this.update();
                this.b("keydown", this.ka);
                this.c.setAttribute("aria-haspopup", _0x206BE);
                this.c.setAttribute("role", "button")
            }
        });
        _0x20ABD = _0x20B20.O.prototype;
        _0x20ABD.update = function() {
            var _0x20511 = this.La();
            this.za && this.removeChild(this.za);
            this.za = _0x20511;
            this.aa(_0x20511);
            this.H && 0 === this.H.length ? this.W() : this.H && 1 < this.H.length && this.show()
        };
        _0x20ABD.Ja = _0x2088C;
        _0x20ABD.La = function() {
            var _0x20511 = new _0x20B20.qa(this.d);
            this.options().title && _0x20511.wa().appendChild(_0x20B20.e("li", {
                className: "vjs-menu-title",
                innerHTML: _0x20B20.va(this.options().title),
                Se: -1
            }));
            if (this.H = this.createItems()) {
                for (var _0x20532 = 0; _0x20532 < this.H.length; _0x20532++) {
                    _0x20700(_0x20511, this.H[_0x20532])
                }
            };
            return _0x20511
        };
        _0x20ABD.Ka = _0x208EF();
        _0x20ABD.T = function() {
            return this.className + " vjs-menu-button " + _0x20B20.w.prototype.T.call(this)
        };
        _0x20ABD.kb = _0x208EF();
        _0x20ABD.jb = _0x208EF();
        _0x20ABD.u = function() {
            this.N("mouseout", _0x20B20.bind(this, function() {
                _0x20721(this.za);
                this.c.blur()
            }));
            this.Ja ? _0x20763(this) : _0x20742(this)
        };
        _0x20ABD.ka = function(_0x20511) {
            32 == _0x20511.which || 13 == _0x20511.which ? (this.Ja ? _0x20763(this) : _0x20742(this), _0x20511.preventDefault()) : 27 == _0x20511.which && (this.Ja && _0x20763(this), _0x20511.preventDefault())
        };
    
        function _0x20742(_0x20511) {
            _0x20511.Ja = _0x206BE;
            _0x20511.za.p("vjs-lock-showing");
            _0x20511.c.setAttribute("aria-pressed", _0x206BE);
            _0x20511.H && 0 < _0x20511.H.length && _0x20511.H[0].m().focus()
        }
    
        function _0x20763(_0x20511) {
            _0x20511.Ja = _0x2088C;
            _0x20721(_0x20511.za);
            _0x20511.c.setAttribute("aria-pressed", _0x2088C)
        }
        _0x20B20.J = function(_0x20511) {
            "number" === typeof _0x20511 ? this.code = _0x20511 : "string" === typeof _0x20511 ? this.message = _0x20511 : "object" === typeof _0x20511 && _0x20B20.i.D(this, _0x20511);
            this.message || (this.message = _0x20B20.J.Pd[this.code] || "")
        };
        _0x20B20.J.prototype.code = 0;
        _0x20B20.J.prototype.message = "";
        _0x20B20.J.prototype.status = _0x207E7;
        _0x20B20.J.gb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
        _0x20B20.J.Pd = {
            1: "You aborted the video playback",
            2: "A network error caused the video download to fail part-way.",
            3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
            4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
            5: "The video is encrypted and we do not have the keys to decrypt it."
        };
        for (var _0x207A5 = 0; _0x207A5 < _0x20B20.J.gb.length; _0x207A5++) {
            _0x20B20.J[_0x20B20.J.gb[_0x207A5]] = _0x207A5, _0x20B20.J.prototype[_0x20B20.J.gb[_0x207A5]] = _0x207A5
        };
        var _0x20808, _0x20784, _0x2084A, _0x208AD;
        _0x20808 = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
        _0x20784 = _0x20808[0];
        for (_0x208AD = 0; _0x208AD < _0x20808.length; _0x208AD++) {
            if (_0x20808[_0x208AD][1] in document) {
                _0x2084A = _0x20808[_0x208AD];
                break
            }
        };
        if (_0x2084A) {
            _0x20B20.bb.Pb = {};
            for (_0x208AD = 0; _0x208AD < _0x2084A.length; _0x208AD++) {
                _0x20B20.bb.Pb[_0x20784[_0x208AD]] = _0x2084A[_0x208AD]
            }
        };
        _0x20B20.Player = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                this.L = _0x20511;
                _0x20511.id = _0x20511.id || "vjs_video_" + _0x20B20.s++;
                this.Te = _0x20511 && _0x20B20.Oa(_0x20511);
                _0x20532 = _0x20B20.i.D(_0x207C6(_0x20511), _0x20532);
                this.Pc = _0x20532.language || _0x20B20.options.language;
                this.je = _0x20532.languages || _0x20B20.options.languages;
                this.K = {};
                this.Vc = _0x20532.poster || "";
                this.Jb = !!_0x20532.controls;
                _0x20511.controls = _0x2088C;
                _0x20532.$c = _0x2088C;
                _0x20829(this, "audio" === this.L.nodeName.toLowerCase());
                _0x20B20.a.call(this, this, _0x20532, _0x20553);
                this.controls() ? this.p("vjs-controls-enabled") : this.p("vjs-controls-disabled");
                _0x20829(this) && this.p("vjs-audio");
                _0x20B20.Ca[this.Qa] = this;
                _0x20532.plugins && _0x20B20.i.ca(_0x20532.plugins, function(_BIGARRAY, _0x20511) {
                    this[_BIGARRAY](_0x20511)
                }, this);
                var _0x20574, _0x20595, _0x205B6, _0x205D7, _0x205F8;
                _0x20574 = _0x20B20.bind(this, this.reportUserActivity);
                this.b("mousedown", function() {
                    _0x20574();
                    this.clearInterval(_0x20595);
                    _0x20595 = this.setInterval(_0x20574, 250)
                });
                this.b("mousemove", function(_0x20511) {
                    if (_0x20511.screenX != _0x205D7 || _0x20511.screenY != _0x205F8) {
                        _0x205D7 = _0x20511.screenX, _0x205F8 = _0x20511.screenY, _0x20574()
                    }
                });
                this.b("mouseup", function() {
                    _0x20574();
                    this.clearInterval(_0x20595)
                });
                this.b("keydown", _0x20574);
                this.b("keyup", _0x20574);
                this.setInterval(function() {
                    if (this.Fa) {
                        this.Fa = _0x2088C;
                        this.userActive(_0x206BE);
                        this.clearTimeout(_0x205B6);
                        var _0x20511 = this.options().inactivityTimeout;
                        0 < _0x20511 && (_0x205B6 = this.setTimeout(function() {
                            this.Fa || this.userActive(_0x2088C)
                        }, _0x20511))
                    }
                }, 250)
            }
        });
        _0x20ABD = _0x20B20.Player.prototype;
        _0x20ABD.language = function(_0x20511) {
            if (_0x20511 === _0x20574) {
                return this.Pc
            };
            this.Pc = _0x20511;
            return this
        };
        _0x20ABD.languages = _0x20952("je");
        _0x20ABD.q = _0x20B20.options;
        _0x20ABD.dispose = function() {
            this.o("dispose");
            this.n("dispose");
            _0x20B20.Ca[this.Qa] = _0x207E7;
            this.L && this.L.player && (this.L.player = _0x207E7);
            this.c && this.c.player && (this.c.player = _0x207E7);
            this.h && this.h.dispose();
            _0x20B20.a.prototype.dispose.call(this)
        };
    
        function _0x207C6(_0x20511) {
            var _0x20532, _0x20553, _0x20574 = {
                sources: [],
                tracks: []
            };
            _0x20532 = _0x20B20.Oa(_0x20511);
            _0x20553 = _0x20532.data-setup;
            _0x20553 !== _0x207E7 && _0x20B20.i.D(_0x20532, _0x20B20.JSON.parse(_0x20553 || "{}"));
            _0x20B20.i.D(_0x20574, _0x20532);
            if (_0x20511.hasChildNodes()) {
                var _0x20595, _0x205B6;
                _0x20511 = _0x20511.childNodes;
                _0x20595 = 0;
                for (_0x205B6 = _0x20511.length; _0x20595 < _0x205B6; _0x20595++) {
                    _0x20532 = _0x20511[_0x20595], _0x20553 = _0x20532.nodeName.toLowerCase(), "source" === _0x20553 ? _0x20574.sources.push(_0x20B20.Oa(_0x20532)) : "track" === _0x20553 && _0x20574.tracks.push(_0x20B20.Oa(_0x20532))
                }
            };
            return _0x20574
        }
        _0x20ABD.e = function() {
            var _0x20511 = this.c = _0x20B20.a.prototype.e.call(this, "div"),
                _0x20532 = this.L,
                _0x20553;
            _0x20532.removeAttribute("width");
            _0x20532.removeAttribute("height");
            _0x20553 = _0x20B20.Oa(_0x20532);
            _0x20B20.i.ca(_0x20553, function(_0x20532) {
                "class" == _0x20532 ? _0x20511.className = _0x20553[_0x20532] : _0x20511.setAttribute(_0x20532, _0x20553[_0x20532])
            });
            _0x20532.id += "_html5_api";
            _0x20532.className = "vjs-tech";
            _0x20532.player = _0x20511.player = this;
            this.p("vjs-paused");
            this.width(this.q.width, _0x206BE);
            this.height(this.q.height, _0x206BE);
            _0x20532.ce = _0x20532.networkState;
            _0x20532.parentNode && _0x20532.parentNode.insertBefore(_0x20511, _0x20532);
            _0x20B20.Rb(_0x20532, _0x20511);
            this.c = _0x20511;
            this.b("loadstart", this.te);
            this.b("waiting", this.ze);
            this.b(["canplay", "canplaythrough", "playing", "ended"], this.ye);
            this.b("seeking", this.we);
            this.b("seeked", this.ve);
            this.b("ended", this.qe);
            this.b("play", this.Xb);
            this.b("firstplay", this.re);
            this.b("pause", this.Wb);
            this.b("progress", this.ue);
            this.b("durationchange", this.Sc);
            this.b("fullscreenchange", this.se);
            return _0x20511
        };
    
        function _0x2086B(_0x20511, _0x20532, _0x20553) {
            _0x20511.h && (_0x20511.ya = _0x2088C, _0x20511.h.dispose(), _0x20511.h = _0x2088C);
            "Html5" !== _0x20532 && _0x20511.L && (_0x20B20.f.Kb(_0x20511.L), _0x20511.L = _0x207E7);
            _0x20511.Ta = _0x20532;
            _0x20511.ya = _0x2088C;
            var _0x20574 = _0x20B20.i.D({
                source: _0x20553,
                parentEl: _0x20511.c
            }, _0x20511.q[_0x20532.toLowerCase()]);
            _0x20553 && (_0x20511.Cc = _0x20553.type, _0x20553.src == _0x20511.K.src && 0 < _0x20511.K.currentTime && (_0x20574.startTime = _0x20511.K.currentTime), _0x20511.K.src = _0x20553.src);
            _0x20511.h = new window.vqn[_0x20532](_0x20511, _0x20574);
            _0x20511.h.I(function() {
                this.d.Va()
            })
        }
        _0x20ABD.te = function() {
            this.r("vjs-ended");
            this.error(_0x207E7);
            this.paused() ? _0x208CE(this, _0x2088C) : this.o("firstplay")
        };
        _0x20ABD.Jc = _0x2088C;
    
        function _0x208CE(_0x20511, _0x20532) {
            _0x20532 !== _0x20574 && _0x20511.Jc !== _0x20532 && ((_0x20511.Jc = _0x20532) ? (_0x20511.p("vjs-has-started"), _0x20511.o("firstplay")) : _0x20511.r("vjs-has-started"))
        }
        _0x20ABD.Xb = function() {
            this.r("vjs-ended");
            this.r("vjs-paused");
            this.p("vjs-playing");
            _0x208CE(this, _0x206BE)
        };
        _0x20ABD.ze = function() {
            this.p("vjs-waiting")
        };
        _0x20ABD.ye = function() {
            this.r("vjs-waiting")
        };
        _0x20ABD.we = function() {
            this.p("vjs-seeking")
        };
        _0x20ABD.ve = function() {
            this.r("vjs-seeking")
        };
        _0x20ABD.re = function() {
            this.q.starttime && this.currentTime(this.q.starttime);
            this.p("vjs-has-started")
        };
        _0x20ABD.Wb = function() {
            this.r("vjs-playing");
            this.p("vjs-paused")
        };
        _0x20ABD.ue = function() {
            1 == this.bufferedPercent() && this.o("loadedalldata")
        };
        _0x20ABD.qe = function() {
            this.p("vjs-ended");
            this.q.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
        };
        _0x20ABD.Sc = function() {
            var _0x20511 = _0x20910(this, "duration");
            _0x20511 && (0 > _0x20511 && (_0x20511 = Infinity), this.duration(_0x20511), Infinity === _0x20511 ? this.p("vjs-live") : this.r("vjs-live"))
        };
        _0x20ABD.se = function() {
            this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
        };
    
        function _0x20973(_0x20511, _0x20532, _0x20553) {
            if (_0x20511.h && !_0x20511.h.ya) {
                _0x20511.h.I(function() {
                    this[_0x20532](_0x20553)
                })
            } else {
                try {
                    _0x20511.h[_0x20532](_0x20553)
                } catch (e) {
                    throw _0x20B20.log(e), e
                }
            }
        }
    
        function _0x20910(_0x20511, _0x20532) {
            if (_0x20511.h && _0x20511.h.ya) {
                try {
                    return _0x20511.h[_0x20532]()
                } catch (d) {
                    throw _0x20511.h[_0x20532] === _0x20574 ? _0x20B20.log("Video.js: " + _0x20532 + " method not defined for " + _0x20511.Ta + " playback technology.", d) : "TypeError" == d.name ? (_0x20B20.log("Video.js: " + _0x20532 + " unavailable on " + _0x20511.Ta + " playback technology element.", d), _0x20511.h.ya = _0x2088C) : _0x20B20.log(d), d
                }
            }
        }
        _0x20ABD.play = function() {
            _0x20973(this, "play");
            return this
        };
        _0x20ABD.pause = function() {
            _0x20973(this, "pause");
            return this
        };
        _0x20ABD.paused = function() {
            return _0x20910(this, "paused") === _0x2088C ? _0x2088C : _0x206BE
        };
        _0x20ABD.currentTime = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20973(this, "setCurrentTime", _0x20511), this) : this.K.currentTime = _0x20910(this, "currentTime") || 0
        };
        _0x20ABD.duration = function(_0x20511) {
            if (_0x20511 !== _0x20574) {
                return this.K.duration = parseFloat(_0x20511), this
            };
            this.K.duration === _0x20574 && this.Sc();
            return this.K.duration || 0
        };
        _0x20ABD.remainingTime = function() {
            return this.duration() - this.currentTime()
        };
        _0x20ABD.buffered = function() {
            var _0x20511 = _0x20910(this, "buffered");
            if (!_0x20511 || !_0x20511.length) {
                _0x20511 = _0x20B20.xa(0, 0)
            };
            return _0x20511
        };
        _0x20ABD.bufferedPercent = function() {
            var _0x20511 = this.duration(),
                _0x20532 = this.buffered(),
                _0x20553 = 0,
                _0x20574, _0x20595;
            if (!_0x20511) {
                return 0
            };
            for (var _0x205B6 = 0; _0x205B6 < _0x20532.length; _0x205B6++) {
                _0x20574 = _0x20532.start(_0x205B6), _0x20595 = _0x20532.end(_0x205B6), _0x20595 > _0x20511 && (_0x20595 = _0x20511), _0x20553 += _0x20595 - _0x20574
            };
            return _0x20553 / _0x20511
        };
        _0x20ABD.volume = function(_0x20511) {
            if (_0x20511 !== _0x20574) {
                return _0x20511 = Math.max(0, Math.min(1, parseFloat(_0x20511))), this.K.volume = _0x20511, _0x20973(this, "setVolume", _0x20511), _0x20B20.Ie(_0x20511), this
            };
            _0x20511 = parseFloat(_0x20910(this, "volume"));
            return isNaN(_0x20511) ? 1 : _0x20511
        };
        _0x20ABD.muted = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20973(this, "setMuted", _0x20511), this) : _0x20910(this, "muted") || _0x2088C
        };
        _0x20ABD.Sa = function() {
            return _0x20910(this, "supportsFullScreen") || _0x2088C
        };
        _0x20ABD.Mc = _0x2088C;
        _0x20ABD.isFullscreen = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (this.Mc = !!_0x20511, this) : this.Mc
        };
        _0x20ABD.isFullScreen = function(_0x20511) {
            _0x20B20.log.warn("player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase \"s\")");
            return this.isFullscreen(_0x20511)
        };
        _0x20ABD.requestFullscreen = function() {
            var _0x20511 = _0x20B20.bb.Pb;
            this.isFullscreen(_0x206BE);
            _0x20511 ? (_0x20B20.b(document, _0x20511.fullscreenchange, _0x20B20.bind(this, function(_0x20532) {
                this.isFullscreen(document[_0x20511.fullscreenElement]);
                this.isFullscreen() === _0x2088C && _0x20B20.n(document, _0x20511.fullscreenchange, arguments.callee);
                this.o("fullscreenchange")
            })), this.c[_0x20511.requestFullscreen]()) : this.h.Sa() ? _0x20973(this, "enterFullScreen") : (this.Fc(), this.o("fullscreenchange"));
            return this
        };
        _0x20ABD.requestFullScreen = function() {
            _0x20B20.log.warn("player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase \"s\")");
            return this.requestFullscreen()
        };
        _0x20ABD.exitFullscreen = function() {
            var _0x20511 = _0x20B20.bb.Pb;
            this.isFullscreen(_0x2088C);
            if (_0x20511) {
                document[_0x20511.exitFullscreen]()
            } else {
                this.h.Sa() ? _0x20973(this, "exitFullScreen") : (this.Lb(), this.o("fullscreenchange"))
            };
            return this
        };
        _0x20ABD.cancelFullScreen = function() {
            _0x20B20.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");
            return this.exitFullscreen()
        };
        _0x20ABD.Fc = function() {
            this.fe = _0x206BE;
            this.Rd = document.documentElement.style.overflow;
            _0x20B20.b(document, "keydown", _0x20B20.bind(this, this.Gc));
            document.documentElement.style.overflow = "hidden";
            _0x20B20.p(document.body, "vjs-full-window");
            this.o("enterFullWindow")
        };
        _0x20ABD.Gc = function(_0x20511) {
            27 === _0x20511.keyCode && (this.isFullscreen() === _0x206BE ? this.exitFullscreen() : this.Lb())
        };
        _0x20ABD.Lb = function() {
            this.fe = _0x2088C;
            _0x20B20.n(document, "keydown", this.Gc);
            document.documentElement.style.overflow = this.Rd;
            _0x20B20.r(document.body, "vjs-full-window");
            this.o("exitFullWindow")
        };
        _0x20ABD.selectSource = function(_0x20511) {
            for (var _0x20532 = 0, _0x20553 = this.q.techOrder; _0x20532 < _0x20553.length; _0x20532++) {
                var _0x20574 = _0x20B20.va(_0x20553[_0x20532]),
                    _0x20595 = window.vqn[_0x20574];
                if (_0x20595) {
                    if (_0x20595.isSupported()) {
                        for (var _0x205B6 = 0, _0x205D7 = _0x20511; _0x205B6 < _0x205D7.length; _0x205B6++) {
                            var _0x205F8 = _0x205D7[_0x205B6];
                            if (_0x20595.canPlaySource(_0x205F8)) {
                                return {
                                    source: _0x205F8,
                                    h: _0x20574
                                }
                            }
                        }
                    }
                } else {
                    _0x20B20.log.error("The \"" + _0x20574 + "\" tech is undefined. Skipped browser support check for that tech.")
                }
            };
            return _0x2088C
        };
        _0x20ABD.src = function(_0x20511) {
            if (_0x20511 === _0x20574) {
                return _0x20910(this, "src")
            };
            _0x20B20.i.isArray(_0x20511) ? _0x20931(this, _0x20511) : "string" === typeof _0x20511 ? this.src({
                src: _0x20511
            }) : _0x20511 instanceof Object && (_0x20511.type && !window.vqn[this.Ta].canPlaySource(_0x20511) ? _0x20931(this, [_0x20511]) : (this.K.src = _0x20511.src, this.Cc = _0x20511.type || "", this.I(function() {
                window.vqn[this.Ta].prototype.hasOwnProperty("setSource") ? _0x20973(this, "setSource", _0x20511) : _0x20973(this, "src", _0x20511.src);
                "auto" == this.q.preload && this.load();
                this.q.autoplay && this.play()
            })));
            return this
        };
    
        function _0x20931(_0x20511, _0x20532) {
            var _0x20553 = _0x20511.selectSource(_0x20532);
            _0x20553 ? _0x20553.h === _0x20511.Ta ? _0x20511.src(_0x20553.source) : _0x2086B(_0x20511, _0x20553.h, _0x20553.source) : (_0x20511.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.v(this.options().notSupportedMessage)
                })
            }, 0), _0x20511.Va())
        }
        _0x20ABD.load = function() {
            _0x20973(this, "load");
            return this
        };
        _0x20ABD.currentSrc = function() {
            return _0x20910(this, "currentSrc") || this.K.src || ""
        };
        _0x20ABD.Nd = function() {
            return this.Cc || ""
        };
        _0x20ABD.Ra = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20973(this, "setPreload", _0x20511), this.q.preload = _0x20511, this) : _0x20910(this, "preload")
        };
        _0x20ABD.autoplay = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20973(this, "setAutoplay", _0x20511), this.q.autoplay = _0x20511, this) : _0x20910(this, "autoplay")
        };
        _0x20ABD.loop = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20973(this, "setLoop", _0x20511), this.q.loop = _0x20511, this) : _0x20910(this, "loop")
        };
        _0x20ABD.poster = function(_0x20511) {
            if (_0x20511 === _0x20574) {
                return this.Vc
            };
            _0x20511 || (_0x20511 = "");
            this.Vc = _0x20511;
            _0x20973(this, "setPoster", _0x20511);
            this.o("posterchange");
            return this
        };
        _0x20ABD.controls = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20511 = !!_0x20511, this.Jb !== _0x20511 && ((this.Jb = _0x20511) ? (this.r("vjs-controls-disabled"), this.p("vjs-controls-enabled"), this.o("controlsenabled")) : (this.r("vjs-controls-enabled"), this.p("vjs-controls-disabled"), this.o("controlsdisabled"))), this) : this.Jb
        };
        _0x20B20.Player.prototype.bc;
        _0x20ABD = _0x20B20.Player.prototype;
        _0x20ABD.usingNativeControls = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20511 = !!_0x20511, this.bc !== _0x20511 && ((this.bc = _0x20511) ? (this.p("vjs-using-native-controls"), this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.o("usingcustomcontrols"))), this) : this.bc
        };
        _0x20ABD.ja = _0x207E7;
        _0x20ABD.error = function(_0x20511) {
            if (_0x20511 === _0x20574) {
                return this.ja
            };
            if (_0x20511 === _0x207E7) {
                return this.ja = _0x20511, this.r("vjs-error"), this
            };
            this.ja = _0x20511 instanceof _0x20B20.J ? _0x20511 : new _0x20B20.J(_0x20511);
            this.o("error");
            this.p("vjs-error");
            _0x20B20.log.error("(CODE:" + this.ja.code + " " + _0x20B20.J.gb[this.ja.code] + ")", this.ja.message, this.ja);
            return this
        };
        _0x20ABD.ended = function() {
            return _0x20910(this, "ended")
        };
        _0x20ABD.seeking = function() {
            return _0x20910(this, "seeking")
        };
        _0x20ABD.seekable = function() {
            return _0x20910(this, "seekable")
        };
        _0x20ABD.Fa = _0x206BE;
        _0x20ABD.reportUserActivity = function() {
            this.Fa = _0x206BE
        };
        _0x20ABD.ac = _0x206BE;
        _0x20ABD.userActive = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20511 = !!_0x20511, _0x20511 !== this.ac && ((this.ac = _0x20511) ? (this.Fa = _0x206BE, this.r("vjs-user-inactive"), this.p("vjs-user-active"), this.o("useractive")) : (this.Fa = _0x2088C, this.h && this.h.N("mousemove", function(_0x20511) {
                _0x20511.stopPropagation();
                _0x20511.preventDefault()
            }), this.r("vjs-user-active"), this.p("vjs-user-inactive"), this.o("userinactive"))), this) : this.ac
        };
        _0x20ABD.playbackRate = function(_0x20511) {
            return _0x20511 !== _0x20574 ? (_0x20973(this, "setPlaybackRate", _0x20511), this) : this.h && this.h.featuresPlaybackRate ? _0x20910(this, "playbackRate") : 1
        };
        _0x20ABD.Lc = _0x2088C;
    
        function _0x20829(_0x20511, _0x20532) {
            return _0x20532 !== _0x20574 ? (_0x20511.Lc = !!_0x20532, _0x20511) : _0x20511.Lc
        }
        _0x20ABD.networkState = function() {
            return _0x20910(this, "networkState")
        };
        _0x20ABD.readyState = function() {
            return _0x20910(this, "readyState")
        };
        _0x20ABD.textTracks = function() {
            return this.h && this.h.textTracks()
        };
        _0x20ABD.X = function() {
            return this.h && this.h.remoteTextTracks()
        };
        _0x20ABD.addTextTrack = function(_0x20511, _0x20532, _0x20553) {
            return this.h && this.h.addTextTrack(_0x20511, _0x20532, _0x20553)
        };
        _0x20ABD.ha = function(_0x20511) {
            return this.h && this.h.addRemoteTextTrack(_0x20511)
        };
        _0x20ABD.Da = function(_0x20511) {
            this.h && this.h.removeRemoteTextTrack(_0x20511)
        };
        _0x20B20.tb = _0x20B20.a.extend();
        _0x20B20.tb.prototype.q = {
            sf: "play",
            children: {
                playToggle: {},
                currentTimeDisplay: {},
                timeDivider: {},
                durationDisplay: {},
                remainingTimeDisplay: {},
                liveDisplay: {},
                progressControl: {},
                fullscreenToggle: {},
                volumeControl: {},
                muteToggle: {},
                playbackRateMenuButton: {},
                subtitlesButton: {},
                captionsButton: {},
                chaptersButton: {}
            }
        };
        _0x20B20.tb.prototype.e = function() {
            return _0x20B20.e("div", {
                className: "vjs-control-bar"
            })
        };
        _0x20B20.hc = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532)
            }
        });
        _0x20B20.hc.prototype.e = function() {
            var _0x20511 = _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-live-controls vjs-control"
            });
            this.B = _0x20B20.e("div", {
                className: "vjs-live-display",
                innerHTML: "<span class=\"vjs-control-text\">" + this.v("Stream Type") + "</span>" + this.v("LIVE"),
                "aria-live": "off"
            });
            _0x20511.appendChild(this.B);
            return _0x20511
        };
        _0x20B20.kc = _0x20B20.w.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.w.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "play", this.Xb);
                this.b(_0x20511, "pause", this.Wb)
            }
        });
        _0x20ABD = _0x20B20.kc.prototype;
        _0x20ABD.ta = "Play";
        _0x20ABD.T = function() {
            return "vjs-play-control " + _0x20B20.w.prototype.T.call(this)
        };
        _0x20ABD.u = function() {
            this.d.paused() ? this.d.play() : this.d.pause()
        };
        _0x20ABD.Xb = function() {
            this.r("vjs-paused");
            this.p("vjs-playing");
            this.c.children[0].children[0].innerHTML = this.v("Pause")
        };
        _0x20ABD.Wb = function() {
            this.r("vjs-playing");
            this.p("vjs-paused");
            this.c.children[0].children[0].innerHTML = this.v("Play")
        };
        _0x20B20.ub = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "timeupdate", this.fa)
            }
        });
        _0x20B20.ub.prototype.e = function() {
            var _0x20511 = _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-current-time vjs-time-controls vjs-control"
            });
            this.B = _0x20B20.e("div", {
                className: "vjs-current-time-display",
                innerHTML: "<span class=\"vjs-control-text\">Current Time </span>0:00",
                "aria-live": "off"
            });
            _0x20511.appendChild(this.B);
            return _0x20511
        };
        _0x20B20.ub.prototype.fa = function() {
            var _0x20511 = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
            this.B.innerHTML = "<span class=\"vjs-control-text\">" + this.v("Current Time") + "</span> " + _0x20B20.Na(_0x20511, this.d.duration())
        };
        _0x20B20.vb = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "timeupdate", this.fa);
                this.b(_0x20511, "loadedmetadata", this.fa)
            }
        });
        _0x20B20.vb.prototype.e = function() {
            var _0x20511 = _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-duration vjs-time-controls vjs-control"
            });
            this.B = _0x20B20.e("div", {
                className: "vjs-duration-display",
                innerHTML: "<span class=\"vjs-control-text\">" + this.v("Duration Time") + "</span> 0:00",
                "aria-live": "off"
            });
            _0x20511.appendChild(this.B);
            return _0x20511
        };
        _0x20B20.vb.prototype.fa = function() {
            var _0x20511 = this.d.duration();
            _0x20511 && (this.B.innerHTML = "<span class=\"vjs-control-text\">" + this.v("Duration Time") + "</span> " + _0x20B20.Na(_0x20511))
        };
        _0x20B20.qc = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532)
            }
        });
        _0x20B20.qc.prototype.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        };
        _0x20B20.Cb = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "timeupdate", this.fa)
            }
        });
        _0x20B20.Cb.prototype.e = function() {
            var _0x20511 = _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-remaining-time vjs-time-controls vjs-control"
            });
            this.B = _0x20B20.e("div", {
                className: "vjs-remaining-time-display",
                innerHTML: "<span class=\"vjs-control-text\">" + this.v("Remaining Time") + "</span> -0:00",
                "aria-live": "off"
            });
            _0x20511.appendChild(this.B);
            return _0x20511
        };
        _0x20B20.Cb.prototype.fa = function() {
            this.d.duration() && (this.B.innerHTML = "<span class=\"vjs-control-text\">" + this.v("Remaining Time") + "</span> -" + _0x20B20.Na(this.d.remainingTime()))
        };
        _0x20B20.Ya = _0x20B20.w.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.w.call(this, _0x20511, _0x20532)
            }
        });
        _0x20B20.Ya.prototype.ta = "Fullscreen";
        _0x20B20.Ya.prototype.T = function() {
            return "vjs-fullscreen-control " + _0x20B20.w.prototype.T.call(this)
        };
        _0x20B20.Ya.prototype.u = function() {
            this.d.isFullscreen() ? (this.d.exitFullscreen(), this.Ib.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(), this.Ib.innerHTML = this.v("Non-Fullscreen"))
        };
        _0x20B20.Bb = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532)
            }
        });
        _0x20B20.Bb.prototype.q = {
            children: {
                seekBar: {}
            }
        };
        _0x20B20.Bb.prototype.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        };
        _0x20B20.nc = _0x20B20.S.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.S.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "timeupdate", this.Ea);
                _0x20511.I(_0x20B20.bind(this, this.Ea))
            }
        });
        _0x20ABD = _0x20B20.nc.prototype;
        _0x20ABD.q = {
            children: {
                loadProgressBar: {},
                playProgressBar: {},
                seekHandle: {}
            },
            barName: "playProgressBar",
            handleName: "seekHandle"
        };
        _0x20ABD.Uc = "timeupdate";
        _0x20ABD.e = function() {
            return _0x20B20.S.prototype.e.call(this, "div", {
                className: "vjs-progress-holder",
                "aria-label": "video progress bar"
            })
        };
        _0x20ABD.Ea = function() {
            var _0x20511 = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
            this.c.setAttribute("aria-valuenow", _0x20B20.round(100 * this.Qb(), 2));
            this.c.setAttribute("aria-valuetext", _0x20B20.Na(_0x20511, this.d.duration()))
        };
        _0x20ABD.Qb = function() {
            return this.d.currentTime() / this.d.duration()
        };
        _0x20ABD.lb = function(_0x20511) {
            _0x20B20.S.prototype.lb.call(this, _0x20511);
            this.d.nb = _0x206BE;
            this.d.p("vjs-scrubbing");
            this.$e = !this.d.paused();
            this.d.pause()
        };
        _0x20ABD.la = function(_0x20511) {
            _0x20511 = _0x2069D(this, _0x20511) * this.d.duration();
            _0x20511 == this.d.duration() && (_0x20511 -= 0.1);
            this.d.currentTime(_0x20511)
        };
        _0x20ABD.Ba = function(_0x20511) {
            _0x20B20.S.prototype.Ba.call(this, _0x20511);
            this.d.nb = _0x2088C;
            this.d.r("vjs-scrubbing");
            this.$e && this.d.play()
        };
        _0x20ABD.gd = function() {
            this.d.currentTime(this.d.currentTime() + 5)
        };
        _0x20ABD.fd = function() {
            this.d.currentTime(this.d.currentTime() - 5)
        };
        _0x20B20.yb = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "progress", this.update)
            }
        });
        _0x20B20.yb.prototype.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: "<span class=\"vjs-control-text\"><span>" + this.v("Loaded") + "</span>: 0%</span>"
            })
        };
        _0x20B20.yb.prototype.update = function() {
            var _0x20511, _0x20532, _0x20553, _0x20574, _0x20595 = this.d.buffered();
            _0x20511 = this.d.duration();
            var _0x205B6, _0x205D7 = this.d;
            _0x205B6 = _0x205D7.buffered();
            _0x205D7 = _0x205D7.duration();
            _0x205B6 = _0x205B6.end(_0x205B6.length - 1);
            _0x205B6 > _0x205D7 && (_0x205B6 = _0x205D7);
            _0x205D7 = this.c.children;
            this.c.style.width = 100 * (_0x205B6 / _0x20511 || 0) + "%";
            for (_0x20511 = 0; _0x20511 < _0x20595.length; _0x20511++) {
                _0x20532 = _0x20595.start(_0x20511), _0x20553 = _0x20595.end(_0x20511), (_0x20574 = _0x205D7[_0x20511]) || (_0x20574 = this.c.appendChild(_0x20B20.e())), _0x20574.style.left = 100 * (_0x20532 / _0x205B6 || 0) + "%", _0x20574.style.width = 100 * ((_0x20553 - _0x20532) / _0x205B6 || 0) + "%"
            };
            for (_0x20511 = _0x205D7.length; _0x20511 > _0x20595.length; _0x20511--) {
                this.c.removeChild(_0x205D7[_0x20511 - 1])
            }
        };
        _0x20B20.jc = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532)
            }
        });
        _0x20B20.jc.prototype.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-play-progress",
                innerHTML: "<span class=\"vjs-control-text\"><span>" + this.v("Progress") + "</span>: 0%</span>"
            })
        };
        _0x20B20.Za = _0x20B20.ga.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.ga.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "timeupdate", this.fa)
            }
        });
        _0x20B20.Za.prototype.defaultValue = "00:00";
        _0x20B20.Za.prototype.e = function() {
            return _0x20B20.ga.prototype.e.call(this, "div", {
                className: "vjs-seek-handle",
                "aria-live": "off"
            })
        };
        _0x20B20.Za.prototype.fa = function() {
            var _0x20511 = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
            this.c.innerHTML = "<span class=\"vjs-control-text\">" + _0x20B20.Na(_0x20511, this.d.duration()) + "</span>"
        };
        _0x20B20.Fb = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                _0x20511.h && _0x20511.h.featuresVolumeControl === _0x2088C && this.p("vjs-hidden");
                this.b(_0x20511, "loadstart", function() {
                    _0x20511.h.featuresVolumeControl === _0x2088C ? this.p("vjs-hidden") : this.r("vjs-hidden")
                })
            }
        });
        _0x20B20.Fb.prototype.q = {
            children: {
                volumeBar: {}
            }
        };
        _0x20B20.Fb.prototype.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-volume-control vjs-control"
            })
        };
        _0x20B20.Eb = _0x20B20.S.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.S.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "volumechange", this.Ea);
                _0x20511.I(_0x20B20.bind(this, this.Ea))
            }
        });
        _0x20ABD = _0x20B20.Eb.prototype;
        _0x20ABD.Ea = function() {
            this.c.setAttribute("aria-valuenow", _0x20B20.round(100 * this.d.volume(), 2));
            this.c.setAttribute("aria-valuetext", _0x20B20.round(100 * this.d.volume(), 2) + "%")
        };
        _0x20ABD.q = {
            children: {
                volumeLevel: {},
                volumeHandle: {}
            },
            barName: "volumeLevel",
            handleName: "volumeHandle"
        };
        _0x20ABD.Uc = "volumechange";
        _0x20ABD.e = function() {
            return _0x20B20.S.prototype.e.call(this, "div", {
                className: "vjs-volume-bar",
                "aria-label": "volume level"
            })
        };
        _0x20ABD.la = function(_0x20511) {
            this.d.muted() && this.d.muted(_0x2088C);
            this.d.volume(_0x2069D(this, _0x20511))
        };
        _0x20ABD.Qb = function() {
            return this.d.muted() ? 0 : this.d.volume()
        };
        _0x20ABD.gd = function() {
            this.d.volume(this.d.volume() + 0.1)
        };
        _0x20ABD.fd = function() {
            this.d.volume(this.d.volume() - 0.1)
        };
        _0x20B20.rc = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532)
            }
        });
        _0x20B20.rc.prototype.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: "<span class=\"vjs-control-text\"></span>"
            })
        };
        _0x20B20.Gb = _0x20B20.ga.extend();
        _0x20B20.Gb.prototype.defaultValue = "00:00";
        _0x20B20.Gb.prototype.e = function() {
            return _0x20B20.ga.prototype.e.call(this, "div", {
                className: "vjs-volume-handle"
            })
        };
        _0x20B20.ra = _0x20B20.w.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.w.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "volumechange", this.update);
                _0x20511.h && _0x20511.h.featuresVolumeControl === _0x2088C && this.p("vjs-hidden");
                this.b(_0x20511, "loadstart", function() {
                    _0x20511.h.featuresVolumeControl === _0x2088C ? this.p("vjs-hidden") : this.r("vjs-hidden")
                })
            }
        });
        _0x20B20.ra.prototype.e = function() {
            return _0x20B20.w.prototype.e.call(this, "div", {
                className: "vjs-mute-control vjs-control",
                innerHTML: "<div><span class=\"vjs-control-text\">" + this.v("Mute") + "</span></div>"
            })
        };
        _0x20B20.ra.prototype.u = function() {
            this.d.muted(this.d.muted() ? _0x2088C : _0x206BE)
        };
        _0x20B20.ra.prototype.update = function() {
            var _0x20511 = this.d.volume(),
                _0x20532 = 3;
            0 === _0x20511 || this.d.muted() ? _0x20532 = 0 : 0.33 > _0x20511 ? _0x20532 = 1 : 0.67 > _0x20511 && (_0x20532 = 2);
            this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute"));
            for (_0x20511 = 0; 4 > _0x20511; _0x20511++) {
                _0x20B20.r(this.c, "vjs-vol-" + _0x20511)
            };
            _0x20B20.p(this.c, "vjs-vol-" + _0x20532)
        };
        _0x20B20.Ha = _0x20B20.O.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.O.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "volumechange", this.af);
                _0x20511.h && _0x20511.h.featuresVolumeControl === _0x2088C && this.p("vjs-hidden");
                this.b(_0x20511, "loadstart", function() {
                    _0x20511.h.featuresVolumeControl === _0x2088C ? this.p("vjs-hidden") : this.r("vjs-hidden")
                });
                this.p("vjs-menu-button")
            }
        });
        _0x20B20.Ha.prototype.La = function() {
            var _0x20511 = new _0x20B20.qa(this.d, {
                    zc: "div"
                }),
                _0x20532 = new _0x20B20.Eb(this.d, this.q.volumeBar);
            _0x20532.b("focus", function() {
                _0x20511.p("vjs-lock-showing")
            });
            _0x20532.b("blur", function() {
                _0x20721(_0x20511)
            });
            _0x20511.aa(_0x20532);
            return _0x20511
        };
        _0x20B20.Ha.prototype.u = function() {
            _0x20B20.ra.prototype.u.call(this);
            _0x20B20.O.prototype.u.call(this)
        };
        _0x20B20.Ha.prototype.e = function() {
            return _0x20B20.w.prototype.e.call(this, "div", {
                className: "vjs-volume-menu-button vjs-menu-button vjs-control",
                innerHTML: "<div><span class=\"vjs-control-text\">" + this.v("Mute") + "</span></div>"
            })
        };
        _0x20B20.Ha.prototype.af = _0x20B20.ra.prototype.update;
        _0x20B20.lc = _0x20B20.O.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.O.call(this, _0x20511, _0x20532);
                this.pd();
                this.od();
                this.b(_0x20511, "loadstart", this.pd);
                this.b(_0x20511, "ratechange", this.od)
            }
        });
        _0x20ABD = _0x20B20.lc.prototype;
        _0x20ABD.ta = "Playback Rate";
        _0x20ABD.className = "vjs-playback-rate";
        _0x20ABD.e = function() {
            var _0x20511 = _0x20B20.O.prototype.e.call(this);
            this.Oc = _0x20B20.e("div", {
                className: "vjs-playback-rate-value",
                innerHTML: 1
            });
            _0x20511.appendChild(this.Oc);
            return _0x20511
        };
        _0x20ABD.La = function() {
            var _0x20511 = new _0x20B20.qa(this.k()),
                _0x20532 = this.k().options().playbackRates;
            if (_0x20532) {
                for (var _0x20553 = _0x20532.length - 1; 0 <= _0x20553; _0x20553--) {
                    _0x20511.aa(new _0x20B20.Ab(this.k(), {
                        rate: _0x20532[_0x20553] + "x"
                    }))
                }
            };
            return _0x20511
        };
        _0x20ABD.Ea = function() {
            this.m().setAttribute("aria-valuenow", this.k().playbackRate())
        };
        _0x20ABD.u = function() {
            for (var _0x20511 = this.k().playbackRate(), _0x20532 = this.k().options().playbackRates, _0x20553 = _0x20532[0], _0x20574 = 0; _0x20574 < _0x20532.length; _0x20574++) {
                if (_0x20532[_0x20574] > _0x20511) {
                    _0x20553 = _0x20532[_0x20574];
                    break
                }
            };
            this.k().playbackRate(_0x20553)
        };
    
        function _0x20994(_0x20511) {
            return _0x20511.k().h && _0x20511.k().h.featuresPlaybackRate && _0x20511.k().options().playbackRates && 0 < _0x20511.k().options().playbackRates.length
        }
        _0x20ABD.pd = function() {
            _0x20994(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
        };
        _0x20ABD.od = function() {
            _0x20994(this) && (this.Oc.innerHTML = this.k().playbackRate() + "x")
        };
        _0x20B20.Ab = _0x20B20.M.extend({
            zc: "button",
            l: function(_0x20511, _0x20532) {
                var _0x20553 = this.label = _0x20532.rate,
                    _0x20574 = this.Wc = parseFloat(_0x20553, 10);
                _0x20532.label = _0x20553;
                _0x20532.selected = 1 === _0x20574;
                _0x20B20.M.call(this, _0x20511, _0x20532);
                this.b(_0x20511, "ratechange", this.update)
            }
        });
        _0x20B20.Ab.prototype.u = function() {
            _0x20B20.M.prototype.u.call(this);
            this.k().playbackRate(this.Wc)
        };
        _0x20B20.Ab.prototype.update = function() {
            this.selected(this.k().playbackRate() == this.Wc)
        };
        _0x20B20.mc = _0x20B20.w.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.w.call(this, _0x20511, _0x20532);
                this.update();
                _0x20511.b("posterchange", _0x20B20.bind(this, this.update))
            }
        });
        _0x20ABD = _0x20B20.mc.prototype;
        _0x20ABD.dispose = function() {
            this.k().n("posterchange", this.update);
            _0x20B20.w.prototype.dispose.call(this)
        };
        _0x20ABD.e = function() {
            var _0x20511 = _0x20B20.e("div", {
                className: "vjs-poster",
                tabIndex: -1
            });
            _0x20B20.td || (this.Mb = _0x20B20.e("img"), _0x20511.appendChild(this.Mb));
            return _0x20511
        };
        _0x20ABD.update = function() {
            var _0x20511 = this.k().poster();
            this.na(_0x20511);
            _0x20511 ? this.show() : this.W()
        };
        _0x20ABD.na = function(_0x20511) {
            var _0x20532;
            this.Mb ? this.Mb.src = _0x20511 : (_0x20532 = "", _0x20511 && (_0x20532 = "url(\"" + _0x20511 + "\")"), this.c.style.backgroundImage = _0x20532)
        };
        _0x20ABD.u = function() {
            this.d.play()
        };
        _0x20B20.ic = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532)
            }
        });
        _0x20B20.ic.prototype.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-loading-spinner"
            })
        };
        _0x20B20.rb = _0x20B20.w.extend();
        _0x20B20.rb.prototype.e = function() {
            return _0x20B20.w.prototype.e.call(this, "div", {
                className: "vjs-big-play-button",
                innerHTML: "<span aria-hidden=\"true\"></span>",
                "aria-label": "play video"
            })
        };
        _0x20B20.rb.prototype.u = function() {
            this.d.play()
        };
        _0x20B20.wb = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                this.update();
                this.b(_0x20511, "error", this.update)
            }
        });
        _0x20B20.wb.prototype.e = function() {
            var _0x20511 = _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-error-display"
            });
            this.B = _0x20B20.e("div");
            _0x20511.appendChild(this.B);
            return _0x20511
        };
        _0x20B20.wb.prototype.update = function() {
            this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
        };
        var _0x209B5;
        _0x20B20.j = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                _0x20532 = _0x20532 || {};
                _0x20532.$c = _0x2088C;
                _0x20B20.a.call(this, _0x20511, _0x20532, _0x20553);
                this.featuresProgressEvents || this.ne();
                this.featuresTimeupdateEvents || this.oe();
                this.be();
                this.featuresNativeTextTracks || this.Sd();
                this.de()
            }
        });
        _0x20ABD = _0x20B20.j.prototype;
        _0x20ABD.be = function() {
            var _0x20511, _0x20532;
            _0x20511 = this.k();
            _0x20532 = function() {
                _0x20511.controls() && !_0x20511.usingNativeControls() && this.Fd()
            };
            this.I(_0x20532);
            this.b(_0x20511, "controlsenabled", _0x20532);
            this.b(_0x20511, "controlsdisabled", this.De);
            this.I(function() {
                this.networkState && 0 < this.networkState() && this.k().o("loadstart")
            })
        };
        _0x20ABD.Fd = function() {
            var _0x20511;
            this.b("mousedown", this.u);
            this.b("touchstart", function() {
                _0x20511 = this.d.userActive()
            });
            this.b("touchmove", function() {
                _0x20511 && this.k().reportUserActivity()
            });
            this.b("touchend", function(_0x20511) {
                _0x20511.preventDefault()
            });
            _0x2065B(this);
            this.b("tap", this.xe)
        };
        _0x20ABD.De = function() {
            this.n("tap");
            this.n("touchstart");
            this.n("touchmove");
            this.n("touchleave");
            this.n("touchcancel");
            this.n("touchend");
            this.n("click");
            this.n("mousedown")
        };
        _0x20ABD.u = function(_0x20511) {
            0 === _0x20511.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
        };
        _0x20ABD.xe = function() {
            this.k().userActive(!this.k().userActive())
        };
        _0x20ABD.ne = function() {
            this.Qc = _0x206BE;
            this.We()
        };
        _0x20ABD.me = function() {
            this.Qc = _0x2088C;
            this.hd()
        };
        _0x20ABD.We = function() {
            this.Ce = this.setInterval(function() {
                var _0x20511 = this.k().bufferedPercent();
                this.Jd != _0x20511 && this.k().o("progress");
                this.Jd = _0x20511;
                1 === _0x20511 && this.hd()
            }, 500)
        };
        _0x20ABD.hd = function() {
            this.clearInterval(this.Ce)
        };
        _0x20ABD.oe = function() {
            var _0x20511 = this.d;
            this.Vb = _0x206BE;
            this.b(_0x20511, "play", this.md);
            this.b(_0x20511, "pause", this.qb);
            this.N("timeupdate", function() {
                this.featuresTimeupdateEvents = _0x206BE;
                this.Rc()
            })
        };
        _0x20ABD.Rc = function() {
            var _0x20511 = this.d;
            this.Vb = _0x2088C;
            this.qb();
            this.n(_0x20511, "play", this.md);
            this.n(_0x20511, "pause", this.qb)
        };
        _0x20ABD.md = function() {
            this.Bc && this.qb();
            this.Bc = this.setInterval(function() {
                this.k().o("timeupdate")
            }, 250)
        };
        _0x20ABD.qb = function() {
            this.clearInterval(this.Bc);
            this.k().o("timeupdate")
        };
        _0x20ABD.dispose = function() {
            this.Qc && this.me();
            this.Vb && this.Rc();
            _0x20B20.a.prototype.dispose.call(this)
        };
        _0x20ABD.Zb = function() {
            this.Vb && this.k().o("timeupdate")
        };
        _0x20ABD.de = function() {
            function _0x20511() {
                var _0x20511 = _0x20532.da("textTrackDisplay");
                _0x20511 && _0x20511.C()
            }
            var _0x20532 = this.d,
                _0x20553;
            if (_0x20553 = this.textTracks()) {
                _0x20553.addEventListener("removetrack", _0x20511), _0x20553.addEventListener("addtrack", _0x20511), this.b("dispose", _0x20B20.bind(this, function() {
                    _0x20553.removeEventListener("removetrack", _0x20511);
                    _0x20553.removeEventListener("addtrack", _0x20511)
                }))
            }
        };
        _0x20ABD.Sd = function() {
            var _0x20511 = this.d,
                _0x20532, _0x20553, _0x20574;
            window.WebVTT || (_0x20574 = document.createElement("script"), _0x20574.src = _0x20511.options().vtt.js || "../node_modules/vtt.js/dist/vtt.js", _0x20511.m().appendChild(_0x20574), window.WebVTT = _0x206BE);
            if (_0x20553 = this.textTracks()) {
                _0x20532 = function() {
                    var _0x20532, _0x20553, _0x20574;
                    _0x20574 = _0x20511.da("textTrackDisplay");
                    _0x20574.C();
                    for (_0x20532 = 0; _0x20532 < this.length; _0x20532++) {
                        _0x20553 = this[_0x20532], _0x20553.removeEventListener("cuechange", _0x20B20.bind(_0x20574, _0x20574.C)), "showing" === _0x20553.mode && _0x20553.addEventListener("cuechange", _0x20B20.bind(_0x20574, _0x20574.C))
                    }
                }, _0x20553.addEventListener("change", _0x20532), this.b("dispose", _0x20B20.bind(this, function() {
                    _0x20553.removeEventListener("change", _0x20532)
                }))
            }
        };
        _0x20ABD.textTracks = function() {
            this.d.ld = this.d.ld || new _0x20B20.F;
            return this.d.ld
        };
        _0x20ABD.X = function() {
            this.d.Xc = this.d.Xc || new _0x20B20.F;
            return this.d.Xc
        };
        _0x209B5 = function(_0x20511, _0x20532, _0x20553, _0x20574, _0x20595) {
            var _0x205B6 = _0x20511.textTracks();
            _0x20595 = _0x20595 || {};
            _0x20595.kind = _0x20532;
            _0x20553 && (_0x20595.label = _0x20553);
            _0x20574 && (_0x20595.language = _0x20574);
            _0x20595.player = _0x20511.d;
            _0x20511 = new _0x20B20.t(_0x20595);
            _0x20A18(_0x205B6, _0x20511);
            return _0x20511
        };
        _0x20B20.j.prototype.addTextTrack = function(_0x20511, _0x20532, _0x20553) {
            if (!_0x20511) {
                throw Error("TextTrack kind is required but was not provided")
            };
            return _0x209B5(this, _0x20511, _0x20532, _0x20553)
        };
        _0x20B20.j.prototype.ha = function(_0x20511) {
            _0x20511 = _0x209B5(this, _0x20511.kind, _0x20511.label, _0x20511.language, _0x20511);
            _0x20A18(this.X(), _0x20511);
            return {
                Y: _0x20511
            }
        };
        _0x20B20.j.prototype.Da = function(_0x20511) {
            _0x20A5A(this.textTracks(), _0x20511);
            _0x20A5A(this.X(), _0x20511)
        };
        _0x20B20.j.prototype.bd = _0x208EF();
        _0x20B20.j.prototype.featuresVolumeControl = _0x206BE;
        _0x20B20.j.prototype.featuresFullscreenResize = _0x2088C;
        _0x20B20.j.prototype.featuresPlaybackRate = _0x2088C;
        _0x20B20.j.prototype.featuresProgressEvents = _0x2088C;
        _0x20B20.j.prototype.featuresTimeupdateEvents = _0x2088C;
        _0x20B20.j.prototype.featuresNativeTextTracks = _0x2088C;
        _0x20B20.j.dc = function(_0x20511) {
            _0x20511.registerSourceHandler = function(_0x20532, _0x20553) {
                var _0x20595 = _0x20511.cd;
                _0x20595 || (_0x20595 = _0x20511.cd = []);
                _0x20553 === _0x20574 && (_0x20553 = _0x20595.length);
                _0x20595.splice(_0x20553, 0, _0x20532)
            };
            _0x20511.ob = function(_0x20532) {
                for (var _0x20553 = _0x20511.cd || [], _0x20574, _0x20595 = 0; _0x20595 < _0x20553.length; _0x20595++) {
                    if (_0x20574 = _0x20553[_0x20595].canHandleSource(_0x20532)) {
                        return _0x20553[_0x20595]
                    }
                };
                return _0x207E7
            };
            _0x20511.wc = function(_0x20532) {
                var _0x20553 = _0x20511.ob(_0x20532);
                return _0x20553 ? _0x20553.canHandleSource(_0x20532) : ""
            };
            _0x20511.prototype.ma = function(_0x20532) {
                var _0x20553 = _0x20511.ob(_0x20532);
                _0x20553 || (_0x20511.nativeSourceHandler ? _0x20553 = _0x20511.nativeSourceHandler : _0x20B20.log.error("No source hander found for the current source."));
                this.ia();
                this.n("dispose", this.ia);
                this.fb = _0x20532;
                this.$b = _0x20553.handleSource(_0x20532, this);
                this.b("dispose", this.ia);
                return this
            };
            _0x20511.prototype.ia = function() {
                this.$b && this.$b.dispose && this.$b.dispose()
            }
        };
        _0x20B20.media = {};
        _0x20B20.f = _0x20B20.j.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                var _0x20574, _0x20595, _0x205B6;
                if (_0x20532.nativeCaptions === _0x2088C || _0x20532.nativeTextTracks === _0x2088C) {
                    this.featuresNativeTextTracks = _0x2088C
                };
                _0x20B20.j.call(this, _0x20511, _0x20532, _0x20553);
                for (_0x20553 = _0x20B20.f.xb.length - 1; 0 <= _0x20553; _0x20553--) {
                    this.b(_0x20B20.f.xb[_0x20553], this.Td)
                };
                (_0x20532 = _0x20532.source) && (this.c.currentSrc !== _0x20532.src || _0x20511.L && 3 === _0x20511.L.ce) && this.ma(_0x20532);
                if (this.c.hasChildNodes()) {
                    _0x20553 = this.c.childNodes;
                    _0x20574 = _0x20553.length;
                    for (_0x20532 = []; _0x20574--;) {
                        _0x20595 = _0x20553[_0x20574], _0x205B6 = _0x20595.nodeName.toLowerCase(), "track" === _0x205B6 && (this.featuresNativeTextTracks ? _0x20A18(this.X(), _0x20595["track"]) : _0x20532.push(_0x20595))
                    };
                    for (_0x20553 = 0; _0x20553 < _0x20532.length; _0x20553++) {
                        this.c.removeChild(_0x20532[_0x20553])
                    }
                };
                if (_0x20B20.Db && _0x20511.options().nativeControlsForTouch === _0x206BE) {
                    var _0x205D7, _0x205F8, _0x20619, _0x2063A;
                    _0x205D7 = this;
                    _0x205F8 = this.k();
                    _0x20532 = _0x205F8.controls();
                    _0x205D7.c.controls = !!_0x20532;
                    _0x20619 = function() {
                        _0x205D7.c.controls = _0x206BE
                    };
                    _0x2063A = function() {
                        _0x205D7.c.controls = _0x2088C
                    };
                    _0x205F8.b("controlsenabled", _0x20619);
                    _0x205F8.b("controlsdisabled", _0x2063A);
                    _0x20532 = function() {
                        _0x205F8.n("controlsenabled", _0x20619);
                        _0x205F8.n("controlsdisabled", _0x2063A)
                    };
                    _0x205D7.b("dispose", _0x20532);
                    _0x205F8.b("usingcustomcontrols", _0x20532);
                    _0x205F8.usingNativeControls(_0x206BE)
                };
                _0x20511.I(function() {
                    this.src() && (this.L && this.q.autoplay && this.paused()) && (delete this.L.poster, this.play())
                });
                this.Va()
            }
        });
        _0x20ABD = _0x20B20.f.prototype;
        _0x20ABD.dispose = function() {
            _0x20B20.f.Kb(this.c);
            _0x20B20.j.prototype.dispose.call(this)
        };
        _0x20ABD.e = function() {
            var _0x20511 = this.d,
                _0x20532, _0x20553, _0x20574, _0x20595 = _0x20511.L;
            if (!_0x20595 || this.movingMediaElementInDOM === _0x2088C) {
                _0x20595 ? (_0x20574 = _0x20595.cloneNode(_0x2088C), _0x20B20.f.Kb(_0x20595), _0x20595 = _0x20574, _0x20511.L = _0x207E7) : (_0x20595 = _0x20B20.e("video"), _0x20574 = _0x20C28.Z.Aa({}, _0x20511.Te), (!_0x20B20.Db || _0x20511.options().nativeControlsForTouch !== _0x206BE) && delete _0x20574.controls, _0x20B20.ad(_0x20595, _0x20B20.i.D(_0x20574, {
                    id: _0x20511.id() + "_html5_api",
                    "class": "vjs-tech"
                })));
                _0x20595.player = _0x20511;
                if (_0x20511.q.nd) {
                    for (_0x20574 = 0; _0x20574 < _0x20511.q.nd.length; _0x20574++) {
                        _0x20532 = _0x20511.q.nd[_0x20574], _0x20553 = document.createElement("track"), _0x20553.Tb = _0x20532.Tb, _0x20553.label = _0x20532.label, _0x20553.ed = _0x20532.ed, _0x20553.src = _0x20532.src, "default" in _0x20532 && _0x20553.setAttribute("default", "default"), _0x20595.appendChild(_0x20553)
                    }
                };
                _0x20B20.Rb(_0x20595, _0x20511.m())
            };
            _0x20532 = ["autoplay", "preload", "loop", "muted"];
            for (_0x20574 = _0x20532.length - 1; 0 <= _0x20574; _0x20574--) {
                _0x20553 = _0x20532[_0x20574];
                var _0x205B6 = {};
                "undefined" !== typeof _0x20511.q[_0x20553] && (_0x205B6[_0x20553] = _0x20511.q[_0x20553]);
                _0x20B20.ad(_0x20595, _0x205B6)
            };
            return _0x20595
        };
        _0x20ABD.Td = function(_0x20511) {
            "error" == _0x20511.type && this.error() ? this.k().error(this.error().code) : (_0x20511.bubbles = _0x2088C, this.k().o(_0x20511))
        };
        _0x20ABD.play = function() {
            this.c.play()
        };
        _0x20ABD.pause = function() {
            this.c.pause()
        };
        _0x20ABD.paused = function() {
            return this.c.paused
        };
        _0x20ABD.currentTime = function() {
            return this.c.currentTime
        };
        _0x20ABD.Zb = function(_0x20511) {
            try {
                this.c.currentTime = _0x20511
            } catch (c) {
                _0x20B20.log(c, "Video is not ready. (Video.js)")
            }
        };
        _0x20ABD.duration = function() {
            return this.c.duration || 0
        };
        _0x20ABD.buffered = function() {
            return this.c.buffered
        };
        _0x20ABD.volume = function() {
            return this.c.volume
        };
        _0x20ABD.Oe = function(_0x20511) {
            this.c.volume = _0x20511
        };
        _0x20ABD.muted = function() {
            return this.c.muted
        };
        _0x20ABD.Ke = function(_0x20511) {
            this.c.muted = _0x20511
        };
        _0x20ABD.width = function() {
            return this.c.offsetWidth
        };
        _0x20ABD.height = function() {
            return this.c.offsetHeight
        };
        _0x20ABD.Sa = function() {
            return "function" == typeof this.c.webkitEnterFullScreen && (/Android/ .test(_0x20B20.P) || !/Chrome|Mac OS X 10.5/ .test(_0x20B20.P)) ? _0x206BE : _0x2088C
        };
        _0x20ABD.Ec = function() {
            var _0x20511 = this.c;
            "webkitDisplayingFullscreen" in _0x20511 && this.N("webkitbeginfullscreen", function() {
                this.d.isFullscreen(_0x206BE);
                this.N("webkitendfullscreen", function() {
                    this.d.isFullscreen(_0x2088C);
                    this.d.o("fullscreenchange")
                });
                this.d.o("fullscreenchange")
            });
            _0x20511.paused && _0x20511.networkState <= _0x20511.ef ? (this.c.play(), this.setTimeout(function() {
                _0x20511.pause();
                _0x20511.webkitEnterFullScreen()
            }, 0)) : _0x20511.webkitEnterFullScreen()
        };
        _0x20ABD.Ud = function() {
            this.c.webkitExitFullScreen()
        };
    
        function _0x209D6(_0x20511, _0x20532) {
            var _0x20553 = /^blob\:/i;
            return _0x20532 && _0x20511 && _0x20553.test(_0x20511) ? _0x20532 : _0x20511
        }
        _0x20ABD.src = function(_0x20511) {
            var _0x20532 = this.c.src;
            if (_0x20511 === _0x20574) {
                return _0x209D6(_0x20532, this.dd)
            };
            this.na(_0x20511)
        };
        _0x20ABD.na = function(_0x20511) {
            this.c.src = _0x20511
        };
        _0x20ABD.load = function() {
            this.c.load()
        };
        _0x20ABD.currentSrc = function() {
            var _0x20511 = this.c.currentSrc;
            return !this.fb ? _0x20511 : _0x209D6(_0x20511, this.fb.src)
        };
        _0x20ABD.poster = function() {
            return this.c.poster
        };
        _0x20ABD.bd = function(_0x20511) {
            this.c.poster = _0x20511
        };
        _0x20ABD.Ra = function() {
            return this.c.Ra
        };
        _0x20ABD.Me = function(_0x20511) {
            this.c.Ra = _0x20511
        };
        _0x20ABD.autoplay = function() {
            return this.c.autoplay
        };
        _0x20ABD.He = function(_0x20511) {
            this.c.autoplay = _0x20511
        };
        _0x20ABD.controls = function() {
            return this.c.controls
        };
        _0x20ABD.loop = function() {
            return this.c.loop
        };
        _0x20ABD.Je = function(_0x20511) {
            this.c.loop = _0x20511
        };
        _0x20ABD.error = function() {
            return this.c.error
        };
        _0x20ABD.seeking = function() {
            return this.c.seeking
        };
        _0x20ABD.seekable = function() {
            return this.c.seekable
        };
        _0x20ABD.ended = function() {
            return this.c.ended
        };
        _0x20ABD.playbackRate = function() {
            return this.c.playbackRate
        };
        _0x20ABD.Le = function(_0x20511) {
            this.c.playbackRate = _0x20511
        };
        _0x20ABD.networkState = function() {
            return this.c.networkState
        };
        _0x20ABD.readyState = function() {
            return this.c.readyState
        };
        _0x20ABD.textTracks = function() {
            return !this.featuresNativeTextTracks ? _0x20B20.j.prototype.textTracks.call(this) : this.c.textTracks
        };
        _0x20ABD.addTextTrack = function(_0x20511, _0x20532, _0x20553) {
            return !this.featuresNativeTextTracks ? _0x20B20.j.prototype.addTextTrack.call(this, _0x20511, _0x20532, _0x20553) : this.c.addTextTrack(_0x20511, _0x20532, _0x20553)
        };
        _0x20ABD.ha = function(_0x20511) {
            if (!this.featuresNativeTextTracks) {
                return _0x20B20.j.prototype.ha.call(this, _0x20511)
            };
            var _0x20532 = document.createElement("track");
            _0x20511 = _0x20511 || {};
            _0x20511.kind && (_0x20532.kind = _0x20511.kind);
            _0x20511.label && (_0x20532.label = _0x20511.label);
            if (_0x20511.language || _0x20511.srclang) {
                _0x20532.srclang = _0x20511.language || _0x20511.srclang
            };
            _0x20511.default && (_0x20532.default = _0x20511.default);
            _0x20511.id && (_0x20532.id = _0x20511.id);
            _0x20511.src && (_0x20532.src = _0x20511.src);
            this.m().appendChild(_0x20532);
            _0x20A18(this.X(), _0x20532.Y);
            return _0x20532
        };
        _0x20ABD.Da = function(_0x20511) {
            if (!this.featuresNativeTextTracks) {
                return _0x20B20.j.prototype.Da.call(this, _0x20511)
            };
            var _0x20532, _0x20553;
            _0x20A5A(this.X(), _0x20511);
            _0x20532 = this.m().querySelectorAll("track");
            for (_0x20553 = 0; _0x20553 < _0x20532.length; _0x20553++) {
                if (_0x20532[_0x20553] === _0x20511 || _0x20532[_0x20553]["track"] === _0x20511) {
                    _0x20532[_0x20553].parentNode.removeChild(_0x20532[_0x20553]);
                    break
                }
            }
        };
        _0x20B20.f.isSupported = function() {
            try {
                _0x20B20.A.volume = 0.5
            } catch (a) {
                return _0x2088C
            };
            return !!_0x20B20.A.canPlayType
        };
        _0x20B20.j.dc(_0x20B20.f);
        var _0x20A39 = _0x20B20.f.prototype.ma,
            _0x20A7B = _0x20B20.f.prototype.ia;
        _0x20B20.f.prototype.ma = function(_0x20511) {
            var _0x20532 = _0x20A39.call(this, _0x20511);
            this.dd = _0x20511.src;
            return _0x20532
        };
        _0x20B20.f.prototype.ia = function() {
            this.dd = _0x20574;
            return _0x20A7B.call(this)
        };
        _0x20B20.f.nativeSourceHandler = {};
        _0x20B20.f.nativeSourceHandler.canHandleSource = function(_0x20511) {
            function _0x20532(_0x20511) {
                try {
                    return _0x20B20.A.canPlayType(_0x20511)
                } catch (_0x20532) {
                    return ""
                }
            }
            return _0x20511.type ? _0x20532(_0x20511.type) : _0x20511.src ? (_0x20511 = (_0x20511 = _0x20511.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && _0x20511[1], _0x20532("video/" + _0x20511)) : ""
        };
        _0x20B20.f.nativeSourceHandler.handleSource = function(_0x20511, _0x20532) {
            _0x20532.na(_0x20511.src)
        };
        _0x20B20.f.nativeSourceHandler.dispose = _0x208EF();
        _0x20B20.f.registerSourceHandler(_0x20B20.f.nativeSourceHandler);
        _0x20B20.f.Ld = function() {
            var _0x20511 = _0x20B20.A.volume;
            _0x20B20.A.volume = _0x20511 / 2 + 0.1;
            return _0x20511 !== _0x20B20.A.volume
        };
        _0x20B20.f.Kd = function() {
            var _0x20511 = _0x20B20.A.playbackRate;
            _0x20B20.A.playbackRate = _0x20511 / 2 + 0.1;
            return _0x20511 !== _0x20B20.A.playbackRate
        };
        _0x20B20.f.Re = function() {
            var _0x20511;
            (_0x20511 = !!_0x20B20.A.textTracks) && 0 < _0x20B20.A.textTracks.length && (_0x20511 = "number" !== typeof _0x20B20.A.textTracks[0].mode);
            _0x20511 && _0x20B20.gc && (_0x20511 = _0x2088C);
            return _0x20511
        };
        _0x20B20.f.prototype.featuresVolumeControl = _0x20B20.f.Ld();
        _0x20B20.f.prototype.featuresPlaybackRate = _0x20B20.f.Kd();
        _0x20B20.f.prototype.movingMediaElementInDOM = !_0x20B20.xd;
        _0x20B20.f.prototype.featuresFullscreenResize = _0x206BE;
        _0x20B20.f.prototype.featuresProgressEvents = _0x206BE;
        _0x20B20.f.prototype.featuresNativeTextTracks = _0x20B20.f.Re();
        var _0x20ADE, _0x20A9C = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
            _0x20AFF = /^video\/mp4/i;
        _0x20B20.f.Tc = function() {
            4 <= _0x20B20.ec && (_0x20ADE || (_0x20ADE = _0x20B20.A.constructor.prototype.canPlayType), _0x20B20.A.constructor.prototype.canPlayType = function(_0x20511) {
                return _0x20511 && _0x20A9C.test(_0x20511) ? "maybe" : _0x20ADE.call(this, _0x20511)
            });
            _0x20B20.Bd && (_0x20ADE || (_0x20ADE = _0x20B20.A.constructor.prototype.canPlayType), _0x20B20.A.constructor.prototype.canPlayType = function(_0x20511) {
                return _0x20511 && _0x20AFF.test(_0x20511) ? "maybe" : _0x20ADE.call(this, _0x20511)
            })
        };
        _0x20B20.f.Ye = function() {
            var _0x20511 = _0x20B20.A.constructor.prototype.canPlayType;
            _0x20B20.A.constructor.prototype.canPlayType = _0x20ADE;
            _0x20ADE = _0x207E7;
            return _0x20511
        };
        _0x20B20.f.Tc();
        _0x20B20.f.xb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
        _0x20B20.f.Kb = function(_0x20511) {
            if (_0x20511) {
                _0x20511.player = _0x207E7;
                for (_0x20511.parentNode && _0x20511.parentNode.removeChild(_0x20511); _0x20511.hasChildNodes();) {
                    _0x20511.removeChild(_0x20511.firstChild)
                };
                _0x20511.removeAttribute("src");
                if ("function" === typeof _0x20511.load) {
                    try {
                        _0x20511.load()
                    } catch (c) {}
                }
            }
        };
        _0x20B20.g = _0x20B20.j.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                _0x20B20.j.call(this, _0x20511, _0x20532, _0x20553);
                var _0x20574 = _0x20532.source;
                _0x20553 = _0x20511.id() + "_flash_api";
                var _0x20595 = _0x20511.q,
                    _0x20595 = _0x20B20.i.D({
                        readyFunction: "vqn.Flash.onReady",
                        eventProxyFunction: "vqn.Flash.onEvent",
                        errorEventProxyFunction: "vqn.Flash.onError",
                        autoplay: _0x20595.autoplay,
                        preload: _0x20595.Ra,
                        loop: _0x20595.loop,
                        muted: _0x20595.muted
                    }, _0x20532.flashVars),
                    _0x205B6 = _0x20B20.i.D({
                        wmode: "opaque",
                        bgcolor: "#000000"
                    }, _0x20532.params);
                _0x20553 = _0x20B20.i.D({
                    id: _0x20553,
                    name: _0x20553,
                    "class": "vjs-tech"
                }, _0x20532.attributes);
                _0x20574 && this.I(function() {
                    this.ma(_0x20574)
                });
                _0x20B20.Rb(this.c, _0x20532.parentEl);
                _0x20532.startTime && this.I(function() {
                    this.load();
                    this.play();
                    this.currentTime(_0x20532.startTime)
                });
                _0x20B20.gc && this.I(function() {
                    this.b("mousemove", function() {
                        this.k().o({
                            type: "mousemove",
                            bubbles: _0x2088C
                        })
                    })
                });
                _0x20511.b("stageclick", _0x20511.reportUserActivity);
                this.c = _0x20B20.g.Dc(_0x20532.swf, this.c, _0x20595, _0x205B6, _0x20553)
            }
        });
        _0x20ABD = _0x20B20.g.prototype;
        _0x20ABD.dispose = function() {
            _0x20B20.j.prototype.dispose.call(this)
        };
        _0x20ABD.play = function() {
            this.ended() && this.setCurrentTime(0);
            this.c.vjs_play()
        };
        _0x20ABD.pause = function() {
            this.c.vjs_pause()
        };
        _0x20ABD.src = function(_0x20511) {
            return _0x20511 === _0x20574 ? this.currentSrc() : this.na(_0x20511)
        };
        _0x20ABD.na = function(_0x20511) {
            _0x20511 = _0x20B20.Xd(_0x20511);
            this.c.vjs_src(_0x20511);
            if (this.d.autoplay()) {
                var _0x20532 = this;
                this.setTimeout(function() {
                    _0x20532.play()
                }, 0)
            }
        };
        _0x20B20.g.prototype.setCurrentTime = function(_0x20511) {
            this.ke = _0x20511;
            this.c.vjs_setProperty("currentTime", _0x20511);
            _0x20B20.j.prototype.Zb.call(this)
        };
        _0x20B20.g.prototype.currentTime = function() {
            return this.seeking() ? this.ke || 0 : this.c.vjs_getProperty("currentTime")
        };
        _0x20B20.g.prototype.currentSrc = function() {
            return this.fb ? this.fb.src : this.c.vjs_getProperty("currentSrc")
        };
        _0x20B20.g.prototype.load = function() {
            this.c.vjs_load()
        };
        _0x20B20.g.prototype.poster = function() {
            this.c.vjs_getProperty("poster")
        };
        _0x20B20.g.prototype.setPoster = _0x208EF();
        _0x20ABD = _0x20B20.g.prototype;
        _0x20ABD.seekable = function() {
            return 0 === this.duration() ? _0x20B20.xa() : _0x20B20.xa(0, this.duration())
        };
        _0x20ABD.buffered = function() {
            return !this.c.vjs_getProperty ? _0x20B20.xa() : _0x20B20.xa(0, this.c.vjs_getProperty("buffered"))
        };
        _0x20ABD.duration = function() {
            return !this.c.vjs_getProperty ? 0 : this.c.vjs_getProperty("duration")
        };
        _0x20ABD.Sa = _0x209F7(_0x2088C);
        _0x20ABD.Ec = _0x209F7(_0x2088C);
    
        function _0x20B62() {
            var _0x20511 = _0x20B41[_0x20B83],
                _0x20532 = _0x20511.charAt(0).toUpperCase() + _0x20511.slice(1);
            _0x20BA4["set" + _0x20532] = function(_0x20532) {
                return this.c.vjs_setProperty(_0x20511, _0x20532)
            }
        }
    
        function _0x20C07(_0x20511) {
            _0x20BA4[_0x20511] = function() {
                return this.c.vjs_getProperty(_0x20511)
            }
        }
        var _0x20BA4 = _0x20B20.g.prototype,
            _0x20B41 = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
            _0x20C8B = "error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),
            _0x20B83;
        for (_0x20B83 = 0; _0x20B83 < _0x20B41.length; _0x20B83++) {
            _0x20C07(_0x20B41[_0x20B83]), _0x20B62()
        };
        for (_0x20B83 = 0; _0x20B83 < _0x20C8B.length; _0x20B83++) {
            _0x20C07(_0x20C8B[_0x20B83])
        };
        _0x20B20.g.isSupported = function() {
            return 10 <= _0x20B20.g.version()[0]
        };
        _0x20B20.j.dc(_0x20B20.g);
        _0x20B20.g.nativeSourceHandler = {};
        _0x20B20.g.nativeSourceHandler.canHandleSource = function(_0x20511) {
            return !_0x20511.type ? "" : _0x20511.type.replace(/;.*/, "").toLowerCase() in _0x20B20.g.Wd ? "maybe" : ""
        };
        _0x20B20.g.nativeSourceHandler.handleSource = function(_0x20511, _0x20532) {
            _0x20532.na(_0x20511.src)
        };
        _0x20B20.g.nativeSourceHandler.dispose = _0x208EF();
        _0x20B20.g.registerSourceHandler(_0x20B20.g.nativeSourceHandler);
        _0x20B20.g.Wd = {
            "video/flv": "FLV",
            "video/x-flv": "FLV",
            "video/mp4": "MP4",
            "video/m4v": "MP4"
        };
        _0x20B20.g.onReady = function(_0x20511) {
            var _0x20532;
            if (_0x20532 = (_0x20511 = _0x20B20.m(_0x20511)) && _0x20511.parentNode && _0x20511.parentNode.player) {
                _0x20511.player = _0x20532, _0x20B20.g.checkReady(_0x20532.h)
            }
        };
        _0x20B20.g.checkReady = function(_0x20511) {
            _0x20511.m() && (_0x20511.m().vjs_getProperty ? _0x20511.Va() : this.setTimeout(function() {
                _0x20B20.g.checkReady(_0x20511)
            }, 50))
        };
        _0x20B20.g.onEvent = function(_0x20511, _0x20532) {
            _0x20B20.m(_0x20511).player.o(_0x20532)
        };
        _0x20B20.g.onError = function(_0x20511, _0x20532) {
            var _0x20553 = _0x20B20.m(_0x20511).player,
                _0x20574 = "FLASH: " + _0x20532;
            "srcnotfound" == _0x20532 ? _0x20553.error({
                code: 4,
                message: _0x20574
            }) : _0x20553.error(_0x20574)
        };
        _0x20B20.g.version = function() {
            var _0x20511 = "0,0,0";
            try {
                _0x20511 = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
            } catch (c) {
                try {
                    navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (_0x20511 = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                } catch (d) {}
            };
            return _0x20511.split(",")
        };
        _0x20B20.g.Dc = function(_0x20511, _0x20532, _0x20553, _0x20574, _0x20595) {
            _0x20511 = _0x20B20.g.$d(_0x20511, _0x20553, _0x20574, _0x20595);
            _0x20511 = _0x20B20.e("div", {
                innerHTML: _0x20511
            }).childNodes[0];
            _0x20553 = _0x20532.parentNode;
            _0x20532.parentNode.replaceChild(_0x20511, _0x20532);
            _0x20511[_0x20B20.expando] = _0x20532[_0x20B20.expando];
            var _0x205B6 = _0x20553.childNodes[0];
            setTimeout(function() {
                _0x205B6.style.display = "block"
            }, 1E3);
            return _0x20511
        };
        _0x20B20.g.$d = function(_0x20511, _0x20532, _0x20553, _0x20574) {
            var _0x20595 = "",
                _0x205B6 = "",
                _0x205D7 = "";
            _0x20532 && _0x20B20.i.ca(_0x20532, function(_0x20511, _0x20532) {
                _0x20595 += _0x20511 + "=" + _0x20532 + "&amp;"
            });
            _0x20553 = _0x20B20.i.D({
                movie: _0x20511,
                flashvars: _0x20595,
                allowScriptAccess: "always",
                allowNetworking: "all"
            }, _0x20553);
            _0x20B20.i.ca(_0x20553, function(_0x20511, _0x20532) {
                _0x205B6 += "<param name=\"" + _0x20511 + "\" value=\"" + _0x20532 + "\" />"
            });
            _0x20574 = _0x20B20.i.D({
                data: _0x20511,
                width: "100%",
                height: "100%"
            }, _0x20574);
            _0x20B20.i.ca(_0x20574, function(_0x20511, _0x20532) {
                _0x205D7 += _0x20511 + "=\"" + _0x20532 + "\" "
            });
            return "<object type=\"application/x-shockwave-flash\" " + _0x205D7 + ">" + _0x205B6 + "</object>"
        };
        _0x20B20.g.Qe = {
            "rtmp/mp4": "MP4",
            "rtmp/flv": "FLV"
        };
        _0x20B20.g.Df = function(_0x20511, _0x20532) {
            return _0x20511 + "&" + _0x20532
        };
        _0x20B20.g.Pe = function(_0x20511) {
            var _0x20532 = {
                yc: "",
                jd: ""
            };
            if (!_0x20511) {
                return _0x20532
            };
            var _0x20553 = _0x20511.indexOf("&"),
                _0x20574; - 1 !== _0x20553 ? _0x20574 = _0x20553 + 1 : (_0x20553 = _0x20574 = _0x20511.lastIndexOf("/") + 1, 0 === _0x20553 && (_0x20553 = _0x20574 = _0x20511.length));
            _0x20532.yc = _0x20511.substring(0, _0x20553);
            _0x20532.jd = _0x20511.substring(_0x20574, _0x20511.length);
            return _0x20532
        };
        _0x20B20.g.ie = function(_0x20511) {
            return _0x20511 in _0x20B20.g.Qe
        };
        _0x20B20.g.Dd = /^rtmp[set]?:\/\//i;
        _0x20B20.g.he = function(_0x20511) {
            return _0x20B20.g.Dd.test(_0x20511)
        };
        _0x20B20.g.Yb = {};
        _0x20B20.g.Yb.canHandleSource = function(_0x20511) {
            return _0x20B20.g.ie(_0x20511.type) || _0x20B20.g.he(_0x20511.src) ? "maybe" : ""
        };
        _0x20B20.g.Yb.handleSource = function(_0x20511, _0x20532) {
            var _0x20553 = _0x20B20.g.Pe(_0x20511.src);
            _0x20532.setRtmpConnection(_0x20553.yc);
            _0x20532.setRtmpStream(_0x20553.jd)
        };
        _0x20B20.g.registerSourceHandler(_0x20B20.g.Yb);
        _0x20B20.Cd = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                _0x20B20.a.call(this, _0x20511, _0x20532, _0x20553);
                if (!_0x20511.q.sources || 0 === _0x20511.q.sources.length) {
                    _0x20532 = 0;
                    for (_0x20553 = _0x20511.q.techOrder; _0x20532 < _0x20553.length; _0x20532++) {
                        var _0x20574 = _0x20B20.va(_0x20553[_0x20532]),
                            _0x20595 = window.vqn[_0x20574];
                        if (_0x20595 && _0x20595.isSupported()) {
                            _0x2086B(_0x20511, _0x20574);
                            break
                        }
                    }
                } else {
                    _0x20511.src(_0x20511.q.sources)
                }
            }
        });
        _0x20B20.oc = {
            disabled: "disabled",
            hidden: "hidden",
            showing: "showing"
        };
        _0x20B20.Ed = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        };
        _0x20B20.t = function(_0x20511) {
            var _0x20553, _0x20574, _0x20595, _0x205B6, _0x205D7, _0x205F8, _0x20619, _0x2063A, _0x2067C, _0x20532, _0x2065B;
            _0x20511 = _0x20511 || {};
            if (!_0x20511.player) {
                throw Error("A player was not provided.")
            };
            _0x20553 = this;
            if (_0x20B20.pa) {
                for (_0x2065B in _0x20553 = document.createElement("custom"), _0x20B20.t.prototype) {
                    _0x20553[_0x2065B] = _0x20B20.t.prototype[_0x2065B]
                }
            };
            _0x20553.d = _0x20511.player;
            _0x20595 = _0x20B20.oc[_0x20511.mode] || "disabled";
            _0x205B6 = _0x20B20.Ed[_0x20511.kind] || "subtitles";
            _0x205D7 = _0x20511.label || "";
            _0x205F8 = _0x20511.language || _0x20511.srclang || "";
            _0x20574 = _0x20511.id || "vjs_text_track_" + _0x20B20.s++;
            if ("metadata" === _0x205B6 || "chapters" === _0x205B6) {
                _0x20595 = "hidden"
            };
            _0x20553.V = [];
            _0x20553.Ia = [];
            _0x20619 = new _0x20B20.U(_0x20553.V);
            _0x2063A = new _0x20B20.U(_0x20553.Ia);
            _0x20532 = _0x2088C;
            _0x2067C = _0x20B20.bind(_0x20553, function() {
                this.activeCues;
                _0x20532 && (this.trigger("cuechange"), _0x20532 = _0x2088C)
            });
            "disabled" !== _0x20595 && _0x20553.d.b("timeupdate", _0x2067C);
            Object.defineProperty(_0x20553, "kind", {
                get: function() {
                    return _0x205B6
                },
                set: Function.prototype
            });
            Object.defineProperty(_0x20553, "label", {
                get: function() {
                    return _0x205D7
                },
                set: Function.prototype
            });
            Object.defineProperty(_0x20553, "language", {
                get: function() {
                    return _0x205F8
                },
                set: Function.prototype
            });
            Object.defineProperty(_0x20553, "id", {
                get: function() {
                    return _0x20574
                },
                set: Function.prototype
            });
            Object.defineProperty(_0x20553, "mode", {
                get: function() {
                    return _0x20595
                },
                set: function(_0x20511) {
                    _0x20B20.oc[_0x20511] && (_0x20595 = _0x20511, "showing" === _0x20595 && this.d.b("timeupdate", _0x2067C), this.o("modechange"))
                }
            });
            Object.defineProperty(_0x20553, "cues", {
                get: function() {
                    return !this.Ub ? _0x207E7 : _0x20619
                },
                set: Function.prototype
            });
            Object.defineProperty(_0x20553, "activeCues", {
                get: function() {
                    var _0x20511, _0x20553, _0x20574, _0x20595, _0x205B6;
                    if (!this.Ub) {
                        return _0x207E7
                    };
                    if (0 === this.cues.length) {
                        return _0x2063A
                    };
                    _0x20595 = this.d.currentTime();
                    _0x20511 = 0;
                    _0x20553 = this.cues.length;
                    for (_0x20574 = []; _0x20511 < _0x20553; _0x20511++) {
                        _0x205B6 = this.cues[_0x20511], _0x205B6.startTime <= _0x20595 && _0x205B6.endTime >= _0x20595 ? _0x20574.push(_0x205B6) : _0x205B6.startTime === _0x205B6.endTime && (_0x205B6.startTime <= _0x20595 && _0x205B6.startTime + 0.5 >= _0x20595) && _0x20574.push(_0x205B6)
                    };
                    _0x20532 = _0x2088C;
                    if (_0x20574.length !== this.Ia.length) {
                        _0x20532 = _0x206BE
                    } else {
                        for (_0x20511 = 0; _0x20511 < _0x20574.length; _0x20511++) {
                            -1 === _0x20CEE.call(this.Ia, _0x20574[_0x20511]) && (_0x20532 = _0x206BE)
                        }
                    };
                    this.Ia = _0x20574;
                    _0x2063A.pb(this.Ia);
                    return _0x2063A
                },
                set: Function.prototype
            });
            _0x20511.src ? _0x20D51(_0x20511.src, _0x20553) : _0x20553.Ub = _0x206BE;
            if (_0x20B20.pa) {
                return _0x20553
            }
        };
        _0x20B20.t.prototype = _0x20B20.i.create(_0x20B20.z.prototype);
        _0x20B20.t.prototype.constructor = _0x20B20.t;
        _0x20B20.t.prototype.ab = {
            cuechange: "cuechange"
        };
        _0x20B20.t.prototype.sc = function(_0x20511) {
            var _0x20532 = this.d.textTracks(),
                _0x20553 = 0;
            if (_0x20532) {
                for (; _0x20553 < _0x20532.length; _0x20553++) {
                    _0x20532[_0x20553] !== this && _0x20532[_0x20553].Yc(_0x20511)
                }
            };
            this.V.push(_0x20511);
            this.cues.pb(this.V)
        };
        _0x20B20.t.prototype.Yc = function(_0x20511) {
            for (var _0x20532 = 0, _0x20553 = this.V.length, _0x20574, _0x20595 = _0x2088C; _0x20532 < _0x20553; _0x20532++) {
                _0x20574 = this.V[_0x20532], _0x20574 === _0x20511 && (this.V.splice(_0x20532, 1), _0x20595 = _0x206BE)
            };
            _0x20595 && this.Ac.pb(this.V)
        };
        var _0x20D51, _0x20BE6, _0x20CEE;
        _0x20D51 = function(_0x20511, _0x20532) {
            _0x20B20.bf(_0x20511, _0x20B20.bind(this, function(_0x20511, _0x20553, _0x20574) {
                if (_0x20511) {
                    return _0x20B20.log.error(_0x20511)
                };
                _0x20532.Ub = _0x206BE;
                _0x20BE6(_0x20574, _0x20532)
            }))
        };
        _0x20BE6 = function(_0x20511, _0x20532) {
            if ("function" !== typeof window.WebVTT) {
                window.setTimeout(function() {
                    _0x20BE6(_0x20511, _0x20532)
                }, 25)
            } else {
                var _0x20553 = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
                _0x20553.oncue = function(_0x20511) {
                    _0x20532.sc(_0x20511)
                };
                _0x20553.onparsingerror = function(_0x20511) {
                    _0x20B20.log.error(_0x20511)
                };
                _0x20553.parse(_0x20511);
                _0x20553.flush()
            }
        };
        _0x20CEE = function(_0x20511, _0x20532) {
            var _0x20553;
            if (this == _0x207E7) {
                throw new TypeError("\"this\" is null or not defined")
            };
            var _0x20574 = Object(this),
                _0x20595 = _0x20574.length >>> 0;
            if (0 === _0x20595) {
                return -1
            };
            _0x20553 = +_0x20532 || 0;
            Infinity === Math.abs(_0x20553) && (_0x20553 = 0);
            if (_0x20553 >= _0x20595) {
                return -1
            };
            for (_0x20553 = Math.max(0 <= _0x20553 ? _0x20553 : _0x20595 - Math.abs(_0x20553), 0); _0x20553 < _0x20595;) {
                if (_0x20553 in _0x20574 && _0x20574[_0x20553] === _0x20511) {
                    return _0x20553
                };
                _0x20553++
            };
            return -1
        };
        _0x20B20.F = function(_0x20511) {
            var _0x20532 = this,
                _0x20553, _0x20574 = 0;
            if (_0x20B20.pa) {
                for (_0x20553 in _0x20532 = document.createElement("custom"), _0x20B20.F.prototype) {
                    _0x20532[_0x20553] = _0x20B20.F.prototype[_0x20553]
                }
            };
            _0x20511 = _0x20511 || [];
            _0x20532.Ua = [];
            for (Object.defineProperty(_0x20532, "length", {
                    get: function() {
                        return this.Ua.length
                    }
                }); _0x20574 < _0x20511.length; _0x20574++) {
                _0x20A18(_0x20532, _0x20511[_0x20574])
            };
            if (_0x20B20.pa) {
                return _0x20532
            }
        };
        _0x20B20.F.prototype = _0x20B20.i.create(_0x20B20.z.prototype);
        _0x20B20.F.prototype.constructor = _0x20B20.F;
        _0x20B20.F.prototype.ab = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        };
        for (var _0x20DB4 in _0x20B20.F.prototype.ab) {
            _0x20B20.F.prototype["on" + _0x20DB4] = _0x207E7
        };
    
        function _0x20A18(_0x20511, _0x20532) {
            var _0x20553 = _0x20511.Ua.length;
            "" + _0x20553 in _0x20511 || Object.defineProperty(_0x20511, _0x20553, {
                get: function() {
                    return this.Ua[_0x20553]
                }
            });
            _0x20532.addEventListener("modechange", _0x20B20.bind(_0x20511, function() {
                this.o("change")
            }));
            _0x20511.Ua.push(_0x20532);
            _0x20511.o({
                type: "addtrack",
                Y: _0x20532
            })
        }
    
        function _0x20A5A(_0x20511, _0x20532) {
            for (var _0x20553 = 0, _0x20574 = _0x20511.length, _0x20595; _0x20553 < _0x20574; _0x20553++) {
                if (_0x20595 = _0x20511[_0x20553], _0x20595 === _0x20532) {
                    _0x20511.Ua.splice(_0x20553, 1);
                    break
                }
            };
            _0x20511.o({
                type: "removetrack",
                Y: _0x20532
            })
        }
        _0x20B20.F.prototype.ae = function(_0x20511) {
            for (var _0x20532 = 0, _0x20553 = this.length, _0x20574 = _0x207E7, _0x20595; _0x20532 < _0x20553; _0x20532++) {
                if (_0x20595 = this[_0x20532], _0x20595.id === _0x20511) {
                    _0x20574 = _0x20595;
                    break
                }
            };
            return _0x20574
        };
        _0x20B20.U = function(_0x20511) {
            var _0x20532 = this,
                _0x20553;
            if (_0x20B20.pa) {
                for (_0x20553 in _0x20532 = document.createElement("custom"), _0x20B20.U.prototype) {
                    _0x20532[_0x20553] = _0x20B20.U.prototype[_0x20553]
                }
            };
            _0x20B20.U.prototype.pb.call(_0x20532, _0x20511);
            Object.defineProperty(_0x20532, "length", {
                get: _0x20952("le")
            });
            if (_0x20B20.pa) {
                return _0x20532
            }
        };
        _0x20B20.U.prototype.pb = function(_0x20511) {
            var _0x20532 = this.length || 0,
                _0x20553 = 0,
                _0x20574 = _0x20511.length;
            this.V = _0x20511;
            this.le = _0x20511.length;
            _0x20511 = function(_0x20511) {
                "" + _0x20511 in this || Object.defineProperty(this, "" + _0x20511, {
                    get: function() {
                        return this.V[_0x20511]
                    }
                })
            };
            if (_0x20532 < _0x20574) {
                for (_0x20553 = _0x20532; _0x20553 < _0x20574; _0x20553++) {
                    _0x20511.call(this, _0x20553)
                }
            }
        };
        _0x20B20.U.prototype.Zd = function(_0x20511) {
            for (var _0x20532 = 0, _0x20553 = this.length, _0x20574 = _0x207E7, _0x20595; _0x20532 < _0x20553; _0x20532++) {
                if (_0x20595 = this[_0x20532], _0x20595.id === _0x20511) {
                    _0x20574 = _0x20595;
                    break
                }
            };
            return _0x20574
        };
        _0x20B20.sa = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                _0x20B20.a.call(this, _0x20511, _0x20532, _0x20553);
                _0x20511.b("loadstart", _0x20B20.bind(this, this.Ve));
                _0x20511.I(_0x20B20.bind(this, function() {
                    if (_0x20511.h && _0x20511.h.featuresNativeTextTracks) {
                        this.W()
                    } else {
                        var _0x20532, _0x20553, _0x20574;
                        _0x20511.b("fullscreenchange", _0x20B20.bind(this, this.C));
                        _0x20553 = _0x20511.q.tracks || [];
                        for (_0x20532 = 0; _0x20532 < _0x20553.length; _0x20532++) {
                            _0x20574 = _0x20553[_0x20532], this.d.ha(_0x20574)
                        }
                    }
                }))
            }
        });
        _0x20B20.sa.prototype.Ve = function() {
            this.d.h && this.d.h.featuresNativeTextTracks ? this.W() : this.show()
        };
        _0x20B20.sa.prototype.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-text-track-display"
            })
        };
        _0x20B20.sa.prototype.Md = function() {
            "function" === typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
        };
    
        function _0x20C6A(_0x20511, _0x20532) {
            return "rgba(" + parseInt(_0x20511[1] + _0x20511[1], 16) + "," + parseInt(_0x20511[2] + _0x20511[2], 16) + "," + parseInt(_0x20511[3] + _0x20511[3], 16) + "," + _0x20532 + ")"
        }
        var _0x20553 = {
            tf: "monospace",
            zf: "sans-serif",
            Bf: "serif",
            uf: "\"Andale Mono\", \"Lucida Console\", monospace",
            vf: "\"Courier New\", monospace",
            xf: "sans-serif",
            yf: "serif",
            kf: "\"Comic Sans MS\", Impact, fantasy",
            Af: "\"Monotype Corsiva\", cursive",
            Cf: "\"Andale Mono\", \"Lucida Console\", monospace, sans-serif"
        };
        _0x20B20.sa.prototype.C = function() {
            var _0x20511 = this.d.textTracks(),
                _0x20532 = 0,
                _0x20553;
            this.Md();
            if (_0x20511) {
                for (; _0x20532 < _0x20511.length; _0x20532++) {
                    _0x20553 = _0x20511[_0x20532], "showing" === _0x20553.mode && this.Ze(_0x20553)
                }
            }
        };
        _0x20B20.sa.prototype.Ze = function(_0x20511) {
            if ("function" === typeof window.WebVTT && _0x20511.activeCues) {
                for (var _0x20532 = 0, _0x20574 = this.d.textTrackSettings.Hc(), _0x20595, _0x205B6 = []; _0x20532 < _0x20511.activeCues.length; _0x20532++) {
                    _0x205B6.push(_0x20511.activeCues[_0x20532])
                };
                window.WebVTT.processCues(window, _0x20511.activeCues, this.c);
                for (_0x20532 = _0x205B6.length; _0x20532--;) {
                    _0x20511 = _0x205B6[_0x20532].lf;
                    _0x20574.color && (_0x20511.firstChild.style.color = _0x20574.color);
                    if (_0x20574.kd) {
                        try {
                            _0x20511.firstChild.style.color = _0x20C6A(_0x20574.color || "#fff", _0x20574.kd)
                        } catch (h) {}
                    };
                    _0x20574.backgroundColor && (_0x20511.firstChild.style.backgroundColor = _0x20574.backgroundColor);
                    if (_0x20574.vc) {
                        try {
                            _0x20511.firstChild.style.backgroundColor = _0x20C6A(_0x20574.backgroundColor || "#000", _0x20574.vc)
                        } catch (k) {}
                    };
                    if (_0x20574.cc) {
                        if (_0x20574.rd) {
                            try {
                                _0x20511.style.backgroundColor = _0x20C6A(_0x20574.cc, _0x20574.rd)
                            } catch (q) {}
                        } else {
                            _0x20511.style.backgroundColor = _0x20574.cc
                        }
                    };
                    _0x20574.Ma && ("dropshadow" === _0x20574.Ma ? _0x20511.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === _0x20574.Ma ? _0x20511.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === _0x20574.Ma ? _0x20511.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === _0x20574.Ma && (_0x20511.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
                    _0x20574.Ob && 1 !== _0x20574.Ob && (_0x20595 = window.wf(_0x20511.style.fontSize), _0x20511.style.fontSize = _0x20595 * _0x20574.Ob + "px", _0x20511.style.height = "auto", _0x20511.style.top = "auto", _0x20511.style.bottom = "2px");
                    _0x20574.fontFamily && "default" !== _0x20574.fontFamily && ("small-caps" === _0x20574.fontFamily ? _0x20511.firstChild.style.fontVariant = "small-caps" : _0x20511.firstChild.style.fontFamily = _0x20553[_0x20574.fontFamily])
                }
            }
        };
        _0x20B20.$ = _0x20B20.M.extend({
            l: function(_0x20511, _0x20532) {
                var _0x20553 = this.Y = _0x20532["track"],
                    _0x20595 = _0x20511.textTracks(),
                    _0x205B6, _0x205D7;
                _0x20595 && (_0x205B6 = _0x20B20.bind(this, function() {
                    var _0x20511 = "showing" === this.Y.mode,
                        _0x20532, _0x20553, _0x20574;
                    if (this instanceof _0x20B20.zb) {
                        _0x20511 = _0x206BE;
                        _0x20553 = 0;
                        for (_0x20574 = _0x20595.length; _0x20553 < _0x20574; _0x20553++) {
                            if (_0x20532 = _0x20595[_0x20553], _0x20532.kind === this.Y.kind && "showing" === _0x20532.mode) {
                                _0x20511 = _0x2088C;
                                break
                            }
                        }
                    };
                    this.selected(_0x20511)
                }), _0x20595.addEventListener("change", _0x205B6), _0x20511.b("dispose", function() {
                    _0x20595.removeEventListener("change", _0x205B6)
                }));
                _0x20532.label = _0x20553.label || _0x20553.language || "Unknown";
                _0x20532.selected = _0x20553.default || "showing" === _0x20553.mode;
                _0x20B20.M.call(this, _0x20511, _0x20532);
                _0x20595 && _0x20595.onchange === _0x20574 && this.b(["tap", "click"], function() {
                    if ("object" !== typeof window.vd) {
                        try {
                            _0x205D7 = new window.vd("change")
                        } catch (_0x20511) {}
                    };
                    _0x205D7 || (_0x205D7 = document.createEvent("Event"), _0x205D7.initEvent("change", _0x206BE, _0x206BE));
                    _0x20595.dispatchEvent(_0x205D7)
                })
            }
        });
        _0x20B20.$.prototype.u = function() {
            var _0x20511 = this.Y.kind,
                _0x20532 = this.d.textTracks(),
                _0x20553, _0x20574 = 0;
            _0x20B20.M.prototype.u.call(this);
            if (_0x20532) {
                for (; _0x20574 < _0x20532.length; _0x20574++) {
                    _0x20553 = _0x20532[_0x20574], _0x20553.kind === _0x20511 && (_0x20553.mode = _0x20553 === this.Y ? "showing" : "disabled")
                }
            }
        };
        _0x20B20.zb = _0x20B20.$.extend({
            l: function(_0x20511, _0x20532) {
                _0x20532["track"] = {
                    kind: _0x20532.kind,
                    player: _0x20511,
                    label: _0x20532.kind + " off",
                    "default": _0x2088C,
                    mode: "disabled"
                };
                _0x20B20.$.call(this, _0x20511, _0x20532);
                this.selected(_0x206BE)
            }
        });
        _0x20B20.sb = _0x20B20.$.extend({
            l: function(_0x20511, _0x20532) {
                _0x20532["track"] = {
                    kind: _0x20532.kind,
                    player: _0x20511,
                    label: _0x20532.kind + " settings",
                    "default": _0x2088C,
                    mode: "disabled"
                };
                _0x20B20.$.call(this, _0x20511, _0x20532);
                this.p("vjs-texttrack-settings")
            }
        });
        _0x20B20.sb.prototype.u = function() {
            this.k().da("textTrackSettings").show()
        };
        _0x20B20.Q = _0x20B20.O.extend({
            l: function(_0x20511, _0x20532) {
                var _0x20553, _0x20574;
                _0x20B20.O.call(this, _0x20511, _0x20532);
                _0x20553 = this.d.textTracks();
                1 >= this.H.length && this.W();
                _0x20553 && (_0x20574 = _0x20B20.bind(this, this.update), _0x20553.addEventListener("removetrack", _0x20574), _0x20553.addEventListener("addtrack", _0x20574), this.d.b("dispose", function() {
                    _0x20553.removeEventListener("removetrack", _0x20574);
                    _0x20553.removeEventListener("addtrack", _0x20574)
                }))
            }
        });
        _0x20B20.Q.prototype.Ka = function() {
            var _0x20511 = [],
                _0x20532, _0x20553;
            this instanceof _0x20B20.oa && (!this.k().h || !this.k().h.featuresNativeTextTracks) && _0x20511.push(new _0x20B20.sb(this.d, {
                kind: this.ea
            }));
            _0x20511.push(new _0x20B20.zb(this.d, {
                kind: this.ea
            }));
            _0x20553 = this.d.textTracks();
            if (!_0x20553) {
                return _0x20511
            };
            for (var _0x20574 = 0; _0x20574 < _0x20553.length; _0x20574++) {
                _0x20532 = _0x20553[_0x20574], _0x20532.kind === this.ea && _0x20511.push(new _0x20B20.$(this.d, {
                    track: _0x20532
                }))
            };
            return _0x20511
        };
        _0x20B20.oa = _0x20B20.Q.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                _0x20B20.Q.call(this, _0x20511, _0x20532, _0x20553);
                this.c.setAttribute("aria-label", "Captions Menu")
            }
        });
        _0x20B20.oa.prototype.ea = "captions";
        _0x20B20.oa.prototype.ta = "Captions";
        _0x20B20.oa.prototype.className = "vjs-captions-button";
        _0x20B20.oa.prototype.update = function() {
            var _0x20511 = 2;
            _0x20B20.Q.prototype.update.call(this);
            this.k().h && this.k().h.featuresNativeTextTracks && (_0x20511 = 1);
            this.H && this.H.length > _0x20511 ? this.show() : this.W()
        };
        _0x20B20.$a = _0x20B20.Q.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                _0x20B20.Q.call(this, _0x20511, _0x20532, _0x20553);
                this.c.setAttribute("aria-label", "Subtitles Menu")
            }
        });
        _0x20B20.$a.prototype.ea = "subtitles";
        _0x20B20.$a.prototype.ta = "Subtitles";
        _0x20B20.$a.prototype.className = "vjs-subtitles-button";
        _0x20B20.Wa = _0x20B20.Q.extend({
            l: function(_0x20511, _0x20532, _0x20553) {
                _0x20B20.Q.call(this, _0x20511, _0x20532, _0x20553);
                this.c.setAttribute("aria-label", "Chapters Menu")
            }
        });
        _0x20ABD = _0x20B20.Wa.prototype;
        _0x20ABD.ea = "chapters";
        _0x20ABD.ta = "Chapters";
        _0x20ABD.className = "vjs-chapters-button";
        _0x20ABD.Ka = function() {
            var _0x20511 = [],
                _0x20532, _0x20553;
            _0x20553 = this.d.textTracks();
            if (!_0x20553) {
                return _0x20511
            };
            for (var _0x20574 = 0; _0x20574 < _0x20553.length; _0x20574++) {
                _0x20532 = _0x20553[_0x20574], _0x20532.kind === this.ea && _0x20511.push(new _0x20B20.$(this.d, {
                    track: _0x20532
                }))
            };
            return _0x20511
        };
        _0x20ABD.La = function() {
            for (var _0x20511 = this.d.textTracks() || [], _0x20532 = 0, _0x20553 = _0x20511.length, _0x20595, _0x205B6, _0x205D7 = this.H = []; _0x20532 < _0x20553; _0x20532++) {
                if (_0x20595 = _0x20511[_0x20532], _0x20595.kind == this.ea) {
                    if (_0x20595.Ac) {
                        _0x205B6 = _0x20595;
                        break
                    } else {
                        _0x20595.mode = "hidden", window.setTimeout(_0x20B20.bind(this, function() {
                            this.La()
                        }), 100)
                    }
                }
            };
            _0x20511 = this.za;
            _0x20511 === _0x20574 && (_0x20511 = new _0x20B20.qa(this.d), _0x20511.wa().appendChild(_0x20B20.e("li", {
                className: "vjs-menu-title",
                innerHTML: _0x20B20.va(this.ea),
                Se: -1
            })));
            if (_0x205B6) {
                _0x20595 = _0x205B6.cues;
                for (var _0x205F8, _0x20532 = 0, _0x20553 = _0x20595.length; _0x20532 < _0x20553; _0x20532++) {
                    _0x205F8 = _0x20595[_0x20532], _0x205F8 = new _0x20B20.Xa(this.d, {
                        track: _0x205B6,
                        cue: _0x205F8
                    }), _0x205D7.push(_0x205F8), _0x20511.aa(_0x205F8)
                };
                this.aa(_0x20511)
            };
            0 < this.H.length && this.show();
            return _0x20511
        };
        _0x20B20.Xa = _0x20B20.M.extend({
            l: function(_0x20511, _0x20532) {
                var _0x20553 = this.Y = _0x20532["track"],
                    _0x20574 = this.cue = _0x20532.cue,
                    _0x20595 = _0x20511.currentTime();
                _0x20532.label = _0x20574.text;
                _0x20532.selected = _0x20574.startTime <= _0x20595 && _0x20595 < _0x20574.endTime;
                _0x20B20.M.call(this, _0x20511, _0x20532);
                _0x20553.addEventListener("cuechange", _0x20B20.bind(this, this.update))
            }
        });
        _0x20B20.Xa.prototype.u = function() {
            _0x20B20.M.prototype.u.call(this);
            this.d.currentTime(this.cue.startTime);
            this.update(this.cue.startTime)
        };
        _0x20B20.Xa.prototype.update = function() {
            var _0x20511 = this.cue,
                _0x20532 = this.d.currentTime();
            this.selected(_0x20511.startTime <= _0x20532 && _0x20532 < _0x20511.endTime)
        };
    
        function _0x20CCD(_0x20511) {
            var _0x20532;
            _0x20511.Ge ? _0x20532 = _0x20511.Ge[0] : _0x20511.options && (_0x20532 = _0x20511.options[_0x20511.options.selectedIndex]);
            return _0x20532.value
        }
    
        function _0x20D30(_0x20511, _0x20532) {
            var _0x20553, _0x20574;
            if (_0x20532) {
                for (_0x20553 = 0; _0x20553 < _0x20511.options.length && !(_0x20574 = _0x20511.options[_0x20553], _0x20574.value === _0x20532); _0x20553++) {;
                };
                _0x20511.selectedIndex = _0x20553
            }
        }
        _0x20B20.pc = _0x20B20.a.extend({
            l: function(_0x20511, _0x20532) {
                _0x20B20.a.call(this, _0x20511, _0x20532);
                this.W();
                _0x20B20.b(this.m().querySelector(".vjs-done-button"), "click", _0x20B20.bind(this, function() {
                    this.Fe();
                    this.W()
                }));
                _0x20B20.b(this.m().querySelector(".vjs-default-button"), "click", _0x20B20.bind(this, function() {
                    this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0;
                    this.m().querySelector(".window-color > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-text-opacity > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-edge-style select").selectedIndex = 0;
                    this.m().querySelector(".vjs-font-family select").selectedIndex = 0;
                    this.m().querySelector(".vjs-font-percent select").selectedIndex = 2;
                    this.C()
                }));
                _0x20B20.b(this.m().querySelector(".vjs-fg-color > select"), "change", _0x20B20.bind(this, this.C));
                _0x20B20.b(this.m().querySelector(".vjs-bg-color > select"), "change", _0x20B20.bind(this, this.C));
                _0x20B20.b(this.m().querySelector(".window-color > select"), "change", _0x20B20.bind(this, this.C));
                _0x20B20.b(this.m().querySelector(".vjs-text-opacity > select"), "change", _0x20B20.bind(this, this.C));
                _0x20B20.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", _0x20B20.bind(this, this.C));
                _0x20B20.b(this.m().querySelector(".vjs-window-opacity > select"), "change", _0x20B20.bind(this, this.C));
                _0x20B20.b(this.m().querySelector(".vjs-font-percent select"), "change", _0x20B20.bind(this, this.C));
                _0x20B20.b(this.m().querySelector(".vjs-edge-style select"), "change", _0x20B20.bind(this, this.C));
                _0x20B20.b(this.m().querySelector(".vjs-font-family select"), "change", _0x20B20.bind(this, this.C));
                _0x20511.options().persistTextTrackSettings && this.Ee()
            }
        });
        _0x20ABD = _0x20B20.pc.prototype;
        _0x20ABD.e = function() {
            return _0x20B20.a.prototype.e.call(this, "div", {
                className: "vjs-caption-settings vjs-modal-overlay",
                innerHTML: "<div class=\"vjs-tracksettings\"><div class=\"vjs-tracksettings-colors\"><div class=\"vjs-fg-color vjs-tracksetting\"><label class=\"vjs-label\">Foreground</label><select><option value=\"\">---</option><option value=\"#FFF\">White</option><option value=\"#000\">Black</option><option value=\"#F00\">Red</option><option value=\"#0F0\">Green</option><option value=\"#00F\">Blue</option><option value=\"#FF0\">Yellow</option><option value=\"#F0F\">Magenta</option><option value=\"#0FF\">Cyan</option></select><span class=\"vjs-text-opacity vjs-opacity\"><select><option value=\"\">---</option><option value=\"1\">Opaque</option><option value=\"0.5\">Semi-Opaque</option></select></span></div><div class=\"vjs-bg-color vjs-tracksetting\"><label class=\"vjs-label\">Background</label><select><option value=\"\">---</option><option value=\"#FFF\">White</option><option value=\"#000\">Black</option><option value=\"#F00\">Red</option><option value=\"#0F0\">Green</option><option value=\"#00F\">Blue</option><option value=\"#FF0\">Yellow</option><option value=\"#F0F\">Magenta</option><option value=\"#0FF\">Cyan</option></select><span class=\"vjs-bg-opacity vjs-opacity\"><select><option value=\"\">---</option><option value=\"1\">Opaque</option><option value=\"0.5\">Semi-Transparent</option><option value=\"0\">Transparent</option></select></span></div><div class=\"window-color vjs-tracksetting\"><label class=\"vjs-label\">Window</label><select><option value=\"\">---</option><option value=\"#FFF\">White</option><option value=\"#000\">Black</option><option value=\"#F00\">Red</option><option value=\"#0F0\">Green</option><option value=\"#00F\">Blue</option><option value=\"#FF0\">Yellow</option><option value=\"#F0F\">Magenta</option><option value=\"#0FF\">Cyan</option></select><span class=\"vjs-window-opacity vjs-opacity\"><select><option value=\"\">---</option><option value=\"1\">Opaque</option><option value=\"0.5\">Semi-Transparent</option><option value=\"0\">Transparent</option></select></span></div></div><div class=\"vjs-tracksettings-font\"><div class=\"vjs-font-percent vjs-tracksetting\"><label class=\"vjs-label\">Font Size</label><select><option value=\"0.50\">50%</option><option value=\"0.75\">75%</option><option value=\"1.00\" selected>100%</option><option value=\"1.25\">125%</option><option value=\"1.50\">150%</option><option value=\"1.75\">175%</option><option value=\"2.00\">200%</option><option value=\"3.00\">300%</option><option value=\"4.00\">400%</option></select></div><div class=\"vjs-edge-style vjs-tracksetting\"><label class=\"vjs-label\">Text Edge Style</label><select><option value=\"none\">None</option><option value=\"raised\">Raised</option><option value=\"depressed\">Depressed</option><option value=\"uniform\">Uniform</option><option value=\"dropshadow\">Dropshadow</option></select></div><div class=\"vjs-font-family vjs-tracksetting\"><label class=\"vjs-label\">Font Family</label><select><option value=\"\">Default</option><option value=\"monospaceSerif\">Monospace Serif</option><option value=\"proportionalSerif\">Proportional Serif</option><option value=\"monospaceSansSerif\">Monospace Sans-Serif</option><option value=\"proportionalSansSerif\">Proportional Sans-Serif</option><option value=\"casual\">Casual</option><option value=\"script\">Script</option><option value=\"small-caps\">Small Caps</option></select></div></div></div><div class=\"vjs-tracksettings-controls\"><button class=\"vjs-default-button\">Defaults</button><button class=\"vjs-done-button\">Done</button></div>"
            })
        };
        _0x20ABD.Hc = function() {
            var _0x20511, _0x20532, _0x20553, _0x20574, _0x20595, _0x205B6, _0x205D7, _0x205F8, _0x20619, _0x2063A;
            _0x20511 = this.m();
            _0x20595 = _0x20CCD(_0x20511.querySelector(".vjs-edge-style select"));
            _0x205B6 = _0x20CCD(_0x20511.querySelector(".vjs-font-family select"));
            _0x205D7 = _0x20CCD(_0x20511.querySelector(".vjs-fg-color > select"));
            _0x20553 = _0x20CCD(_0x20511.querySelector(".vjs-text-opacity > select"));
            _0x205F8 = _0x20CCD(_0x20511.querySelector(".vjs-bg-color > select"));
            _0x20532 = _0x20CCD(_0x20511.querySelector(".vjs-bg-opacity > select"));
            _0x20619 = _0x20CCD(_0x20511.querySelector(".window-color > select"));
            _0x20574 = _0x20CCD(_0x20511.querySelector(".vjs-window-opacity > select"));
            _0x20511 = window.parseFloat(_0x20CCD(_0x20511.querySelector(".vjs-font-percent > select")));
            _0x20532 = {
                backgroundOpacity: _0x20532,
                textOpacity: _0x20553,
                windowOpacity: _0x20574,
                edgeStyle: _0x20595,
                fontFamily: _0x205B6,
                color: _0x205D7,
                backgroundColor: _0x205F8,
                windowColor: _0x20619,
                fontPercent: _0x20511
            };
            for (_0x2063A in _0x20532) {
                ("" === _0x20532[_0x2063A] || "none" === _0x20532[_0x2063A] || "fontPercent" === _0x2063A && 1 === _0x20532[_0x2063A]) && delete _0x20532[_0x2063A]
            };
            return _0x20532
        };
        _0x20ABD.Ne = function(_0x20511) {
            var _0x20532 = this.m();
            _0x20D30(_0x20532.querySelector(".vjs-edge-style select"), _0x20511.Ma);
            _0x20D30(_0x20532.querySelector(".vjs-font-family select"), _0x20511.fontFamily);
            _0x20D30(_0x20532.querySelector(".vjs-fg-color > select"), _0x20511.color);
            _0x20D30(_0x20532.querySelector(".vjs-text-opacity > select"), _0x20511.kd);
            _0x20D30(_0x20532.querySelector(".vjs-bg-color > select"), _0x20511.backgroundColor);
            _0x20D30(_0x20532.querySelector(".vjs-bg-opacity > select"), _0x20511.vc);
            _0x20D30(_0x20532.querySelector(".window-color > select"), _0x20511.cc);
            _0x20D30(_0x20532.querySelector(".vjs-window-opacity > select"), _0x20511.rd);
            (_0x20511 = _0x20511.Ob) && (_0x20511 = _0x20511.toFixed(2));
            _0x20D30(_0x20532.querySelector(".vjs-font-percent > select"), _0x20511)
        };
        _0x20ABD.Ee = function() {
            var _0x20511;
            try {
                _0x20511 = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
            } catch (c) {};
            _0x20511 && this.Ne(_0x20511)
        };
        _0x20ABD.Fe = function() {
            var _0x20511;
            if (this.d.options().persistTextTrackSettings) {
                _0x20511 = this.Hc();
                try {
                    _0x20B20.hb(_0x20511) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(_0x20511))
                } catch (c) {}
            }
        };
        _0x20ABD.C = function() {
            var _0x20511 = this.d.da("textTrackDisplay");
            _0x20511 && _0x20511.C()
        };
        if ("undefined" !== typeof window.JSON && "function" === typeof window.JSON.parse) {
            _0x20B20.JSON = window.JSON
        } else {
            _0x20B20.JSON = {};
            var _0x20D93 = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            _0x20B20.JSON.parse = function(_0x20511, _0x20532) {
                function _0x20553(_0x20511, _0x20595) {
                    var _0x205B6, _0x205D7, _0x205F8 = _0x20511[_0x20595];
                    if (_0x205F8 && "object" === typeof _0x205F8) {
                        for (_0x205B6 in _0x205F8) {
                            Object.prototype.hasOwnProperty.call(_0x205F8, _0x205B6) && (_0x205D7 = _0x20553(_0x205F8, _0x205B6), _0x205D7 !== _0x20574 ? _0x205F8[_0x205B6] = _0x205D7 : delete _0x205F8[_0x205B6])
                        }
                    };
                    return _0x20532.call(_0x20511, _0x20595, _0x205F8)
                }
                var _0x20595;
                _0x20511 = String(_0x20511);
                _0x20D93.lastIndex = 0;
                _0x20D93.test(_0x20511) && (_0x20511 = _0x20511.replace(_0x20D93, function(_0x20511) {
                    return "\\u" + ("0000" + _0x20511.charCodeAt(0).toString(16)).slice(-4)
                }));
                if (/^[\],:{}\s]*$/ .test(_0x20511.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    return _0x20595 = eval("(" + _0x20511 + ")"), "function" === typeof _0x20532 ? _0x20553({
                        "": _0x20595
                    }, "") : _0x20595
                };
                throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
            }
        };
        _0x20B20.uc = function() {
            var _0x20511, _0x20532, _0x20553, _0x20595;
            _0x20511 = document.getElementsByTagName("video");
            _0x20532 = document.getElementsByTagName("audio");
            var _0x205B6 = [];
            if (_0x20511 && 0 < _0x20511.length) {
                _0x20553 = 0;
                for (_0x20595 = _0x20511.length; _0x20553 < _0x20595; _0x20553++) {
                    _0x205B6.push(_0x20511[_0x20553])
                }
            };
            if (_0x20532 && 0 < _0x20532.length) {
                _0x20553 = 0;
                for (_0x20595 = _0x20532.length; _0x20553 < _0x20595; _0x20553++) {
                    _0x205B6.push(_0x20532[_0x20553])
                }
            };
            if (_0x205B6 && 0 < _0x205B6.length) {
                _0x20553 = 0;
                for (_0x20595 = _0x205B6.length; _0x20553 < _0x20595; _0x20553++) {
                    if ((_0x20532 = _0x205B6[_0x20553]) && _0x20532.getAttribute) {
                        _0x20532.player === _0x20574 && (_0x20511 = _0x20532.getAttribute("data-setup"), _0x20511 !== _0x207E7 && _0x20C28(_0x20532))
                    } else {
                        _0x20B20.Hb();
                        break
                    }
                }
            } else {
                _0x20B20.qd || _0x20B20.Hb()
            }
        };
        _0x20B20.Hb = function() {
            setTimeout(_0x20B20.uc, 1)
        };
        "complete" === document.readyState ? _0x20B20.qd = _0x206BE : _0x20B20.N(window, "load", function() {
            _0x20B20.qd = _0x206BE
        });
        _0x20B20.Hb();
        _0x20B20.Be = function(_0x20511, _0x20532) {
            _0x20B20.Player.prototype[_0x20511] = _0x20532
        };
        var _0x205D7 = this;
    
        function $(_0x20511, _0x20532) {
            var _0x20553 = _0x20511.split("."),
                _0x20595 = _0x205D7;
            !(_0x20553[0] in _0x20595) && _0x20595.execScript && _0x20595.execScript("var " + _0x20553[0]);
            for (var _0x205B6; _0x20553.length && (_0x205B6 = _0x20553.shift());) {
                !_0x20553.length && _0x20532 !== _0x20574 ? _0x20595[_0x205B6] = _0x20532 : _0x20595 = _0x20595[_0x205B6] ? _0x20595[_0x205B6] : _0x20595[_0x205B6] = {}
            }
        }
        $("vqn", _0x20B20);
        $("_V_", _0x20B20);
        $("vqn.options", _0x20B20.options);
        $("vqn.players", _0x20B20.Ca);
        $("vqn.TOUCH_ENABLED", _0x20B20.Db);
        $("vqn.cache", _0x20B20.ua);
        $("vqn.Component", _0x20B20.a);
        _0x20B20.a.prototype.player = _0x20B20.a.prototype.k;
        _0x20B20.a.prototype.options = _0x20B20.a.prototype.options;
        _0x20B20.a.prototype.init = _0x20B20.a.prototype.l;
        _0x20B20.a.prototype.dispose = _0x20B20.a.prototype.dispose;
        _0x20B20.a.prototype.createEl = _0x20B20.a.prototype.e;
        _0x20B20.a.prototype.contentEl = _0x20B20.a.prototype.wa;
        _0x20B20.a.prototype.el = _0x20B20.a.prototype.m;
        _0x20B20.a.prototype.addChild = _0x20B20.a.prototype.aa;
        _0x20B20.a.prototype.getChild = _0x20B20.a.prototype.da;
        _0x20B20.a.prototype.getChildById = _0x20B20.a.prototype.Yd;
        _0x20B20.a.prototype.children = _0x20B20.a.prototype.children;
        _0x20B20.a.prototype.initChildren = _0x20B20.a.prototype.Kc;
        _0x20B20.a.prototype.removeChild = _0x20B20.a.prototype.removeChild;
        _0x20B20.a.prototype.on = _0x20B20.a.prototype.b;
        _0x20B20.a.prototype.off = _0x20B20.a.prototype.n;
        _0x20B20.a.prototype.one = _0x20B20.a.prototype.N;
        _0x20B20.a.prototype.trigger = _0x20B20.a.prototype.o;
        _0x20B20.a.prototype.triggerReady = _0x20B20.a.prototype.Va;
        _0x20B20.a.prototype.show = _0x20B20.a.prototype.show;
        _0x20B20.a.prototype.hide = _0x20B20.a.prototype.W;
        _0x20B20.a.prototype.width = _0x20B20.a.prototype.width;
        _0x20B20.a.prototype.height = _0x20B20.a.prototype.height;
        _0x20B20.a.prototype.dimensions = _0x20B20.a.prototype.Qd;
        _0x20B20.a.prototype.ready = _0x20B20.a.prototype.I;
        _0x20B20.a.prototype.addClass = _0x20B20.a.prototype.p;
        _0x20B20.a.prototype.removeClass = _0x20B20.a.prototype.r;
        _0x20B20.a.prototype.hasClass = _0x20B20.a.prototype.Pa;
        _0x20B20.a.prototype.buildCSSClass = _0x20B20.a.prototype.T;
        _0x20B20.a.prototype.localize = _0x20B20.a.prototype.v;
        _0x20B20.a.prototype.setInterval = _0x20B20.a.prototype.setInterval;
        _0x20B20.a.prototype.setTimeout = _0x20B20.a.prototype.setTimeout;
        $("vqn.EventEmitter", _0x20B20.z);
        _0x20B20.z.prototype.on = _0x20B20.z.prototype.b;
        _0x20B20.z.prototype.addEventListener = _0x20B20.z.prototype.addEventListener;
        _0x20B20.z.prototype.off = _0x20B20.z.prototype.n;
        _0x20B20.z.prototype.removeEventListener = _0x20B20.z.prototype.removeEventListener;
        _0x20B20.z.prototype.one = _0x20B20.z.prototype.N;
        _0x20B20.z.prototype.trigger = _0x20B20.z.prototype.o;
        _0x20B20.z.prototype.dispatchEvent = _0x20B20.z.prototype.dispatchEvent;
        _0x20B20.Player.prototype.ended = _0x20B20.Player.prototype.ended;
        _0x20B20.Player.prototype.enterFullWindow = _0x20B20.Player.prototype.Fc;
        _0x20B20.Player.prototype.exitFullWindow = _0x20B20.Player.prototype.Lb;
        _0x20B20.Player.prototype.preload = _0x20B20.Player.prototype.Ra;
        _0x20B20.Player.prototype.remainingTime = _0x20B20.Player.prototype.remainingTime;
        _0x20B20.Player.prototype.supportsFullScreen = _0x20B20.Player.prototype.Sa;
        _0x20B20.Player.prototype.currentType = _0x20B20.Player.prototype.Nd;
        _0x20B20.Player.prototype.requestFullScreen = _0x20B20.Player.prototype.requestFullScreen;
        _0x20B20.Player.prototype.requestFullscreen = _0x20B20.Player.prototype.requestFullscreen;
        _0x20B20.Player.prototype.cancelFullScreen = _0x20B20.Player.prototype.cancelFullScreen;
        _0x20B20.Player.prototype.exitFullscreen = _0x20B20.Player.prototype.exitFullscreen;
        _0x20B20.Player.prototype.isFullScreen = _0x20B20.Player.prototype.isFullScreen;
        _0x20B20.Player.prototype.isFullscreen = _0x20B20.Player.prototype.isFullscreen;
        _0x20B20.Player.prototype.textTracks = _0x20B20.Player.prototype.textTracks;
        _0x20B20.Player.prototype.remoteTextTracks = _0x20B20.Player.prototype.X;
        _0x20B20.Player.prototype.addTextTrack = _0x20B20.Player.prototype.addTextTrack;
        _0x20B20.Player.prototype.addRemoteTextTrack = _0x20B20.Player.prototype.ha;
        _0x20B20.Player.prototype.removeRemoteTextTrack = _0x20B20.Player.prototype.Da;
        _0x20B20.Player.prototype.seekable = _0x20B20.Player.prototype.seekable;
        $("vqn.MediaLoader", _0x20B20.Cd);
        $("vqn.TextTrackDisplay", _0x20B20.sa);
        $("vqn.ControlBar", _0x20B20.tb);
        $("vqn.Button", _0x20B20.w);
        $("vqn.PlayToggle", _0x20B20.kc);
        $("vqn.FullscreenToggle", _0x20B20.Ya);
        $("vqn.BigPlayButton", _0x20B20.rb);
        $("vqn.LoadingSpinner", _0x20B20.ic);
        $("vqn.CurrentTimeDisplay", _0x20B20.ub);
        $("vqn.DurationDisplay", _0x20B20.vb);
        $("vqn.TimeDivider", _0x20B20.qc);
        $("vqn.RemainingTimeDisplay", _0x20B20.Cb);
        $("vqn.LiveDisplay", _0x20B20.hc);
        $("vqn.ErrorDisplay", _0x20B20.wb);
        $("vqn.Slider", _0x20B20.S);
        $("vqn.ProgressControl", _0x20B20.Bb);
        $("vqn.SeekBar", _0x20B20.nc);
        $("vqn.LoadProgressBar", _0x20B20.yb);
        $("vqn.PlayProgressBar", _0x20B20.jc);
        $("vqn.SeekHandle", _0x20B20.Za);
        $("vqn.VolumeControl", _0x20B20.Fb);
        $("vqn.VolumeBar", _0x20B20.Eb);
        $("vqn.VolumeLevel", _0x20B20.rc);
        $("vqn.VolumeMenuButton", _0x20B20.Ha);
        $("vqn.VolumeHandle", _0x20B20.Gb);
        $("vqn.MuteToggle", _0x20B20.ra);
        $("vqn.PosterImage", _0x20B20.mc);
        $("vqn.Menu", _0x20B20.qa);
        $("vqn.MenuItem", _0x20B20.M);
        $("vqn.MenuButton", _0x20B20.O);
        $("vqn.PlaybackRateMenuButton", _0x20B20.lc);
        $("vqn.ChaptersTrackMenuItem", _0x20B20.Xa);
        $("vqn.TextTrackButton", _0x20B20.Q);
        $("vqn.TextTrackMenuItem", _0x20B20.$);
        $("vqn.OffTextTrackMenuItem", _0x20B20.zb);
        $("vqn.CaptionSettingsMenuItem", _0x20B20.sb);
        _0x20B20.O.prototype.createItems = _0x20B20.O.prototype.Ka;
        _0x20B20.Q.prototype.createItems = _0x20B20.Q.prototype.Ka;
        _0x20B20.Wa.prototype.createItems = _0x20B20.Wa.prototype.Ka;
        $("vqn.SubtitlesButton", _0x20B20.$a);
        $("vqn.CaptionsButton", _0x20B20.oa);
        $("vqn.ChaptersButton", _0x20B20.Wa);
        $("vqn.MediaTechController", _0x20B20.j);
        _0x20B20.j.withSourceHandlers = _0x20B20.j.dc;
        _0x20B20.j.prototype.featuresVolumeControl = _0x20B20.j.prototype.qf;
        _0x20B20.j.prototype.featuresFullscreenResize = _0x20B20.j.prototype.mf;
        _0x20B20.j.prototype.featuresPlaybackRate = _0x20B20.j.prototype.nf;
        _0x20B20.j.prototype.featuresProgressEvents = _0x20B20.j.prototype.of;
        _0x20B20.j.prototype.featuresTimeupdateEvents = _0x20B20.j.prototype.pf;
        _0x20B20.j.prototype.setPoster = _0x20B20.j.prototype.bd;
        _0x20B20.j.prototype.textTracks = _0x20B20.j.prototype.textTracks;
        _0x20B20.j.prototype.remoteTextTracks = _0x20B20.j.prototype.X;
        _0x20B20.j.prototype.addTextTrack = _0x20B20.j.prototype.addTextTrack;
        _0x20B20.j.prototype.addRemoteTextTrack = _0x20B20.j.prototype.ha;
        _0x20B20.j.prototype.removeRemoteTextTrack = _0x20B20.j.prototype.Da;
        $("vqn.Html5", _0x20B20.f);
        _0x20B20.f.Events = _0x20B20.f.xb;
        _0x20B20.f.isSupported = _0x20B20.f.isSupported;
        _0x20B20.f.canPlaySource = _0x20B20.f.wc;
        _0x20B20.f.patchCanPlayType = _0x20B20.f.Tc;
        _0x20B20.f.unpatchCanPlayType = _0x20B20.f.Ye;
        _0x20B20.f.prototype.setCurrentTime = _0x20B20.f.prototype.Zb;
        _0x20B20.f.prototype.setVolume = _0x20B20.f.prototype.Oe;
        _0x20B20.f.prototype.setMuted = _0x20B20.f.prototype.Ke;
        _0x20B20.f.prototype.setPreload = _0x20B20.f.prototype.Me;
        _0x20B20.f.prototype.setAutoplay = _0x20B20.f.prototype.He;
        _0x20B20.f.prototype.setLoop = _0x20B20.f.prototype.Je;
        _0x20B20.f.prototype.enterFullScreen = _0x20B20.f.prototype.Ec;
        _0x20B20.f.prototype.exitFullScreen = _0x20B20.f.prototype.Ud;
        _0x20B20.f.prototype.playbackRate = _0x20B20.f.prototype.playbackRate;
        _0x20B20.f.prototype.setPlaybackRate = _0x20B20.f.prototype.Le;
        _0x20B20.f.selectSourceHandler = _0x20B20.f.ob;
        _0x20B20.f.prototype.setSource = _0x20B20.f.prototype.ma;
        _0x20B20.f.prototype.disposeSourceHandler = _0x20B20.f.prototype.ia;
        _0x20B20.f.prototype.textTracks = _0x20B20.f.prototype.textTracks;
        _0x20B20.f.prototype.remoteTextTracks = _0x20B20.f.prototype.X;
        _0x20B20.f.prototype.addTextTrack = _0x20B20.f.prototype.addTextTrack;
        _0x20B20.f.prototype.addRemoteTextTrack = _0x20B20.f.prototype.ha;
        _0x20B20.f.prototype.removeRemoteTextTrack = _0x20B20.f.prototype.Da;
        $("vqn.Flash", _0x20B20.g);
        _0x20B20.g.isSupported = _0x20B20.g.isSupported;
        _0x20B20.g.canPlaySource = _0x20B20.g.wc;
        _0x20B20.g.onReady = _0x20B20.g.onReady;
        _0x20B20.g.embed = _0x20B20.g.Dc;
        _0x20B20.g.version = _0x20B20.g.version;
        _0x20B20.g.prototype.setSource = _0x20B20.g.prototype.ma;
        _0x20B20.g.selectSourceHandler = _0x20B20.g.ob;
        _0x20B20.g.prototype.setSource = _0x20B20.g.prototype.ma;
        _0x20B20.g.prototype.disposeSourceHandler = _0x20B20.g.prototype.ia;
        $("vqn.TextTrack", _0x20B20.t);
        $("vqn.TextTrackList", _0x20B20.F);
        $("vqn.TextTrackCueList", _0x20B20.U);
        $("vqn.TextTrackSettings", _0x20B20.pc);
        _0x20B20.t.prototype.id = _0x20B20.t.prototype.id;
        _0x20B20.t.prototype.label = _0x20B20.t.prototype.label;
        _0x20B20.t.prototype.kind = _0x20B20.t.prototype.Tb;
        _0x20B20.t.prototype.mode = _0x20B20.t.prototype.mode;
        _0x20B20.t.prototype.cues = _0x20B20.t.prototype.Ac;
        _0x20B20.t.prototype.activeCues = _0x20B20.t.prototype.jf;
        _0x20B20.t.prototype.addCue = _0x20B20.t.prototype.sc;
        _0x20B20.t.prototype.removeCue = _0x20B20.t.prototype.Yc;
        _0x20B20.F.prototype.getTrackById = _0x20B20.F.prototype.ae;
        _0x20B20.U.prototype.getCueById = _0x20B20.F.prototype.Zd;
        $("vqn.CaptionsTrack", _0x20B20.cf);
        $("vqn.SubtitlesTrack", _0x20B20.hf);
        $("vqn.ChaptersTrack", _0x20B20.df);
        $("vqn.autoSetup", _0x20B20.uc);
        $("vqn.plugin", _0x20B20.Be);
        $("vqn.createTimeRange", _0x20B20.xa);
        $("vqn.util", _0x20B20.Z);
        _0x20B20.Z.mergeOptions = _0x20B20.Z.Aa;
        _0x20B20.addLanguage = _0x20B20.Gd
    }
    
    function _0x20532(_0x20511) {
        var _0x20532 = _0x20511.vttjs = {},
            _0x20553 = _0x20532.VTTCue,
            _0x20574 = _0x20532.VTTRegion,
            _0x20595 = _0x20511.VTTCue,
            _0x205B6 = _0x20511.VTTRegion;
        _0x20532.shim = function() {
            _0x20532.VTTCue = _0x20553, _0x20532.VTTRegion = _0x20574
        }, _0x20532.restore = function() {
            _0x20532.VTTCue = _0x20595, _0x20532.VTTRegion = _0x205B6
        }
    }
    
    function _0x20553(_0x20511, _0x20532) {
        function _0x20553(_0x20511) {
            if ("string" != typeof _0x20511) {
                return !1
            };
            var _0x20532 = _0x205F8[_0x20511.toLowerCase()];
            return _0x20532 ? _0x20511.toLowerCase() : !1
        }
    
        function _0x20574(_0x20511) {
            if ("string" != typeof _0x20511) {
                return !1
            };
            var _0x20532 = _0x20619[_0x20511.toLowerCase()];
            return _0x20532 ? _0x20511.toLowerCase() : !1
        }
    
        function _0x20595(_0x20511) {
            for (var _0x20532 = 1; _0x20532 < arguments.length; _0x20532++) {
                var _0x20553 = arguments[_0x20532];
                for (var _0x20574 in _0x20553) {
                    _0x20511[_0x20574] = _0x20553[_0x20574]
                }
            };
            return _0x20511
        }
    
        function _0x205B6(_0x20511, _0x20532, _0x205B6) {
            var _0x205F8 = this,
                _0x20619 = /MSIE\s8\.0/ .test(navigator.userAgent),
                _0x2063A = {};
            _0x20619 ? _0x205F8 = document.createElement("custom") : _0x2063A.enumerable = !0, _0x205F8.hasBeenReset = !1;
            var _0x2065B = "",
                _0x2067C = !1,
                _0x2069D = _0x20511,
                _0x206BE = _0x20532,
                _0x206DF = _0x205B6,
                _0x20700 = null,
                _0x20721 = "",
                _0x20742 = !0,
                _0x20763 = "auto",
                _0x20784 = "start",
                _0x207A5 = 50,
                _0x207C6 = "middle",
                _0x207E7 = 50,
                _0x20808 = "middle";
            return Object.defineProperty(_0x205F8, "id", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x2065B
                },
                set: function(_0x20511) {
                    _0x2065B = "" + _0x20511
                }
            })), Object.defineProperty(_0x205F8, "pauseOnExit", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x2067C
                },
                set: function(_BIGARRAY) {
                    _0x2067C = !!_BIGARRAY
                }
            })), Object.defineProperty(_0x205F8, "startTime", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x2069D
                },
                set: function(_0x20511) {
                    if ("number" != typeof _0x20511) {
                        throw new TypeError("Start time must be set to a number.")
                    };
                    _0x2069D = _0x20511, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "endTime", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x206BE
                },
                set: function(_0x20511) {
                    if ("number" != typeof _0x20511) {
                        throw new TypeError("End time must be set to a number.")
                    };
                    _0x206BE = _0x20511, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "text", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x206DF
                },
                set: function(_0x20511) {
                    _0x206DF = "" + _0x20511, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "region", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x20700
                },
                set: function(_0x20511) {
                    _0x20700 = _0x20511, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "vertical", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x20721
                },
                set: function(_0x20511) {
                    var _0x20532 = _0x20553(_0x20511);
                    if (_0x20532 === !1) {
                        throw new SyntaxError("An invalid or illegal string was specified.")
                    };
                    _0x20721 = _0x20532, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "snapToLines", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x20742
                },
                set: function(_0x20511) {
                    _0x20742 = !!_0x20511, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "line", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x20763
                },
                set: function(_0x20511) {
                    if ("number" != typeof _0x20511 && _0x20511 !== _0x205D7) {
                        throw new SyntaxError("An invalid number or illegal string was specified.")
                    };
                    _0x20763 = _0x20511, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "lineAlign", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x20784
                },
                set: function(_0x20511) {
                    var _0x20532 = _0x20574(_0x20511);
                    if (!_0x20532) {
                        throw new SyntaxError("An invalid or illegal string was specified.")
                    };
                    _0x20784 = _0x20532, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "position", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x207A5
                },
                set: function(_0x20511) {
                    if (0 > _0x20511 || _0x20511 > 100) {
                        throw new Error("Position must be between 0 and 100.")
                    };
                    _0x207A5 = _0x20511, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "positionAlign", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x207C6
                },
                set: function(_0x20511) {
                    var _0x20532 = _0x20574(_0x20511);
                    if (!_0x20532) {
                        throw new SyntaxError("An invalid or illegal string was specified.")
                    };
                    _0x207C6 = _0x20532, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "size", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x207E7
                },
                set: function(_0x20511) {
                    if (0 > _0x20511 || _0x20511 > 100) {
                        throw new Error("Size must be between 0 and 100.")
                    };
                    _0x207E7 = _0x20511, this.hasBeenReset = !0
                }
            })), Object.defineProperty(_0x205F8, "align", _0x20595({}, _0x2063A, {
                get: function() {
                    return _0x20808
                },
                set: function(_0x20511) {
                    var _0x20532 = _0x20574(_0x20511);
                    if (!_0x20532) {
                        throw new SyntaxError("An invalid or illegal string was specified.")
                    };
                    _0x20808 = _0x20532, this.hasBeenReset = !0
                }
            })), _0x205F8.displayState = void(0), _0x20619 ? _0x205F8 : void(0)
        }
        var _0x205D7 = "auto",
            _0x205F8 = {
                "": !0,
                lr: !0,
                rl: !0
            },
            _0x20619 = {
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            };
        _0x205B6.prototype.getCueAsHTML = function() {
            return WebVTT.convertCueToDOMTree(window, this.text)
        }, _0x20511.VTTCue = _0x20511.VTTCue || _0x205B6, _0x20532.VTTCue = _0x205B6
    }
    
    function _0x20574(_0x20511, _0x20532) {
        function _0x20553(_0x20511) {
            if ("string" != typeof _0x20511) {
                return !1
            };
            var _0x20532 = _0x205B6[_0x20511.toLowerCase()];
            return _0x20532 ? _0x20511.toLowerCase() : !1
        }
    
        function _0x20574(_0x20511) {
            return "number" == typeof _0x20511 && _0x20511 >= 0 && 100 >= _0x20511
        }
    
        function _0x20595() {
            var _0x20511 = 100,
                _0x20532 = 3,
                _0x20595 = 0,
                _0x205B6 = 100,
                _0x205D7 = 0,
                _0x205F8 = 100,
                _0x20619 = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0,
                    get: function() {
                        return _0x20511
                    },
                    set: function(_0x20532) {
                        if (!_0x20574(_0x20532)) {
                            throw new Error("Width must be between 0 and 100.")
                        };
                        _0x20511 = _0x20532
                    }
                },
                lines: {
                    enumerable: !0,
                    get: function() {
                        return _0x20532
                    },
                    set: function(_0x20511) {
                        if ("number" != typeof _0x20511) {
                            throw new TypeError("Lines must be set to a number.")
                        };
                        _0x20532 = _0x20511
                    }
                },
                regionAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return _0x205B6
                    },
                    set: function(_0x20511) {
                        if (!_0x20574(_0x20511)) {
                            throw new Error("RegionAnchorX must be between 0 and 100.")
                        };
                        _0x205B6 = _0x20511
                    }
                },
                regionAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return _0x20595
                    },
                    set: function(_0x20511) {
                        if (!_0x20574(_0x20511)) {
                            throw new Error("RegionAnchorY must be between 0 and 100.")
                        };
                        _0x20595 = _0x20511
                    }
                },
                viewportAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return _0x205F8
                    },
                    set: function(_0x20511) {
                        if (!_0x20574(_0x20511)) {
                            throw new Error("ViewportAnchorY must be between 0 and 100.")
                        };
                        _0x205F8 = _0x20511
                    }
                },
                viewportAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return _0x205D7
                    },
                    set: function(_0x20511) {
                        if (!_0x20574(_0x20511)) {
                            throw new Error("ViewportAnchorX must be between 0 and 100.")
                        };
                        _0x205D7 = _0x20511
                    }
                },
                scroll: {
                    enumerable: !0,
                    get: function() {
                        return _0x20619
                    },
                    set: function(_0x20511) {
                        var _0x20532 = _0x20553(_0x20511);
                        if (_0x20532 === !1) {
                            throw new SyntaxError("An invalid or illegal string was specified.")
                        };
                        _0x20619 = _0x20532
                    }
                }
            })
        }
        var _0x205B6 = {
            "": !0,
            up: !0
        };
        _0x20511.VTTRegion = _0x20511.VTTRegion || _0x20595, _0x20532.VTTRegion = _0x20595
    }
    
    function _0x20595(_0x20511) {
        function _0x20532(_0x20511, _0x20532) {
            this.name = "ParsingError", this.code = _0x20511.code, this.message = _0x20532 || _0x20511.message
        }
    
        function _0x20553(_0x20511) {
            function _0x20532(_BIGARRAY, _0x20511, _0x20532, _0x20553) {
                return 3600 * (0 | _BIGARRAY) + 60 * (0 | _0x20511) + (0 | _0x20532) + (0 | _0x20553) / 1e3
            }
            var _0x20553 = _0x20511.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return _0x20553 ? _0x20553[3] ? _0x20532(_0x20553[1], _0x20553[2], _0x20553[3].replace(":", ""), _0x20553[4]) : _0x20553[1] > 59 ? _0x20532(_0x20553[1], _0x20553[2], 0, _0x20553[4]) : _0x20532(0, _0x20553[1], _0x20553[2], _0x20553[4]) : null
        }
    
        function _0x20574() {
            this.values = _0x206DF(null)
        }
    
        function _0x20595(_0x20511, _0x20532, _0x20553, _0x20574) {
            var _0x20595 = _0x20574 ? _0x20511.split(_0x20574) : [_0x20511];
            for (var _0x205B6 in _0x20595) {
                if ("string" == typeof _0x20595[_0x205B6]) {
                    var _0x205D7 = _0x20595[_0x205B6].split(_0x20553);
                    if (2 === _0x205D7.length) {
                        var _0x205F8 = _0x205D7[0],
                            _0x20619 = _0x205D7[1];
                        _0x20532(_0x205F8, _0x20619)
                    }
                }
            }
        }
    
        function _0x205B6(_0x20511, _0x205B6, _0x205D7) {
            function _0x205F8() {
                var _0x20574 = _0x20553(_0x20511);
                if (null === _0x20574) {
                    throw new _0x20532(_0x20532.Errors.BadTimeStamp, "Malformed timestamp: " + _0x2065B)
                };
                return _0x20511 = _0x20511.replace(/^[^\sa-zA-Z-]+/, ""), _0x20574
            }
    
            function _0x20619(_0x20511, _0x20532) {
                var _0x20553 = new _0x20574;
                _0x20595(_0x20511, function(_0x20511, _0x20532) {
                    switch (_0x20511) {
                        case "region":
                            for (var _0x20574 = _0x205D7.length - 1; _0x20574 >= 0; _0x20574--) {
                                if (_0x205D7[_0x20574].id === _0x20532) {
                                    _0x20553.set(_0x20511, _0x205D7[_0x20574].region);
                                    break
                                }
                            };
                            break;
                        case "vertical":
                            _0x20553.alt(_0x20511, _0x20532, ["rl", "lr"]);
                            break;
                        case "line":
                            var _0x20595 = _0x20532.split(","),
                                _0x205B6 = _0x20595[0];
                            _0x20553.integer(_0x20511, _0x205B6), _0x20553.percent(_0x20511, _0x205B6) ? _0x20553.set("snapToLines", !1) : null, _0x20553.alt(_0x20511, _0x205B6, ["auto"]), 2 === _0x20595.length && _0x20553.alt("lineAlign", _0x20595[1], ["start", "middle", "end"]);
                            break;
                        case "position":
                            _0x20595 = _0x20532.split(","), _0x20553.percent(_0x20511, _0x20595[0]), 2 === _0x20595.length && _0x20553.alt("positionAlign", _0x20595[1], ["start", "middle", "end"]);
                            break;
                        case "size":
                            _0x20553.percent(_0x20511, _0x20532);
                            break;
                        case "align":
                            _0x20553.alt(_0x20511, _0x20532, ["start", "middle", "end", "left", "right"])
                    }
                }, /:/, /\s/), _0x20532.region = _0x20553.get("region", null), _0x20532.vertical = _0x20553.get("vertical", ""), _0x20532.line = _0x20553.get("line", "auto"), _0x20532.lineAlign = _0x20553.get("lineAlign", "start"), _0x20532.snapToLines = _0x20553.get("snapToLines", !0), _0x20532.size = _0x20553.get("size", 100), _0x20532.align = _0x20553.get("align", "middle"), _0x20532.position = _0x20553.get("position", {
                    start: 0,
                    left: 0,
                    middle: 50,
                    end: 100,
                    right: 100
                }, _0x20532.align), _0x20532.positionAlign = _0x20553.get("positionAlign", {
                    start: "start",
                    left: "start",
                    middle: "middle",
                    end: "end",
                    right: "end"
                }, _0x20532.align)
            }
    
            function _0x2063A() {
                _0x20511 = _0x20511.replace(/^\s+/, "")
            }
            var _0x2065B = _0x20511;
            if (_0x2063A(), _0x205B6.startTime = _0x205F8(), _0x2063A(), "-->" !== _0x20511.substr(0, 3)) {
                throw new _0x20532(_0x20532.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + _0x2065B)
            };
            _0x20511 = _0x20511.substr(3), _0x2063A(), _0x205B6.endTime = _0x205F8(), _0x2063A(), _0x20619(_0x20511, _0x205B6)
        }
    
        function _0x205D7(_0x20511, _0x20532) {
            function _0x20574() {
                function _0x20511(_0x20511) {
                    return _0x20532 = _0x20532.substr(_0x20511.length), _0x20511
                }
                if (!_0x20532) {
                    return null
                };
                var _0x20553 = _0x20532.match(/^([^<]*)(<[^>]+>?)?/);
                return _0x20511(_0x20553[1] ? _0x20553[1] : _0x20553[2])
            }
    
            function _0x20595(_BIGARRAY) {
                return _0x20700[_BIGARRAY]
            }
    
            function _0x205B6(_0x20511) {
                for (; _0x206DF = _0x20511.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) {
                    _0x20511 = _0x20511.replace(_0x206DF[0], _0x20595)
                };
                return _0x20511
            }
    
            function _0x205D7(_0x20511, _0x20532) {
                return !_0x20763[_0x20532.localName] || _0x20763[_0x20532.localName] === _0x20511.localName
            }
    
            function _0x205F8(_0x20532, _0x20553) {
                var _0x20574 = _0x20721[_0x20532];
                if (!_0x20574) {
                    return null
                };
                var _0x20595 = _0x20511.document.createElement(_0x20574);
                _0x20595.localName = _0x20574;
                var _0x205B6 = _0x20742[_0x20532];
                return _0x205B6 && _0x20553 && (_0x20595[_0x205B6] = _0x20553.trim()), _0x20595
            }
            for (var _0x20619, _0x2063A = _0x20511.document.createElement("div"), _0x2065B = _0x2063A, _0x2067C = []; null !== (_0x20619 = _0x20574());) {
                if ("<" !== _0x20619[0]) {
                    _0x2065B.appendChild(_0x20511.document.createTextNode(_0x205B6(_0x20619)))
                } else {
                    if ("/" === _0x20619[1]) {
                        _0x2067C.length && _0x2067C[_0x2067C.length - 1] === _0x20619.substr(2).replace(">", "") && (_0x2067C.pop(), _0x2065B = _0x2065B.parentNode);
                        continue
                    };
                    var _0x2069D, _0x206BE = _0x20553(_0x20619.substr(1, _0x20619.length - 2));
                    if (_0x206BE) {
                        _0x2069D = _0x20511.document.createProcessingInstruction("timestamp", _0x206BE), _0x2065B.appendChild(_0x2069D);
                        continue
                    };
                    var _0x206DF = _0x20619.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                    if (!_0x206DF) {
                        continue
                    };
                    if (_0x2069D = _0x205F8(_0x206DF[1], _0x206DF[3]), !_0x2069D) {
                        continue
                    };
                    if (!_0x205D7(_0x2065B, _0x2069D)) {
                        continue
                    };
                    _0x206DF[2] && (_0x2069D.className = _0x206DF[2].substr(1).replace(".", " ")), _0x2067C.push(_0x206DF[1]), _0x2065B.appendChild(_0x2069D), _0x2065B = _0x2069D
                }
            };
            return _0x2063A
        }
    
        function _0x205F8(_0x20511) {
            function _0x20532(_0x20511, _0x20532) {
                for (var _0x20553 = _0x20532.childNodes.length - 1; _0x20553 >= 0; _0x20553--) {
                    _0x20511.push(_0x20532.childNodes[_0x20553])
                }
            }
    
            function _0x20553(_0x20511) {
                if (!_0x20511 || !_0x20511.length) {
                    return null
                };
                var _0x20574 = _0x20511.pop(),
                    _0x20595 = _0x20574.textContent || _0x20574.innerText;
                if (_0x20595) {
                    var _0x205B6 = _0x20595.match(/^.*(\n|\r)/);
                    return _0x205B6 ? (_0x20511.length = 0, _0x205B6[0]) : _0x20595
                };
                return "ruby" === _0x20574.tagName ? _0x20553(_0x20511) : _0x20574.childNodes ? (_0x20532(_0x20511, _0x20574), _0x20553(_0x20511)) : void(0)
            }
            var _0x20574, _0x20595 = [],
                _0x205B6 = "";
            if (!_0x20511 || !_0x20511.childNodes) {
                return "ltr"
            };
            for (_0x20532(_0x20595, _0x20511); _0x205B6 = _0x20553(_0x20595);) {
                for (var _0x205D7 = 0; _0x205D7 < _0x205B6.length; _0x205D7++) {
                    _0x20574 = _0x205B6.charCodeAt(_0x205D7);
                    for (var _0x205F8 = 0; _0x205F8 < _0x20784.length; _0x205F8++) {
                        if (_0x20784[_0x205F8] === _0x20574) {
                            return "rtl"
                        }
                    }
                }
            };
            return "ltr"
        }
    
        function _0x20619(_0x20511) {
            if ("number" == typeof _0x20511.line && (_0x20511.snapToLines || _0x20511.line >= 0 && _0x20511.line <= 100)) {
                return _0x20511.line
            };
            if (!_0x20511["track"] || !_0x20511["track"].textTrackList || !_0x20511["track"].textTrackList.mediaElement) {
                return -1
            };
            for (var _0x20532 = _0x20511["track"], _0x20553 = _0x20532.textTrackList, _0x20574 = 0, _0x20595 = 0; _0x20595 < _0x20553.length && _0x20553[_0x20595] !== _0x20532; _0x20595++) {
                "showing" === _0x20553[_0x20595].mode && _0x20574++
            };
            return -1 * ++_0x20574
        }
    
        function _0x2063A() {}
    
        function _0x2065B(_0x20511, _0x20532, _0x20553) {
            var _0x20574 = /MSIE\s8\.0/ .test(navigator.userAgent),
                _0x20595 = "rgba(255, 255, 255, 1)",
                _0x205B6 = "rgba(0, 0, 0, 0.8)";
            _0x20574 && (_0x20595 = "rgb(255, 255, 255)", _0x205B6 = "rgb(0, 0, 0)"), _0x2063A.call(this), this.cue = _0x20532, this.cueDiv = _0x205D7(_0x20511, _0x20532.text);
            var _0x20619 = {
                color: _0x20595,
                backgroundColor: _0x205B6,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline"
            };
            _0x20574 || (_0x20619.writingMode = "" === _0x20532.vertical ? "horizontal-tb" : "lr" === _0x20532.vertical ? "vertical-lr" : "vertical-rl", _0x20619.unicodeBidi = "plaintext"), this.applyStyles(_0x20619, this.cueDiv), this.div = _0x20511.document.createElement("div"), _0x20619 = {
                textAlign: "middle" === _0x20532.align ? "center" : _0x20532.align,
                font: _0x20553.font,
                whiteSpace: "pre-line",
                position: "absolute"
            }, _0x20574 || (_0x20619.direction = _0x205F8(this.cueDiv), _0x20619.writingMode = "" === _0x20532.vertical ? "horizontal-tb" : "lr" === _0x20532.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(_0x20619), this.div.appendChild(this.cueDiv);
            var _0x2065B = 0;
            switch (_0x20532.positionAlign) {
                case "start":
                    _0x2065B = _0x20532.position;
                    break;
                case "middle":
                    _0x2065B = _0x20532.position - _0x20532.size / 2;
                    break;
                case "end":
                    _0x2065B = _0x20532.position - _0x20532.size
            };
            this.applyStyles("" === _0x20532.vertical ? {
                left: this.formatStyle(_0x2065B, "%"),
                width: this.formatStyle(_0x20532.size, "%")
            } : {
                top: this.formatStyle(_0x2065B, "%"),
                height: this.formatStyle(_0x20532.size, "%")
            }), this.move = function(_0x20511) {
                this.applyStyles({
                    top: this.formatStyle(_0x20511.top, "px"),
                    bottom: this.formatStyle(_0x20511.bottom, "px"),
                    left: this.formatStyle(_0x20511.left, "px"),
                    right: this.formatStyle(_0x20511.right, "px"),
                    height: this.formatStyle(_0x20511.height, "px"),
                    width: this.formatStyle(_0x20511.width, "px")
                })
            }
        }
    
        function _0x2067C(_0x20511) {
            var _0x20532, _0x20553, _0x20574, _0x20595, _0x205B6 = /MSIE\s8\.0/ .test(navigator.userAgent);
            if (_0x20511.div) {
                _0x20553 = _0x20511.div.offsetHeight, _0x20574 = _0x20511.div.offsetWidth, _0x20595 = _0x20511.div.offsetTop;
                var _0x205D7 = (_0x205D7 = _0x20511.div.childNodes) && (_0x205D7 = _0x205D7[0]) && _0x205D7.getClientRects && _0x205D7.getClientRects();
                _0x20511 = _0x20511.div.getBoundingClientRect(), _0x20532 = _0x205D7 ? Math.max(_0x205D7[0] && _0x205D7[0].height || 0, _0x20511.height / _0x205D7.length) : 0
            };
            this.left = _0x20511.left, this.right = _0x20511.right, this.top = _0x20511.top || _0x20595, this.height = _0x20511.height || _0x20553, this.bottom = _0x20511.bottom || _0x20595 + (_0x20511.height || _0x20553), this.width = _0x20511.width || _0x20574, this.lineHeight = void(0) !== _0x20532 ? _0x20532 : _0x20511.lineHeight, _0x205B6 && !this.lineHeight && (this.lineHeight = 13)
        }
    
        function _0x2069D(_0x20511, _0x20532, _0x20553, _0x20574) {
            function _0x20595(_0x20511, _0x20532) {
                for (var _0x20595, _0x205B6 = new _0x2067C(_0x20511), _0x205D7 = 1, _0x205F8 = 0; _0x205F8 < _0x20532.length; _0x205F8++) {
                    for (; _0x20511.overlapsOppositeAxis(_0x20553, _0x20532[_0x205F8]) || _0x20511.within(_0x20553) && _0x20511.overlapsAny(_0x20574);) {
                        _0x20511.move(_0x20532[_0x205F8])
                    };
                    if (_0x20511.within(_0x20553)) {
                        return _0x20511
                    };
                    var _0x20619 = _0x20511.intersectPercentage(_0x20553);
                    _0x205D7 > _0x20619 && (_0x20595 = new _0x2067C(_0x20511), _0x205D7 = _0x20619), _0x20511 = new _0x2067C(_0x205B6)
                };
                return _0x20595 || _0x205B6
            }
            var _0x205B6 = new _0x2067C(_0x20532),
                _0x205D7 = _0x20532.cue,
                _0x205F8 = _0x20619(_0x205D7),
                _0x2063A = [];
            if (_0x205D7.snapToLines) {
                var _0x2065B;
                switch (_0x205D7.vertical) {
                    case "":
                        _0x2063A = ["+y", "-y"], _0x2065B = "height";
                        break;
                    case "rl":
                        _0x2063A = ["+x", "-x"], _0x2065B = "width";
                        break;
                    case "lr":
                        _0x2063A = ["-x", "+x"], _0x2065B = "width"
                };
                var _0x2069D = _0x205B6.lineHeight,
                    _0x206BE = _0x2069D * Math.round(_0x205F8),
                    _0x206DF = _0x20553[_0x2065B] + _0x2069D,
                    _0x20700 = _0x2063A[0];
                Math.abs(_0x206BE) > _0x206DF && (_0x206BE = 0 > _0x206BE ? -1 : 1, _0x206BE *= Math.ceil(_0x206DF / _0x2069D) * _0x2069D), 0 > _0x205F8 && (_0x206BE += "" === _0x205D7.vertical ? _0x20553.height : _0x20553.width, _0x2063A = _0x2063A.reverse()), _0x205B6.move(_0x20700, _0x206BE)
            } else {
                var _0x20721 = _0x205B6.lineHeight / _0x20553.height * 100;
                switch (_0x205D7.lineAlign) {
                    case "middle":
                        _0x205F8 -= _0x20721 / 2;
                        break;
                    case "end":
                        _0x205F8 -= _0x20721
                };
                switch (_0x205D7.vertical) {
                    case "":
                        _0x20532.applyStyles({
                            top: _0x20532.formatStyle(_0x205F8, "%")
                        });
                        break;
                    case "rl":
                        _0x20532.applyStyles({
                            left: _0x20532.formatStyle(_0x205F8, "%")
                        });
                        break;
                    case "lr":
                        _0x20532.applyStyles({
                            right: _0x20532.formatStyle(_0x205F8, "%")
                        })
                };
                _0x2063A = ["+y", "-x", "+x", "-y"], _0x205B6 = new _0x2067C(_0x20532)
            };
            var _0x20742 = _0x20595(_0x205B6, _0x2063A);
            _0x20532.move(_0x20742.toCSSCompatValues(_0x20553))
        }
    
        function _0x206BE() {}
        var _0x206DF = Object.create || function() {
            function _0x20511() {}
            return function(_0x20532) {
                if (1 !== arguments.length) {
                    throw new Error("Object.create shim only accepts one parameter.")
                };
                return _0x20511.prototype = _0x20532, new _0x20511
            }
        }();
        _0x20532.prototype = _0x206DF(Error.prototype), _0x20532.prototype.constructor = _0x20532, _0x20532.Errors = {
            BadSignature: {
                code: 0,
                message: "Malformed WebVTT signature."
            },
            BadTimeStamp: {
                code: 1,
                message: "Malformed time stamp."
            }
        }, _0x20574.prototype = {
            set: function(_0x20511, _0x20532) {
                this.get(_0x20511) || "" === _0x20532 || (this.values[_0x20511] = _0x20532)
            },
            get: function(_0x20511, _0x20532, _0x20553) {
                return _0x20553 ? this.has(_0x20511) ? this.values[_0x20511] : _0x20532[_0x20553] : this.has(_0x20511) ? this.values[_0x20511] : _0x20532
            },
            has: function(_0x20511) {
                return _0x20511 in this.values
            },
            alt: function(_0x20511, _0x20532, _0x20553) {
                for (var _0x20574 = 0; _0x20574 < _0x20553.length; ++_0x20574) {
                    if (_0x20532 === _0x20553[_0x20574]) {
                        this.set(_0x20511, _0x20532);
                        break
                    }
                }
            },
            integer: function(_0x20511, _0x20532) {
                /^-?\d+$/ .test(_0x20532) && this.set(_0x20511, parseInt(_0x20532, 10))
            },
            percent: function(_0x20511, _0x20532) {
                var _0x20553;
                return (_0x20553 = _0x20532.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (_0x20532 = parseFloat(_0x20532), _0x20532 >= 0 && 100 >= _0x20532) ? (this.set(_0x20511, _0x20532), !0) : !1
            }
        };
        var _0x20700 = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&lrm;": "\u200e",
                "&rlm;": "\u200f",
                "&nbsp;": "\xA0"
            },
            _0x20721 = {
                c: "span",
                i: "i",
                b: "b",
                u: "u",
                ruby: "ruby",
                rt: "rt",
                v: "span",
                lang: "span"
            },
            _0x20742 = {
                v: "title",
                lang: "lang"
            },
            _0x20763 = {
                rt: "ruby"
            },
            _0x20784 = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
        _0x2063A.prototype.applyStyles = function(_0x20511, _0x20532) {
            _0x20532 = _0x20532 || this.div;
            for (var _0x20553 in _0x20511) {
                _0x20511.hasOwnProperty(_0x20553) && (_0x20532.style[_0x20553] = _0x20511[_0x20553])
            }
        }, _0x2063A.prototype.formatStyle = function(_BIGARRAY, _0x20511) {
            return 0 === _BIGARRAY ? 0 : _BIGARRAY + _0x20511
        }, _0x2065B.prototype = _0x206DF(_0x2063A.prototype), _0x2065B.prototype.constructor = _0x2065B, _0x2067C.prototype.move = function(_0x20511, _0x20532) {
            switch (_0x20532 = void(0) !== _0x20532 ? _0x20532 : this.lineHeight, _0x20511) {
                case "+x":
                    this.left += _0x20532, this.right += _0x20532;
                    break;
                case "-x":
                    this.left -= _0x20532, this.right -= _0x20532;
                    break;
                case "+y":
                    this.top += _0x20532, this.bottom += _0x20532;
                    break;
                case "-y":
                    this.top -= _0x20532, this.bottom -= _0x20532
            }
        }, _0x2067C.prototype.overlaps = function(_0x20511) {
            return this.left < _0x20511.right && this.right > _0x20511.left && this.top < _0x20511.bottom && this.bottom > _0x20511.top
        }, _0x2067C.prototype.overlapsAny = function(_0x20511) {
            for (var _0x20532 = 0; _0x20532 < _0x20511.length; _0x20532++) {
                if (this.overlaps(_0x20511[_0x20532])) {
                    return !0
                }
            };
            return !1
        }, _0x2067C.prototype.within = function(_0x20511) {
            return this.top >= _0x20511.top && this.bottom <= _0x20511.bottom && this.left >= _0x20511.left && this.right <= _0x20511.right
        }, _0x2067C.prototype.overlapsOppositeAxis = function(_0x20511, _0x20532) {
            switch (_0x20532) {
                case "+x":
                    return this.left < _0x20511.left;
                case "-x":
                    return this.right > _0x20511.right;
                case "+y":
                    return this.top < _0x20511.top;
                case "-y":
                    return this.bottom > _0x20511.bottom
            }
        }, _0x2067C.prototype.intersectPercentage = function(_0x20511) {
            var _0x20532 = Math.max(0, Math.min(this.right, _0x20511.right) - Math.max(this.left, _0x20511.left)),
                _0x20553 = Math.max(0, Math.min(this.bottom, _0x20511.bottom) - Math.max(this.top, _0x20511.top)),
                _0x20574 = _0x20532 * _0x20553;
            return _0x20574 / (this.height * this.width)
        }, _0x2067C.prototype.toCSSCompatValues = function(_0x20511) {
            return {
                top: this.top - _0x20511.top,
                bottom: _0x20511.bottom - this.bottom,
                left: this.left - _0x20511.left,
                right: _0x20511.right - this.right,
                height: this.height,
                width: this.width
            }
        }, _0x2067C.getSimpleBoxPosition = function(_0x20511) {
            var _0x20532 = _0x20511.div ? _0x20511.div.offsetHeight : _0x20511.tagName ? _0x20511.offsetHeight : 0,
                _0x20553 = _0x20511.div ? _0x20511.div.offsetWidth : _0x20511.tagName ? _0x20511.offsetWidth : 0,
                _0x20574 = _0x20511.div ? _0x20511.div.offsetTop : _0x20511.tagName ? _0x20511.offsetTop : 0;
            _0x20511 = _0x20511.div ? _0x20511.div.getBoundingClientRect() : _0x20511.tagName ? _0x20511.getBoundingClientRect() : _0x20511;
            var _0x20595 = {
                left: _0x20511.left,
                right: _0x20511.right,
                top: _0x20511.top || _0x20574,
                height: _0x20511.height || _0x20532,
                bottom: _0x20511.bottom || _0x20574 + (_0x20511.height || _0x20532),
                width: _0x20511.width || _0x20553
            };
            return _0x20595
        }, _0x206BE.StringDecoder = function() {
            return {
                decode: function(_0x20511) {
                    if (!_0x20511) {
                        return ""
                    };
                    if ("string" != typeof _0x20511) {
                        throw new Error("Error - expected string data.")
                    };
                    return decodeURIComponent(encodeURIComponent(_0x20511))
                }
            }
        }, _0x206BE.convertCueToDOMTree = function(_BIGARRAY, _0x20511) {
            return _BIGARRAY && _0x20511 ? _0x205D7(_BIGARRAY, _0x20511) : null
        };
        var _0x207A5 = 0.05,
            _0x207C6 = "sans-serif",
            _0x207E7 = "1.5%";
        _0x206BE.processCues = function(_0x20511, _0x20532, _0x20553) {
            function _0x20574(_0x20511) {
                for (var _0x20532 = 0; _0x20532 < _0x20511.length; _0x20532++) {
                    if (_0x20511[_0x20532].hasBeenReset || !_0x20511[_0x20532].displayState) {
                        return !0
                    }
                };
                return !1
            }
            if (!_0x20511 || !_0x20532 || !_0x20553) {
                return null
            };
            for (; _0x20553.firstChild;) {
                _0x20553.removeChild(_0x20553.firstChild)
            };
            var _0x20595 = _0x20511.document.createElement("div");
            if (_0x20595.style.position = "absolute", _0x20595.style.left = "0", _0x20595.style.right = "0", _0x20595.style.top = "0", _0x20595.style.bottom = "0", _0x20595.style.margin = _0x207E7, _0x20553.appendChild(_0x20595), _0x20574(_0x20532)) {
                var _0x205B6 = [],
                    _0x205D7 = _0x2067C.getSimpleBoxPosition(_0x20595),
                    _0x205F8 = Math.round(_0x205D7.height * _0x207A5 * 100) / 100,
                    _0x20619 = {
                        font: _0x205F8 + "px " + _0x207C6
                    };
                ! function() {
                    for (var _0x20553, _0x20574, _0x205F8 = 0; _0x205F8 < _0x20532.length; _0x205F8++) {
                        _0x20574 = _0x20532[_0x205F8], _0x20553 = new _0x2065B(_0x20511, _0x20574, _0x20619), _0x20595.appendChild(_0x20553.div), _0x2069D(_0x20511, _0x20553, _0x205D7, _0x205B6), _0x20574.displayState = _0x20553.div, _0x205B6.push(_0x2067C.getSimpleBoxPosition(_0x20553))
                    }
                }()
            } else {
                for (var _0x2063A = 0; _0x2063A < _0x20532.length; _0x2063A++) {
                    _0x20595.appendChild(_0x20532[_0x2063A].displayState)
                }
            }
        }, _0x206BE.Parser = function(_0x20511, _0x20532, _0x20553) {
            _0x20553 || (_0x20553 = _0x20532, _0x20532 = {}), _0x20532 || (_0x20532 = {}), this.window = _0x20511, this.vttjs = _0x20532, this.state = "INITIAL", this.buffer = "", this.decoder = _0x20553 || new TextDecoder("utf8"), this.regionList = []
        }, _0x206BE.Parser.prototype = {
            reportOrThrowError: function(_0x20511) {
                if (!(_0x20511 instanceof _0x20532)) {
                    throw _0x20511
                };
                this.onparsingerror && this.onparsingerror(_0x20511)
            },
            parse: function(_0x20511) {
                function _0x20553() {
                    for (var _0x20511 = _0x20619.buffer, _0x20532 = 0; _0x20532 < _0x20511.length && "\x0D" !== _0x20511[_0x20532] && "\x0A" !== _0x20511[_0x20532];) {
                        ++_0x20532
                    };
                    var _0x20553 = _0x20511.substr(0, _0x20532);
                    return "\x0D" === _0x20511[_0x20532] && ++_0x20532, "\x0A" === _0x20511[_0x20532] && ++_0x20532, _0x20619.buffer = _0x20511.substr(_0x20532), _0x20553
                }
    
                function _0x205D7(_0x20511) {
                    var _0x20532 = new _0x20574;
                    if (_0x20595(_0x20511, function(_0x20511, _0x20553) {
                            switch (_0x20511) {
                                case "id":
                                    _0x20532.set(_0x20511, _0x20553);
                                    break;
                                case "width":
                                    _0x20532.percent(_0x20511, _0x20553);
                                    break;
                                case "lines":
                                    _0x20532.integer(_0x20511, _0x20553);
                                    break;
                                case "regionanchor":
                                    ;
                                case "viewportanchor":
                                    var _0x20595 = _0x20553.split(",");
                                    if (2 !== _0x20595.length) {
                                        break
                                    };
                                    var _0x205B6 = new _0x20574;
                                    if (_0x205B6.percent("x", _0x20595[0]), _0x205B6.percent("y", _0x20595[1]), !_0x205B6.has("x") || !_0x205B6.has("y")) {
                                        break
                                    };
                                    _0x20532.set(_0x20511 + "X", _0x205B6.get("x")), _0x20532.set(_0x20511 + "Y", _0x205B6.get("y"));
                                    break;
                                case "scroll":
                                    _0x20532.alt(_0x20511, _0x20553, ["up"])
                            }
                        }, /=/, /\s/), _0x20532.has("id")) {
                        var _0x20553 = new(_0x20619.vttjs.VTTRegion || _0x20619.window.VTTRegion);
                        _0x20553.width = _0x20532.get("width", 100), _0x20553.lines = _0x20532.get("lines", 3), _0x20553.regionAnchorX = _0x20532.get("regionanchorX", 0), _0x20553.regionAnchorY = _0x20532.get("regionanchorY", 100), _0x20553.viewportAnchorX = _0x20532.get("viewportanchorX", 0), _0x20553.viewportAnchorY = _0x20532.get("viewportanchorY", 100), _0x20553.scroll = _0x20532.get("scroll", ""), _0x20619.onregion && _0x20619.onregion(_0x20553), _0x20619.regionList.push({
                            id: _0x20532.get("id"),
                            region: _0x20553
                        })
                    }
                }
    
                function _0x205F8(_0x20511) {
                    _0x20595(_0x20511, function(_0x20511, _0x20532) {
                        switch (_0x20511) {
                            case "Region":
                                _0x205D7(_0x20532)
                        }
                    }, /:/)
                }
                var _0x20619 = this;
                _0x20511 && (_0x20619.buffer += _0x20619.decoder.decode(_0x20511, {
                    stream: !0
                }));
                try {
                    var _0x2063A;
                    if ("INITIAL" === _0x20619.state) {
                        if (!/\r\n|\n/ .test(_0x20619.buffer)) {
                            return this
                        };
                        _0x2063A = _0x20553();
                        var _0x2065B = _0x2063A.match(/^WEBVTT([ \t].*)?$/);
                        if (!_0x2065B || !_0x2065B[0]) {
                            throw new _0x20532(_0x20532.Errors.BadSignature)
                        };
                        _0x20619.state = "HEADER"
                    };
                    for (var _0x2067C = !1; _0x20619.buffer;) {
                        if (!/\r\n|\n/ .test(_0x20619.buffer)) {
                            return this
                        };
                        switch (_0x2067C ? _0x2067C = !1 : _0x2063A = _0x20553(), _0x20619.state) {
                            case "HEADER":
                                /:/ .test(_0x2063A) ? _0x205F8(_0x2063A): _0x2063A || (_0x20619.state = "ID");
                                continue;
                            case "NOTE":
                                _0x2063A || (_0x20619.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/ .test(_0x2063A)) {
                                    _0x20619.state = "NOTE";
                                    break
                                };
                                if (!_0x2063A) {
                                    continue
                                };
                                if (_0x20619.cue = new(_0x20619.vttjs.VTTCue || _0x20619.window.VTTCue)(0, 0, ""), _0x20619.state = "CUE", -1 === _0x2063A.indexOf("-->")) {
                                    _0x20619.cue.id = _0x2063A;
                                    continue
                                };
                            case "CUE":
                                try {
                                    _0x205B6(_0x2063A, _0x20619.cue, _0x20619.regionList)
                                } catch (_0x2069D) {
                                    _0x20619.reportOrThrowError(_0x2069D), _0x20619.cue = null, _0x20619.state = "BADCUE";
                                    continue
                                };
                                _0x20619.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var _0x206BE = -1 !== _0x2063A.indexOf("-->");
                                if (!_0x2063A || _0x206BE && (_0x2067C = !0)) {
                                    _0x20619.oncue && _0x20619.oncue(_0x20619.cue), _0x20619.cue = null, _0x20619.state = "ID";
                                    continue
                                };
                                _0x20619.cue.text && (_0x20619.cue.text += "\x0A"), _0x20619.cue.text += _0x2063A;
                                continue;
                            case "BADCUE":
                                _0x2063A || (_0x20619.state = "ID");
                                continue
                        }
                    }
                } catch (_0x2069D) {
                    _0x20619.reportOrThrowError(_0x2069D), "CUETEXT" === _0x20619.state && _0x20619.cue && _0x20619.oncue && _0x20619.oncue(_0x20619.cue), _0x20619.cue = null, _0x20619.state = "INITIAL" === _0x20619.state ? "BADWEBVTT" : "BADCUE"
                };
                return this
            },
            flush: function() {
                var _0x20511 = this;
                try {
                    if (_0x20511.buffer += _0x20511.decoder.decode(), (_0x20511.cue || "HEADER" === _0x20511.state) && (_0x20511.buffer += "\x0A\x0A", _0x20511.parse()), "INITIAL" === _0x20511.state) {
                        throw new _0x20532(_0x20532.Errors.BadSignature)
                    }
                } catch (_0x20553) {
                    _0x20511.reportOrThrowError(_0x20553)
                };
                return _0x20511.onflush && _0x20511.onflush(), this
            }
        }, _0x20511.WebVTT = _0x206BE
    }
    
    function _0x205D7(_0x205B6, _0x20595, _0x20553) {
        "use strict";
        Object.defineProperty(_0x20553, "__esModule", {
            value: true
        });
        var _0x20532 = function() {
            function _0x20511(_0x20574, _0x20553) {
                for (var _0x20532 = 0; _0x20532 < _0x20553.length; _0x20532++) {
                    var _0x20511 = _0x20553[_0x20532];
                    _0x20511.enumerable = _0x20511.enumerable || false;
                    _0x20511.configurable = true;
                    if ("value" in _0x20511) {
                        _0x20511.writable = true
                    };
                    Object.defineProperty(_0x20574, _0x20511.key, _0x20511)
                }
            }
            return function(_0x20532, _0x20553, _0x20574) {
                if (_0x20553) {
                    _0x20511(_0x20532.prototype, _0x20553)
                };
                if (_0x20574) {
                    _0x20511(_0x20532, _0x20574)
                };
                return _0x20532
            }
        }();
    
        function _0x20511(_0x20532, _0x20511) {
            if (!(_0x20532 instanceof _0x20511)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var _0x20574 = _0x20553.IVPAIDAdUnit = function() {
            function _0x20721() {
                _0x20511(this, _0x20721)
            }
            _0x20532(_0x20721, [{
                key: "handshakeVersion",
                value: function _0x206DF() {
                    var _0x20532 = arguments.length <= 0 || arguments[0] === undefined ? "2.0" : arguments[0];
                    var _0x20511 = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1]
                }
            }, {
                key: "initAd",
                value: function _0x20700(_0x205D7, _0x20595, _0x205B6, _0x20553) {
                    var _0x20532 = arguments.length <= 4 || arguments[4] === undefined ? {
                        AdParameters: ""
                    } : arguments[4];
                    var _0x20574 = arguments.length <= 5 || arguments[5] === undefined ? {
                        flashVars: ""
                    } : arguments[5];
                    var _0x20511 = arguments.length <= 6 || arguments[6] === undefined ? undefined : arguments[6]
                }
            }, {
                key: "resizeAd",
                value: function _0x20763(_0x20574, _0x20532, _0x20553) {
                    var _0x20511 = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3]
                }
            }, {
                key: "startAd",
                value: function _0x207E7() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0]
                }
            }, {
                key: "stopAd",
                value: function _0x20808() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0]
                }
            }, {
                key: "pauseAd",
                value: function _0x20742() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0]
                }
            }, {
                key: "resumeAd",
                value: function _0x20784() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0]
                }
            }, {
                key: "expandAd",
                value: function _0x20574() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0]
                }
            }, {
                key: "collapseAd",
                value: function _0x20553() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0]
                }
            }, {
                key: "skipAd",
                value: function _0x207C6() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0]
                }
            }, {
                key: "getAdLinear",
                value: function _0x2063A(_BIGARRAY) {}
            }, {
                key: "getAdWidth",
                value: function _0x206BE(_BIGARRAY) {}
            }, {
                key: "getAdHeight",
                value: function _0x205F8(_BIGARRAY) {}
            }, {
                key: "getAdExpanded",
                value: function _0x205D7(_BIGARRAY) {}
            }, {
                key: "getAdSkippableState",
                value: function _0x2067C(_BIGARRAY) {}
            }, {
                key: "getAdRemainingTime",
                value: function _0x2065B(_BIGARRAY) {}
            }, {
                key: "getAdDuration",
                value: function _0x205B6(_BIGARRAY) {}
            }, {
                key: "setAdVolume",
                value: function _0x207A5(_0x20532) {
                    var _0x20511 = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1]
                }
            }, {
                key: "getAdVolume",
                value: function _0x2069D(_BIGARRAY) {}
            }, {
                key: "getAdCompanions",
                value: function _0x20595(_BIGARRAY) {}
            }, {
                key: "getAdIcons",
                value: function _0x20619(_BIGARRAY) {}
            }]);
            return _0x20721
        }();
        Object.defineProperty(_0x20574, "EVENTS", {
            writable: false,
            configurable: false,
            value: ["AdLoaded", "AdStarted", "AdStopped", "AdSkipped", "AdSkippableStateChange", "AdSizeChange", "AdLinearChange", "AdDurationChange", "AdExpandedChange", "AdRemainingTimeChange", "AdVolumeChange", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdClickThru", "AdInteraction", "AdUserAcceptInvitation", "AdUserMinimize", "AdUserClose", "AdPaused", "AdPlaying", "AdLog", "AdError"]
        })
    }
    
    function _0x205F8(_0x2063A, _0x20619, _0x205D7) {
        "use strict";
        var _0x20595 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(_BIGARRAY) {
            return typeof _BIGARRAY
        } : function(_0x20511) {
            return _0x20511 && typeof Symbol === "function" && _0x20511.constructor === Symbol ? "symbol" : typeof _0x20511
        };
        Object.defineProperty(_0x205D7, "__esModule", {
            value: true
        });
        var _0x20532 = function() {
            function _0x20511(_0x20574, _0x20553) {
                for (var _0x20532 = 0; _0x20532 < _0x20553.length; _0x20532++) {
                    var _0x20511 = _0x20553[_0x20532];
                    _0x20511.enumerable = _0x20511.enumerable || false;
                    _0x20511.configurable = true;
                    if ("value" in _0x20511) {
                        _0x20511.writable = true
                    };
                    Object.defineProperty(_0x20574, _0x20511.key, _0x20511)
                }
            }
            return function(_0x20532, _0x20553, _0x20574) {
                if (_0x20553) {
                    _0x20511(_0x20532.prototype, _0x20553)
                };
                if (_0x20574) {
                    _0x20511(_0x20532, _0x20574)
                };
                return _0x20532
            }
        }();
    
        function _0x20511(_0x20532, _0x20511) {
            if (!(_0x20532 instanceof _0x20511)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
    
        function _0x20574(_0x20532, _0x20511) {
            if (!_0x20532) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            };
            return _0x20511 && ((typeof _0x20511 === "undefined" ? "undefined" : _0x20595(_0x20511)) === "object" || typeof _0x20511 === "function") ? _0x20511 : _0x20532
        }
    
        function _0x20553(_0x20511, _0x20532) {
            if (typeof _0x20532 !== "function" && _0x20532 !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof _0x20532 === "undefined" ? "undefined" : _0x20595(_0x20532)))
            };
            _0x20511.prototype = Object.create(_0x20532 && _0x20532.prototype, {
                constructor: {
                    value: _0x20511,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (_0x20532) {
                Object.setPrototypeOf ? Object.setPrototypeOf(_0x20511, _0x20532) : _0x20511.__proto__ = _0x20532
            }
        }
        var _0x205F8 = _0x2063A("./IVPAIDAdUnit").IVPAIDAdUnit;
        var _0x205B6 = Object.getOwnPropertyNames(_0x205F8.prototype).filter(function(_0x20511) {
            return ["constructor"].indexOf(_0x20511) === -1
        });
        var _0x2065B = _0x205D7.VPAIDAdUnit = function(_0x205D7) {
            _0x20553(_0x20931, _0x205D7);
    
            function _0x20931(_0x20553) {
                _0x20511(this, _0x20931);
                var _0x20532 = _0x20574(this, (_0x20931.__proto__ || Object.getPrototypeOf(_0x20931)).call(this));
                _0x20532._destroyed = false;
                _0x20532._flash = _0x20553;
                return _0x20532
            }
            _0x20532(_0x20931, [{
                key: "_destroy",
                value: function _0x20595() {
                    var _0x20511 = this;
                    this._destroyed = true;
                    _0x205B6.forEach(function(_0x20532) {
                        _0x20511._flash.removeCallbackByMethodName(_0x20532)
                    });
                    _0x205F8.EVENTS.forEach(function(_0x20532) {
                        _0x20511._flash.offEvent(_0x20532)
                    });
                    this._flash = null
                }
            }, {
                key: "isDestroyed",
                value: function _0x207E7() {
                    return this._destroyed
                }
            }, {
                key: "on",
                value: function _0x20829(_0x20532, _0x20511) {
                    this._flash.on(_0x20532, _0x20511)
                }
            }, {
                key: "off",
                value: function _0x20808(_0x20532, _0x20511) {
                    this._flash.off(_0x20532, _0x20511)
                }
            }, {
                key: "handshakeVersion",
                value: function _0x207A5() {
                    var _0x20532 = arguments.length <= 0 || arguments[0] === undefined ? "2.0" : arguments[0];
                    var _0x20511 = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
                    this._flash.callFlashMethod("handshakeVersion", [_0x20532], _0x20511)
                }
            }, {
                key: "initAd",
                value: function _0x207C6(_0x205D7, _0x20595, _0x205B6, _0x20553) {
                    var _0x20532 = arguments.length <= 4 || arguments[4] === undefined ? {
                        AdParameters: ""
                    } : arguments[4];
                    var _0x20574 = arguments.length <= 5 || arguments[5] === undefined ? {
                        flashVars: ""
                    } : arguments[5];
                    var _0x20511 = arguments.length <= 6 || arguments[6] === undefined ? undefined : arguments[6];
                    this._flash.setSize(_0x205D7, _0x20595);
                    _0x20532 = _0x20532 || {
                        AdParameters: ""
                    };
                    _0x20574 = _0x20574 || {
                        flashVars: ""
                    };
                    this._flash.callFlashMethod("initAd", [this._flash.getWidth(), this._flash.getHeight(), _0x205B6, _0x20553, _0x20532.AdParameters || "", _0x20574.flashVars || ""], _0x20511)
                }
            }, {
                key: "resizeAd",
                value: function _0x2086B(_0x20574, _0x20532, _0x20553) {
                    var _0x20511 = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];
                    this._flash.setSize(_0x20574, _0x20532);
                    this._flash.callFlashMethod("resizeAd", [this._flash.getWidth(), this._flash.getHeight(), _0x20553], _0x20511)
                }
            }, {
                key: "startAd",
                value: function _0x208EF() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
                    this._flash.callFlashMethod("startAd", [], _0x20511)
                }
            }, {
                key: "stopAd",
                value: function _0x20910() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
                    this._flash.callFlashMethod("stopAd", [], _0x20511)
                }
            }, {
                key: "pauseAd",
                value: function _0x2084A() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
                    this._flash.callFlashMethod("pauseAd", [], _0x20511)
                }
            }, {
                key: "resumeAd",
                value: function _0x2088C() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
                    this._flash.callFlashMethod("resumeAd", [], _0x20511)
                }
            }, {
                key: "expandAd",
                value: function _0x2063A() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
                    this._flash.callFlashMethod("expandAd", [], _0x20511)
                }
            }, {
                key: "collapseAd",
                value: function _0x20619() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
                    this._flash.callFlashMethod("collapseAd", [], _0x20511)
                }
            }, {
                key: "skipAd",
                value: function _0x208CE() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
                    this._flash.callFlashMethod("skipAd", [], _0x20511)
                }
            }, {
                key: "getAdLinear",
                value: function _0x20700(_0x20511) {
                    this._flash.callFlashMethod("getAdLinear", [], _0x20511)
                }
            }, {
                key: "getAdWidth",
                value: function _0x20784(_0x20511) {
                    this._flash.callFlashMethod("getAdWidth", [], _0x20511)
                }
            }, {
                key: "getAdHeight",
                value: function _0x206BE(_0x20511) {
                    this._flash.callFlashMethod("getAdHeight", [], _0x20511)
                }
            }, {
                key: "getAdExpanded",
                value: function _0x2069D(_0x20511) {
                    this._flash.callFlashMethod("getAdExpanded", [], _0x20511)
                }
            }, {
                key: "getAdSkippableState",
                value: function _0x20742(_0x20511) {
                    this._flash.callFlashMethod("getAdSkippableState", [], _0x20511)
                }
            }, {
                key: "getAdRemainingTime",
                value: function _0x20721(_0x20511) {
                    this._flash.callFlashMethod("getAdRemainingTime", [], _0x20511)
                }
            }, {
                key: "getAdDuration",
                value: function _0x2067C(_0x20511) {
                    this._flash.callFlashMethod("getAdDuration", [], _0x20511)
                }
            }, {
                key: "setAdVolume",
                value: function _0x208AD(_0x20532) {
                    var _0x20511 = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
                    this._flash.callFlashMethod("setAdVolume", [_0x20532], _0x20511)
                }
            }, {
                key: "getAdVolume",
                value: function _0x20763(_0x20511) {
                    this._flash.callFlashMethod("getAdVolume", [], _0x20511)
                }
            }, {
                key: "getAdCompanions",
                value: function _0x2065B(_0x20511) {
                    this._flash.callFlashMethod("getAdCompanions", [], _0x20511)
                }
            }, {
                key: "getAdIcons",
                value: function _0x206DF(_0x20511) {
                    this._flash.callFlashMethod("getAdIcons", [], _0x20511)
                }
            }]);
            return _0x20931
        }(_0x205F8)
    }
    
    function _0x20619(_0x20721, _0x206DF, _0x20619) {
        "use strict";
        var _0x20574 = function() {
            function _0x20511(_0x20574, _0x20553) {
                for (var _0x20532 = 0; _0x20532 < _0x20553.length; _0x20532++) {
                    var _0x20511 = _0x20553[_0x20532];
                    _0x20511.enumerable = _0x20511.enumerable || false;
                    _0x20511.configurable = true;
                    if ("value" in _0x20511) {
                        _0x20511.writable = true
                    };
                    Object.defineProperty(_0x20574, _0x20511.key, _0x20511)
                }
            }
            return function(_0x20532, _0x20553, _0x20574) {
                if (_0x20553) {
                    _0x20511(_0x20532.prototype, _0x20553)
                };
                if (_0x20574) {
                    _0x20511(_0x20532, _0x20574)
                };
                return _0x20532
            }
        }();
    
        function _0x20553(_0x20532, _0x20511) {
            if (!(_0x20532 instanceof _0x20511)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var _0x20763 = _0x20721("swfobject");
        var _0x206BE = _0x20721("./jsFlashBridge").JSFlashBridge;
        var _0x207A5 = _0x20721("./VPAIDAdUnit").VPAIDAdUnit;
        var _0x20700 = _0x20721("./utils").noop;
        var _0x20595 = _0x20721("./utils").callbackTimeout;
        var _0x2067C = _0x20721("./utils").isPositiveInt;
        var _0x205B6 = _0x20721("./utils").createElementWithID;
        var _0x20784 = _0x20721("./utils").unique("vpaid");
        var _0x205D7 = _0x20721("./flashTester.js").createFlashTester;
        var _0x205F8 = "error";
        var _0x2063A = "10.1.0";
        var _0x2065B = {
            isSupported: function _0x2069D() {
                return true
            }
        };
        var _0x207C6 = function() {
            function _0x20742(_0x20721, _0x20574) {
                var _0x2069D = arguments.length <= 2 || arguments[2] === undefined ? {
                    data: "VPAIDFlash.swf",
                    width: 800,
                    height: 400
                } : arguments[2];
                var _0x20532 = this;
                var _0x2065B = arguments.length <= 3 || arguments[3] === undefined ? {
                    wmode: "transparent",
                    salign: "tl",
                    align: "left",
                    allowScriptAccess: "always",
                    scale: "noScale",
                    allowFullScreen: "true",
                    quality: "high"
                } : arguments[3];
                var _0x206DF = arguments.length <= 4 || arguments[4] === undefined ? {
                    debug: false,
                    timeout: 10000
                } : arguments[4];
                _0x20553(this, _0x20742);
                var _0x205F8 = this;
                this._vpaidParentEl = _0x20721;
                this._flashID = _0x20784();
                this._destroyed = false;
                _0x20574 = _0x20574 || _0x20700;
                _0x2069D.width = _0x2067C(_0x2069D.width, 800);
                _0x2069D.height = _0x2067C(_0x2069D.height, 400);
                _0x205B6(_0x20721, this._flashID, true);
                _0x2065B.movie = _0x2069D.data;
                _0x2065B.FlashVars = "flashid=" + this._flashID + "&handler=" + _0x206BE.VPAID_FLASH_HANDLER + "&debug=" + _0x206DF.debug + "&salign=" + _0x2065B.salign;
                if (!_0x20742.isSupported()) {
                    return _0x20619("user don't support flash or doesn't have the minimum required version of flash " + _0x2063A)
                };
                this.el = _0x20763.createSWF(_0x2069D, _0x2065B, this._flashID);
                if (!this.el) {
                    return _0x20619("swfobject failed to create object in element")
                };
                var _0x205D7 = _0x20595(_0x206DF.timeout, function(_0x20595, _0x20553) {
                    $loadPendedAdUnit.call(_0x20532);
                    _0x20574(_0x20595, _0x20553)
                }, function() {
                    _0x20574("vpaid flash load timeout " + _0x206DF.timeout)
                });
                this._flash = new _0x206BE(this.el, _0x2069D.data, this._flashID, _0x2069D.width, _0x2069D.height, _0x205D7);
    
                function _0x20619(_BIGARRAY) {
                    setTimeout(function() {
                        _0x20574(new Error(_BIGARRAY))
                    }, 0);
                    return _0x205F8
                }
            }
            _0x20574(_0x20742, [{
                key: "destroy",
                value: function _0x205F8() {
                    this._destroyAdUnit();
                    if (this._flash) {
                        this._flash.destroy();
                        this._flash = null
                    };
                    this.el = null;
                    this._destroyed = true
                }
            }, {
                key: "isDestroyed",
                value: function _0x2069D() {
                    return this._destroyed
                }
            }, {
                key: "_destroyAdUnit",
                value: function _0x205D7() {
                    delete this._loadLater;
                    if (this._adUnitLoad) {
                        this._adUnitLoad = null;
                        this._flash.removeCallback(this._adUnitLoad)
                    };
                    if (this._adUnit) {
                        this._adUnit._destroy();
                        this._adUnit = null
                    }
                }
            }, {
                key: "loadAdUnit",
                value: function _0x206DF(_0x20553, _0x20574) {
                    var _0x20511 = this;
                    $throwIfDestroyed.call(this);
                    if (this._adUnit) {
                        this._destroyAdUnit()
                    };
                    if (this._flash.isReady()) {
                        this._adUnitLoad = function(_0x20532, _0x20553) {
                            if (!_0x20532) {
                                _0x20511._adUnit = new _0x207A5(_0x20511._flash)
                            };
                            _0x20511._adUnitLoad = null;
                            _0x20574(_0x20532, _0x20511._adUnit)
                        };
                        this._flash.callFlashMethod("loadAdUnit", [_0x20553], this._adUnitLoad)
                    } else {
                        this._loadLater = {
                            url: _0x20553,
                            callback: _0x20574
                        }
                    }
                }
            }, {
                key: "unloadAdUnit",
                value: function _0x20721() {
                    var _0x20511 = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
                    $throwIfDestroyed.call(this);
                    this._destroyAdUnit();
                    this._flash.callFlashMethod("unloadAdUnit", [], _0x20511)
                }
            }, {
                key: "getFlashID",
                value: function _0x20619() {
                    $throwIfDestroyed.call(this);
                    return this._flash.getFlashID()
                }
            }, {
                key: "getFlashURL",
                value: function _0x2065B() {
                    $throwIfDestroyed.call(this);
                    return this._flash.getFlashURL()
                }
            }]);
            return _0x20742
        }();
        _0x20742("isSupported", function() {
            return _0x20763.hasFlashPlayerVersion(_0x2063A) && _0x2065B.isSupported()
        }, true);
        _0x20742("runFlashTest", function(_0x20511) {
            _0x2065B = _0x205D7(document.body, _0x20511)
        });
    
        function $throwIfDestroyed() {
            if (this._destroyed) {
                throw new Error("VPAIDFlashToJS is destroyed!")
            }
        }
    
        function $loadPendedAdUnit() {
            if (this._loadLater) {
                this.loadAdUnit(this._loadLater.url, this._loadLater.callback);
                delete this._loadLater
            }
        }
    
        function _0x20742(_0x20511, _0x20532) {
            var _0x20553 = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
            Object.defineProperty(_0x207C6, _0x20511, {
                writable: _0x20553,
                configurable: false,
                value: _0x20532
            })
        }
        _0x207C6.swfobject = _0x20763;
        _0x206DF.exports = _0x207C6
    }
    
    function _0x2063A(_0x2065B, _0x20619, _0x20574) {
        "use strict";
        Object.defineProperty(_0x20574, "__esModule", {
            value: true
        });
        var _0x20532 = function() {
            function _0x20511(_0x20574, _0x20553) {
                for (var _0x20532 = 0; _0x20532 < _0x20553.length; _0x20532++) {
                    var _0x20511 = _0x20553[_0x20532];
                    _0x20511.enumerable = _0x20511.enumerable || false;
                    _0x20511.configurable = true;
                    if ("value" in _0x20511) {
                        _0x20511.writable = true
                    };
                    Object.defineProperty(_0x20574, _0x20511.key, _0x20511)
                }
            }
            return function(_0x20532, _0x20553, _0x20574) {
                if (_0x20553) {
                    _0x20511(_0x20532.prototype, _0x20553)
                };
                if (_0x20574) {
                    _0x20511(_0x20532, _0x20574)
                };
                return _0x20532
            }
        }();
    
        function _0x20511(_0x20532, _0x20511) {
            if (!(_0x20532 instanceof _0x20511)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var _0x2067C = _0x2065B("swfobject");
        var _0x20595 = "vpaid_video_flash_tester";
        var _0x205B6 = "vpaid_video_flash_tester_el";
        var _0x205F8 = _0x2065B("./jsFlashBridge").JSFlashBridge;
        var _0x2069D = _0x2065B("./utils");
        var _0x2063A = _0x2065B("./registry").MultipleValuesRegistry;
        var _0x205D7 = function() {
            function _0x20553(_0x20595) {
                var _0x20532 = this;
                var _0x205D7 = arguments.length <= 1 || arguments[1] === undefined ? {
                    data: "VPAIDFlash.swf",
                    width: 800,
                    height: 400
                } : arguments[1];
                _0x20511(this, _0x20553);
                this.parentEl = _0x2069D.createElementWithID(_0x20595, _0x205B6);
                _0x2069D.hideFlashEl(this.parentEl);
                var _0x20574 = {};
                _0x20574.movie = _0x205D7.data;
                _0x20574.FlashVars = "flashid=" + _0x205B6 + "&handler=" + _0x205F8.VPAID_FLASH_HANDLER;
                _0x20574.allowScriptAccess = "always";
                this.el = _0x2067C.createSWF(_0x205D7, _0x20574, _0x205B6);
                this._handlers = new _0x2063A();
                this._isSupported = false;
                if (this.el) {
                    _0x2069D.hideFlashEl(this.el);
                    this._flash = new _0x205F8(this.el, _0x205D7.data, _0x205B6, _0x205D7.width, _0x205D7.height, function() {
                        var _0x20511 = true;
                        _0x20532._isSupported = _0x20511;
                        _0x20532._handlers.get("change").forEach(function(_0x20532) {
                            setTimeout(function() {
                                _0x20532("change", _0x20511)
                            }, 0)
                        })
                    })
                }
            }
            _0x20532(_0x20553, [{
                key: "isSupported",
                value: function _0x20574() {
                    return this._isSupported
                }
            }, {
                key: "on",
                value: function _0x20595(_0x20532, _0x20511) {
                    this._handlers.add(_0x20532, _0x20511)
                }
            }]);
            return _0x20553
        }();
        var _0x20553 = _0x20574.createFlashTester = function _0x20553(_BIGARRAY, _0x20511) {
            if (!window[_0x20595]) {
                window[_0x20595] = new _0x205D7(_BIGARRAY, _0x20511)
            };
            return window[_0x20595]
        }
    }
    
    function _0x2065B(_0x2065B, _0x205F8, _0x20595) {
        "use strict";
        Object.defineProperty(_0x20595, "__esModule", {
            value: true
        });
        var _0x20553 = function() {
            function _0x20511(_0x20574, _0x20553) {
                for (var _0x20532 = 0; _0x20532 < _0x20553.length; _0x20532++) {
                    var _0x20511 = _0x20553[_0x20532];
                    _0x20511.enumerable = _0x20511.enumerable || false;
                    _0x20511.configurable = true;
                    if ("value" in _0x20511) {
                        _0x20511.writable = true
                    };
                    Object.defineProperty(_0x20574, _0x20511.key, _0x20511)
                }
            }
            return function(_0x20532, _0x20553, _0x20574) {
                if (_0x20553) {
                    _0x20511(_0x20532.prototype, _0x20553)
                };
                if (_0x20574) {
                    _0x20511(_0x20532, _0x20574)
                };
                return _0x20532
            }
        }();
    
        function _0x20532(_0x20532, _0x20511) {
            if (!(_0x20532 instanceof _0x20511)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var _0x206BE = _0x2065B("./utils").unique;
        var _0x205B6 = _0x2065B("./utils").isPositiveInt;
        var _0x2069D = _0x2065B("./utils").stringEndsWith;
        var _0x2067C = _0x2065B("./registry").SingleValueRegistry;
        var _0x20619 = _0x2065B("./registry").MultipleValuesRegistry;
        var _0x2063A = _0x2065B("./jsFlashBridgeRegistry");
        var _0x206DF = "vpaid_video_flash_handler";
        var _0x20574 = "AdError";
        var _0x205D7 = _0x20595.JSFlashBridge = function() {
            function _0x207C6(_0x20511, _0x20574, _0x20553, _0x205D7, _0x20595, _0x205B6) {
                _0x20532(this, _0x207C6);
                this._el = _0x20511;
                this._flashID = _0x20553;
                this._flashURL = _0x20574;
                this._width = _0x205D7;
                this._height = _0x20595;
                this._handlers = new _0x20619();
                this._callbacks = new _0x2067C();
                this._uniqueMethodIdentifier = _0x206BE(this._flashID);
                this._ready = false;
                this._handShakeHandler = _0x205B6;
                _0x2063A.addInstance(this._flashID, this)
            }
            _0x20553(_0x207C6, [{
                key: "on",
                value: function _0x2084A(_0x20532, _0x20511) {
                    this._handlers.add(_0x20532, _0x20511)
                }
            }, {
                key: "off",
                value: function _0x207E7(_0x20532, _0x20511) {
                    return this._handlers.remove(_0x20532, _0x20511)
                }
            }, {
                key: "offEvent",
                value: function _0x20829(_0x20511) {
                    return this._handlers.removeByKey(_0x20511)
                }
            }, {
                key: "offAll",
                value: function _0x20808() {
                    return this._handlers.removeAll()
                }
            }, {
                key: "callFlashMethod",
                value: function _0x2065B(_0x205B6) {
                    var _0x20532 = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
                    var _0x20553 = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
                    var _0x20595 = "";
                    if (_0x20553) {
                        _0x20595 = this._uniqueMethodIdentifier() + "_" + _0x205B6;
                        this._callbacks.add(_0x20595, _0x20553)
                    };
                    try {
                        this._el[_0x205B6]([_0x20595].concat(_0x20532))
                    } catch (e) {
                        if (_0x20553) {
                            $asyncCallback.call(this, _0x20595, e)
                        } else {
                            this._trigger(_0x20574, e)
                        }
                    }
                }
            }, {
                key: "removeCallback",
                value: function _0x2088C(_0x20511) {
                    return this._callbacks.removeByValue(_0x20511)
                }
            }, {
                key: "removeCallbackByMethodName",
                value: function _0x208AD(_0x20532) {
                    var _0x20511 = this;
                    this._callbacks.filterKeys(function(_BIGARRAY) {
                        return _0x2069D(_BIGARRAY, _0x20532)
                    }).forEach(function(_0x20532) {
                        _0x20511._callbacks.remove(_0x20532)
                    })
                }
            }, {
                key: "removeAllCallbacks",
                value: function _0x2086B() {
                    return this._callbacks.removeAll()
                }
            }, {
                key: "_trigger",
                value: function _0x205F8(_0x20553, _0x20532) {
                    var _0x20511 = this;
                    this._handlers.get(_0x20553).forEach(function(_0x20574) {
                        if (_0x20553 === "AdClickThru") {
                            _0x20574(_0x20532)
                        } else {
                            setTimeout(function() {
                                if (_0x20511._handlers.get(_0x20553).length > 0) {
                                    _0x20574(_0x20532)
                                }
                            }, 0)
                        }
                    })
                }
            }, {
                key: "_callCallback",
                value: function _0x20595(_0x205B6, _0x20553, _0x20595, _0x205D7) {
                    var _0x20532 = this._callbacks.get(_0x20553);
                    if (!_0x20532) {
                        if (_0x20595 && _0x20553 === "") {
                            this.trigger(_0x20574, _0x20595)
                        };
                        return
                    };
                    $asyncCallback.call(this, _0x20553, _0x20595, _0x205D7)
                }
            }, {
                key: "_handShake",
                value: function _0x205D7(_0x20532, _0x20511) {
                    this._ready = true;
                    if (this._handShakeHandler) {
                        this._handShakeHandler(_0x20532, _0x20511);
                        delete this._handShakeHandler
                    }
                }
            }, {
                key: "getSize",
                value: function _0x20763() {
                    return {
                        width: this._width,
                        height: this._height
                    }
                }
            }, {
                key: "setSize",
                value: function _0x208EF(_0x20532, _0x20511) {
                    this._width = _0x205B6(_0x20532, this._width);
                    this._height = _0x205B6(_0x20511, this._height);
                    this._el.setAttribute("width", this._width);
                    this._el.setAttribute("height", this._height)
                }
            }, {
                key: "getWidth",
                value: function _0x20784() {
                    return this._width
                }
            }, {
                key: "setWidth",
                value: function _0x20910(_0x20511) {
                    this.setSize(_0x20511, this._height)
                }
            }, {
                key: "getHeight",
                value: function _0x20742() {
                    return this._height
                }
            }, {
                key: "setHeight",
                value: function _0x208CE(_0x20511) {
                    this.setSize(this._width, _0x20511)
                }
            }, {
                key: "getFlashID",
                value: function _0x20700() {
                    return this._flashID
                }
            }, {
                key: "getFlashURL",
                value: function _0x20721() {
                    return this._flashURL
                }
            }, {
                key: "isReady",
                value: function _0x207A5() {
                    return this._ready
                }
            }, {
                key: "destroy",
                value: function _0x206DF() {
                    this.offAll();
                    this.removeAllCallbacks();
                    _0x2063A.removeInstanceByID(this._flashID);
                    if (this._el.parentElement) {
                        this._el.parentElement.removeChild(this._el)
                    }
                }
            }]);
            return _0x207C6
        }();
    
        function $asyncCallback(_0x20532, _0x20553, _0x20574) {
            var _0x20511 = this;
            setTimeout(function() {
                var _0x20595 = _0x20511._callbacks.get(_0x20532);
                if (_0x20595) {
                    _0x20511._callbacks.remove(_0x20532);
                    _0x20595(_0x20553, _0x20574)
                }
            }, 0)
        }
        Object.defineProperty(_0x205D7, "VPAID_FLASH_HANDLER", {
            writable: false,
            configurable: false,
            value: _0x206DF
        });
        window[_0x206DF] = function(_0x20574, _0x205B6, _0x205D7, _0x20511, _0x20553, _0x20532) {
            var _0x20595 = _0x2063A.getInstanceByID(_0x20574);
            if (!_0x20595) {
                return
            };
            if (_0x205D7 === "handShake") {
                _0x20595._handShake(_0x20553, _0x20532)
            } else {
                if (_0x205B6 !== "event") {
                    _0x20595._callCallback(_0x205D7, _0x20511, _0x20553, _0x20532)
                } else {
                    _0x20595._trigger(_0x205D7, _0x20532)
                }
            }
        }
    }
    
    function _0x2067C(_0x20595, _0x20574, _0x20511) {
        "use strict";
        var _0x205B6 = _0x20595("./registry").SingleValueRegistry;
        var _0x20532 = new _0x205B6();
        var _0x20553 = {};
        Object.defineProperty(_0x20553, "addInstance", {
            writable: false,
            configurable: false,
            value: function _0x205D7(_0x20511, _0x20553) {
                _0x20532.add(_0x20511, _0x20553)
            }
        });
        Object.defineProperty(_0x20553, "getInstanceByID", {
            writable: false,
            configurable: false,
            value: function _0x205D7(_0x20511) {
                return _0x20532.get(_0x20511)
            }
        });
        Object.defineProperty(_0x20553, "removeInstanceByID", {
            writable: false,
            configurable: false,
            value: function _0x205D7(_0x20511) {
                return _0x20532.remove(_0x20511)
            }
        });
        _0x20574.exports = _0x20553
    }
    
    function _0x2069D(_0x205B6, _0x20574, _0x20553) {
        "use strict";
        Object.defineProperty(_0x20553, "__esModule", {
            value: true
        });
        var _0x20532 = function() {
            function _0x20511(_0x20574, _0x20553) {
                for (var _0x20532 = 0; _0x20532 < _0x20553.length; _0x20532++) {
                    var _0x20511 = _0x20553[_0x20532];
                    _0x20511.enumerable = _0x20511.enumerable || false;
                    _0x20511.configurable = true;
                    if ("value" in _0x20511) {
                        _0x20511.writable = true
                    };
                    Object.defineProperty(_0x20574, _0x20511.key, _0x20511)
                }
            }
            return function(_0x20532, _0x20553, _0x20574) {
                if (_0x20553) {
                    _0x20511(_0x20532.prototype, _0x20553)
                };
                if (_0x20574) {
                    _0x20511(_0x20532, _0x20574)
                };
                return _0x20532
            }
        }();
    
        function _0x20511(_0x20532, _0x20511) {
            if (!(_0x20532 instanceof _0x20511)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var _0x20595 = _0x20553.MultipleValuesRegistry = function() {
            function _0x205D7() {
                _0x20511(this, _0x205D7);
                this._registries = {}
            }
            _0x20532(_0x205D7, [{
                key: "add",
                value: function _0x20553(_0x20511, _0x20532) {
                    if (!this._registries[_0x20511]) {
                        this._registries[_0x20511] = []
                    };
                    if (this._registries[_0x20511].indexOf(_0x20532) === -1) {
                        this._registries[_0x20511].push(_0x20532)
                    }
                }
            }, {
                key: "get",
                value: function _0x205B6(_0x20511) {
                    return this._registries[_0x20511] || []
                }
            }, {
                key: "filterKeys",
                value: function _0x20574(_0x20511) {
                    return Object.keys(this._registries).filter(_0x20511)
                }
            }, {
                key: "findByValue",
                value: function _0x20595(_0x20553) {
                    var _0x20511 = this;
                    var _0x20532 = Object.keys(this._registries).filter(function(_0x20532) {
                        return _0x20511._registries[_0x20532].indexOf(_0x20553) !== -1
                    });
                    return _0x20532
                }
            }, {
                key: "remove",
                value: function _0x205F8(_0x20532, _0x20553) {
                    if (!this._registries[_0x20532]) {
                        return
                    };
                    var _0x20511 = this._registries[_0x20532].indexOf(_0x20553);
                    if (_0x20511 < 0) {
                        return
                    };
                    return this._registries[_0x20532].splice(_0x20511, 1)
                }
            }, {
                key: "removeByKey",
                value: function _0x2063A(_0x20511) {
                    var _0x20532 = this._registries[_0x20511];
                    delete this._registries[_0x20511];
                    return _0x20532
                }
            }, {
                key: "removeByValue",
                value: function _0x2065B(_0x20553) {
                    var _0x20511 = this;
                    var _0x20532 = this.findByValue(_0x20553);
                    return _0x20532.map(function(_0x20532) {
                        return _0x20511.remove(_0x20532, _0x20553)
                    })
                }
            }, {
                key: "removeAll",
                value: function _0x20619() {
                    var _0x20511 = this._registries;
                    this._registries = {};
                    return _0x20511
                }
            }, {
                key: "size",
                value: function _0x2067C() {
                    return Object.keys(this._registries).length
                }
            }]);
            return _0x205D7
        }();
        var _0x205D7 = _0x20553.SingleValueRegistry = function() {
            function _0x2063A() {
                _0x20511(this, _0x2063A);
                this._registries = {}
            }
            _0x20532(_0x2063A, [{
                key: "add",
                value: function _0x20553(_0x20511, _0x20532) {
                    this._registries[_0x20511] = _0x20532
                }
            }, {
                key: "get",
                value: function _0x205B6(_0x20511) {
                    return this._registries[_0x20511]
                }
            }, {
                key: "filterKeys",
                value: function _0x20574(_0x20511) {
                    return Object.keys(this._registries).filter(_0x20511)
                }
            }, {
                key: "findByValue",
                value: function _0x20595(_0x20553) {
                    var _0x20511 = this;
                    var _0x20532 = Object.keys(this._registries).filter(function(_0x20532) {
                        return _0x20511._registries[_0x20532] === _0x20553
                    });
                    return _0x20532
                }
            }, {
                key: "remove",
                value: function _0x205D7(_0x20511) {
                    var _0x20532 = this._registries[_0x20511];
                    delete this._registries[_0x20511];
                    return _0x20532
                }
            }, {
                key: "removeByValue",
                value: function _0x20619(_0x20553) {
                    var _0x20511 = this;
                    var _0x20532 = this.findByValue(_0x20553);
                    return _0x20532.map(function(_0x20532) {
                        return _0x20511.remove(_0x20532)
                    })
                }
            }, {
                key: "removeAll",
                value: function _0x205F8() {
                    var _0x20511 = this._registries;
                    this._registries = {};
                    return _0x20511
                }
            }, {
                key: "size",
                value: function _0x2065B() {
                    return Object.keys(this._registries).length
                }
            }]);
            return _0x2063A
        }()
    }
    
    function _0x206BE(_0x20619, _0x205D7, _0x20574) {
        "use strict";
        Object.defineProperty(_0x20574, "__esModule", {
            value: true
        });
        _0x20574.unique = _0x2065B;
        _0x20574.noop = _0x205F8;
        _0x20574.callbackTimeout = _0x20511;
        _0x20574.createElementWithID = _0x20532;
        _0x20574.isPositiveInt = _0x205B6;
        _0x20574.stringEndsWith = _0x2063A;
        _0x20574.hideFlashEl = _0x20595;
    
        function _0x2065B(_0x20532) {
            var _0x20511 = -1;
            return function(_0x20553) {
                return _0x20532 + "_" + ++_0x20511
            }
        }
    
        function _0x205F8() {}
    
        function _0x20511(_0x20574, _0x20511, _0x20532) {
            var _0x20553 = setTimeout(function() {
                _0x20511 = _0x205F8;
                _0x20532()
            }, _0x20574);
            return function() {
                clearTimeout(_0x20553);
                _0x20511.apply(this, arguments)
            }
        }
    
        function _0x20532(_0x20574, _0x20532) {
            var _0x20511 = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
            var _0x20553 = document.createElement("div");
            _0x20553.id = _0x20532;
            if (_0x20511) {
                _0x20574.innerHTML = ""
            };
            _0x20574.appendChild(_0x20553);
            return _0x20553
        }
    
        function _0x205B6(_BIGARRAY, _0x20511) {
            return !isNaN(parseFloat(_BIGARRAY)) && isFinite(_BIGARRAY) && _BIGARRAY > 0 ? _BIGARRAY : _0x20511
        }
        var _0x20553 = function() {
            if (String.prototype.endsWith) {
                return String.prototype.endsWith
            };
            return function _0x20511(_0x20553, _0x20532) {
                var _0x20574 = this.toString();
                if (_0x20532 === undefined || _0x20532 > _0x20574.length) {
                    _0x20532 = _0x20574.length
                };
                _0x20532 -= _0x20553.length;
                var _0x20511 = _0x20574.indexOf(_0x20553, _0x20532);
                return _0x20511 !== -1 && _0x20511 === _0x20532
            }
        }();
    
        function _0x2063A(_0x20532, _0x20511) {
            return _0x20553.call(_0x20532, _0x20511)
        }
    
        function _0x20595(_0x20511) {
            _0x20511.style.position = "absolute";
            _0x20511.style.left = "-1px";
            _0x20511.style.top = "-1px";
            _0x20511.style.width = "1px";
            _0x20511.style.height = "1px"
        }
    }
    
    function _0x206DF(_0x20619, _0x205F8, _0x20574) {
        "use strict";
        var _0x205D7 = ["handshakeVersion", "initAd", "startAd", "stopAd", "skipAd", "resizeAd", "pauseAd", "resumeAd", "expandAd", "collapseAd", "subscribe", "unsubscribe"];
        var _0x20553 = ["AdLoaded", "AdStarted", "AdStopped", "AdSkipped", "AdSkippableStateChange", "AdSizeChange", "AdLinearChange", "AdDurationChange", "AdExpandedChange", "AdRemainingTimeChange", "AdVolumeChange", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdClickThru", "AdInteraction", "AdUserAcceptInvitation", "AdUserMinimize", "AdUserClose", "AdPaused", "AdPlaying", "AdLog", "AdError"];
        var _0x20595 = ["getAdLinear", "getAdWidth", "getAdHeight", "getAdExpanded", "getAdSkippableState", "getAdRemainingTime", "getAdDuration", "getAdVolume", "getAdCompanions", "getAdIcons"];
        var _0x2063A = ["setAdVolume"];
    
        function _0x205B6(_BIGARRAY, _0x20511, _0x20532) {}
        _0x205B6.prototype.handshakeVersion = function(_0x20511, _BIGARRAY) {};
        _0x205B6.prototype.initAd = function(_0x205B6, _0x20574, _0x20595, _0x20532, _0x20511, _0x20553, _BIGARRAY) {};
        _0x205B6.prototype.startAd = function(_BIGARRAY) {};
        _0x205B6.prototype.stopAd = function(_BIGARRAY) {};
        _0x205B6.prototype.skipAd = function(_BIGARRAY) {};
        _0x205B6.prototype.resizeAd = function(_0x20553, _0x20511, _0x20532, _BIGARRAY) {};
        _0x205B6.prototype.pauseAd = function(_BIGARRAY) {};
        _0x205B6.prototype.resumeAd = function(_BIGARRAY) {};
        _0x205B6.prototype.expandAd = function(_BIGARRAY) {};
        _0x205B6.prototype.collapseAd = function(_BIGARRAY) {};
        _0x205B6.prototype.subscribe = function(_0x20511, _0x20532, _BIGARRAY) {};
        _0x205B6.prototype.unsubscribe = function(_BIGARRAY, _0x20511) {};
        _0x205B6.prototype.getAdLinear = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdWidth = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdHeight = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdExpanded = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdSkippableState = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdRemainingTime = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdDuration = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdVolume = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdCompanions = function(_BIGARRAY) {};
        _0x205B6.prototype.getAdIcons = function(_BIGARRAY) {};
        _0x205B6.prototype.setAdVolume = function(_0x20511, _BIGARRAY) {};
        _0x20511(_0x205B6, "METHODS", _0x205D7);
        _0x20511(_0x205B6, "GETTERS", _0x20595);
        _0x20511(_0x205B6, "SETTERS", _0x2063A);
        _0x20511(_0x205B6, "EVENTS", _0x20553);
        var _0x2065B = _0x205D7.filter(function(_0x20511) {
            return ["skipAd"].indexOf(_0x20511) === -1
        });
        _0x20511(_0x205B6, "checkVPAIDInterface", function _0x20532(_0x20511) {
            var _0x20532 = _0x2065B.every(function(_0x20532) {
                return typeof _0x20511[_0x20532] === "function"
            });
            return _0x20532
        });
        _0x205F8.exports = _0x205B6;
    
        function _0x20511(_0x20511, _0x20532, _0x20553) {
            Object.defineProperty(_0x20511, _0x20532, {
                writable: false,
                configurable: false,
                value: _0x20553
            })
        }
    }
    
    function _0x20700(_0x20700, _0x206DF, _0x20619) {
        "use strict";
        var _0x2069D = _0x20700("./IVPAIDAdUnit");
        var _0x20763 = _0x20700("./subscriber");
        var _0x205B6 = _0x2069D.checkVPAIDInterface;
        var _0x207A5 = _0x20700("./utils");
        var _0x206BE = _0x2069D.METHODS;
        var _0x205F8 = "AdError";
        var _0x20574 = "AdClickThru";
        var _0x2063A = _0x2069D.EVENTS.filter(function(_BIGARRAY) {
            return _BIGARRAY != _0x20574
        });
    
        function _0x207C6(_0x20595, _0x20532, _0x20574, _0x20553) {
            this._isValid = _0x205B6(_0x20595);
            if (this._isValid) {
                this._creative = _0x20595;
                this._el = _0x20532;
                this._videoEl = _0x20574;
                this._iframe = _0x20553;
                this._subscribers = new _0x20763();
                _0x207A5.setFullSizeStyle(_0x20532);
                $addEventsSubscribers.call(this)
            }
        }
        _0x207C6.prototype = Object.create(_0x2069D.prototype);
        _0x207C6.prototype.isValidVPAIDAd = function _0x2067C() {
            return this._isValid
        };
        _0x2069D.METHODS.forEach(function(_0x20532) {
            var _0x20511 = ["subscribe", "unsubscribe", "initAd"];
            if (_0x20511.indexOf(_0x20532) !== -1) {
                return
            };
            _0x207C6.prototype[_0x20532] = function() {
                var _0x20553 = _0x2069D.prototype[_0x20532].length;
                var _0x20511 = Array.prototype.slice.call(arguments);
                var _0x20574 = (_0x20553 === _0x20511.length) ? _0x20511.pop() : undefined;
                setTimeout(function() {
                    var _0x205B6, _0x20553 = null;
                    try {
                        _0x205B6 = this._creative[_0x20532].apply(this._creative, _0x20511)
                    } catch (e) {
                        _0x20553 = e
                    };
                    _0x20595(_0x20574, this._subscribers, _0x20553, _0x205B6)
                } .bind(this), 0)
            }
        });
        _0x207C6.prototype.initAd = function _0x2065B(_0x205F8, _0x205B6, _0x205D7, _0x20553, _0x20532, _0x20574, _0x20511) {
            _0x20532 = _0x20532 || {};
            _0x20574 = _0x207A5.extend({
                slot: this._el,
                videoSlot: this._videoEl
            }, _0x20574 || {});
            setTimeout(function() {
                var _0x20619;
                try {
                    this._creative.initAd(_0x205F8, _0x205B6, _0x205D7, _0x20553, _0x20532, _0x20574)
                } catch (e) {
                    _0x20619 = e
                };
                _0x20595(_0x20511, this._subscribers, _0x20619)
            } .bind(this), 0)
        };
        _0x207C6.prototype.subscribe = function _0x20742(_0x20532, _0x20553, _0x20511) {
            this._subscribers.subscribe(_0x20553, _0x20532, _0x20511)
        };
        _0x207C6.prototype.unsubscribe = function _0x20784(_0x20511, _0x20532) {
            this._subscribers.unsubscribe(_0x20532, _0x20511)
        };
        _0x207C6.prototype.on = _0x207C6.prototype.subscribe;
        _0x207C6.prototype.off = _0x207C6.prototype.unsubscribe;
        _0x2069D.GETTERS.forEach(function(_0x20511) {
            _0x207C6.prototype[_0x20511] = function(_0x20532) {
                setTimeout(function() {
                    var _0x20574, _0x20553 = null;
                    try {
                        _0x20574 = this._creative[_0x20511]()
                    } catch (e) {
                        _0x20553 = e
                    };
                    _0x20595(_0x20532, this._subscribers, _0x20553, _0x20574)
                } .bind(this), 0)
            }
        });
        _0x207C6.prototype.setAdVolume = function _0x20721(_0x20532, _0x20511) {
            setTimeout(function() {
                var _0x20574, _0x20553 = null;
                try {
                    this._creative.setAdVolume(_0x20532);
                    _0x20574 = this._creative.getAdVolume()
                } catch (e) {
                    _0x20553 = e
                };
                if (!_0x20553) {
                    _0x20553 = _0x207A5.validate(_0x20574 === _0x20532, "failed to apply volume: " + _0x20532)
                };
                _0x20595(_0x20511, this._subscribers, _0x20553, _0x20574)
            } .bind(this), 0)
        };
        _0x207C6.prototype._destroy = function _0x205D7() {
            this.stopAd();
            this._subscribers.unsubscribeAll()
        };
    
        function $addEventsSubscribers() {
            _0x2063A.forEach(function(_0x20511) {
                this._creative.subscribe($trigger.bind(this, _0x20511), _0x20511)
            } .bind(this));
            this._creative.subscribe($clickThruHook.bind(this), _0x20574);
            if (this._videoEl) {
                var _0x20511 = this._iframe.contentDocument.documentElement;
                var _0x20595 = this._videoEl;
                _0x20511.addEventListener("click", function(_0x20532) {
                    if (_0x20532.target === _0x20511) {
                        _0x20595.click()
                    }
                })
            }
        }
    
        function $clickThruHook(_0x20553, _0x20511, _0x20532) {
            this._subscribers.triggerSync(_0x20574, {
                url: _0x20553,
                id: _0x20511,
                playerHandles: _0x20532
            })
        }
    
        function $trigger(_0x20511) {
            this._subscribers.trigger(_0x20511, Array.prototype.slice(arguments, 1))
        }
    
        function _0x20595(_0x20511, _0x20574, _0x20532, _0x20553) {
            if (_0x20511) {
                _0x20511(_0x20532, _0x20553)
            } else {
                if (_0x20532) {
                    _0x20574.trigger(_0x205F8, _0x20532)
                }
            }
        }
        _0x206DF.exports = _0x207C6
    }
    
    function _0x20721(_0x20700, _0x206DF, _0x2065B) {
        "use strict";
        var _0x20763 = _0x20700("./utils");
        var _0x20721 = _0x20763.unique("vpaidIframe");
        var _0x20784 = _0x20700("./VPAIDAdUnit");
        var _0x20619 = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"></head><body style=\"margin:0;padding:0\"><div class=\"ad-element\"></div><script type=\"text/javascript\" src=\"{{iframeURL_JS}}\"></script><script type=\"text/javascript\">window.parent.postMessage('{\"event\": \"ready\", \"id\": \"{{iframeID}}\"}', '{{origin}}');</script></body></html>";
        var _0x205F8 = "AdStopped";
    
        function _0x207A5(_0x20511, _0x20553, _0x20532, _0x20574) {
            _0x20532 = _0x20532 || {};
            this._id = _0x20721();
            this._destroyed = false;
            this._frameContainer = _0x20763.createElementInEl(_0x20511, "div");
            this._videoEl = _0x20553;
            this._vpaidOptions = _0x20574 || {
                timeout: 10000
            };
            this._templateConfig = {
                template: _0x20532.template || _0x20619,
                extraOptions: _0x20532.extraOptions || {}
            }
        }
        _0x207A5.prototype.destroy = function _0x2063A() {
            if (this._destroyed) {
                return
            };
            this._destroyed = true;
            $unloadPreviousAdUnit.call(this)
        };
        _0x207A5.prototype.isDestroyed = function _0x2069D() {
            return this._destroyed
        };
        _0x207A5.prototype.loadAdUnit = function _0x206BE(_0x20532, _0x20574) {
            $throwIfDestroyed.call(this);
            $unloadPreviousAdUnit.call(this);
            var _0x2065B = this;
            var _0x20595 = _0x20763.createIframeWithContent(this._frameContainer, this._templateConfig.template, _0x20763.extend({
                iframeURL_JS: _0x20532,
                iframeID: this.getID(),
                origin: _0x2067C()
            }, this._templateConfig.extraOptions));
            this._frame = _0x20595;
            this._onLoad = _0x20763.callbackTimeout(this._vpaidOptions.timeout, _0x20619.bind(this), _0x2063A.bind(this));
            window.addEventListener("message", this._onLoad);
    
            function _0x20619(_0x205D7) {
                if (_0x205D7.origin !== _0x2067C()) {
                    return
                };
                var _0x2063A = JSON.parse(_0x205D7.data);
                if (_0x2063A.id !== _0x2065B.getID()) {
                    return
                };
                var _0x20595, _0x20619, _0x205B6;
                if (!_0x2065B._frame.contentWindow) {
                    _0x20619 = "the iframe is not anymore in the DOM tree"
                } else {
                    _0x205B6 = _0x2065B._frame.contentWindow.getVPAIDAd;
                    _0x20619 = _0x20763.validate(typeof _0x205B6 === "function", "the ad didn't return a function to create an ad")
                };
                if (!_0x20619) {
                    var _0x20532 = _0x2065B._frame.contentWindow.document.querySelector(".ad-element");
                    _0x20595 = new _0x20784(_0x205B6(), _0x20532, _0x2065B._videoEl, _0x2065B._frame);
                    _0x20595.subscribe(_0x205F8, $adDestroyed.bind(_0x2065B));
                    _0x20619 = _0x20763.validate(_0x20595.isValidVPAIDAd(), "the add is not fully complaint with VPAID specification")
                };
                _0x2065B._adUnit = _0x20595;
                $destroyLoadListener.call(_0x2065B);
                _0x20574(_0x20619, _0x20619 ? null : _0x20595);
                return true
            }
    
            function _0x2063A() {
                _0x20574("timeout", null)
            }
        };
        _0x207A5.prototype.unloadAdUnit = function _0x20742() {
            $unloadPreviousAdUnit.call(this)
        };
        _0x207A5.prototype.getID = function() {
            return this._id
        };
    
        function $removeEl(_0x20532) {
            var _0x20511 = this[_0x20532];
            if (_0x20511) {
                _0x20511.remove();
                delete this[_0x20532]
            }
        }
    
        function $adDestroyed() {
            $removeAdElements.call(this);
            delete this._adUnit
        }
    
        function $unloadPreviousAdUnit() {
            $removeAdElements.call(this);
            $destroyAdUnit.call(this)
        }
    
        function $removeAdElements() {
            $removeEl.call(this, "_frame");
            $destroyLoadListener.call(this)
        }
    
        function $destroyLoadListener() {
            if (this._onLoad) {
                window.removeEventListener("message", this._onLoad);
                _0x20763.clearCallbackTimeout(this._onLoad);
                delete this._onLoad
            }
        }
    
        function $destroyAdUnit() {
            if (this._adUnit) {
                this._adUnit.stopAd();
                delete this._adUnit
            }
        }
    
        function $throwIfDestroyed() {
            if (this._destroyed) {
                throw new Error("VPAIDHTML5Client already destroyed!")
            }
        }
    
        function _0x2067C() {
            if (window.location.origin) {
                return window.location.origin
            } else {
                return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
            }
        }
        _0x206DF.exports = _0x207A5
    }
    
    function _0x20742(_0x20595, _0x20574, _0x20511) {
        "use strict";
    
        function _0x205D7() {
            this._subscribers = {}
        }
        _0x205D7.prototype.subscribe = function _0x205B6(_0x20553, _0x20532, _0x20511) {
            if (!this.isHandlerAttached(_0x20553, _0x20532)) {
                this.get(_0x20532).push({
                    handler: _0x20553,
                    context: _0x20511,
                    eventName: _0x20532
                })
            }
        };
        _0x205D7.prototype.unsubscribe = function _0x205F8(_0x20532, _0x20511) {
            this._subscribers[_0x20511] = this.get(_0x20511).filter(function(_0x20511) {
                return _0x20532 !== _0x20511.handler
            })
        };
        _0x205D7.prototype.unsubscribeAll = function _0x20619() {
            this._subscribers = {}
        };
        _0x205D7.prototype.trigger = function(_0x20532, _0x20511) {
            var _0x20574 = this;
            var _0x20553 = this.get(_0x20532).concat(this.get("*"));
            _0x20553.forEach(function(_0x20532) {
                setTimeout(function() {
                    if (_0x20574.isHandlerAttached(_0x20532.handler, _0x20532.eventName)) {
                        _0x20532.handler.call(_0x20532.context, _0x20511)
                    }
                }, 0)
            })
        };
        _0x205D7.prototype.triggerSync = function(_0x20532, _0x20511) {
            var _0x20553 = this.get(_0x20532).concat(this.get("*"));
            _0x20553.forEach(function(_0x20532) {
                _0x20532.handler.call(_0x20532.context, _0x20511)
            })
        };
        _0x205D7.prototype.get = function _0x20532(_0x20511) {
            if (!this._subscribers[_0x20511]) {
                this._subscribers[_0x20511] = []
            };
            return this._subscribers[_0x20511]
        };
        _0x205D7.prototype.isHandlerAttached = function _0x20553(_0x20532, _0x20511) {
            return this.get(_0x20511).some(function(_0x20511) {
                return _0x20532 === _0x20511.handler
            })
        };
        _0x20574.exports = _0x205D7
    }
    
    function _0x20763(_0x2063A, _0x205F8, _0x205B6) {
        "use strict";
    
        function _0x20619() {}
    
        function _0x20700(_BIGARRAY, _0x20511) {
            return _BIGARRAY ? null : new Error(_0x20511)
        }
        var _0x206BE = {};
    
        function _0x20532(_BIGARRAY) {
            var _0x20511 = _0x206BE[_BIGARRAY];
            if (_0x20511) {
                clearTimeout(_0x20511);
                delete _0x206BE[_BIGARRAY]
            }
        }
    
        function _0x20511(_0x205B6, _0x20553, _0x20574) {
            var _0x20511, _0x20595;
            _0x20595 = setTimeout(function() {
                _0x20553 = _0x20619;
                delete _0x20595[_0x20511];
                _0x20574()
            }, _0x205B6);
            _0x20511 = function() {
                if (_0x20553.apply(this, arguments)) {
                    _0x20532(_0x20511)
                }
            };
            _0x206BE[_0x20511] = _0x20595;
            return _0x20511
        }
    
        function _0x20553(_0x20553, _0x20574, _0x20511) {
            var _0x20532 = document.createElement(_0x20574);
            if (_0x20511) {
                _0x20532.id = _0x20511
            };
            _0x20553.appendChild(_0x20532);
            return _0x20532
        }
    
        function _0x20595(_0x20553, _0x20595, _0x20511) {
            var _0x20532 = _0x20574(_0x20553, null, _0x20511.zIndex);
            if (!_0x2067C(_0x20532, _0x2069D(_0x20595, _0x20511))) {
                return
            };
            return _0x20532
        }
    
        function _0x20574(_0x20532, _0x20553, _0x20574) {
            var _0x20511 = document.createElement("iframe");
            _0x20511.src = _0x20553 || "about:blank";
            _0x20511.marginWidth = "0";
            _0x20511.marginHeight = "0";
            _0x20511.frameBorder = "0";
            _0x20511.width = "100%";
            _0x20511.height = "100%";
            _0x2065B(_0x20511);
            if (_0x20574) {
                _0x20511.style.zIndex = _0x20574
            };
            _0x20511.setAttribute("SCROLLING", "NO");
            _0x20532.innerHTML = "";
            _0x20532.appendChild(_0x20511);
            return _0x20511
        }
    
        function _0x2065B(_0x20511) {
            _0x20511.style.position = "absolute";
            _0x20511.style.left = "0";
            _0x20511.style.top = "0";
            _0x20511.style.margin = "0px";
            _0x20511.style.padding = "0px";
            _0x20511.style.border = "none";
            _0x20511.style.width = "100%";
            _0x20511.style.height = "100%"
        }
    
        function _0x2069D(_0x20532, _0x20511) {
            Object.keys(_0x20511).forEach(function(_0x20553) {
                var _0x20574 = (typeof _0x20574 === "object") ? JSON.stringify(_0x20511[_0x20553]) : _0x20511[_0x20553];
                _0x20532 = _0x20532.replace(new RegExp("{{" + _0x20553 + "}}", "g"), _0x20574)
            });
            return _0x20532
        }
    
        function _0x2067C(_0x20553, _0x20511) {
            var _0x20532 = _0x20553.contentWindow && _0x20553.contentWindow.document;
            if (!_0x20532) {
                return false
            };
            _0x20532.write(_0x20511);
            return true
        }
    
        function _0x205D7(_0x20532, _0x20511) {
            Object.keys(_0x20511).forEach(function(_BIGARRAY) {
                _0x20532[_BIGARRAY] = _0x20511[_BIGARRAY]
            });
            return _0x20532
        }
    
        function _0x206DF(_0x20532) {
            var _0x20511 = -1;
            return function() {
                return _0x20532 + "_" + (++_0x20511)
            }
        }
        _0x205F8.exports = {
            noop: _0x20619,
            validate: _0x20700,
            clearCallbackTimeout: _0x20532,
            callbackTimeout: _0x20511,
            createElementInEl: _0x20553,
            createIframeWithContent: _0x20595,
            createIframe: _0x20574,
            setFullSizeStyle: _0x2065B,
            simpleTemplate: _0x2069D,
            setIframeContent: _0x2067C,
            extend: _0x205D7,
            unique: _0x206DF
        }
    }
    
    function _0x20784(_0x20553, _0x20532, _0x20511) {
        (function(_0x20553, _0x20511) {
            if (typeof define === "function" && define.amd) {
                define(_0x20511)
            } else {
                if (typeof _0x20532 === "object" && _0x20532.exports) {
                    _0x20532.exports = _0x20511()
                } else {
                    _0x20553.swfobject = _0x20511()
                }
            }
        }(this, function() {
            var _0x20B62 = "undefined",
                _0x20910 = "object",
                _0x20A18 = "Shockwave Flash",
                _0x20A39 = "ShockwaveFlash.ShockwaveFlash",
                _0x207A5 = "application/x-shockwave-flash",
                _0x20784 = "SWFObjectExprInst",
                _0x20952 = "onreadystatechange",
                _0x20BA4 = window,
                _0x206DF = document,
                _0x208EF = navigator,
                _0x20994 = false,
                _0x20700 = [],
                _0x209B5 = [],
                _0x20931 = [],
                _0x208AD = [],
                _0x20ABD, _0x20ADE, _0x20A7B, _0x20A9C, _0x2084A = false,
                _0x2088C = false,
                _0x20721, _0x20742, _0x20595 = true,
                _0x20763 = false,
                _0x20B41 = function() {
                    var _0x205F8 = typeof _0x206DF.getElementById !== _0x20B62 && typeof _0x206DF.getElementsByTagName !== _0x20B62 && typeof _0x206DF.createElement !== _0x20B62,
                        _0x205D7 = _0x208EF.userAgent.toLowerCase(),
                        _0x20595 = _0x208EF.platform.toLowerCase(),
                        _0x2063A = _0x20595 ? /win/ .test(_0x20595) : /win/ .test(_0x205D7),
                        _0x20574 = _0x20595 ? /mac/ .test(_0x20595) : /mac/ .test(_0x205D7),
                        _0x20619 = /webkit/ .test(_0x205D7) ? parseFloat(_0x205D7.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        _0x20553 = _0x208EF.appName === "Microsoft Internet Explorer",
                        _0x205B6 = [0, 0, 0],
                        _0x20532 = null;
                    if (typeof _0x208EF.plugins !== _0x20B62 && typeof _0x208EF.plugins[_0x20A18] === _0x20910) {
                        _0x20532 = _0x208EF.plugins[_0x20A18].description;
                        if (_0x20532 && (typeof _0x208EF.mimeTypes !== _0x20B62 && _0x208EF.mimeTypes[_0x207A5] && _0x208EF.mimeTypes[_0x207A5].enabledPlugin)) {
                            _0x20994 = true;
                            _0x20553 = false;
                            _0x20532 = _0x20532.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            _0x205B6[0] = _0x20B20(_0x20532.replace(/^(.*)\..*$/, "$1"));
                            _0x205B6[1] = _0x20B20(_0x20532.replace(/^.*\.(.*)\s.*$/, "$1"));
                            _0x205B6[2] = /[a-zA-Z]/ .test(_0x20532) ? _0x20B20(_0x20532.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0
                        }
                    } else {
                        if (typeof _0x20BA4.ActiveXObject !== _0x20B62) {
                            try {
                                var _0x20511 = new ActiveXObject(_0x20A39);
                                if (_0x20511) {
                                    _0x20532 = _0x20511.GetVariable("$version");
                                    if (_0x20532) {
                                        _0x20553 = true;
                                        _0x20532 = _0x20532.split(" ")[1].split(",");
                                        _0x205B6 = [_0x20B20(_0x20532[0]), _0x20B20(_0x20532[1]), _0x20B20(_0x20532[2])]
                                    }
                                }
                            } catch (e) {}
                        }
                    };
                    return {
                        w3: _0x205F8,
                        pv: _0x205B6,
                        wk: _0x20619,
                        ie: _0x20553,
                        win: _0x2063A,
                        mac: _0x20574
                    }
                }(),
                _0x20973 = function() {
                    if (!_0x20B41.w3) {
                        return
                    };
                    if ((typeof _0x206DF.readyState !== _0x20B62 && (_0x206DF.readyState === "complete" || _0x206DF.readyState === "interactive")) || (typeof _0x206DF.readyState === _0x20B62 && (_0x206DF.getElementsByTagName("body")[0] || _0x206DF.body))) {
                        _0x205B6()
                    };
                    if (!_0x2084A) {
                        if (typeof _0x206DF.addEventListener !== _0x20B62) {
                            _0x206DF.addEventListener("DOMContentLoaded", _0x205B6, false)
                        };
                        if (_0x20B41.ie) {
                            _0x206DF.attachEvent(_0x20952, function _0x20553() {
                                if (_0x206DF.readyState === "complete") {
                                    _0x206DF.detachEvent(_0x20952, _0x20553);
                                    _0x205B6()
                                }
                            });
                            if (_0x20BA4 == top) {
                                (function _0x20511() {
                                    if (_0x2084A) {
                                        return
                                    };
                                    try {
                                        _0x206DF.documentElement.doScroll("left")
                                    } catch (e) {
                                        setTimeout(_0x20511, 0);
                                        return
                                    };
                                    _0x205B6()
                                }())
                            }
                        };
                        if (_0x20B41.wk) {
                            (function _0x20532() {
                                if (_0x2084A) {
                                    return
                                };
                                if (!/loaded|complete/ .test(_0x206DF.readyState)) {
                                    setTimeout(_0x20532, 0);
                                    return
                                };
                                _0x205B6()
                            }())
                        }
                    }
                }();
    
            function _0x205B6() {
                if (_0x2084A || !document.getElementsByTagName("body")[0]) {
                    return
                };
                try {
                    var _0x20574, _0x20553 = _0x2063A("span");
                    _0x20553.style.display = "none";
                    _0x20574 = _0x206DF.getElementsByTagName("body")[0].appendChild(_0x20553);
                    _0x20574.parentNode.removeChild(_0x20574);
                    _0x20574 = null;
                    _0x20553 = null
                } catch (e) {
                    return
                };
                _0x2084A = true;
                var _0x20511 = _0x20700.length;
                for (var _0x20532 = 0; _0x20532 < _0x20511; _0x20532++) {
                    _0x20700[_0x20532]()
                }
            }
    
            function _0x20532(_0x20511) {
                if (_0x2084A) {
                    _0x20511()
                } else {
                    _0x20700[_0x20700.length] = _0x20511
                }
            }
    
            function _0x20574(_0x20511) {
                if (typeof _0x20BA4.addEventListener !== _0x20B62) {
                    _0x20BA4.addEventListener("load", _0x20511, false)
                } else {
                    if (typeof _0x206DF.addEventListener !== _0x20B62) {
                        _0x206DF.addEventListener("load", _0x20511, false)
                    } else {
                        if (typeof _0x20BA4.attachEvent !== _0x20B62) {
                            _0x20553(_0x20BA4, "onload", _0x20511)
                        } else {
                            if (typeof _0x20BA4.onload === "function") {
                                var _0x20532 = _0x20BA4.onload;
                                _0x20BA4.onload = function() {
                                    _0x20532();
                                    _0x20511()
                                }
                            } else {
                                _0x20BA4.onload = _0x20511
                            }
                        }
                    }
                }
            }
    
            function _0x20AFF() {
                var _0x20511 = _0x206DF.getElementsByTagName("body")[0];
                var _0x20574 = _0x2063A(_0x20910);
                _0x20574.setAttribute("style", "visibility: hidden;");
                _0x20574.setAttribute("type", _0x207A5);
                var _0x20595 = _0x20511.appendChild(_0x20574);
                if (_0x20595) {
                    var _0x20553 = 0;
                    (function _0x20532() {
                        if (typeof _0x20595.GetVariable !== _0x20B62) {
                            try {
                                var _0x205B6 = _0x20595.GetVariable("$version");
                                if (_0x205B6) {
                                    _0x205B6 = _0x205B6.split(" ")[1].split(",");
                                    _0x20B41.pv = [_0x20B20(_0x205B6[0]), _0x20B20(_0x205B6[1]), _0x20B20(_0x205B6[2])]
                                }
                            } catch (e) {
                                _0x20B41.pv = [8, 0, 0]
                            }
                        } else {
                            if (_0x20553 < 10) {
                                _0x20553++;
                                setTimeout(_0x20532, 10);
                                return
                            }
                        };
                        _0x20511.removeChild(_0x20574);
                        _0x20595 = null;
                        _0x208CE()
                    }())
                } else {
                    _0x208CE()
                }
            }
    
            function _0x208CE() {
                var _0x2069D = _0x209B5.length;
                if (_0x2069D > 0) {
                    for (var _0x20574 = 0; _0x20574 < _0x2069D; _0x20574++) {
                        var _0x20595 = _0x209B5[_0x20574].id;
                        var _0x20532 = _0x209B5[_0x20574].callbackFn;
                        var _0x20553 = {
                            success: false,
                            id: _0x20595
                        };
                        if (_0x20B41.pv[0] > 0) {
                            var _0x20619 = _0x207C6(_0x20595);
                            if (_0x20619) {
                                if (_0x20829(_0x209B5[_0x20574].swfVersion) && !(_0x20B41.wk && _0x20B41.wk < 312)) {
                                    _0x209F7(_0x20595, true);
                                    if (_0x20532) {
                                        _0x20553.success = true;
                                        _0x20553.ref = _0x20808(_0x20595);
                                        _0x20553.id = _0x20595;
                                        _0x20532(_0x20553)
                                    }
                                } else {
                                    if (_0x209B5[_0x20574].expressInstall && _0x205D7()) {
                                        var _0x20511 = {};
                                        _0x20511.data = _0x209B5[_0x20574].expressInstall;
                                        _0x20511.width = _0x20619.getAttribute("width") || "0";
                                        _0x20511.height = _0x20619.getAttribute("height") || "0";
                                        if (_0x20619.getAttribute("class")) {
                                            _0x20511.styleclass = _0x20619.getAttribute("class")
                                        };
                                        if (_0x20619.getAttribute("align")) {
                                            _0x20511.align = _0x20619.getAttribute("align")
                                        };
                                        var _0x2065B = {};
                                        var _0x2063A = _0x20619.getElementsByTagName("param");
                                        var _0x2067C = _0x2063A.length;
                                        for (var _0x205B6 = 0; _0x205B6 < _0x2067C; _0x205B6++) {
                                            if (_0x2063A[_0x205B6].getAttribute("name").toLowerCase() !== "movie") {
                                                _0x2065B[_0x2063A[_0x205B6].getAttribute("name")] = _0x2063A[_0x205B6].getAttribute("value")
                                            }
                                        };
                                        _0x20A5A(_0x20511, _0x2065B, _0x20595, _0x20532)
                                    } else {
                                        _0x206BE(_0x20619);
                                        if (_0x20532) {
                                            _0x20532(_0x20553)
                                        }
                                    }
                                }
                            }
                        } else {
                            _0x209F7(_0x20595, true);
                            if (_0x20532) {
                                var _0x205F8 = _0x20808(_0x20595);
                                if (_0x205F8 && typeof _0x205F8.SetVariable !== _0x20B62) {
                                    _0x20553.success = true;
                                    _0x20553.ref = _0x205F8;
                                    _0x20553.id = _0x205F8.id
                                };
                                _0x20532(_0x20553)
                            }
                        }
                    }
                }
            }
            _0x20700[0] = function() {
                if (_0x20994) {
                    _0x20AFF()
                } else {
                    _0x208CE()
                }
            };
    
            function _0x20808(_0x20532) {
                var _0x20553 = null,
                    _0x20511 = _0x207C6(_0x20532);
                if (_0x20511 && _0x20511.nodeName.toUpperCase() === "OBJECT") {
                    if (typeof _0x20511.SetVariable !== _0x20B62) {
                        _0x20553 = _0x20511
                    } else {
                        _0x20553 = _0x20511.getElementsByTagName(_0x20910)[0] || _0x20511
                    }
                };
                return _0x20553
            }
    
            function _0x205D7() {
                return !_0x2088C && _0x20829("6.0.65") && (_0x20B41.win || _0x20B41.mac) && !(_0x20B41.wk && _0x20B41.wk < 312)
            }
    
            function _0x20A5A(_0x20532, _0x205D7, _0x20619, _0x20553) {
                var _0x205B6 = _0x207C6(_0x20619);
                _0x20619 = _0x207E7(_0x20619);
                _0x2088C = true;
                _0x20A7B = _0x20553 || null;
                _0x20A9C = {
                    success: false,
                    id: _0x20619
                };
                if (_0x205B6) {
                    if (_0x205B6.nodeName.toUpperCase() === "OBJECT") {
                        _0x20ABD = _0x20511(_0x205B6);
                        _0x20ADE = null
                    } else {
                        _0x20ABD = _0x205B6;
                        _0x20ADE = _0x20619
                    };
                    _0x20532.id = _0x20784;
                    if (typeof _0x20532.width === _0x20B62 || (!/%$/ .test(_0x20532.width) && _0x20B20(_0x20532.width) < 310)) {
                        _0x20532.width = "310"
                    };
                    if (typeof _0x20532.height === _0x20B62 || (!/%$/ .test(_0x20532.height) && _0x20B20(_0x20532.height) < 137)) {
                        _0x20532.height = "137"
                    };
                    var _0x205F8 = _0x20B41.ie ? "ActiveX" : "PlugIn",
                        _0x20574 = "MMredirectURL=" + encodeURIComponent(_0x20BA4.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + _0x205F8 + "&MMdoctitle=" + encodeURIComponent(_0x206DF.title.slice(0, 47) + " - Flash Player Installation");
                    if (typeof _0x205D7.flashvars !== _0x20B62) {
                        _0x205D7.flashvars += "&" + _0x20574
                    } else {
                        _0x205D7.flashvars = _0x20574
                    };
                    if (_0x20B41.ie && _0x205B6.readyState != 4) {
                        var _0x20595 = _0x2063A("div");
                        _0x20619 += "SWFObjectNew";
                        _0x20595.setAttribute("id", _0x20619);
                        _0x205B6.parentNode.insertBefore(_0x20595, _0x205B6);
                        _0x205B6.style.display = "none";
                        _0x209D6(_0x205B6)
                    };
                    _0x2069D(_0x20532, _0x205D7, _0x20619)
                }
            }
    
            function _0x206BE(_0x20553) {
                if (_0x20B41.ie && _0x20553.readyState != 4) {
                    _0x20553.style.display = "none";
                    var _0x20532 = _0x2063A("div");
                    _0x20553.parentNode.insertBefore(_0x20532, _0x20553);
                    _0x20532.parentNode.replaceChild(_0x20511(_0x20553), _0x20532);
                    _0x209D6(_0x20553)
                } else {
                    _0x20553.parentNode.replaceChild(_0x20511(_0x20553), _0x20553)
                }
            }
    
            function _0x20511(_0x205B6) {
                var _0x20511 = _0x2063A("div");
                if (_0x20B41.win && _0x20B41.ie) {
                    _0x20511.innerHTML = _0x205B6.innerHTML
                } else {
                    var _0x20595 = _0x205B6.getElementsByTagName(_0x20910)[0];
                    if (_0x20595) {
                        var _0x20532 = _0x20595.childNodes;
                        if (_0x20532) {
                            var _0x20553 = _0x20532.length;
                            for (var _0x20574 = 0; _0x20574 < _0x20553; _0x20574++) {
                                if (!(_0x20532[_0x20574].nodeType == 1 && _0x20532[_0x20574].nodeName === "PARAM") && !(_0x20532[_0x20574].nodeType == 8)) {
                                    _0x20511.appendChild(_0x20532[_0x20574].cloneNode(true))
                                }
                            }
                        }
                    }
                };
                return _0x20511
            }
    
            function _0x2065B(_0x20553, _0x20532) {
                var _0x20511 = _0x2063A("div");
                _0x20511.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + _0x20553 + "'>" + _0x20532 + "</object>";
                return _0x20511.firstChild
            }
    
            function _0x2069D(_0x20511, _0x205F8, _0x20595) {
                var _0x20619, _0x20574 = _0x207C6(_0x20595);
                _0x20595 = _0x207E7(_0x20595);
                if (_0x20B41.wk && _0x20B41.wk < 312) {
                    return _0x20619
                };
                if (_0x20574) {
                    var _0x205B6 = (_0x20B41.ie) ? _0x2063A("div") : _0x2063A(_0x20910),
                        _0x20532, _0x20553, _0x205D7;
                    if (typeof _0x20511.id === _0x20B62) {
                        _0x20511.id = _0x20595
                    };
                    for (_0x205D7 in _0x205F8) {
                        if (_0x205F8.hasOwnProperty(_0x205D7) && _0x205D7.toLowerCase() !== "movie") {
                            _0x2067C(_0x205B6, _0x205D7, _0x205F8[_0x205D7])
                        }
                    };
                    if (_0x20B41.ie) {
                        _0x205B6 = _0x2065B(_0x20511.data, _0x205B6.innerHTML)
                    };
                    for (_0x20532 in _0x20511) {
                        if (_0x20511.hasOwnProperty(_0x20532)) {
                            _0x20553 = _0x20532.toLowerCase();
                            if (_0x20553 === "styleclass") {
                                _0x205B6.setAttribute("class", _0x20511[_0x20532])
                            } else {
                                if (_0x20553 !== "classid" && _0x20553 !== "data") {
                                    _0x205B6.setAttribute(_0x20532, _0x20511[_0x20532])
                                }
                            }
                        }
                    };
                    if (_0x20B41.ie) {
                        _0x20931[_0x20931.length] = _0x20511.id
                    } else {
                        _0x205B6.setAttribute("type", _0x207A5);
                        _0x205B6.setAttribute("data", _0x20511.data)
                    };
                    _0x20574.parentNode.replaceChild(_0x205B6, _0x20574);
                    _0x20619 = _0x205B6
                };
                return _0x20619
            }
    
            function _0x2067C(_0x20511, _0x20553, _0x20574) {
                var _0x20532 = _0x2063A("param");
                _0x20532.setAttribute("name", _0x20553);
                _0x20532.setAttribute("value", _0x20574);
                _0x20511.appendChild(_0x20532)
            }
    
            function _0x209D6(_0x20511) {
                var _0x20532 = _0x207C6(_0x20511);
                if (_0x20532 && _0x20532.nodeName.toUpperCase() === "OBJECT") {
                    if (_0x20B41.ie) {
                        _0x20532.style.display = "none";
                        (function _0x20553() {
                            if (_0x20532.readyState == 4) {
                                for (var _0x20511 in _0x20532) {
                                    if (typeof _0x20532[_0x20511] === "function") {
                                        _0x20532[_0x20511] = null
                                    }
                                };
                                _0x20532.parentNode.removeChild(_0x20532)
                            } else {
                                setTimeout(_0x20553, 10)
                            }
                        }())
                    } else {
                        _0x20532.parentNode.removeChild(_0x20532)
                    }
                }
            }
    
            function _0x2086B(_0x20511) {
                return (_0x20511 && _0x20511.nodeType && _0x20511.nodeType === 1)
            }
    
            function _0x207E7(_0x20511) {
                return (_0x2086B(_0x20511)) ? _0x20511.id : _0x20511
            }
    
            function _0x207C6(_0x20532) {
                if (_0x2086B(_0x20532)) {
                    return _0x20532
                };
                var _0x20511 = null;
                try {
                    _0x20511 = _0x206DF.getElementById(_0x20532)
                } catch (e) {};
                return _0x20511
            }
    
            function _0x2063A(_0x20511) {
                return _0x206DF.createElement(_0x20511)
            }
    
            function _0x20B20(_BIGARRAY) {
                return parseInt(_BIGARRAY, 10)
            }
    
            function _0x20553(_0x20553, _0x20511, _0x20532) {
                _0x20553.attachEvent(_0x20511, _0x20532);
                _0x208AD[_0x208AD.length] = [_0x20553, _0x20511, _0x20532]
            }
    
            function _0x20829(_0x20532) {
                _0x20532 += "";
                var _0x20511 = _0x20B41.pv,
                    _0x20553 = _0x20532.split(".");
                _0x20553[0] = _0x20B20(_0x20553[0]);
                _0x20553[1] = _0x20B20(_0x20553[1]) || 0;
                _0x20553[2] = _0x20B20(_0x20553[2]) || 0;
                return (_0x20511[0] > _0x20553[0] || (_0x20511[0] == _0x20553[0] && _0x20511[1] > _0x20553[1]) || (_0x20511[0] == _0x20553[0] && _0x20511[1] == _0x20553[1] && _0x20511[2] >= _0x20553[2])) ? true : false
            }
    
            function _0x20619(_0x205D7, _0x20511, _0x20574, _0x20595) {
                var _0x20532 = _0x206DF.getElementsByTagName("head")[0];
                if (!_0x20532) {
                    return
                };
                var _0x20553 = (typeof _0x20574 === "string") ? _0x20574 : "screen";
                if (_0x20595) {
                    _0x20721 = null;
                    _0x20742 = null
                };
                if (!_0x20721 || _0x20742 != _0x20553) {
                    var _0x205B6 = _0x2063A("style");
                    _0x205B6.setAttribute("type", "text/css");
                    _0x205B6.setAttribute("media", _0x20553);
                    _0x20721 = _0x20532.appendChild(_0x205B6);
                    if (_0x20B41.ie && typeof _0x206DF.styleSheets !== _0x20B62 && _0x206DF.styleSheets.length > 0) {
                        _0x20721 = _0x206DF.styleSheets[_0x206DF.styleSheets.length - 1]
                    };
                    _0x20742 = _0x20553
                };
                if (_0x20721) {
                    if (typeof _0x20721.addRule !== _0x20B62) {
                        _0x20721.addRule(_0x205D7, _0x20511)
                    } else {
                        if (typeof _0x206DF.createTextNode !== _0x20B62) {
                            _0x20721.appendChild(_0x206DF.createTextNode(_0x205D7 + " {" + _0x20511 + "}"))
                        }
                    }
                }
            }
    
            function _0x209F7(_0x20532, _0x20553) {
                if (!_0x20595) {
                    return
                };
                var _0x20574 = _0x20553 ? "visible" : "hidden",
                    _0x20511 = _0x207C6(_0x20532);
                if (_0x2084A && _0x20511) {
                    _0x20511.style.visibility = _0x20574
                } else {
                    if (typeof _0x20532 === "string") {
                        _0x20619("#" + _0x20532, "visibility:" + _0x20574)
                    }
                }
            }
    
            function _0x20B83(_0x20553) {
                var _0x20532 = /[\\\"<>\.;]/;
                var _0x20511 = _0x20532.exec(_0x20553) !== null;
                return _0x20511 && typeof encodeURIComponent !== _0x20B62 ? encodeURIComponent(_0x20553) : _0x20553
            }
            var _0x205F8 = function() {
                if (_0x20B41.ie) {
                    window.attachEvent("onunload", function() {
                        var _0x205B6 = _0x208AD.length;
                        for (var _0x20511 = 0; _0x20511 < _0x205B6; _0x20511++) {
                            _0x208AD[_0x20511][0].detachEvent(_0x208AD[_0x20511][1], _0x208AD[_0x20511][2])
                        };
                        var _0x20532 = _0x20931.length;
                        for (var _0x20553 = 0; _0x20553 < _0x20532; _0x20553++) {
                            _0x209D6(_0x20931[_0x20553])
                        };
                        for (var _0x20574 in _0x20B41) {
                            _0x20B41[_0x20574] = null
                        };
                        _0x20B41 = null;
                        for (var _0x20595 in swfobject) {
                            swfobject[_0x20595] = null
                        };
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(_0x20532, _0x20574, _0x20595, _0x20511) {
                    if (_0x20B41.w3 && _0x20532 && _0x20574) {
                        var _0x20553 = {};
                        _0x20553.id = _0x20532;
                        _0x20553.swfVersion = _0x20574;
                        _0x20553.expressInstall = _0x20595;
                        _0x20553.callbackFn = _0x20511;
                        _0x209B5[_0x209B5.length] = _0x20553;
                        _0x209F7(_0x20532, false)
                    } else {
                        if (_0x20511) {
                            _0x20511({
                                success: false,
                                id: _0x20532
                            })
                        }
                    }
                },
                getObjectById: function(_0x20511) {
                    if (_0x20B41.w3) {
                        return _0x20808(_0x20511)
                    }
                },
                embedSWF: function(_0x2065B, _0x2063A, _0x206BE, _0x205B6, _0x2067C, _0x206DF, _0x20595, _0x20619, _0x20511, _0x20553) {
                    var _0x205F8 = _0x207E7(_0x2063A),
                        _0x20574 = {
                            success: false,
                            id: _0x205F8
                        };
                    if (_0x20B41.w3 && !(_0x20B41.wk && _0x20B41.wk < 312) && _0x2065B && _0x2063A && _0x206BE && _0x205B6 && _0x2067C) {
                        _0x209F7(_0x205F8, false);
                        _0x20532(function() {
                            _0x206BE += "";
                            _0x205B6 += "";
                            var _0x20532 = {};
                            if (_0x20511 && typeof _0x20511 === _0x20910) {
                                for (var _0x20700 in _0x20511) {
                                    _0x20532[_0x20700] = _0x20511[_0x20700]
                                }
                            };
                            _0x20532.data = _0x2065B;
                            _0x20532.width = _0x206BE;
                            _0x20532.height = _0x205B6;
                            var _0x207C6 = {};
                            if (_0x20619 && typeof _0x20619 === _0x20910) {
                                for (var _0x20721 in _0x20619) {
                                    _0x207C6[_0x20721] = _0x20619[_0x20721]
                                }
                            };
                            if (_0x20595 && typeof _0x20595 === _0x20910) {
                                for (var _0x20742 in _0x20595) {
                                    if (_0x20595.hasOwnProperty(_0x20742)) {
                                        var _0x20784 = (_0x20763) ? encodeURIComponent(_0x20742) : _0x20742,
                                            _0x207E7 = (_0x20763) ? encodeURIComponent(_0x20595[_0x20742]) : _0x20595[_0x20742];
                                        if (typeof _0x207C6.flashvars !== _0x20B62) {
                                            _0x207C6.flashvars += "&" + _0x20784 + "=" + _0x207E7
                                        } else {
                                            _0x207C6.flashvars = _0x20784 + "=" + _0x207E7
                                        }
                                    }
                                }
                            };
                            if (_0x20829(_0x2067C)) {
                                var _0x207A5 = _0x2069D(_0x20532, _0x207C6, _0x2063A);
                                if (_0x20532.id == _0x205F8) {
                                    _0x209F7(_0x205F8, true)
                                };
                                _0x20574.success = true;
                                _0x20574.ref = _0x207A5;
                                _0x20574.id = _0x207A5.id
                            } else {
                                if (_0x206DF && _0x205D7()) {
                                    _0x20532.data = _0x206DF;
                                    _0x20A5A(_0x20532, _0x207C6, _0x2063A, _0x20553);
                                    return
                                } else {
                                    _0x209F7(_0x205F8, true)
                                }
                            };
                            if (_0x20553) {
                                _0x20553(_0x20574)
                            }
                        })
                    } else {
                        if (_0x20553) {
                            _0x20553(_0x20574)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    _0x20595 = false
                },
                enableUriEncoding: function(_BIGARRAY) {
                    _0x20763 = (typeof _BIGARRAY === _0x20B62) ? true : _BIGARRAY
                },
                ua: _0x20B41,
                getFlashPlayerVersion: function() {
                    return {
                        major: _0x20B41.pv[0],
                        minor: _0x20B41.pv[1],
                        release: _0x20B41.pv[2]
                    }
                },
                hasFlashPlayerVersion: _0x20829,
                createSWF: function(_0x20511, _0x20532, _0x20553) {
                    if (_0x20B41.w3) {
                        return _0x2069D(_0x20511, _0x20532, _0x20553)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(_0x20511, _0x20553, _0x20574, _0x20532) {
                    if (_0x20B41.w3 && _0x205D7()) {
                        _0x20A5A(_0x20511, _0x20553, _0x20574, _0x20532)
                    }
                },
                removeSWF: function(_0x20511) {
                    if (_0x20B41.w3) {
                        _0x209D6(_0x20511)
                    }
                },
                createCSS: function(_0x20574, _0x20511, _0x20532, _0x20553) {
                    if (_0x20B41.w3) {
                        _0x20619(_0x20574, _0x20511, _0x20532, _0x20553)
                    }
                },
                addDomLoadEvent: _0x20532,
                addLoadEvent: _0x20574,
                getQueryParamValue: function(_0x20553) {
                    var _0x20574 = _0x206DF.location.search || _0x206DF.location.hash;
                    if (_0x20574) {
                        if (/\?/ .test(_0x20574)) {
                            _0x20574 = _0x20574.split("?")[1]
                        };
                        if (!_0x20553) {
                            return _0x20B83(_0x20574)
                        };
                        var _0x20532 = _0x20574.split("&");
                        for (var _0x20511 = 0; _0x20511 < _0x20532.length; _0x20511++) {
                            if (_0x20532[_0x20511].substring(0, _0x20532[_0x20511].indexOf("=")) == _0x20553) {
                                return _0x20B83(_0x20532[_0x20511].substring((_0x20532[_0x20511].indexOf("=") + 1)))
                            }
                        }
                    };
                    return ""
                },
                expressInstallCallback: function() {
                    if (_0x2088C) {
                        var _0x20511 = _0x207C6(_0x20784);
                        if (_0x20511 && _0x20ABD) {
                            _0x20511.parentNode.replaceChild(_0x20ABD, _0x20511);
                            if (_0x20ADE) {
                                _0x209F7(_0x20ADE, true);
                                if (_0x20B41.ie) {
                                    _0x20ABD.style.display = "block"
                                }
                            };
                            if (_0x20A7B) {
                                _0x20A7B(_0x20A9C)
                            }
                        };
                        _0x2088C = false
                    }
                },
                version: "2.3"
            }
        }))
    }
    
    function _0x207A5(_0x20595, _0x20574, _0x20532) {
        "use strict";
        var _0x20553 = _0x20595("./InLine");
        var _0x205B6 = _0x20595("./Wrapper");
    
        function _0x20511(_0x20532) {
            if (!(this instanceof _0x20511)) {
                return new _0x20511(_0x20532)
            };
            this.initialize(_0x20532)
        }
        _0x20511.prototype.initialize = function(_0x20511) {
            this.id = _0x20511.attr("id");
            this.sequence = _0x20511.attr("sequence");
            if (_0x20511.inLine) {
                this.inLine = new _0x20553(_0x20511.inLine)
            };
            if (_0x20511.wrapper) {
                this.wrapper = new _0x205B6(_0x20511.wrapper)
            }
        };
        _0x20574.exports = _0x20511
    }
    
    function _0x207C6(_0x20595, _0x20574, _0x20532) {
        "use strict";
        var _0x205B6 = _0x20595("./TrackingEvent");
        var _0x205D7 = _0x20595("../../utils/utilityFunctions");
        var _0x205F8 = _0x20595("../../utils/xml");
        var _0x20553 = _0x20595("../../utils/consoleLogger");
    
        function _0x20511(_0x20532) {
            if (!(this instanceof _0x20511)) {
                return new _0x20511(_0x20532)
            };
            _0x20553.info("<Companion> found companion ad");
            _0x20553.debug("<Companion>  companionJTree:", _0x20532);
            this.creativeType = _0x205F8.attr(_0x20532.staticResource, "creativeType");
            this.staticResource = _0x205F8.keyValue(_0x20532.staticResource);
            _0x20553.info("<Companion>  creativeType: " + this.creativeType);
            _0x20553.info("<Companion>  staticResource: " + this.staticResource);
            var _0x20574 = null;
            if (_0x205F8.keyValue(_0x20532.HTMLResource)) {
                _0x20574 = _0x205F8.keyValue(_0x20532.HTMLResource)
            } else {
                if (_0x205F8.keyValue(_0x20532.hTMLResource)) {
                    _0x20574 = _0x205F8.keyValue(_0x20532.hTMLResource)
                }
            };
            if (_0x20574 !== null) {
                _0x20553.info("<Companion> found html resource", _0x20574)
            };
            this.htmlResource = _0x20574;
            var _0x20595 = null;
            if (_0x205F8.keyValue(_0x20532.IFrameResource)) {
                _0x20595 = _0x205F8.keyValue(_0x20532.IFrameResource)
            } else {
                if (_0x205F8.keyValue(_0x20532.iFrameresource)) {
                    _0x20595 = _0x205F8.keyValue(_0x20532.iFrameresource)
                }
            };
            if (_0x20595 !== null) {
                _0x20553.info("<Companion> found iframe resource", _0x20595)
            };
            this.iframeResource = _0x20595;
            this.id = _0x205F8.attr(_0x20532, "id");
            this.width = _0x205F8.attr(_0x20532, "width");
            this.height = _0x205F8.attr(_0x20532, "height");
            this.expandedWidth = _0x205F8.attr(_0x20532, "expandedWidth");
            this.expandedHeight = _0x205F8.attr(_0x20532, "expandedHeight");
            this.scalable = _0x205F8.attr(_0x20532, "scalable");
            this.maintainAspectRatio = _0x205F8.attr(_0x20532, "maintainAspectRatio");
            this.minSuggestedDuration = _0x205F8.attr(_0x20532, "minSuggestedDuration");
            this.apiFramework = _0x205F8.attr(_0x20532, "apiFramework");
            this.companionClickThrough = _0x205F8.keyValue(_0x20532.companionClickThrough);
            this.trackingEvents = _0x20619(_0x20532.trackingEvents && _0x20532.trackingEvents.tracking);
            _0x20553.info("<Companion>  companionClickThrough: " + this.companionClickThrough);
    
            function _0x20619(_0x20511) {
                var _0x20532 = [];
                if (_0x205D7.isDefined(_0x20511)) {
                    _0x20511 = _0x205D7.isArray(_0x20511) ? _0x20511 : [_0x20511];
                    _0x20511.forEach(function(_0x20511) {
                        _0x20532.push(new _0x205B6(_0x20511))
                    })
                };
                return _0x20532
            }
        }
        _0x20574.exports = _0x20511
    }
    
    function _0x207E7(_0x205D7, _0x20595, _0x20553) {
        "use strict";
        var _0x20574 = _0x205D7("./Linear");
        var _0x20511 = _0x205D7("./Companion");
        var _0x205F8 = _0x205D7("../../utils/utilityFunctions");
    
        function _0x20532(_0x205B6) {
            if (!(this instanceof _0x20532)) {
                return new _0x20532(_0x205B6)
            };
            this.id = _0x205B6.attr("id");
            this.sequence = _0x205B6.attr("sequence");
            this.adId = _0x205B6.attr("adId");
            this.apiFramework = _0x205B6.attr("apiFramework");
            if (_0x205B6.linear) {
                this.linear = new _0x20574(_0x205B6.linear)
            };
            if (_0x205B6.companionAds) {
                var _0x20595 = [];
                var _0x20553 = _0x205B6.companionAds && _0x205B6.companionAds.companion;
                if (_0x205F8.isDefined(_0x20553)) {
                    _0x20553 = _0x205F8.isArray(_0x20553) ? _0x20553 : [_0x20553];
                    _0x20553.forEach(function(_0x20532) {
                        _0x20595.push(new _0x20511(_0x20532))
                    })
                };
                this.companionAds = _0x20595
            }
        }
        _0x20532.prototype.isSupported = function() {
            if (this.linear) {
                return this.linear.isSupported()
            };
            return true
        };
        _0x20532.parseCreatives = function _0x205B6(_0x20574) {
            var _0x20511 = [];
            var _0x20553;
            if (_0x205F8.isDefined(_0x20574) && _0x205F8.isDefined(_0x20574.creative)) {
                _0x20553 = _0x205F8.isArray(_0x20574.creative) ? _0x20574.creative : [_0x20574.creative];
                _0x20553.forEach(function(_0x20553) {
                    _0x20511.push(new _0x20532(_0x20553))
                })
            };
            return _0x20511
        };
        _0x20595.exports = _0x20532
    }
    
    function _0x20808(_0x20595, _0x20574, _0x20532) {
        "use strict";
        var _0x205D7 = _0x20595("./vastUtil");
        var _0x20511 = _0x20595("./Creative");
        var _0x205B6 = _0x20595("../../utils/utilityFunctions");
        var _0x205F8 = _0x20595("../../utils/xml");
    
        function _0x20553(_0x20532) {
            if (!(this instanceof _0x20553)) {
                return new _0x20553(_0x20532)
            };
            this.adTitle = _0x205F8.keyValue(_0x20532.adTitle);
            this.adSystem = _0x205F8.keyValue(_0x20532.adSystem);
            this.impressions = _0x205D7.parseImpressions(_0x20532.impression);
            this.creatives = _0x20511.parseCreatives(_0x20532.creatives);
            this.description = _0x205F8.keyValue(_0x20532.description);
            this.advertiser = _0x205F8.keyValue(_0x20532.advertiser);
            this.surveys = _0x20574(_0x20532.survey);
            this.error = _0x205F8.keyValue(_0x20532.error);
            this.pricing = _0x205F8.keyValue(_0x20532.pricing);
            this.extensions = _0x20532.extensions;
    
            function _0x20574(_0x20511) {
                if (_0x20511) {
                    return _0x205B6.transformArray(_0x205B6.isArray(_0x20511) ? _0x20511 : [_0x20511], function(_0x20511) {
                        if (_0x205B6.isNotEmptyString(_0x20511.keyValue)) {
                            return {
                                uri: _0x20511.keyValue,
                                type: _0x20511.attr("type")
                            }
                        };
                        return undefined
                    })
                };
                return []
            }
        }
        _0x20553.prototype.isSupported = function() {
            var _0x20511, _0x20532;
            if (this.creatives.length === 0) {
                return false
            };
            for (_0x20511 = 0, _0x20532 = this.creatives.length; _0x20511 < _0x20532; _0x20511 += 1) {
                if (!this.creatives[_0x20511].isSupported()) {
                    return false
                }
            };
            return true
        };
        _0x20574.exports = _0x20553
    }
    
    function _0x20829(_0x205B6, _0x20574, _0x20511) {
        "use strict";
        var _0x205D7 = _0x205B6("./TrackingEvent");
        var _0x20553 = _0x205B6("./MediaFile");
        var _0x20619 = _0x205B6("./VideoClicks");
        var _0x205F8 = _0x205B6("../../utils/utilityFunctions");
        var _0x20595 = _0x205B6("./parsers");
        var _0x2063A = _0x205B6("../../utils/xml");
    
        function _0x20532(_0x20511) {
            if (!(this instanceof _0x20532)) {
                return new _0x20532(_0x20511)
            };
            this.duration = _0x20595.duration(_0x2063A.keyValue(_0x20511.duration));
            this.mediaFiles = _0x20574(_0x20511.mediaFiles && _0x20511.mediaFiles.mediaFile);
            this.trackingEvents = _0x205B6(_0x20511.trackingEvents && _0x20511.trackingEvents.tracking, this.duration);
            this.skipoffset = _0x20595.offset(_0x2063A.attr(_0x20511, "skipoffset"), this.duration);
            if (_0x20511.videoClicks) {
                this.videoClicks = new _0x20619(_0x20511.videoClicks)
            };
            if (_0x20511.adParameters) {
                this.adParameters = _0x2063A.keyValue(_0x20511.adParameters);
                if (_0x2063A.attr(_0x20511.adParameters, "xmlEncoded")) {
                    this.adParameters = _0x2063A.decode(this.adParameters)
                }
            };
    
            function _0x205B6(_0x20532, _0x20511) {
                var _0x20553 = [];
                if (_0x205F8.isDefined(_0x20532)) {
                    _0x20532 = _0x205F8.isArray(_0x20532) ? _0x20532 : [_0x20532];
                    _0x20532.forEach(function(_0x20532) {
                        _0x20553.push(new _0x205D7(_0x20532, _0x20511))
                    })
                };
                return _0x20553
            }
    
            function _0x20574(_0x20532) {
                var _0x20511 = [];
                if (_0x205F8.isDefined(_0x20532)) {
                    _0x20532 = _0x205F8.isArray(_0x20532) ? _0x20532 : [_0x20532];
                    _0x20532.forEach(function(_0x20532) {
                        _0x20511.push(new _0x20553(_0x20532))
                    })
                };
                return _0x20511
            }
        }
        _0x20532.prototype.isSupported = function() {
            var _0x20511, _0x20532;
            for (_0x20511 = 0, _0x20532 = this.mediaFiles.length; _0x20511 < _0x20532; _0x20511 += 1) {
                if (this.mediaFiles[_0x20511].isSupported()) {
                    return true
                }
            };
            return false
        };
        _0x20574.exports = _0x20532
    }
    
    function _0x2084A(_0x20595, _0x20574, _0x20532) {
        "use strict";
        var _0x205D7 = _0x20595("../../utils/xml");
        var _0x205B6 = _0x20595("./vastUtil");
        var _0x20511 = ["delivery", "type", "width", "height", "codec", "id", "bitrate", "minBitrate", "maxBitrate", "scalable", "maintainAspectRatio", "apiFramework"];
    
        function _0x20553(_0x20574) {
            if (!(this instanceof _0x20553)) {
                return new _0x20553(_0x20574)
            };
            this.src = _0x205D7.keyValue(_0x20574);
            for (var _0x20595 = 0; _0x20595 < _0x20511.length; _0x20595++) {
                var _0x20532 = _0x20511[_0x20595];
                this[_0x20532] = _0x20574.attr(_0x20532)
            }
        }
        _0x20553.prototype.isSupported = function() {
            if (_0x205B6.isVPAID(this)) {
                return !!_0x205B6.findSupportedVPAIDTech(this.type)
            };
            if (this.type === "video/x-flv") {
                return _0x205B6.isFlashSupported()
            };
            return true
        };
        _0x20574.exports = _0x20553
    }
    
    function _0x2086B(_0x20574, _0x20532, _0x20511) {
        "use strict";
        var _0x20553 = _0x20574("./parsers");
        var _0x205B6 = _0x20574("../../utils/xml");
    
        function _0x20595(_0x20532, _0x20511) {
            if (!(this instanceof _0x20595)) {
                return new _0x20595(_0x20532, _0x20511)
            };
            this.name = _0x20532.attr("event");
            this.uri = _0x205B6.keyValue(_0x20532);
            if ("progress" === this.name) {
                this.offset = _0x20553.offset(_0x20532.attr("offset"), _0x20511)
            }
        }
        _0x20532.exports = _0x20595
    }
    
    function _0x2088C(_0x2063A, _0x205F8, _0x20574) {
        "use strict";
        var _0x20511 = _0x2063A("./Ad");
        var _0x2069D = _0x2063A("./VASTError");
        var _0x206BE = _0x2063A("./VASTResponse");
        var _0x206DF = _0x2063A("./vastUtil");
        var _0x20532 = _0x2063A("../../utils/async");
        var _0x205B6 = _0x2063A("../../utils/http").http;
        var _0x2065B = _0x2063A("../../utils/utilityFunctions");
        var _0x20700 = _0x2063A("../../utils/xml");
        var _0x205D7 = _0x2063A("../../utils/consoleLogger");
    
        function _0x2067C(_0x20532) {
            if (!(this instanceof _0x2067C)) {
                return new _0x2067C(_0x20532)
            };
            var _0x20511 = {
                WRAPPER_LIMIT: 5
            };
            _0x20532 = _0x20532 || {};
            this.settings = _0x2065B.extend({}, _0x20532, _0x20511);
            this.errorURLMacros = []
        }
        _0x2067C.prototype.getVASTResponse = function _0x20595(_0x20511, _0x20574) {
            var _0x205D7 = this;
            var _0x20595 = _0x205B6(_0x20511, _0x20574);
            if (_0x20595) {
                if (_0x2065B.isFunction(_0x20574)) {
                    return _0x20574(_0x20595)
                };
                throw _0x20595
            };
            _0x20532.waterfall([this._getVASTAd.bind(this, _0x20511), _0x20553], _0x20574);
    
            function _0x20553(_0x20511, _0x20532) {
                try {
                    var _0x20553 = _0x205D7._buildVASTResponse(_0x20511);
                    _0x20532(null, _0x20553)
                } catch (e) {
                    _0x20532(e)
                }
            }
    
            function _0x205B6(_0x20511, _0x20532) {
                if (!_0x20511) {
                    return new _0x2069D("on VASTClient.getVASTResponse, missing ad tag URL")
                };
                if (!_0x2065B.isFunction(_0x20532)) {
                    return new _0x2069D("on VASTClient.getVASTResponse, missing callback function")
                }
            }
        };
        _0x2067C.prototype._getVASTAd = function(_0x20553, _0x205B6) {
            var _0x2067C = this;
            _0x20619(_0x20553, function(_0x20511, _0x20532) {
                var _0x20553 = _0x20532 && _0x2065B.isArray(_0x20532.ads) ? _0x20532.ads : null;
                if (_0x20511) {
                    _0x2067C._trackError(_0x20511, _0x20553);
                    return _0x205B6(_0x20511, _0x20553)
                };
                _0x205F8(_0x20553.shift(), [], _0x20574);
    
                function _0x20574(_0x20532, _0x20511) {
                    if (_0x20532) {
                        _0x2067C._trackError(_0x20532, _0x20511);
                        if (_0x20553.length > 0) {
                            _0x205F8(_0x20553.shift(), [], _0x20574)
                        } else {
                            _0x205B6(_0x20532, _0x20511)
                        }
                    } else {
                        _0x205B6(null, _0x20511)
                    }
                }
            });
    
            function _0x20619(_0x20511, _0x20553) {
                var _0x20574 = _0x2067C._requestVASTXml.bind(_0x2067C, _0x20511);
                _0x20532.waterfall([_0x20574, _0x20595], _0x20553)
            }
    
            function _0x20595(_0x20553, _0x20511) {
                var _0x20532;
                try {
                    _0x20532 = _0x20700.toJXONTree(_0x20553);
                    _0x205D7.debug("built JXONTree from VAST response:", _0x20532);
                    if (_0x2065B.isArray(_0x20532.ad)) {
                        _0x20532.ads = _0x20532.ad
                    } else {
                        if (_0x20532.ad) {
                            _0x20532.ads = [_0x20532.ad]
                        } else {
                            _0x20532.ads = []
                        }
                    };
                    _0x20511(_0x206DF(_0x20532), _0x20532)
                } catch (e) {
                    _0x20511(new _0x2069D("on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml", 100), null)
                }
            }
    
            function _0x206DF(_0x20511) {
                var _0x20532 = _0x20700.attr(_0x20511, "version");
                if (!_0x20511.ad) {
                    return new _0x2069D("on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree", 303)
                };
                if (_0x20532 && (_0x20532 != 3 && _0x20532 != 2)) {
                    return new _0x2069D("on VASTClient.getVASTAd.validateVASTTree, not supported VAST version \"" + _0x20532 + "\"", 102)
                };
                return null
            }
    
            function _0x205F8(_0x20553, _0x20511, _0x20595) {
                if (_0x20511.length >= _0x2067C.WRAPPER_LIMIT) {
                    return _0x20595(new _0x2069D("on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is " + _0x2067C.WRAPPER_LIMIT + ")", 302), _0x20511)
                };
                _0x20532.waterfall([function(_0x20511) {
                    if (_0x2065B.isString(_0x20553)) {
                        _0x2063A(_0x20553, _0x20511)
                    } else {
                        _0x20511(null, _0x20553)
                    }
                }, _0x20574], function(_0x20553, _0x20532) {
                    if (_0x20532) {
                        _0x20511.push(_0x20532)
                    };
                    if (_0x20553) {
                        return _0x20595(_0x20553, _0x20511)
                    };
                    if (_0x20532.wrapper) {
                        return _0x205F8(_0x20532.wrapper.VASTAdTagURI, _0x20511, _0x20595)
                    };
                    return _0x20595(null, _0x20511)
                })
            }
    
            function _0x20574(_0x20553, _0x20574) {
                try {
                    var _0x20532 = new _0x20511(_0x20553);
                    _0x20574(_0x206BE(_0x20532), _0x20532)
                } catch (e) {
                    _0x20574(new _0x2069D("on VASTClient.getVASTAd.buildAd, error parsing xml", 100), null)
                }
            }
    
            function _0x206BE(_0x20511) {
                var _0x20574 = _0x20511.wrapper;
                var _0x20553 = _0x20511.inLine;
                var _0x20532 = "on VASTClient.getVASTAd.validateAd, ";
                if (_0x20553 && _0x20574) {
                    return new _0x2069D(_0x20532 + "InLine and Wrapper both found on the same Ad", 101)
                };
                if (!_0x20553 && !_0x20574) {
                    return new _0x2069D(_0x20532 + "nor wrapper nor inline elements found on the Ad", 101)
                };
                if (_0x20553 && !_0x20553.isSupported()) {
                    return new _0x2069D(_0x20532 + "could not find MediaFile that is supported by this video player", 403)
                };
                if (_0x20574 && !_0x20574.VASTAdTagURI) {
                    return new _0x2069D(_0x20532 + "missing 'VASTAdTagURI' in wrapper", 101)
                };
                return null
            }
    
            function _0x2063A(_0x20511, _0x20532) {
                _0x2067C._requestVASTXml(_0x20511, function(_0x20511, _0x20574) {
                    if (_0x20511) {
                        return _0x20532(_0x20511)
                    };
                    try {
                        var _0x20553 = _0x20700.toJXONTree(_0x20574);
                        _0x20532(_0x206DF(_0x20553), _0x20553.ad)
                    } catch (e) {
                        _0x20532(new _0x2069D("on VASTClient.getVASTAd.requestVASTAd, error parsing xml", 100))
                    }
                })
            }
        };
        _0x2067C.prototype._requestVASTXml = function _0x20619(_0x20511, _0x20532) {
            try {
                if (_0x2065B.isFunction(_0x20511)) {
                    _0x20511(_0x20553)
                } else {
                    _0x205D7.info("requesting adTagUrl: " + _0x20511);
                    _0x205B6.get(_0x20511, _0x20553, {
                        withCredentials: true
                    })
                }
            } catch (e) {
                _0x20532(e)
            };
    
            function _0x20553(_0x20553, _0x20574, _0x20595) {
                if (_0x20553) {
                    var _0x20511 = _0x2065B.isDefined(_0x20595) ? "on VASTClient.requestVastXML, HTTP request error with status '" + _0x20595 + "'" : "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn";
                    return _0x20532(new _0x2069D(_0x20511, 301), null)
                };
                _0x20532(null, _0x20574)
            }
        };
        _0x2067C.prototype._buildVASTResponse = function _0x20553(_0x20532) {
            var _0x20553 = new _0x206BE();
            _0x20511(_0x20553, _0x20532);
            _0x20574(_0x20553);
            return _0x20553;
    
            function _0x20511(_0x20532, _0x20511) {
                _0x20511.forEach(function(_0x20511) {
                    _0x20532.addAd(_0x20511)
                })
            }
    
            function _0x20574(_0x20532) {
                var _0x20511 = _0x20532.trackingEvents.progress;
                if (!_0x20532.hasLinear()) {
                    throw new _0x2069D("on VASTClient._buildVASTResponse, Received an Ad type that is not supported", 200)
                };
                if (_0x20532.duration === undefined) {
                    throw new _0x2069D("on VASTClient._buildVASTResponse, Missing duration field in VAST response", 101)
                };
                if (_0x20511) {
                    _0x20511.forEach(function(_0x20511) {
                        if (!_0x2065B.isNumber(_0x20511.offset)) {
                            throw new _0x2069D("on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event", 101)
                        }
                    })
                }
            }
        };
        _0x2067C.prototype._trackError = function(_0x20553, _0x20511) {
            if (!_0x2065B.isArray(_0x20511) || _0x20511.length === 0) {
                return
            };
            var _0x20574 = [];
            _0x20511.forEach(_0x20532);
            _0x206DF["track"](_0x20574, {
                ERRORCODE: _0x20553.code || 900
            });
    
            function _0x20532(_0x20511) {
                if (_0x20511.wrapper && _0x20511.wrapper.error) {
                    _0x20574.push(_0x20511.wrapper.error)
                };
                if (_0x20511.inLine && _0x20511.inLine.error) {
                    _0x20574.push(_0x20511.inLine.error)
                }
            }
        };
        _0x205F8.exports = _0x2067C
    }
    
    function _0x208AD(_0x20553, _0x20532, _0x20511) {
        "use strict";
    
        function _0x20574(_0x20532, _0x20511) {
            this.message = "VAST Error: " + (_0x20532 || "");
            if (_0x20511) {
                this.code = _0x20511
            }
        }
        _0x20574.prototype = new Error();
        _0x20574.prototype.name = "VAST Error";
        _0x20532.exports = _0x20574
    }
    
    function _0x208CE(_0x2067C, _0x205F8, _0x205B6) {
        "use strict";
        var _0x20763 = _0x2067C("./VASTResponse");
        var _0x20721 = _0x2067C("./VASTError");
        var _0x20784 = _0x2067C("./VASTTracker");
        var _0x207A5 = _0x2067C("./vastUtil");
        var _0x20553 = _0x2067C("../../utils/async");
        var _0x20595 = _0x2067C("../../utils/dom");
        var _0x2063A = _0x2067C("../../utils/playerUtils");
        var _0x20700 = _0x2067C("../../utils/utilityFunctions");
        var _0x205D7 = _0x2067C("../../utils/consoleLogger");
    
        function _0x20742(_0x20511) {
            if (!(this instanceof _0x20742)) {
                return new _0x20742(_0x20511)
            };
            this.player = _0x20511
        }
        _0x20742.prototype.playAd = function _0x20619(_0x20574, _0x20511) {
            var _0x20532 = this;
            _0x20511 = _0x20511 || _0x20700.noop;
            if (!(_0x20574 instanceof _0x20763)) {
                return _0x20511(new _0x20721("On VASTIntegrator, missing required VASTResponse"))
            };
            _0x20553.waterfall([function(_BIGARRAY) {
                _BIGARRAY(null, _0x20574)
            }, this._selectAdSource.bind(this), this._createVASTTracker.bind(this), this._addClickThrough.bind(this), this._addSkipButton.bind(this), this._setupEvents.bind(this), this._playSelectedAd.bind(this)], function(_0x20553, _0x20574) {
                if (_0x20553 && _0x20574) {
                    _0x20532._trackError(_0x20553, _0x20574)
                };
                _0x20511(_0x20553, _0x20574)
            });
            this._adUnit = {
                _src: null,
                type: "VAST",
                pauseAd: function() {
                    _0x20532.player.pause(true)
                },
                resumeAd: function() {
                    _0x20532.player.play(true)
                },
                isPaused: function() {
                    return _0x20532.player.paused(true)
                },
                getSrc: function() {
                    return this._src
                }
            };
            return this._adUnit
        };
        _0x20742.prototype._selectAdSource = function _0x2069D(_0x20574, _0x20511) {
            var _0x205B6;
            var _0x20553 = _0x20595.getDimension(this.player.el()).width;
            _0x20574.mediaFiles.sort(function _0x20532(_0x20511, _0x20532) {
                var _0x20574 = Math.abs(_0x20553 - _0x20511.width);
                var _0x20595 = Math.abs(_0x20553 - _0x20532.width);
                return _0x20574 - _0x20595
            });
            _0x205B6 = this.player.selectSource(_0x20574.mediaFiles).source;
            if (_0x205B6) {
                _0x205D7.info("selected source: ", _0x205B6);
                if (this._adUnit) {
                    this._adUnit._src = _0x205B6
                };
                return _0x20511(null, _0x205B6, _0x20574)
            };
            _0x20511(new _0x20721("Could not find Ad mediafile supported by this player", 403), _0x20574)
        };
        _0x20742.prototype._createVASTTracker = function _0x20574(_0x20511, _0x20553, _0x20532) {
            try {
                _0x20532(null, _0x20511, new _0x20784(_0x20511.src, _0x20553), _0x20553)
            } catch (e) {
                _0x20532(e, _0x20553)
            }
        };
        _0x20742.prototype._setupEvents = function _0x206BE(_0x20511, _0x205B6, _0x20595, _0x20532) {
            var _0x20574;
            var _0x20553 = this.player;
            _0x20553.on("fullscreenchange", _0x205D7);
            _0x20553.on("vast.adStart", _0x205F8);
            _0x20553.on("pause", _0x20619);
            _0x20553.on("timeupdate", _0x2065B);
            _0x20553.on("volumechange", _0x2067C);
            _0x2063A.once(_0x20553, ["vast.adEnd", "vast.adsCancel"], _0x2069D);
            _0x2063A.once(_0x20553, ["vast.adEnd", "vast.adsCancel", "vast.adSkip"], function(_0x20511) {
                if (_0x20511.type === "vast.adEnd") {
                    _0x205B6.trackComplete()
                }
            });
            return _0x20532(null, _0x20511, _0x20595);
    
            function _0x2069D() {
                _0x20553.off("fullscreenchange", _0x205D7);
                _0x20553.off("vast.adStart", _0x205F8);
                _0x20553.off("pause", _0x20619);
                _0x20553.off("timeupdate", _0x2065B);
                _0x20553.off("volumechange", _0x2067C)
            }
    
            function _0x205D7() {
                if (_0x20553.isFullscreen()) {
                    _0x205B6.trackFullscreen()
                } else {
                    _0x205B6.trackExitFullscreen()
                }
            }
    
            function _0x20619() {
                if (Math.abs(_0x20553.duration() - _0x20553.currentTime()) < 2) {
                    return
                };
                _0x205B6.trackPause();
                _0x2063A.once(_0x20553, ["play", "vast.adEnd", "vast.adsCancel"], function(_0x20511) {
                    if (_0x20511.type === "play") {
                        _0x205B6.trackResume()
                    }
                })
            }
    
            function _0x2065B() {
                var _0x20511 = _0x20553.currentTime() * 1000;
                _0x205B6.trackProgress(_0x20511)
            }
    
            function _0x205F8() {
                _0x205B6.trackImpressions();
                _0x205B6.trackCreativeView()
            }
    
            function _0x2067C() {
                var _0x20511 = _0x20553.muted();
                if (_0x20511) {
                    _0x205B6.trackMute()
                } else {
                    if (_0x20574) {
                        _0x205B6.trackUnmute()
                    }
                };
                _0x20574 = _0x20511
            }
        };
        _0x20742.prototype._addSkipButton = function _0x20532(_0x205D7, _0x20619, _0x20574, _0x20532) {
            var _0x205B6;
            var _0x205F8 = this;
            if (_0x20700.isNumber(_0x20574.skipoffset)) {
                _0x205B6 = _0x20574.skipoffset / 1000;
                _0x20511(this.player, _0x205B6)
            };
            _0x20532(null, _0x205D7, _0x20619, _0x20574);
    
            function _0x20511(_0x20511, _0x205B6) {
                var _0x20574 = _0x20553(_0x20511);
                var _0x205D7 = _0x2065B.bind(_0x205F8, _0x20574, _0x205B6, _0x20511);
                _0x20511.el().appendChild(_0x20574);
                _0x20511.on("timeupdate", _0x205D7);
                _0x2063A.once(_0x20511, ["vast.adEnd", "vast.adsCancel"], _0x20532);
    
                function _0x20532() {
                    _0x20511.off("timeupdate", _0x205D7);
                    _0x20595.remove(_0x20574)
                }
            }
    
            function _0x20553(_0x20511) {
                var _0x20532 = window.document.createElement("div");
                _0x20595.addClass(_0x20532, "vast-skip-button");
                _0x20532.onclick = function(_0x20553) {
                    if (_0x20595.hasClass(_0x20532, "enabled")) {
                        _0x20619.trackSkip();
                        _0x20511.trigger("vast.adSkip")
                    };
                    if (window.Event.prototype.stopPropagation !== undefined) {
                        _0x20553.stopPropagation()
                    } else {
                        return false
                    }
                };
                return _0x20532
            }
    
            function _0x2065B(_0x20532, _0x20553, _0x20511) {
                var _0x20574 = Math.ceil(_0x20553 - _0x20511.currentTime());
                if (_0x20574 > 0) {
                    _0x20532.innerHTML = "Skip in " + _0x20700.toFixedDigits(_0x20574, 2) + "..."
                } else {
                    if (!_0x20595.hasClass(_0x20532, "enabled")) {
                        _0x20595.addClass(_0x20532, "enabled");
                        _0x20532.innerHTML = "Skip ad"
                    }
                }
            }
        };
        _0x20742.prototype._addClickThrough = function _0x20511(_0x205B6, _0x2065B, _0x20619, _0x20532) {
            var _0x205D7 = this.player;
            var _0x20511 = _0x20553(_0x205D7, _0x2065B, _0x20619);
            var _0x2067C = _0x2069D.bind(this, _0x20511, _0x20619, _0x205D7);
            _0x205D7.el().insertBefore(_0x20511, _0x205D7.controlBar.el());
            _0x205D7.on("timeupdate", _0x2067C);
            _0x2063A.once(_0x205D7, ["vast.adEnd", "vast.adsCancel"], _0x205F8);
            return _0x20532(null, _0x205B6, _0x2065B, _0x20619);
    
            function _0x20553(_0x20553, _0x205D7, _0x205B6) {
                var _0x20511 = window.document.createElement("a");
                var _0x20532 = _0x205B6.clickThrough;
                _0x20595.addClass(_0x20511, "vast-blocker");
                _0x20511.href = _0x20574(_0x20532, _0x20553);
                if (_0x20700.isString(_0x20532)) {
                    _0x20511.target = "_blank"
                };
                _0x20511.onclick = function(_0x20511) {
                    if (_0x20553.paused()) {
                        _0x20553.play();
                        if (window.Event.prototype.stopPropagation !== undefined) {
                            _0x20511.stopPropagation()
                        };
                        return false
                    };
                    _0x20553.pause();
                    _0x205D7.trackClick()
                };
                return _0x20511
            }
    
            function _0x2069D(_0x20511, _0x20553, _0x20532) {
                _0x20511.href = _0x20574(_0x20553.clickThrough, _0x20532)
            }
    
            function _0x20574(_0x20511, _0x20532) {
                var _0x20553 = {
                    ASSETURI: _0x205B6.src,
                    CONTENTPLAYHEAD: _0x207A5.formatProgress(_0x20532.currentTime() * 1000)
                };
                return _0x20511 ? _0x207A5.parseURLMacro(_0x20511, _0x20553) : "#"
            }
    
            function _0x205F8() {
                _0x205D7.off("timeupdate", _0x2067C);
                _0x20595.remove(_0x20511)
            }
        };
        _0x20742.prototype._playSelectedAd = function _0x2065B(_0x20595, _0x20574, _0x20511) {
            var _0x20553 = this.player;
            _0x20553.preload("auto");
            _0x20553.src(_0x20595);
            _0x205D7.debug("<VASTIntegrator._playSelectedAd> waiting for durationchange to play the ad...");
            _0x2063A.once(_0x20553, ["durationchange", "error", "vast.adsCancel"], function(_0x20553) {
                if (_0x20553.type === "durationchange") {
                    _0x205D7.debug("<VASTIntegrator._playSelectedAd> got durationchange; calling playAd()");
                    _0x20532()
                } else {
                    if (_0x20553.type === "error") {
                        _0x20511(new _0x20721("on VASTIntegrator, Player is unable to play the Ad", 400), _0x20574)
                    }
                }
            });
    
            function _0x20532() {
                _0x2063A.once(_0x20553, ["playing", "vast.adsCancel"], function(_0x20532) {
                    if (_0x20532.type === "vast.adsCancel") {
                        return
                    };
                    _0x205D7.debug("<VASTIntegrator._playSelectedAd/playAd> got playing event; triggering vast.adStart...");
                    _0x20553.trigger("vast.adStart");
                    _0x20553.on("ended", _0x20595);
                    _0x20553.on("vast.adsCancel", _0x20595);
                    _0x20553.on("vast.adSkip", _0x20595);
    
                    function _0x20595(_0x20532) {
                        if (_0x20532.type === "ended" && (_0x20553.duration() - _0x20553.currentTime()) > 3) {
                            return
                        };
                        _0x20553.off("ended", _0x20595);
                        _0x20553.off("vast.adsCancel", _0x20595);
                        _0x20553.off("vast.adSkip", _0x20595);
                        if (_0x20532.type === "ended" || _0x20532.type === "vast.adSkip") {
                            _0x20511(null, _0x20574)
                        }
                    }
                });
                _0x205D7.debug("<VASTIntegrator._playSelectedAd/playAd> calling player.play()...");
                _0x20553.play()
            }
        };
        _0x20742.prototype._trackError = function _0x206DF(_0x20511, _0x20532) {
            _0x207A5["track"](_0x20532.errorURLMacros, {
                ERRORCODE: _0x20511.code || 900
            })
        };
        _0x205F8.exports = _0x20742
    }
    
    function _0x208EF(_0x205D7, _0x205B6, _0x20553) {
        "use strict";
        var _0x20511 = _0x205D7("./Ad");
        var _0x2063A = _0x205D7("./VideoClicks");
        var _0x20595 = _0x205D7("./Linear");
        var _0x20574 = _0x205D7("./InLine");
        var _0x2065B = _0x205D7("./Wrapper");
        var _0x205F8 = _0x205D7("../../utils/utilityFunctions");
        var _0x2067C = _0x205D7("../../utils/xml");
        window.InLine__A = _0x20574;
    
        function _0x20619() {
            if (!(this instanceof _0x20619)) {
                return new _0x20619()
            };
            this._linearAdded = false;
            this.ads = [];
            this.errorURLMacros = [];
            this.impressions = [];
            this.clickTrackings = [];
            this.customClicks = [];
            this.trackingEvents = {};
            this.mediaFiles = [];
            this.clickThrough = undefined;
            this.adTitle = "";
            this.duration = undefined;
            this.skipoffset = undefined
        }
        _0x20619.prototype.addAd = function(_0x20532) {
            var _0x20553, _0x20574;
            if (_0x20532 instanceof _0x20511) {
                _0x20553 = _0x20532.inLine;
                _0x20574 = _0x20532.wrapper;
                this.ads.push(_0x20532);
                if (_0x20553) {
                    this._addInLine(_0x20553)
                };
                if (_0x20574) {
                    this._addWrapper(_0x20574)
                }
            }
        };
        _0x20619.prototype._addErrorTrackUrl = function(_0x20511) {
            var _0x20532 = _0x20511 instanceof _0x2067C.JXONTree ? _0x2067C.keyValue(_0x20511) : _0x20511;
            if (_0x20532) {
                this.errorURLMacros.push(_0x20532)
            }
        };
        _0x20619.prototype._addImpressions = function(_0x20511) {
            _0x205F8.isArray(_0x20511) && _0x20532(this.impressions, _0x20511)
        };
        _0x20619.prototype._addClickThrough = function(_0x20511) {
            if (_0x205F8.isNotEmptyString(_0x20511)) {
                this.clickThrough = _0x20511
            }
        };
        _0x20619.prototype._addClickTrackings = function(_0x20511) {
            _0x205F8.isArray(_0x20511) && _0x20532(this.clickTrackings, _0x20511)
        };
        _0x20619.prototype._addCustomClicks = function(_0x20511) {
            _0x205F8.isArray(_0x20511) && _0x20532(this.customClicks, _0x20511)
        };
        _0x20619.prototype._addTrackingEvents = function(_0x20532) {
            var _0x20511 = this.trackingEvents;
            if (_0x20532) {
                _0x20532 = _0x205F8.isArray(_0x20532) ? _0x20532 : [_0x20532];
                _0x20532.forEach(function(_0x20532) {
                    if (!_0x20511[_0x20532.name]) {
                        _0x20511[_0x20532.name] = []
                    };
                    _0x20511[_0x20532.name].push(_0x20532)
                })
            }
        };
        _0x20619.prototype._addTitle = function(_0x20511) {
            if (_0x205F8.isNotEmptyString(_0x20511)) {
                this.adTitle = _0x20511
            }
        };
        _0x20619.prototype._addDuration = function(_0x20511) {
            if (_0x205F8.isNumber(_0x20511)) {
                this.duration = _0x20511
            }
        };
        _0x20619.prototype._addVideoClicks = function(_0x20511) {
            if (_0x20511 instanceof _0x2063A) {
                this._addClickThrough(_0x20511.clickThrough);
                this._addClickTrackings(_0x20511.clickTrackings);
                this._addCustomClicks(_0x20511.customClicks)
            }
        };
        _0x20619.prototype._addMediaFiles = function(_0x20511) {
            _0x205F8.isArray(_0x20511) && _0x20532(this.mediaFiles, _0x20511)
        };
        _0x20619.prototype._addSkipoffset = function(_0x20511) {
            if (_0x20511) {
                this.skipoffset = _0x20511
            }
        };
        _0x20619.prototype._addAdParameters = function(_0x20511) {
            if (_0x20511) {
                this.adParameters = _0x20511
            }
        };
        _0x20619.prototype._addLinear = function(_0x20511) {
            if (_0x20511 instanceof _0x20595) {
                this._addDuration(_0x20511.duration);
                this._addTrackingEvents(_0x20511.trackingEvents);
                this._addVideoClicks(_0x20511.videoClicks);
                this._addMediaFiles(_0x20511.mediaFiles);
                this._addSkipoffset(_0x20511.skipoffset);
                this._addAdParameters(_0x20511.adParameters);
                this._linearAdded = true
            }
        };
        _0x20619.prototype._addInLine = function(_0x20511) {
            var _0x20532 = this;
            if (_0x20511 instanceof _0x20574) {
                this._addTitle(_0x20511.adTitle);
                this._addErrorTrackUrl(_0x20511.error);
                this._addImpressions(_0x20511.impressions);
                _0x20511.creatives.forEach(function(_0x20511) {
                    if (_0x20511.linear) {
                        _0x20532._addLinear(_0x20511.linear)
                    }
                })
            }
        };
        _0x20619.prototype._addWrapper = function(_0x20532) {
            var _0x20511 = this;
            if (_0x20532 instanceof _0x2065B) {
                this._addErrorTrackUrl(_0x20532.error);
                this._addImpressions(_0x20532.impressions);
                _0x20532.creatives.forEach(function(_0x20532) {
                    var _0x20553 = _0x20532.linear;
                    if (_0x20553) {
                        _0x20511._addVideoClicks(_0x20553.videoClicks);
                        _0x20511.clickThrough = undefined;
                        _0x20511._addTrackingEvents(_0x20553.trackingEvents)
                    }
                })
            }
        };
        _0x20619.prototype.hasLinear = function() {
            return this._linearAdded
        };
    
        function _0x20532(_0x20511, _0x20532) {
            _0x20532.forEach(function(_0x20532) {
                _0x20511.push(_0x20532)
            })
        }
        _0x205B6.exports = _0x20619
    }
    
    function _0x20910(_0x20553, _0x20532, _0x20511) {
        "use strict";
        var _0x2067C = _0x20553("./VASTError");
        var _0x2069D = _0x20553("./VASTResponse");
        var _0x206DF = _0x20553("./vastUtil");
        var _0x2065B = _0x20553("../../utils/utilityFunctions");
    
        function _0x206BE(_0x20511, _0x20532) {
            if (!(this instanceof _0x206BE)) {
                return new _0x206BE(_0x20511, _0x20532)
            };
            this.sanityCheck(_0x20511, _0x20532);
            this.initialize(_0x20511, _0x20532)
        }
        _0x206BE.prototype.initialize = function(_0x20511, _0x20532) {
            this.response = _0x20532;
            this.assetURI = _0x20511;
            this.progress = 0;
            this.quartiles = {
                firstQuartile: {
                    tracked: false,
                    time: Math.round(25 * _0x20532.duration) / 100
                },
                midpoint: {
                    tracked: false,
                    time: Math.round(50 * _0x20532.duration) / 100
                },
                thirdQuartile: {
                    tracked: false,
                    time: Math.round(75 * _0x20532.duration) / 100
                }
            }
        };
        _0x206BE.prototype.sanityCheck = function(_0x20511, _0x20532) {
            if (!_0x2065B.isString(_0x20511) || _0x2065B.isEmptyString(_0x20511)) {
                throw new _0x2067C("on VASTTracker constructor, missing required the URI of the ad asset being played")
            };
            if (!(_0x20532 instanceof _0x2069D)) {
                throw new _0x2067C("on VASTTracker constructor, missing required VAST response")
            }
        };
        _0x206BE.prototype.trackURLs = function _0x2063A(_0x20511, _0x20532) {
            if (_0x2065B.isArray(_0x20511) && _0x20511.length > 0) {
                _0x20532 = _0x2065B.extend({
                    ASSETURI: this.assetURI,
                    CONTENTPLAYHEAD: _0x206DF.formatProgress(this.progress)
                }, _0x20532 || {});
                _0x206DF["track"](_0x20511, _0x20532)
            }
        };
        _0x206BE.prototype.trackEvent = function _0x205D7(_0x20511, _0x20553) {
            this.trackURLs(_0x20532(this.response.trackingEvents[_0x20511]));
            if (_0x20553) {
                this.response.trackingEvents[_0x20511] = undefined
            };
    
            function _0x20532(_0x20511) {
                var _0x20532;
                if (_0x20511) {
                    _0x20532 = [];
                    _0x20511.forEach(function(_0x20511) {
                        if (!_0x20511.uri) {
                            return
                        };
                        _0x20532.push(_0x20511.uri)
                    })
                };
                return _0x20532
            }
        };
        _0x206BE.prototype.trackProgress = function _0x20619(_0x205D7) {
            var _0x20619 = this;
            var _0x20595 = [];
            var _0x205F8 = true;
            var _0x20553 = false;
            var _0x2067C = this.response.trackingEvents;
            if (_0x2065B.isNumber(_0x205D7)) {
                _0x20532("start", _0x205F8, _0x205D7 > 0);
                _0x20532("rewind", _0x20553, _0x205B6(this.progress, _0x205D7));
                _0x20511(_0x205D7);
                _0x2069D(_0x205D7);
                _0x2063A();
                this.progress = _0x205D7
            };
    
            function _0x205B6(_0x20511, _0x20532) {
                var _0x20553 = 3000;
                return _0x20511 > _0x205D7 && Math.abs(_0x20532 - _0x20511) > _0x20553
            }
    
            function _0x20532(_0x20532, _0x20553, _0x20511) {
                if (_0x2067C[_0x20532] && _0x20511) {
                    _0x20595.push({
                        name: _0x20532,
                        trackOnce: !!_0x20553
                    })
                }
            }
    
            function _0x20511(_0x20595) {
                var _0x205B6 = _0x20619.quartiles;
                var _0x20511 = _0x20619.quartiles.firstQuartile;
                var _0x20553 = _0x20619.quartiles.midpoint;
                var _0x205D7 = _0x20619.quartiles.thirdQuartile;
                if (!_0x20511.tracked) {
                    _0x2063A("firstQuartile", _0x20595)
                } else {
                    if (!_0x20553.tracked) {
                        _0x2063A("midpoint", _0x20595)
                    } else {
                        if (!_0x205D7.tracked) {
                            _0x2063A("thirdQuartile", _0x20595)
                        }
                    }
                };
    
                function _0x2063A(_0x20595, _0x20511) {
                    var _0x20553 = _0x205B6[_0x20595];
                    if (_0x20574(_0x20553, _0x20511)) {
                        _0x20553.tracked = true;
                        _0x20532(_0x20595, _0x205F8, true)
                    }
                }
            }
    
            function _0x20574(_0x20532, _0x20511) {
                var _0x20553 = _0x20532.time;
                return _0x20511 >= _0x20553 && _0x20511 <= (_0x20553 + 5000)
            }
    
            function _0x2069D(_0x20532) {
                if (!_0x2065B.isArray(_0x2067C.progress)) {
                    return
                };
                var _0x20511 = [];
                _0x2067C.progress.forEach(function(_0x20553) {
                    if (_0x20553.offset <= _0x20532) {
                        _0x20619.trackURLs([_0x20553.uri])
                    } else {
                        _0x20511.push(_0x20553)
                    }
                });
                _0x2067C.progress = _0x20511
            }
    
            function _0x2063A() {
                _0x20595.forEach(function(_0x20511) {
                    _0x20619.trackEvent(_0x20511.name, _0x20511.trackOnce)
                })
            }
        };
        ["rewind", "fullscreen", "exitFullscreen", "pause", "resume", "mute", "unmute", "acceptInvitation", "acceptInvitationLinear", "collapse", "expand"].forEach(function(_0x20511) {
            _0x206BE.prototype["track" + _0x2065B.capitalize(_0x20511)] = function() {
                this.trackEvent(_0x20511)
            }
        });
        ["start", "skip", "close", "closeLinear"].forEach(function(_0x20511) {
            _0x206BE.prototype["track" + _0x2065B.capitalize(_0x20511)] = function() {
                this.trackEvent(_0x20511, true)
            }
        });
        ["firstQuartile", "midpoint", "thirdQuartile"].forEach(function(_0x20511) {
            _0x206BE.prototype["track" + _0x2065B.capitalize(_0x20511)] = function() {
                this.quartiles[_0x20511].tracked = true;
                this.trackEvent(_0x20511, true)
            }
        });
        _0x206BE.prototype.trackComplete = function() {
            if (this.quartiles.thirdQuartile.tracked) {
                this.trackEvent("complete", true)
            }
        };
        _0x206BE.prototype.trackErrorWithCode = function _0x205B6(_0x20511) {
            if (_0x2065B.isNumber(_0x20511)) {
                this.trackURLs(this.response.errorURLMacros, {
                    ERRORCODE: _0x20511
                })
            }
        };
        _0x206BE.prototype.trackImpressions = function _0x205F8() {
            this.trackURLs(this.response.impressions)
        };
        _0x206BE.prototype.trackCreativeView = function _0x20595() {
            this.trackEvent("creativeView")
        };
        _0x206BE.prototype.trackClick = function _0x20574() {
            this.trackURLs(this.response.clickTrackings)
        };
        _0x20532.exports = _0x206BE
    }
    
    function _0x20931(_0x20553, _0x20532, _0x20511) {
        "use strict";
        var _0x20574 = _0x20553("../../utils/utilityFunctions");
        var _0x205B6 = _0x20553("../../utils/xml");
    
        function _0x20595(_0x20532) {
            if (!(this instanceof _0x20595)) {
                return new _0x20595(_0x20532)
            };
            this.clickThrough = _0x205B6.keyValue(_0x20532.clickThrough);
            this.clickTrackings = _0x20511(_0x20532.clickTracking);
            this.customClicks = _0x20511(_0x20532.customClick);
    
            function _0x20511(_0x20532) {
                var _0x20511 = [];
                if (_0x20532) {
                    _0x20532 = _0x20574.isArray(_0x20532) ? _0x20532 : [_0x20532];
                    _0x20532.forEach(function(_0x20532) {
                        _0x20511.push(_0x205B6.keyValue(_0x20532))
                    })
                };
                return _0x20511
            }
        }
        _0x20532.exports = _0x20595
    }
    
    function _0x20952(_0x20574, _0x20553, _0x20532) {
        "use strict";
        var _0x205B6 = _0x20574("./vastUtil");
        var _0x20511 = _0x20574("./Creative");
        var _0x20595 = _0x20574("../../utils/utilityFunctions");
        var _0x205F8 = _0x20574("../../utils/xml");
    
        function _0x205D7(_0x20532) {
            if (!(this instanceof _0x205D7)) {
                return new _0x205D7(_0x20532)
            };
            this.adSystem = _0x205F8.keyValue(_0x20532.adSystem);
            this.impressions = _0x205B6.parseImpressions(_0x20532.impression);
            this.VASTAdTagURI = _0x205F8.keyValue(_0x20532.vASTAdTagURI);
            this.creatives = _0x20511.parseCreatives(_0x20532.creatives);
            this.error = _0x205F8.keyValue(_0x20532.error);
            this.extensions = _0x20532.extensions;
            this.followAdditionalWrappers = _0x20595.isDefined(_0x205F8.attr(_0x20532, "followAdditionalWrappers")) ? _0x205F8.attr(_0x20532, "followAdditionalWrappers") : true;
            this.allowMultipleAds = _0x205F8.attr(_0x20532, "allowMultipleAds");
            this.fallbackOnNoAd = _0x205F8.attr(_0x20532, "fallbackOnNoAd")
        }
        _0x20553.exports = _0x205D7
    }
    
    function _0x20973(_0x205D7, _0x20553, _0x20532) {
        "use strict";
        var _0x205F8 = _0x205D7("../../utils/utilityFunctions");
        var _0x20511 = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
        var _0x205B6 = {
            duration: function _0x20574(_0x20553) {
                var _0x20574, _0x20532;
                if (_0x205F8.isString(_0x20553)) {
                    _0x20574 = _0x20553.match(_0x20511);
                    if (_0x20574) {
                        _0x20532 = _0x20595(_0x20574[1]) + _0x205B6(_0x20574[2]) + _0x205D7(_0x20574[3]) + parseInt(_0x20574[5] || 0)
                    }
                };
                return isNaN(_0x20532) ? null : _0x20532;
    
                function _0x20595(_BIGARRAY) {
                    return parseInt(_BIGARRAY, 10) * 60 * 60 * 1000
                }
    
                function _0x205B6(_BIGARRAY) {
                    return parseInt(_BIGARRAY, 10) * 60 * 1000
                }
    
                function _0x205D7(_BIGARRAY) {
                    return parseInt(_BIGARRAY, 10) * 1000
                }
            },
            offset: function _0x20595(_0x20595, _0x20553) {
                if (_0x20574(_0x20595)) {
                    return _0x20532(_0x20595, _0x20553)
                };
                return _0x205B6.duration(_0x20595);
    
                function _0x20574(_0x20511) {
                    var _0x20532 = /^\d+(\.\d+)?%$/g;
                    return _0x20532.test(_0x20511)
                }
    
                function _0x20532(_0x20553, _0x20532) {
                    if (_0x20532) {
                        return _0x20511(_0x20532, parseFloat(_0x20553.replace("%", "")))
                    };
                    return null
                }
    
                function _0x20511(_0x20511, _BIGARRAY) {
                    return _0x20511 * _BIGARRAY / 100
                }
            }
        };
        _0x20553.exports = _0x205B6
    }
    
    function _0x20994(_0x2067C, _0x205B6, _0x20511) {
        "use strict";
        var _0x206DF = _0x2067C("../../utils/utilityFunctions");
        var _0x20763 = _0x2067C("../vpaid/VPAIDHTML5Tech");
        var _0x20742 = _0x2067C("../vpaid/VPAIDFlashTech");
        var _0x20721 = _0x2067C("VPAIDFLASHClient/js/VPAIDFLASHClient");
        var _0x20700 = {
            track: function _0x206BE(_0x20553, _0x20574) {
                var _0x20511 = _0x20700.parseURLMacros(_0x20553, _0x20574);
                var _0x20532 = [];
                _0x20511.forEach(function(_0x20553) {
                    var _0x20511 = new Image();
                    _0x20511.src = _0x20553;
                    _0x20532.push(_0x20511)
                });
                return _0x20532
            },
            parseURLMacros: function _0x2063A(_0x20532, _0x20553) {
                var _0x20511 = [];
                _0x20553 = _0x20553 || {};
                if (!(_0x20553.CACHEBUSTING)) {
                    _0x20553.CACHEBUSTING = Math.round(Math.random() * 1.0e+10)
                };
                _0x20532.forEach(function(_0x20532) {
                    _0x20511.push(_0x20700._parseURLMacro(_0x20532, _0x20553))
                });
                return _0x20511
            },
            parseURLMacro: function _0x20619(_0x20511, _0x20532) {
                _0x20532 = _0x20532 || {};
                if (!(_0x20532.CACHEBUSTING)) {
                    _0x20532.CACHEBUSTING = Math.round(Math.random() * 1.0e+10)
                };
                return _0x20700._parseURLMacro(_0x20511, _0x20532)
            },
            _parseURLMacro: function _0x20619(_0x20511, _0x20532) {
                _0x20532 = _0x20532 || {};
                _0x206DF.forEach(_0x20532, function(_0x20553, _0x20532) {
                    _0x20511 = _0x20511.replace(new RegExp("\\[" + _0x20532 + "\\]", "gm"), _0x20553)
                });
                return _0x20511
            },
            parseDuration: function _0x205D7(_0x20553) {
                var _0x20532 = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
                var _0x20574, _0x20511;
                if (_0x206DF.isString(_0x20553)) {
                    _0x20574 = _0x20553.match(_0x20532);
                    if (_0x20574) {
                        _0x20511 = _0x20595(_0x20574[1]) + _0x205B6(_0x20574[2]) + _0x205D7(_0x20574[3]) + parseInt(_0x20574[5] || 0)
                    }
                };
                return isNaN(_0x20511) ? null : _0x20511;
    
                function _0x20595(_BIGARRAY) {
                    return parseInt(_BIGARRAY, 10) * 60 * 60 * 1000
                }
    
                function _0x205B6(_BIGARRAY) {
                    return parseInt(_BIGARRAY, 10) * 60 * 1000
                }
    
                function _0x205D7(_BIGARRAY) {
                    return parseInt(_BIGARRAY, 10) * 1000
                }
            },
            parseImpressions: function _0x205F8(_0x20511) {
                if (_0x20511) {
                    _0x20511 = _0x206DF.isArray(_0x20511) ? _0x20511 : [_0x20511];
                    return _0x206DF.transformArray(_0x20511, function(_0x20511) {
                        if (_0x206DF.isNotEmptyString(_0x20511.keyValue)) {
                            return _0x20511.keyValue
                        };
                        return undefined
                    })
                };
                return []
            },
            formatProgress: function _0x20553(_0x20574) {
                var _0x20511, _0x20553, _0x20595, _0x20532;
                _0x20511 = _0x20574 / (60 * 60 * 1000);
                _0x20511 = Math.floor(_0x20511);
                _0x20553 = (_0x20574 / (60 * 1000)) % 60;
                _0x20553 = Math.floor(_0x20553);
                _0x20595 = (_0x20574 / 1000) % 60;
                _0x20595 = Math.floor(_0x20595);
                _0x20532 = _0x20574 % 1000;
                return _0x206DF.toFixedDigits(_0x20511, 2) + ":" + _0x206DF.toFixedDigits(_0x20553, 2) + ":" + _0x206DF.toFixedDigits(_0x20595, 2) + "." + _0x206DF.toFixedDigits(_0x20532, 3)
            },
            parseOffset: function _0x2065B(_0x20595, _0x20553) {
                if (_0x20574(_0x20595)) {
                    return _0x20532(_0x20595, _0x20553)
                };
                return _0x20700.parseDuration(_0x20595);
    
                function _0x20574(_0x20511) {
                    var _0x20532 = /^\d+(\.\d+)?%$/g;
                    return _0x20532.test(_0x20511)
                }
    
                function _0x20532(_0x20553, _0x20532) {
                    if (_0x20532) {
                        return _0x20511(_0x20532, parseFloat(_0x20553.replace("%", "")))
                    };
                    return null
                }
    
                function _0x20511(_0x20511, _BIGARRAY) {
                    return _0x20511 * _BIGARRAY / 100
                }
            },
            VPAID_techs: [_0x20742, _0x20763],
            isVPAID: function _0x20595(_0x20511) {
                return !!_0x20511 && _0x20511.apiFramework === "VPAID"
            },
            findSupportedVPAIDTech: function _0x20532(_0x20553) {
                var _0x20511, _0x20532, _0x20574;
                for (_0x20511 = 0, _0x20532 = this.VPAID_techs.length; _0x20511 < _0x20532; _0x20511 += 1) {
                    _0x20574 = this.VPAID_techs[_0x20511];
                    if (_0x20574.supports(_0x20553)) {
                        return _0x20574
                    }
                };
                return null
            },
            isFlashSupported: function _0x20574() {
                return _0x20721.isSupported()
            },
            runFlashSupportCheck: function _0x2069D(_0x20511) {
                _0x20721.runFlashTest({
                    data: _0x20511
                })
            }
        };
        _0x205B6.exports = _0x20700
    }
    
    function _0x209B5(_0x20574, _0x20553, _0x20532) {
        "use strict";
        var _0x205B6 = _0x20574("../vast/VASTError");
        var _0x20595 = _0x20574("../../utils/utilityFunctions");
    
        function _0x205D7(_0x20553, _0x20511) {
            if (!(this instanceof _0x205D7)) {
                return new _0x205D7(_0x20553, _0x20511)
            };
            _0x20532(_0x20553, _0x20511);
            this.options = _0x20595.extend({}, _0x20511);
            this._adUnit = _0x20553;
    
            function _0x20532(_0x20511, _0x20532) {
                if (!_0x20511 || !_0x205D7.checkVPAIDInterface(_0x20511)) {
                    throw new _0x205B6("on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface")
                };
                if (!_0x20595.isObject(_0x20532)) {
                    throw new _0x205B6("on VPAIDAdUnitWrapper, expected options hash  but got '" + _0x20532 + "'")
                };
                if (!("responseTimeout" in _0x20532) || !_0x20595.isNumber(_0x20532.responseTimeout)) {
                    throw new _0x205B6("on VPAIDAdUnitWrapper, expected responseTimeout in options")
                }
            }
        }
        _0x205D7.checkVPAIDInterface = function _0x20511(_0x205B6) {
            var _0x205D7 = ["handshakeVersion", "initAd", "startAd", "stopAd", "resizeAd", "pauseAd", "expandAd", "collapseAd"];
            for (var _0x20553 = 0, _0x20574 = _0x205D7.length; _0x20553 < _0x20574; _0x20553++) {
                if (!_0x205B6 || !_0x20595.isFunction(_0x205B6[_0x205D7[_0x20553]])) {
                    return false
                }
            };
            return _0x20511(_0x205B6) && _0x20532(_0x205B6);
    
            function _0x20511(_0x20511) {
                return _0x20595.isFunction(_0x20511.subscribe) || _0x20595.isFunction(_0x20511.addEventListener) || _0x20595.isFunction(_0x20511.on)
            }
    
            function _0x20532(_0x20511) {
                return _0x20595.isFunction(_0x20511.unsubscribe) || _0x20595.isFunction(_0x20511.removeEventListener) || _0x20595.isFunction(_0x20511.off)
            }
        };
        _0x205D7.prototype.adUnitAsyncCall = function() {
            var _0x20511 = _0x20595.arrayLikeObjToArray(arguments);
            var _0x20553 = _0x20511.shift();
            var _0x20532 = _0x20511.pop();
            var _0x205D7;
            _0x20574(_0x20553, _0x20532, this._adUnit);
            _0x20511.push(_0x205F8());
            this._adUnit[_0x20553].apply(this._adUnit, _0x20511);
            _0x205D7 = setTimeout(function() {
                _0x205D7 = null;
                _0x20532(new _0x205B6("on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" + _0x20553 + "'"));
                _0x20532 = _0x20595.noop
            }, this.options.responseTimeout);
    
            function _0x20574(_0x20553, _0x20532, _0x20511) {
                if (!_0x20595.isString(_0x20553) || !_0x20595.isFunction(_0x20511[_0x20553])) {
                    throw new _0x205B6("on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name")
                };
                if (!_0x20595.isFunction(_0x20532)) {
                    throw new _0x205B6("on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback")
                }
            }
    
            function _0x205F8() {
                return function() {
                    if (_0x205D7) {
                        clearTimeout(_0x205D7)
                    };
                    _0x20532.apply(this, arguments)
                }
            }
        };
        _0x205D7.prototype.on = function(_0x20532, _0x20553) {
            var _0x20511 = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;
            _0x20511.call(this._adUnit, _0x20532, _0x20553)
        };
        _0x205D7.prototype.off = function(_0x20511, _0x20532) {
            var _0x20553 = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;
            _0x20553.call(this._adUnit, _0x20511, _0x20532)
        };
        _0x205D7.prototype.waitForEvent = function(_0x20553, _0x20511, _0x20532) {
            var _0x205F8;
            _0x205D7(_0x20553, _0x20511);
            _0x20532 = _0x20532 || null;
            this.on(_0x20553, _0x20574);
            _0x205F8 = setTimeout(function() {
                _0x20511(new _0x205B6("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + _0x20553 + "'"));
                _0x205F8 = null;
                _0x20511 = _0x20595.noop
            }, this.options.responseTimeout);
    
            function _0x205D7(_0x20532, _0x20511) {
                if (!_0x20595.isString(_0x20532)) {
                    throw new _0x205B6("on VPAIDAdUnitWrapper.waitForEvent, missing evt name")
                };
                if (!_0x20595.isFunction(_0x20511)) {
                    throw new _0x205B6("on VPAIDAdUnitWrapper.waitForEvent, missing callback")
                }
            }
    
            function _0x20574() {
                var _0x20553 = _0x20595.arrayLikeObjToArray(arguments);
                if (_0x205F8) {
                    clearTimeout(_0x205F8);
                    _0x205F8 = null
                };
                _0x20553.unshift(null);
                _0x20511.apply(_0x20532, _0x20553)
            }
        };
        _0x205D7.prototype.handshakeVersion = function(_0x20532, _0x20511) {
            this.adUnitAsyncCall("handshakeVersion", _0x20532, _0x20511)
        };
        _0x205D7.prototype.initAd = function(_0x205B6, _0x20574, _0x20595, _0x20553, _0x20511, _0x20532) {
            this.waitForEvent("AdLoaded", _0x20532);
            this._adUnit.initAd(_0x205B6, _0x20574, _0x20595, _0x20553, _0x20511)
        };
        _0x205D7.prototype.resizeAd = function(_0x20574, _0x20532, _0x20553, _0x20511) {
            this.adUnitAsyncCall("resizeAd", _0x20574, _0x20532, _0x20553, _0x20511)
        };
        _0x205D7.prototype.startAd = function(_0x20511) {
            this.waitForEvent("AdStarted", _0x20511);
            this._adUnit.startAd()
        };
        _0x205D7.prototype.stopAd = function(_0x20511) {
            this.waitForEvent("AdStopped", _0x20511);
            this._adUnit.stopAd()
        };
        _0x205D7.prototype.pauseAd = function(_0x20511) {
            this.waitForEvent("AdPaused", _0x20511);
            this._adUnit.pauseAd()
        };
        _0x205D7.prototype.resumeAd = function(_0x20511) {
            this.waitForEvent("AdPlaying", _0x20511);
            this._adUnit.resumeAd()
        };
        _0x205D7.prototype.expandAd = function(_0x20511) {
            this.waitForEvent("AdExpandedChange", _0x20511);
            this._adUnit.expandAd()
        };
        _0x205D7.prototype.collapseAd = function(_0x20511) {
            this.waitForEvent("AdExpandedChange", _0x20511);
            this._adUnit.collapseAd()
        };
        _0x205D7.prototype.skipAd = function(_0x20511) {
            this.waitForEvent("AdSkipped", _0x20511);
            this._adUnit.skipAd()
        };
        ["adLinear", "adWidth", "adHeight", "adExpanded", "adSkippableState", "adRemainingTime", "adDuration", "adVolume", "adCompanions", "adIcons"].forEach(function(_0x20532) {
            var _0x20511 = "get" + _0x20595.capitalize(_0x20532);
            _0x205D7.prototype[_0x20511] = function(_0x20532) {
                this.adUnitAsyncCall(_0x20511, _0x20532)
            }
        });
        _0x205D7.prototype.setAdVolume = function(_0x20532, _0x20511) {
            this.adUnitAsyncCall("setAdVolume", _0x20532, _0x20511)
        };
        _0x20553.exports = _0x205D7
    }
    
    function _0x209D6(_0x205D7, _0x205B6, _0x20532) {
        "use strict";
        var _0x20595 = _0x205D7("../../utils/mimetypes");
        var _0x20619 = _0x205D7("../vast/VASTError");
        var _0x2063A = _0x205D7("VPAIDFLASHClient/js/VPAIDFLASHClient");
        var _0x205F8 = _0x205D7("../../utils/utilityFunctions");
        var _0x20511 = _0x205D7("../../utils/dom");
        var _0x20574 = _0x205D7("../../utils/consoleLogger");
    
        function _0x2065B(_0x20511, _0x20553) {
            if (!(this instanceof _0x2065B)) {
                return new _0x2065B(_0x20511)
            };
            _0x20532(_0x20511);
            this.name = "vpaid-flash";
            this.mediaFile = _0x20511;
            this.containerEl = null;
            this.vpaidFlashClient = null;
            this.settings = _0x20553;
    
            function _0x20532(_0x20511) {
                if (!_0x20511 || !_0x205F8.isString(_0x20511.src)) {
                    throw new _0x20619("on VPAIDFlashTech, invalid MediaFile")
                }
            }
        }
        _0x2065B.VPAIDFLASHClient = _0x2063A;
        _0x2065B.supports = function(_0x20511) {
            return (_0x20595["flash"].indexOf(_0x20511) > -1) && _0x2065B.VPAIDFLASHClient.isSupported()
        };
        _0x2065B.prototype.loadAdUnit = function _0x20553(_0x20553, _0x205B6, _0x20532) {
            var _0x2063A = this;
            var _0x20595 = this.settings && this.settings.vpaidFlashLoaderPath ? {
                data: this.settings.vpaidFlashLoaderPath
            } : undefined;
            _0x205D7(_0x20553, _0x20532);
            this.containerEl = _0x20553;
            _0x20574.debug("<VPAIDFlashTech.loadAdUnit> loading VPAIDFLASHClient with opts:", _0x20595);
            this.vpaidFlashClient = new _0x2065B.VPAIDFLASHClient(_0x20553, function(_0x20511) {
                if (_0x20511) {
                    return _0x20532(_0x20511)
                };
                _0x20574.info("<VPAIDFlashTech.loadAdUnit> calling VPAIDFLASHClient.loadAdUnit(); that.mediaFile:", _0x2063A.mediaFile);
                _0x2063A.vpaidFlashClient.loadAdUnit(_0x2063A.mediaFile.src, _0x20532)
            }, _0x20595);
    
            function _0x205D7(_0x20553, _0x20532) {
                if (!_0x20511.isDomElement(_0x20553)) {
                    throw new _0x20619("on VPAIDFlashTech.loadAdUnit, invalid dom container element")
                };
                if (!_0x205F8.isFunction(_0x20532)) {
                    throw new _0x20619("on VPAIDFlashTech.loadAdUnit, missing valid callback")
                }
            }
        };
        _0x2065B.prototype.unloadAdUnit = function() {
            if (this.vpaidFlashClient) {
                try {
                    this.vpaidFlashClient.destroy()
                } catch (e) {
                    _0x20574.error("VAST ERROR: trying to unload the VPAID adunit")
                };
                this.vpaidFlashClient = null
            };
            if (this.containerEl) {
                _0x20511.remove(this.containerEl);
                this.containerEl = null
            }
        };
        _0x205B6.exports = _0x2065B
    }
    
    function _0x209F7(_0x205F8, _0x205B6, _0x20532) {
        "use strict";
        var _0x20595 = _0x205F8("../../utils/mimetypes");
        var _0x2065B = _0x205F8("../vast/VASTError");
        var _0x2067C = _0x205F8("VPAIDHTML5Client/js/VPAIDHTML5Client");
        var _0x2063A = _0x205F8("../../utils/utilityFunctions");
        var _0x20511 = _0x205F8("../../utils/dom");
        var _0x20574 = _0x205F8("../../utils/consoleLogger");
    
        function _0x2069D(_0x20511) {
            if (!(this instanceof _0x2069D)) {
                return new _0x2069D(_0x20511)
            };
            _0x20532(_0x20511);
            this.name = "vpaid-html5";
            this.containerEl = null;
            this.videoEl = null;
            this.vpaidHTMLClient = null;
            this.mediaFile = _0x20511;
    
            function _0x20532(_0x20511) {
                if (!_0x20511 || !_0x2063A.isString(_0x20511.src)) {
                    throw new _0x2065B(_0x2069D.INVALID_MEDIA_FILE)
                }
            }
        }
        _0x2069D.VPAIDHTML5Client = _0x2067C;
        _0x2069D.supports = function(_0x20511) {
            return !_0x2063A.isOldIE() && _0x20595["html5"].indexOf(_0x20511) > -1
        };
        _0x2069D.prototype.loadAdUnit = function _0x20553(_0x20553, _0x20595, _0x20532) {
            _0x20574(_0x20553, _0x20595, _0x20532);
            this.containerEl = _0x20553;
            this.videoEl = _0x20595;
            this.vpaidHTMLClient = new _0x2069D.VPAIDHTML5Client(_0x20553, _0x20595, {});
            this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, _0x20532);
    
            function _0x20574(_0x20553, _0x20574, _0x20532) {
                if (!_0x20511.isDomElement(_0x20553)) {
                    throw new _0x2065B(_0x2069D.INVALID_DOM_CONTAINER_EL)
                };
                if (!_0x20511.isDomElement(_0x20574) || _0x20574.tagName.toLowerCase() !== "video") {
                    throw new _0x2065B(_0x2069D.INVALID_DOM_CONTAINER_EL)
                };
                if (!_0x2063A.isFunction(_0x20532)) {
                    throw new _0x2065B(_0x2069D.MISSING_CALLBACK)
                }
            }
        };
        _0x2069D.prototype.unloadAdUnit = function _0x20619() {
            if (this.vpaidHTMLClient) {
                try {
                    this.vpaidHTMLClient.destroy()
                } catch (e) {
                    _0x20574.error("VAST ERROR: trying to unload the VPAID adunit")
                };
                this.vpaidHTMLClient = null
            };
            if (this.containerEl) {
                _0x20511.remove(this.containerEl);
                this.containerEl = null
            }
        };
        var _0x205D7 = "on VPAIDHTML5Tech";
        _0x2069D.INVALID_MEDIA_FILE = _0x205D7 + ", invalid MediaFile";
        _0x2069D.INVALID_DOM_CONTAINER_EL = _0x205D7 + ", invalid container HtmlElement";
        _0x2069D.INVALID_DOM_VIDEO_EL = _0x205D7 + ", invalid HTMLVideoElement";
        _0x2069D.MISSING_CALLBACK = _0x205D7 + ", missing valid callback";
        _0x205B6.exports = _0x2069D
    }
    
    function _0x20A18(_0x2065B, _0x205F8, _0x20553) {
        "use strict";
        var _0x205D7 = _0x2065B("../../utils/mimetypes");
        var _0x206DF = _0x2065B("../vast/VASTError");
        var _0x20700 = _0x2065B("../vast/VASTResponse");
        var _0x20721 = _0x2065B("../vast/VASTTracker");
        var _0x20742 = _0x2065B("../vast/vastUtil");
        var _0x20763 = _0x2065B("./VPAIDAdUnitWrapper");
        var _0x20511 = _0x2065B("../../utils/async");
        var _0x20532 = _0x2065B("../../utils/dom");
        var _0x20619 = _0x2065B("../../utils/playerUtils");
        var _0x206BE = _0x2065B("../../utils/utilityFunctions");
        var _0x205B6 = _0x2065B("../../utils/consoleLogger");
    
        function _0x20784(_0x20553, _0x20574) {
            if (!(this instanceof _0x20784)) {
                return new _0x20784(_0x20553)
            };
            this.VIEW_MODE = {
                NORMAL: "normal",
                FULLSCREEN: "fullscreen",
                THUMBNAIL: "thumbnail"
            };
            this.player = _0x20553;
            this.containerEl = _0x20511(_0x20553);
            this.options = {
                responseTimeout: 5000,
                VPAID_VERSION: "2.0"
            };
            this.settings = _0x20574;
    
            function _0x20511() {
                var _0x20511 = document.createElement("div");
                _0x20532.addClass(_0x20511, "VPAID-container");
                _0x20553.el().insertBefore(_0x20511, _0x20553.controlBar.el());
                return _0x20511
            }
        }
        _0x20784.prototype.playAd = function _0x2063A(_0x2067C, _0x20574) {
            if (!(_0x2067C instanceof _0x20700)) {
                return _0x20574(new _0x206DF("on VASTIntegrator.playAd, missing required VASTResponse"))
            };
            var _0x2063A = this;
            var _0x205D7 = this.player;
            _0x205B6.debug("<VPAIDIntegrator.playAd> looking for supported tech...");
            var _0x20619 = this._findSupportedTech(_0x2067C, this.settings);
            _0x20574 = _0x20574 || _0x206BE.noop;
            this._adUnit = null;
            _0x20532.addClass(_0x205D7.el(), "vjs-vpaid-ad");
            _0x205D7.on("vast.adsCancel", _0x2065B);
            _0x205D7.one("vpaid.adEnd", function() {
                _0x205D7.off("vast.adsCancel", _0x2065B);
                _0x205F8()
            });
            if (_0x20619) {
                _0x205B6.info("<VPAIDIntegrator.playAd> found tech: ", _0x20619);
                _0x20511.waterfall([function(_BIGARRAY) {
                    _BIGARRAY(null, _0x20619, _0x2067C)
                }, this._loadAdUnit.bind(this), this._playAdUnit.bind(this), this._finishPlaying.bind(this)], _0x20553);
                this._adUnit = {
                    _paused: true,
                    type: "VPAID",
                    pauseAd: function() {
                        _0x205D7.trigger("vpaid.pauseAd");
                        _0x205D7.pause(true)
                    },
                    resumeAd: function() {
                        _0x205D7.trigger("vpaid.resumeAd")
                    },
                    isPaused: function() {
                        return this._paused
                    },
                    getSrc: function() {
                        return _0x20619.mediaFile
                    }
                }
            } else {
                _0x205B6.debug("<VPAIDIntegrator.playAd> could not find suitable tech");
                var _0x20595 = new _0x206DF("on VPAIDIntegrator.playAd, could not find a supported mediaFile", 403);
                _0x20553(_0x20595, this._adUnit, _0x2067C)
            };
            return this._adUnit;
    
            function _0x20553(_0x20532, _0x20511, _0x20553) {
                if (_0x20532 && _0x20553) {
                    _0x2063A._trackError(_0x20553, _0x20532.code)
                };
                _0x205D7.trigger("vpaid.adEnd");
                _0x20574(_0x20532, _0x20553)
            }
    
            function _0x2065B() {
                _0x205D7.trigger("vpaid.adEnd")
            }
    
            function _0x205F8() {
                if (_0x20619) {
                    _0x20619.unloadAdUnit()
                };
                _0x20532.removeClass(_0x205D7.el(), "vjs-vpaid-ad")
            }
        };
        _0x20784.prototype._findSupportedTech = function(_0x2063A, _0x205F8) {
            if (!(_0x2063A instanceof _0x20700)) {
                return null
            };
            var _0x2065B = _0x2063A.mediaFiles.filter(_0x20742.isVPAID);
            var _0x205B6 = _0x205F8 && _0x205F8.preferredTech;
            var _0x20619 = [];
            var _0x20532, _0x20574, _0x20595, _0x2067C, _0x20553;
            for (_0x20532 = 0, _0x20574 = _0x2065B.length; _0x20532 < _0x20574; _0x20532 += 1) {
                _0x20595 = _0x2065B[_0x20532];
                _0x2067C = _0x20742.findSupportedVPAIDTech(_0x20595.type);
                if (!_0x2067C) {
                    continue
                };
                _0x20553 = _0x205B6 ? (_0x20595.type === _0x205B6 || (_0x205D7[_0x205B6] && _0x205D7[_0x205B6].indexOf(_0x20595.type) > -1)) : false;
                if (_0x20553) {
                    return new _0x2067C(_0x20595, _0x205F8)
                };
                _0x20619.push({
                    mediaFile: _0x20595,
                    tech: _0x2067C
                })
            };
            if (_0x20619.length) {
                var _0x20511 = _0x20619[0];
                return new _0x20511.tech(_0x20511.mediaFile, _0x205F8)
            };
            return null
        };
        _0x20784.prototype._createVPAIDAdUnitWrapper = function(_BIGARRAY, _0x20532, _0x20511) {
            return new _0x20763(_BIGARRAY, {
                src: _0x20532,
                responseTimeout: _0x20511
            })
        };
        _0x20784.prototype._loadAdUnit = function(_0x20595, _0x205D7, _0x20511) {
            var _0x205B6 = this;
            var _0x20553 = this.player;
            var _0x205F8 = _0x20553.el().querySelector(".vjs-tech");
            var _0x20574 = this.settings.responseTimeout || this.options.responseTimeout;
            _0x20595.loadAdUnit(this.containerEl, _0x205F8, function(_0x20619, _0x205F8) {
                if (_0x20619) {
                    return _0x20511(_0x20619, _0x205F8, _0x205D7)
                };
                try {
                    var _0x2065B = _0x205B6._createVPAIDAdUnitWrapper(_0x205F8, _0x20595.mediaFile.src, _0x20574);
                    var _0x2063A = "vjs-" + _0x20595.name + "-ad";
                    _0x20532.addClass(_0x20553.el(), _0x2063A);
                    _0x20553.one("vpaid.adEnd", function() {
                        _0x20532.removeClass(_0x20553.el(), _0x2063A)
                    });
                    _0x20511(null, _0x2065B, _0x205D7)
                } catch (e) {
                    _0x20511(e, _0x205F8, _0x205D7)
                }
            })
        };
        _0x20784.prototype._playAdUnit = function(_0x20532, _0x20574, _0x20553) {
            _0x20511.waterfall([function(_BIGARRAY) {
                _BIGARRAY(null, _0x20532, _0x20574)
            }, this._handshake.bind(this), this._initAd.bind(this), this._setupEvents.bind(this), this._addSkipButton.bind(this), this._linkPlayerControls.bind(this), this._startAd.bind(this)], _0x20553)
        };
        _0x20784.prototype._handshake = function _0x20574(_0x20511, _0x20595, _0x20574) {
            _0x20511.handshakeVersion(this.options.VPAID_VERSION, function(_0x20553, _0x205B6) {
                if (_0x20553) {
                    return _0x20574(_0x20553, _0x20511, _0x20595)
                };
                if (_0x205B6 && _0x20532(_0x205B6)) {
                    return _0x20574(null, _0x20511, _0x20595)
                };
                return _0x20574(new _0x206DF("on VPAIDIntegrator._handshake, unsupported version \"" + _0x205B6 + "\""), _0x20511, _0x20595)
            });
    
            function _0x20532(_0x20511) {
                var _BIGARRAY = _0x20553(_0x20511);
                return _BIGARRAY >= 1 && _BIGARRAY <= 2
            }
    
            function _0x20553(_0x20532) {
                var _0x20511 = _0x20532.split(".");
                return parseInt(_0x20511[0], 10)
            }
        };
        _0x20784.prototype._initAd = function(_0x20511, _0x205B6, _0x20574) {
            var _0x20595 = this.player.el().querySelector(".vjs-tech");
            var _0x20553 = _0x20532.getDimension(_0x20595);
            _0x20511.initAd(_0x20553.width, _0x20553.height, this.VIEW_MODE.NORMAL, -1, {
                AdParameters: _0x205B6.adParameters || ""
            }, function(_BIGARRAY) {
                _0x20574(_BIGARRAY, _0x20511, _0x205B6)
            })
        };
        _0x20784.prototype._createVASTTracker = function(_BIGARRAY, _0x20511) {
            return new _0x20721(_BIGARRAY, _0x20511)
        };
        _0x20784.prototype._setupEvents = function(_0x20511, _0x20721, _0x20595) {
            var _0x20553 = _0x20511.options.src;
            var _0x2069D = this._createVASTTracker(_0x20553, _0x20721);
            var _0x20619 = this.player;
            var _0x2065B = this;
            _0x20511.on("AdSkipped", function() {
                _0x20619.trigger("vpaid.AdSkipped");
                _0x2069D.trackSkip()
            });
            _0x20511.on("AdImpression", function() {
                _0x20619.trigger("vpaid.AdImpression");
                _0x2069D.trackImpressions()
            });
            _0x20511.on("AdStarted", function() {
                _0x20619.trigger("vpaid.AdStarted");
                _0x2069D.trackCreativeView();
                _0x205D7()
            });
            _0x20511.on("AdVideoStart", function() {
                _0x20619.trigger("vpaid.AdVideoStart");
                _0x2069D.trackStart();
                _0x205D7()
            });
            _0x20511.on("AdPlaying", function() {
                _0x20619.trigger("vpaid.AdPlaying");
                _0x2069D.trackResume();
                _0x205D7()
            });
            _0x20511.on("AdPaused", function() {
                _0x20619.trigger("vpaid.AdPaused");
                _0x2069D.trackPause();
                _0x205B6()
            });
    
            function _0x205D7() {
                if (_0x2065B._adUnit && _0x2065B._adUnit.isPaused()) {
                    _0x2065B._adUnit._paused = false
                };
                _0x20619.trigger("play")
            }
    
            function _0x205B6() {
                if (_0x2065B._adUnit) {
                    _0x2065B._adUnit._paused = true
                };
                _0x20619.trigger("pause")
            }
            _0x20511.on("AdVideoFirstQuartile", function() {
                _0x20619.trigger("vpaid.AdVideoFirstQuartile");
                _0x2069D.trackFirstQuartile()
            });
            _0x20511.on("AdVideoMidpoint", function() {
                _0x20619.trigger("vpaid.AdVideoMidpoint");
                _0x2069D.trackMidpoint()
            });
            _0x20511.on("AdVideoThirdQuartile", function() {
                _0x20619.trigger("vpaid.AdVideoThirdQuartile");
                _0x2069D.trackThirdQuartile()
            });
            _0x20511.on("AdVideoComplete", function() {
                _0x20619.trigger("vpaid.AdVideoComplete");
                _0x2069D.trackComplete()
            });
            _0x20511.on("AdClickThru", function(_0x20553) {
                _0x20619.trigger("vpaid.AdClickThru");
                var _0x205B6 = _0x20553.url;
                var _0x20595 = _0x20553.playerHandles;
                var _0x20532 = _0x206BE.isNotEmptyString(_0x205B6) ? _0x205B6 : _0x20574(_0x20721.clickThrough);
                _0x2069D.trackClick();
                if (_0x20595 && _0x20532) {
                    window.open(_0x20532, "_blank")
                };
    
                function _0x20574(_0x20532) {
                    var _0x20553 = {
                        ASSETURI: _0x20511.options.src,
                        CONTENTPLAYHEAD: 0
                    };
                    return _0x20532 ? _0x20742.parseURLMacro(_0x20532, _0x20553) : null
                }
            });
            _0x20511.on("AdUserAcceptInvitation", function() {
                _0x20619.trigger("vpaid.AdUserAcceptInvitation");
                _0x2069D.trackAcceptInvitation();
                _0x2069D.trackAcceptInvitationLinear()
            });
            _0x20511.on("AdUserClose", function() {
                _0x20619.trigger("vpaid.AdUserClose");
                _0x2069D.trackClose();
                _0x2069D.trackCloseLinear()
            });
            _0x20511.on("AdUserMinimize", function() {
                _0x20619.trigger("vpaid.AdUserMinimize");
                _0x2069D.trackCollapse()
            });
            _0x20511.on("AdError", function() {
                _0x20619.trigger("vpaid.AdError");
                _0x2069D.trackErrorWithCode(901)
            });
            _0x20511.on("AdVolumeChange", function() {
                _0x20619.trigger("vpaid.AdVolumeChange");
                var _0x20532 = _0x20619.volume();
                _0x20511.getAdVolume(function(_0x20553, _0x20511) {
                    if (_0x20532 !== _0x20511) {
                        if (_0x20511 === 0 && _0x20532 > 0) {
                            _0x2069D.trackMute()
                        };
                        if (_0x20511 > 0 && _0x20532 === 0) {
                            _0x2069D.trackUnmute()
                        };
                        _0x20619.volume(_0x20511)
                    }
                })
            });
            var _0x206DF = _0x2067C.bind(this, _0x20619, _0x20511, this.VIEW_MODE);
            var _0x20700 = _0x206BE.throttle(_0x206DF, 100);
            var _0x20574 = this.settings.autoResize;
            if (_0x20574) {
                _0x20532.addEventListener(window, "resize", _0x20700);
                _0x20532.addEventListener(window, "orientationchange", _0x20700)
            };
            _0x20619.on("vast.resize", _0x206DF);
            _0x20619.on("vpaid.pauseAd", _0x205F8);
            _0x20619.on("vpaid.resumeAd", _0x2063A);
            _0x20619.one("vpaid.adEnd", function() {
                _0x20619.off("vast.resize", _0x206DF);
                _0x20619.off("vpaid.pauseAd", _0x205F8);
                _0x20619.off("vpaid.resumeAd", _0x2063A);
                if (_0x20574) {
                    _0x20532.removeEventListener(window, "resize", _0x20700);
                    _0x20532.removeEventListener(window, "orientationchange", _0x20700)
                }
            });
            _0x20595(null, _0x20511, _0x20721);
    
            function _0x205F8() {
                _0x20511.pauseAd(_0x206BE.noop)
            }
    
            function _0x2063A() {
                _0x20511.resumeAd(_0x206BE.noop)
            }
        };
        _0x20784.prototype._addSkipButton = function(_0x20553, _0x2065B, _0x20595) {
            var _0x205F8;
            var _0x205B6 = this.player;
            _0x20553.on("AdSkippableStateChange", _0x2063A);
            _0x20619.once(_0x205B6, ["vast.adEnd", "vast.adsCancel"], _0x205D7);
            _0x20595(null, _0x20553, _0x2065B);
    
            function _0x2063A() {
                _0x205B6.trigger("vpaid.AdSkippableStateChange");
                _0x20553.getAdSkippableState(function(_BIGARRAY, _0x20532) {
                    if (_0x20532) {
                        if (!_0x205F8) {
                            _0x20511(_0x205B6)
                        }
                    } else {
                        _0x205D7(_0x205B6)
                    }
                })
            }
    
            function _0x20511(_0x20511) {
                _0x205F8 = _0x20574(_0x20511);
                _0x20511.el().appendChild(_0x205F8)
            }
    
            function _0x205D7() {
                _0x20532.remove(_0x205F8);
                _0x205F8 = null
            }
    
            function _0x20574() {
                var _0x20511 = window.document.createElement("div");
                _0x20532.addClass(_0x20511, "vast-skip-button");
                _0x20532.addClass(_0x20511, "enabled");
                _0x20511.innerHTML = "Skip ad";
                _0x20511.onclick = function(_0x20511) {
                    _0x20553.skipAd(_0x206BE.noop);
                    if (window.Event.prototype.stopPropagation !== undefined) {
                        _0x20511.stopPropagation()
                    } else {
                        return false
                    }
                };
                return _0x20511
            }
        };
        _0x20784.prototype._linkPlayerControls = function(_0x20511, _0x205D7, _0x20574) {
            var _0x205B6 = this;
            _0x20553(this.player, _0x20511);
            _0x20532(this.player, _0x20511, this.VIEW_MODE);
            _0x20574(null, _0x20511, _0x205D7);
    
            function _0x20553(_0x20532, _0x20511) {
                _0x20532.on("volumechange", _0x20553);
                _0x20511.on("AdVolumeChange", _0x20574);
                _0x20532.one("vpaid.adEnd", function() {
                    _0x20532.off("volumechange", _0x20553)
                });
    
                function _0x20553() {
                    var _0x20553 = _0x20532.muted() ? 0 : _0x20532.volume();
                    _0x20511.setAdVolume(_0x20553, _0x20595)
                }
    
                function _0x20574() {
                    _0x20532.trigger("vpaid.AdVolumeChange");
                    var _0x20553 = _0x20532.volume();
                    _0x20511.getAdVolume(function(_0x20511, _0x20574) {
                        if (_0x20511) {
                            _0x20595(_0x20511)
                        } else {
                            if (_0x20553 !== _0x20574) {
                                _0x20532.volume(_0x20574)
                            }
                        }
                    })
                }
            }
    
            function _0x20532(_0x20532, _0x20511, _0x20574) {
                var _0x20553 = _0x2067C.bind(_0x205B6, _0x20532, _0x20511, _0x20574);
                _0x20532.on("fullscreenchange", _0x20553);
                _0x20532.one("vpaid.adEnd", function() {
                    _0x20532.off("fullscreenchange", _0x20553)
                })
            }
        };
        _0x20784.prototype._startAd = function(_0x20511, _0x20574, _0x20532) {
            var _0x20553 = this.player;
            _0x20511.startAd(function(_0x20595) {
                if (!_0x20595) {
                    _0x20553.trigger("vast.adStart")
                };
                _0x20532(_0x20595, _0x20511, _0x20574)
            })
        };
        _0x20784.prototype._finishPlaying = function(_0x20511, _0x20595, _0x20553) {
            var _0x20574 = this.player;
            _0x20511.on("AdStopped", function() {
                _0x20574.trigger("vpaid.AdStopped");
                _0x20532(null)
            });
            _0x20511.on("AdError", function(_0x20553) {
                var _0x20511 = _0x20553 ? _0x20553.message : "on VPAIDIntegrator, error while waiting for the adUnit to finish playing";
                _0x20532(new _0x206DF(_0x20511))
            });
    
            function _0x20532(_BIGARRAY) {
                _0x20553(_BIGARRAY, _0x20511, _0x20595)
            }
        };
        _0x20784.prototype._trackError = function _0x2069D(_0x20532, _0x20511) {
            _0x20742["track"](_0x20532.errorURLMacros, {
                ERRORCODE: _0x20511 || 901
            })
        };
    
        function _0x2067C(_0x205B6, _0x20511, _0x205F8) {
            var _0x205D7 = _0x205B6.el().querySelector(".vjs-tech");
            var _0x20553 = _0x20532.getDimension(_0x205D7);
            var _0x20574 = _0x205B6.isFullscreen() ? _0x205F8.FULLSCREEN : _0x205F8.NORMAL;
            _0x20511.resizeAd(_0x20553.width, _0x20553.height, _0x20574, _0x20595)
        }
    
        function _0x20595(_0x20511) {
            if (_0x20511) {
                _0x205B6.error("ERROR: " + _0x20511.message, _0x20511)
            }
        }
        _0x205F8.exports = _0x20784
    }
    
    function _0x20A39(_0x205B6, _0x20595, _0x20574) {
        "use strict";
        var _0x20532 = _0x205B6("../../utils/dom");
        var _0x20553 = document.createElement("div");
        _0x20553.className = "vjs-ads-label vjs-control vjs-label-hidden";
        _0x20553.innerHTML = "Advertisement";
        var _0x20511 = function(_0x20511) {
            return {
                init: function _0x20595(_0x20595, _0x20574) {
                    _0x20574.el = _0x20553;
                    _0x20511.call(this, _0x20595, _0x20574);
                    setTimeout(function() {
                        var _0x20511 = _0x20595.controlBar && (_0x20595.controlBar.getChild("timerControls") || _0x20595.controlBar.getChild("currentTimeDisplay"));
                        if (_0x20511) {
                            _0x20595.controlBar.el().insertBefore(_0x20553, _0x20511.el())
                        };
                        _0x20532.removeClass(_0x20553, "vjs-label-hidden")
                    }, 0)
                },
                el: function _0x20574() {
                    return _0x20553
                }
            }
        };
        _0x20595.exports = _0x20511
    }
    
    function _0x20A5A(_0x20595, _0x20574, _0x20553) {
        "use strict";
        var _0x20532 = vqn.Component;
        var _0x20511 = _0x20595("./ads-label")(_0x20532);
        vqn.AdsLabel = vqn.Component.extend(_0x20511)
    }
    
    function _0x20A7B(_0x20595, _0x20574, _0x20553) {
        "use strict";
        var _0x20532 = document.createElement("div");
        var _0x20511 = function(_0x20511) {
            return {
                init: function _0x20574(_0x20574, _0x20553) {
                    _0x20553.el = _0x20532;
                    _0x20532.className = "vjs-black-poster";
                    _0x20511.call(this, _0x20574, _0x20553);
                    var _0x20595 = _0x20574.getChild("posterImage");
                    setTimeout(function() {
                        if (_0x20595 && _0x20574 && _0x20574.el()) {
                            _0x20574.el().insertBefore(_0x20532, _0x20595.el())
                        }
                    }, 0)
                },
                el: function _0x20553() {
                    return _0x20532
                }
            }
        };
        _0x20574.exports = _0x20511
    }
    
    function _0x20A9C(_0x20595, _0x20574, _0x20553) {
        "use strict";
        var _0x20511 = vqn.Component;
        var _0x20532 = _0x20595("./black-poster")(_0x20511);
        vqn.BlackPoster = vqn.Component.extend(_0x20532)
    }
    
    function _0x20ABD(_0x205D7, _0x20595, _0x20553) {
        "use strict";
        var _0x20619 = _0x205D7("../ads/vast/VASTClient");
        var _0x2063A = _0x205D7("../ads/vast/VASTError");
        var _0x2069D = _0x205D7("../ads/vast/vastUtil");
        var _0x2065B = _0x205D7("../ads/vast/VASTIntegrator");
        var _0x206BE = _0x205D7("../ads/vpaid/VPAIDIntegrator");
        var _0x20511 = _0x205D7("../utils/async");
        var _0x20532 = _0x205D7("../utils/dom");
        var _0x205B6 = _0x205D7("../utils/playerUtils");
        var _0x205F8 = _0x205D7("../utils/utilityFunctions");
        var _0x20574 = _0x205D7("../utils/consoleLogger");
        _0x20595.exports = function _0x2067C(_0x20700) {
            var _0x207A5;
            var _0x20742 = this;
            var _0x20808 = new _0x20619();
            var _0x20553 = false;
            var _0x205D7 = {
                timeout: 500,
                iosPrerollCancelTimeout: 2000,
                adCancelTimeout: 3000,
                playAdAlways: false,
                adsEnabled: true,
                autoResize: true,
                vpaidFlashLoaderPath: "/VPAIDFlash.swf",
                verbosity: 0
            };
            var _0x20784 = _0x205F8.extend({}, _0x205D7, _0x20700 || {});
            if (_0x205F8.isUndefined(_0x20784.adTagUrl) && _0x205F8.isDefined(_0x20784.url)) {
                _0x20784.adTagUrl = _0x20784.url
            };
            if (_0x205F8.isString(_0x20784.adTagUrl)) {
                _0x20784.adTagUrl = _0x205F8.echoFn(_0x20784.adTagUrl)
            };
            if (_0x205F8.isDefined(_0x20784.adTagXML) && !_0x205F8.isFunction(_0x20784.adTagXML)) {
                return _0x207C6(new _0x2063A("on vqn VAST plugin, the passed adTagXML option does not contain a function"))
            };
            if (!_0x205F8.isDefined(_0x20784.adTagUrl) && !_0x205F8.isFunction(_0x20784.adTagXML)) {
                return _0x207C6(new _0x2063A("on vqn VAST plugin, missing adTagUrl on options object"))
            };
            _0x20574.setVerbosity(_0x20784.verbosity);
            _0x2069D.runFlashSupportCheck(_0x20784.vpaidFlashLoaderPath);
            _0x205B6.prepareForAds(_0x20742);
            if (_0x20784.playAdAlways) {
                _0x20742.on("vast.contentEnd", function() {
                    setTimeout(function() {
                        _0x20742.trigger("vast.reset")
                    }, 0)
                })
            };
            _0x20742.on("vast.firstPlay", _0x207E7);
            _0x20742.on("vast.reset", function() {
                _0x207A5 = null;
                _0x20595()
            });
            _0x20742.vast = {
                isEnabled: function() {
                    return _0x20784.adsEnabled
                },
                enable: function() {
                    _0x20784.adsEnabled = true
                },
                disable: function() {
                    _0x20784.adsEnabled = false
                }
            };
            return _0x20742.vast;
    
            function _0x207E7() {
                _0x205B6.removeNativePoster(_0x20742);
                _0x205B6.once(_0x20742, ["vast.adsCancel", "vast.adEnd"], function() {
                    _0x2065B();
                    _0x2069D()
                });
                _0x20511.waterfall([_0x205D7, _0x20619, _0x206DF, _0x20763], function(_0x20511, _0x20532) {
                    if (_0x20511) {
                        _0x207C6(_0x20511, _0x20532)
                    } else {
                        _0x20742.trigger("vast.adEnd")
                    }
                });
    
                function _0x2065B() {
                    if (_0x20742.vast && _0x20742.vast.adUnit) {
                        _0x20742.vast.adUnit = null
                    }
                }
    
                function _0x2069D() {
                    _0x206BE();
                    if (_0x207A5) {
                        _0x205B6.restorePlayerSnapshot(_0x20742, _0x207A5);
                        _0x207A5 = null
                    }
                }
    
                function _0x206BE() {
                    _0x205B6.once(_0x20742, ["playing", "vast.reset", "vast.firstPlay"], function(_0x20511) {
                        if (_0x20511.type !== "playing") {
                            return
                        };
                        _0x20742.trigger("vast.contentStart");
                        _0x205B6.once(_0x20742, ["ended", "vast.reset", "vast.firstPlay"], function(_0x20511) {
                            if (_0x20511.type === "ended") {
                                _0x20742.trigger("vast.contentEnd")
                            }
                        })
                    })
                }
    
                function _0x205D7(_0x20511) {
                    if (_0x20784.adsEnabled) {
                        return _0x20511(null)
                    };
                    _0x20511(new _0x2063A("Ads are not enabled"))
                }
    
                function _0x20619(_0x20511) {
                    if (_0x20595()) {
                        _0x207A5 = _0x205B6.getPlayerSnapshot(_0x20742);
                        _0x20742.pause();
                        _0x20574();
                        if (_0x20742.paused()) {
                            _0x20511(null)
                        } else {
                            _0x205B6.once(_0x20742, ["playing"], function() {
                                _0x20742.pause();
                                _0x20511(null)
                            })
                        }
                    } else {
                        _0x20511(new _0x2063A("video content has been playing before preroll ad"))
                    }
                }
    
                function _0x20595() {
                    return !_0x205F8.isIPhone() || _0x20742.currentTime() <= _0x20784.iosPrerollCancelTimeout
                }
    
                function _0x206DF(_0x20574) {
                    var _0x20511;
                    _0x20553 = false;
                    _0x20511 = setTimeout(function() {
                        _0x207C6(new _0x2063A("timeout while waiting for the video to start playing", 402))
                    }, _0x20784.adCancelTimeout);
                    _0x205B6.once(_0x20742, ["vast.adStart", "vast.adsCancel"], _0x20532);
    
                    function _0x20532() {
                        if (_0x20511) {
                            clearTimeout(_0x20511);
                            _0x20511 = null
                        }
                    }
                    _0x20574(null)
                }
    
                function _0x20574() {
                    _0x20532.addClass(_0x20742.el(), "vjs-vast-ad-loading");
                    _0x205B6.once(_0x20742, ["vast.adStart", "vast.adsCancel"], _0x2067C)
                }
    
                function _0x2067C() {
                    setTimeout(function() {
                        _0x20532.removeClass(_0x20742.el(), "vjs-vast-ad-loading")
                    }, 100)
                }
            }
    
            function _0x20595() {
                _0x20742.trigger("vast.adsCancel");
                _0x20553 = true
            }
    
            function _0x20763(_0x20532) {
                _0x20511.waterfall([_0x2067C, _0x20721], function(_0x20511, _0x20553) {
                    if (_0x205F8.isArray(_0x20784.adTagUrl) && _0x205F8.isDefined(_0x20784.adTagUrl[0])) {
                        _0x20763(_0x20532)
                    } else {
                        _0x20532(_0x20511, _0x20553)
                    }
                })
            }
    
            function _0x2067C(_0x20511) {
                if (_0x205F8.isArray(_0x20784.adTagUrl) && _0x205F8.isDefined(_0x20784.adTagUrl[0])) {
                    _0x20808.getVASTResponse(_0x20784.adTagUrl ? _0x20784.adTagUrl.shift() : _0x20784.adTagXML, _0x20511)
                } else {
                    _0x20808.getVASTResponse(_0x20784.adTagUrl ? _0x20784.adTagUrl() : _0x20784.adTagXML, _0x20511)
                }
            }
    
            function _0x20721(_0x2067C, _0x205D7) {
                if (_0x20553) {
                    return
                };
                if (_0x205F8.isArray(_0x20784.adTagUrl) && _0x205F8.isDefined(_0x20784.adTagUrl[0])) {
                    _0x20784.adTagUrl.splice(0, _0x20784.adTagUrl.length)
                };
                var _0x20595 = _0x206DF(_0x2067C) ? new _0x206BE(_0x20742, _0x20784) : new _0x2065B(_0x20742);
                var _0x20532 = false;
                _0x205B6.once(_0x20742, ["vast.adStart", "vast.adsCancel"], function(_0x20532) {
                    if (_0x20532.type === "vast.adStart") {
                        _0x20511()
                    }
                });
                _0x205B6.once(_0x20742, ["vast.adEnd", "vast.adsCancel"], _0x2063A);
                if (_0x205F8.isIDevice()) {
                    _0x20619()
                };
                _0x20742.vast.vastResponse = _0x2067C;
                _0x20574.debug("calling adIntegrator.playAd() with vastResponse:", _0x2067C);
                _0x20742.vast.adUnit = _0x20595.playAd(_0x2067C, _0x205D7);
    
                function _0x20511() {
                    if (_0x20532 || _0x20742.controlBar.getChild("AdsLabel")) {
                        return
                    };
                    _0x20742.controlBar.addChild("AdsLabel")
                }
    
                function _0x2063A() {
                    _0x20742.controlBar.removeChild("AdsLabel");
                    _0x20532 = true
                }
    
                function _0x20619() {
                    var _0x20574 = 3;
                    var _0x20553 = 0;
                    var _0x20595 = 0;
                    _0x20742.on("timeupdate", _0x20511);
                    _0x20742.on("ended", _0x20532);
                    _0x205B6.once(_0x20742, ["vast.adEnd", "vast.adsCancel", "vast.adError"], _0x205D7);
    
                    function _0x20532() {
                        if ((_0x20742.duration() - _0x20553) > _0x20574) {
                            _0x20742.pause(true);
                            _0x20742.play(true);
                            _0x20742.currentTime(_0x20553)
                        }
                    }
    
                    function _0x20511() {
                        var _0x20511 = _0x20742.currentTime();
                        var _0x20532 = Math.abs(_0x20511 - _0x20553);
                        if (_0x20532 > _0x20574) {
                            _0x20595 += 1;
                            if (_0x20595 >= 2) {
                                _0x20742.pause(true)
                            };
                            _0x20742.currentTime(_0x20553)
                        } else {
                            _0x20553 = _0x20511
                        }
                    }
    
                    function _0x205D7() {
                        _0x20742.off("timeupdate", _0x20511);
                        _0x20742.off("ended", _0x20532)
                    }
                }
            }
    
            function _0x207C6(_0x20511, _0x20532) {
                _0x20742.trigger({
                    type: "vast.adError",
                    error: _0x20511
                });
                _0x20595();
                _0x20574.error("AD ERROR:", _0x20511.message, _0x20511, _0x20532)
            }
    
            function _0x206DF(_0x20574) {
                var _0x20511, _0x20532;
                var _0x20553 = _0x20574.mediaFiles;
                for (_0x20511 = 0, _0x20532 = _0x20553.length; _0x20511 < _0x20532; _0x20511++) {
                    if (_0x2069D.isVPAID(_0x20553[_0x20511])) {
                        return true
                    }
                };
                return false
            }
        }
    }
    
    function _0x20ADE(_0x20574, _0x20553, _0x20532) {
        var _0x20595 = _0x20574("./utilityFunctions");
        var _0x20511 = {};
        _0x20511.setImmediate = function(_BIGARRAY) {
            setTimeout(_BIGARRAY, 0)
        };
        _0x20511.iterator = function(_0x20532) {
            var _0x20511 = function(_0x20574) {
                var _0x20553 = function() {
                    if (_0x20532.length) {
                        _0x20532[_0x20574].apply(null, arguments)
                    };
                    return _0x20553.next()
                };
                _0x20553.next = function() {
                    return (_0x20574 < _0x20532.length - 1) ? _0x20511(_0x20574 + 1) : null
                };
                return _0x20553
            };
            return _0x20511(0)
        };
        _0x20511.waterfall = function(_0x20574, _0x20532) {
            _0x20532 = _0x20532 || function() {};
            if (!_0x20595.isArray(_0x20574)) {
                var _0x20553 = new Error("First argument to waterfall must be an array of functions");
                return _0x20532(_0x20553)
            };
            if (!_0x20574.length) {
                return _0x20532()
            };
            var _0x205B6 = function(_0x20553) {
                return function(_0x20595) {
                    if (_0x20595) {
                        _0x20532.apply(null, arguments);
                        _0x20532 = function() {}
                    } else {
                        var _0x20574 = Array.prototype.slice.call(arguments, 1);
                        var _0x205D7 = _0x20553.next();
                        if (_0x205D7) {
                            _0x20574.push(_0x205B6(_0x205D7))
                        } else {
                            _0x20574.push(_0x20532)
                        };
                        _0x20511.setImmediate(function() {
                            _0x20553.apply(null, _0x20574)
                        })
                    }
                }
            };
            _0x205B6(_0x20511.iterator(_0x20574))()
        };
        _0x20511.when = function(_0x20532, _0x20511) {
            if (!_0x20595.isFunction(_0x20511)) {
                throw new Error("async.when error: missing callback argument")
            };
            var _0x20553 = _0x20595.isFunction(_0x20532) ? _0x20532 : function() {
                return !!_0x20532
            };
            return function() {
                var _0x20532 = _0x20595.arrayLikeObjToArray(arguments);
                var _0x20574 = _0x20532.pop();
                if (_0x20553.apply(null, _0x20532)) {
                    return _0x20511.apply(this, arguments)
                };
                _0x20532.unshift(null);
                return _0x20574.apply(null, _0x20532)
            }
        };
        _0x20553.exports = _0x20511
    }
    
    function _0x20AFF(_0x2065B, _0x2063A, _0x205B6) {
        "use strict";
        var _0x20532 = 0;
        var _0x20511 = "[vqn-vast-vpaid] ";
    
        function _0x2067C(_BIGARRAY) {
            _0x20532 = _BIGARRAY
        }
    
        function _0x205D7(_0x20553, _0x20532) {
            if ((_0x20532.length) > 0 && (typeof _0x20532[0] === "string")) {
                _0x20532[0] = _0x20511 + _0x20532[0]
            };
            if (_0x20553.apply) {
                _0x20553.apply(console, Array.prototype.slice.call(_0x20532))
            } else {
                _0x20553(Array.prototype.slice.call(_0x20532))
            }
        }
    
        function _0x20574() {
            if (_0x20532 < 4) {
                return
            };
            if (typeof console.debug === "undefined") {
                _0x205D7(console.log, arguments)
            } else {
                _0x205D7(console.debug, arguments)
            }
        }
    
        function _0x20619() {
            if (_0x20532 < 3) {
                return
            };
            _0x205D7(console.log, arguments)
        }
    
        function _0x205F8() {
            if (_0x20532 < 2) {
                return
            };
            _0x205D7(console.info, arguments)
        }
    
        function _0x2069D() {
            if (_0x20532 < 1) {
                return
            };
            _0x205D7(console.warn, arguments)
        }
    
        function _0x20595() {
            _0x205D7(console.error, arguments)
        }
        var _0x20553 = {
            setVerbosity: _0x2067C,
            debug: _0x20574,
            log: _0x20619,
            info: _0x205F8,
            warn: _0x2069D,
            error: _0x20595
        };
        if ((typeof(console) === "undefined") || !console.log) {
            _0x20553.debug = function() {};
            _0x20553.log = function() {};
            _0x20553.info = function() {};
            _0x20553.warn = function() {};
            _0x20553.error = function() {}
        };
        _0x2063A.exports = _0x20553
    }
    
    function _0x20B20(_0x20742, _0x206BE, _0x20574) {
        "use strict";
        var _0x20784 = _0x20742("./utilityFunctions");
        var _0x20553 = {};
        _0x20553.isVisible = function _0x2069D(_0x20511) {
            var _0x20532 = window.getComputedStyle(_0x20511);
            return _0x20532.visibility !== "hidden"
        };
        _0x20553.isHidden = function _0x2065B(_0x20511) {
            var _0x20532 = window.getComputedStyle(_0x20511);
            return _0x20532.display === "none"
        };
        _0x20553.isShown = function _0x2067C(_0x20511) {
            return !_0x20553.isHidden(_0x20511)
        };
        _0x20553.hide = function _0x205F8(_0x20511) {
            _0x20511.__prev_style_display_ = _0x20511.style.display;
            _0x20511.style.display = "none"
        };
        _0x20553.show = function _0x20763(_0x20511) {
            if (_0x20553.isHidden(_0x20511)) {
                _0x20511.style.display = _0x20511.__prev_style_display_
            };
            _0x20511.__prev_style_display_ = undefined
        };
        _0x20553.hasClass = function _0x205D7(_0x20553, _0x20532) {
            var _0x20511, _0x20574, _0x20595;
            if (_0x20784.isNotEmptyString(_0x20532)) {
                if (_0x20553.classList) {
                    return _0x20553.classList.contains(_0x20532)
                };
                _0x20511 = _0x20784.isString(_0x20553.getAttribute("class")) ? _0x20553.getAttribute("class").split(/\s+/) : [];
                _0x20532 = (_0x20532 || "");
                for (_0x20574 = 0, _0x20595 = _0x20511.length; _0x20574 < _0x20595; _0x20574 += 1) {
                    if (_0x20511[_0x20574] === _0x20532) {
                        return true
                    }
                }
            };
            return false
        };
        _0x20553.addClass = function(_0x20553, _0x20532) {
            var _0x20511;
            if (_0x20784.isNotEmptyString(_0x20532)) {
                if (_0x20553.classList) {
                    return _0x20553.classList.add(_0x20532)
                };
                _0x20511 = _0x20784.isString(_0x20553.getAttribute("class")) ? _0x20553.getAttribute("class").split(/\s+/) : [];
                if (_0x20784.isString(_0x20532) && _0x20784.isNotEmptyString(_0x20532.replace(/\s+/, ""))) {
                    _0x20511.push(_0x20532);
                    _0x20553.setAttribute("class", _0x20511.join(" "))
                }
            }
        };
        _0x20553.removeClass = function(_0x20553, _0x20532) {
            var _0x20511;
            if (_0x20784.isNotEmptyString(_0x20532)) {
                if (_0x20553.classList) {
                    return _0x20553.classList.remove(_0x20532)
                };
                _0x20511 = _0x20784.isString(_0x20553.getAttribute("class")) ? _0x20553.getAttribute("class").split(/\s+/) : [];
                var _0x205B6 = [];
                var _0x20574, _0x20595;
                if (_0x20784.isString(_0x20532) && _0x20784.isNotEmptyString(_0x20532.replace(/\s+/, ""))) {
                    for (_0x20574 = 0, _0x20595 = _0x20511.length; _0x20574 < _0x20595; _0x20574 += 1) {
                        if (_0x20532 !== _0x20511[_0x20574]) {
                            _0x205B6.push(_0x20511[_0x20574])
                        }
                    };
                    _0x20553.setAttribute("class", _0x205B6.join(" "))
                }
            }
        };
        _0x20553.addEventListener = function _0x20511(_0x20511, _0x20574, _0x20532) {
            if (_0x20784.isArray(_0x20511)) {
                _0x20784.forEach(_0x20511, function(_0x20511) {
                    _0x20553.addEventListener(_0x20511, _0x20574, _0x20532)
                });
                return
            };
            if (_0x20784.isArray(_0x20574)) {
                _0x20784.forEach(_0x20574, function(_0x20574) {
                    _0x20553.addEventListener(_0x20511, _0x20574, _0x20532)
                });
                return
            };
            if (_0x20511.addEventListener) {
                _0x20511.addEventListener(_0x20574, _0x20532, false)
            } else {
                if (_0x20511.attachEvent) {
                    _0x20511.attachEvent("on" + _0x20574, _0x20532)
                }
            }
        };
        _0x20553.removeEventListener = function _0x20700(_0x20511, _0x20574, _0x20532) {
            if (_0x20784.isArray(_0x20511)) {
                _0x20784.forEach(_0x20511, function(_0x20511) {
                    _0x20553.removeEventListener(_0x20511, _0x20574, _0x20532)
                });
                return
            };
            if (_0x20784.isArray(_0x20574)) {
                _0x20784.forEach(_0x20574, function(_0x20574) {
                    _0x20553.removeEventListener(_0x20511, _0x20574, _0x20532)
                });
                return
            };
            if (_0x20511.removeEventListener) {
                _0x20511.removeEventListener(_0x20574, _0x20532, false)
            } else {
                if (_0x20511.detachEvent) {
                    _0x20511.detachEvent("on" + _0x20574, _0x20532)
                } else {
                    _0x20511["on" + _0x20574] = null
                }
            }
        };
        _0x20553.dispatchEvent = function _0x20532(_0x20511, _0x20532) {
            if (_0x20511.dispatchEvent) {
                _0x20511.dispatchEvent(_0x20532)
            } else {
                _0x20511.fireEvent("on" + _0x20532.eventType, _0x20532)
            }
        };
        _0x20553.isDescendant = function _0x20619(_0x20553, _0x20511) {
            var _0x20532 = _0x20511.parentNode;
            while (_0x20532 !== null) {
                if (_0x20532 === _0x20553) {
                    return true
                };
                _0x20532 = _0x20532.parentNode
            };
            return false
        };
        _0x20553.getTextContent = function _0x205B6(_0x20511) {
            return _0x20511.textContent || _0x20511.text
        };
        _0x20553.prependChild = function _0x206DF(_0x20532, _0x20511) {
            if (_0x20511.parentNode) {
                _0x20511.parentNode.removeChild(_0x20511)
            };
            return _0x20532.insertBefore(_0x20511, _0x20532.firstChild)
        };
        _0x20553.remove = function _0x20721(_0x20511) {
            if (_0x20511 && _0x20511.parentNode) {
                _0x20511.parentNode.removeChild(_0x20511)
            }
        };
        _0x20553.isDomElement = function _0x2063A(_BIGARRAY) {
            return _BIGARRAY instanceof Element
        };
        _0x20553.click = function(_0x20511, _0x20532) {
            _0x20553.addEventListener(_0x20511, "click", _0x20532)
        };
        _0x20553.once = function(_0x20511, _0x20595, _0x20532) {
            function _0x20574() {
                _0x20532.apply(null, arguments);
                _0x20553.removeEventListener(_0x20511, _0x20595, _0x20574)
            }
            _0x20553.addEventListener(_0x20511, _0x20595, _0x20574)
        };
        _0x20553.getDimension = function _0x20595(_0x20511) {
            var _0x20532;
            if (!_0x20784.isOldIE() && _0x20511.getBoundingClientRect) {
                _0x20532 = _0x20511.getBoundingClientRect();
                return {
                    width: _0x20532.width,
                    height: _0x20532.height
                }
            };
            return {
                width: _0x20511.offsetWidth,
                height: _0x20511.offsetHeight
            }
        };
        _0x206BE.exports = _0x20553
    }
    
    function _0x20B41(_0x205D7, _0x205B6, _0x20532) {
        "use strict";
        var _0x205F8 = _0x205D7("./urlUtils");
        var _0x20619 = _0x205D7("./utilityFunctions");
    
        function _0x20595(_0x20511) {
            this.message = "HttpRequest Error: " + (_0x20511 || "")
        }
        _0x20595.prototype = new Error();
        _0x20595.prototype.name = "HttpRequest Error";
    
        function _0x20574(_0x20511) {
            if (!_0x20619.isFunction(_0x20511)) {
                throw new _0x20595("Missing XMLHttpRequest factory method")
            };
            this.createXhr = _0x20511
        }
        _0x20574.prototype.run = function(_0x20532, _0x2067C, _0x20511, _0x20553) {
            _0x205B6(_0x2067C, _0x20511, _0x20553);
            var _0x2063A, _0x2065B;
            var _0x2069D = this.createXhr();
            _0x20553 = _0x20553 || {};
            _0x2063A = _0x20619.isNumber(_0x20553.timeout) ? _0x20553.timeout : 0;
            _0x2069D.open(_0x20532, _0x205F8.urlParts(_0x2067C).href, true);
            if (_0x20553.headers) {
                _0x205D7(_0x2069D, _0x20553.headers)
            };
            if (_0x20553.withCredentials) {
                _0x2069D.withCredentials = true
            };
            _0x2069D.onload = function() {
                var _0x20574, _0x20532, _0x20553;
                if (!_0x2069D.getAllResponseHeaders) {
                    _0x2069D.getAllResponseHeaders = function() {
                        return null
                    }
                };
                if (!_0x2069D.status) {
                    _0x2069D.status = 200
                };
                if (_0x20619.isDefined(_0x2065B)) {
                    clearTimeout(_0x2065B);
                    _0x2065B = undefined
                };
                _0x20574 = _0x2069D.statusText || "";
                _0x20532 = ("response" in _0x2069D) ? _0x2069D.response : _0x2069D.responseText;
                _0x20553 = _0x2069D.status === 1223 ? 204 : _0x2069D.status;
                _0x20511(_0x20553, _0x20532, _0x2069D.getAllResponseHeaders(), _0x20574)
            };
            _0x2069D.onerror = _0x20574;
            _0x2069D.onabort = _0x20574;
            _0x2069D.send();
            if (_0x2063A > 0) {
                _0x2065B = setTimeout(function() {
                    _0x2069D && _0x2069D.abort()
                }, _0x2063A)
            };
    
            function _0x205B6(_0x20553, _0x20511, _0x20532) {
                if (!_0x20619.isString(_0x20553) || _0x20619.isEmptyString(_0x20553)) {
                    throw new _0x20595("Invalid url '" + _0x20553 + "'")
                };
                if (!_0x20619.isFunction(_0x20511)) {
                    throw new _0x20595("Invalid handler '" + _0x20511 + "' for the http request")
                };
                if (_0x20619.isDefined(_0x20532) && !_0x20619.isObject(_0x20532)) {
                    throw new _0x20595("Invalid options map '" + _0x20532 + "'")
                }
            }
    
            function _0x205D7(_0x20532, _0x20511) {
                _0x20619.forEach(_0x20511, function(_0x20553, _0x20511) {
                    if (_0x20619.isDefined(_0x20553)) {
                        _0x20532.setRequestHeader(_0x20511, _0x20553)
                    }
                })
            }
    
            function _0x20574() {
                _0x20511(-1, null, null, "")
            }
        };
        _0x20574.prototype.get = function(_0x205B6, _0x20511, _0x20553) {
            this.run("GET", _0x205B6, _0x20574, _0x20553);
    
            function _0x20574(_0x20574, _0x20553, _BIGARRAY, _0x205B6) {
                if (_0x20532(_0x20574)) {
                    _0x20511(null, _0x20553, _0x20574, _BIGARRAY, _0x205B6)
                } else {
                    _0x20511(new _0x20595(_0x205B6), _0x20553, _0x20574, _BIGARRAY, _0x205B6)
                }
            }
    
            function _0x20532(_BIGARRAY) {
                return 200 <= _BIGARRAY && _BIGARRAY < 300
            }
        };
    
        function _0x20511() {
            var _0x20511 = new XMLHttpRequest();
            if (!("withCredentials" in _0x20511)) {
                _0x20511 = new XDomainRequest()
            };
            return _0x20511
        }
        var _0x20553 = new _0x20574(_0x20511);
        _0x205B6.exports = {
            http: _0x20553,
            HttpRequest: _0x20574,
            HttpRequestError: _0x20595,
            createXhr: _0x20511
        }
    }
    
    function _0x20B62(_0x20553, _0x20532, _0x20511) {
        "use strict";
        _0x20532.exports = {
            html5: ["text/javascript", "text/javascript1.0", "text/javascript1.2", "text/javascript1.4", "text/jscript", "application/javascript", "application/x-javascript", "text/ecmascript", "text/ecmascript1.0", "text/ecmascript1.2", "text/ecmascript1.4", "text/livescript", "application/ecmascript", "application/x-ecmascript"],
            flash: ["application/x-shockwave-flash"]
        }
    }
    
    function _0x20B83(_0x205D7, _0x20574, _0x20532) {
        "use strict";
        var _0x20511 = _0x205D7("./dom");
        var _0x20619 = _0x205D7("./utilityFunctions");
        var _0x205B6 = {};
        _0x205B6.getPlayerSnapshot = function _0x20553(_0x20532) {
            var _0x20574 = _0x20532.el().querySelector(".vjs-tech");
            var _0x20553 = {
                ended: _0x20532.ended(),
                src: _0x20532.currentSrc(),
                currentTime: _0x20532.currentTime(),
                type: _0x20532.currentType(),
                playing: !_0x20532.paused(),
                suppressedTracks: _0x20511(_0x20532)
            };
            if (_0x20574) {
                _0x20553.nativePoster = _0x20574.poster;
                _0x20553.style = _0x20574.getAttribute("style")
            };
            return _0x20553;
    
            function _0x20511(_0x20511) {
                var _0x20553 = _0x20511.remoteTextTracks ? _0x20511.remoteTextTracks() : [];
                if (_0x20553 && _0x20619.isArray(_0x20553.tracks_)) {
                    _0x20553 = _0x20553.tracks_
                };
                if (!_0x20619.isArray(_0x20553)) {
                    _0x20553 = []
                };
                var _0x20532 = [];
                _0x20553.forEach(function(_0x20511) {
                    _0x20532.push({
                        track: _0x20511,
                        mode: _0x20511.mode
                    });
                    _0x20511.mode = "disabled"
                });
                return _0x20532
            }
        };
        _0x205B6.restorePlayerSnapshot = function _0x205F8(_0x20574, _0x205D7) {
            var _0x205F8 = _0x20574.el().querySelector(".vjs-tech");
            var _0x20511 = 20;
            if (_0x205D7.nativePoster) {
                _0x205F8.poster = _0x205D7.nativePoster
            };
            if ("style" in _0x205D7) {
                _0x205F8.setAttribute("style", _0x205D7.style || "")
            };
            if (_0x20553(_0x20574, _0x205D7)) {
                _0x20574.one("contentloadedmetadata", _0x20595);
                _0x20574.one("canplay", _0x20619);
                _0x20532();
                _0x20574.src({
                    src: _0x205D7.src,
                    type: _0x205D7.type
                });
                _0x20574.load()
            } else {
                _0x20595();
                if (_0x205D7.playing) {
                    _0x20574.play()
                }
            };
    
            function _0x20532() {
                var _0x20511 = setTimeout(function() {
                    _0x20574.trigger("canplay")
                }, 1000);
                _0x20574.one("canplay", function() {
                    clearTimeout(_0x20511)
                })
            }
    
            function _0x20553(_0x20511, _0x20532) {
                if (_0x20511.src()) {
                    return _0x20511.src() !== _0x20532.src
                };
                return _0x20511.currentSrc() !== _0x20532.src
            }
    
            function _0x20595() {
                var _0x20511 = _0x205D7.suppressedTracks;
                _0x20511.forEach(function(_0x20511) {
                    _0x20511["track"].mode = _0x20511.mode
                })
            }
    
            function _0x20619() {
                if (!_0x205B6.isReadyToResume(_0x20574) && _0x20511--) {
                    setTimeout(_0x20619, 50)
                } else {
                    try {
                        if (_0x20574.currentTime() !== _0x205D7.currentTime) {
                            if (_0x205D7.playing) {
                                _0x20574.one("seeked", function() {
                                    _0x20574.play()
                                })
                            };
                            _0x20574.currentTime(_0x205D7.currentTime)
                        } else {
                            if (_0x205D7.playing) {
                                _0x20574.play()
                            }
                        }
                    } catch (e) {
                        vqn.log.warn("Failed to resume the content after an advertisement", e)
                    }
                }
            }
        };
        _0x205B6.isReadyToResume = function(_0x20511) {
            if (_0x20511.readyState() > 1) {
                return true
            };
            if (_0x20511.seekable() === undefined) {
                return true
            };
            if (_0x20511.seekable().length > 0) {
                return true
            };
            return false
        };
        _0x205B6.prepareForAds = function(_0x2063A) {
            var _0x20574 = _0x2063A.addChild("blackPoster");
            var _0x20532 = true;
            var _0x20721;
            _0x205F8();
            _0x2063A.on("play", _0x20700);
            _0x2063A.on("vast.reset", _0x2067C);
            _0x2063A.on("vast.firstPlay", _0x2069D);
            _0x2063A.on("error", _0x20595);
            _0x2063A.on("vast.adStart", _0x20595);
            _0x2063A.on("vast.adsCancel", _0x20595);
            _0x2063A.on("vast.adError", _0x20595);
            _0x2063A.on("vast.adStart", _0x20553);
            _0x2063A.on("vast.adEnd", _0x2065B);
            _0x2063A.on("vast.adsCancel", _0x2065B);
    
            function _0x205F8() {
                var _0x20553 = _0x2063A.play;
                _0x2063A.play = function(_0x20511) {
                    var _0x20595 = this;
                    if (_0x205D7()) {
                        _0x20532()
                    } else {
                        _0x20574(_0x20511)
                    };
                    return this;
    
                    function _0x20532() {
                        if (!_0x20619.isIPhone()) {
                            _0x20721 = _0x206DF();
                            _0x2063A.muted(true)
                        };
                        _0x20553.apply(_0x20595, arguments)
                    }
    
                    function _0x20574(_0x20511) {
                        if (_0x205B6() && !_0x20511) {
                            _0x2063A.vast.adUnit.resumeAd()
                        } else {
                            _0x20553.apply(_0x20595, arguments)
                        }
                    }
                };
                var _0x20511 = _0x2063A.pause;
                _0x2063A.pause = function(_0x20532) {
                    if (_0x205B6() && !_0x20532) {
                        _0x2063A.vast.adUnit.pauseAd()
                    } else {
                        _0x20511.apply(this, arguments)
                    };
                    return this
                };
                var _0x20532 = _0x2063A.paused;
                _0x2063A.paused = function(_0x20511) {
                    if (_0x205B6() && !_0x20511) {
                        return _0x2063A.vast.adUnit.isPaused()
                    };
                    return _0x20532.apply(this, arguments)
                }
            }
    
            function _0x205B6() {
                return _0x2063A.vast && _0x2063A.vast.adUnit
            }
    
            function _0x20700() {
                if (_0x205D7()) {
                    _0x20532 = false;
                    _0x2063A.trigger("vast.firstPlay")
                }
            }
    
            function _0x2067C() {
                _0x20532 = true;
                _0x20574.show();
                _0x2069D()
            }
    
            function _0x205D7() {
                return _0x20532
            }
    
            function _0x206DF() {
                return {
                    muted: _0x2063A.muted(),
                    volume: _0x2063A.volume()
                }
            }
    
            function _0x2069D() {
                if (_0x20721) {
                    _0x2063A.currentTime(0);
                    _0x206BE(_0x20721);
                    _0x20721 = null
                }
            }
    
            function _0x206BE(_0x20511) {
                if (_0x20619.isObject(_0x20511)) {
                    _0x2063A.volume(_0x20511.volume);
                    _0x2063A.muted(_0x20511.muted)
                }
            }
    
            function _0x20595() {
                if (!_0x20511.hasClass(_0x20574.el(), "vjs-hidden")) {
                    _0x20574.hide()
                }
            }
    
            function _0x20553() {
                _0x20511.addClass(_0x2063A.el(), "vjs-ad-playing")
            }
    
            function _0x2065B() {
                _0x20511.removeClass(_0x2063A.el(), "vjs-ad-playing")
            }
        };
        _0x205B6.removeNativePoster = function(_0x20511) {
            var _0x20532 = _0x20511.el().querySelector(".vjs-tech");
            if (_0x20532) {
                _0x20532.removeAttribute("poster")
            }
        };
        _0x205B6.once = function _0x20595(_0x20574, _0x20511, _0x20532) {
            function _0x20553() {
                _0x20532.apply(null, arguments);
                _0x20511.forEach(function(_0x20511) {
                    _0x20574.off(_0x20511, _0x20553)
                })
            }
            _0x20511.forEach(function(_0x20511) {
                _0x20574.on(_0x20511, _0x20553)
            })
        };
        _0x20574.exports = _0x205B6
    }
    
    function _0x20BA4(_0x205B6, _0x20532, _0x20511) {
        "use strict";
        var _0x20619 = _0x205B6("./utilityFunctions");
        var _0x205D7 = document.createElement("a");
        var _0x20553 = document.documentMode;
    
        function _0x205F8(_0x20532) {
            var _0x20511 = _0x20532;
            if (_0x20553) {
                _0x205D7.setAttribute("href", _0x20511);
                _0x20511 = _0x205D7.href
            };
            _0x205D7.setAttribute("href", _0x20511);
            return {
                href: _0x205D7.href,
                protocol: _0x205D7.protocol ? _0x205D7.protocol.replace(/:$/, "") : "",
                host: _0x205D7.host,
                search: _0x205D7.search ? _0x205D7.search.replace(/^\?/, "") : "",
                hash: _0x205D7.hash ? _0x205D7.hash.replace(/^#/, "") : "",
                hostname: _0x205D7.hostname,
                port: _0x20619.isNotEmptyString(_0x205D7.port) ? _0x205D7.port : 80,
                pathname: (_0x205D7.pathname.charAt(0) === "/") ? _0x205D7.pathname : "/" + _0x205D7.pathname
            }
        }
    
        function _0x20595(_0x20553, _0x20511) {
            var _0x20532, _0x20574;
            _0x20511 = _0x20619.isFunction(_0x20511) ? _0x20511 : function() {
                return true
            };
            _0x20553 = _0x20553.trim().replace(/^\?/, "");
            _0x20532 = _0x20553.split("&");
            _0x20574 = {};
            _0x20619.forEach(_0x20532, function(_0x20595) {
                var _0x20553, _0x20532, _0x205B6;
                if (_0x20595 !== "") {
                    _0x20553 = _0x20595.split("=");
                    _0x20532 = _0x20553[0];
                    _0x205B6 = _0x20553[1];
                    if (_0x20511(_0x20532, _0x205B6)) {
                        _0x20574[_0x20532] = _0x205B6
                    }
                }
            });
            return _0x20574
        }
    
        function _0x20574(_0x20511) {
            var _0x20532 = [];
            _0x20619.forEach(_0x20511, function(_0x20553, _0x20511) {
                _0x20532.push(_0x20511 + "=" + _0x20553)
            });
            return _0x20532.join("&")
        }
        _0x20532.exports = {
            urlParts: _0x205F8,
            queryStringToObj: _0x20595,
            objToQueryString: _0x20574
        }
    }
    
    function _0x20BC5(_0x20952, _0x208EF, _0x205D7) {
        "use strict";
        var _0x20910 = 1;
        var _0x20994 = /[A-Z]/g;
        var _0x205B6 = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
        var _0x20808 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    
        function _0x20931() {}
    
        function _0x207C6(_BIGARRAY) {
            return _BIGARRAY === null
        }
    
        function _0x206BE(_BIGARRAY) {
            return _BIGARRAY !== undefined
        }
    
        function _0x2088C(_BIGARRAY) {
            return _BIGARRAY === undefined
        }
    
        function _0x20829(_0x20511) {
            return typeof _0x20511 === "object"
        }
    
        function _0x20700(_0x20511) {
            return typeof _0x20511 === "function"
        }
    
        function _0x207E7(_0x20511) {
            return typeof _0x20511 === "number"
        }
    
        function _0x208CE(_0x20511) {
            return _0x20A39.isObject(_0x20511) && _0x20511.window === _0x20511
        }
    
        function _0x2067C(_0x20511) {
            return Object.prototype.toString.call(_0x20511) === "[object Array]"
        }
    
        function _0x2069D(_0x20532) {
            if (_0x20532 === null || _0x20A39.isWindow(_0x20532) || _0x20A39.isFunction(_0x20532) || _0x20A39.isUndefined(_0x20532)) {
                return false
            };
            var _0x20511 = _0x20532.length;
            if (_0x20532.nodeType === _0x20910 && _0x20511) {
                return true
            };
            return _0x20A39.isString(_0x20532) || _0x20A39.isArray(_0x20532) || _0x20511 === 0 || typeof _0x20511 === "number" && _0x20511 > 0 && (_0x20511 - 1) in _0x20532
        }
    
        function _0x2086B(_0x20511) {
            return typeof _0x20511 === "string"
        }
    
        function _0x206DF(_0x20511) {
            return _0x20A39.isString(_0x20511) && _0x20511.length === 0
        }
    
        function _0x207A5(_0x20511) {
            return _0x20A39.isString(_0x20511) && _0x20511.length !== 0
        }
    
        function _0x20511(_0x20511) {
            return Array.prototype.slice.call(_0x20511)
        }
    
        function _0x20619(_0x205B6, _0x20553, _0x20511) {
            var _0x20574, _0x20595;
            if (_0x205B6) {
                if (_0x20700(_0x205B6)) {
                    for (_0x20574 in _0x205B6) {
                        if (_0x20574 !== "prototype" && _0x20574 !== "length" && _0x20574 !== "name" && (!_0x205B6.hasOwnProperty || _0x205B6.hasOwnProperty(_0x20574))) {
                            _0x20553.call(_0x20511, _0x205B6[_0x20574], _0x20574, _0x205B6)
                        }
                    }
                } else {
                    if (_0x2067C(_0x205B6)) {
                        var _0x20532 = typeof _0x205B6 !== "object";
                        for (_0x20574 = 0, _0x20595 = _0x205B6.length; _0x20574 < _0x20595; _0x20574++) {
                            if (_0x20532 || _0x20574 in _0x205B6) {
                                _0x20553.call(_0x20511, _0x205B6[_0x20574], _0x20574, _0x205B6)
                            }
                        }
                    } else {
                        if (_0x205B6.forEach && _0x205B6.forEach !== _0x20619) {
                            _0x205B6.forEach(_0x20553, _0x20511, _0x205B6)
                        } else {
                            for (_0x20574 in _0x205B6) {
                                if (_0x205B6.hasOwnProperty(_0x20574)) {
                                    _0x20553.call(_0x20511, _0x205B6[_0x20574], _0x20574, _0x205B6)
                                }
                            }
                        }
                    }
                }
            };
            return _0x205B6
        }
    
        function _0x20973(_0x20511, _0x20532) {
            _0x20532 = _0x20532 || "_";
            return _0x20511.replace(_0x20994, function(_0x20511, _0x20553) {
                return (_0x20553 ? _0x20532 : "") + _0x20511.toLowerCase()
            })
        }
    
        function _0x208AD(_0x20511) {
            if (!_0x20A39.isString(_0x20511)) {
                return false
            };
            return _0x205B6.test(_0x20511.trim())
        }
    
        function _0x205F8(_0x20574) {
            var _0x20511, _0x20532, _0x20553;
            for (_0x20532 = 1; _0x20532 < arguments.length; _0x20532++) {
                _0x20511 = arguments[_0x20532];
                for (_0x20553 in _0x20511) {
                    if (_0x20511.hasOwnProperty(_0x20553)) {
                        if (_0x20829(_0x20574[_0x20553]) && !_0x207C6(_0x20574[_0x20553]) && _0x20829(_0x20511[_0x20553])) {
                            _0x20574[_0x20553] = _0x205F8({}, _0x20574[_0x20553], _0x20511[_0x20553])
                        } else {
                            _0x20574[_0x20553] = _0x20511[_0x20553]
                        }
                    }
                }
            };
            return _0x20574
        }
    
        function _0x20532(_0x20511) {
            return _0x20511.charAt(0).toUpperCase() + _0x20511.slice(1)
        }
    
        function _0x20574(_0x20511) {
            return _0x20511.charAt(0).toLowerCase() + _0x20511.slice(1)
        }
    
        function _0x209F7(_0x20511, _0x20553) {
            var _0x20532 = [];
            _0x20511.forEach(function(_0x20574, _0x20511) {
                var _0x20595 = _0x20553(_0x20574, _0x20511);
                if (_0x20A39.isDefined(_0x20595)) {
                    _0x20532.push(_0x20595)
                }
            });
            return _0x20532
        }
    
        function _0x209D6(_0x20553, _0x20511) {
            var _0x20532 = _0x20553 + "";
            _0x20511 = _0x20A39.isNumber(_0x20511) ? _0x20511 : 0;
            _0x20553 = _0x20A39.isNumber(_0x20553) ? _0x20553 : parseInt(_0x20553, 10);
            if (_0x20A39.isNumber(_0x20553) && !isNaN(_0x20553)) {
                _0x20532 = _0x20553 + "";
                while (_0x20532.length < _0x20511) {
                    _0x20532 = "0" + _0x20532
                };
                return _0x20532
            };
            return NaN + ""
        }
    
        function _0x209B5(_0x20511, _0x20532) {
            var _0x20553 = new Date().getTime() - (_0x20532 + 1);
            return function() {
                var _0x20574 = new Date().getTime();
                if ((_0x20574 - _0x20553) >= _0x20532) {
                    _0x20553 = _0x20574;
                    _0x20511.apply(this, arguments)
                }
            }
        }
    
        function _0x20553(_0x20511, _0x20553) {
            var _0x20532;
            return function() {
                if (_0x20532) {
                    clearTimeout(_0x20532)
                };
                _0x20532 = setTimeout(function() {
                    _0x20511.apply(this, arguments);
                    _0x20532 = undefined
                }, _0x20553)
            }
        }
    
        function _0x20A18(_0x205B6, _0x20574, _0x20553) {
            var _0x20511 = _0x20574(_0x205B6);
            for (var _0x20595 = 0; _0x20595 < _0x20511.length; _0x20595++) {
                if (_0x20553(_0x20511[_0x20595])) {
                    return _0x20511[_0x20595]
                } else {
                    var _0x20532 = _0x20A18(_0x20511[_0x20595], _0x20574, _0x20553);
                    if (_0x20532) {
                        return _0x20532
                    }
                }
            }
        }
    
        function _0x20595(_BIGARRAY) {
            return function() {
                return _BIGARRAY
            }
        }
    
        function _0x20763(_0x20511) {
            if (_0x20A39.isNumber(_0x20511)) {
                _0x20511 = _0x20511 + ""
            };
            if (!_0x20A39.isString(_0x20511)) {
                return false
            };
            return _0x20808.test(_0x20511.trim())
        }
    
        function _0x2084A() {
            var _0x20511 = _0x20A39.getInternetExplorerVersion(navigator);
            if (_0x20511 === -1) {
                return false
            };
            return _0x20511 < 10
        }
    
        function _0x2063A(_0x20511) {
            var _0x20574 = -1;
            if (_0x20511.appName == "Microsoft Internet Explorer") {
                var _0x20595 = _0x20511.userAgent;
                var _0x20532 = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                var _0x20553 = _0x20532.exec(_0x20595);
                if (_0x20553 !== null) {
                    _0x20574 = parseFloat(_0x20553[1])
                }
            };
            return _0x20574
        }
    
        function _0x20721() {
            return /iP(hone|ad)/ .test(_0x20A39._UA)
        }
    
        function _0x20784() {
            return /iP(hone|ad|od)|Android|Windows Phone/ .test(_0x20A39._UA)
        }
    
        function _0x20742() {
            return /iP(hone|od)/ .test(_0x20A39._UA)
        }
    
        function _0x2065B() {
            return /Android/ .test(_0x20A39._UA)
        }
        var _0x20A39 = {
            _UA: navigator.userAgent,
            noop: _0x20931,
            isNull: _0x207C6,
            isDefined: _0x206BE,
            isUndefined: _0x2088C,
            isObject: _0x20829,
            isFunction: _0x20700,
            isNumber: _0x207E7,
            isWindow: _0x208CE,
            isArray: _0x2067C,
            isArrayLike: _0x2069D,
            isString: _0x2086B,
            isEmptyString: _0x206DF,
            isNotEmptyString: _0x207A5,
            arrayLikeObjToArray: _0x20511,
            forEach: _0x20619,
            snake_case: _0x20973,
            isValidEmail: _0x208AD,
            extend: _0x205F8,
            capitalize: _0x20532,
            decapitalize: _0x20574,
            transformArray: _0x209F7,
            toFixedDigits: _0x209D6,
            throttle: _0x209B5,
            debounce: _0x20553,
            treeSearch: _0x20A18,
            echoFn: _0x20595,
            isISO8601: _0x20763,
            isOldIE: _0x2084A,
            getInternetExplorerVersion: _0x2063A,
            isIDevice: _0x20721,
            isMobile: _0x20784,
            isIPhone: _0x20742,
            isAndroid: _0x2065B
        };
        _0x208EF.exports = _0x20A39
    }
    
    function _0x20BE6(_0x20619, _0x205D7, _0x20553) {
        "use strict";
        var _0x2067C = _0x20619("./utilityFunctions");
        var _0x2069D = {};
        _0x2069D.strToXMLDoc = function _0x2063A(_0x20553) {
            if (typeof window.DOMParser === "undefined") {
                var _0x20574 = new ActiveXObject("Microsoft.XMLDOM");
                _0x20574.async = false;
                _0x20574.loadXML(_0x20553);
                return _0x20574
            };
            return _0x20532(_0x20553);
    
            function _0x20532(_0x20574) {
                var _0x20553 = new DOMParser();
                var _0x20532;
                try {
                    _0x20532 = _0x20553.parseFromString(_0x20574, "application/xml");
                    if (_0x20511(_0x20532) || _0x2067C.isEmptyString(_0x20574)) {
                        throw new Error()
                    }
                } catch (e) {
                    throw new Error("xml.strToXMLDOC: Error parsing the string: '" + _0x20574 + "'")
                };
                return _0x20532
            }
    
            function _0x20511(_0x20532) {
                try {
                    var _0x20553 = new DOMParser(),
                        _0x20511 = _0x20553.parseFromString("INVALID", "text/xml"),
                        _0x20574 = _0x20511.getElementsByTagName("parsererror")[0].namespaceURI;
                    if (_0x20574 === "http://www.w3.org/1999/xhtml") {
                        return _0x20532.getElementsByTagName("parsererror").length > 0
                    };
                    return _0x20532.getElementsByTagNameNS(_0x20574, "parsererror").length > 0
                } catch (e) {}
            }
        };
        _0x2069D.parseText = function _0x205F8(_0x20511) {
            if (/^\s*$/ .test(_0x20511)) {
                return null
            };
            if (/^(?:true|false)$/i .test(_0x20511)) {
                return _0x20511.toLowerCase() === "true"
            };
            if (isFinite(_0x20511)) {
                return parseFloat(_0x20511)
            };
            if (_0x2067C.isISO8601(_0x20511)) {
                return new Date(_0x20511)
            };
            return _0x20511.trim()
        };
        _0x2069D.JXONTree = function _0x205B6(_0x205B6) {
            var _0x205D7 = _0x2069D.parseText;
            if (_0x205B6.documentElement) {
                return new _0x2069D.JXONTree(_0x205B6.documentElement)
            };
            if (_0x205B6.hasChildNodes()) {
                var _0x205F8 = "";
                for (var _0x20595, _0x20619, _0x2063A, _0x20553 = 0; _0x20553 < _0x205B6.childNodes.length; _0x20553++) {
                    _0x20595 = _0x205B6.childNodes.item(_0x20553);
                    if ((_0x20595.nodeType - 1 | 1) === 3) {
                        _0x205F8 += _0x20595.nodeType === 3 ? _0x20595.nodeValue.trim() : _0x20595.nodeValue
                    } else {
                        if (_0x20595.nodeType === 1 && !_0x20595.prefix) {
                            _0x20619 = _0x2067C.decapitalize(_0x20595.nodeName);
                            _0x2063A = new _0x2069D.JXONTree(_0x20595);
                            if (this.hasOwnProperty(_0x20619)) {
                                if (this[_0x20619].constructor !== Array) {
                                    this[_0x20619] = [this[_0x20619]]
                                };
                                this[_0x20619].push(_0x2063A)
                            } else {
                                this[_0x20619] = _0x2063A
                            }
                        }
                    }
                };
                if (_0x205F8) {
                    this.keyValue = _0x205D7(_0x205F8)
                }
            };
            var _0x20511 = typeof _0x205B6.hasAttributes === "undefined" ? _0x205B6.attributes.length > 0 : _0x205B6.hasAttributes();
            if (_0x20511) {
                var _0x20574;
                for (var _0x20532 = 0; _0x20532 < _0x205B6.attributes.length; _0x20532++) {
                    _0x20574 = _0x205B6.attributes.item(_0x20532);
                    this["@" + _0x2067C.decapitalize(_0x20574.name)] = _0x205D7(_0x20574.value.trim())
                }
            }
        };
        _0x2069D.JXONTree.prototype.attr = function(_0x20511) {
            return this["@" + _0x2067C.decapitalize(_0x20511)]
        };
        _0x2069D.toJXONTree = function _0x2065B(_0x20532) {
            var _0x20511 = _0x2069D.strToXMLDoc(_0x20532);
            return new _0x2069D.JXONTree(_0x20511)
        };
        _0x2069D.keyValue = function _0x20595(_0x20511) {
            if (_0x20511) {
                return _0x20511.keyValue
            };
            return undefined
        };
        _0x2069D.attr = function _0x20574(_0x20532, _0x20511) {
            if (_0x20532) {
                return _0x20532["@" + _0x2067C.decapitalize(_0x20511)]
            };
            return undefined
        };
        _0x2069D.encode = function _0x20532(_0x20511) {
            if (!_0x2067C.isString(_0x20511)) {
                return undefined
            };
            return _0x20511.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        };
        _0x2069D.decode = function _0x20511(_0x20511) {
            if (!_0x2067C.isString(_0x20511)) {
                return undefined
            };
            return _0x20511.replace(/&apos;/g, "'").replace(/&quot;/g, "\"").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&")
        };
        _0x205D7.exports = _0x2069D
    }
    
    function _0x20C07(_0x20553, _0x20532, _0x20511) {
        "use strict";
        _0x20553("./plugin/components/ads-label_4");
        _0x20553("./plugin/components/black-poster_4");
        var _0x20574 = _0x20553("./plugin/vqn.vast.vpaid");
        vqn.plugin("vastClient", _0x20574)
    }
    
    function _0x205B6(_0x205B6, _0x20532, _0x20574) {
        function _0x20595(_0x20619, _0x2063A) {
            if (!_0x20532[_0x20619]) {
                if (!_0x205B6[_0x20619]) {
                    var _0x20553 = typeof require == "function" && require;
                    if (!_0x2063A && _0x20553) {
                        return _0x20553(_0x20619, !0)
                    };
                    if (_0x20511) {
                        return _0x20511(_0x20619, !0)
                    };
                    var _0x205D7 = new Error("Cannot find module '" + _0x20619 + "'");
                    throw _0x205D7.code = "MODULE_NOT_FOUND", _0x205D7
                };
                var _0x205F8 = _0x20532[_0x20619] = {
                    exports: {}
                };
                _0x205B6[_0x20619][0].call(_0x205F8.exports, function(_BIGARRAY) {
                    var _0x20511 = _0x205B6[_0x20619][1][_BIGARRAY];
                    return _0x20595(_0x20511 ? _0x20511 : _BIGARRAY)
                }, _0x205F8, _0x205F8.exports, e, _0x205B6, _0x20532, _0x20574)
            };
            return _0x20532[_0x20619].exports
        }
        var _0x20511 = typeof require == "function" && require;
        for (var _0x20553 = 0; _0x20553 < _0x20574.length; _0x20553++) {
            _0x20595(_0x20574[_0x20553])
        };
        return _0x20595
    }(_0x20511)();
    !_0x20532(this), _0x20553(this, this.vttjs || {}), _0x20574(this, this.vttjs || {}), _0x20595(this, this.vttjs || {});
    (_0x205B6)({
        1: [_0x205D7, {}],
        2: [_0x205F8, {
            "./IVPAIDAdUnit": 1
        }],
        3: [_0x20619, {
            "./VPAIDAdUnit": 2,
            "./flashTester.js": 4,
            "./jsFlashBridge": 5,
            "./utils": 8,
            "swfobject": 14
        }],
        4: [_0x2063A, {
            "./jsFlashBridge": 5,
            "./registry": 7,
            "./utils": 8,
            "swfobject": 14
        }],
        5: [_0x2065B, {
            "./jsFlashBridgeRegistry": 6,
            "./registry": 7,
            "./utils": 8
        }],
        6: [_0x2067C, {
            "./registry": 7
        }],
        7: [_0x2069D, {}],
        8: [_0x206BE, {}],
        9: [_0x206DF, {}],
        10: [_0x20700, {
            "./IVPAIDAdUnit": 9,
            "./subscriber": 12,
            "./utils": 13
        }],
        11: [_0x20721, {
            "./VPAIDAdUnit": 10,
            "./utils": 13
        }],
        12: [_0x20742, {}],
        13: [_0x20763, {}],
        14: [_0x20784, {}],
        15: [_0x207A5, {
            "./InLine": 18,
            "./Wrapper": 28
        }],
        16: [_0x207C6, {
            "../../utils/consoleLogger": 41,
            "../../utils/utilityFunctions": 47,
            "../../utils/xml": 48,
            "./TrackingEvent": 21
        }],
        17: [_0x207E7, {
            "../../utils/utilityFunctions": 47,
            "./Companion": 16,
            "./Linear": 19
        }],
        18: [_0x20808, {
            "../../utils/utilityFunctions": 47,
            "../../utils/xml": 48,
            "./Creative": 17,
            "./vastUtil": 30
        }],
        19: [_0x20829, {
            "../../utils/utilityFunctions": 47,
            "../../utils/xml": 48,
            "./MediaFile": 20,
            "./TrackingEvent": 21,
            "./VideoClicks": 27,
            "./parsers": 29
        }],
        20: [_0x2084A, {
            "../../utils/xml": 48,
            "./vastUtil": 30
        }],
        21: [_0x2086B, {
            "../../utils/xml": 48,
            "./parsers": 29
        }],
        22: [_0x2088C, {
            "../../utils/async": 40,
            "../../utils/consoleLogger": 41,
            "../../utils/http": 43,
            "../../utils/utilityFunctions": 47,
            "../../utils/xml": 48,
            "./Ad": 15,
            "./VASTError": 23,
            "./VASTResponse": 25,
            "./vastUtil": 30
        }],
        23: [_0x208AD, {}],
        24: [_0x208CE, {
            "../../utils/async": 40,
            "../../utils/consoleLogger": 41,
            "../../utils/dom": 42,
            "../../utils/playerUtils": 45,
            "../../utils/utilityFunctions": 47,
            "./VASTError": 23,
            "./VASTResponse": 25,
            "./VASTTracker": 26,
            "./vastUtil": 30
        }],
        25: [_0x208EF, {
            "../../utils/utilityFunctions": 47,
            "../../utils/xml": 48,
            "./Ad": 15,
            "./InLine": 18,
            "./Linear": 19,
            "./VideoClicks": 27,
            "./Wrapper": 28
        }],
        26: [_0x20910, {
            "../../utils/utilityFunctions": 47,
            "./VASTError": 23,
            "./VASTResponse": 25,
            "./vastUtil": 30
        }],
        27: [_0x20931, {
            "../../utils/utilityFunctions": 47,
            "../../utils/xml": 48
        }],
        28: [_0x20952, {
            "../../utils/utilityFunctions": 47,
            "../../utils/xml": 48,
            "./Creative": 17,
            "./vastUtil": 30
        }],
        29: [_0x20973, {
            "../../utils/utilityFunctions": 47
        }],
        30: [_0x20994, {
            "../../utils/utilityFunctions": 47,
            "../vpaid/VPAIDFlashTech": 32,
            "../vpaid/VPAIDHTML5Tech": 33,
            "VPAIDFLASHClient/js/VPAIDFLASHClient": 3
        }],
        31: [_0x209B5, {
            "../../utils/utilityFunctions": 47,
            "../vast/VASTError": 23
        }],
        32: [_0x209D6, {
            "../../utils/consoleLogger": 41,
            "../../utils/dom": 42,
            "../../utils/mimetypes": 44,
            "../../utils/utilityFunctions": 47,
            "../vast/VASTError": 23,
            "VPAIDFLASHClient/js/VPAIDFLASHClient": 3
        }],
        33: [_0x209F7, {
            "../../utils/consoleLogger": 41,
            "../../utils/dom": 42,
            "../../utils/mimetypes": 44,
            "../../utils/utilityFunctions": 47,
            "../vast/VASTError": 23,
            "VPAIDHTML5Client/js/VPAIDHTML5Client": 11
        }],
        34: [_0x20A18, {
            "../../utils/async": 40,
            "../../utils/consoleLogger": 41,
            "../../utils/dom": 42,
            "../../utils/mimetypes": 44,
            "../../utils/playerUtils": 45,
            "../../utils/utilityFunctions": 47,
            "../vast/VASTError": 23,
            "../vast/VASTResponse": 25,
            "../vast/VASTTracker": 26,
            "../vast/vastUtil": 30,
            "./VPAIDAdUnitWrapper": 31
        }],
        35: [_0x20A39, {
            "../../utils/dom": 42
        }],
        36: [_0x20A5A, {
            "./ads-label": 35
        }],
        37: [_0x20A7B, {}],
        38: [_0x20A9C, {
            "./black-poster": 37
        }],
        39: [_0x20ABD, {
            "../ads/vast/VASTClient": 22,
            "../ads/vast/VASTError": 23,
            "../ads/vast/VASTIntegrator": 24,
            "../ads/vast/vastUtil": 30,
            "../ads/vpaid/VPAIDIntegrator": 34,
            "../utils/async": 40,
            "../utils/consoleLogger": 41,
            "../utils/dom": 42,
            "../utils/playerUtils": 45,
            "../utils/utilityFunctions": 47
        }],
        40: [_0x20ADE, {
            "./utilityFunctions": 47
        }],
        41: [_0x20AFF, {}],
        42: [_0x20B20, {
            "./utilityFunctions": 47
        }],
        43: [_0x20B41, {
            "./urlUtils": 46,
            "./utilityFunctions": 47
        }],
        44: [_0x20B62, {}],
        45: [_0x20B83, {
            "./dom": 42,
            "./utilityFunctions": 47
        }],
        46: [_0x20BA4, {
            "./utilityFunctions": 47
        }],
        47: [_0x20BC5, {}],
        48: [_0x20BE6, {
            "./utilityFunctions": 47
        }],
        49: [_0x20C07, {
            "./plugin/components/ads-label_4": 36,
            "./plugin/components/black-poster_4": 38,
            "./plugin/vqn.vast.vpaid": 39
        }]
    }, {}, [49]);
  return 9057
}();
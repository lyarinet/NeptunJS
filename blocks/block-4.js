var bar, slider, ats, nepVolume, NJSVolume, volumeContr, startSlide, moveSlide, stopSlide, RA, _sswqwr7, _zsqqwe32, _nbxyqu778, _kkauyq554, _pposiqu87, _shyuu8897, _juyqtdu77, _jjkhyu95, _psdqaq78; + function() {
    function _0x13E1B(_0x13E1B) {
        _0x13E1B = _0x13E1B || window.event;
        var _0x13E47 = ((((_0x13E1B.clientX - bar.offset().left) / bar.outerWidth())).toFixed(2));
        nepVolume = _0x13E47;
        bar[0].addEventListener("mousemove", _0x13E73);
        if (nepVolume < 0.70) {
            Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-high");
            Neptq("." + NCSS + "volume").addClass("nep-icon-volume-medium");
            Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-low")
        };
        if (nepVolume > 0.70) {
            Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-medium");
            Neptq("." + NCSS + "volume").addClass("nep-icon-volume-high")
        };
        if (nepVolume < 0.30) {
            Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-medium");
            Neptq("." + NCSS + "volume").addClass("nep-icon-volume-low");
            Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-mute2")
        };
        if (nepVolume < 0.05) {
            nepVolume = 0;
            Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-low");
            Neptq("." + NCSS + "volume").addClass("nep-icon-volume-mute2")
        };
        slider.css("width", "" + (_0x13E47 * 100) + "%");
        sliderIcon.css("left", "" + (_0x13E47 * 100) + "%");
        if (_0x13E47 * 100 > 100) {
            nepVolume = 1.00;
            sliderIcon.css("left", "100%")
        };
        if (_0x13E47 * 100 < 0) {
            nepVolume = 0.00;
            sliderIcon.css("left", "0%")
        };
        localStorage.setItem("NJSVolume", JSON.stringify(nepVolume))
    }
    
    function _0x13E47(_BIGARRAY) {
        _0x13E1B(_BIGARRAY)
    }
    
    function _0x13E73(_BIGARRAY) {
        _0x13E1B(_BIGARRAY)
    }
    
    function _0x13E9F(_0x13E1B) {
        bar[0].removeEventListener("mousemove", _0x13E73)
    }
    
    function _0x13ECB() {
        if (RA.context.currentTime) {
            RA.startTime = window.performance.now() - RA.context.currentTime * 1e3;
            Neptune.resumeMainLoop()
        } else {
            window.setTimeout(RA.setStartTime, 0)
        }
    }
    
    function _0x13EF7() {
        if (RA.startTime) {
            return (window.performance.now() - RA.startTime) / 1e3
        } else {
            throw "getCurrentPerfTime() called before start time set"
        }
    }
    
    function _0x13F23(_0x13E9F) {
        var _0x13E47 = RA.getCurrentPerfTime();
        for (var _0x13E73 = 0; _0x13E73 < RA.bufIndex; _0x13E73++) {
            if (RA.buffers[_0x13E73].endTime < _0x13E47) {
                var _0x13E1B = RA.buffers.splice(_0x13E73, 1);
                RA.buffers[RA.numBuffers - 1] = _0x13E1B[0];
                _0x13E73--;
                RA.bufIndex--
            }
        }
    }
    
    function _0x13F4F(_0x13E1B, _0x13ECB) {
        var _0x13E47 = 0;
        var _0x13E73 = RA.buffers[RA.bufIndex].getChannelData(0);
        var _0x13E9F = RA.buffers[RA.bufIndex].getChannelData(1);
        while (_0x13ECB && RA.bufOffset !== RA.BUFFER_SIZE) {
            _0x13E73[RA.bufOffset] = HEAPF32[_0x13E1B + _0x13E47 * 8 >> 2];
            _0x13E9F[RA.bufOffset] = HEAPF32[_0x13E1B + (_0x13E47 * 8 + 4) >> 2];
            RA.bufOffset++;
            _0x13E47++;
            _0x13ECB--
        };
        return _0x13E47
    }
    
    function _0x13F7B() {
        var _0x13E47 = RA.bufIndex;
        var _0x13E73;
        if (RA.bufIndex) {
            _0x13E73 = RA.buffers[RA.bufIndex - 1].endTime
        } else {
            _0x13E73 = RA.context.currentTime
        };
        RA.buffers[_0x13E47].endTime = _0x13E73 + RA.buffers[_0x13E47].duration;
        const _0x13E1B = RA.context.createBufferSource();
        _0x13E1B.buffer = RA.buffers[_0x13E47];
        ats = RA.context.createGain();
        _0x13E1B.connect(ats);
        ats.connect(RA.context.destination);
        if (jscd.browser === "Microsoft Edge" || jscd.browser === "Chrome" && jscd.browserMajorVersion <= 60 || jscd.browser === "Firefox" && jscd.browserMajorVersion <= 56 || jscd.browser === "Opera" && jscd.browserMajorVersion <= 44) {
            ats.gain.value = nepVolume
        } else {
            ats.gain.setTargetAtTime(nepVolume, RA.context.currentTime, 0)
        };
        _0x13E1B.start(_0x13E73);
        RA.bufIndex++;
        RA.bufOffset = 0
    }
    
    function _0x13FA7() {
        do {
            RA.process()
        } while (RA.bufIndex === RA.numBuffers - 1);
    }
    
    function _0x13FD3() {
        return RA.numBuffers * RA.BUFFER_SIZE + RA.BUFFER_SIZE
    }
    
    function _0x13FFF(_0x13E1B) {
        RA.nonblock = _0x13E1B
    }
    
    function _0x1402B() {
        RA.bufIndex = 0;
        RA.bufOffset = 0;
        return true
    }
    
    function _0x14057() {
        return true
    }
    
    function _0x14083(_0x13E1B, _0x13ECB) {
        RA.process();
        var _0x13E9F = _0x13ECB / 8;
        var _0x13E47 = 0;
        while (_0x13E9F) {
            var _0x13E73 = RA.fillBuffer(_0x13E1B, _0x13E9F);
            _0x13E9F -= _0x13E73;
            _0x13E47 += _0x13E73;
            _0x13E1B += _0x13E73 * 8;
            if (RA.bufOffset === RA.BUFFER_SIZE) {
                if (RA.bufIndex === RA.numBuffers - 1) {
                    if (RA.nonblock) {
                        break
                    } else {
                        RA.block()
                    }
                };
                RA.queueAudio()
            }
        };
        return _0x13E47 * 8
    }
    
    function _0x140AF(_0x13E73) {
        var _0x13E1B = window.AudioContext || window.webkitAudioContext;
        RA.context = new _0x13E1B;
        RA.numBuffers = _0x13E73 * RA.context.sampleRate / (1e3 * RA.BUFFER_SIZE) | 0;
        if (RA.numBuffers < 2) {
            RA.numBuffers = 2
        };
        for (var _0x13E47 = 0; _0x13E47 < RA.numBuffers; _0x13E47++) {
            RA.buffers[_0x13E47] = RA.context.createBuffer(2, RA.BUFFER_SIZE, RA.context.sampleRate)
        };
        RA.nonblock = false;
        RA.startTime = 0;
        window.setTimeout(RA.setStartTime, 0);
        Neptune.pauseMainLoop();
        return 1
    }
    
    function _0x140DB() {
        return RA.context.sampleRate
    }
    
    function _0x14107() {
        RA.bufIndex = 0;
        RA.bufOffset = 0;
        return
    }
    
    function _0x14133() {
        RA.process();
        return ((RA.numBuffers - RA.bufIndex) * RA.BUFFER_SIZE - RA.bufOffset) * 8
    }
    volumeContr = _0x13E1B;
    startSlide = _0x13E47;
    moveSlide = _0x13E73;
    stopSlide = _0x13E9F;
    _sswqwr7 = _0x13FD3;
    _zsqqwe32 = _0x13FFF;
    _nbxyqu778 = _0x1402B;
    _kkauyq554 = _0x14057;
    _pposiqu87 = _0x14083;
    _shyuu8897 = _0x140AF;
    _juyqtdu77 = _0x140DB;
    _jjkhyu95 = _0x14107;
    _psdqaq78 = _0x14133;
    if (netp === 1) {
        if (neptunPlatform === null || ltm === false) {} else {
            bar = Neptq("#" + NCSS + "bar");
            slider = Neptq("#" + NCSS + "slider");
            sliderIcon = Neptq("#volumeicon");
            bar[0].addEventListener("mousedown", _0x13E47);
            document.addEventListener("mouseup", _0x13E9F);
            NJSVolume = JSON.parse(localStorage.getItem("NJSVolume"));
            if (NJSVolume === null) {
                nepVolume = 1
            } else {
                nepVolume = NJSVolume;
                if (nepVolume < 0.70) {
                    Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-high");
                    Neptq("." + NCSS + "volume").addClass("nep-icon-volume-medium");
                    Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-low")
                };
                if (nepVolume > 0.70) {
                    Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-medium");
                    Neptq("." + NCSS + "volume").addClass("nep-icon-volume-high")
                };
                if (nepVolume < 0.30) {
                    Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-medium");
                    Neptq("." + NCSS + "volume").addClass("nep-icon-volume-low");
                    Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-mute2")
                };
                if (nepVolume < 0.05) {
                    nepVolume = 0;
                    Neptq("." + NCSS + "volume").removeClass("nep-icon-volume-low");
                    Neptq("." + NCSS + "volume").addClass("nep-icon-volume-mute2")
                };
                slider.css("width", "" + (nepVolume * 100) + "%");
                sliderIcon.css("left", "" + (nepVolume * 100) + "%")
            };
            RA = {
                BUFFER_SIZE: 2048,
                context: null,
                buffers: [],
                numBuffers: 0,
                bufIndex: 0,
                bufOffset: 0,
                startTime: 0,
                nonblock: false,
                currentTimeWorkaround: false,
                setStartTime: (_0x13ECB),
                getCurrentPerfTime: (_0x13EF7),
                process: (_0x13F23),
                fillBuffer: (_0x13F4F),
                queueAudio: (_0x13F7B),
                block: (_0x13FA7)
            };
        }
    };
    return 5006
}();